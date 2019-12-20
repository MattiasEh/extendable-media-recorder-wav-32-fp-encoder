// This is the minified and stringified code of the extendable-media-recorder-wav-encoder-worker package.
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=54)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return f}));var r=n(1);const o=-32603,i=-32602,u=-32601,c=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:u}),a=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),s=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i})},function(t,e,n){!function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce((function(t,e){if("capitalize"===e){var o=t.charAt(0).toUpperCase(),i=t.slice(1);return"".concat(o).concat(i)}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?"".concat(r(t)," ").concat(t):t}),t)},i=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=r.exec(t);null!==u;){var c={modifiers:[],name:u[1]};if(void 0!==u[3])for(var a=/\\.[^(]+\\(\\)/g,s=a.exec(u[2]);null!==s;)c.modifiers.push(s[0].slice(1,-2)),s=a.exec(u[2]);i.push(c),u=r.exec(t)}var f=i.reduce((function(t,r){return t.map((function(t){return"string"==typeof t?t.split(function(t){var e=t.name+t.modifiers.map((function(t){return"\\\\.".concat(t,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(e,"}"),"g")}(r)).reduce((function(t,i,u){return 0===u?[i]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),i]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},i])}),[]):[t]})).reduce((function(t,n){return[].concat(e(t),e(n))}),[])}),[t]);return function(t){return f.reduce((function(n,r){return[].concat(e(n),"string"==typeof r?[r]:[r(t)])}),[]).join("")}};t.compile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.code?void 0:i(t.code,e),r=void 0===t.message?void 0:i(t.message,e);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9))?{cause:e,missingParameters:{}}:{cause:o,missingParameters:e},u=i.cause,c=i.missingParameters,a=void 0===r?new Error:new Error(r(c));return null!==u&&(a.cause=u),void 0!==n&&(a.code=n(c)),void 0!==t.status&&(a.status=t.status),a}return o},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(55),n(59),n(60))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=()=>new Promise(t=>{const e=new ArrayBuffer(0),{port1:n,port2:r}=new MessageChannel;n.onmessage=e=>{let{data:n}=e;return t(null!==n)},r.postMessage(e,[e])})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>t.reduce((t,e)=>t+e.length,0)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e)=>{const n=[];let r=0;t:for(;r<e;){const e=t.length;for(let o=0;o<e;o+=1){const e=t[o];void 0===n[o]&&(n[o]=[]);const i=e.shift();if(void 0===i)break t;n[o].push(i),0===o&&(r+=i.length)}}if(r>e){const o=r-e;n.forEach((e,n)=>{const r=e.pop(),i=r.length-o;e.push(r.subarray(0,i)),t[n].unshift(r.subarray(i))})}return n}},function(t,e,n){"use strict";n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(33);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i=n(34);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var u=n(35);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);var c=n(36);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(38);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i=n(39);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var u=n(40);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);var c=n(41);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var a=n(42);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s=n(43);for(var o in s)"default"!==o&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var f=n(44);for(var o in f)"default"!==o&&function(t){n.d(e,t,(function(){return f[t]}))}(o);var l=n(45);for(var o in l)"default"!==o&&function(t){n.d(e,t,(function(){return l[t]}))}(o)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"createWorker",(function(){return i}));var r=n(47),o=n(48);n(2),n(5),n(20);const i=function t(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const u=Object(o.a)(t,n,i),c=Object(r.a)(e,u);return e.addEventListener("message",c),()=>e.removeEventListener("message",c)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);const o=(t,e)=>async n=>{let{data:{id:o,method:i,params:u}}=n;const c=e[i];try{if(void 0===c)throw Object(r.a)({method:i});const e=void 0===u?c():c(u);if(void 0===e)throw Object(r.b)({method:i});const n=e instanceof Promise?await e:e;if(null===o){if(void 0!==n.result)throw Object(r.c)({method:i})}else{if(void 0===n.result)throw Object(r.c)({method:i});const{result:e,transferables:u=[]}=n;t.postMessage({id:o,result:e},u)}}catch(e){const{message:n,status:r=-32603}=e;t.postMessage({error:{code:r,message:n},id:o})}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(49),o=n.n(r),i=n(50),u=n(0),c=n(2);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}const s=new Map,f=(t,e,n)=>(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t})({},e,{connect:n=>{let{port:r}=n;r.start();const o=t(r,e),u=Object(i.generateUniqueNumber)(s);return s.set(u,()=>{o(),r.close(),s.delete(u)}),{result:u}},disconnect:t=>{let{portId:e}=t;const n=s.get(e);if(void 0===n)throw Object(u.d)({portId:e.toString()});return n(),{result:null}},isSupported:async()=>{if(await Object(c.a)()){const t=n();return{result:t instanceof Promise?await t:t}}return{result:!1}}})},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){!function(t){"use strict";var e,n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,r=new WeakMap,o=(e=r,function(t,n){return e.set(t,n),n}),i=function(t,e){return function(r){var o=e.get(r),i=void 0===o?r.size:o>2147483646?0:o+1;if(!r.has(i))return t(r,i);if(r.size<1073741824){for(;r.has(i);)i=Math.floor(2147483648*Math.random());return t(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return t(r,i)}}(o,r),u=function(t){return function(e){var n=t(e);return e.add(n),n}}(i);t.addUniqueNumber=u,t.generateUniqueNumber=i,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>(e,n,r)=>{const o=t.get(e);if(void 0===o){const o={channelDataArrays:r.map(t=>[t]),isComplete:!0,sampleRate:n};return t.set(e,o),o}return o.channelDataArrays.forEach((t,e)=>t.push(r[e])),o}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e)=>(function(n,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:44100;const u=o>>3,c="subsequent"===r?0:44,a=n.length,s=t(n[0]),f=new ArrayBuffer(s*a*u+c),l=new DataView(f);return"subsequent"!==r&&e(l,o,a,"complete"===r?s:Number.POSITIVE_INFINITY,i),n.forEach((t,e)=>{let n=c+e*u;t.forEach(t=>{const e=t.length;for(let r=0;r<e;r+=1){const e=t[r];l.setInt16(n,e<0?32768*Math.max(-1,e):32767*Math.min(1,e),!0),n+=a*u}})}),[f]})},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e,n,r,o)=>{const i=e>>3,u=Math.min(r*n*i,4294967251);t.setUint32(0,1380533830),t.setUint32(4,u+36,!0),t.setUint32(8,1463899717),t.setUint32(12,1718449184),t.setUint32(16,16,!0),t.setUint16(20,1,!0),t.setUint16(22,n,!0),t.setUint32(24,o,!0),t.setUint32(28,o*n*i,!0),t.setUint16(32,n*i,!0),t.setUint16(34,e,!0),t.setUint32(36,1684108385),t.setUint32(40,u,!0)}},function(t,e,n){"use strict";n.r(e);var r=n(46),o=n(51),i=n(52),u=n(3),c=n(53),a=n(4),s=n(32);for(var f in s)"default"!==f&&function(t){n.d(e,t,(function(){return s[t]}))}(f);var l=n(37);for(var f in l)"default"!==f&&function(t){n.d(e,t,(function(){return l[t]}))}(f);const d=new Map,p=Object(o.a)(d),v=Object(i.a)(u.a,c.a),m=new Map;Object(r.createWorker)(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:t=>{let{recordingId:e,timeslice:n}=t;const r=m.get(e);void 0!==r&&(m.delete(e),r.reject(new Error("Another request was made to initiate an encoding.")));const o=d.get(e);if(null!==n){if(void 0===o||Object(u.a)(o.channelDataArrays[0])*(1e3/o.sampleRate)<n)return new Promise((t,r)=>{m.set(e,{reject:r,resolve:t,timeslice:n})});const t=Object(a.a)(o.channelDataArrays,Math.ceil(n*(o.sampleRate/1e3))),r=v(t,o.isComplete?"initial":"subsequent");return o.isComplete=!1,{result:r,transferables:r}}if(void 0!==o){const t=v(o.channelDataArrays,o.isComplete?"complete":"subsequent");return d.delete(e),{result:t,transferables:t}}return{result:[],transferables:[]}},record:t=>{let{recordingId:e,sampleRate:n,typedArrays:r}=t;const o=p(e,n,r),i=m.get(e);if(void 0!==i&&Object(u.a)(o.channelDataArrays[0])*(1e3/n)>=i.timeslice){const t=Object(a.a)(o.channelDataArrays,Math.ceil(i.timeslice*(n/1e3))),r=v(t,o.isComplete?"initial":"subsequent");o.isComplete=!1,m.delete(e),i.resolve({result:r,transferables:r})}return{result:null}}})},function(t,e,n){var r=n(56),o=n(57),i=n(58);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";t.exports=(t,e)=>{if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>e&&e.condense?"-":t).toLowerCase()}},function(t,e,n){var r=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(e in i)if(0==o.indexOf(i[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<u.length;e++)if(o.match(u[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t.exports?t.exports=r:window.indefiniteArticle=r}]);`; // tslint:disable-line:max-line-length
