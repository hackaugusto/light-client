(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-320b3e6a"],{"248b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"backup-state"},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"backup-state__description",attrs:{cols:"12"}},[t._v(" "+t._s(t.$t("backup-state.description"))+" ")])],1),o("v-list",{staticClass:"backup-state__buttons"},[o("v-tooltip",{attrs:{color:"#ea6464",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("div",t._g({},t.isConnected?null:r),[o("v-list-item",{staticClass:"backup-state__buttons__download-state",attrs:{disabled:!t.isConnected},on:{click:function(e){t.downloadState=!0}}},[o("div",{staticClass:"backup-state__buttons__download-state__icon",class:{"backup-state__buttons__download-state__icon disabled-icon":!t.isConnected}},[o("v-img",{attrs:{src:n("e038")}})],1),o("v-list-item-content",[o("div",{staticClass:"backup-state__buttons__download-state__title"},[t._v(" "+t._s(t.$t("backup-state.download"))+" ")])])],1)],1)]}}])},[o("span",[t._v(t._s(t.$t("backup-state.disabled-download")))])]),o("v-tooltip",{attrs:{color:"#ea6464",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("div",t._g({},t.isConnected?r:null),[o("v-list-item",{staticClass:"backup-state__buttons__upload-state",on:{click:function(e){t.uploadState=!0}}},[o("div",{staticClass:"backup-state__buttons__upload-state__icon",class:{"backup-state__buttons__upload-state__icon disabled-icon":t.isConnected}},[o("v-img",{attrs:{src:n("3549")}})],1),o("v-list-item-content",[o("div",{staticClass:"backup-state__buttons__upload-state__title"},[t._v(" "+t._s(t.$t("backup-state.upload"))+" ")])])],1)],1)]}}])},[o("span",[t._v(t._s(t.$t("backup-state.disabled-upload")))])])],1),o("download-state-dialog",{attrs:{visible:t.downloadState},on:{cancel:function(e){t.downloadState=!1}}}),o("upload-state-dialog",{attrs:{visible:t.uploadState},on:{cancel:function(e){t.uploadState=!1}}})],1)},r=[],a=n("9ab4"),c=n("60a3"),i=n("2f62"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("raiden-dialog",{staticClass:"download-state",attrs:{visible:t.visible},on:{close:t.cancel}},[o("v-card-title",[t._v(" "+t._s(t.$t("backup-state.download"))+" ")]),o("v-card-text",[o("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[o("v-col",{attrs:{cols:"6"}},[o("v-img",{staticClass:"download-state__warning",attrs:{src:n("afb7")}})],1),o("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.$t("backup-state.download-warning"))+" ")])],1)],1),o("v-card-actions",[o("action-button",{attrs:{enabled:"","full-width":"",text:t.$t("backup-state.download-button")},on:{click:function(e){return t.getAndDownloadState()}}})],1)],1)},u=[],l=n("4795"),p=n.n(l),f=n("66bc"),d=n("750b"),b=n("152b");function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e,n,o,r,a,c){try{var i=t[a](c),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(o,r)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function c(t){_(a,o,r,c,i,"next",t)}function i(t){_(a,o,r,c,i,"throw",t)}c(void 0)}))}}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function m(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){var e=C();return function(){var n,o=D(t);if(e){var r=D(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var P=function(){var t=function(t){m(n,t);var e=j(n);function n(){return g(this,n),e.apply(this,arguments)}return w(n,[{key:"cancel",value:function(){}},{key:"getAndDownloadState",value:function(){var t=y(p.a.mark((function t(){var e,n,o,r,a,c;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.navigateToHome(),t.next=3,this.$raiden.getState();case 3:e=t.sent,n=JSON.stringify(e),o="raiden_lc_state_".concat((new Date).toISOString(),".json"),r=new File([n],o,{type:"application/json"}),a=URL.createObjectURL(r),c=document.createElement("a"),c.href=a,c.download=o,c.style.display="none",document.body.appendChild(c),c.click(),setTimeout((function(){URL.revokeObjectURL(a),document.body.removeChild(c)}),0);case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(Object(c["c"])(b["a"]));return Object(a["b"])([Object(c["d"])({required:!0,type:Boolean,default:!1})],t.prototype,"visible",void 0),Object(a["b"])([Object(c["b"])()],t.prototype,"cancel",null),t=Object(a["b"])([Object(c["a"])({components:{RaidenDialog:f["a"],ActionButton:d["a"]}})],t),t}(),z=P,R=z,E=(n("2597"),n("2877")),x=n("6544"),V=n.n(x),$=n("99d9"),T=n("62ad"),L=n("adda"),I=n("0fd9"),A=Object(E["a"])(R,s,u,!1,null,"eb26b892",null),U=A.exports;V()(A,{VCardActions:$["a"],VCardText:$["c"],VCardTitle:$["d"],VCol:T["a"],VImg:L["a"],VRow:I["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("raiden-dialog",{staticClass:"upload-state",attrs:{visible:t.visible},on:{close:t.cancel}},[n("v-card-title",[t._v(t._s(t.$t("backup-state.upload")))]),t.dropzoneErrorMessage?n("v-card-text",[n("v-row",{staticClass:"upload-state__error",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-error"))+" ")])],1):t.uploadingStateProgress?n("v-card-actions",[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-progress-circular",{staticClass:"upload-state__progress",attrs:{size:110,width:7,indeterminate:""}})],1)],1):n("v-card-actions",[n("div",{staticClass:"upload-state__dropzone",class:{"upload-state__dropzone active-dropzone":t.activeDropzone},on:{dragenter:t.onDropzoneEnter,dragleave:t.onDropzoneLeave,dragover:function(t){t.preventDefault()},drop:t.onDropzoneDrop}},[n("v-row",{staticClass:"upload-state__dropzone__icon",attrs:{justify:"center","no-gutters":""}},[n("v-icon",{staticClass:"upload-state__dropzone__icon--inactive-dropzone",class:{"upload-state__dropzone__icon--active-dropzone":t.activeDropzone},attrs:{size:"90px"}},[t._v(" mdi-upload ")])],1),n("v-row",{staticClass:"upload-state__dropzone__description",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-drag-and-drop"))+" ")]),n("v-row",{staticClass:"upload-state__dropzone__description",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-divider"))+" ")]),n("v-row",{staticClass:"upload-state__dropzone__button"},[n("input",{ref:"stateInput",attrs:{type:"file",hidden:""},on:{change:t.onFileSelect}}),n("action-button",{attrs:{enabled:!t.activeDropzone,ghost:"",text:t.$t("backup-state.upload-button")},on:{click:function(e){return t.$refs.stateInput.click()}}})],1)],1)])],1)},F=[];function J(t){return J="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function N(t,e,n){return e&&q(t.prototype,e),n&&q(t,n),t}function H(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}function G(t,e){return G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},G(t,e)}function K(t){var e=X();return function(){var n,o=Y(t);if(e){var r=Y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Q(this,n)}}function Q(t,e){return!e||"object"!==J(e)&&"function"!==typeof e?W(t):e}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}var Z=function(){var t=function(t){H(n,t);var e=K(n);function n(){var t;return M(this,n),t=e.apply(this,arguments),t.dragCount=0,t.activeDropzone=!1,t.dropzoneErrorMessage=!1,t.uploadingStateProgress=!1,t}return N(n,[{key:"cancel",value:function(){}},{key:"onDropzoneEnter",value:function(t){t.preventDefault(),this.dragCount++,this.activeDropzone=!0}},{key:"onDropzoneLeave",value:function(t){t.preventDefault(),this.dragCount--,this.dragCount<=0&&(this.activeDropzone=!1)}},{key:"onDropzoneDrop",value:function(t){var e,n;if(t.preventDefault(),this.activeDropzone=!1,null===(e=t.dataTransfer)||void 0===e?void 0:e.files){var o=null===(n=t.dataTransfer)||void 0===n?void 0:n.files;this.uploadState(o)}}},{key:"onFileSelect",value:function(t){if(t.target.files){var e=t.target.files;this.uploadState(e)}}},{key:"dropzoneError",value:function(){var t=this;this.uploadingStateProgress=!1,this.dropzoneErrorMessage=!0,setTimeout((function(){t.dropzoneErrorMessage=!1}),2e3)}},{key:"uploadState",value:function(t){var e=this;t.length>1&&this.dropzoneError();var n=new FileReader;n.onload=function(t){var n=t.target;if(t.target)try{e.uploadingStateProgress=!0;var o=n.result;JSON.parse(String(o)),e.$store.commit("backupState",o),setTimeout((function(){e.uploadingStateProgress=!1,e.cancel()}),1e3)}catch(r){e.dropzoneError()}},n.readAsText(t[0])}}]),n}(c["e"]);return Object(a["b"])([Object(c["d"])({required:!0,type:Boolean,default:!1})],t.prototype,"visible",void 0),Object(a["b"])([Object(c["b"])()],t.prototype,"cancel",null),t=Object(a["b"])([Object(c["a"])({components:{RaidenDialog:f["a"],ActionButton:d["a"]}})],t),t}(),tt=Z,et=tt,nt=(n("ec77"),n("132d")),ot=n("490a"),rt=Object(E["a"])(et,B,F,!1,null,"2e3e6b30",null),at=rt.exports;function ct(t){return ct="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(t)}function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){ut(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ft(t,e)}function ft(t,e){return ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ft(t,e)}function dt(t){var e=_t();return function(){var n,o=yt(t);if(e){var r=yt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return bt(this,n)}}function bt(t,e){return!e||"object"!==ct(e)&&"function"!==typeof e?vt(t):e}function vt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function yt(t){return yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},yt(t)}V()(rt,{VCardActions:$["a"],VCardText:$["c"],VCardTitle:$["d"],VIcon:nt["a"],VProgressCircular:ot["a"],VRow:I["a"]});var gt=function(){var t=function(t){pt(n,t);var e=dt(n);function n(){var t;return lt(this,n),t=e.apply(this,arguments),t.downloadState=!1,t.uploadState=!1,t}return n}(c["e"]);return t=Object(a["b"])([Object(c["a"])({components:{DownloadStateDialog:U,UploadStateDialog:at},computed:st({},Object(i["b"])(["isConnected"]))})],t),t}(),ht=gt,wt=ht,mt=(n("81b8"),n("88605")),Ot=n("da13"),jt=n("5d23"),St=n("3a2f"),kt=Object(E["a"])(wt,o,r,!1,null,"5a9a62f0",null);e["default"]=kt.exports;V()(kt,{VCol:T["a"],VImg:L["a"],VList:mt["a"],VListItem:Ot["a"],VListItemContent:jt["b"],VRow:I["a"],VTooltip:St["a"]})},2597:function(t,e,n){"use strict";var o=n("48ae"),r=n.n(o);r.a},3307:function(t,e,n){},3549:function(t,e,n){t.exports=n.p+"img/state_upload.dea399eb.png"},"48ae":function(t,e,n){},"81b8":function(t,e,n){"use strict";var o=n("bcd0"),r=n.n(o);r.a},bcd0:function(t,e,n){},e038:function(t,e,n){t.exports=n.p+"img/state_download.fc1f0473.png"},ec77:function(t,e,n){"use strict";var o=n("3307"),r=n.n(o);r.a}}]);