(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e61df27a"],{"01f0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider"},[n("div",{staticClass:"divider__line"})])}],s=n("9ab4"),i=n("60a3");function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var b=function(t){function e(){return a(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),e}(i["e"]);b=s["a"]([Object(i["a"])({})],b);var h=b,y=h,v=(n("bb27"),n("2877")),m=Object(v["a"])(y,r,o,!1,null,"2333dc95",null);e["a"]=m.exports},"0776":function(t,e,n){"use strict";var r=n("90e8"),o=n.n(r);o.a},"52e6":function(t,e,n){},"56f0":function(t,e,n){"use strict";var r=n("edc9e"),o=n.n(r);o.a},6684:function(t,e,n){"use strict";var r=n("52e6"),o=n.n(r);o.a},"6fc3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"address-input"},[n("v-text-field",{ref:"address",class:{"address-input--invalid":!t.valid&&t.touched,"address-input--hint-visible":t.hint.length>0,"address-input--untouched":!t.touched},attrs:{id:"address-input",hint:t.hint,value:t.address,"error-messages":t.errorMessages,rules:t.isAddressValid,placeholder:t.$t("address-input.input.placeholder"),"persistent-hint":""},on:{blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")},input:t.updateValue,change:t.updateValue},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{staticClass:"address-input__status__paste-button"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.paste()}}},[n("span",{staticClass:"address-input__status__paste-button__text text-capitalize"},[t._v("\n            "+t._s(t.$t("address-input.paste-button"))+"\n          ")])])],1)]},proxy:!0},{key:"prepend-inner",fn:function(){return[t.value&&t.isChecksumAddress(t.value)?n("img",{staticClass:"address-input__blockie address-input__prepend",attrs:{src:t.$blockie(t.value),alt:t.$t("address-input.blockie-alt")}}):t.timeout?n("div",[n("v-progress-circular",{staticClass:"address-input__prepend",attrs:{size:"22",indeterminate:"",color:"primary"}})],1):n("div")]},proxy:!0}])})],1)},o=[],s=n("9ab4"),i=n("fc09"),u=n("60a3"),a=n("77fd");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function d(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}var m=function(t){function e(){var t;return l(this,e),t=d(this,h(e).apply(this,arguments)),t.timeout=0,t.address="",t.valid=!1,t.touched=!1,t.hint="",t.errorMessages=[""],t.busy=!1,t}return y(e,t),p(e,[{key:"mounted",value:function(){this.isChecksumAddress(this.value)&&(this.address=this.value,this.updateValue(this.value))}},{key:"onChange",value:function(t){t!==this.address&&this.isChecksumAddress(t)&&(this.address=t,this.updateValue(t))}},{key:"input",value:function(t){}},{key:"isChecksumAddress",value:function(t){var e=t;return i["a"].isAddress(e)&&i["a"].checkAddressChecksum(e)}},{key:"updateValue",value:function(t){this.errorMessages=[],this.hint="",this.updateErrors(t),this.checkForErrors()}},{key:"updateErrors",value:function(t){t?this.exclude.includes(t)?this.errorMessages.push(this.$t("address-input.error.invalid-excluded-address")):this.block.includes(t)?this.errorMessages.push(this.$t("address-input.error.channel-not-open")):i["a"].isAddress(t)&&!i["a"].checkAddressChecksum(t)?this.errorMessages.push(this.$t("address-input.error.no-checksum")):i["a"].checkAddressChecksum(t)?this.input(t):!i["a"].isAddressLike(t)&&i["a"].isDomain(t)?this.resolveEnsAddress(t):this.errorMessages.push(this.$t("address-input.error.invalid-address")):(this.input(t),this.errorMessages.push(this.$t("address-input.error.empty")))}},{key:"checkForErrors",value:function(){this.$refs.address&&(this.touched=!0,this.valid=0===this.errorMessages.length)}},{key:"resolveEnsAddress",value:function(t){var e=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=0),this.busy=!0,this.timeout=setTimeout((function(){e.$raiden.ensResolve(t).then((function(t){t?(e.hint=t,e.input(t),e.errorMessages=[]):(e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors()),e.timeout=0,e.busy=!1})).catch((function(){e.errorMessages.push(e.$t("address-input.error.ens-resolve-failed")),e.input(void 0),e.checkForErrors(),e.timeout=0,e.busy=!1}))}),800)}},{key:"paste",value:function(){}},{key:"isAddressValid",get:function(){var t=this;return[function(){return 0===t.errorMessages.length&&!t.busy||""}]}}]),e}(Object(u["c"])(a["a"]));s["a"]([Object(u["d"])({})],m.prototype,"disabled",void 0),s["a"]([Object(u["d"])({required:!0})],m.prototype,"value",void 0),s["a"]([Object(u["d"])({default:function(){return[""]}})],m.prototype,"exclude",void 0),s["a"]([Object(u["d"])({default:function(){return[""]}})],m.prototype,"block",void 0),s["a"]([Object(u["f"])("value")],m.prototype,"onChange",null),s["a"]([Object(u["b"])()],m.prototype,"input",null),m=s["a"]([Object(u["a"])({})],m);var O=m,_=O,k=(n("6684"),n("2877")),g=n("6544"),j=n.n(g),w=n("8336"),P=n("490a"),C=n("8654"),E=Object(k["a"])(_,r,o,!1,null,"1b7789c7",null);e["a"]=E.exports;j()(E,{VBtn:w["a"],VProgressCircular:P["a"],VTextField:C["a"]})},8716:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"token-information",attrs:{align:"start",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"token-information__label"},[t._v("\n      "+t._s(t.$t("token-information.title"))+"\n    ")])]),n("v-col",{attrs:{cols:"8"}},[n("div",{staticClass:"token-information__description"},[t._v("\n      "+t._s(t.$t("token-information.description",{symbol:t.token.symbol,name:t.token.name}))+"\n    ")]),n("div",[t._v("\n      "+t._s(t.token.address)+"\n    ")])])],1)},o=[],s=n("9ab4"),i=n("60a3");function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var b=function(t){function e(){return a(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),e}(i["e"]);s["a"]([Object(i["d"])()],b.prototype,"token",void 0),b=s["a"]([Object(i["a"])({})],b);var h=b,y=h,v=(n("56f0"),n("2877")),m=n("6544"),O=n.n(m),_=n("62ad"),k=n("0fd9"),g=Object(v["a"])(y,r,o,!1,null,"9a60a0ec",null);e["a"]=g.exports;O()(g,{VCol:_["a"],VRow:k["a"]})},"90e8":function(t,e,n){},bb27:function(t,e,n){"use strict";var r=n("d2bc"),o=n.n(r);o.a},c405:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{staticClass:"select-hub",attrs:{autocomplete:"off"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("address-input",{attrs:{exclude:[t.token.address,t.defaultAccount]},model:{value:t.partner,callback:function(e){t.partner=e},expression:"partner"}})],1)],1),n("divider"),n("token-information",{attrs:{token:t.token}}),n("action-button",{attrs:{enabled:t.valid,text:t.$t("select-hub.select-button")},on:{click:function(e){return t.selectHub()}}})],1)},o=[],s=n("a34a"),i=n.n(s),u=n("9ab4"),a=n("60a3"),c=n("6fc3"),l=n("fc09"),f=n("152b"),p=n("01f0"),d=n("8716"),b=n("750b"),h=n("2f62");function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e,n,r,o,s,i){try{var u=t[s](i),a=u.value}catch(c){return void n(c)}u.done?e(a):Promise.resolve(a).then(r,o)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function i(t){_(s,r,o,i,u,"next",t)}function u(t){_(s,r,o,i,u,"throw",t)}i(void 0)}))}}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&j(t.prototype,e),n&&j(t,n),t}function P(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function S(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}var $=function(t){function e(){var t;return g(this,e),t=P(this,E(e).apply(this,arguments)),t.partner="",t.valid=!1,t}return S(e,t),w(e,[{key:"selectHub",value:function(){this.navigateToOpenChannel(this.token.address,this.partner)}},{key:"created",value:function(){var t=k(i.a.mark((function t(){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.token,l["a"].checkAddressChecksum(e)){t.next=4;break}return this.navigateToHome(),t.abrupt("return");case 4:return t.next=6,this.$raiden.fetchTokenData([e]);case 6:"number"!==typeof this.token.decimals&&this.navigateToHome();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"token",get:function(){var t=this.$route.params.token;return this.getToken(t)||{address:t}}}]),e}(Object(a["c"])(f["a"]));$=u["a"]([Object(a["a"])({components:{TokenInformation:d["a"],Divider:p["a"],AddressInput:c["a"],ActionButton:b["a"]},computed:m({},Object(h["c"])(["defaultAccount"]),{},Object(h["b"])({getToken:"token"}))})],$);var A=$,T=A,V=(n("0776"),n("2877")),M=n("6544"),D=n.n(M),R=n("62ad"),F=n("4bd4"),H=n("0fd9"),z=Object(V["a"])(T,r,o,!1,null,"7cdf145d",null);e["default"]=z.exports;D()(z,{VCol:R["a"],VForm:F["a"],VRow:H["a"]})},d2bc:function(t,e,n){},edc9e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-e61df27a.4f19594c.js.map