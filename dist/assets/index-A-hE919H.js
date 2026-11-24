(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Ze=!1,Ye=!1,R=[],Qe=-1,Oe=!1,ht=!1;function fi(e){gi(e)}function pi(){ht=!0}function hi(){ht=!1,Jt()}function gi(e){R.includes(e)||(R.push(e),e._x_schedulerPriority!==void 0&&(Oe=!0)),Jt()}function gt(e){let t=R.indexOf(e);t!==-1&&t>Qe&&R.splice(t,1)}function Jt(){if(!Ye&&!Ze){if(ht)return;Ze=!0,queueMicrotask(mi)}}function mi(){Ze=!1,Ye=!0;for(let e=0;e<R.length;e++)Oe&&_i(e),R[e](),Qe=e;R.length=0,Qe=-1,Oe=!1,Ye=!1}function _i(e){let t=new Map,r=R.slice(e).sort((n,i)=>bi(n,i,t));for(let n=0;n<r.length;n++)R[e+n]=r[n];Oe=!1}function bi(e,t,r){return Fe(e)?Fe(t)?kt(e._x_schedulerPriority.el,r)-kt(t._x_schedulerPriority.el,r)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Fe(t)?1:0}function Fe(e){return e._x_schedulerPriority!==void 0}function kt(e,t){if(t.has(e))return t.get(e);let r=0,n=e;for(;e;)r++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,r),r}var ie,Z,ne,Zt,vi=0,Xe=!0;function yi(e){Xe=!1,e(),Xe=!0}function xi(e){ie=e.reactive,ne=e.release,Z=t=>e.effect(t,{scheduler:r=>{Xe?fi(r):r()}}),Zt=e.raw}function Nt(e){Z=e}function Si(e){let t=()=>{};return[(n,i)=>{let o=(i==null?void 0:i.priority)==="structural"?vi++:void 0,s=Z(n);return o!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:o}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),ne(s))},s},()=>{t()}]}function Yt(e,t){let r=!0,n,i,o=Z(()=>{let s=e(),a=JSON.stringify(s);if(!r&&(typeof s=="object"||s!==n)){let c=typeof n=="object"?JSON.parse(i):n;queueMicrotask(()=>{t(s,c)})}n=s,i=a,r=!1});return()=>{gt(o),ne(o)}}async function wi(e){pi();try{await e(),await Promise.resolve()}finally{hi()}}var Qt=[],Xt=[],er=[];function Ai(e){er.push(e)}function mt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Xt.push(t))}function tr(e){Qt.push(e)}function rr(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function ir(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}function Ci(e){var t,r;for((t=e._x_effects)==null||t.forEach(gt);(r=e._x_cleanups)!=null&&r.length;)e._x_cleanups.pop()()}var Le=new MutationObserver(ke),_t=!1;function bt(){Le.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),_t=!0}function nr(){Ei(),Le.disconnect(),_t=!1}var W=[];function Ei(){let e=Le.takeRecords();W.push(()=>e.length>0&&ke(e));let t=W.length;queueMicrotask(()=>{if(W.length===t)for(;W.length>0;)W.shift()()})}function Ii(){for(;W.length>0;)W.shift()();let e=Le.takeRecords();e.length>0&&ke(e)}function _(e){if(!_t)return e();nr();try{return e()}finally{bt()}}var vt=!1,Te=[];function Oi(){vt=!0}function Ti(){vt=!1,ke(Te),Te=[]}function ke(e){if(vt){Te=Te.concat(e);return}let t=[],r=new Set,n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&r.add(s)}),e[o].addedNodes.forEach(s=>{if(s.nodeType===1){if(r.has(s)){r.delete(s);return}s._x_marker||t.push(s)}})),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},d=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&c===null?l():s.hasAttribute(a)?(d(),l()):d()}i.forEach((o,s)=>{ir(s,o)}),n.forEach((o,s)=>{Qt.forEach(a=>a(s,o))});for(let o of r)t.some(s=>s.contains(o))||Xt.forEach(s=>s(o));for(let o of t)o.isConnected&&er.forEach(s=>s(o));t=null,r=null,n=null,i=null}function or(e){return V(H(e))}function xe(e,t,r){return e._x_dataStack=[t,...H(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function H(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?H(e.host):e.parentNode?H(e.parentNode):[]}function V(e){return new Proxy({objects:e},Pi)}function sr(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:sr(Object.getPrototypeOf(e),t)}var Pi={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(r=>Object.prototype.hasOwnProperty.call(r,t)||Reflect.has(r,t))},get({objects:e},t,r){return t=="toJSON"?Mi:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,r)},set({objects:e},t,r,n){let i;for(const s of e)if(i=sr(s,t),i)break;i||(i=e[e.length-1]);const o=Object.getOwnPropertyDescriptor(i,t);return o!=null&&o.set&&(o!=null&&o.get)?o.set.call(n,r)||!0:Reflect.set(i,t,r)}};function Mi(){return Reflect.ownKeys(this).reduce((t,r)=>(t[r]=Reflect.get(this,r),t),{})}function yt(e,t=()=>{}){let r=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,n=(i,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:c}])=>{if(c===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let l=o===""?s:`${o}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(e,l,s,t):r(a)&&a!==i&&!(a instanceof Element)&&n(a,l)})};return n(e)}function ar(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o,s){return e(this.initialValue,()=>Ri(n,i),a=>et(n,i,a),i,o,s)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,s,a,c)=>{let l=n.initialize(o,s,a,c);return r.initialValue=l,i(o,s,a,c)}}else r.initialValue=n;return r}}function Ri(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function et(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),et(e[t[0]],t.slice(1),r)}}var cr={};function C(e,t){cr[e]=t}function he(e,t){let r=Di(t);return Object.entries(cr).forEach(([n,i])=>{Object.defineProperty(e,`$${n}`,{get(){return i(t,r)},enumerable:!1})}),e}function Di(e){let[t,r]=gr(e),n={interceptor:ar,...t};return mt(e,r),n}function Li(e,t,r,...n){try{return r(...n)}catch(i){re(i,e,t)}}function re(...e){return lr(...e)}var lr=Ni;function ki(e){lr=e}function Ni(e,t,r=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var te=!0;function dr(e){let t=te;te=!1;let r=e();return te=t,r}function B(e,t,r={}){let n;return x(e,t)(i=>n=i,r),n}function x(...e){return ur(...e)}var ur=()=>{};function Wi(e){ur=e}var fr;function $i(e){fr=e}function ji(e,t){let r={};he(r,e);let n=[r,...H(e)],i=typeof t=="function"?Bi(n,t):Hi(n,t,e);return Li.bind(null,e,t,i)}function Bi(e,t){return(r=()=>{},{scope:n={},params:i=[],context:o}={})=>{if(!te){ge(r,t,V([n,...e]),i);return}let s=t.apply(V([n,...e]),i);ge(r,s)}}var He={};function Fi(e,t){if(He[e])return He[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let s=new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return re(s,t,e),Promise.resolve()}})();return He[e]=o,o}function Hi(e,t,r){let n=Fi(t,r);return(i=()=>{},{scope:o={},params:s=[],context:a}={})=>{n.result=void 0,n.finished=!1;let c=V([o,...e]);if(typeof n=="function"){let l=n.call(a,n,c).catch(d=>re(d,r,t));n.finished?(ge(i,n.result,c,s,r),n.result=void 0):l.then(d=>{ge(i,d,c,s,r)}).catch(d=>re(d,r,t)).finally(()=>n.result=void 0)}}}function ge(e,t,r,n,i){if(te&&typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(s=>ge(e,s,r,n)).catch(s=>re(s,i,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function Vi(...e){return fr(...e)}function zi(e,t,r={}){let n={};he(n,e);let i=[n,...H(e)],o=V([r.scope??{},...i]),s=r.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(r.context,o)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,l=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(r.context,o);return typeof l=="function"&&te?l.apply(o,s):l}}var xt="x-";function z(e=""){return xt+e}function Ui(e){xt=e}var Pe={};function b(e,t){return Pe[e]=t,{before(r){if(!Pe[r]){console.warn(String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`);return}const n=j.indexOf(r);j.splice(n>=0?n:j.indexOf("DEFAULT"),0,e)}}}function qi(e){return Object.keys(Pe).includes(e)}function Ne(e,t,r){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([a,c])=>({name:a,value:c})),s=pr(o);o=o.map(a=>s.find(c=>c.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(o)}let n={};return t.map(br((o,s)=>n[o]=s)).filter(yr).map(Ji(n,r)).sort(Zi).map(o=>Ki(e,o))}function pr(e){return Array.from(e).map(br()).filter(t=>!yr(t))}var tt=!1,ce=new Map,hr=Symbol();function Gi(e){tt=!0;let t=Symbol();hr=t,ce.set(t,[]);let r=()=>{for(;ce.get(t).length;)ce.get(t).shift()();ce.delete(t)},n=()=>{tt=!1,r()};e(r),n()}function gr(e){let t=[],r=a=>t.push(a),[n,i]=Si(e);return t.push(i),[{Alpine:oe,effect:n,cleanup:r,evaluateLater:x.bind(x,e),evaluate:B.bind(B,e)},()=>t.forEach(a=>a())]}function Ki(e,t){let r=()=>{},n=Pe[t.type]||r,[i,o]=gr(e);rr(e,t.original,o);let s=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,i),n=n.bind(n,e,t,i),tt?ce.get(hr).push(n):n())};return s.runCleanups=o,s}var mr=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),_r=e=>e;function br(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=vr.reduce((o,s)=>s(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var vr=[];function St(e){vr.push(e)}function yr({name:e}){return xr().test(e)}var xr=()=>new RegExp(`^${xt}([^:^.]+)\\b`);function Ji(e,t){return({name:r,value:n})=>{r===n&&(n="");let i=r.match(xr()),o=r.match(/:([a-zA-Z0-9\-_:]+)/),s=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:n,original:a}}}var rt="DEFAULT",j=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",rt,"teleport"];function Zi(e,t){let r=j.indexOf(e.type)===-1?rt:e.type,n=j.indexOf(t.type)===-1?rt:t.type;return j.indexOf(r)-j.indexOf(n)}function U(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>U(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)U(n,t),n=n.nextElementSibling}var D=!1;function L(e,t=()=>{}){return(...r)=>D?t(...r):e(...r)}function Yi(e){return(...t)=>D&&e(...t)}var Sr=[];function Se(e){Sr.push(e)}function Qi(e,t){Sr.forEach(r=>r(e,t)),D=!0,wr(()=>{O(t,(r,n)=>{n(r,()=>{})})}),D=!1}var it=!1;function Xi(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),D=!0,it=!0,wr(()=>{en(t)}),D=!1,it=!1}function en(e){let t=!1;O(e,(n,i)=>{U(n,(o,s)=>{if(t&&an(o))return s();t=!0,i(o,s)})})}function wr(e){let t=Z;Nt((r,n)=>{let i=t(r);return ne(i),()=>{}}),e(),Nt(t)}var We=0;function tn(e,t){let r=e._x_deferInit;r||(r=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},r.ownsIgnore&&(e._x_ignore=!0),We++),r.pending++,Promise.resolve(t).catch(n=>{try{re(n,e)}catch(i){setTimeout(()=>{throw i},0)}}).then(()=>rn(e,r))}function rn(e,t){t.pending--,!(t.pending>0)&&(Ii(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,We--,e.isConnected&&(on(t),O(e))))}function nn(e,t){if(We===0)return!1;let r=w(e,n=>n._x_deferInit);return r?(Ar(r._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function Ar(e,t,r){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),r.forEach(i=>n.names.add(i))}function on(e){e.queuedAttributes.forEach((t,r)=>{if(!r.isConnected||!r._x_marker||r._x_marker!==t.marker)return;let n=w(r,o=>o._x_deferInit);if(n){Ar(n._x_deferInit,r,Array.from(t.names));return}let i=Array.from(t.names).filter(o=>r.hasAttribute(o)).map(o=>({name:o,value:r.getAttribute(o)}));i.length!==0&&Ne(r,i).forEach(o=>o())})}Se((e,t)=>{We!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||w(e,r=>r._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,r={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0,...n}))}function I(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Wt=!1;function sn(){Wt&&I("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Wt=!0,document.body||I("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),bt(),Ai(t=>O(t,U)),mt(t=>Y(t)),tr((t,r)=>{nn(t,r)||Ne(t,r).forEach(n=>n())});let e=t=>!$e(t.parentElement,!0);Array.from(document.querySelectorAll(Ir().join(","))).filter(e).forEach(t=>{O(t)}),le(document,"alpine:initialized"),setTimeout(()=>{dn()})}var wt=[],Cr=[];function Er(){return wt.map(e=>e())}function Ir(){return wt.concat(Cr).map(e=>e())}function Or(e){wt.push(e)}function Tr(e){Cr.push(e)}function $e(e,t=!1){return w(e,r=>{if((t?Ir():Er()).some(i=>r.matches(i)))return!0})}function w(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return w(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return w(e.parentNode.host,t);if(e.parentElement)return w(e.parentElement,t)}}function an(e){return Er().some(t=>e.matches(t))}var Pr=[];function cn(e){Pr.push(e)}var ln=1;function O(e,t=U,r=()=>{}){w(e,n=>n._x_ignore)||Gi(()=>{t(e,(n,i)=>{n._x_marker||(r(n,i),Pr.forEach(o=>o(n,i)),Ne(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=ln++),n._x_ignore&&i())})})}function Y(e,t=U){t(e,r=>{Ci(r),ir(r),delete r._x_marker})}function dn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,r,n])=>{qi(r)||n.some(i=>{if(document.querySelector(i))return I(`found "${i}", but missing ${t} plugin`),!0})})}var nt=[],At=!1;function Ct(e=()=>{}){return queueMicrotask(()=>{At||setTimeout(()=>{ot()})}),new Promise(t=>{nt.push(()=>{e(),t()})})}function ot(){for(At=!1;nt.length;)nt.shift()()}function un(){At=!0}function Et(e,t){return Array.isArray(t)?$t(e,t.join(" ")):typeof t=="object"&&t!==null?fn(e,t):typeof t=="function"?Et(e,t()):$t(e,t)}function st(e){return e.split(/\s/).filter(Boolean)}function $t(e,t){let r=i=>st(i).filter(o=>!e.classList.contains(o)).filter(Boolean),n=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",n(r(t))}function fn(e,t){let r=Object.entries(t).flatMap(([s,a])=>a?st(s):!1).filter(Boolean),n=Object.entries(t).flatMap(([s,a])=>a?!1:st(s)).filter(Boolean),i=[],o=[];return n.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),r.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),i.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),i.forEach(s=>e.classList.remove(s))}}function je(e,t){return typeof t=="object"&&t!==null?pn(e,t):hn(e,t)}function pn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],n.startsWith("--")||(n=gn(n)),e.style.setProperty(n,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{je(e,r)}}function hn(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function gn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function at(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}b("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n!==!1&&(!n||typeof n=="boolean"?_n(e,r,t):mn(e,n,t))});function mn(e,t,r){Mr(e,Et,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function _n(e,t,r){Mr(e,je);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((y,Q)=>Q<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((y,Q)=>Q>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),l=a?0:1,d=c?se(t,"scale",95)/100:1,u=se(t,"delay",0)/1e3,g=se(t,"origin","center"),m="opacity, transform",T=se(t,"duration",150)/1e3,f=se(t,"duration",75)/1e3,v="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${T}s`,transitionTimingFunction:v},e._x_transition.enter.start={opacity:l,transform:`scale(${d})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${f}s`,transitionTimingFunction:v},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${d})`})}function Mr(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){ct(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){ct(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>i(r);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):o():e._x_transition?e._x_transition.in(r):o();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let s=Rr(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):i(()=>{let a=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(a)]).then(([d])=>d==null?void 0:d());return delete c._x_hidePromise,delete c._x_hideChildren,l};a(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Rr(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Rr(t)}function ct(e,t,{during:r,start:n,end:i}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),s();return}let a,c,l;bn(e,{start(){a=t(e,n)},during(){c=t(e,r)},before:o,end(){a(),l=t(e,i)},after:s,cleanup(){c(),l()}})}function bn(e,t){let r,n,i,o=at(()=>{_(()=>{r=!0,n||t.before(),i||(t.end(),ot()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:at(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},_(()=>{t.start(),t.during()}),un(),requestAnimationFrame(()=>{if(r)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),_(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(_(()=>{t.end()}),ot(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function se(e,t,r){if(e.indexOf(t)===-1)return r;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"||t==="delay"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Dr(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=ie({})),e._x_bindings[t]=r,t=n.includes("camel")?En(t):t,t){case"value":vn(e,r);break;case"style":xn(e,r);break;case"class":yn(e,r);break;case"selected":case"checked":Sn(e,t,r);break;default:It(e,t,r);break}}function vn(e,t){if(Ot(e))e.attributes.value===void 0&&(e.value=t);else if(Me(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>In(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Cn(e,t);else if(e.tagName==="OPTION")It(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function yn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Et(e,t)}function xn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=je(e,t)}function Sn(e,t,r){It(e,t,r),An(e,t,r)}function It(e,t,r){[null,void 0,!1].includes(r)&&Tn(t)?e.removeAttribute(t):(Lr(t)&&(r=t),Pn(r)&&(r=JSON.stringify(r)),wn(e,t,r))}function wn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function An(e,t,r){e[t]!==r&&(e[t]=r)}function Cn(e,t){const r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function En(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function In(e,t){return e==t}function Ie(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var On=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Lr(e){return On.has(e)}function Tn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Pn(e){return typeof e=="object"&&e!==null}function Mn(e,t,r){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:kr(e,t,r)}function Rn(e,t,r,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=n,dr(()=>B(e,i.expression))}return kr(e,t,r)}function kr(e,t,r){let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:n===""?!0:Lr(t)?!![t,"true"].includes(n):n}function Me(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Ot(e){return e.type==="radio"||e.localName==="ui-radio"}function Nr(e,t){let r;return function(){const n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function Wr(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function $r({get:e,set:t},{get:r,set:n}){let i=!0,o,s=Z(()=>{let a=e(),c=r();if(i)n(Ve(a)),i=!1;else{let l=JSON.stringify(a),d=JSON.stringify(c);l!==o?n(Ve(a)):l!==d&&t(Ve(c))}o=JSON.stringify(e()),JSON.stringify(r())});return()=>{gt(s),ne(s)}}function Ve(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Dn(e){(Array.isArray(e)?e:[e]).forEach(r=>r(oe))}var M={},jt=!1;function Ln(e,t){if(jt||(M=ie(M),jt=!0),t===void 0)return M[e];M[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?M[e]=t.initialize(M,e,e,()=>{}):yt(M[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&M[e].init()}function kn(){return M}var jr={};function Nn(e,t){let r=typeof t!="function"?()=>t:t;return e instanceof Element?Br(e,r()):(jr[e]=r,()=>{})}function Wn(e){return Object.entries(jr).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}function Br(e,t,r){let n=[];for(;n.length;)n.pop()();let i=Object.entries(t).map(([s,a])=>({name:s,value:a})),o=pr(i);return i=i.map(s=>o.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),Ne(e,i,r).map(s=>{n.push(s.runCleanups),s()}),()=>{for(;n.length;)n.pop()()}}var Fr={};function $n(e,t){Fr[e]=t}function jn(e,t){return Object.entries(Fr).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var Bn={get reactive(){return ie},get release(){return ne},get effect(){return Z},get raw(){return Zt},get transaction(){return wi},version:"3.17.5",flushAndStopDeferringMutations:Ti,dontAutoEvaluateFunctions:dr,disableEffectScheduling:yi,startObservingMutations:bt,stopObservingMutations:nr,setReactivityEngine:xi,onAttributeRemoved:rr,onAttributesAdded:tr,closestDataStack:H,skipDuringClone:L,onlyDuringClone:Yi,addRootSelector:Or,addInitSelector:Tr,setErrorHandler:ki,interceptClone:Se,addScopeToNode:xe,deferMutations:Oi,mapAttributes:St,evaluateLater:x,interceptInit:cn,initInterceptors:yt,injectMagics:he,setEvaluator:Wi,setRawEvaluator:$i,mergeProxies:V,extractProp:Rn,findClosest:w,onElRemoved:mt,closestRoot:$e,destroyTree:Y,interceptor:ar,transition:ct,setStyles:je,mutateDom:_,deferInit:tn,directive:b,entangle:$r,throttle:Wr,debounce:Nr,evaluate:B,evaluateRaw:Vi,initTree:O,nextTick:Ct,prefixed:z,prefix:Ui,plugin:Dn,magic:C,store:Ln,start:sn,clone:Xi,cloneNode:Qi,bound:Mn,$data:or,watch:Yt,walk:U,data:$n,bind:Nn},oe=Bn;function Fn(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}var me=Object.assign,Hn=Object.prototype.hasOwnProperty,lt=(e,t)=>Hn.call(e,t),_e=Array.isArray,de=e=>Hr(e)==="[object Map]",Vn=e=>typeof e=="string",we=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",zn=Object.prototype.toString,Hr=e=>zn.call(e),Vr=e=>Hr(e).slice(8,-1),Tt=e=>Vn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},qn=Un(e=>e.charAt(0).toUpperCase()+e.slice(1)),$=(e,t)=>!Object.is(e,t);function q(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var p,ze=new WeakSet,Bt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ze.has(this)&&(ze.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ft(this),Ur(this);const e=p,t=A;p=this,A=!0;try{return this.fn()}finally{p!==this&&q("Active effect was not restored correctly - this is likely a Vue internal bug."),qr(this),p=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rt(e);this.deps=this.depsTail=void 0,Ft(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ze.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}},zr=0,ue,fe;function Gn(e,t=!1){if(e.flags|=8,t){e.next=fe,fe=e;return}e.next=ue,ue=e}function Pt(){zr++}function Mt(){if(--zr>0)return;if(fe){let t=fe;for(fe=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;ue;){let t=ue;for(ue=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Ur(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qr(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),Rt(n),Jn(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function dt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Re)||(e.globalVersion=Re,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const t=e.dep,r=p,n=A;p=e,A=!0;try{Ur(e);const i=e.fn(e._value);(t.version===0||$(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{p=r,A=n,qr(e),e.flags&=-3}}function Rt(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subsHead===e&&(r.subsHead=i),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let o=r.computed.deps;o;o=o.nextDep)Rt(o,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Jn(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}function Zn(e,t){e.effect instanceof Bt&&(e=e.effect.fn);const r=new Bt(e);t&&me(r,t);try{r.run()}catch(i){throw r.stop(),i}const n=r.run.bind(r);return n.effect=r,n}function Yn(e){e.effect.stop()}var A=!0,Gr=[];function Qn(){Gr.push(A),A=!1}function Xn(){const e=Gr.pop();A=e===void 0?!0:e}function Ft(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=p;p=void 0;try{t()}finally{p=r}}}var Re=0,eo=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},to=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!p||!A||p===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==p)t=this.activeLink=new eo(p,this),p.deps?(t.prevDep=p.depsTail,p.depsTail.nextDep=t,p.depsTail=t):p.deps=p.depsTail=t,Kr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=p.depsTail,t.nextDep=void 0,p.depsTail.nextDep=t,p.depsTail=t,p.deps===t&&(p.deps=r)}return p.onTrack&&p.onTrack(me({effect:p},e)),t}trigger(e){this.version++,Re++,this.notify(e)}notify(e){Pt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(me({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mt()}}};function Kr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Kr(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ut=new WeakMap,F=Symbol("Object iterate"),ft=Symbol("Map keys iterate"),ve=Symbol("Array iterate");function S(e,t,r){if(A&&p){let n=ut.get(e);n||ut.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new to),i.map=n,i.key=r),i.track({target:e,type:t,key:r})}}function k(e,t,r,n,i,o){const s=ut.get(e);if(!s){Re++;return}const a=c=>{c&&c.trigger({target:e,type:t,key:r,newValue:n,oldValue:i,oldTarget:o})};if(Pt(),t==="clear")s.forEach(a);else{const c=_e(e),l=c&&Tt(r);if(c&&r==="length"){const d=Number(n);s.forEach((u,g)=>{(g==="length"||g===ve||!we(g)&&g>=d)&&a(u)})}else switch((r!==void 0||s.has(void 0))&&a(s.get(r)),l&&a(s.get(ve)),t){case"add":c?l&&a(s.get("length")):(a(s.get(F)),de(e)&&a(s.get(ft)));break;case"delete":c||(a(s.get(F)),de(e)&&a(s.get(ft)));break;case"set":de(e)&&a(s.get(F));break}}Mt()}function X(e){const t=h(e);return t===e?t:(S(t,"iterate",ve),K(e)?t:t.map(J))}function Dt(e){return S(e=h(e),"iterate",ve),e}function E(e,t){return G(e)?ti(e)?ye(J(t)):ye(t):J(t)}var ro={__proto__:null,[Symbol.iterator](){return Ue(this,Symbol.iterator,e=>E(this,e))},concat(...e){return X(this).concat(...e.map(t=>_e(t)?X(t):t))},entries(){return Ue(this,"entries",e=>(e[1]=E(this,e[1]),e))},every(e,t){return P(this,"every",e,t,void 0,arguments)},filter(e,t){return P(this,"filter",e,t,r=>r.map(n=>E(this,n)),arguments)},find(e,t){return P(this,"find",e,t,r=>E(this,r),arguments)},findIndex(e,t){return P(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return P(this,"findLast",e,t,r=>E(this,r),arguments)},findLastIndex(e,t){return P(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return P(this,"forEach",e,t,void 0,arguments)},includes(...e){return qe(this,"includes",e)},indexOf(...e){return qe(this,"indexOf",e)},join(e){return X(this).join(e)},lastIndexOf(...e){return qe(this,"lastIndexOf",e)},map(e,t){return P(this,"map",e,t,void 0,arguments)},pop(){return ae(this,"pop")},push(...e){return ae(this,"push",e)},reduce(e,...t){return Ht(this,"reduce",e,t)},reduceRight(e,...t){return Ht(this,"reduceRight",e,t)},shift(){return ae(this,"shift")},some(e,t){return P(this,"some",e,t,void 0,arguments)},splice(...e){return ae(this,"splice",e)},toReversed(){return X(this).toReversed()},toSorted(e){return X(this).toSorted(e)},toSpliced(...e){return X(this).toSpliced(...e)},unshift(...e){return ae(this,"unshift",e)},values(){return Ue(this,"values",e=>E(this,e))}};function Ue(e,t,r){const n=Dt(e),i=n[t]();return n!==e&&!K(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=r(o.value)),o}),i}var io=Array.prototype;function P(e,t,r,n,i,o){const s=Dt(e),a=s!==e&&!K(e),c=s[t];if(c!==io[t]){const u=c.apply(e,o);return a?J(u):u}let l=r;s!==e&&(a?l=function(u,g){return r.call(this,E(e,u),g,e)}:r.length>2&&(l=function(u,g){return r.call(this,u,g,e)}));const d=c.call(s,l,n);return a&&i?i(d):d}function Ht(e,t,r,n){const i=Dt(e),o=i!==e&&!K(e);let s=r,a=!1;i!==e&&(o?(a=n.length===0,s=function(l,d,u){return a&&(a=!1,l=E(e,l)),r.call(this,l,E(e,d),u,e)}):r.length>3&&(s=function(l,d,u){return r.call(this,l,d,u,e)}));const c=i[t](s,...n);return a?E(e,c):c}function qe(e,t,r){const n=h(e);S(n,"iterate",ve);const i=n[t](...r);return(i===-1||i===!1)&&bo(r[0])?(r[0]=h(r[0]),n[t](...r)):i}function ae(e,t,r=[]){Qn(),Pt();const n=h(e)[t].apply(e,r);return Mt(),Xn(),n}var no=Fn("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(we));function oo(e){we(e)||(e=String(e));const t=h(this);return S(t,"has",e),t.hasOwnProperty(e)}var Zr=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(n?i?mo:Xr:i?go:Qr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!n){let a;if(o&&(a=ro[t]))return a;if(t==="hasOwnProperty")return oo}const s=Reflect.get(e,t,pe(e)?e:r);if((we(t)?Jr.has(t):no(t))||(n||S(e,"get",t),i))return s;if(pe(s)){const a=o&&Tt(t)?s:s.value;return n&&be(a)?pt(a):a}return be(s)?n?pt(s):Lt(s):s}},so=class extends Zr{constructor(e=!1){super(!1,e)}set(e,t,r,n){let i=e[t];const o=_e(e)&&Tt(t);if(!this._isShallow){const c=G(i);if(!K(r)&&!G(r)&&(i=h(i),r=h(r)),!o&&pe(i)&&!pe(r))return c?(q(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(i.value=r,!0)}const s=o?Number(t)<e.length:lt(e,t),a=Reflect.set(e,t,r,pe(e)?e:n);return e===h(n)&&a&&(s?$(r,i)&&k(e,"set",t,r,i):k(e,"add",t,r)),a}deleteProperty(e,t){const r=lt(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&k(e,"delete",t,void 0,n),i}has(e,t){const r=Reflect.has(e,t);return(!we(t)||!Jr.has(t))&&S(e,"has",t),r}ownKeys(e){return S(e,"iterate",_e(e)?"length":F),Reflect.ownKeys(e)}},ao=class extends Zr{constructor(e=!1){super(!0,e)}set(e,t){return q(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return q(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},co=new so,lo=new ao,Ae=e=>Reflect.getPrototypeOf(e);function uo(e,t,r){return function(...n){const i=this.__v_raw,o=h(i),s=de(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=i[e](...n),d=t?ye:J;return!t&&S(o,"iterate",c?ft:F),me(Object.create(l),{next(){const{value:u,done:g}=l.next();return g?{value:u,done:g}:{value:a?[d(u[0]),d(u[1])]:d(u),done:g}}})}}function Ce(e){return function(...t){{const r=t[0]?`on key "${t[0]}" `:"";q(`${qn(e)} operation ${r}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function fo(e,t){const r={get(i){const o=this.__v_raw,s=h(o),a=h(i);e||($(i,a)&&S(s,"get",i),S(s,"get",a));const{has:c}=Ae(s),l=e?ye:J;if(c.call(s,i))return l(o.get(i));if(c.call(s,a))return l(o.get(a));o!==s&&o.get(i)},get size(){const i=this.__v_raw;return!e&&S(h(i),"iterate",F),i.size},has(i){const o=this.__v_raw,s=h(o),a=h(i);return e||($(i,a)&&S(s,"has",i),S(s,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const s=this,a=s.__v_raw,c=h(a),l=e?ye:J;return!e&&S(c,"iterate",F),a.forEach((d,u)=>i.call(o,l(d),l(u),s))}};return me(r,e?{add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear")}:{add(i){const o=h(this),s=Ae(o),a=h(i),c=!K(i)&&!G(i)?a:i;return s.has.call(o,c)||$(i,c)&&s.has.call(o,i)||$(a,c)&&s.has.call(o,a)||(o.add(c),k(o,"add",c,c)),this},set(i,o){!K(o)&&!G(o)&&(o=h(o));const s=h(this),{has:a,get:c}=Ae(s);let l=a.call(s,i);l?Vt(s,a,i):(i=h(i),l=a.call(s,i));const d=c.call(s,i);return s.set(i,o),l?$(o,d)&&k(s,"set",i,o,d):k(s,"add",i,o),this},delete(i){const o=h(this),{has:s,get:a}=Ae(o);let c=s.call(o,i);c?Vt(o,s,i):(i=h(i),c=s.call(o,i));const l=a?a.call(o,i):void 0,d=o.delete(i);return c&&k(o,"delete",i,void 0,l),d},clear(){const i=h(this),o=i.size!==0,s=de(i)?new Map(i):new Set(i),a=i.clear();return o&&k(i,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=uo(i,e)}),r}function Yr(e,t){const r=fo(e);return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(lt(r,i)&&i in n?r:n,i,o)}var po={get:Yr(!1)},ho={get:Yr(!0)};function Vt(e,t,r){const n=h(r);if(n!==r&&t.call(e,n)){const i=Vr(e);q(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Qr=new WeakMap,go=new WeakMap,Xr=new WeakMap,mo=new WeakMap;function _o(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lt(e){return G(e)?e:ei(e,!1,co,po,Qr)}function pt(e){return ei(e,!0,lo,ho,Xr)}function ei(e,t,r,n,i){if(!be(e))return q(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const s=_o(Vr(e));if(s===0)return e;const a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function ti(e){return G(e)?ti(e.__v_raw):!!(e&&e.__v_isReactive)}function G(e){return!!(e&&e.__v_isReadonly)}function K(e){return!!(e&&e.__v_isShallow)}function bo(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var J=e=>be(e)?Lt(e):e,ye=e=>be(e)?pt(e):e;function pe(e){return e?e.__v_isRef===!0:!1}C("nextTick",()=>Ct);C("dispatch",e=>le.bind(le,e));C("watch",(e,{evaluateLater:t,cleanup:r})=>(n,i)=>{let o=t(n),a=Yt(()=>{let c;return o(l=>c=l),c},i);r(a)});C("store",kn);C("data",e=>or(e));C("root",e=>$e(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=V(vo(e))),e._x_refs_proxy));function vo(e){let t=[];return w(e,r=>{r._x_refs&&t.push(r._x_refs)}),t}var Ge={};function ri(e){return Ge[e]||(Ge[e]=0),++Ge[e]}function yo(e,t){return w(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function xo(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ri(t))}C("id",(e,{cleanup:t})=>(r,n=null)=>{let i=`${r}${n?`-${n}`:""}`;return So(e,i,t,()=>{let o=yo(e,r),s=o?o._x_ids[r]:ri(r);return n?`${r}-${s}-${n}`:`${r}-${s}`})});Se((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function So(e,t,r,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=n();return e._x_id[t]=i,r(()=>{delete e._x_id[t]}),i}C("el",e=>e);ii("Focus","focus","focus");ii("Persist","persist","persist");function ii(e,t,r){C(t,n=>I(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}b("modelable",(e,{expression:t},{effect:r,evaluateLater:n,cleanup:i})=>{let o=n(t),s=()=>{let d;return o(u=>d=u),d},a=n(`${t} = __placeholder`),c=d=>a(()=>{},{scope:{__placeholder:d}}),l=s();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let d=e._x_model.get,u=e._x_model.setWithModifiers,g=$r({get(){return d()},set(m){u(m)}},{get(){return s()},set(m){c(m)}});i(g)})});b("teleport",(e,{modifiers:t,expression:r},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&I("x-teleport can only be used on a <template> tag",e);let i=zt(r),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{o.addEventListener(a,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),xe(o,{},e);let s=(a,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(a,c):l.includes("append")?c.parentNode.insertBefore(a,c.nextSibling):c.appendChild(a)};_(()=>{L(()=>{s(o,i,t),O(o)})()}),e._x_teleportPutBack=()=>{let a=zt(r);_(()=>{s(e._x_teleport,a,t)})},n(()=>_(()=>{o.remove(),Y(o)}))});var wo=document.createElement("div");function zt(e){let t=L(()=>document.querySelector(e),()=>wo)();return t||I(`Cannot find x-teleport element for selector: "${e}"`),t}var ni=()=>{};ni.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};b("ignore",ni);b("effect",L((e,{expression:t},{effect:r})=>{r(x(e,t))}));function ee(e,t,r,n){let i=e,o=c=>n(c),s={},a=(c,l)=>d=>l(c,d);return r.includes("dot")&&(t=Ao(t)),r.includes("camel")&&(t=Co(t)),r.includes("capture")&&(s.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("passive")&&(s.passive=r[r.indexOf("passive")+1]!=="false"),o=oi(r,o),r.includes("prevent")&&(o=a(o,(c,l)=>{l.preventDefault(),c(l)})),r.includes("stop")&&(o=a(o,(c,l)=>{l.stopPropagation(),c(l)})),r.includes("once")&&(o=a(o,(c,l)=>{c(l),i.removeEventListener(t,o,s)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=a(o,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),r.includes("self")&&(o=a(o,(c,l)=>{l.target===e&&c(l)})),t==="submit"&&(o=a(o,(c,l)=>{l.target._x_pendingModelUpdates&&l.target._x_pendingModelUpdates.forEach(d=>d()),c(l)})),(Io(t)||si(t))&&(o=a(o,(c,l)=>{To(l,r)||c(l)})),i.addEventListener(t,o,s),()=>{i.removeEventListener(t,o,s)}}function oi(e,t){if(e.includes("debounce")){let r=e[e.indexOf("debounce")+1]||"invalid-wait",n=De(r.split("ms")[0])?Number(r.split("ms")[0]):250;t=Nr(t,n)}if(e.includes("throttle")){let r=e[e.indexOf("throttle")+1]||"invalid-wait",n=De(r.split("ms")[0])?Number(r.split("ms")[0]):250;t=Wr(t,n)}return t}function Ao(e){return e.replace(/-/g,".")}function Co(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function De(e){return!Array.isArray(e)&&!isNaN(e)}function Eo(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Io(e){return["keydown","keyup"].includes(e)}function si(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Oo=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function To(e,t){let r=t.filter((o,s)=>o==="false"&&t[s-1]==="passive"?!1:!Oo.includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,De((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.includes("throttle")){let o=r.indexOf("throttle");r.splice(o,De((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&Ut(e.key).includes(r[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&(si(e.type)||Ut(e.key).includes(r[0])))}function Ut(e){if(!e)return[];e=Eo(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}b("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=e;t.includes("parent")&&(o=w(e,f=>f!==e));let s=x(o,r),a;typeof r=="string"?a=x(o,`${r} = __placeholder`):typeof r=="function"&&typeof r()=="string"?a=x(o,`${r()} = __placeholder`):a=()=>{};let c=()=>{let f;return s(v=>f=v),qt(f)?f.get():f},l=f=>{let v;s(y=>v=y),qt(v)?v.set(f):a(()=>{},{scope:{__placeholder:f}})};typeof r=="string"&&e.type==="radio"&&_(()=>{e.hasAttribute("name")||e.setAttribute("name",r)});let d=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),m=d||u||g,T;if(D)T=()=>{};else if(m){let f=[],v=y=>l(Ee(e,t,y,c()));if(d&&f.push(ee(e,"change",t,v)),u&&(f.push(ee(e,"blur",t,v)),e.form)){let y=e.form,Q=()=>v({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(Q),i(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(Q),1)})}g&&f.push(ee(e,"keydown",t,y=>{y.key==="Enter"&&v(y)})),T=()=>f.forEach(y=>y())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";T=ee(e,f,t,v=>{l(Ee(e,t,v,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Me(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Ee(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=T,i(()=>e._x_removeModelListeners.default()),e.form){let f=ee(e.form,"reset",[],v=>{Ct(()=>e._x_model&&e._x_model.set(Ee(e,t,{target:e},c())))});i(()=>f())}if(e._x_model={get(){return c()},set(f){l(f)},setWithModifiers:oi(t,l)},e._x_forceModelUpdate=f=>{f===void 0&&typeof r=="string"&&r.match(/\./)&&(f=""),_(()=>{Me(e)?Array.isArray(f)?e.checked=f.some(v=>v==e.value):e.checked=!!f:Ot(e)?typeof f=="boolean"?e.checked=Ie(e.value)===f:e.checked=e.value==f:Dr(e,"value",f)})},e.tagName==="SELECT"){let f=new MutationObserver(()=>{e._x_forceModelUpdate(c())});f.observe(e,{childList:!0}),i(()=>f.disconnect())}n(()=>{let f=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function Ee(e,t,r,n){return _(()=>{if(r instanceof CustomEvent&&r.detail!==void 0)return r.detail!==null&&r.detail!==void 0?r.detail:r.target.value;if(Me(e))if(Array.isArray(n)){let i=null;return t.includes("number")?i=Ke(r.target.value):t.includes("boolean")?i=Ie(r.target.value):i=r.target.value,r.target.checked?n.includes(i)?n:n.concat([i]):n.filter(o=>!Po(o,i))}else return r.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Ke(o)}):t.includes("boolean")?Array.from(r.target.selectedOptions).map(i=>{let o=i.value||i.text;return Ie(o)}):Array.from(r.target.selectedOptions).map(i=>i.value||i.text);{let i;return Ot(e)?r.target.checked?i=r.target.value:i=n:i=r.target.value,t.includes("number")?Ke(i):t.includes("boolean")?Ie(i):t.includes("trim")?i.trim():i}}})}function Ke(e){let t=e?parseFloat(e):null;return Mo(t)?t:e}function Po(e,t){return e==t}function Mo(e){return!Array.isArray(e)&&!isNaN(e)}function qt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}b("cloak",e=>{if(D)return e.removeAttribute(z("cloak"));queueMicrotask(()=>_(()=>e.removeAttribute(z("cloak"))))});Tr(()=>`[${z("init")}]`);b("init",L((e,{expression:t},{evaluate:r})=>typeof t=="string"?!!t.trim()&&r(t,{},!1):r(t,{},!1)));b("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{e.textContent=o})})})});b("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{_(()=>{Array.from(e.children).forEach(s=>Y(s)),e.innerHTML=o??"",e._x_ignoreSelf=!0,O(e),delete e._x_ignoreSelf})})},{priority:"structural"})});St(mr(":",_r(z("bind:"))));var ai=(e,{value:t,modifiers:r,expression:n,original:i},{effect:o,cleanup:s})=>{if(!t){let c={};Wn(c),x(e,n)(d=>{Br(e,d,i)},{scope:c});return}if(t==="key")return Ro(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=x(e,n);o(()=>a(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),_(()=>Dr(e,t,c,r))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};ai.inline=(e,{value:t,modifiers:r,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};b("bind",ai);function Ro(e,t){e._x_keyExpression=t}Or(()=>`[${z("data")}]`);var N=Symbol();b("data",(e,{expression:t},{cleanup:r})=>{if(Lo(e))return;let n=e[N];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let i={};he(i,e);let o={};jn(o,i);let s=B(e,t,{scope:o});(s===void 0||s===!0)&&(s={}),he(s,e);let a;if(n!=null&&n.reactiveData){a=n.reactiveData,Do(a,s);let l={expression:t};e[N]=l,queueMicrotask(()=>{e[N]===l&&delete e[N]})}else a=ie(s);yt(a,r);let c=xe(e,a);L(()=>{a.init&&B(e,a.init)})(),r(()=>{a.destroy&&B(e,a.destroy),c();let l={reactiveData:a};e[N]=l,queueMicrotask(()=>{e[N]===l&&delete e[N]})})});function Do(e,t){Object.keys(t).forEach(r=>{let n=Object.getOwnPropertyDescriptor(t,r),i=Object.getOwnPropertyDescriptor(e,r);n.get||n.set||i!=null&&i.get||i!=null&&i.set?(i&&delete e[r],i||(e[r]=void 0),n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]):e[r]=t[r]}),Object.keys(e).filter(r=>!Object.prototype.hasOwnProperty.call(t,r)).forEach(r=>delete e[r])}Se((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Lo(e){return D?it?!0:e.hasAttribute("data-has-alpine-state"):!1}b("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=x(e,r);e._x_doHide||(e._x_doHide=()=>{_(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{_(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),c=at(u=>u?s():o(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,o):u?a():o()}),l,d=!0;n(()=>i(u=>{!d&&u===l||(t.includes("immediate")&&(u?a():o()),c(u),l=u,d=!1)}))});b("for",L((e,{expression:t},{effect:r,cleanup:n})=>{let i=Wo(t),o=x(e,i.items),s=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,r(()=>No(e,i,o,s),{priority:"structural"}),n(()=>{e._x_lookup.forEach(a=>_(()=>{Y(a),a.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function ko(e){return t=>{Object.entries(t).forEach(([r,n])=>{e[r]=n})}}function No(e,t,r,n){r(i=>{jo(i)&&(i=Array.from({length:i},(l,d)=>d+1)),i==null&&(i=[]),i instanceof Set&&(i=Array.from(i)),i instanceof Map&&(i=Array.from(i));let o=e._x_lookup,s=new Map;e._x_lookup=s;let a=Bo(i),c=Object.entries(i).map(([l,d])=>{a||(l=parseInt(l));let u=$o(t,d,l,i),g;return n(m=>{typeof m=="object"&&I("x-for key cannot be an object, it must be a string or an integer",e),o.has(m)&&(s.set(m,o.get(m)),o.delete(m)),g=m},{scope:{index:l,...u}}),[g,u]});_(()=>{o.forEach(u=>{Y(u),u.remove()});let l=new Set,d=e;c.forEach(([u,g])=>{if(s.has(u)){let f=s.get(u);f._x_refreshXForScope(g),d.nextElementSibling!==f&&(d.nextElementSibling&&f.replaceWith(d.nextElementSibling),d.after(f)),d=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&d.after(f._x_currentIfEl),d=f._x_currentIfEl);return}e.content.children.length>1&&I("x-for templates require a single root element, additional elements will be ignored.",e);let m=document.importNode(e.content,!0).firstElementChild,T=ie(g);xe(m,T,e),m._x_refreshXForScope=ko(T),s.set(u,m),l.add(m),d.after(m),d=m}),l.forEach(u=>O(u)),d!==e?e._x_lastRenderedEl=d:delete e._x_lastRenderedEl})})}function Wo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let s=i[1].replace(r,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function $o(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function jo(e){return typeof e!="object"&&!isNaN(e)}function Bo(e){return typeof e=="object"&&!Array.isArray(e)}function ci(){}ci.inline=(e,{expression:t},{cleanup:r})=>{let n=$e(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t]))};b("ref",ci);b("if",L((e,{expression:t},{effect:r,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&I("x-if can only be used on a <template> tag",e);let i=x(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return xe(a,{},e),_(()=>{e.after(a),O(a)}),e._x_currentIfEl=a,e._x_lastRenderedEl=a,e._x_undoIf=()=>{_(()=>{Y(a),a.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(a=>{a?o():s()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));b("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>xo(e,i))});Se((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});St(mr("@",_r(z("on:"))));b("on",L((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?x(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=ee(e,t,r,a=>{o(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));Be("Collapse","collapse","collapse");Be("Intersect","intersect","intersect");Be("Focus","trap","focus");Be("Mask","mask","mask");function Be(e,t,r){b(t,n=>I(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}oe.setEvaluator(ji);oe.setRawEvaluator(zi);oe.setReactivityEngine({reactive:Lt,effect:(e,t={})=>{let r;return r=Zn(e,{scheduler:()=>{r&&(t.scheduler?t.scheduler(r):r())}}),r},release:Yn,raw:h});var Fo=oe,li=Fo;/*! Bundled license information:

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
*/const di="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-x64-setup.exe",Ho="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-arm64-setup.exe",Vo="/vpat/raggiesoft-installer-studio-vpat-2.5.html",zo="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function ui(){return`
    <section class="calc-panel" aria-labelledby="tco-heading" x-data="{ seats: 5, runners: 8 }">
      <span class="eyebrow">3-Year Total Cost of Ownership</span>
      <h2 id="tco-heading" style="margin-top: 0.25rem;">Interactive Enterprise Packaging TCO Calculator</h2>
      <p>
        Legacy installer vendors charge multi-thousand-dollar node-locked seat subscriptions and upcharge for dynamic CI/CD build runners.
        Adjust your team size and CI runner count below to compare 3-year licensing costs:
      </p>
      <div class="calc-controls">
        <div class="field-group">
          <label for="tco-seats">Developer Packaging Seats: <span x-text="seats">5</span></label>
          <input id="tco-seats" type="range" min="1" max="20" step="1" x-model.number="seats" />
        </div>
        <div class="field-group">
          <label for="tco-runners">Ephemeral CI/CD Build Runners: <span x-text="runners">8</span></label>
          <input id="tco-runners" type="range" min="1" max="50" step="1" x-model.number="runners" />
        </div>
      </div>
      <div class="tco-summary" role="region" aria-live="polite" aria-label="Calculated Three-Year Cost Comparison">
        <div class="tco-stat">
          <span>Legacy Per-Seat + CI Server Suite (3 Yrs)</span>
          <strong x-text="'$' + ((seats * 7795) + (runners > 1 ? runners * 1200 : 0)).toLocaleString()">$48,575</strong>
        </div>
        <div class="tco-stat">
          <span>RaggieSoft Installer Studio (Perpetual)</span>
          <strong x-text="seats <= 2 && runners <= 2 ? '$249 (Indie/Pro)' : '$2,499 (Enterprise Team)'">$2,499 (Enterprise Team)</strong>
        </div>
        <div class="tco-stat">
          <span>Estimated 3-Year Procurement Savings</span>
          <strong class="savings-positive" x-text="'$' + (((seats * 7795) + (runners > 1 ? runners * 1200 : 0)) - (seats <= 2 && runners <= 2 ? 249 : 2499)).toLocaleString()">$46,076</strong>
        </div>
      </div>
    </section>
  `}function Uo(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'mica' }">
      <span class="eyebrow">Native Win32 C++20 Packaging Suite • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        Zero-dependency native Win32 C++20 Windows packaging for x64 and ARM64. Compile one plain-text
        <code>.rsip</code> manifest (or multi-project <code>.rsis</code> suite) into an Intune-ready
        <code>.msi</code> database and a WCAG 2.2 AA accessible <code>Setup.exe</code> bootstrapper—with
        zero runtime bloat, zero crypto gimmicks, and zero revenue-cap licensing.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${di}">Download Community Edition (x64)</a>
        <a class="btn btn-outline" href="${Ho}">Download Native ARM64 Edition</a>
        <a class="btn btn-outline" href="/pricing#procurement">Request Enterprise Quote / VPAT Package</a>
      </div>

      <!-- Interactive 3-Tab Split Preview Toggle (Mica UI / Classic Wizard 97 / Plain-Text .rsip) -->
      <div style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
        <div class="btn-row" role="tablist" aria-label="Installer Output and Source Preview">
          <button type="button" class="btn" :class="previewTab === 'mica' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'mica')" @click="previewTab = 'mica'">
            1. Modern Win32 Dark Mode / Mica UI
          </button>
          <button type="button" class="btn" :class="previewTab === 'wiz97' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'wiz97')" @click="previewTab = 'wiz97'">
            2. Built-In MSI Wizard 97 Fallback
          </button>
          <button type="button" class="btn" :class="previewTab === 'rsip' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'rsip')" @click="previewTab = 'rsip'">
            3. Plain-Text .rsip Manifest Source
          </button>
        </div>

        <div x-show="previewTab === 'mica'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 Dark Mode Mica SetupWizard.exe Preview">+--------------------------------------------------------------------------+
|  Acme Workstation IDE Setup                                  [ - ][ x ]  |
|  Fast, Accessible Enterprise Engineering Tools                           |
+==========================================================================+
|  Choose Setup Mode (Full Keyboard Tab, Arrow &amp; Screen-Reader Support)    |
|                                                                          |
|  (o) Express Setup (Recommended)                                         |
|      One-click install to C:\\Program Files\\Acme\\IDE with Start Menu link |
|  ( ) Compact Setup                                                       |
|      Core binaries only with minimal disk footprint                      |
|  ( ) Custom Setup                                                        |
|      Choose destination folder, feature tree, and shortcut options       |
|                                                                          |
|  [Publisher: Acme Corp — Zero 3rd-Party Watermarks]  [ &lt; Back ] [Install]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Classic Windows 2000 Wizard 97 Embedded MSI UI Preview">+--------------------------------------------------------------------------+
|  Acme Workstation IDE Setup (Embedded Product.msi — msiexec.exe)         |
+--------------------------------------------------------------------------+
|  Welcome to the Acme Workstation IDE Setup Wizard                        |
|                                                                          |
|  Every compiled .msi includes standard Windows Installer relational UI   |
|  tables (InstallUISequence + InstallExecuteSequence) so IT admins can    |
|  extract Product.msi (--extract-msi) for interactive msiexec, Microsoft  |
|  Intune Win32/LOB deployment, or silent Group Policy (/qn) rollouts.     |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip Project Manifest Example">; Single-file .rsip project (or group dozens inside an .rsis Suite like .slnx!)
@include "../shared/company-signing.rsii"

[Package]
Name              = Acme Workstation IDE
Version           = 2.4.0
Manufacturer      = Acme Corporation
UpgradeCode       = {8F4E20A1-7C93-4D62-9B44-1029384756AB} ; Stable across upgrades
Architecture      = $(ARCH)
Scope             = machine
BuildBootstrapper = true

[Install]
DefaultSubdir     = AcmeWorkstation IDE
MainExecutable    = AcmeIde.exe

[UI]
WizardLayout      = standard
AccentPrimaryHex  = #2563EB
LicenseRtf        = License.rtf
InstallButtonText = &amp;Install

[Payload.App]
Source            = ..publishwin-$(ARCH)</pre>
        </div>
      </div>
    </section>

    <section aria-labelledby="matrix-heading">
      <span class="eyebrow">Built for DevOps, CISO &amp; Cloud Architecture Reviews</span>
      <h2 id="matrix-heading">The "Zero-Bloat" Architecture Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>Technical &amp; Security Architecture Specifications for RaggieSoft Installer Studio</caption>
          <thead>
            <tr>
              <th scope="col">Engineering Spec</th>
              <th scope="col">RaggieSoft Installer Studio</th>
              <th scope="col">Why DevOps &amp; Security Care</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Toolchain Footprint</th>
              <td><strong>Less than 15 MB</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code> &amp; <code>msiprism.exe</code>)</td>
              <td>Caches in milliseconds on ephemeral GitHub Actions, Azure DevOps, and GitLab Windows runners instead of pulling multi-gigabyte container layers.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32msi.dll</code> &amp; <code>cabinet.dll</code> only)</td>
              <td>Near-zero SBOM / CVE surface area; runs cold on bare-metal Windows 11 (x64 &amp; native ARM64) with no .NET or VC++ redistributable chicken-and-egg traps.</td>
            </tr>
            <tr>
              <th scope="row">Enterprise Fleet Output</th>
              <td><strong>ICE-Validated <code>.msi</code> + <code>.msm</code> + <code>.mst</code> + <code>.msp</code></strong></td>
              <td>Native per-machine (<code>ALLUSERS=1</code>) silent deployment for Microsoft Intune, SCCM/MECM, and Active Directory GPO with deterministic SHA-1 UUIDv5 component GUIDs.</td>
            </tr>
            <tr>
              <th scope="row">Binary Ownership</th>
              <td><strong>100% White-Label <code>VERSIONINFO</code></strong></td>
              <td>Your organization's copyright, icons, and Authenticode signature own Windows Explorer's Properties &rarr; Details tab across all tiers—zero vendor watermarks.</td>
            </tr>
            <tr>
              <th scope="row">Offline &amp; Air-Gap Ready</th>
              <td><strong>Zero Telemetry / Zero Cloud Check-Ins</strong></td>
              <td>Compiles inside classified, air-gapped, or firewall-locked corporate networks without MAC-address license servers or blockchain/crypto SDKs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">End-to-End Windows Packaging Workbench</span>
      <h2 id="suite-heading">Suite Spotlight: Visual IDE, AI-Native CLI &amp; MSI Prism</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 7-View C++20 Visual IDE</h3>
            <p>
              Author standalone <code>.rsip</code> projects or multi-project <code>.rsis</code> suites (just like Visual Studio <code>.slnx</code>)
              with a real-time GDI Wizard Preview Canvas, PE version harvesting, and a lossless AST that preserves 100% of developer comments in <code>git diff</code>.
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip &amp; .rsis Format</a>
        </article>

        <article class="card card-highlight">
          <div>
            <h3><code>instbuild.exe</code> — Headless CI &amp; AI Spec Compiler</h3>
            <p>
              Sub-millisecond <code>--validate --diagnostics=json</code> dry runs, automated <code>--emit-vpat</code> WCAG 2.2 AA conformance reports,
              and first-party <code>--emit-ai-spec</code> generation (<code>llms.txt</code>, <code>llms-full.txt</code>, <code>SKILL.md</code>) so coding agents write valid manifests on pass one.
            </p>
          </div>
          <a class="btn btn-primary" href="/llms.txt">View Live /llms.txt Spec</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> — Native 64-Bit MSI &amp; MST Inspector</h3>
            <p>
              The modern, blazing-fast 64-bit (<code>x64</code> &amp; <code>ARM64</code>) Dark Mode replacement for Microsoft's aging 1999 32-bit <code>Orca.exe</code>.
              Inspect SQL tables, verify ICE80 64-bit component flags, and diff <code>.mst</code> transforms or <code>.msp</code> patches effortlessly.
            </p>
          </div>
          <a class="btn btn-outline" href="/security">Review Security &amp; SBOM</a>
        </article>
      </div>
    </section>

    ${ui()}
  `}function Gt(){return`
    <section class="hero" aria-labelledby="vpat-title">
      <span class="eyebrow">WCAG 2.2 Level AA • ADA Title II • Revised Section 508</span>
      <h1 id="vpat-title">Accessibility &amp; Compliance Center</h1>
      <p class="lead">
        State agencies, public universities, healthcare systems, and federal contractors require an Accessibility Conformance Report (VPAT 2.5)
        covering the entire software lifecycle—including the Windows installer. RaggieSoft Installer Studio is the first native Win32 C++20
        packaging suite engineered for screen-reader, keyboard, and High Contrast compliance from frame one.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Vo}">Open Live VPAT 2.5 Conformance Report (HTML5)</a>
        <a class="btn btn-outline" href="/pricing#procurement">Request Signed Enterprise ACR Bundle</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">Concrete Win32 Assistive Technology &amp; UI Proof</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>Screen-Reader Live Progress (NVDA, JAWS &amp; Narrator)</h3>
            <p>
              Uses native Win32 Common Controls v6 (<code>BUTTON</code>, <code>EDIT</code>, <code>MSFTEDIT_CLASS</code>, <code>PROGRESS_CLASSW</code>)
              and fires <code>NotifyWinEvent(EVENT_OBJECT_NAMECHANGE)</code> on step transitions while driving real-time progress via <code>MsiSetExternalUIRecord</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>100% Keyboard Tab Order &amp; Enforced Mnemonics</h3>
            <p>
              Clears <code>UISF_HIDEFOCUS</code> and <code>UISF_HIDEACCEL</code> immediately on <code>WM_CREATE</code> so focus rings and <code>Alt</code>
              access-key underlines are always visible—backed by static <code>instbuild --validate</code> checks flagging any missing <code>&amp;</code> mnemonic.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using system <code>GetSysColor</code> tokens, scales crisply from <code>100%</code> to <code>300%+</code> DPI,
              and multiplies typography by Windows 11's <code>TextScaleFactor</code> accessibility slider.
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
              <td>Switches custom gradients to <code>COLOR_WINDOW</code> / <code>COLOR_WINDOWTEXT</code> / <code>COLOR_HIGHLIGHT</code></td>
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
  `}function qo(){return`
    <section class="hero" aria-labelledby="pricing-title">
      <span class="eyebrow">Zero "Contact Sales" Walls • Perpetual &amp; CI-Friendly</span>
      <h1 id="pricing-title">Transparent Pricing &amp; Enterprise Procurement</h1>
      <p class="lead">
        Every tier ships the exact same uncrippled <code>x64</code> + <code>ARM64</code> compiler, Visual IDE, MSI Prism inspector,
        and 100% white-label <code>VERSIONINFO</code>—with zero forced online logins and zero telemetry.
      </p>
    </section>

    <section aria-label="Three-Tier Licensing Lineup">
      <div class="card-grid">
        <article class="card">
          <div>
            <span class="eyebrow">Students &amp; Open Source</span>
            <h2 style="margin-top: 0.2rem;">Community Edition</h2>
            <div class="price-tag">$0</div>
            <div class="price-note">Free forever • No registration wall</div>
            <ul class="feature-list">
              <li>Students, academic coursework, classroom labs, personal non-commercial projects, and OSI-approved open source</li>
              <li>Full <code>x64</code> + <code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>Setup.exe</code>, &amp; <code>msiprism.exe</code></li>
              <li>100% white-label <code>VERSIONINFO</code> &amp; zero UI watermarks</li>
              <li>Zero account sign-in &amp; zero telemetry</li>
            </ul>
          </div>
          <a class="btn btn-outline" href="${di}">Download Community (x64 / ARM64)</a>
        </article>

        <article class="card card-highlight">
          <div>
            <span class="eyebrow">Solo ISVs &amp; Micro-Studios</span>
            <h2 style="margin-top: 0.2rem;">Indie / Professional</h2>
            <div class="price-tag">$249</div>
            <div class="price-note">Perpetual license (1–2 developer seats)</div>
            <ul class="feature-list">
              <li>Full commercial closed-source software redistribution rights</li>
              <li>100% offline perpetual license key (builds on airplanes &amp; air-gapped VMs)</li>
              <li>Dual-layer Authenticode &amp; Azure Artifact Signing integration</li>
              <li>Automated <code>--emit-vpat</code> HTML5 accessibility report generator</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="mailto:enterprise@raggiesoftstudio.com?subject=Indie%20Professional%20Perpetual%20License%20Inquiry">Purchase Indie / Pro ($249)</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Teams, Universities &amp; Government</span>
            <h2 style="margin-top: 0.2rem;">Enterprise &amp; Compliance</h2>
            <div class="price-tag">$2,499</div>
            <div class="price-note">Flat Team License (up to 10 seats + unlimited CI runners)</div>
            <ul class="feature-list">
              <li><strong>Unlimited ephemeral CI/CD build runners</strong> (GitHub Actions, Azure DevOps, GitLab) with zero license-server check-ins</li>
              <li>Signed VPAT 2.5 (WCAG 2.2 AA, Section 508 &amp; ADA Title II) compliance bundle &amp; SBOM attestation</li>
              <li>Enterprise GPO <code>.mst</code> Transform &amp; <code>.msp</code> Patch fleet tooling</li>
              <li>White-label C++20 bootstrapper source/templates, priority SLA, &amp; Net-30 PO invoicing</li>
            </ul>
          </div>
          <a class="btn btn-outline" href="mailto:enterprise@raggiesoftstudio.com?subject=Enterprise%20Team%20Quote%20%26%20VPAT%20Procurement%20Package">Request Enterprise Quote / PO</a>
        </article>
      </div>

      <div id="procurement" class="hero" style="margin-top: 1.5rem;">
        <span class="eyebrow">Institutional Procurement Ready</span>
        <h2 style="margin-top: 0.25rem;">Vendor Onboarding &amp; Purchase Orders</h2>
        <p style="margin-bottom: 0;">
          <strong>Vendor onboarding ready:</strong> W-9, standard Commercial EULA, VPAT 2.5 ACR, SBOM attestation, and
          Net-30 Purchase Orders supported via <a href="mailto:enterprise@raggiesoftstudio.com">enterprise@raggiesoftstudio.com</a>.
          Pair with <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio (a11y.raggiesoft.com)</a> for complete web and desktop accessibility engineering.
        </p>
      </div>
    </section>

    ${ui()}
  `}function Go(){return`
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; CI Quickstarts</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects like Inno Setup, or group multi-package fleets inside an <code>.rsis</code>
        Suite like Visual Studio <code>.slnx</code>. Point Cursor, Claude Code, or Antigravity at
        <a href="/llms.txt">raggiesoftstudio.com/llms.txt</a> for zero-hallucination schema support.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="https://github.com/raggiesoft/installer-studio">View Source on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; CLI flags:</label>
        <input id="schema-filter" type="search" placeholder="Type Package, Payload, Suite, mst, vpat..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Core .rsip Project, .rsis Suite &amp; .rsii Include Sections</caption>
          <thead>
            <tr>
              <th scope="col">Section / Directive</th>
              <th scope="col">File Type</th>
              <th scope="col">Key Fields &amp; Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="!q || 'include rsii shared'.includes(q.toLowerCase())">
              <th scope="row"><code>@include "file.rsii"</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>Inherits shared <code>[Requirements]</code>, <code>[Signing]</code>, or publisher defaults without losing comments on IDE save.</td>
            </tr>
            <tr x-show="!q || 'package name version upgradecode msi msm'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, <code>Version</code> (3-part <code>Major.Minor.Build</code>), <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code> (<code>machine|user</code>), <code>PackageKind</code> (<code>msi|msm</code>).</td>
            </tr>
            <tr x-show="!q || 'install defaultsubdir mainexecutable'.includes(q.toLowerCase())">
              <th scope="row"><code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>DefaultSubdir</code> (under <code>ProgramFiles64Folder</code> or <code>LocalAppDataFolder</code>), <code>StartMenuFolder</code>, <code>MainExecutable</code>.</td>
            </tr>
            <tr x-show="!q || 'ui wizardlayout autorun16x9 accent vpat'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>WizardLayout</code> (<code>standard|autorun16x9</code>), <code>AccentPrimaryHex</code>, <code>LicenseRtf</code>, <code>IconFile</code>, <code>ArtworkPng</code>, <code>InstallButtonText</code> (with <code>&amp;</code> mnemonic).</td>
            </tr>
            <tr x-show="!q || 'payload source targetsubdir cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[Payload.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (1+ Required)</td>
              <td><code>Source</code> (supports <code>$(ARCH)</code>), <code>TargetSubdir</code>, <code>Recursive</code>, <code>Feature</code> — compressed into <code>#payload.cab</code> with deterministic UUIDv5 GUIDs.</td>
            </tr>
            <tr x-show="!q || 'signing authenticode azure signtool'.includes(q.toLowerCase())">
              <th scope="row"><code>[Signing]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td><code>Enabled</code>, <code>Thumbprint</code>, <code>TimestampUrl</code>, <code>DlibPath</code>, <code>MetadataJson</code> — signs inner <code>.msi</code> first, then outer <code>Setup.exe</code>.</td>
            </tr>
            <tr x-show="!q || 'suite project buildorder rsis slnx'.includes(q.toLowerCase())">
              <th scope="row"><code>[Suite]</code> &amp; <code>[Project.&lt;Id&gt;]</code></th>
              <td><code>.rsis</code> Suite</td>
              <td>Groups multiple <code>.rsip</code> projects with <code>[Variable]</code> tokens, <code>Category</code> tags, and ascending <code>BuildOrder</code> (e.g., <code>.msm</code> = 10 &rarr; <code>.msi</code> = 20).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="ci-heading">
      <h2 id="ci-heading">GitHub Actions &amp; Microsoft Intune Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite (Sub-Millisecond JSON Diagnostics)
        run: .\bindinstbuild.exe .AcmeSuite.rsis --validate --diagnostics=json
      - name: Compile Enterprise .MSI, Setup.exe &amp; VPAT 2.5 ACR
        run: .\bindinstbuild.exe .AcmeSuite.rsis --with-vpat</pre>

      <div class="table-wrap">
        <table>
          <caption>instbuild.exe &amp; SetupWizard.exe Standard Exit Codes</caption>
          <thead>
            <tr>
              <th scope="col">Exit Code</th>
              <th scope="col">Meaning</th>
              <th scope="col">CI/CD or Intune Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>0</code></th>
              <td><code>ERROR_SUCCESS</code> — Validation, compilation, or silent install succeeded</td>
              <td>Promote <code>.msi</code>, <code>-setup.exe</code>, and VPAT 2.5 report to release artifacts.</td>
            </tr>
            <tr>
              <th scope="row"><code>1</code></th>
              <td>Schema validation error, missing payload file, or post-build ICE80 check failure</td>
              <td>Parse <code>--diagnostics=json</code> line numbers in CI logs.</td>
            </tr>
            <tr>
              <th scope="row"><code>2</code></th>
              <td>Invalid command-line arguments or missing input path</td>
              <td>Verify CLI syntax against <code>instbuild.exe --help</code>.</td>
            </tr>
            <tr>
              <th scope="row"><code>3010</code></th>
              <td><code>ERROR_SUCCESS_REBOOT_REQUIRED</code> (Runtime <code>SetupWizard.exe /qn</code>)</td>
              <td>Standard Windows Installer soft-reboot return code recognized natively by Microsoft Intune &amp; SCCM.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function Ko(){return`
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">InfoSec, SBOM &amp; Air-Gap Architecture</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled strictly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound network
        telemetry, and zero cryptocurrency/blockchain dependencies.
      </p>
    </section>

    <section aria-labelledby="sec-pillars">
      <h2 id="sec-pillars">Four Pillars of Supply-Chain Trust</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>1. Static <code>/MT</code> Compilation &amp; Minimal SBOM</h3>
            <p>
              No NuGet graph, no npm runtime, no Electron Chromium bundle, and no external DLLs. Both the build tools and
              <code>SetupWizard.exe</code> call Microsoft's OS-serviced <code>msi.dll</code>, <code>cabinet.dll</code>, and <code>bcrypt.dll</code> directly.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>2. Dual-Layer Authenticode Code Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code>, <code>instbuild.exe</code> signs the inner <code>Product.msi</code> first, embeds the signed
              database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—supporting both local HSM thumbprints and Azure Artifact Signing.
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
              socket, phones home to a license server, or bundles cryptocurrency payment code.
            </p>
          </div>
        </article>
      </div>
    </section>
  `}const Kt=[{path:"/",navLabel:"Overview",seoTitle:"RaggieSoft Installer Studio — Install Without Limits",seoDescription:"Zero-dependency Win32 C++20 Windows packaging for x64 and ARM64. Compile .rsip manifests into Intune-ready .msi and WCAG 2.2 AA Setup.exe packages.",renderBody:Uo},{path:"/vpat",navLabel:"VPAT & Accessibility",seoTitle:"VPAT 2.5 & WCAG 2.2 AA Compliance | Installer Studio",seoDescription:"Download our WCAG 2.2 AA, ADA Title II, and Revised Section 508 VPAT 2.5 Conformance Report and inspect Win32 screen-reader and contrast telemetry.",renderBody:Gt},{path:"/accessibility",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:Gt},{path:"/pricing",navLabel:"Pricing & POs",seoTitle:"Transparent Pricing & Net-30 POs | Installer Studio",seoDescription:"Uncrippled Community ($0), Indie/Pro ($249 perpetual), and Enterprise ($2,499 team + unlimited CI runners, VPAT 2.5 & Net-30 POs) Windows packaging.",renderBody:qo},{path:"/docs",navLabel:"Docs & CLI",seoTitle:"Documentation, .rsip Schema & CI YAML | Installer Studio",seoDescription:"Searchable .rsip project and .rsis suite reference, instbuild.exe exit codes, Intune silent flags, GitHub Actions YAML, and AI /llms.txt endpoints.",renderBody:Go},{path:"/security",navLabel:"Security & SBOM",seoTitle:"Security, Static /MT SBOM & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Azure Authenticode signing, air-gapped CI builds, and our zero-telemetry, zero-crypto pledge.",renderBody:Ko}];function Jo(e){const t=Kt.find(o=>o.path===e),r=Kt.filter(o=>!!o.navLabel).map(o=>{const s=o.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${o.path}"${s}>${o.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
      <section class="hero" aria-labelledby="err-title">
        <span class="eyebrow">HTTP 404 • Route Not Found</span>
        <h1 id="err-title">Page Not Found</h1>
        <p class="lead">The requested RaggieSoft Installer Studio documentation or storefront route could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to Storefront Overview</a>
          <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
        </div>
      </section>
    `;return{html:`
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Native Win32 C++20 Packaging</span>
        </a>
        <nav aria-label="Primary Storefront Navigation">
          <ul class="nav-list">
            ${r}
            <li><a class="nav-link" href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${n}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Overview</a>
          <a href="/vpat">VPAT 2.5 &amp; Accessibility</a>
          <a href="/pricing">Pricing &amp; Net-30 POs</a>
          <a href="/docs">Docs &amp; CLI</a>
          <a href="/security">Security &amp; SBOM</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Core compiler &amp; runtime source licensed under the MIT License.
          Enterprise &amp; PO inquiries: <a href="mailto:enterprise@raggiesoftstudio.com">enterprise@raggiesoftstudio.com</a>.
        </p>
        <p class="disclaimer-box">${zo}</p>
      </div>
    </footer>
  `}}const Je=document.getElementById("app");if(Je&&Je.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Je.innerHTML=Jo(e).html}window.Alpine=li;li.start();
