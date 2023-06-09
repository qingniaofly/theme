!function(r,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@ant-design/colors"),require("@ctrl/tinycolor")):"function"==typeof define&&define.amd?define(["exports","@ant-design/colors","@ctrl/tinycolor"],o):o(((r="undefined"!=typeof globalThis?globalThis:r||self).DeverTheme=r.DeverTheme||{},r.DeverTheme.Colors={}),r.colors,r.tinycolor)}(this,function(r,o,e){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function c(r){r=function(r,o){if("object"!==t(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0===e)return("string"===o?String:Number)(r);if("object"!==t(e=e.call(r,o||"default")))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}(r,"string");return"symbol"===t(r)?r:String(r)}function n(r,o,e){(o=c(o))in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e}function f(r){return{1:(r=o.generate(r))[0],2:r[1],3:r[2],4:r[3],5:r[4],6:r[5],7:r[6],8:r[4],9:r[5],10:r[6]}}function s(r,o){return{colorBgBase:r=r||"#fff",colorTextBase:o=o||"#000",colorText:l(o,.88),colorTextSecondary:l(o,.65),colorTextTertiary:l(o,.45),colorTextQuaternary:l(o,.25),colorFill:l(o,.15),colorFillSecondary:l(o,.06),colorFillTertiary:l(o,.04),colorFillQuaternary:l(o,.02),colorBgLayout:i(r,4),colorBgContainer:i(r,0),colorBgElevated:i(r,0),colorBgSpotlight:l(o,.85),colorBorder:i(r,15),colorBorderSecondary:i(r,6)}}var y={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},g={colorPrimary:"#e23",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#e23",colorTextBase:"",colorBgBase:""},l=function(r,o){return new e.TinyColor(r).setAlpha(o).toRgbString()},i=function(r,o){return new e.TinyColor(r).darken(o).toHexString()};function a(o,r){var e,t=Object.keys(o);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(o),r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),t.push.apply(t,e)),t}function p(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach(function(r){n(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}function u(o,r){var e,t=Object.keys(o);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(o),r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),t.push.apply(t,e)),t}function b(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach(function(r){n(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}r.default=function(r){var o,e,t,c,n,l,i,a,u,r=b(b({},g),r);return b(b({defaultPresetColors:y,defaultThemeColor:g},r),(r=r,e=(o={generateColorPalettes:f,generateNeutralColorPalettes:s}).generateColorPalettes,o=o.generateNeutralColorPalettes,t=r.colorSuccess,c=r.colorWarning,n=r.colorError,l=r.colorInfo,i=r.colorPrimary,a=r.colorBgBase,u=r.colorTextBase,console.log("genThemeColorMap:",r),r=e(i),i=e(t),t=e(c),c=e(n),n=e(l),p(p({},o(a,u)),{},{colorPrimaryBg:r[1],colorPrimaryBgHover:r[2],colorPrimaryBorder:r[3],colorPrimaryBorderHover:r[4],colorPrimaryHover:r[5],colorPrimary:r[6],colorPrimaryActive:r[7],colorPrimaryTextHover:r[8],colorPrimaryText:r[9],colorPrimaryTextActive:r[10],colorSuccessBg:i[1],colorSuccessBgHover:i[2],colorSuccessBorder:i[3],colorSuccessBorderHover:i[4],colorSuccessHover:i[4],colorSuccess:i[6],colorSuccessActive:i[7],colorSuccessTextHover:i[8],colorSuccessText:i[9],colorSuccessTextActive:i[10],colorErrorBg:c[1],colorErrorBgHover:c[2],colorErrorBorder:c[3],colorErrorBorderHover:c[4],colorErrorHover:c[5],colorError:c[6],colorErrorActive:c[7],colorErrorTextHover:c[8],colorErrorText:c[9],colorErrorTextActive:c[10],colorWarningBg:t[1],colorWarningBgHover:t[2],colorWarningBorder:t[3],colorWarningBorderHover:t[4],colorWarningHover:t[4],colorWarning:t[6],colorWarningActive:t[7],colorWarningTextHover:t[8],colorWarningText:t[9],colorWarningTextActive:t[10],colorInfoBg:n[1],colorInfoBgHover:n[2],colorInfoBorder:n[3],colorInfoBorderHover:n[4],colorInfoHover:n[4],colorInfo:n[6],colorInfoActive:n[7],colorInfoTextHover:n[8],colorInfoText:n[9],colorInfoTextActive:n[10],colorWhite:"#fff"})))},r.defaultPresetColors=y,r.defaultThemeColor=g,Object.defineProperty(r,"__esModule",{value:!0})});
