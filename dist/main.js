!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports["react-drag-component"]=t(require("react"),require("react-dom")):e["react-drag-component"]=t(e.React,e.ReactDOM)}(window,function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=l(n(1)),i=n(2),c=l(n(3)),a=n(4);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n;return t=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return n.call(t),t.state={offsetX:null,offsetY:null,top:null,left:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,u.default.Component),r(a,[{key:"_emit",value:function(e){for(var t=this.handleProps(),n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e&&"function"===(0,c.default)(e)&&e.apply(void 0,[t].concat(o))}},{key:"render",value:function(){var t=this,n=this.handleProps();return u.default.createElement(e,o({ref:function(e){t._dom=(0,i.findDOMNode)(e)}},n))}},{key:"componentDidMount",value:function(){this._dom&&this._dom.addEventListener("mousedown",this.onDragStart)}},{key:"componentWillMount",value:function(){this._dom&&this._dom.removeEventListener("mousedown",this.onDragStart)}}]),a}(),n=function(){var e=this;this.onDragStart=function(t){if(!t.button||2!==t.button){var n=(0,a.getRect)(t.currentTarget);e.setState({offsetX:t.clientX-n.left,offsetY:t.clientY-n.top,top:n.top,left:n.left});var o=t.currentTarget.cloneNode(!0);o.style.position="absolute",o.className+=" drag",o.style.top=n.top+"px",o.style.left=n.left+"px",o.style.zIndex=5555,e._copyDom=o,document.body.appendChild(o),document.body.style.userSelect="none",document.body.addEventListener("mousemove",e.onMove,!1),document.body.addEventListener("mouseup",e.onDragEnd,!1),e._emit(e.props.dragStart)}},this.onMove=function(t){var n=t.clientX,o=t.clientY,r=n-e.state.offsetX,u=o-e.state.offsetY;e._copyDom.style.top=u+"px",e._copyDom.style.left=r+"px",e.setState({left:r,top:u}),e._emit(e.props.dragging,{left:r,top:u})},this.onDragEnd=function(t){e._clear(),e._emit(e.props.dragEnd)},this._clear=function(){e._copyDom&&document.body.removeChild(e._copyDom),e._copyDom=null,document.body.style.userSelect="",document.body.removeEventListener("mousemove",e.onMove,!1),document.body.removeEventListener("mouseup",e.onDragEnd,!1)},this.handleProps=function(){var t=Object.assign({},e.props);return delete t.dragStart,delete t.dragging,delete t.dragEnd,t}},t}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getRect=function(e){var t={};return e&&e.getBoundingClientRect&&(t=e.getBoundingClientRect()),t}}])});