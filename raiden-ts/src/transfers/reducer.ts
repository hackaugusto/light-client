import { isActionOf } from 'typesafe-actions';
import { get, set, unset, mapValues } from 'lodash/fp';
import { Zero } from 'ethers/constants';

import { RaidenState, initialState } from '../state';
import { RaidenAction } from '../actions';
import { Channel } from '../channels/state';
import { timed } from '../utils/types';
import { channelClosed } from '../channels/actions';
import { getBalanceProofFromEnvelopeMessage } from '../messages/utils';
import { SentTransfer } from './state';
import {
  transferSigned,
  transferSecret,
  transferProcessed,
  transferUnlocked,
  transferExpired,
  transferSecretReveal,
  transferRefunded,
  transferUnlockProcessed,
  transferExpireProcessed,
  transferClear,
} from './actions';
import { getLocksroot } from './utils';

/**
 * Handles all transfers actions and requests
 *
 * @param state  Current RaidenState
 * @param action  RaidenAction to handle
 * @returns New RaidenState (or current, if action didn't change anything)
 */
export function transfersReducer(
  state: RaidenState = initialState,
  action: RaidenAction,
): RaidenState {
  if (isActionOf(transferSecret, action)) {
    if (
      action.meta.secrethash in state.secrets &&
      state.secrets[action.meta.secrethash].registerBlock
    )
      return state; // avoid storing without registerBlock if we already got with
    return {
      ...state,
      secrets: {
        ...state.secrets,
        [action.meta.secrethash]: action.payload,
      },
    };
  } else if (isActionOf(transferSigned, action)) {
    const transfer = action.payload.message,
      lock = transfer.lock,
      secrethash = lock.secrethash;
    // transferSigned must be the first action, to init SentTransfer state
    if (secrethash in state.sent) return state;
    const channelPath = ['channels', transfer.token_network_address, transfer.recipient];
    let channel: Channel | undefined = get(channelPath, state);
    if (!channel) return state;

    const locks = [...(channel.own.locks || []), lock], // append lock
      locksroot = getLocksroot(locks);
    if (
      transfer.locksroot !== locksroot ||
      !transfer.nonce.eq(
        (channel.own.balanceProof ? channel.own.balanceProof.nonce : Zero).add(1),
      ) || // nonce must be next
      !transfer.transferred_amount.eq(
        channel.own.balanceProof ? channel.own.balanceProof.transferredAmount : Zero,
      ) ||
      !transfer.locked_amount.eq(
        (channel.own.balanceProof ? channel.own.balanceProof.lockedAmount : Zero).add(lock.amount),
      )
    )
      return state;

    channel = {
      ...channel,
      own: {
        ...channel.own,
        locks,
        // set current/latest channel.own.balanceProof to LockedTransfer's
        balanceProof: getBalanceProofFromEnvelopeMessage(transfer),
      },
    };
    const sentTransfer: SentTransfer = { transfer: timed(transfer) };

    state = set(channelPath, channel, state);
    state = set(['sent', secrethash], sentTransfer, state);
    return state;
  } else if (isActionOf(transferProcessed, action)) {
    if (!(action.meta.secrethash in state.sent)) return state;
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.meta.secrethash]: {
          ...state.sent[action.meta.secrethash],
          transferProcessed: timed(action.payload.message),
        },
      },
    };
  } else if (isActionOf(transferSecretReveal, action)) {
    if (!(action.meta.secrethash in state.sent) || state.sent[action.meta.secrethash].secretReveal)
      return state;
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.meta.secrethash]: {
          ...state.sent[action.meta.secrethash],
          secretReveal: timed(action.payload.message),
        },
      },
    };
  } else if (isActionOf(transferUnlocked, action)) {
    const unlock = action.payload.message,
      secrethash = action.meta.secrethash;
    if (!(secrethash in state.sent) || state.sent[secrethash].unlock) return state;
    const transfer = state.sent[secrethash].transfer[1],
      lock = transfer.lock;
    const channelPath = ['channels', transfer.token_network_address, transfer.recipient];
    let channel: Channel | undefined = get(channelPath, state);
    if (!channel || !channel.own.locks || !channel.own.balanceProof) return state;

    const locks = channel.own.locks.filter(l => l.secrethash !== secrethash),
      locksroot = getLocksroot(locks);
    if (
      unlock.locksroot !== locksroot ||
      !channel.own.balanceProof.nonce.add(1).eq(unlock.nonce) || // nonce must be next
      !unlock.transferred_amount.eq(channel.own.balanceProof.transferredAmount.add(lock.amount)) ||
      !unlock.locked_amount.eq(channel.own.balanceProof.lockedAmount.sub(lock.amount))
    )
      return state;

    channel = {
      ...channel,
      own: {
        ...channel.own,
        locks, // pop lock
        // set current/latest channel.own.balanceProof to Unlock's
        balanceProof: getBalanceProofFromEnvelopeMessage(unlock),
      },
    };
    const sentTransfer: SentTransfer = { ...state.sent[secrethash], unlock: timed(unlock) };

    state = set(channelPath, channel, state);
    state = set(['sent', secrethash], sentTransfer, state);
    return state;
  } else if (isActionOf(transferUnlockProcessed, action)) {
    if (!(action.meta.secrethash in state.sent)) return state;
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.meta.secrethash]: {
          ...state.sent[action.meta.secrethash],
          unlockProcessed: timed(action.payload.message),
        },
      },
    };
  } else if (isActionOf(transferExpired, action)) {
    const lockExpired = action.payload.message,
      secrethash = action.meta.secrethash;
    if (
      !(secrethash in state.sent) ||
      state.sent[secrethash].unlock || // don't accept expire if already unlocked
      state.sent[secrethash].lockExpired // already expired
    )
      return state;
    const transfer = state.sent[secrethash].transfer[1],
      lock = transfer.lock;
    const channelPath = ['channels', transfer.token_network_address, transfer.recipient];
    let channel: Channel | undefined = get(channelPath, state);
    if (!channel || !channel.own.locks || !channel.own.balanceProof) return state;

    const locks = channel.own.locks.filter(l => l.secrethash !== secrethash),
      locksroot = getLocksroot(locks);
    if (
      lockExpired.locksroot !== locksroot ||
      !channel.own.balanceProof.nonce.add(1).eq(lockExpired.nonce) || // nonce must be next
      !lockExpired.transferred_amount.eq(channel.own.balanceProof.transferredAmount) ||
      !lockExpired.locked_amount.eq(channel.own.balanceProof.lockedAmount.sub(lock.amount))
    )
      return state;

    channel = {
      ...channel,
      own: {
        ...channel.own,
        locks, // pop lock
        // set current/latest channel.own.balanceProof to LockExpired's
        balanceProof: getBalanceProofFromEnvelopeMessage(lockExpired),
      },
    };
    const sentTransfer: SentTransfer = {
      ...state.sent[secrethash],
      lockExpired: timed(lockExpired),
    };

    state = set(channelPath, channel, state);
    state = set(['sent', secrethash], sentTransfer, state);
    return state;
  } else if (isActionOf(transferExpireProcessed, action)) {
    if (!(action.meta.secrethash in state.sent)) return state;
    return {
      ...state,
      sent: {
        ...state.sent,
        [action.meta.secrethash]: {
          ...state.sent[action.meta.secrethash],
          lockExpiredProcessed: timed(action.payload.message),
        },
      },
    };
  } else if (isActionOf(transferRefunded, action)) {
    const refund = action.payload.message,
      secrethash = action.meta.secrethash,
      channelPath = ['channels', refund.token_network_address, refund.initiator];
    let channel: Channel | undefined = get(channelPath, state);
    if (!(secrethash in state.sent) || !channel) return state;

    const sentTransfer: SentTransfer = { ...state.sent[secrethash], refund: timed(refund) };

    state = set(channelPath, channel, state);
    state = set(['sent', secrethash], sentTransfer, state);
    return state;
  } else if (isActionOf(channelClosed, action)) {
    return {
      ...state,
      sent: mapValues(
        (v: SentTransfer): SentTransfer =>
          // if transfer was on this channel, persist CloseChannel txHash, else pass
          v.transfer[1].channel_identifier.eq(action.payload.id)
            ? { ...v, channelClosed: timed(action.payload.txHash) }
            : v,
      )(state.sent),
    };
  } else if (isActionOf(transferClear, action)) {
    if (!(action.meta.secrethash in state.sent)) return state;
    state = unset(['sent', action.meta.secrethash], state);
    state = unset(['secrets', action.meta.secrethash], state);
    return state;
  } else return state;
}