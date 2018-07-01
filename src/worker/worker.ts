// tslint:disable-next-line:max-line-length
export const worker = `!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=60)}([function(t,e,n){var r=n(19)("wks"),o=n(18),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){!function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(t,e){return void 0===e?t:e.reduce(function(t,e){if("capitalize"===e){var o=t.charAt(0).toUpperCase(),i=t.slice(1);return""+o+i}return"dashify"===e?n(t):"prependIndefiniteArticle"===e?r(t)+" "+t:t},t)},i=function(t,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=r.exec(t);null!==u;){var c={modifiers:[],name:u[1]};if(void 0!==u[3])for(var a=/\\.[^(]+\\(\\)/g,s=a.exec(u[2]);null!==s;)c.modifiers.push(s[0].slice(1,-2)),s=a.exec(u[2]);i.push(c),u=r.exec(t)}var f=i.reduce(function(t,r){return t.map(function(t){return"string"==typeof t?t.split(function(t){var e=t.name+t.modifiers.map(function(t){return"\\\\."+t+"\\\\(\\\\)"}).join("");return new RegExp("\\\\$\\\\{"+e+"}","g")}(r)).reduce(function(t,i,u){return 0===u?[i]:r.name in n?[].concat(e(t),[o(n[r.name],r.modifiers),i]):[].concat(e(t),[function(t){return o(t[r.name],r.modifiers)},i])},[]):[t]}).reduce(function(t,n){return[].concat(e(t),e(n))},[])},[t]);return function(t){return f.reduce(function(n,r){return[].concat(e(n),"string"==typeof r?[r]:[r(t)])},[]).join("")}};t.compile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.code?void 0:i(t.code,e),r=void 0===t.message?void 0:i(t.message,e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],i=void 0===o&&(e instanceof Error||void 0!==e.code&&"Exception"===e.code.slice(-9))?{cause:e,missingParameters:{}}:{cause:o,missingParameters:e},u=i.cause,c=i.missingParameters,a=void 0===r?new Error:new Error(r(c));return null!==u&&(a.cause=u),void 0!==n&&(a.code=n(c)),void 0!==t.status&&(a.status=t.status),a}},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(59),n(32),n(31))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(5),o=n(52),i=n(51),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(6),o=n(11);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(19)("keys"),o=n(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6).f,o=n(3),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(8),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(44),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(12),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(1),o=n(8),i=n(25),u=n(7),c=n(3),a=function(t,e,n){var s,f,l,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,y=t&a.B,m=t&a.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(s in d&&(n=e),n)(f=!p&&x&&void 0!==x[s])&&c(g,s)||(l=f?x[s]:n[s],g[s]=d&&"function"!=typeof x[s]?n[s]:y&&f?i(l,r):m&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[s]=l,t&a.R&&b&&!b[s]&&u(b,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=!0},function(t,e,n){!function(t){"use strict";var e=new WeakMap,n=Number.MAX_SAFE_INTEGER||9007199254740991,r=function(t,n){return e.set(t,n),n},o=function(t){var o=e.get(t),i=void 0===o?t.size:o>2147483648?0:o+1;if(!t.has(i))return r(t,i);if(t.size<1073741824){for(;t.has(i);)i=Math.floor(2147483648*Math.random());return r(t,i)}if(t.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(i);)i=Math.floor(Math.random()*n);return r(t,i)};t.addUniqueNumber=function(t){var e=o(t);return t.add(e),e},t.generateUniqueNumber=o,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.r(e);var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var i=n(2),u=-32603,c=-32602,a=-32601,s=Object(i.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),f=Object(i.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:u}),l=Object(i.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:u}),p=Object(i.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:c}),d=function(t,e,n){return function(r){var i=r.data,u=i.id,c=i.method,a=i.params;return function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})}(void 0,void 0,void 0,function(){var r,i,p,d,v,h,y,m,g,b,x,w,O,_,j,M;return o(this,function(o){switch(o.label){case 0:r=e[c],o.label=1;case 1:if(o.trys.push([1,8,,9]),void 0===r)throw s({method:c});if(void 0===(i=r(a)))throw f({method:c});return i instanceof Promise?[4,i]:[3,3];case 2:return d=o.sent(),[3,4];case 3:d=i,o.label=4;case 4:if(p=d,null!==u)return[3,5];if(void 0!==p.result)throw l({method:c});return[3,7];case 5:if(void 0===p.result)throw l({method:c});return h=(v=p).result,y=v.transferables,m=void 0===y?[]:y,b=(g=t).postMessage,x=[{id:u,result:h}],[4,n];case 6:b.apply(g,x.concat([o.sent()?m:[]])),o.label=7;case 7:return[3,9];case 8:return w=o.sent(),_=(O=w).message,j=O.status,M=void 0===j?-32603:j,t.postMessage({error:{code:M,message:_},id:u}),[3,9];case 9:return[2]}})})}},v=n(28),h=new Map,y=new Promise(function(t){var e=new ArrayBuffer(0),n=new MessageChannel,r=n.port1,o=n.port2;r.onmessage=function(e){var n=e.data;return t(null!==n)},o.postMessage(e,[e])});n.d(e,"createWorker",function(){return m});var m=function(t,e){var n=function(t,e){return r({},e,{connect:function(n){var r=n.port;r.start();var o=t(r,e),i=Object(v.generateUniqueNumber)(h);return h.set(i,function(){o(),r.close(),h.delete(i)}),{result:i}},disconnect:function(t){var e=t.portId,n=h.get(e);if(void 0===n)throw p({portId:e.toString()});return n(),{result:null}}})}(m,e),o=d(t,n,y);return t.addEventListener("message",o),function(){return t.removeEventListener("message",o)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.encode=((t=[],{bitRate:e=16,sampleRate:n=44100}={})=>{const r=e>>3,o=t.length,i=t[0].reduce((t,e)=>t+e.length,0),u=new ArrayBuffer(i*o*r+44),c=new DataView(u);return c.setUint32(0,1380533830),c.setUint32(4,u.byteLength-8,!0),c.setUint32(8,1463899717),c.setUint32(12,1718449184),c.setUint32(16,16,!0),c.setUint16(20,1,!0),c.setUint16(22,o,!0),c.setUint32(24,n,!0),c.setUint32(28,n*o*r,!0),c.setUint16(32,o*r,!0),c.setUint16(34,e,!0),c.setUint32(36,1684108385),c.setUint32(40,u.byteLength-44,!0),t.forEach((t,e)=>{let n=44+e*r;t.forEach(t=>{const e=t.length;for(let i=0;i<e;i+=1){const e=t[i];c.setUint16(n,e<0?32768*Math.max(-1,e):32767*Math.min(1,e),!0),n+=o*r}})}),[u]})},function(t,e){var n=function(t){var e,n,r=/\\w+/.exec(t);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(e in i)if(0==o.indexOf(i[e]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(e=0;e<u.length;e++)if(o.match(u[e]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==t&&void 0!==t.exports?t.exports=n:window.indefiniteArticle=n},function(t,e,n){"use strict";t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");return t.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,t=>/[À-ž]/.test(t)?t:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,t=>e&&e.condense?"-":t).toLowerCase()}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){var r=n(21),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(34),o=n(0)("iterator"),i=n(10);t.exports=n(8).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(6),o=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(10),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(25),o=n(26),i=n(15),u=n(38),c=n(37),a=n(20),s=n(36),f=n(35);o(o.S+o.F*!n(33)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=0,g=f(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||d==Array&&c(g))for(n=new d(e=a(p.length));e>m;m++)s(n,m,y?h(p[m],m):p[m]);else for(l=g.call(p),n=new d;!(o=l.next()).done;m++)s(n,m,y?u(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(3),o=n(15),i=n(9)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(14),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(22),o=n(20),i=n(42);t.exports=function(t){return function(e,n,u){var c,a=r(e),s=o(a.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(3),o=n(22),i=n(43)(!1),u=n(9)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(45),o=n(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(5),i=n(46);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(5),o=n(47),i=n(17),u=n(9)("IE_PROTO"),c=function(){},a=function(){var t,e=n(23)("iframe"),r=i.length;for(e.style.display="none",n(41).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){"use strict";var r=n(48),o=n(11),i=n(16),u={};n(7)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=!n(4)&&!n(24)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(27),o=n(26),i=n(50),u=n(7),c=n(10),a=n(49),s=n(16),f=n(40),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,m){a(n,e,v);var g,b,x,w=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",_="values"==h,j=!1,M=t.prototype,P=M[l]||M["@@iterator"]||h&&M[h],E=P||w(h),S=h?_?w("entries"):E:void 0,A="Array"==e&&M.entries||P;if(A&&(x=f(A.call(new t)))!==Object.prototype&&x.next&&(s(x,O,!0),r||"function"==typeof x[l]||u(x,l,d)),_&&P&&"values"!==P.name&&(j=!0,E=function(){return P.call(this)}),r&&!m||!p&&!j&&M[l]||u(M,l,E),c[e]=E,c[O]=d,h)if(g={values:_?E:w("values"),keys:y?E:w("keys"),entries:S},m)for(b in g)b in M||i(M,b,g[b]);else o(o.P+o.F*(p||j),e,g);return g}},function(t,e,n){var r=n(14),o=n(13);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(55)(!0);n(54)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(56),n(39),t.exports=n(8).Array.from},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(58));e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},function(t,e,n){"use strict";var r=n(29),o=n(30);const i=new Map;(0,r.createWorker)(self,{characterize:({})=>({result:/^audio\\/wav$/}),encode:({recordingId:t})=>{const e=(0,o.encode)(i.get(t));return i.delete(t),{result:e,transferables:e}},record:({recordingId:t,typedArrays:e})=>{const n=i.get(t);return void 0===n?i.set(t,[e]):n.forEach((t,n)=>t.push(e[n])),{result:null}}})}]);`;
