(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var Xe=!1,Ye=!1,P=[],et=-1,Te=!1,mt=!1;function gr(e){vr(e)}function mr(){mt=!0}function br(){mt=!1,Xt()}function vr(e){P.includes(e)||(P.push(e),e._x_schedulerPriority!==void 0&&(Te=!0)),Xt()}function bt(e){let t=P.indexOf(e);t!==-1&&t>et&&P.splice(t,1)}function Xt(){if(!Ye&&!Xe){if(mt)return;Xe=!0,queueMicrotask(_r)}}function _r(){Xe=!1,Ye=!0;for(let e=0;e<P.length;e++)Te&&yr(e),P[e](),et=e;P.length=0,et=-1,Te=!1,Ye=!1}function yr(e){let t=new Map,i=P.slice(e).sort((n,r)=>xr(n,r,t));for(let n=0;n<i.length;n++)P[e+n]=i[n];Te=!1}function xr(e,t,i){return je(e)?je(t)?Ft(e._x_schedulerPriority.el,i)-Ft(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:je(t)?1:0}function je(e){return e._x_schedulerPriority!==void 0}function Ft(e,t){if(t.has(e))return t.get(e);let i=0,n=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,i),i}var ne,Z,oe,Yt,Sr=0,tt=!0;function wr(e){tt=!1,e(),tt=!0}function Ar(e){ne=e.reactive,oe=e.release,Z=t=>e.effect(t,{scheduler:i=>{tt?gr(i):i()}}),Yt=e.raw}function Ht(e){Z=e}function Cr(e){let t=()=>{};return[(n,r)=>{let o=(r==null?void 0:r.priority)==="structural"?Sr++:void 0,s=Z(n);return o!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:o}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),oe(s))},s},()=>{t()}]}function ei(e,t){let i=!0,n,r,o=Z(()=>{let s=e(),a=JSON.stringify(s);if(!i&&(typeof s=="object"||s!==n)){let c=typeof n=="object"?JSON.parse(r):n;queueMicrotask(()=>{t(s,c)})}n=s,r=a,i=!1});return()=>{bt(o),oe(o)}}async function Ir(e){mr();try{await e(),await Promise.resolve()}finally{br()}}var ti=[],ii=[],ri=[];function Mr(e){ri.push(e)}function vt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,ii.push(t))}function ni(e){ti.push(e)}function oi(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function si(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,n])=>{(t===void 0||t.includes(i))&&(n.forEach(r=>r()),delete e._x_attributeCleanups[i])})}function Er(e){var t,i;for((t=e._x_effects)==null||t.forEach(bt);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var We=new MutationObserver(Ne),_t=!1;function yt(){We.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),_t=!0}function ai(){Tr(),We.disconnect(),_t=!1}var F=[];function Tr(){let e=We.takeRecords();F.push(()=>e.length>0&&Ne(e));let t=F.length;queueMicrotask(()=>{if(F.length===t)for(;F.length>0;)F.shift()()})}function Rr(){for(;F.length>0;)F.shift()();let e=We.takeRecords();e.length>0&&Ne(e)}function b(e){if(!_t)return e();ai();try{return e()}finally{yt()}}var xt=!1,Re=[];function Dr(){xt=!0}function Pr(){xt=!1,Ne(Re),Re=[]}function Ne(e){if(xt){Re=Re.concat(e);return}let t=[],i=new Set,n=new Map,r=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&i.add(s)}),e[o].addedNodes.forEach(s=>{if(s.nodeType===1){if(i.has(s)){i.delete(s);return}s._x_marker||t.push(s)}})),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,c=e[o].oldValue,d=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},l=()=>{r.has(s)||r.set(s,[]),r.get(s).push(a)};s.hasAttribute(a)&&c===null?d():s.hasAttribute(a)?(l(),d()):l()}r.forEach((o,s)=>{si(s,o)}),n.forEach((o,s)=>{ti.forEach(a=>a(s,o))});for(let o of i)t.some(s=>s.contains(o))||ii.forEach(s=>s(o));for(let o of t)o.isConnected&&ri.forEach(s=>s(o));t=null,i=null,n=null,r=null}function ci(e){return z(j(e))}function Se(e,t,i){return e._x_dataStack=[t,...j(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function j(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?j(e.host):e.parentNode?j(e.parentNode):[]}function z(e){return new Proxy({objects:e},Or)}function di(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:di(Object.getPrototypeOf(e),t)}var Or={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?Lr:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,i)},set({objects:e},t,i,n){let r;for(const s of e)if(r=di(s,t),r)break;r||(r=e[e.length-1]);const o=Object.getOwnPropertyDescriptor(r,t);return o!=null&&o.set&&(o!=null&&o.get)?o.set.call(n,i)||!0:Reflect.set(r,t,i)}};function Lr(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function St(e,t=()=>{}){let i=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([s,{value:a,enumerable:c}])=>{if(c===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let d=o===""?s:`${o}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?r[s]=a.initialize(e,d,s,t):i(a)&&a!==r&&!(a instanceof Element)&&n(a,d)})};return n(e)}function li(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(n,r,o,s){return e(this.initialValue,()=>kr(n,r),a=>it(n,r,a),r,o,s)}};return t(i),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=i.initialize.bind(i);i.initialize=(o,s,a,c)=>{let d=n.initialize(o,s,a,c);return i.initialValue=d,r(o,s,a,c)}}else i.initialValue=n;return i}}function kr(e,t){return t.split(".").reduce((i,n)=>i[n],e)}function it(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),it(e[t[0]],t.slice(1),i)}}var ui={};function C(e,t){ui[e]=t}function ge(e,t){let i=Wr(t);return Object.entries(ui).forEach(([n,r])=>{Object.defineProperty(e,`$${n}`,{get(){return r(t,i)},enumerable:!1})}),e}function Wr(e){let[t,i]=vi(e),n={interceptor:li,...t};return vt(e,i),n}function Nr(e,t,i,...n){try{return i(...n)}catch(r){re(r,e,t)}}function re(...e){return fi(...e)}var fi=Hr;function Fr(e){fi=e}function Hr(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var ie=!0;function pi(e){let t=ie;ie=!1;let i=e();return ie=t,i}function V(e,t,i={}){let n;return x(e,t)(r=>n=r,i),n}function x(...e){return hi(...e)}var hi=()=>{};function Br(e){hi=e}var gi;function Vr(e){gi=e}function $r(e,t){let i={};ge(i,e);let n=[i,...j(e)],r=typeof t=="function"?jr(n,t):Ur(n,t,e);return Nr.bind(null,e,t,r)}function jr(e,t){return(i=()=>{},{scope:n={},params:r=[],context:o}={})=>{if(!ie){me(i,t,z([n,...e]),r);return}let s=t.apply(z([n,...e]),r);me(i,s)}}var ze={};function zr(e,t){if(ze[e])return ze[e];let i=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let s=new i(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return re(s,t,e),Promise.resolve()}})();return ze[e]=o,o}function Ur(e,t,i){let n=zr(t,i);return(r=()=>{},{scope:o={},params:s=[],context:a}={})=>{n.result=void 0,n.finished=!1;let c=z([o,...e]);if(typeof n=="function"){let d=n.call(a,n,c).catch(l=>re(l,i,t));n.finished?(me(r,n.result,c,s,i),n.result=void 0):d.then(l=>{me(r,l,c,s,i)}).catch(l=>re(l,i,t)).finally(()=>n.result=void 0)}}}function me(e,t,i,n,r){if(ie&&typeof t=="function"){let o=t.apply(i,n);o instanceof Promise?o.then(s=>me(e,s,i,n)).catch(s=>re(s,r,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function qr(...e){return gi(...e)}function Gr(e,t,i={}){let n={};ge(n,e);let r=[n,...j(e)],o=z([i.scope??{},...r]),s=i.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(i.context,o)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,d=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(i.context,o);return typeof d=="function"&&ie?d.apply(o,s):d}}var wt="x-";function U(e=""){return wt+e}function Kr(e){wt=e}var De={};function v(e,t){return De[e]=t,{before(i){if(!De[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const n=B.indexOf(i);B.splice(n>=0?n:B.indexOf("DEFAULT"),0,e)}}}function Jr(e){return Object.keys(De).includes(e)}function Fe(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([a,c])=>({name:a,value:c})),s=mi(o);o=o.map(a=>s.find(c=>c.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(o)}let n={};return t.map(xi((o,s)=>n[o]=s)).filter(wi).map(Xr(n,i)).sort(Yr).map(o=>Zr(e,o))}function mi(e){return Array.from(e).map(xi()).filter(t=>!wi(t))}var rt=!1,de=new Map,bi=Symbol();function Qr(e){rt=!0;let t=Symbol();bi=t,de.set(t,[]);let i=()=>{for(;de.get(t).length;)de.get(t).shift()();de.delete(t)},n=()=>{rt=!1,i()};e(i),n()}function vi(e){let t=[],i=a=>t.push(a),[n,r]=Cr(e);return t.push(r),[{Alpine:se,effect:n,cleanup:i,evaluateLater:x.bind(x,e),evaluate:V.bind(V,e)},()=>t.forEach(a=>a())]}function Zr(e,t){let i=()=>{},n=De[t.type]||i,[r,o]=vi(e);oi(e,t.original,o);let s=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,r),n=n.bind(n,e,t,r),rt?de.get(bi).push(n):n())};return s.runCleanups=o,s}var _i=(e,t)=>({name:i,value:n})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:n}),yi=e=>e;function xi(e=()=>{}){return({name:t,value:i})=>{let{name:n,value:r}=Si.reduce((o,s)=>s(o),{name:t,value:i});return n!==t&&e(n,t),{name:n,value:r}}}var Si=[];function At(e){Si.push(e)}function wi({name:e}){return Ai().test(e)}var Ai=()=>new RegExp(`^${wt}([^:^.]+)\\b`);function Xr(e,t){return({name:i,value:n})=>{i===n&&(n="");let r=i.match(Ai()),o=i.match(/:([a-zA-Z0-9\-_:]+)/),s=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[i]||i;return{type:r?r[1]:null,value:o?o[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:n,original:a}}}var nt="DEFAULT",B=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",nt,"teleport"];function Yr(e,t){let i=B.indexOf(e.type)===-1?nt:e.type,n=B.indexOf(t.type)===-1?nt:t.type;return B.indexOf(i)-B.indexOf(n)}function q(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(r=>q(r,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let n=e.firstElementChild;for(;n;)q(n,t),n=n.nextElementSibling}var O=!1;function L(e,t=()=>{}){return(...i)=>O?t(...i):e(...i)}function en(e){return(...t)=>O&&e(...t)}var Ci=[];function we(e){Ci.push(e)}function tn(e,t){Ci.forEach(i=>i(e,t)),O=!0,Ii(()=>{E(t,(i,n)=>{n(i,()=>{})})}),O=!1}var ot=!1;function rn(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),O=!0,ot=!0,Ii(()=>{nn(t)}),O=!1,ot=!1}function nn(e){let t=!1;E(e,(n,r)=>{q(n,(o,s)=>{if(t&&ln(o))return s();t=!0,r(o,s)})})}function Ii(e){let t=Z;Ht((i,n)=>{let r=t(i);return oe(r),()=>{}}),e(),Ht(t)}var He=0;function on(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),He++),i.pending++,Promise.resolve(t).catch(n=>{try{re(n,e)}catch(r){setTimeout(()=>{throw r},0)}}).then(()=>sn(e,i))}function sn(e,t){t.pending--,!(t.pending>0)&&(Rr(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,He--,e.isConnected&&(cn(t),E(e))))}function an(e,t){if(He===0)return!1;let i=w(e,n=>n._x_deferInit);return i?(Mi(i._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function Mi(e,t,i){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),i.forEach(r=>n.names.add(r))}function cn(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let n=w(i,o=>o._x_deferInit);if(n){Mi(n._x_deferInit,i,Array.from(t.names));return}let r=Array.from(t.names).filter(o=>i.hasAttribute(o)).map(o=>({name:o,value:i.getAttribute(o)}));r.length!==0&&Fe(i,r).forEach(o=>o())})}we((e,t)=>{He!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||w(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,i={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...n}))}function M(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Bt=!1;function dn(){Bt&&M("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Bt=!0,document.body||M("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),yt(),Mr(t=>E(t,q)),vt(t=>X(t)),ni((t,i)=>{an(t,i)||Fe(t,i).forEach(n=>n())});let e=t=>!Be(t.parentElement,!0);Array.from(document.querySelectorAll(Ri().join(","))).filter(e).forEach(t=>{E(t)}),le(document,"alpine:initialized"),setTimeout(()=>{pn()})}var Ct=[],Ei=[];function Ti(){return Ct.map(e=>e())}function Ri(){return Ct.concat(Ei).map(e=>e())}function Di(e){Ct.push(e)}function Pi(e){Ei.push(e)}function Be(e,t=!1){return w(e,i=>{if((t?Ri():Ti()).some(r=>i.matches(r)))return!0})}function w(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return w(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return w(e.parentNode.host,t);if(e.parentElement)return w(e.parentElement,t)}}function ln(e){return Ti().some(t=>e.matches(t))}var Oi=[];function un(e){Oi.push(e)}var fn=1;function E(e,t=q,i=()=>{}){w(e,n=>n._x_ignore)||Qr(()=>{t(e,(n,r)=>{n._x_marker||(i(n,r),Oi.forEach(o=>o(n,r)),Fe(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=fn++),n._x_ignore&&r())})})}function X(e,t=q){t(e,i=>{Er(i),si(i),delete i._x_marker})}function pn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,n])=>{Jr(i)||n.some(r=>{if(document.querySelector(r))return M(`found "${r}", but missing ${t} plugin`),!0})})}var st=[],It=!1;function Mt(e=()=>{}){return queueMicrotask(()=>{It||setTimeout(()=>{at()})}),new Promise(t=>{st.push(()=>{e(),t()})})}function at(){for(It=!1;st.length;)st.shift()()}function hn(){It=!0}function Et(e,t){return Array.isArray(t)?Vt(e,t.join(" ")):typeof t=="object"&&t!==null?gn(e,t):typeof t=="function"?Et(e,t()):Vt(e,t)}function ct(e){return e.split(/\s/).filter(Boolean)}function Vt(e,t){let i=r=>ct(r).filter(o=>!e.classList.contains(o)).filter(Boolean),n=r=>(e.classList.add(...r),()=>{e.classList.remove(...r)});return t=t===!0?t="":t||"",n(i(t))}function gn(e,t){let i=Object.entries(t).flatMap(([s,a])=>a?ct(s):!1).filter(Boolean),n=Object.entries(t).flatMap(([s,a])=>a?!1:ct(s)).filter(Boolean),r=[],o=[];return n.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),i.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),r.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),r.forEach(s=>e.classList.remove(s))}}function Ve(e,t){return typeof t=="object"&&t!==null?mn(e,t):bn(e,t)}function mn(e,t){let i={};return Object.entries(t).forEach(([n,r])=>{i[n]=e.style[n],n.startsWith("--")||(n=vn(n)),e.style.setProperty(n,r)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Ve(e,i)}}function bn(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function vn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function dt(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:i,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?yn(e,i,t):_n(e,n,t))});function _n(e,t,i){Li(e,Et,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[i](t)}function yn(e,t,i){Li(e,Ve);let n=!t.includes("in")&&!t.includes("out")&&!i,r=n||t.includes("in")||["enter"].includes(i),o=n||t.includes("out")||["leave"].includes(i);t.includes("in")&&!n&&(t=t.filter((y,Y)=>Y<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((y,Y)=>Y>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),d=a?0:1,l=c?ae(t,"scale",95)/100:1,u=ae(t,"delay",0)/1e3,g=ae(t,"origin","center"),m="opacity, transform",T=ae(t,"duration",150)/1e3,f=ae(t,"duration",75)/1e3,_="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${T}s`,transitionTimingFunction:_},e._x_transition.enter.start={opacity:d,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${f}s`,transitionTimingFunction:_},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:d,transform:`scale(${l})`})}function Li(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(n=()=>{},r=()=>{}){lt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){lt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>r(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):o():e._x_transition?e._x_transition.in(i):o();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let s=ki(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):r(()=>{let a=c=>{let d=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(a)]).then(([l])=>l==null?void 0:l());return delete c._x_hidePromise,delete c._x_hideChildren,d};a(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function ki(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:ki(t)}function lt(e,t,{during:i,start:n,end:r}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){o(),s();return}let a,c,d;xn(e,{start(){a=t(e,n)},during(){c=t(e,i)},before:o,end(){a(),d=t(e,r)},after:s,cleanup(){c(),d()}})}function xn(e,t){let i,n,r,o=dt(()=>{b(()=>{i=!0,n||t.before(),r||(t.end(),at()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:dt(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},b(()=>{t.start(),t.during()}),hn(),requestAnimationFrame(()=>{if(i)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),b(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{i||(b(()=>{t.end()}),at(),setTimeout(e._x_transitioning.finish,s+a),r=!0)})})}function ae(e,t,i){if(e.indexOf(t)===-1)return i;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return i;if(t==="duration"||t==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Wi(e,t,i,n=[]){switch(e._x_bindings||(e._x_bindings=ne({})),e._x_bindings[t]=i,t=n.includes("camel")?Tn(t):t,t){case"value":Sn(e,i);break;case"style":An(e,i);break;case"class":wn(e,i);break;case"selected":case"checked":Cn(e,t,i);break;default:Tt(e,t,i);break}}function Sn(e,t){if(Rt(e))e.attributes.value===void 0&&(e.value=t);else if(Pe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Rn(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")En(e,t);else if(e.tagName==="OPTION")Tt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function wn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Et(e,t)}function An(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Ve(e,t)}function Cn(e,t,i){Tt(e,t,i),Mn(e,t,i)}function Tt(e,t,i){[null,void 0,!1].includes(i)&&Pn(t)?e.removeAttribute(t):(Ni(t)&&(i=t),On(i)&&(i=JSON.stringify(i)),In(e,t,i))}function In(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function Mn(e,t,i){e[t]!==i&&(e[t]=i)}function En(e,t){const i=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=i.includes(n.value)})}function Tn(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Rn(e,t){return e==t}function Ee(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Dn=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Ni(e){return Dn.has(e)}function Pn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function On(e){return typeof e=="object"&&e!==null}function Ln(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Fi(e,t,i)}function kn(e,t,i,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let r=e._x_inlineBindings[t];return r.extract=n,pi(()=>V(e,r.expression))}return Fi(e,t,i)}function Fi(e,t,i){let n=e.getAttribute(t);return n===null?typeof i=="function"?i():i:n===""?!0:Ni(t)?!![t,"true"].includes(n):n}function Pe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Rt(e){return e.type==="radio"||e.localName==="ui-radio"}function Hi(e,t){let i;return function(){const n=this,r=arguments,o=function(){i=null,e.apply(n,r)};clearTimeout(i),i=setTimeout(o,t)}}function Bi(e,t){let i;return function(){let n=this,r=arguments;i||(e.apply(n,r),i=!0,setTimeout(()=>i=!1,t))}}function Vi({get:e,set:t},{get:i,set:n}){let r=!0,o,s=Z(()=>{let a=e(),c=i();if(r)n(Ue(a)),r=!1;else{let d=JSON.stringify(a),l=JSON.stringify(c);d!==o?n(Ue(a)):d!==l&&t(Ue(c))}o=JSON.stringify(e()),JSON.stringify(i())});return()=>{bt(s),oe(s)}}function Ue(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Wn(e){(Array.isArray(e)?e:[e]).forEach(i=>i(se))}var D={},$t=!1;function Nn(e,t){if($t||(D=ne(D),$t=!0),t===void 0)return D[e];D[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?D[e]=t.initialize(D,e,e,()=>{}):St(D[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&D[e].init()}function Fn(){return D}var $i={};function Hn(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?ji(e,i()):($i[e]=i,()=>{})}function Bn(e){return Object.entries($i).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...n)=>i(...n)}})}),e}function ji(e,t,i){let n=[];for(;n.length;)n.pop()();let r=Object.entries(t).map(([s,a])=>({name:s,value:a})),o=mi(r);return r=r.map(s=>o.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),Fe(e,r,i).map(s=>{n.push(s.runCleanups),s()}),()=>{for(;n.length;)n.pop()()}}var zi={};function Vn(e,t){zi[e]=t}function $n(e,t){return Object.entries(zi).forEach(([i,n])=>{Object.defineProperty(e,i,{get(){return(...r)=>n.bind(t)(...r)},enumerable:!1})}),e}var jn={get reactive(){return ne},get release(){return oe},get effect(){return Z},get raw(){return Yt},get transaction(){return Ir},version:"3.17.5",flushAndStopDeferringMutations:Pr,dontAutoEvaluateFunctions:pi,disableEffectScheduling:wr,startObservingMutations:yt,stopObservingMutations:ai,setReactivityEngine:Ar,onAttributeRemoved:oi,onAttributesAdded:ni,closestDataStack:j,skipDuringClone:L,onlyDuringClone:en,addRootSelector:Di,addInitSelector:Pi,setErrorHandler:Fr,interceptClone:we,addScopeToNode:Se,deferMutations:Dr,mapAttributes:At,evaluateLater:x,interceptInit:un,initInterceptors:St,injectMagics:ge,setEvaluator:Br,setRawEvaluator:Vr,mergeProxies:z,extractProp:kn,findClosest:w,onElRemoved:vt,closestRoot:Be,destroyTree:X,interceptor:li,transition:lt,setStyles:Ve,mutateDom:b,deferInit:on,directive:v,entangle:Vi,throttle:Bi,debounce:Hi,evaluate:V,evaluateRaw:qr,initTree:E,nextTick:Mt,prefixed:U,prefix:Kr,plugin:Wn,magic:C,store:Nn,start:dn,clone:rn,cloneNode:tn,bound:Ln,$data:ci,watch:ei,walk:q,data:Vn,bind:Hn},se=jn;function zn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var be=Object.assign,Un=Object.prototype.hasOwnProperty,ut=(e,t)=>Un.call(e,t),ve=Array.isArray,ue=e=>Ui(e)==="[object Map]",qn=e=>typeof e=="string",Ae=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Gn=Object.prototype.toString,Ui=e=>Gn.call(e),qi=e=>Ui(e).slice(8,-1),Dt=e=>qn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kn=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},Jn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),H=(e,t)=>!Object.is(e,t);function G(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var p,qe=new WeakSet,jt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qe.has(this)&&(qe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zt(this),Ki(this);const e=p,t=A;p=this,A=!0;try{return this.fn()}finally{p!==this&&G("Active effect was not restored correctly - this is likely a Vue internal bug."),Ji(this),p=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lt(e);this.deps=this.depsTail=void 0,zt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ft(this)&&this.run()}get dirty(){return ft(this)}},Gi=0,fe,pe;function Qn(e,t=!1){if(e.flags|=8,t){e.next=pe,pe=e;return}e.next=fe,fe=e}function Pt(){Gi++}function Ot(){if(--Gi>0)return;if(pe){let t=pe;for(pe=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;fe;){let t=fe;for(fe=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function Ki(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ji(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Lt(n),Xn(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function ft(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Oe)||(e.globalVersion=Oe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ft(e))))return;e.flags|=2;const t=e.dep,i=p,n=A;p=e,A=!0;try{Ki(e);const r=e.fn(e._value);(t.version===0||H(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{p=i,A=n,Ji(e),e.flags&=-3}}function Lt(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=r),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let o=i.computed.deps;o;o=o.nextDep)Lt(o,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function Xn(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function Yn(e,t){e.effect instanceof jt&&(e=e.effect.fn);const i=new jt(e);t&&be(i,t);try{i.run()}catch(r){throw i.stop(),r}const n=i.run.bind(i);return n.effect=i,n}function eo(e){e.effect.stop()}var A=!0,Qi=[];function to(){Qi.push(A),A=!1}function io(){const e=Qi.pop();A=e===void 0?!0:e}function zt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=p;p=void 0;try{t()}finally{p=i}}}var Oe=0,ro=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},no=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!p||!A||p===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==p)t=this.activeLink=new ro(p,this),p.deps?(t.prevDep=p.depsTail,p.depsTail.nextDep=t,p.depsTail=t):p.deps=p.depsTail=t,Zi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=p.depsTail,t.nextDep=void 0,p.depsTail.nextDep=t,p.depsTail=t,p.deps===t&&(p.deps=i)}return p.onTrack&&p.onTrack(be({effect:p},e)),t}trigger(e){this.version++,Oe++,this.notify(e)}notify(e){Pt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(be({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ot()}}};function Zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Zi(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var pt=new WeakMap,$=Symbol("Object iterate"),ht=Symbol("Map keys iterate"),ye=Symbol("Array iterate");function S(e,t,i){if(A&&p){let n=pt.get(e);n||pt.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new no),r.map=n,r.key=i),r.track({target:e,type:t,key:i})}}function k(e,t,i,n,r,o){const s=pt.get(e);if(!s){Oe++;return}const a=c=>{c&&c.trigger({target:e,type:t,key:i,newValue:n,oldValue:r,oldTarget:o})};if(Pt(),t==="clear")s.forEach(a);else{const c=ve(e),d=c&&Dt(i);if(c&&i==="length"){const l=Number(n);s.forEach((u,g)=>{(g==="length"||g===ye||!Ae(g)&&g>=l)&&a(u)})}else switch((i!==void 0||s.has(void 0))&&a(s.get(i)),d&&a(s.get(ye)),t){case"add":c?d&&a(s.get("length")):(a(s.get($)),ue(e)&&a(s.get(ht)));break;case"delete":c||(a(s.get($)),ue(e)&&a(s.get(ht)));break;case"set":ue(e)&&a(s.get($));break}}Ot()}function ee(e){const t=h(e);return t===e?t:(S(t,"iterate",ye),J(e)?t:t.map(Q))}function kt(e){return S(e=h(e),"iterate",ye),e}function I(e,t){return K(e)?nr(e)?xe(Q(t)):xe(t):Q(t)}var oo={__proto__:null,[Symbol.iterator](){return Ge(this,Symbol.iterator,e=>I(this,e))},concat(...e){return ee(this).concat(...e.map(t=>ve(t)?ee(t):t))},entries(){return Ge(this,"entries",e=>(e[1]=I(this,e[1]),e))},every(e,t){return R(this,"every",e,t,void 0,arguments)},filter(e,t){return R(this,"filter",e,t,i=>i.map(n=>I(this,n)),arguments)},find(e,t){return R(this,"find",e,t,i=>I(this,i),arguments)},findIndex(e,t){return R(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return R(this,"findLast",e,t,i=>I(this,i),arguments)},findLastIndex(e,t){return R(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return R(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ke(this,"includes",e)},indexOf(...e){return Ke(this,"indexOf",e)},join(e){return ee(this).join(e)},lastIndexOf(...e){return Ke(this,"lastIndexOf",e)},map(e,t){return R(this,"map",e,t,void 0,arguments)},pop(){return ce(this,"pop")},push(...e){return ce(this,"push",e)},reduce(e,...t){return Ut(this,"reduce",e,t)},reduceRight(e,...t){return Ut(this,"reduceRight",e,t)},shift(){return ce(this,"shift")},some(e,t){return R(this,"some",e,t,void 0,arguments)},splice(...e){return ce(this,"splice",e)},toReversed(){return ee(this).toReversed()},toSorted(e){return ee(this).toSorted(e)},toSpliced(...e){return ee(this).toSpliced(...e)},unshift(...e){return ce(this,"unshift",e)},values(){return Ge(this,"values",e=>I(this,e))}};function Ge(e,t,i){const n=kt(e),r=n[t]();return n!==e&&!J(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=i(o.value)),o}),r}var so=Array.prototype;function R(e,t,i,n,r,o){const s=kt(e),a=s!==e&&!J(e),c=s[t];if(c!==so[t]){const u=c.apply(e,o);return a?Q(u):u}let d=i;s!==e&&(a?d=function(u,g){return i.call(this,I(e,u),g,e)}:i.length>2&&(d=function(u,g){return i.call(this,u,g,e)}));const l=c.call(s,d,n);return a&&r?r(l):l}function Ut(e,t,i,n){const r=kt(e),o=r!==e&&!J(e);let s=i,a=!1;r!==e&&(o?(a=n.length===0,s=function(d,l,u){return a&&(a=!1,d=I(e,d)),i.call(this,d,I(e,l),u,e)}):i.length>3&&(s=function(d,l,u){return i.call(this,d,l,u,e)}));const c=r[t](s,...n);return a?I(e,c):c}function Ke(e,t,i){const n=h(e);S(n,"iterate",ye);const r=n[t](...i);return(r===-1||r===!1)&&xo(i[0])?(i[0]=h(i[0]),n[t](...i)):r}function ce(e,t,i=[]){to(),Pt();const n=h(e)[t].apply(e,i);return Ot(),io(),n}var ao=zn("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ae));function co(e){Ae(e)||(e=String(e));const t=h(this);return S(t,"has",e),t.hasOwnProperty(e)}var Yi=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(n?r?_o:ir:r?vo:tr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ve(e);if(!n){let a;if(o&&(a=oo[t]))return a;if(t==="hasOwnProperty")return co}const s=Reflect.get(e,t,he(e)?e:i);if((Ae(t)?Xi.has(t):ao(t))||(n||S(e,"get",t),r))return s;if(he(s)){const a=o&&Dt(t)?s:s.value;return n&&_e(a)?gt(a):a}return _e(s)?n?gt(s):Wt(s):s}},lo=class extends Yi{constructor(e=!1){super(!1,e)}set(e,t,i,n){let r=e[t];const o=ve(e)&&Dt(t);if(!this._isShallow){const c=K(r);if(!J(i)&&!K(i)&&(r=h(r),i=h(i)),!o&&he(r)&&!he(i))return c?(G(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(r.value=i,!0)}const s=o?Number(t)<e.length:ut(e,t),a=Reflect.set(e,t,i,he(e)?e:n);return e===h(n)&&a&&(s?H(i,r)&&k(e,"set",t,i,r):k(e,"add",t,i)),a}deleteProperty(e,t){const i=ut(e,t),n=e[t],r=Reflect.deleteProperty(e,t);return r&&i&&k(e,"delete",t,void 0,n),r}has(e,t){const i=Reflect.has(e,t);return(!Ae(t)||!Xi.has(t))&&S(e,"has",t),i}ownKeys(e){return S(e,"iterate",ve(e)?"length":$),Reflect.ownKeys(e)}},uo=class extends Yi{constructor(e=!1){super(!0,e)}set(e,t){return G(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return G(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},fo=new lo,po=new uo,Ce=e=>Reflect.getPrototypeOf(e);function ho(e,t,i){return function(...n){const r=this.__v_raw,o=h(r),s=ue(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=r[e](...n),l=t?xe:Q;return!t&&S(o,"iterate",c?ht:$),be(Object.create(d),{next(){const{value:u,done:g}=d.next();return g?{value:u,done:g}:{value:a?[l(u[0]),l(u[1])]:l(u),done:g}}})}}function Ie(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";G(`${Jn(e)} operation ${i}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function go(e,t){const i={get(r){const o=this.__v_raw,s=h(o),a=h(r);e||(H(r,a)&&S(s,"get",r),S(s,"get",a));const{has:c}=Ce(s),d=e?xe:Q;if(c.call(s,r))return d(o.get(r));if(c.call(s,a))return d(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!e&&S(h(r),"iterate",$),r.size},has(r){const o=this.__v_raw,s=h(o),a=h(r);return e||(H(r,a)&&S(s,"has",r),S(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,c=h(a),d=e?xe:Q;return!e&&S(c,"iterate",$),a.forEach((l,u)=>r.call(o,d(l),d(u),s))}};return be(i,e?{add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear")}:{add(r){const o=h(this),s=Ce(o),a=h(r),c=!J(r)&&!K(r)?a:r;return s.has.call(o,c)||H(r,c)&&s.has.call(o,r)||H(a,c)&&s.has.call(o,a)||(o.add(c),k(o,"add",c,c)),this},set(r,o){!J(o)&&!K(o)&&(o=h(o));const s=h(this),{has:a,get:c}=Ce(s);let d=a.call(s,r);d?qt(s,a,r):(r=h(r),d=a.call(s,r));const l=c.call(s,r);return s.set(r,o),d?H(o,l)&&k(s,"set",r,o,l):k(s,"add",r,o),this},delete(r){const o=h(this),{has:s,get:a}=Ce(o);let c=s.call(o,r);c?qt(o,s,r):(r=h(r),c=s.call(o,r));const d=a?a.call(o,r):void 0,l=o.delete(r);return c&&k(o,"delete",r,void 0,d),l},clear(){const r=h(this),o=r.size!==0,s=ue(r)?new Map(r):new Set(r),a=r.clear();return o&&k(r,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=ho(r,e)}),i}function er(e,t){const i=go(e);return(n,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(ut(i,r)&&r in n?i:n,r,o)}var mo={get:er(!1)},bo={get:er(!0)};function qt(e,t,i){const n=h(i);if(n!==i&&t.call(e,n)){const r=qi(e);G(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var tr=new WeakMap,vo=new WeakMap,ir=new WeakMap,_o=new WeakMap;function yo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wt(e){return K(e)?e:rr(e,!1,fo,mo,tr)}function gt(e){return rr(e,!0,po,bo,ir)}function rr(e,t,i,n,r){if(!_e(e))return G(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=r.get(e);if(o)return o;const s=yo(qi(e));if(s===0)return e;const a=new Proxy(e,s===2?n:i);return r.set(e,a),a}function nr(e){return K(e)?nr(e.__v_raw):!!(e&&e.__v_isReactive)}function K(e){return!!(e&&e.__v_isReadonly)}function J(e){return!!(e&&e.__v_isShallow)}function xo(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var Q=e=>_e(e)?Wt(e):e,xe=e=>_e(e)?gt(e):e;function he(e){return e?e.__v_isRef===!0:!1}C("nextTick",()=>Mt);C("dispatch",e=>le.bind(le,e));C("watch",(e,{evaluateLater:t,cleanup:i})=>(n,r)=>{let o=t(n),a=ei(()=>{let c;return o(d=>c=d),c},r);i(a)});C("store",Fn);C("data",e=>ci(e));C("root",e=>Be(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=z(So(e))),e._x_refs_proxy));function So(e){let t=[];return w(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var Je={};function or(e){return Je[e]||(Je[e]=0),++Je[e]}function wo(e,t){return w(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function Ao(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=or(t))}C("id",(e,{cleanup:t})=>(i,n=null)=>{let r=`${i}${n?`-${n}`:""}`;return Co(e,r,t,()=>{let o=wo(e,i),s=o?o._x_ids[i]:or(i);return n?`${i}-${s}-${n}`:`${i}-${s}`})});we((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Co(e,t,i,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let r=n();return e._x_id[t]=r,i(()=>{delete e._x_id[t]}),r}C("el",e=>e);sr("Focus","focus","focus");sr("Persist","persist","persist");function sr(e,t,i){C(t,n=>M(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}v("modelable",(e,{expression:t},{effect:i,evaluateLater:n,cleanup:r})=>{let o=n(t),s=()=>{let l;return o(u=>l=u),l},a=n(`${t} = __placeholder`),c=l=>a(()=>{},{scope:{__placeholder:l}}),d=s();c(d),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.setWithModifiers,g=Vi({get(){return l()},set(m){u(m)}},{get(){return s()},set(m){c(m)}});r(g)})});v("teleport",(e,{modifiers:t,expression:i},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&M("x-teleport can only be used on a <template> tag",e);let r=Gt(i),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{o.addEventListener(a,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),Se(o,{},e);let s=(a,c,d)=>{d.includes("prepend")?c.parentNode.insertBefore(a,c):d.includes("append")?c.parentNode.insertBefore(a,c.nextSibling):c.appendChild(a)};b(()=>{L(()=>{s(o,r,t),E(o)})()}),e._x_teleportPutBack=()=>{let a=Gt(i);b(()=>{s(e._x_teleport,a,t)})},n(()=>b(()=>{o.remove(),X(o)}))});var Io=document.createElement("div");function Gt(e){let t=L(()=>document.querySelector(e),()=>Io)();return t||M(`Cannot find x-teleport element for selector: "${e}"`),t}var ar=()=>{};ar.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",ar);v("effect",L((e,{expression:t},{effect:i})=>{i(x(e,t))}));function te(e,t,i,n){let r=e,o=c=>n(c),s={},a=(c,d)=>l=>d(c,l);return i.includes("dot")&&(t=Mo(t)),i.includes("camel")&&(t=Eo(t)),i.includes("capture")&&(s.capture=!0),i.includes("window")&&(r=window),i.includes("document")&&(r=document),i.includes("passive")&&(s.passive=i[i.indexOf("passive")+1]!=="false"),o=cr(i,o),i.includes("prevent")&&(o=a(o,(c,d)=>{d.preventDefault(),c(d)})),i.includes("stop")&&(o=a(o,(c,d)=>{d.stopPropagation(),c(d)})),i.includes("once")&&(o=a(o,(c,d)=>{c(d),r.removeEventListener(t,o,s)})),(i.includes("away")||i.includes("outside"))&&(r=document,o=a(o,(c,d)=>{e.contains(d.target)||d.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(d))})),i.includes("self")&&(o=a(o,(c,d)=>{d.target===e&&c(d)})),t==="submit"&&(o=a(o,(c,d)=>{d.target._x_pendingModelUpdates&&d.target._x_pendingModelUpdates.forEach(l=>l()),c(d)})),(Ro(t)||dr(t))&&(o=a(o,(c,d)=>{Po(d,i)||c(d)})),r.addEventListener(t,o,s),()=>{r.removeEventListener(t,o,s)}}function cr(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",n=Le(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Hi(t,n)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",n=Le(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Bi(t,n)}return t}function Mo(e){return e.replace(/-/g,".")}function Eo(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Le(e){return!Array.isArray(e)&&!isNaN(e)}function To(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Ro(e){return["keydown","keyup"].includes(e)}function dr(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Do=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Po(e,t){let i=t.filter((o,s)=>o==="false"&&t[s-1]==="passive"?!1:!Do.includes(o));if(i.includes("debounce")){let o=i.indexOf("debounce");i.splice(o,Le((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let o=i.indexOf("throttle");i.splice(o,Le((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&Kt(e.key).includes(i[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(o=>i.includes(o));return i=i.filter(o=>!r.includes(o)),!(r.length>0&&r.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===r.length&&(dr(e.type)||Kt(e.key).includes(i[0])))}function Kt(e){if(!e)return[];e=To(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}v("model",(e,{modifiers:t,expression:i},{effect:n,cleanup:r})=>{let o=e;t.includes("parent")&&(o=w(e,f=>f!==e));let s=x(o,i),a;typeof i=="string"?a=x(o,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?a=x(o,`${i()} = __placeholder`):a=()=>{};let c=()=>{let f;return s(_=>f=_),Jt(f)?f.get():f},d=f=>{let _;s(y=>_=y),Jt(_)?_.set(f):a(()=>{},{scope:{__placeholder:f}})};typeof i=="string"&&e.type==="radio"&&b(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let l=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),m=l||u||g,T;if(O)T=()=>{};else if(m){let f=[],_=y=>d(Me(e,t,y,c()));if(l&&f.push(te(e,"change",t,_)),u&&(f.push(te(e,"blur",t,_)),e.form)){let y=e.form,Y=()=>_({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(Y),r(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(Y),1)})}g&&f.push(te(e,"keydown",t,y=>{y.key==="Enter"&&_(y)})),T=()=>f.forEach(y=>y())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";T=te(e,f,t,_=>{d(Me(e,t,_,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Pe(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&d(Me(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=T,r(()=>e._x_removeModelListeners.default()),e.form){let f=te(e.form,"reset",[],_=>{Mt(()=>e._x_model&&e._x_model.set(Me(e,t,{target:e},c())))});r(()=>f())}if(e._x_model={get(){return c()},set(f){d(f)},setWithModifiers:cr(t,d)},e._x_forceModelUpdate=f=>{f===void 0&&typeof i=="string"&&i.match(/\./)&&(f=""),b(()=>{Pe(e)?Array.isArray(f)?e.checked=f.some(_=>_==e.value):e.checked=!!f:Rt(e)?typeof f=="boolean"?e.checked=Ee(e.value)===f:e.checked=e.value==f:Wi(e,"value",f)})},e.tagName==="SELECT"){let f=new MutationObserver(()=>{e._x_forceModelUpdate(c())});f.observe(e,{childList:!0}),r(()=>f.disconnect())}n(()=>{let f=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function Me(e,t,i,n){return b(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Pe(e))if(Array.isArray(n)){let r=null;return t.includes("number")?r=Qe(i.target.value):t.includes("boolean")?r=Ee(i.target.value):r=i.target.value,i.target.checked?n.includes(r)?n:n.concat([r]):n.filter(o=>!Oo(o,r))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return Qe(o)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return Ee(o)}):Array.from(i.target.selectedOptions).map(r=>r.value||r.text);{let r;return Rt(e)?i.target.checked?r=i.target.value:r=n:r=i.target.value,t.includes("number")?Qe(r):t.includes("boolean")?Ee(r):t.includes("trim")?r.trim():r}}})}function Qe(e){let t=e?parseFloat(e):null;return Lo(t)?t:e}function Oo(e,t){return e==t}function Lo(e){return!Array.isArray(e)&&!isNaN(e)}function Jt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(O)return e.removeAttribute(U("cloak"));queueMicrotask(()=>b(()=>e.removeAttribute(U("cloak"))))});Pi(()=>`[${U("init")}]`);v("init",L((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));v("text",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{b(()=>{e.textContent=o})})})});v("html",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{b(()=>{Array.from(e.children).forEach(s=>X(s)),e.innerHTML=o??"",e._x_ignoreSelf=!0,E(e),delete e._x_ignoreSelf})})},{priority:"structural"})});At(_i(":",yi(U("bind:"))));var lr=(e,{value:t,modifiers:i,expression:n,original:r},{effect:o,cleanup:s})=>{if(!t){let c={};Bn(c),x(e,n)(l=>{ji(e,l,r)},{scope:c});return}if(t==="key")return ko(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=x(e,n);o(()=>a(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),b(()=>Wi(e,t,c,i))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};lr.inline=(e,{value:t,modifiers:i,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};v("bind",lr);function ko(e,t){e._x_keyExpression=t}Di(()=>`[${U("data")}]`);var W=Symbol();v("data",(e,{expression:t},{cleanup:i})=>{if(No(e))return;let n=e[W];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let r={};ge(r,e);let o={};$n(o,r);let s=V(e,t,{scope:o});(s===void 0||s===!0)&&(s={}),ge(s,e);let a;if(n!=null&&n.reactiveData){a=n.reactiveData,Wo(a,s);let d={expression:t};e[W]=d,queueMicrotask(()=>{e[W]===d&&delete e[W]})}else a=ne(s);St(a,i);let c=Se(e,a);L(()=>{a.init&&V(e,a.init)})(),i(()=>{a.destroy&&V(e,a.destroy),c();let d={reactiveData:a};e[W]=d,queueMicrotask(()=>{e[W]===d&&delete e[W]})})});function Wo(e,t){Object.keys(t).forEach(i=>{let n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);n.get||n.set||r!=null&&r.get||r!=null&&r.set?(r&&delete e[i],r||(e[i]=void 0),n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}we((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function No(e){return O?ot?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:i},{effect:n})=>{let r=x(e,i);e._x_doHide||(e._x_doHide=()=>{b(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{b(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),c=dt(u=>u?s():o(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,o):u?a():o()}),d,l=!0;n(()=>r(u=>{!l&&u===d||(t.includes("immediate")&&(u?a():o()),c(u),d=u,l=!1)}))});v("for",L((e,{expression:t},{effect:i,cleanup:n})=>{let r=Bo(t),o=x(e,r.items),s=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>Ho(e,r,o,s),{priority:"structural"}),n(()=>{e._x_lookup.forEach(a=>b(()=>{X(a),a.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Fo(e){return t=>{Object.entries(t).forEach(([i,n])=>{e[i]=n})}}function Ho(e,t,i,n){i(r=>{$o(r)&&(r=Array.from({length:r},(d,l)=>l+1)),r==null&&(r=[]),r instanceof Set&&(r=Array.from(r)),r instanceof Map&&(r=Array.from(r));let o=e._x_lookup,s=new Map;e._x_lookup=s;let a=jo(r),c=Object.entries(r).map(([d,l])=>{a||(d=parseInt(d));let u=Vo(t,l,d,r),g;return n(m=>{typeof m=="object"&&M("x-for key cannot be an object, it must be a string or an integer",e),o.has(m)&&(s.set(m,o.get(m)),o.delete(m)),g=m},{scope:{index:d,...u}}),[g,u]});b(()=>{o.forEach(u=>{X(u),u.remove()});let d=new Set,l=e;c.forEach(([u,g])=>{if(s.has(u)){let f=s.get(u);f._x_refreshXForScope(g),l.nextElementSibling!==f&&(l.nextElementSibling&&f.replaceWith(l.nextElementSibling),l.after(f)),l=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&l.after(f._x_currentIfEl),l=f._x_currentIfEl);return}e.content.children.length>1&&M("x-for templates require a single root element, additional elements will be ignored.",e);let m=document.importNode(e.content,!0).firstElementChild,T=ne(g);Se(m,T,e),m._x_refreshXForScope=Fo(T),s.set(u,m),d.add(m),l.after(m),l=m}),d.forEach(u=>E(u)),l!==e?e._x_lastRenderedEl=l:delete e._x_lastRenderedEl})})}function Bo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,r=e.match(n);if(!r)return;let o={};o.items=r[2].trim();let s=r[1].replace(i,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function Vo(e,t,i,n){let r={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{r[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{r[s]=t[s]}):r[e.item]=t,e.index&&(r[e.index]=i),e.collection&&(r[e.collection]=n),r}function $o(e){return typeof e!="object"&&!isNaN(e)}function jo(e){return typeof e=="object"&&!Array.isArray(e)}function ur(){}ur.inline=(e,{expression:t},{cleanup:i})=>{let n=Be(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,i(()=>delete n._x_refs[t]))};v("ref",ur);v("if",L((e,{expression:t},{effect:i,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&M("x-if can only be used on a <template> tag",e);let r=x(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return Se(a,{},e),b(()=>{e.after(a),E(a)}),e._x_currentIfEl=a,e._x_lastRenderedEl=a,e._x_undoIf=()=>{b(()=>{X(a),a.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>r(a=>{a?o():s()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(r=>Ao(e,r))});we((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});At(_i("@",yi(U("on:"))));v("on",L((e,{value:t,modifiers:i,expression:n},{cleanup:r})=>{let o=n?x(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=te(e,t,i,a=>{o(()=>{},{scope:{$event:a},params:[a]})});r(()=>s())}));$e("Collapse","collapse","collapse");$e("Intersect","intersect","intersect");$e("Focus","trap","focus");$e("Mask","mask","mask");function $e(e,t,i){v(t,n=>M(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}se.setEvaluator($r);se.setRawEvaluator(Gr);se.setReactivityEngine({reactive:Wt,effect:(e,t={})=>{let i;return i=Yn(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:eo,raw:h});var zo=se,fr=zo;/*! Bundled license information:

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
*/const Nt="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio",pr=`${Nt}/raggiesoft-installer-studio-x64-setup.exe`,hr=`${Nt}/raggiesoft-installer-studio-arm64-setup.exe`,N=`${Nt}/screenshots`,ke="https://github.com/raggiesoft/installer-studio",Uo="/vpat/raggiesoft-installer-studio-vpat-2.5.html",qo="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function Go(){return`
    <section aria-labelledby="screenshots-heading">
      <span class="eyebrow">Real Native Win32 C++20 Captures • Windows 11 Dark Mode</span>
      <h2 id="screenshots-heading">See RaggieSoft Installer Studio v0.4.0 in Action</h2>
      <p>
        Every window below is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables using stock Windows 11
        system libraries (<code>gdiplus.dll</code>, <code>comctl32.dll</code>, <code>Msftedit.dll</code>, and <code>msi.dll</code>)—with
        custom Dark Mode checkbox and <code>SysListView32</code> column-header subclasses ensuring <code>&ge; 15.8:1</code> WCAG AAA contrast.
      </p>
      <div class="shot-grid">
        <!-- Screenshot 1: Visual IDE Destination Computer Tree & Dark-Header ListView -->
        <figure class="shot-card">
          <img
            src="${N}/ide-destination-folders.png"
            alt="RaggieSoft Installer Studio Visual IDE showing the hierarchical Destination Computer folder tree on the left and Dark Mode payload component grid on the right."
            loading="lazy"
          />
          <figcaption>
            <strong>1. Visual IDE — Destination Computer &amp; Components</strong>
            Map payloads to 9 standard Windows Installer folder roots with automatic deterministic SHA-1 UUIDv5 Component GUIDs and dark-themed report headers.
          </figcaption>
        </figure>

        <!-- Screenshot 2: Visual IDE Pre-MSI Runtimes & .MSM Merge Modules -->
        <figure class="shot-card">
          <img
            src="${N}/ide-runtimes-msm.png"
            alt="RaggieSoft Installer Studio View 4 showing Pre-MSI Runtime Prerequisites, delivery mode selector, custom reboot exit codes, and 64-bit Merge Module controls."
            loading="lazy"
          />
          <figcaption>
            <strong>2. Visual IDE — Pre-MSI Runtimes &amp; .MSM Merge Modules</strong>
            Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> embed, or <code>Redist\\</code>) plus 64-bit <code>.msm</code> modules.
          </figcaption>
        </figure>

        <!-- Screenshot 3: Visual IDE Live GDI+ Wizard Designer -->
        <figure class="shot-card">
          <img
            src="${N}/ide-wizard-designer.png"
            alt="RaggieSoft Installer Studio C++ Wizard Designer previewing the Windows Installer SelectionTree step live on a GDI+ canvas."
            loading="lazy"
          />
          <figcaption>
            <strong>3. Visual IDE — Live GDI+ C++ Wizard Designer</strong>
            Customize accent palettes, icons, and <code>aerowizard</code>, <code>standard</code> Glass, or <code>autorun16x9</code> layouts with instant live preview.
          </figcaption>
        </figure>

        <!-- Screenshot 4: SetupWizard.exe Accessible Option Cards -->
        <figure class="shot-card">
          <img
            src="${N}/setupwizard-setup-type.png"
            alt="SetupWizard.exe displaying Express, Compact, and Custom Setup option cards with 48x48 vector badges and high-contrast footer buttons."
            loading="lazy"
          />
          <figcaption>
            <strong>4. SetupWizard.exe — Accessible 48&times;48 Vector Option Cards</strong>
            Genuine subclassed <code>BS_AUTORADIOBUTTON</code> cards expose full UI Automation roles to screen readers with unmistakable keyboard focus rings.
          </figcaption>
        </figure>

        <!-- Screenshot 5: SetupWizard.exe Authentic MSI SelectionTree -->
        <figure class="shot-card">
          <img
            src="${N}/setupwizard-selection-tree.png"
            alt="SetupWizard.exe Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB drive state icons and live disk space cost card."
            loading="lazy"
          />
          <figcaption>
            <strong>5. SetupWizard.exe — Authentic MSI SelectionTree</strong>
            Reads embedded <code>Feature</code> tables directly from <code>Product.msi</code>, rendering 32-bit ARGB split-dropdown state icons and live per-feature byte costs.
          </figcaption>
        </figure>

        <!-- Screenshot 6: Native C++20 RaggieSoftHelp.exe Offline Viewer -->
        <figure class="shot-card">
          <img
            src="${N}/helpviewer-search.png"
            alt="RaggieSoftHelp.exe native C++20 offline Help Viewer showing full-text search results, dark-mode checkbox, and formatted documentation reader."
            loading="lazy"
          />
          <figcaption>
            <strong>6. RaggieSoftHelp.exe — Zero-Dependency C++20 Help Viewer</strong>
            Press <code>F1</code> in any IDE view to jump straight to offline HTML5 topics via Named Pipe IPC—with zero <code>.NET</code> or <code>WebView2</code> dependencies.
          </figcaption>
        </figure>

        <!-- Screenshot 7: RaggieSoft MSI Prism 64-Bit SQL Inspector -->
        <figure class="shot-card">
          <img
            src="${N}/msiprism-sql-inspector.png"
            alt="RaggieSoft MSI Prism opening raggiesoft-installer-studio-arm64.msi and displaying all 44 SQL tables alongside Feature rows in Dark Mode."
            loading="lazy"
          />
          <figcaption>
            <strong>7. msiprism.exe — Native 64-Bit Dark Mode SQL Inspector</strong>
            Inspect relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> packages, run ICE80 audits, and diff transforms or patches.
          </figcaption>
        </figure>
      </div>
    </section>
  `}function Ko(){return`
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">Why I'm Building This • Open Engineering Roadmap</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">What RaggieSoft Installer Studio Aims to Solve</h2>
      <p>
        Every Windows installer ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code> on every copy of Windows.
        Yet developers are routinely forced to choose between multi-gigabyte legacy toolchains, steep XML boilerplate,
        unlabeled non-accessible wizard forms, or opaque project files that fight Git version control and AI coding agents.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> is an active, open-source MIT engineering effort to build an original,
        zero-dependency native Win32 C++20 packaging suite from the ground up—combining visual convenience with clean plain-text
        <code>.rsip</code> manifests, first-class AI specifications, and 100% WCAG 2.2 AA accessibility.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.4.0</code>)</h3>
            <ul class="feature-list">
              <li><strong>10-View Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong> with 5 native <strong>AeroWizards</strong>—with <strong>Community Edition maintaining 100% feature parity with Premier</strong></li>
              <li><strong>Zero-Dependency Native C++20 Help System (<code>RaggieSoftHelp.exe</code>)</strong>: Pluggable <code>module.rshm.json</code> offline documentation viewer with Contents, Index, Search, and instant Named Pipe <code>F1</code> navigation</li>
              <li><strong>Authentic MSI <code>SelectionTree</code> &amp; Pre-MSI Runtime Engine</strong>: 32-bit ARGB split-icon feature tree in <code>Setup.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching, and 64-bit <code>.MSM</code> Merge Module merging</li>
              <li><strong>Dual Dialog Designer</strong> authoring both C++20 Glass / AeroWizard <code>SetupWizard.exe</code> screens AND native <code>370&times;270</code> <code>MSI.DLL</code> <code>Dialog</code> SQL tables</li>
              <li><strong>Windows <code>LZMS</code> Solid Compression + <code>msiprism.exe</code></strong> 64-bit Dark Mode SQL inspector + <code>instbuild.exe --emit-ai-spec</code> &amp; <code>--emit-vpat</code></li>
            </ul>
          </div>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1 &rarr; v0.4 Version History</a>
        </article>
        <article class="card">
          <div>
            <h3>Next Milestones on the Workbench (Phases B–D)</h3>
            <ul class="feature-list">
              <li><strong>Authenticode Signing UX &amp; Azure Artifact Signing</strong>: Interactive Windows Certificate Store picker, PFX / hardware token setup, and Dual-Layer <code>WinVerifyTrust</code> verification</li>
              <li><strong>Native Installer Engine, <code>.rssc</code> Scripting &amp; <code>Sd*()</code> Dialogs</strong>: Event hooks, wizard flow overrides, procedural standard dialogs, and optional <code>.rswpak</code> Web Media Blocks</li>
              <li><strong>Setup Capture ("Repackager") + Disposable Windows Sandbox (<code>.wsb</code>)</strong>: Snapshot-diff legacy <code>.exe</code> installers into clean <code>.rsip</code> + <code>.msi</code> + <code>.mst</code> packages—isolated inside Windows 11 Pro Sandbox</li>
              <li><strong>Open-Format Import Wizard &amp; Visual Studio Extension (<code>.vsix</code>)</strong>: One-click import from existing <code>.msi</code>/<code>.msm</code> databases, Visual Studio <code>.slnx</code>/<code>.csproj</code>/<code>.vcxproj</code> solutions, and open XML/INI manifests, plus right-click packaging inside Visual Studio</li>
            </ul>
          </div>
          <a class="btn btn-outline" href="/docs">Explore AI-Ready .rsip v0.4 Spec</a>
        </article>
      </div>
    </section>
  `}function Jo(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.4.0) • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        An original, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
        Design projects visually with modern <strong>AeroWizards</strong>, Destination Computer folder trees, Dual C++ &amp;
        <code>MSI.DLL</code> Dialog Designers, and a built-in native C++ <code>F1</code> Help Viewer—or let coding agents author
        comment-preserving <code>.rsip</code> manifests from scratch into real <code>.msi</code>, <code>.msm</code>,
        <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA <code>Setup.exe</code> installers.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${pr}">Download Technical Preview v0.4.0 (x64)</a>
        <a class="btn btn-outline" href="${hr}">Download Native ARM64 Preview</a>
        <a class="btn btn-outline" href="/changelog">View Version History (v0.4.0)</a>
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
            3. AI-Friendly .rsip v0.4 Manifest
          </button>
        </div>

        <div x-show="previewTab === 'aero'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 AeroWizard and RaggieSoft Glass SetupWizard.exe Preview">+--------------------------------------------------------------------------+
|  RAGGIESOFT  •  SAMPLE STUDIO APP SETUP                        [ - ][ x ]|
|  Choose how you would like to install Sample Studio App         [60x60]  |
+--------------------------------------------------------------------------+
|  [48x48 Bolt]    (o) Express Setup (Recommended)                         |
|                      One-click setup into default folder &amp; shortcuts     |
|  [48x48 Cube]    ( ) Compact Core Setup                                  |
|                      Essential core feature files with minimal footprint |
|  [48x48 Sliders] ( ) Custom Setup (Choose Features, Folder &amp; Shortcuts)  |
|                      Pick MSI SelectionTree features, path &amp; extensions  |
|                                                                          |
|  [Sample Studio • WCAG 2.2 AA]          [ &lt; Back ] [ &amp;Next &gt; ] [ Cancel ]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Native MSI.DLL Express vs Custom Dialog Table Preview">+--------------------------------------------------------------------------+
|  Sample Studio App Setup — Native MSI.DLL Dialog Table (370x270 DLU)     |
+--------------------------------------------------------------------------+
|  Choose Setup Mode (SetupTypeDlg -&gt; CustomizeDlg / VerifyReadyDlg)       |
|                                                                          |
|  Every compiled .msi also carries the full Express / Compact / Custom +  |
|  SelectionTree + BrowseDlg + Quick Check &amp; Repair (pecms) vs Full        |
|  Reinstall (vomus) workflow directly in relational MSI SQL tables—plus   |
|  custom [MsiDialog.*] &amp; [MsiControl.*] forms designed in the IDE!        |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip v0.4 Project Manifest Example">; Comment-preserving .rsip v0.4 manifest — survives GUI edits byte-for-byte!
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
InstallButtonText = &amp;Install

[Prerequisite.DotNet10]
Preset            = DotNet10Desktop
Distribution      = download
RebootExitCodes   = 3010, 1641, 23

[Payload.App]
Source            = ..publishwin-$(ARCH)SampleIde.exe</pre>
        </div>
      </div>
    </section>

    ${Go()}

    ${Ko()}

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
              <td><strong>Compact static <code>/MT</code> binaries</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>msiprism.exe</code> &amp; <code>RaggieSoftHelp.exe</code>)</td>
              <td>Instant cold startup on local developer workstations and CI runners without multi-gigabyte framework installs.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32\\msi.dll</code>, <code>cabinet.dll</code>, <code>gdiplus.dll</code> &amp; <code>Msftedit.dll</code> only)</td>
              <td>Even the offline <code>F1</code> Help Viewer runs natively in C++20 on stock Windows 11 (<code>x64</code> &amp; <code>ARM64</code>) with zero <code>.NET</code> or <code>WebView2</code> requirements.</td>
            </tr>
            <tr>
              <th scope="row">Windows Installer Rules</th>
              <td><strong>ICE18, ICE38, ICE64 &amp; ICE80 Enforced</strong></td>
              <td>Validates Single-Directory Component rules, <code>HKCU</code> user-profile KeyPaths, <code>CreateFolder</code>, and 64-bit component attributes before <code>msi.dll</code> runs.</td>
            </tr>
            <tr>
              <th scope="row">White-Label &amp; Parity</th>
              <td><strong><code>Community == Premier</code> + 100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Community Edition enjoys full Premier feature parity, and compiled <code>Setup.exe</code> / <code>.msi</code> files carry your publisher identity with zero watermarks.</td>
            </tr>
            <tr>
              <th scope="row">AI Agent Native</th>
              <td><strong><code>--emit-ai-spec</code> + <code>--diagnostics=json</code></strong></td>
              <td>Coding agents read deterministic <code>/llms-full.txt</code> and <code>SKILL.md</code> specs to write, lint, and compile installers from scratch.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">Five Native Binaries in One Cohesive Toolkit</span>
      <h2 id="suite-heading">Suite Spotlight: IDE, CLI Compiler, Setup Wizard, MSI Prism &amp; Help Viewer</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 10-View C++20 Visual IDE</h3>
            <p>
              Features 5 guided Win32 <strong>AeroWizards</strong>, a hierarchical Destination Computer folder tree,
              Setup Design (Features &rarr; Components &rarr; KeyPaths), Pre-MSI Runtimes &amp; <code>.MSM</code> modules,
              Dual Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip v0.4 Schema</a>
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
          <a class="btn btn-primary" href="/llms-full.txt">View Complete /llms-full.txt</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> &amp; <code>RaggieSoftHelp.exe</code></h3>
            <p>
              Inspect relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> databases in 64-bit Dark Mode
              with <strong>MSI Prism</strong>, and browse searchable offline HTML5 documentation in under 5ms via Named Pipe <code>F1</code> IPC
              inside <strong>RaggieSoft Help Viewer</strong>.
            </p>
          </div>
          <a class="btn btn-outline" href="/changelog">Inspect v0.4.0 Release Notes</a>
        </article>
      </div>
    </section>
  `}function Qo(){return`
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${pr}">Download Latest v0.4.0 (x64)</a>
        <a class="btn btn-outline" href="${hr}">Download Latest v0.4.0 (ARM64)</a>
        <a class="btn btn-outline" href="${ke}">View Commits on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="v040-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v040-heading" style="margin-top: 0.25rem;">v0.4.0 — Native C++20 Help System, Dark-Mode UI Subclasses &amp; AI Blueprints</h2>
      <ul class="feature-list">
        <li><strong>New <code>RaggieSoftHelp.exe</code> Native C++20 Help Viewer</strong>: Converted RaggieSoft's modular <code>.rshm.json</code> documentation viewer into a 100% static <code>/MT</code> Win32 C++20 binary (zero <code>.NET</code> and zero <code>WebView2</code> dependencies!) featuring Contents, Index, full-text Search, in-process HTML5-to-RTF typography (<code>Msftedit.dll</code>), and single-instance Named Pipe <code>F1</code> IPC.</li>
        <li><strong>Bundled <code>raggiesoft.installer-studio</code> Offline Help Module</strong>: Shipped 8 comprehensive offline HTML5 chapters wired directly to <code>F1</code> across all 10 views of <code>InstallerStudio.exe</code>.</li>
        <li><strong>Global Win32 Dark Mode Checkbox &amp; ListView Header Subclasses</strong>: Added <code>AttachAccessibleCheckboxSubclass</code> and <code>AttachDarkAwareListViewSubclass</code> in <code>RswGlassRenderer.hpp</code> so checkboxes and <code>SysListView32</code> column headers maintain <code>&ge; 15.8:1</code> WCAG AAA contrast across Dark, Light, and High Contrast modes.</li>
        <li><strong>Expanded From-Scratch AI Agent Blueprints</strong>: Upgraded <code>instbuild.exe --emit-ai-spec</code> (<code>/llms.txt</code>, <code>/llms-full.txt</code>, <code>/SKILL.md</code>) with an AI Pre-Flight Checklist and complete enterprise <code>.rsip</code> blueprint.</li>
        <li><strong>Automated WIC Window Screenshot Exporter</strong>: Added <code>--export-screenshots</code> across GUI tools for reproducible visual QA.</li>
      </ul>
    </section>

    <section aria-labelledby="v030-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v030-heading" style="margin-top: 0.25rem;">v0.3.0 — Editions Parity, LZMS Compression, Pre-MSI Runtimes, .MSM &amp; SelectionTree</h2>
        <ul class="feature-list">
          <li><strong>IDE Editions (<code>Community == Premier</code>)</strong>: Defined <code>Community</code>, <code>Express</code>, <code>Professional</code>, and <code>Premier</code> tiers with <code>Community</code> permanently maintaining 100% feature parity with <code>Premier</code>.</li>
          <li><strong>Windows <code>LZMS</code> Solid Compression</strong>: Integrated <code>COMPRESS_ALGORITHM_LZMS</code> (<code>Cabinet.lib</code>) to shrink embedded <code>Product.msi</code> and offline runtime payloads inside <code>Setup.exe</code>.</li>
          <li><strong>Unlimited Pre-MSI <code>[Prerequisite.*]</code> Runtime Broker</strong>: Added curated (<code>.NET 8/9/10</code>, <code>WebView2</code>, <code>VC++</code>) and custom runtime execution before <code>msiexec</code> via <code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>—capturing standardized and custom <code>RebootExitCodes</code> (<code>3010, 1641, 23, ...</code>) under one UAC prompt.</li>
          <li><strong>Native 64-Bit <code>[MergeModule.*]</code> (<code>.MSM</code>) Merger</strong>: Built a pure 64-bit SQL + <code>Cabinet.lib</code> FDI Merge Module consumer with zero 32-bit COM dependencies.</li>
          <li><strong>Authentic Windows Installer <code>SelectionTree</code> &amp; Clean Status Formatting</strong>: Added 32-bit ARGB split-dropdown feature icons, live byte-cost cards, <code>DisallowAbsent</code> core locks, and <code>MsiFormatRecordW</code> formatting so status text never prints unexpanded <code>[1]</code> tokens.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v021-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Bugfix &amp; Polish • November 2026</span>
        <h2 id="v021-heading" style="margin-top: 0.25rem;">v0.2.1 — Real-World Setup Fixes, Dark Mode Checkboxes &amp; UAC Elevation Broker</h2>
        <ul class="feature-list">
          <li><strong>Dark Mode Checkbox Subclassing in <code>SetupWizard.exe</code></strong>: Eliminated <code>ComCtl32 v6</code> black-on-black checkbox labels on Dark Mode wizard pages.</li>
          <li><strong>Consistent Footer Navigation</strong>: Placed <code>&lt; &amp;Back</code> in the bottom-right footer bar alongside <code>Next &gt;</code> and <code>Cancel</code> and streamlined the AeroWizard command header.</li>
          <li><strong>Windows Installer Engine &amp; UAC Fixes</strong>: Added persistent <code>Signature</code> / <code>AppSearch</code> locator SQL tables (fixing MSI Error 2228), Type 35 <code>STARTMENUFOLDER</code> directory formatting, unshimmed OS build properties, and seamless <code>asInvoker</code> &rarr; <code>--elevated-msi-worker</code> UAC elevation.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v020-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Feature Milestone • November 2026</span>
        <h2 id="v020-heading" style="margin-top: 0.25rem;">v0.2.0 — Destination Computer Tree, Component Rules &amp; Dual Dialog Designers</h2>
        <ul class="feature-list">
          <li>Added the Destination Computer folder tree, Setup Design view enforcing Microsoft Component Rules (<code>ICE18</code>, <code>ICE38</code>, <code>ICE64</code>, <code>ICE80</code>), File Associations &amp; Shell Verbs, guided Win32 AeroWizards, and the <code>370&times;270</code> <code>MSI.DLL</code> SQL Dialog Designer.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v010-heading" class="card">
      <div>
        <span class="release-badge">Initial Preview • November 2026</span>
        <h2 id="v010-heading" style="margin-top: 0.25rem;">v0.1.0 — Zero-Dependency Win32 C++20 Toolchain Foundation</h2>
        <ul class="feature-list">
          <li>Initial <code>x64</code> + <code>ARM64</code> static <code>/MT</code> release of <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>insttests.exe</code> with deterministic SHA-1 UUIDv5 GUIDs, <code>RtlGetVersion</code> + <code>IsWow64Process2</code> detection, <code>.rsip</code>/<code>.rsis</code>/<code>.rsii</code> lossless AST, <code>--emit-ai-spec</code>, and <code>--emit-vpat</code>.</li>
        </ul>
      </div>
    </section>
  `}function Qt(){return`
    <section class="hero" aria-labelledby="vpat-title">
      <span class="eyebrow">WCAG 2.2 Level AA • ADA Title II • Revised Section 508</span>
      <h1 id="vpat-title">Accessibility &amp; VPAT 2.5 Engineering</h1>
      <p class="lead">
        Accessibility shouldn't start only after an app is installed—users relying on screen readers, keyboard navigation,
        or Windows Contrast Themes have to get through the installer first. RaggieSoft Installer Studio engineers WCAG 2.2 AA
        and Revised Section 508 conformance directly into <code>SetupWizard.exe</code>, <code>InstallerStudio.exe</code>,
        <code>RaggieSoftHelp.exe</code>, and <code>instbuild.exe</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Uo}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="${ke}">Inspect C++20 Accessibility Source</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">How Our Native Win32 Suite Guarantees Accessibility &amp; Dark Mode Contrast</h2>
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
            <h3>Dark-Mode Checkboxes &amp; <code>SysListView32</code> Headers</h3>
            <p>
              Shared Win32 subclasses override stock <code>ComCtl32 v6</code> black-on-dark checkbox labels and white
              <code>SysHeader32</code> bars so every checkbox, report column header, and focus ring holds <code>&ge; 12.6:1</code> to
              <code>17.4:1</code> contrast.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using pure OS <code>GetSysColor</code> tokens, themes RichEdit license &amp;
              offline help articles for <code>&ge; 15:1</code> contrast, and scales cleanly with Windows 11's <code>TextScaleFactor</code>.
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
              <th scope="row">Header Banner &amp; ListView Column Headers (<code>#F8FAFC</code> on <code>#0B132B</code>)</th>
              <td>17.4:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3 / 1.4.6</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Dark Mode Surface &amp; Checkbox Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
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
  `}function Zo(){return`
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference (Schema v0.4)</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; AI Authoring</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects from scratch, reuse dialog and signing blocks via
        <code>@include "preset.rsii"</code>, or orchestrate multi-package workspaces inside an <code>.rsis</code> Suite.
        Point coding agents directly at <a href="/llms-full.txt">raggiesoftstudio.com/llms-full.txt</a> or press <code>F1</code>
        inside <code>InstallerStudio.exe</code> to open <code>RaggieSoftHelp.exe</code> offline!
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="/SKILL.md">Download AI SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.4 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Prerequisite, MergeModule, Component, KeyPath, MsiDialog..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Complete .rsip v0.4 Project, .rsis Suite &amp; .rsii Include Sections</caption>
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
            <tr x-show="!q || 'feature parent subfeature level disallowabsent selectiontree'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, <code>Level</code>, <code>Parent</code> hierarchy, <code>DisallowAbsent</code> core lock, and <code>AllowAdvertise</code> for the MSI <code>SelectionTree</code>.</td>
            </tr>
            <tr x-show="!q || 'prerequisite runtime dotnet webview2 vcredist reboot lzms'.includes(q.toLowerCase())">
              <th scope="row"><code>[Prerequisite.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Preset</code> (<code>DotNet10Desktop</code>, <code>EdgeWebView2</code>, <code>VcRedist2022</code>, <code>Custom</code>), <code>Distribution</code> (<code>download|embedded|side-by-side</code>), and <code>RebootExitCodes</code>.</td>
            </tr>
            <tr x-show="!q || 'mergemodule msm shared library cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[MergeModule.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Merges 64-bit <code>.msm</code> SQL tables and CAB payloads into <code>TargetRoot</code> / <code>Feature</code> using native C++20 <code>msi.dll</code> + <code>Cabinet.lib</code> FDI.</td>
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
      <h2 id="ci-heading">GitHub Actions &amp; AI Agent CLI Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite &amp; Microsoft Component Rules (JSON)
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --validate --diagnostics=json
      - name: Compile .MSI, LZMS Setup.exe &amp; VPAT 2.5 HTML5 Report
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --with-vpat</pre>
    </section>
  `}function Xo(){return`
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">Static /MT C++20 • Minimal SBOM • Air-Gap Friendly</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled directly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound IDE
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
              No NuGet dependency graph, no npm runtime, no Electron Chromium bundle, and no external DLLs—even
              <code>RaggieSoftHelp.exe</code> renders offline topics natively via <code>System32\\Msftedit.dll</code>.
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
              Neither <code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>msiprism.exe</code>, nor <code>RaggieSoftHelp.exe</code> phones home
              to a license server or bundles cryptocurrency payment SDKs.
            </p>
          </div>
        </article>
      </div>
    </section>
  `}const Zt=[{path:"/",navLabel:"Preview & Gallery",seoTitle:"RaggieSoft Installer Studio — v0.4.0 Technical Preview",seoDescription:"Zero-dependency Win32 C++20 Windows installer IDE, MSI compiler, SelectionTree wizard, and offline Help Viewer for x64 and ARM64.",renderBody:Jo},{path:"/docs",navLabel:"Docs & AI Spec",seoTitle:"Documentation & .rsip v0.4 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.4 project and .rsis suite reference covering Prerequisites, Merge Modules, Components, SelectionTree, and AI /llms.txt specs.",renderBody:Zo},{path:"/changelog",navLabel:"Version History",seoTitle:"Version History & Changelog (v0.4.0) | Installer Studio",seoDescription:"Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.4.0 across Windows 11 x64 and ARM64.",renderBody:Qo},{path:"/vpat",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.",renderBody:Qt},{path:"/accessibility",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:Qt},{path:"/security",navLabel:"Security",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Authenticode signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:Xo}];function Yo(e){const t=Zt.find(o=>o.path===e),i=Zt.filter(o=>!!o.navLabel).map(o=>{const s=o.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${o.path}"${s}>${o.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
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
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.4.0)</span>
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
              ${i}
              <li><a class="nav-link" href="${ke}">GitHub</a></li>
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
          <a href="/">Preview &amp; Gallery</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/changelog">Version History (v0.4.0)</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="${ke}">GitHub Repository</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source Technical Preview licensed under the MIT License.
          Feedback &amp; engineering inquiries: <a href="mailto:hello@michaelpragsdale.com">hello@michaelpragsdale.com</a>.
        </p>
        <p class="disclaimer-box">${qo}</p>
      </div>
    </footer>
  `}}const Ze=document.getElementById("app");if(Ze&&Ze.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Ze.innerHTML=Yo(e).html}window.Alpine=fr;fr.start();
