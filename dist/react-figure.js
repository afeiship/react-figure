!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactFigure=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactFigure=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,r,o,n,a){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r(6),d=o(l),y=r(7),b=(o(y),r(5)),m=o(b),h=r(2),j=o(h),v=r(3),x=(o(v),r(4)),g=(o(x),s=c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,o=e.caption,a=n(e,["className","children","caption"]);return d.default.createElement("figure",p({},a,{className:(0,j.default)("webkit-sassui-frame-wrapper react-figure",t)}),r,o&&d.default.createElement("figcaption",{children:o}))}}]),t}(l.Component),c.propTypes={className:m.default.string,caption:m.default.any},c.defaultProps={},s);t.default=g},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-figure.js.map