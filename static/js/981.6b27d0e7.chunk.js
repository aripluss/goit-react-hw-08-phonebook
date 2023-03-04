"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[981],{2134:function(t,e,n){n.d(e,{Psi:function(){return s}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},i=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function a(t){return t&&t.map((function(t,e){return r.createElement(t.tag,c({key:e},t.attr),a(t.child))}))}function l(t){return function(e){return r.createElement(f,c({attr:c({},t.attr)},e),a(t.child))}}function f(t){var e=function(e){var n,o=t.attr,u=t.size,a=t.title,l=i(t,["attr","size","title"]),f=u||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),t.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(t){return e(t)})):e(o)}function s(t){return l({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 901.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]})(t)}},6916:function(t,e,n){n.d(e,{P1:function(){return a}});var r="NOT_FOUND";var o=function(t,e){return t===e};function u(t,e){var n="object"===typeof e?e:{equalityCheck:e},u=n.equalityCheck,c=void 0===u?o:u,i=n.maxSize,a=void 0===i?1:i,l=n.resultEqualityCheck,f=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}}(c),s=1===a?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:r},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(t,e){var n=[];function o(t){var o=n.findIndex((function(n){return e(t,n.key)}));if(o>-1){var u=n[o];return o>0&&(n.splice(o,1),n.unshift(u)),u.value}return r}return{get:o,put:function(e,u){o(e)===r&&(n.unshift({key:e,value:u}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,f);function p(){var e=s.get(arguments);if(e===r){if(e=t.apply(null,arguments),l){var n=s.getEntries(),o=n.find((function(t){return l(t.value,e)}));o&&(e=o.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function c(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var u,i=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,s=f.memoizeOptions,p=void 0===s?n:s,v=Array.isArray(p)?p:[p],y=c(r),h=t.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(v)),d=t((function(){for(var t=[],e=y.length,n=0;n<e;n++)t.push(y[n].apply(null,arguments));return u=h.apply(null,t)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:h,dependencies:y,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d};return o}var a=i(u)}}]);
//# sourceMappingURL=981.6b27d0e7.chunk.js.map