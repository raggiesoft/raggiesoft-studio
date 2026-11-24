(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Ze=!1,Ye=!1,P=[],Xe=-1,Oe=!1,gt=!1;function ui(e){hi(e)}function fi(){gt=!0}function pi(){gt=!1,Qt()}function hi(e){P.includes(e)||(P.push(e),e._x_schedulerPriority!==void 0&&(Oe=!0)),Qt()}function mt(e){let t=P.indexOf(e);t!==-1&&t>Xe&&P.splice(t,1)}function Qt(){if(!Ye&&!Ze){if(gt)return;Ze=!0,queueMicrotask(gi)}}function gi(){Ze=!1,Ye=!0;for(let e=0;e<P.length;e++)Oe&&mi(e),P[e](),Xe=e;P.length=0,Xe=-1,Oe=!1,Ye=!1}function mi(e){let t=new Map,r=P.slice(e).sort((n,i)=>_i(n,i,t));for(let n=0;n<r.length;n++)P[e+n]=r[n];Oe=!1}function _i(e,t,r){return He(e)?He(t)?Ft(e._x_schedulerPriority.el,r)-Ft(t._x_schedulerPriority.el,r)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:He(t)?1:0}function He(e){return e._x_schedulerPriority!==void 0}function Ft(e,t){if(t.has(e))return t.get(e);let r=0,n=e;for(;e;)r++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,r),r}var ie,Q,ne,Zt,vi=0,et=!0;function bi(e){et=!1,e(),et=!0}function yi(e){ie=e.reactive,ne=e.release,Q=t=>e.effect(t,{scheduler:r=>{et?ui(r):r()}}),Zt=e.raw}function Nt(e){Q=e}function xi(e){let t=()=>{};return[(n,i)=>{let o=(i==null?void 0:i.priority)==="structural"?vi++:void 0,s=Q(n);return o!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:o}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),ne(s))},s},()=>{t()}]}function Yt(e,t){let r=!0,n,i,o=Q(()=>{let s=e(),a=JSON.stringify(s);if(!r&&(typeof s=="object"||s!==n)){let c=typeof n=="object"?JSON.parse(i):n;queueMicrotask(()=>{t(s,c)})}n=s,i=a,r=!1});return()=>{mt(o),ne(o)}}async function Si(e){fi();try{await e(),await Promise.resolve()}finally{pi()}}var Xt=[],er=[],tr=[];function wi(e){tr.push(e)}function _t(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,er.push(t))}function rr(e){Xt.push(e)}function ir(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function nr(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}function Ai(e){var t,r;for((t=e._x_effects)==null||t.forEach(mt);(r=e._x_cleanups)!=null&&r.length;)e._x_cleanups.pop()()}var ke=new MutationObserver(Fe),vt=!1;function bt(){ke.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),vt=!0}function or(){Ci(),ke.disconnect(),vt=!1}var N=[];function Ci(){let e=ke.takeRecords();N.push(()=>e.length>0&&Fe(e));let t=N.length;queueMicrotask(()=>{if(N.length===t)for(;N.length>0;)N.shift()()})}function Ii(){for(;N.length>0;)N.shift()();let e=ke.takeRecords();e.length>0&&Fe(e)}function _(e){if(!vt)return e();or();try{return e()}finally{bt()}}var yt=!1,Me=[];function Ei(){yt=!0}function Ti(){yt=!1,Fe(Me),Me=[]}function Fe(e){if(yt){Me=Me.concat(e);return}let t=[],r=new Set,n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&r.add(s)}),e[o].addedNodes.forEach(s=>{if(s.nodeType===1){if(r.has(s)){r.delete(s);return}s._x_marker||t.push(s)}})),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},d=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&c===null?l():s.hasAttribute(a)?(d(),l()):d()}i.forEach((o,s)=>{nr(s,o)}),n.forEach((o,s)=>{Xt.forEach(a=>a(s,o))});for(let o of r)t.some(s=>s.contains(o))||er.forEach(s=>s(o));for(let o of t)o.isConnected&&tr.forEach(s=>s(o));t=null,r=null,n=null,i=null}function sr(e){return z(H(e))}function Se(e,t,r){return e._x_dataStack=[t,...H(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function H(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?H(e.host):e.parentNode?H(e.parentNode):[]}function z(e){return new Proxy({objects:e},Oi)}function ar(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:ar(Object.getPrototypeOf(e),t)}var Oi={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(r=>Object.prototype.hasOwnProperty.call(r,t)||Reflect.has(r,t))},get({objects:e},t,r){return t=="toJSON"?Mi:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,r)},set({objects:e},t,r,n){let i;for(const s of e)if(i=ar(s,t),i)break;i||(i=e[e.length-1]);const o=Object.getOwnPropertyDescriptor(i,t);return o!=null&&o.set&&(o!=null&&o.get)?o.set.call(n,r)||!0:Reflect.set(i,t,r)}};function Mi(){return Reflect.ownKeys(this).reduce((t,r)=>(t[r]=Reflect.get(this,r),t),{})}function xt(e,t=()=>{}){let r=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,n=(i,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:c}])=>{if(c===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let l=o===""?s:`${o}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(e,l,s,t):r(a)&&a!==i&&!(a instanceof Element)&&n(a,l)})};return n(e)}function cr(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o,s){return e(this.initialValue,()=>Ri(n,i),a=>tt(n,i,a),i,o,s)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,s,a,c)=>{let l=n.initialize(o,s,a,c);return r.initialValue=l,i(o,s,a,c)}}else r.initialValue=n;return r}}function Ri(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function tt(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),tt(e[t[0]],t.slice(1),r)}}var lr={};function C(e,t){lr[e]=t}function he(e,t){let r=Pi(t);return Object.entries(lr).forEach(([n,i])=>{Object.defineProperty(e,`$${n}`,{get(){return i(t,r)},enumerable:!1})}),e}function Pi(e){let[t,r]=mr(e),n={interceptor:cr,...t};return _t(e,r),n}function Di(e,t,r,...n){try{return r(...n)}catch(i){re(i,e,t)}}function re(...e){return dr(...e)}var dr=ki;function Li(e){dr=e}function ki(e,t,r=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var te=!0;function ur(e){let t=te;te=!1;let r=e();return te=t,r}function $(e,t,r={}){let n;return x(e,t)(i=>n=i,r),n}function x(...e){return fr(...e)}var fr=()=>{};function Fi(e){fr=e}var pr;function Ni(e){pr=e}function Wi(e,t){let r={};he(r,e);let n=[r,...H(e)],i=typeof t=="function"?ji(n,t):Bi(n,t,e);return Di.bind(null,e,t,i)}function ji(e,t){return(r=()=>{},{scope:n={},params:i=[],context:o}={})=>{if(!te){ge(r,t,z([n,...e]),i);return}let s=t.apply(z([n,...e]),i);ge(r,s)}}var ze={};function $i(e,t){if(ze[e])return ze[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let s=new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return re(s,t,e),Promise.resolve()}})();return ze[e]=o,o}function Bi(e,t,r){let n=$i(t,r);return(i=()=>{},{scope:o={},params:s=[],context:a}={})=>{n.result=void 0,n.finished=!1;let c=z([o,...e]);if(typeof n=="function"){let l=n.call(a,n,c).catch(d=>re(d,r,t));n.finished?(ge(i,n.result,c,s,r),n.result=void 0):l.then(d=>{ge(i,d,c,s,r)}).catch(d=>re(d,r,t)).finally(()=>n.result=void 0)}}}function ge(e,t,r,n,i){if(te&&typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(s=>ge(e,s,r,n)).catch(s=>re(s,i,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function Hi(...e){return pr(...e)}function zi(e,t,r={}){let n={};he(n,e);let i=[n,...H(e)],o=z([r.scope??{},...i]),s=r.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(r.context,o)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,l=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(r.context,o);return typeof l=="function"&&te?l.apply(o,s):l}}var St="x-";function V(e=""){return St+e}function Vi(e){St=e}var Re={};function v(e,t){return Re[e]=t,{before(r){if(!Re[r]){console.warn(String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`);return}const n=j.indexOf(r);j.splice(n>=0?n:j.indexOf("DEFAULT"),0,e)}}}function qi(e){return Object.keys(Re).includes(e)}function Ne(e,t,r){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([a,c])=>({name:a,value:c})),s=hr(o);o=o.map(a=>s.find(c=>c.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(o)}let n={};return t.map(br((o,s)=>n[o]=s)).filter(xr).map(Gi(n,r)).sort(Ji).map(o=>Ki(e,o))}function hr(e){return Array.from(e).map(br()).filter(t=>!xr(t))}var rt=!1,ce=new Map,gr=Symbol();function Ui(e){rt=!0;let t=Symbol();gr=t,ce.set(t,[]);let r=()=>{for(;ce.get(t).length;)ce.get(t).shift()();ce.delete(t)},n=()=>{rt=!1,r()};e(r),n()}function mr(e){let t=[],r=a=>t.push(a),[n,i]=xi(e);return t.push(i),[{Alpine:oe,effect:n,cleanup:r,evaluateLater:x.bind(x,e),evaluate:$.bind($,e)},()=>t.forEach(a=>a())]}function Ki(e,t){let r=()=>{},n=Re[t.type]||r,[i,o]=mr(e);ir(e,t.original,o);let s=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,i),n=n.bind(n,e,t,i),rt?ce.get(gr).push(n):n())};return s.runCleanups=o,s}var _r=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),vr=e=>e;function br(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=yr.reduce((o,s)=>s(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var yr=[];function wt(e){yr.push(e)}function xr({name:e}){return Sr().test(e)}var Sr=()=>new RegExp(`^${St}([^:^.]+)\\b`);function Gi(e,t){return({name:r,value:n})=>{r===n&&(n="");let i=r.match(Sr()),o=r.match(/:([a-zA-Z0-9\-_:]+)/),s=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:n,original:a}}}var it="DEFAULT",j=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",it,"teleport"];function Ji(e,t){let r=j.indexOf(e.type)===-1?it:e.type,n=j.indexOf(t.type)===-1?it:t.type;return j.indexOf(r)-j.indexOf(n)}function q(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>q(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)q(n,t),n=n.nextElementSibling}var D=!1;function L(e,t=()=>{}){return(...r)=>D?t(...r):e(...r)}function Qi(e){return(...t)=>D&&e(...t)}var wr=[];function we(e){wr.push(e)}function Zi(e,t){wr.forEach(r=>r(e,t)),D=!0,Ar(()=>{T(t,(r,n)=>{n(r,()=>{})})}),D=!1}var nt=!1;function Yi(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),D=!0,nt=!0,Ar(()=>{Xi(t)}),D=!1,nt=!1}function Xi(e){let t=!1;T(e,(n,i)=>{q(n,(o,s)=>{if(t&&sn(o))return s();t=!0,i(o,s)})})}function Ar(e){let t=Q;Nt((r,n)=>{let i=t(r);return ne(i),()=>{}}),e(),Nt(t)}var We=0;function en(e,t){let r=e._x_deferInit;r||(r=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},r.ownsIgnore&&(e._x_ignore=!0),We++),r.pending++,Promise.resolve(t).catch(n=>{try{re(n,e)}catch(i){setTimeout(()=>{throw i},0)}}).then(()=>tn(e,r))}function tn(e,t){t.pending--,!(t.pending>0)&&(Ii(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,We--,e.isConnected&&(nn(t),T(e))))}function rn(e,t){if(We===0)return!1;let r=w(e,n=>n._x_deferInit);return r?(Cr(r._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function Cr(e,t,r){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),r.forEach(i=>n.names.add(i))}function nn(e){e.queuedAttributes.forEach((t,r)=>{if(!r.isConnected||!r._x_marker||r._x_marker!==t.marker)return;let n=w(r,o=>o._x_deferInit);if(n){Cr(n._x_deferInit,r,Array.from(t.names));return}let i=Array.from(t.names).filter(o=>r.hasAttribute(o)).map(o=>({name:o,value:r.getAttribute(o)}));i.length!==0&&Ne(r,i).forEach(o=>o())})}we((e,t)=>{We!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||w(e,r=>r._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,r={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0,...n}))}function E(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Wt=!1;function on(){Wt&&E("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Wt=!0,document.body||E("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),bt(),wi(t=>T(t,q)),_t(t=>Z(t)),rr((t,r)=>{rn(t,r)||Ne(t,r).forEach(n=>n())});let e=t=>!je(t.parentElement,!0);Array.from(document.querySelectorAll(Tr().join(","))).filter(e).forEach(t=>{T(t)}),le(document,"alpine:initialized"),setTimeout(()=>{ln()})}var At=[],Ir=[];function Er(){return At.map(e=>e())}function Tr(){return At.concat(Ir).map(e=>e())}function Or(e){At.push(e)}function Mr(e){Ir.push(e)}function je(e,t=!1){return w(e,r=>{if((t?Tr():Er()).some(i=>r.matches(i)))return!0})}function w(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return w(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return w(e.parentNode.host,t);if(e.parentElement)return w(e.parentElement,t)}}function sn(e){return Er().some(t=>e.matches(t))}var Rr=[];function an(e){Rr.push(e)}var cn=1;function T(e,t=q,r=()=>{}){w(e,n=>n._x_ignore)||Ui(()=>{t(e,(n,i)=>{n._x_marker||(r(n,i),Rr.forEach(o=>o(n,i)),Ne(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=cn++),n._x_ignore&&i())})})}function Z(e,t=q){t(e,r=>{Ai(r),nr(r),delete r._x_marker})}function ln(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,r,n])=>{qi(r)||n.some(i=>{if(document.querySelector(i))return E(`found "${i}", but missing ${t} plugin`),!0})})}var ot=[],Ct=!1;function It(e=()=>{}){return queueMicrotask(()=>{Ct||setTimeout(()=>{st()})}),new Promise(t=>{ot.push(()=>{e(),t()})})}function st(){for(Ct=!1;ot.length;)ot.shift()()}function dn(){Ct=!0}function Et(e,t){return Array.isArray(t)?jt(e,t.join(" ")):typeof t=="object"&&t!==null?un(e,t):typeof t=="function"?Et(e,t()):jt(e,t)}function at(e){return e.split(/\s/).filter(Boolean)}function jt(e,t){let r=i=>at(i).filter(o=>!e.classList.contains(o)).filter(Boolean),n=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",n(r(t))}function un(e,t){let r=Object.entries(t).flatMap(([s,a])=>a?at(s):!1).filter(Boolean),n=Object.entries(t).flatMap(([s,a])=>a?!1:at(s)).filter(Boolean),i=[],o=[];return n.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),r.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),i.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),i.forEach(s=>e.classList.remove(s))}}function $e(e,t){return typeof t=="object"&&t!==null?fn(e,t):pn(e,t)}function fn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],n.startsWith("--")||(n=hn(n)),e.style.setProperty(n,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{$e(e,r)}}function pn(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function hn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ct(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n!==!1&&(!n||typeof n=="boolean"?mn(e,r,t):gn(e,n,t))});function gn(e,t,r){Pr(e,Et,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function mn(e,t,r){Pr(e,$e);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((y,Y)=>Y<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((y,Y)=>Y>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),l=a?0:1,d=c?se(t,"scale",95)/100:1,u=se(t,"delay",0)/1e3,g=se(t,"origin","center"),m="opacity, transform",O=se(t,"duration",150)/1e3,f=se(t,"duration",75)/1e3,b="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${O}s`,transitionTimingFunction:b},e._x_transition.enter.start={opacity:l,transform:`scale(${d})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${f}s`,transitionTimingFunction:b},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${d})`})}function Pr(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){lt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){lt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>i(r);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):o():e._x_transition?e._x_transition.in(r):o();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let s=Dr(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):i(()=>{let a=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(a)]).then(([d])=>d==null?void 0:d());return delete c._x_hidePromise,delete c._x_hideChildren,l};a(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Dr(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Dr(t)}function lt(e,t,{during:r,start:n,end:i}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),s();return}let a,c,l;_n(e,{start(){a=t(e,n)},during(){c=t(e,r)},before:o,end(){a(),l=t(e,i)},after:s,cleanup(){c(),l()}})}function _n(e,t){let r,n,i,o=ct(()=>{_(()=>{r=!0,n||t.before(),i||(t.end(),st()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:ct(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},_(()=>{t.start(),t.during()}),dn(),requestAnimationFrame(()=>{if(r)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),_(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(_(()=>{t.end()}),st(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function se(e,t,r){if(e.indexOf(t)===-1)return r;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"||t==="delay"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Lr(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=ie({})),e._x_bindings[t]=r,t=n.includes("camel")?Cn(t):t,t){case"value":vn(e,r);break;case"style":yn(e,r);break;case"class":bn(e,r);break;case"selected":case"checked":xn(e,t,r);break;default:Tt(e,t,r);break}}function vn(e,t){if(Ot(e))e.attributes.value===void 0&&(e.value=t);else if(Pe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>In(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")An(e,t);else if(e.tagName==="OPTION")Tt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function bn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Et(e,t)}function yn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=$e(e,t)}function xn(e,t,r){Tt(e,t,r),wn(e,t,r)}function Tt(e,t,r){[null,void 0,!1].includes(r)&&Tn(t)?e.removeAttribute(t):(kr(t)&&(r=t),On(r)&&(r=JSON.stringify(r)),Sn(e,t,r))}function Sn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function wn(e,t,r){e[t]!==r&&(e[t]=r)}function An(e,t){const r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function Cn(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function In(e,t){return e==t}function Te(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var En=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function kr(e){return En.has(e)}function Tn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function On(e){return typeof e=="object"&&e!==null}function Mn(e,t,r){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Fr(e,t,r)}function Rn(e,t,r,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=n,ur(()=>$(e,i.expression))}return Fr(e,t,r)}function Fr(e,t,r){let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:n===""?!0:kr(t)?!![t,"true"].includes(n):n}function Pe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Ot(e){return e.type==="radio"||e.localName==="ui-radio"}function Nr(e,t){let r;return function(){const n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function Wr(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function jr({get:e,set:t},{get:r,set:n}){let i=!0,o,s=Q(()=>{let a=e(),c=r();if(i)n(Ve(a)),i=!1;else{let l=JSON.stringify(a),d=JSON.stringify(c);l!==o?n(Ve(a)):l!==d&&t(Ve(c))}o=JSON.stringify(e()),JSON.stringify(r())});return()=>{mt(s),ne(s)}}function Ve(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Pn(e){(Array.isArray(e)?e:[e]).forEach(r=>r(oe))}var R={},$t=!1;function Dn(e,t){if($t||(R=ie(R),$t=!0),t===void 0)return R[e];R[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?R[e]=t.initialize(R,e,e,()=>{}):xt(R[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&R[e].init()}function Ln(){return R}var $r={};function kn(e,t){let r=typeof t!="function"?()=>t:t;return e instanceof Element?Br(e,r()):($r[e]=r,()=>{})}function Fn(e){return Object.entries($r).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}function Br(e,t,r){let n=[];for(;n.length;)n.pop()();let i=Object.entries(t).map(([s,a])=>({name:s,value:a})),o=hr(i);return i=i.map(s=>o.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),Ne(e,i,r).map(s=>{n.push(s.runCleanups),s()}),()=>{for(;n.length;)n.pop()()}}var Hr={};function Nn(e,t){Hr[e]=t}function Wn(e,t){return Object.entries(Hr).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var jn={get reactive(){return ie},get release(){return ne},get effect(){return Q},get raw(){return Zt},get transaction(){return Si},version:"3.17.5",flushAndStopDeferringMutations:Ti,dontAutoEvaluateFunctions:ur,disableEffectScheduling:bi,startObservingMutations:bt,stopObservingMutations:or,setReactivityEngine:yi,onAttributeRemoved:ir,onAttributesAdded:rr,closestDataStack:H,skipDuringClone:L,onlyDuringClone:Qi,addRootSelector:Or,addInitSelector:Mr,setErrorHandler:Li,interceptClone:we,addScopeToNode:Se,deferMutations:Ei,mapAttributes:wt,evaluateLater:x,interceptInit:an,initInterceptors:xt,injectMagics:he,setEvaluator:Fi,setRawEvaluator:Ni,mergeProxies:z,extractProp:Rn,findClosest:w,onElRemoved:_t,closestRoot:je,destroyTree:Z,interceptor:cr,transition:lt,setStyles:$e,mutateDom:_,deferInit:en,directive:v,entangle:jr,throttle:Wr,debounce:Nr,evaluate:$,evaluateRaw:Hi,initTree:T,nextTick:It,prefixed:V,prefix:Vi,plugin:Pn,magic:C,store:Dn,start:on,clone:Yi,cloneNode:Zi,bound:Mn,$data:sr,watch:Yt,walk:q,data:Nn,bind:kn},oe=jn;function $n(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}var me=Object.assign,Bn=Object.prototype.hasOwnProperty,dt=(e,t)=>Bn.call(e,t),_e=Array.isArray,de=e=>zr(e)==="[object Map]",Hn=e=>typeof e=="string",Ae=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",zn=Object.prototype.toString,zr=e=>zn.call(e),Vr=e=>zr(e).slice(8,-1),Mt=e=>Hn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},qn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),W=(e,t)=>!Object.is(e,t);function U(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var p,qe=new WeakSet,Bt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qe.has(this)&&(qe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Un(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ht(this),Ur(this);const e=p,t=A;p=this,A=!0;try{return this.fn()}finally{p!==this&&U("Active effect was not restored correctly - this is likely a Vue internal bug."),Kr(this),p=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dt(e);this.deps=this.depsTail=void 0,Ht(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ut(this)&&this.run()}get dirty(){return ut(this)}},qr=0,ue,fe;function Un(e,t=!1){if(e.flags|=8,t){e.next=fe,fe=e;return}e.next=ue,ue=e}function Rt(){qr++}function Pt(){if(--qr>0)return;if(fe){let t=fe;for(fe=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;ue;){let t=ue;for(ue=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Ur(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Kr(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Dt(n),Gn(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function ut(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===De)||(e.globalVersion=De,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ut(e))))return;e.flags|=2;const t=e.dep,r=p,n=A;p=e,A=!0;try{Ur(e);const i=e.fn(e._value);(t.version===0||W(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{p=r,A=n,Kr(e),e.flags&=-3}}function Dt(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subsHead===e&&(r.subsHead=i),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let o=r.computed.deps;o;o=o.nextDep)Dt(o,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Gn(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}function Jn(e,t){e.effect instanceof Bt&&(e=e.effect.fn);const r=new Bt(e);t&&me(r,t);try{r.run()}catch(i){throw r.stop(),i}const n=r.run.bind(r);return n.effect=r,n}function Qn(e){e.effect.stop()}var A=!0,Gr=[];function Zn(){Gr.push(A),A=!1}function Yn(){const e=Gr.pop();A=e===void 0?!0:e}function Ht(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=p;p=void 0;try{t()}finally{p=r}}}var De=0,Xn=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},eo=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!p||!A||p===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==p)t=this.activeLink=new Xn(p,this),p.deps?(t.prevDep=p.depsTail,p.depsTail.nextDep=t,p.depsTail=t):p.deps=p.depsTail=t,Jr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=p.depsTail,t.nextDep=void 0,p.depsTail.nextDep=t,p.depsTail=t,p.deps===t&&(p.deps=r)}return p.onTrack&&p.onTrack(me({effect:p},e)),t}trigger(e){this.version++,De++,this.notify(e)}notify(e){Rt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(me({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Pt()}}};function Jr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Jr(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ft=new WeakMap,B=Symbol("Object iterate"),pt=Symbol("Map keys iterate"),be=Symbol("Array iterate");function S(e,t,r){if(A&&p){let n=ft.get(e);n||ft.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new eo),i.map=n,i.key=r),i.track({target:e,type:t,key:r})}}function k(e,t,r,n,i,o){const s=ft.get(e);if(!s){De++;return}const a=c=>{c&&c.trigger({target:e,type:t,key:r,newValue:n,oldValue:i,oldTarget:o})};if(Rt(),t==="clear")s.forEach(a);else{const c=_e(e),l=c&&Mt(r);if(c&&r==="length"){const d=Number(n);s.forEach((u,g)=>{(g==="length"||g===be||!Ae(g)&&g>=d)&&a(u)})}else switch((r!==void 0||s.has(void 0))&&a(s.get(r)),l&&a(s.get(be)),t){case"add":c?l&&a(s.get("length")):(a(s.get(B)),de(e)&&a(s.get(pt)));break;case"delete":c||(a(s.get(B)),de(e)&&a(s.get(pt)));break;case"set":de(e)&&a(s.get(B));break}}Pt()}function X(e){const t=h(e);return t===e?t:(S(t,"iterate",be),G(e)?t:t.map(J))}function Lt(e){return S(e=h(e),"iterate",be),e}function I(e,t){return K(e)?ri(e)?ye(J(t)):ye(t):J(t)}var to={__proto__:null,[Symbol.iterator](){return Ue(this,Symbol.iterator,e=>I(this,e))},concat(...e){return X(this).concat(...e.map(t=>_e(t)?X(t):t))},entries(){return Ue(this,"entries",e=>(e[1]=I(this,e[1]),e))},every(e,t){return M(this,"every",e,t,void 0,arguments)},filter(e,t){return M(this,"filter",e,t,r=>r.map(n=>I(this,n)),arguments)},find(e,t){return M(this,"find",e,t,r=>I(this,r),arguments)},findIndex(e,t){return M(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return M(this,"findLast",e,t,r=>I(this,r),arguments)},findLastIndex(e,t){return M(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return M(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ke(this,"includes",e)},indexOf(...e){return Ke(this,"indexOf",e)},join(e){return X(this).join(e)},lastIndexOf(...e){return Ke(this,"lastIndexOf",e)},map(e,t){return M(this,"map",e,t,void 0,arguments)},pop(){return ae(this,"pop")},push(...e){return ae(this,"push",e)},reduce(e,...t){return zt(this,"reduce",e,t)},reduceRight(e,...t){return zt(this,"reduceRight",e,t)},shift(){return ae(this,"shift")},some(e,t){return M(this,"some",e,t,void 0,arguments)},splice(...e){return ae(this,"splice",e)},toReversed(){return X(this).toReversed()},toSorted(e){return X(this).toSorted(e)},toSpliced(...e){return X(this).toSpliced(...e)},unshift(...e){return ae(this,"unshift",e)},values(){return Ue(this,"values",e=>I(this,e))}};function Ue(e,t,r){const n=Lt(e),i=n[t]();return n!==e&&!G(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=r(o.value)),o}),i}var ro=Array.prototype;function M(e,t,r,n,i,o){const s=Lt(e),a=s!==e&&!G(e),c=s[t];if(c!==ro[t]){const u=c.apply(e,o);return a?J(u):u}let l=r;s!==e&&(a?l=function(u,g){return r.call(this,I(e,u),g,e)}:r.length>2&&(l=function(u,g){return r.call(this,u,g,e)}));const d=c.call(s,l,n);return a&&i?i(d):d}function zt(e,t,r,n){const i=Lt(e),o=i!==e&&!G(e);let s=r,a=!1;i!==e&&(o?(a=n.length===0,s=function(l,d,u){return a&&(a=!1,l=I(e,l)),r.call(this,l,I(e,d),u,e)}):r.length>3&&(s=function(l,d,u){return r.call(this,l,d,u,e)}));const c=i[t](s,...n);return a?I(e,c):c}function Ke(e,t,r){const n=h(e);S(n,"iterate",be);const i=n[t](...r);return(i===-1||i===!1)&&_o(r[0])?(r[0]=h(r[0]),n[t](...r)):i}function ae(e,t,r=[]){Zn(),Rt();const n=h(e)[t].apply(e,r);return Pt(),Yn(),n}var io=$n("__proto__,__v_isRef,__isVue"),Qr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ae));function no(e){Ae(e)||(e=String(e));const t=h(this);return S(t,"has",e),t.hasOwnProperty(e)}var Zr=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(n?i?go:ei:i?ho:Xr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!n){let a;if(o&&(a=to[t]))return a;if(t==="hasOwnProperty")return no}const s=Reflect.get(e,t,pe(e)?e:r);if((Ae(t)?Qr.has(t):io(t))||(n||S(e,"get",t),i))return s;if(pe(s)){const a=o&&Mt(t)?s:s.value;return n&&ve(a)?ht(a):a}return ve(s)?n?ht(s):kt(s):s}},oo=class extends Zr{constructor(e=!1){super(!1,e)}set(e,t,r,n){let i=e[t];const o=_e(e)&&Mt(t);if(!this._isShallow){const c=K(i);if(!G(r)&&!K(r)&&(i=h(i),r=h(r)),!o&&pe(i)&&!pe(r))return c?(U(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(i.value=r,!0)}const s=o?Number(t)<e.length:dt(e,t),a=Reflect.set(e,t,r,pe(e)?e:n);return e===h(n)&&a&&(s?W(r,i)&&k(e,"set",t,r,i):k(e,"add",t,r)),a}deleteProperty(e,t){const r=dt(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&k(e,"delete",t,void 0,n),i}has(e,t){const r=Reflect.has(e,t);return(!Ae(t)||!Qr.has(t))&&S(e,"has",t),r}ownKeys(e){return S(e,"iterate",_e(e)?"length":B),Reflect.ownKeys(e)}},so=class extends Zr{constructor(e=!1){super(!0,e)}set(e,t){return U(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return U(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},ao=new oo,co=new so,Ce=e=>Reflect.getPrototypeOf(e);function lo(e,t,r){return function(...n){const i=this.__v_raw,o=h(i),s=de(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=i[e](...n),d=t?ye:J;return!t&&S(o,"iterate",c?pt:B),me(Object.create(l),{next(){const{value:u,done:g}=l.next();return g?{value:u,done:g}:{value:a?[d(u[0]),d(u[1])]:d(u),done:g}}})}}function Ie(e){return function(...t){{const r=t[0]?`on key "${t[0]}" `:"";U(`${qn(e)} operation ${r}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function uo(e,t){const r={get(i){const o=this.__v_raw,s=h(o),a=h(i);e||(W(i,a)&&S(s,"get",i),S(s,"get",a));const{has:c}=Ce(s),l=e?ye:J;if(c.call(s,i))return l(o.get(i));if(c.call(s,a))return l(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&S(h(i),"iterate",B),i.size},has(i){const o=this.__v_raw,s=h(o),a=h(i);return e||(W(i,a)&&S(s,"has",i),S(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,c=h(a),l=e?ye:J;return!e&&S(c,"iterate",B),a.forEach((d,u)=>i.call(o,l(d),l(u),s))}};return me(r,e?{add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear")}:{add(i){const o=h(this),s=Ce(o),a=h(i),c=!G(i)&&!K(i)?a:i;return s.has.call(o,c)||W(i,c)&&s.has.call(o,i)||W(a,c)&&s.has.call(o,a)||(o.add(c),k(o,"add",c,c)),this},set(i,o){!G(o)&&!K(o)&&(o=h(o));const s=h(this),{has:a,get:c}=Ce(s);let l=a.call(s,i);l?Vt(s,a,i):(i=h(i),l=a.call(s,i));const d=c.call(s,i);return s.set(i,o),l?W(o,d)&&k(s,"set",i,o,d):k(s,"add",i,o),this},delete(i){const o=h(this),{has:s,get:a}=Ce(o);let c=s.call(o,i);c?Vt(o,s,i):(i=h(i),c=s.call(o,i));const l=a?a.call(o,i):void 0,d=o.delete(i);return c&&k(o,"delete",i,void 0,l),d},clear(){const i=h(this),o=i.size!==0,s=de(i)?new Map(i):new Set(i),a=i.clear();return o&&k(i,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=lo(i,e)}),r}function Yr(e,t){const r=uo(e);return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(dt(r,i)&&i in n?r:n,i,o)}var fo={get:Yr(!1)},po={get:Yr(!0)};function Vt(e,t,r){const n=h(r);if(n!==r&&t.call(e,n)){const i=Vr(e);U(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Xr=new WeakMap,ho=new WeakMap,ei=new WeakMap,go=new WeakMap;function mo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kt(e){return K(e)?e:ti(e,!1,ao,fo,Xr)}function ht(e){return ti(e,!0,co,po,ei)}function ti(e,t,r,n,i){if(!ve(e))return U(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const s=mo(Vr(e));if(s===0)return e;const a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function ri(e){return K(e)?ri(e.__v_raw):!!(e&&e.__v_isReactive)}function K(e){return!!(e&&e.__v_isReadonly)}function G(e){return!!(e&&e.__v_isShallow)}function _o(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var J=e=>ve(e)?kt(e):e,ye=e=>ve(e)?ht(e):e;function pe(e){return e?e.__v_isRef===!0:!1}C("nextTick",()=>It);C("dispatch",e=>le.bind(le,e));C("watch",(e,{evaluateLater:t,cleanup:r})=>(n,i)=>{let o=t(n),a=Yt(()=>{let c;return o(l=>c=l),c},i);r(a)});C("store",Ln);C("data",e=>sr(e));C("root",e=>je(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=z(vo(e))),e._x_refs_proxy));function vo(e){let t=[];return w(e,r=>{r._x_refs&&t.push(r._x_refs)}),t}var Ge={};function ii(e){return Ge[e]||(Ge[e]=0),++Ge[e]}function bo(e,t){return w(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function yo(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ii(t))}C("id",(e,{cleanup:t})=>(r,n=null)=>{let i=`${r}${n?`-${n}`:""}`;return xo(e,i,t,()=>{let o=bo(e,r),s=o?o._x_ids[r]:ii(r);return n?`${r}-${s}-${n}`:`${r}-${s}`})});we((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function xo(e,t,r,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=n();return e._x_id[t]=i,r(()=>{delete e._x_id[t]}),i}C("el",e=>e);ni("Focus","focus","focus");ni("Persist","persist","persist");function ni(e,t,r){C(t,n=>E(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}v("modelable",(e,{expression:t},{effect:r,evaluateLater:n,cleanup:i})=>{let o=n(t),s=()=>{let d;return o(u=>d=u),d},a=n(`${t} = __placeholder`),c=d=>a(()=>{},{scope:{__placeholder:d}}),l=s();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let d=e._x_model.get,u=e._x_model.setWithModifiers,g=jr({get(){return d()},set(m){u(m)}},{get(){return s()},set(m){c(m)}});i(g)})});v("teleport",(e,{modifiers:t,expression:r},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&E("x-teleport can only be used on a <template> tag",e);let i=qt(r),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{o.addEventListener(a,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),Se(o,{},e);let s=(a,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(a,c):l.includes("append")?c.parentNode.insertBefore(a,c.nextSibling):c.appendChild(a)};_(()=>{L(()=>{s(o,i,t),T(o)})()}),e._x_teleportPutBack=()=>{let a=qt(r);_(()=>{s(e._x_teleport,a,t)})},n(()=>_(()=>{o.remove(),Z(o)}))});var So=document.createElement("div");function qt(e){let t=L(()=>document.querySelector(e),()=>So)();return t||E(`Cannot find x-teleport element for selector: "${e}"`),t}var oi=()=>{};oi.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",oi);v("effect",L((e,{expression:t},{effect:r})=>{r(x(e,t))}));function ee(e,t,r,n){let i=e,o=c=>n(c),s={},a=(c,l)=>d=>l(c,d);return r.includes("dot")&&(t=wo(t)),r.includes("camel")&&(t=Ao(t)),r.includes("capture")&&(s.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("passive")&&(s.passive=r[r.indexOf("passive")+1]!=="false"),o=si(r,o),r.includes("prevent")&&(o=a(o,(c,l)=>{l.preventDefault(),c(l)})),r.includes("stop")&&(o=a(o,(c,l)=>{l.stopPropagation(),c(l)})),r.includes("once")&&(o=a(o,(c,l)=>{c(l),i.removeEventListener(t,o,s)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=a(o,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),r.includes("self")&&(o=a(o,(c,l)=>{l.target===e&&c(l)})),t==="submit"&&(o=a(o,(c,l)=>{l.target._x_pendingModelUpdates&&l.target._x_pendingModelUpdates.forEach(d=>d()),c(l)})),(Io(t)||ai(t))&&(o=a(o,(c,l)=>{To(l,r)||c(l)})),i.addEventListener(t,o,s),()=>{i.removeEventListener(t,o,s)}}function si(e,t){if(e.includes("debounce")){let r=e[e.indexOf("debounce")+1]||"invalid-wait",n=Le(r.split("ms")[0])?Number(r.split("ms")[0]):250;t=Nr(t,n)}if(e.includes("throttle")){let r=e[e.indexOf("throttle")+1]||"invalid-wait",n=Le(r.split("ms")[0])?Number(r.split("ms")[0]):250;t=Wr(t,n)}return t}function wo(e){return e.replace(/-/g,".")}function Ao(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function Le(e){return!Array.isArray(e)&&!isNaN(e)}function Co(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Io(e){return["keydown","keyup"].includes(e)}function ai(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Eo=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function To(e,t){let r=t.filter((o,s)=>o==="false"&&t[s-1]==="passive"?!1:!Eo.includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,Le((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.includes("throttle")){let o=r.indexOf("throttle");r.splice(o,Le((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&Ut(e.key).includes(r[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&(ai(e.type)||Ut(e.key).includes(r[0])))}function Ut(e){if(!e)return[];e=Co(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}v("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=e;t.includes("parent")&&(o=w(e,f=>f!==e));let s=x(o,r),a;typeof r=="string"?a=x(o,`${r} = __placeholder`):typeof r=="function"&&typeof r()=="string"?a=x(o,`${r()} = __placeholder`):a=()=>{};let c=()=>{let f;return s(b=>f=b),Kt(f)?f.get():f},l=f=>{let b;s(y=>b=y),Kt(b)?b.set(f):a(()=>{},{scope:{__placeholder:f}})};typeof r=="string"&&e.type==="radio"&&_(()=>{e.hasAttribute("name")||e.setAttribute("name",r)});let d=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),m=d||u||g,O;if(D)O=()=>{};else if(m){let f=[],b=y=>l(Ee(e,t,y,c()));if(d&&f.push(ee(e,"change",t,b)),u&&(f.push(ee(e,"blur",t,b)),e.form)){let y=e.form,Y=()=>b({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(Y),i(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(Y),1)})}g&&f.push(ee(e,"keydown",t,y=>{y.key==="Enter"&&b(y)})),O=()=>f.forEach(y=>y())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";O=ee(e,f,t,b=>{l(Ee(e,t,b,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Pe(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Ee(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=O,i(()=>e._x_removeModelListeners.default()),e.form){let f=ee(e.form,"reset",[],b=>{It(()=>e._x_model&&e._x_model.set(Ee(e,t,{target:e},c())))});i(()=>f())}if(e._x_model={get(){return c()},set(f){l(f)},setWithModifiers:si(t,l)},e._x_forceModelUpdate=f=>{f===void 0&&typeof r=="string"&&r.match(/\./)&&(f=""),_(()=>{Pe(e)?Array.isArray(f)?e.checked=f.some(b=>b==e.value):e.checked=!!f:Ot(e)?typeof f=="boolean"?e.checked=Te(e.value)===f:e.checked=e.value==f:Lr(e,"value",f)})},e.tagName==="SELECT"){let f=new MutationObserver(()=>{e._x_forceModelUpdate(c())});f.observe(e,{childList:!0}),i(()=>f.disconnect())}n(()=>{let f=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function Ee(e,t,r,n){return _(()=>{if(r instanceof CustomEvent&&r.detail!==void 0)return r.detail!==null&&r.detail!==void 0?r.detail:r.target.value;if(Pe(e))if(Array.isArray(n)){let i=null;return t.includes("number")?i=Je(r.target.value):t.includes("boolean")?i=Te(r.target.value):i=r.target.value,r.target.checked?n.includes(i)?n:n.concat([i]):n.filter(o=>!Oo(o,i))}else return r.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Je(o)}):t.includes("boolean")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Te(o)}):Array.from(r.target.selectedOptions).map(i=>i.value||i.text);{let i;return Ot(e)?r.target.checked?i=r.target.value:i=n:i=r.target.value,t.includes("number")?Je(i):t.includes("boolean")?Te(i):t.includes("trim")?i.trim():i}}})}function Je(e){let t=e?parseFloat(e):null;return Mo(t)?t:e}function Oo(e,t){return e==t}function Mo(e){return!Array.isArray(e)&&!isNaN(e)}function Kt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(D)return e.removeAttribute(V("cloak"));queueMicrotask(()=>_(()=>e.removeAttribute(V("cloak"))))});Mr(()=>`[${V("init")}]`);v("init",L((e,{expression:t},{evaluate:r})=>typeof t=="string"?!!t.trim()&&r(t,{},!1):r(t,{},!1)));v("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{e.textContent=o})})})});v("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{Array.from(e.children).forEach(s=>Z(s)),e.innerHTML=o??"",e._x_ignoreSelf=!0,T(e),delete e._x_ignoreSelf})})},{priority:"structural"})});wt(_r(":",vr(V("bind:"))));var ci=(e,{value:t,modifiers:r,expression:n,original:i},{effect:o,cleanup:s})=>{if(!t){let c={};Fn(c),x(e,n)(d=>{Br(e,d,i)},{scope:c});return}if(t==="key")return Ro(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=x(e,n);o(()=>a(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),_(()=>Lr(e,t,c,r))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};ci.inline=(e,{value:t,modifiers:r,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};v("bind",ci);function Ro(e,t){e._x_keyExpression=t}Or(()=>`[${V("data")}]`);var F=Symbol();v("data",(e,{expression:t},{cleanup:r})=>{if(Do(e))return;let n=e[F];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let i={};he(i,e);let o={};Wn(o,i);let s=$(e,t,{scope:o});(s===void 0||s===!0)&&(s={}),he(s,e);let a;if(n!=null&&n.reactiveData){a=n.reactiveData,Po(a,s);let l={expression:t};e[F]=l,queueMicrotask(()=>{e[F]===l&&delete e[F]})}else a=ie(s);xt(a,r);let c=Se(e,a);L(()=>{a.init&&$(e,a.init)})(),r(()=>{a.destroy&&$(e,a.destroy),c();let l={reactiveData:a};e[F]=l,queueMicrotask(()=>{e[F]===l&&delete e[F]})})});function Po(e,t){Object.keys(t).forEach(r=>{let n=Object.getOwnPropertyDescriptor(t,r),i=Object.getOwnPropertyDescriptor(e,r);n.get||n.set||i!=null&&i.get||i!=null&&i.set?(i&&delete e[r],i||(e[r]=void 0),n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]):e[r]=t[r]}),Object.keys(e).filter(r=>!Object.prototype.hasOwnProperty.call(t,r)).forEach(r=>delete e[r])}we((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Do(e){return D?nt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=x(e,r);e._x_doHide||(e._x_doHide=()=>{_(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{_(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),c=ct(u=>u?s():o(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,o):u?a():o()}),l,d=!0;n(()=>i(u=>{!d&&u===l||(t.includes("immediate")&&(u?a():o()),c(u),l=u,d=!1)}))});v("for",L((e,{expression:t},{effect:r,cleanup:n})=>{let i=Fo(t),o=x(e,i.items),s=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,r(()=>ko(e,i,o,s),{priority:"structural"}),n(()=>{e._x_lookup.forEach(a=>_(()=>{Z(a),a.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Lo(e){return t=>{Object.entries(t).forEach(([r,n])=>{e[r]=n})}}function ko(e,t,r,n){r(i=>{Wo(i)&&(i=Array.from({length:i},(l,d)=>d+1)),i==null&&(i=[]),i instanceof Set&&(i=Array.from(i)),i instanceof Map&&(i=Array.from(i));let o=e._x_lookup,s=new Map;e._x_lookup=s;let a=jo(i),c=Object.entries(i).map(([l,d])=>{a||(l=parseInt(l));let u=No(t,d,l,i),g;return n(m=>{typeof m=="object"&&E("x-for key cannot be an object, it must be a string or an integer",e),o.has(m)&&(s.set(m,o.get(m)),o.delete(m)),g=m},{scope:{index:l,...u}}),[g,u]});_(()=>{o.forEach(u=>{Z(u),u.remove()});let l=new Set,d=e;c.forEach(([u,g])=>{if(s.has(u)){let f=s.get(u);f._x_refreshXForScope(g),d.nextElementSibling!==f&&(d.nextElementSibling&&f.replaceWith(d.nextElementSibling),d.after(f)),d=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&d.after(f._x_currentIfEl),d=f._x_currentIfEl);return}e.content.children.length>1&&E("x-for templates require a single root element, additional elements will be ignored.",e);let m=document.importNode(e.content,!0).firstElementChild,O=ie(g);Se(m,O,e),m._x_refreshXForScope=Lo(O),s.set(u,m),l.add(m),d.after(m),d=m}),l.forEach(u=>T(u)),d!==e?e._x_lastRenderedEl=d:delete e._x_lastRenderedEl})})}function Fo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let s=i[1].replace(r,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function No(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function Wo(e){return typeof e!="object"&&!isNaN(e)}function jo(e){return typeof e=="object"&&!Array.isArray(e)}function li(){}li.inline=(e,{expression:t},{cleanup:r})=>{let n=je(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t]))};v("ref",li);v("if",L((e,{expression:t},{effect:r,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&E("x-if can only be used on a <template> tag",e);let i=x(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return Se(a,{},e),_(()=>{e.after(a),T(a)}),e._x_currentIfEl=a,e._x_lastRenderedEl=a,e._x_undoIf=()=>{_(()=>{Z(a),a.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(a=>{a?o():s()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>yo(e,i))});we((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});wt(_r("@",vr(V("on:"))));v("on",L((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?x(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=ee(e,t,r,a=>{o(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));Be("Collapse","collapse","collapse");Be("Intersect","intersect","intersect");Be("Focus","trap","focus");Be("Mask","mask","mask");function Be(e,t,r){v(t,n=>E(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}oe.setEvaluator(Wi);oe.setRawEvaluator(zi);oe.setReactivityEngine({reactive:kt,effect:(e,t={})=>{let r;return r=Jn(e,{scheduler:()=>{r&&(t.scheduler?t.scheduler(r):r())}}),r},release:Qn,raw:h});var $o=oe,di=$o;/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/const Bo="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-x64-setup.exe",Ho="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-arm64-setup.exe",xe="https://github.com/raggiesoft/installer-studio",zo="/vpat/raggiesoft-installer-studio-vpat-2.5.html",Vo="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function qo(){return`
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">Why I'm Building This • Open Engineering Roadmap</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">What RaggieSoft Installer Studio Aims to Solve</h2>
      <p>
        Every major Windows installer suite ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code> on every copy of Windows.
        Yet developers are routinely forced to choose between multi-thousand-dollar legacy tools, steep XML learning curves,
        unlabeled non-accessible wizard forms, or opaque binary project files that fight Git version control and AI coding agents.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> is an active, open-source MIT engineering effort to build a modern,
        zero-dependency native Win32 C++20 packaging suite from the ground up—combining visual convenience with clean plain-text
        <code>.rsip</code> manifests and 100% WCAG 2.2 AA accessibility.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.2.1</code>)</h3>
            <ul class="feature-list">
              <li><strong>9-View Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong> with 4 native <strong>AeroWizards</strong> (Project Assistant, Component &amp; KeyPath, File Associations, and Release / <code>.MST</code> / <code>.MSP</code>)</li>
              <li><strong>Destination Computer Tree &amp; Setup Design</strong> enforcing Microsoft's Official Component Rules (Single-Directory Rule, File KeyPaths, ICE38 <code>HKCU</code> Registry KeyPaths, &amp; ICE18 <code>CreateFolder</code>)</li>
              <li><strong>Dual Dialog Designer</strong> authoring both C++20 Glass / AeroWizard <code>SetupWizard.exe</code> screens AND native <code>370&times;270</code> <code>MSI.DLL</code> <code>Dialog</code> SQL tables (Express / Compact / Custom workflow)</li>
              <li><strong>First-Class File Associations</strong> supporting both zero-popup <code>HKMU\\Software\\Classes</code> registration and native MSI <code>ProgId</code> / <code>Extension</code> / <code>Verb</code> / <code>MIME</code> tables</li>
              <li><strong><code>msiprism.exe</code></strong> 64-bit Dark Mode SQL table inspector + <code>instbuild.exe --emit-ai-spec</code> &amp; <code>--emit-vpat</code></li>
            </ul>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Next Milestones on the Workbench</h3>
            <ul class="feature-list">
              <li><strong>Full Dogfood Rollout</strong>: Validating real-world upgrades, repairs, and uninstalls across all 77 RaggieSoft Windows apps, interactive novels, and audio archives</li>
              <li><strong>System Services &amp; Environment Tables</strong>: Visual &amp; declarative authoring for Windows Services (<code>ServiceInstall</code> / <code>ServiceControl</code>) and <code>PATH</code> environment variables</li>
              <li><strong>Custom Actions &amp; Prerequisite Checks</strong>: Guided AeroWizards for safe deferred system actions and runtime detection</li>
              <li><strong>Community Feedback First</strong>: Free, open-source MIT previews with zero registration walls while the architecture matures in public</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `}function Uo(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.2.1) • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        An in-development, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
        Design projects visually with modern <strong>AeroWizards</strong>, Destination Computer folder trees, and a Dual C++ &amp;
        <code>MSI.DLL</code> Dialog Designer—or let coding agents author plain-text, comment-preserving <code>.rsip</code> manifests
        that compile straight into real <code>.msi</code>, <code>.msm</code>, <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA
        <code>Setup.exe</code> installers.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Bo}">Download Technical Preview (x64)</a>
        <a class="btn btn-outline" href="${Ho}">Download Native ARM64 Preview</a>
        <a class="btn btn-outline" href="${xe}">Explore Source &amp; Roadmap on GitHub</a>
      </div>

      <!-- Interactive 3-Tab Split Preview Toggle (AeroWizard & Glass UI / MSI.DLL Express-Custom / Plain-Text .rsip) -->
      <div style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
        <div class="btn-row" role="tablist" aria-label="Installer Output and Source Preview">
          <button type="button" class="btn" :class="previewTab === 'aero' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'aero')" @click="previewTab = 'aero'">
            1. C++20 AeroWizard &amp; Glass UI
          </button>
          <button type="button" class="btn" :class="previewTab === 'wiz97' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'wiz97')" @click="previewTab = 'wiz97'">
            2. Native MSI.DLL Dialog Tables
          </button>
          <button type="button" class="btn" :class="previewTab === 'rsip' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'rsip')" @click="previewTab = 'rsip'">
            3. Plain-Text .rsip v0.3 Manifest
          </button>
        </div>

        <div x-show="previewTab === 'aero'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 AeroWizard and RaggieSoft Glass SetupWizard.exe Preview">+--------------------------------------------------------------------------+
| (&lt;-) Sample Studio App Setup                                  [ - ][ x ] |
|  Choose how you would like to install Sample Studio App                  |
+--------------------------------------------------------------------------+
|  [48x48 Bolt]    (o) Express Setup (Recommended)                         |
|                      One-click setup into default folder &amp; shortcuts     |
|  [48x48 Cube]    ( ) Compact Core Setup                                  |
|                      Essential core feature files with minimal footprint |
|  [48x48 Sliders] ( ) Custom Setup (Choose Folder, Features &amp; Shortcuts)  |
|                      Pick destination path, Start Menu &amp; file extensions |
|                                                                          |
|  [Sample Studio • 100% WCAG 2.2 AA Accessible]     [ &amp;Next &gt; ] [ Cancel ]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Native MSI.DLL Express vs Custom Dialog Table Preview">+--------------------------------------------------------------------------+
|  Sample Studio App Setup — Native MSI.DLL Dialog Table (370x270 DLU)     |
+--------------------------------------------------------------------------+
|  Choose Setup Mode (SetupTypeDlg -> CustomizeDlg / VerifyReadyDlg)       |
|                                                                          |
|  Every compiled .msi also carries the full Express / Compact / Custom +  |
|  SelectionTree + BrowseDlg + Office-style Quick Repair (pecms) vs Full   |
|  Reinstall (vomus) workflow directly in relational MSI SQL tables—plus   |
|  custom [MsiDialog.*] &amp; [MsiControl.*] forms designed in the IDE!        |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip v0.3 Project Manifest Example">; Comment-preserving .rsip v0.3 manifest — survives GUI edits byte-for-byte!
@include "templates/dialogs/express-vs-custom-workflow.rsii"

[Package]
Name              = Sample Studio IDE
Version           = 1.0.0
Manufacturer      = Sample Studio
UpgradeCode       = {8F4E20A1-7C93-4D62-9B44-1029384756AB}
Architecture      = $(ARCH)
Scope             = machine

[Install]
DefaultSubdir     = Sample StudioIDE
MainExecutable    = SampleIde.exe

[UI]
WizardLayout      = aerowizard
MsiDialogPreset   = express_custom

[Component.CoreBin]
Feature           = Main
TargetRoot        = INSTALLDIR
KeyPathKind       = file
KeyPathTarget     = SampleIde.exe

[Payload.App]
Source            = ..publishwin-$(ARCH)SampleIde.exe
Component         = CoreBin

[FileAssociation.ProjectFile]
Extension         = .sproj
ProgId            = SampleStudio.IDE.Project
Description       = Sample Studio Project
TargetFile        = SampleIde.exe
Verbs             = open:&amp;Open:"%1"</pre>
        </div>
      </div>
    </section>

    ${qo()}

    <section aria-labelledby="matrix-heading">
      <span class="eyebrow">Core Engineering Design Principles</span>
      <h2 id="matrix-heading">The "Zero-Bloat" Architecture Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>Technical Architecture Goals for RaggieSoft Installer Studio</caption>
          <thead>
            <tr>
              <th scope="col">Design Pillar</th>
              <th scope="col">RaggieSoft Installer Studio</th>
              <th scope="col">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Toolchain Footprint</th>
              <td><strong>Under 3 MB per architecture</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code> &amp; <code>msiprism.exe</code>)</td>
              <td>Instant startup on local developer workstations and CI runners without multi-gigabyte framework installs.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32\\msi.dll</code>, <code>cabinet.dll</code>, &amp; <code>gdiplus.dll</code> only)</td>
              <td>Runs cold on stock Windows 11 (<code>x64</code> &amp; native <code>ARM64</code>) with no .NET or VC++ redistributable prerequisites.</td>
            </tr>
            <tr>
              <th scope="row">Microsoft MSI Rules</th>
              <td><strong>ICE18, ICE38, ICE64 &amp; ICE80 Enforced</strong></td>
              <td>Validates Single-Directory Component rules, <code>HKCU</code> user-profile KeyPaths, <code>CreateFolder</code>, and 64-bit component attributes before <code>msi.dll</code> runs.</td>
            </tr>
            <tr>
              <th scope="row">White-Label Output</th>
              <td><strong>100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Compiled <code>Setup.exe</code> and <code>.msi</code> packages display your publisher name, icon, and copyright—zero third-party watermarks.</td>
            </tr>
            <tr>
              <th scope="row">Offline &amp; Privacy First</th>
              <td><strong>Zero Telemetry / Zero Crypto Gimmicks</strong></td>
              <td>No mandatory cloud accounts, no background network calls, and no cryptocurrency/blockchain bundles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">Four Native Binaries in One Cohesive Toolkit</span>
      <h2 id="suite-heading">Suite Spotlight: AeroWizard IDE, CLI Compiler &amp; MSI Prism</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 9-View C++20 Visual IDE</h3>
            <p>
              Features 4 guided Win32 <strong>AeroWizards</strong>, an InstallShield-style Destination Computer folder tree,
              Setup Design (Features &rarr; Components &rarr; KeyPaths), File Associations, Dual C++ &amp; <code>MSI.DLL</code>
              Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip v0.3 Schema</a>
        </article>

        <article class="card card-highlight">
          <div>
            <h3><code>instbuild.exe</code> — Headless CI &amp; AI Spec Compiler</h3>
            <p>
              Sub-millisecond <code>--validate --diagnostics=json</code> linting, automated <code>--emit-vpat</code> WCAG 2.2 AA
              conformance reports, and built-in <code>--emit-ai-spec</code> generation (<code>llms.txt</code>, <code>llms-full.txt</code>,
              <code>SKILL.md</code>) emitted directly from the C++20 <code>constexpr</code> grammar.
            </p>
          </div>
          <a class="btn btn-primary" href="/llms.txt">View Live /llms.txt Spec</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> — Native 64-Bit MSI &amp; MST Inspector</h3>
            <p>
              A clean, modern 64-bit (<code>x64</code> &amp; <code>ARM64</code>) Dark Mode replacement for Microsoft's 1999 32-bit
              <code>Orca.exe</code>—inspecting relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> databases.
            </p>
          </div>
          <a class="btn btn-outline" href="/security">Review Security Architecture</a>
        </article>
      </div>
    </section>
  `}function Gt(){return`
    <section class="hero" aria-labelledby="vpat-title">
      <span class="eyebrow">WCAG 2.2 Level AA • ADA Title II • Revised Section 508</span>
      <h1 id="vpat-title">Accessibility &amp; VPAT 2.5 Engineering</h1>
      <p class="lead">
        Accessibility shouldn't start only after an app is installed—users relying on screen readers, keyboard navigation,
        or Windows Contrast Themes have to get through the installer first. RaggieSoft Installer Studio engineers WCAG 2.2 AA
        and Revised Section 508 conformance directly into <code>SetupWizard.exe</code> and <code>instbuild.exe</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${zo}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="${xe}">Inspect C++20 Accessibility Source</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">How SetupWizard.exe Fixes Legacy Installer Accessibility Gaps</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>Full-Card Subclassed <code>BS_AUTORADIOBUTTON</code> Targets</h3>
            <p>
              Instead of tiny unlabeled radio dots paired with non-focusable graphic labels, every setup option card is a true
              Win32 <code>BS_AUTORADIOBUTTON</code> (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) exposing native UI Automation
              <code>RadioButton</code> roles and full descriptions to Narrator, NVDA, and JAWS.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>High-Contrast Focus Rings &amp; Enforced Mnemonics</h3>
            <p>
              Draws unmistakable <code>2.5px</code> keyboard focus rings (<code>12.6:1</code> in Dark Mode, <code>7.8:1</code> in Light Mode,
              exceeding WCAG 2.4.11/2.4.13) and statically verifies <code>&amp;</code> keyboard mnemonics via <code>instbuild --validate</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using pure OS <code>GetSysColor</code> tokens, themes RichEdit license text for
              <code>&ge; 15:1</code> contrast in Dark &amp; Light Mode, and scales cleanly with Windows 11's <code>TextScaleFactor</code>.
            </p>
          </div>
        </article>
      </div>

      <div class="table-wrap">
        <table>
          <caption>Automated --emit-vpat Contrast &amp; Section 508 Verification Matrix</caption>
          <thead>
            <tr>
              <th scope="col">Audit Criterion</th>
              <th scope="col">Measured Runtime Behavior</th>
              <th scope="col">Standard</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Header Banner Typography (<code>#F8FAFC</code> on <code>#0B132B</code>)</th>
              <td>17.4:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3 / 1.4.6</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Dark Mode Surface Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
              <td>16.9:1 relative luminance ratio + Mica frame</td>
              <td>WCAG 2.2 SC 1.4.3</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Light Mode Surface Text (<code>#0F172A</code> on <code>#F4F7FB</code>)</th>
              <td>16.1:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Forced High Contrast Themes (<code>SPI_GETHIGHCONTRAST</code>)</th>
              <td>Switches decorative gradients to <code>COLOR_WINDOW</code> / <code>COLOR_WINDOWTEXT</code> / <code>COLOR_HIGHLIGHT</code></td>
              <td>WCAG 2.2 SC 1.4.11 &amp; Section 508 502.2</td>
              <td><strong>Supports</strong></td>
            </tr>
            <tr>
              <th scope="row">Automated Per-Product ACR Generation</th>
              <td><code>instbuild.exe --emit-vpat &lt;project.rsip&gt; &lt;out-dir&gt;</code> emits product-specific HTML5 VPAT 2.5</td>
              <td>ADA Title II &amp; Revised Section 508</td>
              <td><strong>Built Into CLI &amp; IDE</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function Ko(){return`
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference (Schema v0.3)</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; CI Quickstarts</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects, reuse dialog and signing blocks via <code>@include "preset.rsii"</code>,
        or orchestrate multi-package workspaces inside an <code>.rsis</code> Suite. Point coding agents at
        <a href="/llms.txt">raggiesoftstudio.com/llms.txt</a> for zero-hallucination schema support.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="${xe}">View Source on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.3 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Component, KeyPath, FileAssociation, MsiDialog, Suite..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Complete .rsip v0.3 Project, .rsis Suite &amp; .rsii Include Sections</caption>
          <thead>
            <tr>
              <th scope="col">Section / Directive</th>
              <th scope="col">File Type</th>
              <th scope="col">Key Fields &amp; Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="!q || 'include rsii shared template dialog'.includes(q.toLowerCase())">
              <th scope="row"><code>@include "file.rsii"</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>Inherits shared dialog workflows, <code>[Requirements]</code>, or <code>[Signing]</code> blocks without losing comments on IDE save.</td>
            </tr>
            <tr x-show="!q || 'package name version upgradecode msi msm'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code> &amp; <code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, 3-part <code>Version</code>, <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code>, <code>DefaultSubdir</code>, <code>MainExecutable</code>.</td>
            </tr>
            <tr x-show="!q || 'feature parent subfeature level'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, <code>Level</code> (<code>1</code> = Compact/Core, <code>2+</code> = Express/Custom), and optional <code>Parent</code> sub-feature hierarchy.</td>
            </tr>
            <tr x-show="!q || 'component keypath keyfile ice18 ice38 permanent'.includes(q.toLowerCase())">
              <th scope="row"><code>[Component.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Enforces Microsoft Component Rules: single <code>TargetRoot</code>/<code>TargetSubdir</code>, <code>KeyPathKind</code> (<code>auto|file|registry|folder</code>), <code>KeyPathTarget</code>, <code>Permanent</code>, <code>NeverOverwrite</code>.</td>
            </tr>
            <tr x-show="!q || 'folder createfolder removefolder ice64'.includes(q.toLowerCase())">
              <th scope="row"><code>[Folder.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Creates destination subdirectories under any of 9 standard MSI roots via <code>CreateFolder</code> + automatic ICE64 <code>RemoveFolder</code> cleanup.</td>
            </tr>
            <tr x-show="!q || 'payload source targetroot cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[Payload.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (1+ Required)</td>
              <td><code>Source</code> (supports <code>$(ARCH)</code>), <code>TargetRoot</code>, <code>TargetSubdir</code>, optional explicit <code>Component</code> (or automatic 1-file UUIDv5 Component).</td>
            </tr>
            <tr x-show="!q || 'fileassociation extension progid verb mime icon'.includes(q.toLowerCase())">
              <th scope="row"><code>[FileAssociation.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Extension</code>, <code>ProgId</code>, <code>Description</code>, <code>TargetFile</code>, <code>Verbs</code>, <code>ContentType</code>, and <code>Advertise</code> (<code>false</code> = clean <code>HKMU\\Software\\Classes</code>; <code>true</code> = MSI SQL tables).</td>
            </tr>
            <tr x-show="!q || 'ui aerowizard glass wizardlayout msidialogpreset'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code>, <code>[MsiDialog.*]</code> &amp; <code>[MsiControl.*]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td><code>WizardLayout</code> (<code>standard|aerowizard|autorun16x9</code>), <code>MsiDialogPreset</code> (<code>express_custom|minimal</code>), plus custom <code>370&times;270</code> SQL dialogs spliced into <code>msiexec</code>!</td>
            </tr>
            <tr x-show="!q || 'suite project buildorder rsis slnx'.includes(q.toLowerCase())">
              <th scope="row"><code>[Suite]</code> &amp; <code>[Project.&lt;Id&gt;]</code></th>
              <td><code>.rsis</code> Suite</td>
              <td>Groups multiple <code>.rsip</code> projects with <code>[Variable]</code> tokens, <code>Category</code> filters, and ordered <code>BuildOrder</code> execution.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="ci-heading">
      <h2 id="ci-heading">GitHub Actions CI Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite &amp; Microsoft Component Rules (JSON)
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --validate --diagnostics=json
      - name: Compile .MSI, AeroWizard/Glass Setup.exe &amp; VPAT 2.5 ACR
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --with-vpat</pre>
    </section>
  `}function Go(){return`
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">Static /MT C++20 • Minimal SBOM • Air-Gap Friendly</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled directly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound network
        telemetry, and zero cryptocurrency/blockchain code.
      </p>
    </section>

    <section aria-labelledby="sec-pillars">
      <h2 id="sec-pillars">Four Pillars of Clean Engineering</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>1. Static <code>/MT</code> Compilation &amp; Minimal SBOM</h3>
            <p>
              No NuGet dependency graph, no npm runtime, no Electron Chromium bundle, and no external DLLs. Both the IDE/compiler
              and <code>SetupWizard.exe</code> call Microsoft's OS-serviced <code>msi.dll</code>, <code>cabinet.dll</code>, and <code>bcrypt.dll</code> directly.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>2. Dual-Layer Authenticode Code Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code>, <code>instbuild.exe</code> signs the inner <code>Product.msi</code> first, embeds the signed
              database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—supporting both local certificate thumbprints and Azure Artifact Signing.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>3. Prism-Piercing OS &amp; Silicon Verification</h3>
            <p>
              Calls <code>RtlGetVersion</code> inside <code>ntdll.dll</code> (bypassing <code>GetVersionEx</code> manifest shims) and <code>IsWow64Process2</code>
              to detect true ARM64 vs. x64 silicon even under Windows 11 Prism emulation.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>4. Permanent Zero-Telemetry &amp; Zero-Crypto Pledge</h3>
            <p>
              Neither <code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>msiprism.exe</code>, nor <code>SetupWizard.exe</code> opens a network
              socket, phones home to a license server, or bundles cryptocurrency payment SDKs.
            </p>
          </div>
        </article>
      </div>
    </section>
  `}const Jt=[{path:"/",navLabel:"Announcement & Preview",seoTitle:"RaggieSoft Installer Studio — Technical Preview",seoDescription:"Open-source Win32 C++20 Windows installer IDE and MSI compiler for x64 and ARM64 with AeroWizards, Dual Dialog Designer, and WCAG 2.2 AA accessibility.",renderBody:Uo},{path:"/docs",navLabel:"Docs & .rsip Spec",seoTitle:"Documentation & .rsip v0.3 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.3 project and .rsis suite reference covering Components, KeyPaths, File Associations, MSI Dialogs, and AI /llms.txt endpoints.",renderBody:Ko},{path:"/vpat",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe and instbuild.exe deliver native Win32 UI Automation, High Contrast support, and automated HTML5 VPAT 2.5 reports.",renderBody:Gt},{path:"/accessibility",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:Gt},{path:"/security",navLabel:"Security & Architecture",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Authenticode signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:Go}];function Jo(e){const t=Jt.find(o=>o.path===e),r=Jt.filter(o=>!!o.navLabel).map(o=>{const s=o.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${o.path}"${s}>${o.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
      <section class="hero" aria-labelledby="err-title">
        <span class="eyebrow">HTTP 404 • Route Not Found</span>
        <h1 id="err-title">Page Not Found</h1>
        <p class="lead">The requested RaggieSoft Installer Studio documentation or preview route could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to Project Announcement</a>
          <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
        </div>
      </section>
    `;return{html:`
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.2.1)</span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle studio-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open Installer Studio and RaggieSoft network menu"
          data-close-label="Close Installer Studio and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open Installer Studio and RaggieSoft network menu"
        >
          <svg class="rs-icon-bars" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg class="rs-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="header-navigation-panel" class="header-nav-panel" data-rs-collapsible="true">
          <nav aria-label="Primary Project Navigation">
            <ul class="nav-list">
              ${r}
              <li><a class="nav-link" href="${xe}">GitHub</a></li>
              <li><a class="nav-link" href="https://raggiesoft.dev">raggiesoft.dev</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${n}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Announcement &amp; Preview</a>
          <a href="/docs">Docs &amp; .rsip Spec</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="${xe}">GitHub Repository</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source Technical Preview licensed under the MIT License.
          Feedback &amp; engineering inquiries: <a href="mailto:hello@michaelpragsdale.com">hello@michaelpragsdale.com</a>.
        </p>
        <p class="disclaimer-box">${Vo}</p>
      </div>
    </footer>
  `}}const Qe=document.getElementById("app");if(Qe&&Qe.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Qe.innerHTML=Jo(e).html}window.Alpine=di;di.start();
