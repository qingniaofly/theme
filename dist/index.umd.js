!function(r,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@ant-design/colors"),require("@ctrl/tinycolor"),require("@emotion/hash"),require("stylis")):"function"==typeof define&&define.amd?define(["exports","@ant-design/colors","@ctrl/tinycolor","@emotion/hash","stylis"],o):o((r="undefined"!=typeof globalThis?globalThis:r||self).DeverTheme={},r.colors,r.tinycolor,r.hash,r.stylis)}(this,function(r,o,e,t,c){"use strict";function n(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var l=n(t);function i(r){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function a(r){r=function(r,o){if("object"!==i(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0===e)return("string"===o?String:Number)(r);if("object"!==i(e=e.call(r,o||"default")))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}(r,"string");return"symbol"===i(r)?r:String(r)}function u(r,o,e){(o=a(o))in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e}function s(r){return{1:(r=o.generate(r))[0],2:r[1],3:r[2],4:r[3],5:r[4],6:r[5],7:r[6],8:r[4],9:r[5],10:r[6]}}function f(r,o){return{colorBgBase:r=r||"#fff",colorTextBase:o=o||"#000",colorText:d(o,.88),colorTextSecondary:d(o,.65),colorTextTertiary:d(o,.45),colorTextQuaternary:d(o,.25),colorFill:d(o,.15),colorFillSecondary:d(o,.06),colorFillTertiary:d(o,.04),colorFillQuaternary:d(o,.02),colorBgLayout:p(r,4),colorBgContainer:p(r,0),colorBgElevated:p(r,0),colorBgSpotlight:d(o,.85),colorBorder:p(r,15),colorBorderSecondary:p(r,6)}}var y={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},g={colorPrimary:"#e23",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#e23",colorTextBase:"",colorBgBase:""},d=function(r,o){return new e.TinyColor(r).setAlpha(o).toRgbString()},p=function(r,o){return new e.TinyColor(r).darken(o).toHexString()};function b(o,r){var e,t=Object.keys(o);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(o),r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),t.push.apply(t,e)),t}function v(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?b(Object(e),!0).forEach(function(r){u(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}function m(o,r){var e,t=Object.keys(o);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(o),r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),t.push.apply(t,e)),t}function h(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?m(Object(e),!0).forEach(function(r){u(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}function B(r,o){return l.default("".concat(r.join("%")).concat(o))}function O(){return r=document.querySelector("head"),Array.from(r.children).filter(function(r){return"STYLE"===r.tagName});var r}function P(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"html",e=r;return"string"!=typeof r&&(r=function t(c){return Object.keys(c).map(function(r){var o,e=c[r];return"object"!==i(e)?"".concat(r,":").concat(e,";"):(o=Object.keys(e).map(function(r){var o=e[r];return"object"===i(o)?(o=t(o).join(""),"".concat(r,"{").concat(o,"}")):"".concat(r,":").concat(o,";")}).join(""),"".concat(r,"{").concat(o,"}"))})}(r).join(""),o="".concat(o,"{").concat(r,"}"),e=c.serialize(c.compile(o),c.middleware([c.prefixer,c.stringify]))),e}r.defaultPresetColors=y,r.defaultThemeColor=g,r.derivativeThemeColor=function(r){var o,e,t,c,n,l,i,a,u,r=h(h({},g),r);return h(h({defaultPresetColors:y,defaultThemeColor:g},r),(r=r,e=(o={generateColorPalettes:s,generateNeutralColorPalettes:f}).generateColorPalettes,o=o.generateNeutralColorPalettes,t=r.colorSuccess,c=r.colorWarning,n=r.colorError,l=r.colorInfo,i=r.colorPrimary,a=r.colorBgBase,u=r.colorTextBase,console.log("genThemeColorMap:",r),r=e(i),i=e(t),t=e(c),c=e(n),n=e(l),v(v({},o(a,u)),{},{colorPrimaryBg:r[1],colorPrimaryBgHover:r[2],colorPrimaryBorder:r[3],colorPrimaryBorderHover:r[4],colorPrimaryHover:r[5],colorPrimary:r[6],colorPrimaryActive:r[7],colorPrimaryTextHover:r[8],colorPrimaryText:r[9],colorPrimaryTextActive:r[10],colorSuccessBg:i[1],colorSuccessBgHover:i[2],colorSuccessBorder:i[3],colorSuccessBorderHover:i[4],colorSuccessHover:i[4],colorSuccess:i[6],colorSuccessActive:i[7],colorSuccessTextHover:i[8],colorSuccessText:i[9],colorSuccessTextActive:i[10],colorErrorBg:c[1],colorErrorBgHover:c[2],colorErrorBorder:c[3],colorErrorBorderHover:c[4],colorErrorHover:c[5],colorError:c[6],colorErrorActive:c[7],colorErrorTextHover:c[8],colorErrorText:c[9],colorErrorTextActive:c[10],colorWarningBg:t[1],colorWarningBgHover:t[2],colorWarningBorder:t[3],colorWarningBorderHover:t[4],colorWarningHover:t[4],colorWarning:t[6],colorWarningActive:t[7],colorWarningTextHover:t[8],colorWarningText:t[9],colorWarningTextActive:t[10],colorInfoBg:n[1],colorInfoBgHover:n[2],colorInfoBorder:n[3],colorInfoBorderHover:n[4],colorInfoHover:n[4],colorInfo:n[6],colorInfoActive:n[7],colorInfoTextHover:n[8],colorInfoText:n[9],colorInfoTextActive:n[10],colorWhite:"#fff"})))},r.parseStyleConfigToCss=P,r.useStyleRegister=function(r,o){var e,t=void 0!==(t=(o=o||{}).debug)&&t,c=void 0===(c=o.namespace)?"html":c,o=void 0===(o=o.scoped)||o,n=B(i=[c],""),l="data-hash-".concat(n),o=P(r,o?"[".concat(l,"]"):c),i=B(i,o),t=(t&&console.log("useStyleRegister:",r,o),!1);if(r=O().find(function(r){return r.getAttribute("id")===n}))t=r.getAttribute("data-hash-id")!==i;else{(r=document.createElement("style")).setAttribute("id",n),t=!0,document.head.append(r);try{null!=(e=document.querySelector(c))&&e.setAttribute(l,"")}catch(r){}}return t&&(r.setAttribute("data-hash-id",i),r.innerHTML=o),{style:r,styleId:n,hashId:i}},Object.defineProperty(r,"__esModule",{value:!0})});
