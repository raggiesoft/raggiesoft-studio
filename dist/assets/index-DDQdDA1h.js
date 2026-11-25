(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();var Xe=!1,Ye=!1,P=[],et=-1,Re=!1,mt=!1;function mi(e){yi(e)}function bi(){mt=!0}function vi(){mt=!1,eo()}function yi(e){P.includes(e)||(P.push(e),e._x_schedulerPriority!==void 0&&(Re=!0)),eo()}function bt(e){let t=P.indexOf(e);t!==-1&&t>et&&P.splice(t,1)}function eo(){if(!Ye&&!Xe){if(mt)return;Xe=!0,queueMicrotask(Si)}}function Si(){Xe=!1,Ye=!0;for(let e=0;e<P.length;e++)Re&&wi(e),P[e](),et=e;P.length=0,et=-1,Re=!1,Ye=!1}function wi(e){let t=new Map,o=P.slice(e).sort((r,i)=>_i(r,i,t));for(let r=0;r<o.length;r++)P[e+r]=o[r];Re=!1}function _i(e,t,o){return Ue(e)?Ue(t)?Bt(e._x_schedulerPriority.el,o)-Bt(t._x_schedulerPriority.el,o)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Ue(t)?1:0}function Ue(e){return e._x_schedulerPriority!==void 0}function Bt(e,t){if(t.has(e))return t.get(e);let o=0,r=e;for(;e;)o++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(r,o),o}var ie,Z,re,to,xi=0,tt=!0;function Ai(e){tt=!1,e(),tt=!0}function Ci(e){ie=e.reactive,re=e.release,Z=t=>e.effect(t,{scheduler:o=>{tt?mi(o):o()}}),to=e.raw}function zt(e){Z=e}function Ii(e){let t=()=>{};return[(r,i)=>{let n=(i==null?void 0:i.priority)==="structural"?xi++:void 0,s=Z(r);return n!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:n}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),re(s))},s},()=>{t()}]}function oo(e,t){let o=!0,r,i,n=Z(()=>{let s=e(),a=JSON.stringify(s);if(!o&&(typeof s=="object"||s!==r)){let d=typeof r=="object"?JSON.parse(i):r;queueMicrotask(()=>{t(s,d)})}r=s,i=a,o=!1});return()=>{bt(n),re(n)}}async function Mi(e){bi();try{await e(),await Promise.resolve()}finally{vi()}}var io=[],ro=[],no=[];function Ei(e){no.push(e)}function vt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,ro.push(t))}function so(e){io.push(e)}function ao(e,t,o){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(o)}function co(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([o,r])=>{(t===void 0||t.includes(o))&&(r.forEach(i=>i()),delete e._x_attributeCleanups[o])})}function Ri(e){var t,o;for((t=e._x_effects)==null||t.forEach(bt);(o=e._x_cleanups)!=null&&o.length;)e._x_cleanups.pop()()}var ke=new MutationObserver(We),yt=!1;function St(){ke.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),yt=!0}function lo(){Ti(),ke.disconnect(),yt=!1}var F=[];function Ti(){let e=ke.takeRecords();F.push(()=>e.length>0&&We(e));let t=F.length;queueMicrotask(()=>{if(F.length===t)for(;F.length>0;)F.shift()()})}function Di(){for(;F.length>0;)F.shift()();let e=ke.takeRecords();e.length>0&&We(e)}function b(e){if(!yt)return e();lo();try{return e()}finally{St()}}var wt=!1,Te=[];function Pi(){wt=!0}function Li(){wt=!1,We(Te),Te=[]}function We(e){if(wt){Te=Te.concat(e);return}let t=[],o=new Set,r=new Map,i=new Map;for(let n=0;n<e.length;n++)if(!e[n].target._x_ignoreMutationObserver&&(e[n].type==="childList"&&(e[n].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&o.add(s)}),e[n].addedNodes.forEach(s=>{if(s.nodeType===1){if(o.has(s)){o.delete(s);return}s._x_marker||t.push(s)}})),e[n].type==="attributes")){let s=e[n].target,a=e[n].attributeName,d=e[n].oldValue,c=()=>{r.has(s)||r.set(s,[]),r.get(s).push({name:a,value:s.getAttribute(a)})},l=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&d===null?c():s.hasAttribute(a)?(l(),c()):l()}i.forEach((n,s)=>{co(s,n)}),r.forEach((n,s)=>{io.forEach(a=>a(s,n))});for(let n of o)t.some(s=>s.contains(n))||ro.forEach(s=>s(n));for(let n of t)n.isConnected&&no.forEach(s=>s(n));t=null,o=null,r=null,i=null}function uo(e){return V(U(e))}function _e(e,t,o){return e._x_dataStack=[t,...U(o||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function U(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?U(e.host):e.parentNode?U(e.parentNode):[]}function V(e){return new Proxy({objects:e},Oi)}function po(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:po(Object.getPrototypeOf(e),t)}var Oi={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(o=>Object.prototype.hasOwnProperty.call(o,t)||Reflect.has(o,t))},get({objects:e},t,o){return t=="toJSON"?ki:Reflect.get(e.find(r=>Reflect.has(r,t))||{},t,o)},set({objects:e},t,o,r){let i;for(const s of e)if(i=po(s,t),i)break;i||(i=e[e.length-1]);const n=Object.getOwnPropertyDescriptor(i,t);return n!=null&&n.set&&(n!=null&&n.get)?n.set.call(r,o)||!0:Reflect.set(i,t,o)}};function ki(){return Reflect.ownKeys(this).reduce((t,o)=>(t[o]=Reflect.get(this,o),t),{})}function _t(e,t=()=>{}){let o=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,r=(i,n="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:d}])=>{if(d===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let c=n===""?s:`${n}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(e,c,s,t):o(a)&&a!==i&&!(a instanceof Element)&&r(a,c)})};return r(e)}function fo(e,t=()=>{}){let o={initialValue:void 0,_x_interceptor:!0,initialize(r,i,n,s){return e(this.initialValue,()=>Wi(r,i),a=>ot(r,i,a),i,n,s)}};return t(o),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let i=o.initialize.bind(o);o.initialize=(n,s,a,d)=>{let c=r.initialize(n,s,a,d);return o.initialValue=c,i(n,s,a,d)}}else o.initialValue=r;return o}}function Wi(e,t){return t.split(".").reduce((o,r)=>o[r],e)}function ot(e,t,o){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=o;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),ot(e[t[0]],t.slice(1),o)}}var ho={};function C(e,t){ho[e]=t}function he(e,t){let o=Fi(t);return Object.entries(ho).forEach(([r,i])=>{Object.defineProperty(e,`$${r}`,{get(){return i(t,o)},enumerable:!1})}),e}function Fi(e){let[t,o]=wo(e),r={interceptor:fo,...t};return vt(e,o),r}function Ni(e,t,o,...r){try{return o(...r)}catch(i){oe(i,e,t)}}function oe(...e){return go(...e)}var go=Bi;function Hi(e){go=e}function Bi(e,t,o=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:o}),console.warn(`Alpine Expression Error: ${e.message}

${o?'Expression: "'+o+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var te=!0;function mo(e){let t=te;te=!1;let o=e();return te=t,o}function B(e,t,o={}){let r;return w(e,t)(i=>r=i,o),r}function w(...e){return bo(...e)}var bo=()=>{};function zi(e){bo=e}var vo;function Ui(e){vo=e}function Vi(e,t){let o={};he(o,e);let r=[o,...U(e)],i=typeof t=="function"?Gi(r,t):ji(r,t,e);return Ni.bind(null,e,t,i)}function Gi(e,t){return(o=()=>{},{scope:r={},params:i=[],context:n}={})=>{if(!te){ge(o,t,V([r,...e]),i);return}let s=t.apply(V([r,...e]),i);ge(o,s)}}var Ve={};function $i(e,t){if(Ve[e])return Ve[e];let o=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,n=(()=>{try{let s=new o(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return oe(s,t,e),Promise.resolve()}})();return Ve[e]=n,n}function ji(e,t,o){let r=$i(t,o);return(i=()=>{},{scope:n={},params:s=[],context:a}={})=>{r.result=void 0,r.finished=!1;let d=V([n,...e]);if(typeof r=="function"){let c=r.call(a,r,d).catch(l=>oe(l,o,t));r.finished?(ge(i,r.result,d,s,o),r.result=void 0):c.then(l=>{ge(i,l,d,s,o)}).catch(l=>oe(l,o,t)).finally(()=>r.result=void 0)}}}function ge(e,t,o,r,i){if(te&&typeof t=="function"){let n=t.apply(o,r);n instanceof Promise?n.then(s=>ge(e,s,o,r)).catch(s=>oe(s,i,t)):e(n)}else typeof t=="object"&&t instanceof Promise?t.then(n=>e(n)):e(t)}function qi(...e){return vo(...e)}function Ki(e,t,o={}){let r={};he(r,e);let i=[r,...U(e)],n=V([o.scope??{},...i]),s=o.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,d=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${d}; return __result }`).call(o.context,n)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(o.context,n);return typeof c=="function"&&te?c.apply(n,s):c}}var xt="x-";function G(e=""){return xt+e}function Qi(e){xt=e}var De={};function v(e,t){return De[e]=t,{before(o){if(!De[o]){console.warn(String.raw`Cannot find directive \`${o}\`. \`${e}\` will use the default order of execution`);return}const r=H.indexOf(o);H.splice(r>=0?r:H.indexOf("DEFAULT"),0,e)}}}function Zi(e){return Object.keys(De).includes(e)}function Fe(e,t,o){if(t=Array.from(t),e._x_virtualDirectives){let n=Object.entries(e._x_virtualDirectives).map(([a,d])=>({name:a,value:d})),s=yo(n);n=n.map(a=>s.find(d=>d.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(n)}let r={};return t.map(Ao((n,s)=>r[n]=s)).filter(Io).map(Yi(r,o)).sort(er).map(n=>Xi(e,n))}function yo(e){return Array.from(e).map(Ao()).filter(t=>!Io(t))}var it=!1,de=new Map,So=Symbol();function Ji(e){it=!0;let t=Symbol();So=t,de.set(t,[]);let o=()=>{for(;de.get(t).length;)de.get(t).shift()();de.delete(t)},r=()=>{it=!1,o()};e(o),r()}function wo(e){let t=[],o=a=>t.push(a),[r,i]=Ii(e);return t.push(i),[{Alpine:ne,effect:r,cleanup:o,evaluateLater:w.bind(w,e),evaluate:B.bind(B,e)},()=>t.forEach(a=>a())]}function Xi(e,t){let o=()=>{},r=De[t.type]||o,[i,n]=wo(e);ao(e,t.original,n);let s=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,i),r=r.bind(r,e,t,i),it?de.get(So).push(r):r())};return s.runCleanups=n,s}var _o=(e,t)=>({name:o,value:r})=>(o.startsWith(e)&&(o=o.replace(e,t)),{name:o,value:r}),xo=e=>e;function Ao(e=()=>{}){return({name:t,value:o})=>{let{name:r,value:i}=Co.reduce((n,s)=>s(n),{name:t,value:o});return r!==t&&e(r,t),{name:r,value:i}}}var Co=[];function At(e){Co.push(e)}function Io({name:e}){return Mo().test(e)}var Mo=()=>new RegExp(`^${xt}([^:^.]+)\\b`);function Yi(e,t){return({name:o,value:r})=>{o===r&&(r="");let i=o.match(Mo()),n=o.match(/:([a-zA-Z0-9\-_:]+)/),s=o.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[o]||o;return{type:i?i[1]:null,value:n?n[1]:null,modifiers:s.map(d=>d.replace(".","")),expression:r,original:a}}}var rt="DEFAULT",H=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",rt,"teleport"];function er(e,t){let o=H.indexOf(e.type)===-1?rt:e.type,r=H.indexOf(t.type)===-1?rt:t.type;return H.indexOf(o)-H.indexOf(r)}function $(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>$(i,t));return}let o=!1;if(t(e,()=>o=!0),o)return;let r=e.firstElementChild;for(;r;)$(r,t),r=r.nextElementSibling}var L=!1;function O(e,t=()=>{}){return(...o)=>L?t(...o):e(...o)}function tr(e){return(...t)=>L&&e(...t)}var Eo=[];function xe(e){Eo.push(e)}function or(e,t){Eo.forEach(o=>o(e,t)),L=!0,Ro(()=>{E(t,(o,r)=>{r(o,()=>{})})}),L=!1}var nt=!1;function ir(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),L=!0,nt=!0,Ro(()=>{rr(t)}),L=!1,nt=!1}function rr(e){let t=!1;E(e,(r,i)=>{$(r,(n,s)=>{if(t&&lr(n))return s();t=!0,i(n,s)})})}function Ro(e){let t=Z;zt((o,r)=>{let i=t(o);return re(i),()=>{}}),e(),zt(t)}var Ne=0;function nr(e,t){let o=e._x_deferInit;o||(o=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},o.ownsIgnore&&(e._x_ignore=!0),Ne++),o.pending++,Promise.resolve(t).catch(r=>{try{oe(r,e)}catch(i){setTimeout(()=>{throw i},0)}}).then(()=>sr(e,o))}function sr(e,t){t.pending--,!(t.pending>0)&&(Di(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Ne--,e.isConnected&&(dr(t),E(e))))}function ar(e,t){if(Ne===0)return!1;let o=x(e,r=>r._x_deferInit);return o?(To(o._x_deferInit,e,t.map(({name:r})=>r)),!0):!1}function To(e,t,o){let r=e.queuedAttributes.get(t);(!r||r.marker!==t._x_marker)&&(r={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,r)),o.forEach(i=>r.names.add(i))}function dr(e){e.queuedAttributes.forEach((t,o)=>{if(!o.isConnected||!o._x_marker||o._x_marker!==t.marker)return;let r=x(o,n=>n._x_deferInit);if(r){To(r._x_deferInit,o,Array.from(t.names));return}let i=Array.from(t.names).filter(n=>o.hasAttribute(n)).map(n=>({name:n,value:o.getAttribute(n)}));i.length!==0&&Fe(o,i).forEach(n=>n())})}xe((e,t)=>{Ne!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||x(e,o=>o._x_deferInit)&&(t._x_ignore=!0))});function ce(e,t,o={},r={}){return e.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:!0,composed:!0,cancelable:!0,...r}))}function M(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Ut=!1;function cr(){Ut&&M("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Ut=!0,document.body||M("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),ce(document,"alpine:init"),ce(document,"alpine:initializing"),St(),Ei(t=>E(t,$)),vt(t=>J(t)),so((t,o)=>{ar(t,o)||Fe(t,o).forEach(r=>r())});let e=t=>!He(t.parentElement,!0);Array.from(document.querySelectorAll(Lo().join(","))).filter(e).forEach(t=>{E(t)}),ce(document,"alpine:initialized"),setTimeout(()=>{fr()})}var Ct=[],Do=[];function Po(){return Ct.map(e=>e())}function Lo(){return Ct.concat(Do).map(e=>e())}function Oo(e){Ct.push(e)}function ko(e){Do.push(e)}function He(e,t=!1){return x(e,o=>{if((t?Lo():Po()).some(i=>o.matches(i)))return!0})}function x(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return x(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return x(e.parentNode.host,t);if(e.parentElement)return x(e.parentElement,t)}}function lr(e){return Po().some(t=>e.matches(t))}var Wo=[];function ur(e){Wo.push(e)}var pr=1;function E(e,t=$,o=()=>{}){x(e,r=>r._x_ignore)||Ji(()=>{t(e,(r,i)=>{r._x_marker||(o(r,i),Wo.forEach(n=>n(r,i)),Fe(r,r.attributes).forEach(n=>n()),r._x_ignore||(r._x_marker=pr++),r._x_ignore&&i())})})}function J(e,t=$){t(e,o=>{Ri(o),co(o),delete o._x_marker})}function fr(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,o,r])=>{Zi(o)||r.some(i=>{if(document.querySelector(i))return M(`found "${i}", but missing ${t} plugin`),!0})})}var st=[],It=!1;function Mt(e=()=>{}){return queueMicrotask(()=>{It||setTimeout(()=>{at()})}),new Promise(t=>{st.push(()=>{e(),t()})})}function at(){for(It=!1;st.length;)st.shift()()}function hr(){It=!0}function Et(e,t){return Array.isArray(t)?Vt(e,t.join(" ")):typeof t=="object"&&t!==null?gr(e,t):typeof t=="function"?Et(e,t()):Vt(e,t)}function dt(e){return e.split(/\s/).filter(Boolean)}function Vt(e,t){let o=i=>dt(i).filter(n=>!e.classList.contains(n)).filter(Boolean),r=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",r(o(t))}function gr(e,t){let o=Object.entries(t).flatMap(([s,a])=>a?dt(s):!1).filter(Boolean),r=Object.entries(t).flatMap(([s,a])=>a?!1:dt(s)).filter(Boolean),i=[],n=[];return r.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),n.push(s))}),o.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),i.push(s))}),()=>{n.forEach(s=>e.classList.add(s)),i.forEach(s=>e.classList.remove(s))}}function Be(e,t){return typeof t=="object"&&t!==null?mr(e,t):br(e,t)}function mr(e,t){let o={};return Object.entries(t).forEach(([r,i])=>{o[r]=e.style[r],r.startsWith("--")||(r=vr(r)),e.style.setProperty(r,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Be(e,o)}}function br(e,t){let o=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",o||"")}}function vr(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ct(e,t=()=>{}){let o=!1;return function(){o?t.apply(this,arguments):(o=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:o,expression:r},{evaluate:i})=>{typeof r=="function"&&(r=i(r)),r!==!1&&(!r||typeof r=="boolean"?Sr(e,o,t):yr(e,r,t))});function yr(e,t,o){Fo(e,Et,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[o](t)}function Sr(e,t,o){Fo(e,Be);let r=!t.includes("in")&&!t.includes("out")&&!o,i=r||t.includes("in")||["enter"].includes(o),n=r||t.includes("out")||["leave"].includes(o);t.includes("in")&&!r&&(t=t.filter((S,X)=>X<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((S,X)=>X>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),d=s||t.includes("scale"),c=a?0:1,l=d?se(t,"scale",95)/100:1,u=se(t,"delay",0)/1e3,g=se(t,"origin","center"),m="opacity, transform",R=se(t,"duration",150)/1e3,p=se(t,"duration",75)/1e3,y="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${R}s`,transitionTimingFunction:y},e._x_transition.enter.start={opacity:c,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),n&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${p}s`,transitionTimingFunction:y},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${l})`})}function Fo(e,t,o={}){e._x_transition||(e._x_transition={enter:{during:o,start:o,end:o},leave:{during:o,start:o,end:o},in(r=()=>{},i=()=>{}){lt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,i)},out(r=()=>{},i=()=>{}){lt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,o,r){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let n=()=>i(o);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(o):n():e._x_transition?e._x_transition.in(o):n();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let s=No(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):i(()=>{let a=d=>{let c=Promise.all([d._x_hidePromise,...(d._x_hideChildren||[]).map(a)]).then(([l])=>l==null?void 0:l());return delete d._x_hidePromise,delete d._x_hideChildren,c};a(e).catch(d=>{if(!d.isFromCancelledTransition)throw d})})})};function No(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:No(t)}function lt(e,t,{during:o,start:r,end:i}={},n=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(o).length===0&&Object.keys(r).length===0&&Object.keys(i).length===0){n(),s();return}let a,d,c;wr(e,{start(){a=t(e,r)},during(){d=t(e,o)},before:n,end(){a(),c=t(e,i)},after:s,cleanup(){d(),c()}})}function wr(e,t){let o,r,i,n=ct(()=>{b(()=>{o=!0,r||t.before(),i||(t.end(),at()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:ct(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();n()}),finish:n},b(()=>{t.start(),t.during()}),hr(),requestAnimationFrame(()=>{if(o)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),b(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{o||(b(()=>{t.end()}),at(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function se(e,t,o){if(e.indexOf(t)===-1)return o;const r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return o;if(t==="duration"||t==="delay"){let i=r.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}function Ho(e,t,o,r=[]){switch(e._x_bindings||(e._x_bindings=ie({})),e._x_bindings[t]=o,t=r.includes("camel")?Rr(t):t,t){case"value":_r(e,o);break;case"style":Ar(e,o);break;case"class":xr(e,o);break;case"selected":case"checked":Cr(e,t,o);break;default:Rt(e,t,o);break}}function _r(e,t){if(Tt(e))e.attributes.value===void 0&&(e.value=t);else if(Pe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(o=>Tr(o,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Er(e,t);else if(e.tagName==="OPTION")Rt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function xr(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Et(e,t)}function Ar(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Be(e,t)}function Cr(e,t,o){Rt(e,t,o),Mr(e,t,o)}function Rt(e,t,o){[null,void 0,!1].includes(o)&&Pr(t)?e.removeAttribute(t):(Bo(t)&&(o=t),Lr(o)&&(o=JSON.stringify(o)),Ir(e,t,o))}function Ir(e,t,o){e.getAttribute(t)!=o&&e.setAttribute(t,o)}function Mr(e,t,o){e[t]!==o&&(e[t]=o)}function Er(e,t){const o=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=o.includes(r.value)})}function Rr(e){return e.toLowerCase().replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function Tr(e,t){return e==t}function Ee(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Dr=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Bo(e){return Dr.has(e)}function Pr(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Lr(e){return typeof e=="object"&&e!==null}function Or(e,t,o){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:zo(e,t,o)}function kr(e,t,o,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=r,mo(()=>B(e,i.expression))}return zo(e,t,o)}function zo(e,t,o){let r=e.getAttribute(t);return r===null?typeof o=="function"?o():o:r===""?!0:Bo(t)?!![t,"true"].includes(r):r}function Pe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Tt(e){return e.type==="radio"||e.localName==="ui-radio"}function Uo(e,t){let o;return function(){const r=this,i=arguments,n=function(){o=null,e.apply(r,i)};clearTimeout(o),o=setTimeout(n,t)}}function Vo(e,t){let o;return function(){let r=this,i=arguments;o||(e.apply(r,i),o=!0,setTimeout(()=>o=!1,t))}}function Go({get:e,set:t},{get:o,set:r}){let i=!0,n,s=Z(()=>{let a=e(),d=o();if(i)r(Ge(a)),i=!1;else{let c=JSON.stringify(a),l=JSON.stringify(d);c!==n?r(Ge(a)):c!==l&&t(Ge(d))}n=JSON.stringify(e()),JSON.stringify(o())});return()=>{bt(s),re(s)}}function Ge(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Wr(e){(Array.isArray(e)?e:[e]).forEach(o=>o(ne))}var D={},Gt=!1;function Fr(e,t){if(Gt||(D=ie(D),Gt=!0),t===void 0)return D[e];D[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?D[e]=t.initialize(D,e,e,()=>{}):_t(D[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&D[e].init()}function Nr(){return D}var $o={};function Hr(e,t){let o=typeof t!="function"?()=>t:t;return e instanceof Element?jo(e,o()):($o[e]=o,()=>{})}function Br(e){return Object.entries($o).forEach(([t,o])=>{Object.defineProperty(e,t,{get(){return(...r)=>o(...r)}})}),e}function jo(e,t,o){let r=[];for(;r.length;)r.pop()();let i=Object.entries(t).map(([s,a])=>({name:s,value:a})),n=yo(i);return i=i.map(s=>n.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),Fe(e,i,o).map(s=>{r.push(s.runCleanups),s()}),()=>{for(;r.length;)r.pop()()}}var qo={};function zr(e,t){qo[e]=t}function Ur(e,t){return Object.entries(qo).forEach(([o,r])=>{Object.defineProperty(e,o,{get(){return(...i)=>r.bind(t)(...i)},enumerable:!1})}),e}var Vr={get reactive(){return ie},get release(){return re},get effect(){return Z},get raw(){return to},get transaction(){return Mi},version:"3.17.5",flushAndStopDeferringMutations:Li,dontAutoEvaluateFunctions:mo,disableEffectScheduling:Ai,startObservingMutations:St,stopObservingMutations:lo,setReactivityEngine:Ci,onAttributeRemoved:ao,onAttributesAdded:so,closestDataStack:U,skipDuringClone:O,onlyDuringClone:tr,addRootSelector:Oo,addInitSelector:ko,setErrorHandler:Hi,interceptClone:xe,addScopeToNode:_e,deferMutations:Pi,mapAttributes:At,evaluateLater:w,interceptInit:ur,initInterceptors:_t,injectMagics:he,setEvaluator:zi,setRawEvaluator:Ui,mergeProxies:V,extractProp:kr,findClosest:x,onElRemoved:vt,closestRoot:He,destroyTree:J,interceptor:fo,transition:lt,setStyles:Be,mutateDom:b,deferInit:nr,directive:v,entangle:Go,throttle:Vo,debounce:Uo,evaluate:B,evaluateRaw:qi,initTree:E,nextTick:Mt,prefixed:G,prefix:Qi,plugin:Wr,magic:C,store:Fr,start:cr,clone:ir,cloneNode:or,bound:Or,$data:uo,watch:oo,walk:$,data:zr,bind:Hr},ne=Vr;function Gr(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}var me=Object.assign,$r=Object.prototype.hasOwnProperty,ut=(e,t)=>$r.call(e,t),be=Array.isArray,le=e=>Ko(e)==="[object Map]",jr=e=>typeof e=="string",Ae=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",qr=Object.prototype.toString,Ko=e=>qr.call(e),Qo=e=>Ko(e).slice(8,-1),Dt=e=>jr(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Qr=Kr(e=>e.charAt(0).toUpperCase()+e.slice(1)),N=(e,t)=>!Object.is(e,t);function j(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var f,$e=new WeakSet,$t=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$e.has(this)&&($e.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jt(this),Jo(this);const e=f,t=A;f=this,A=!0;try{return this.fn()}finally{f!==this&&j("Active effect was not restored correctly - this is likely a Vue internal bug."),Xo(this),f=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ot(e);this.deps=this.depsTail=void 0,jt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$e.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pt(this)&&this.run()}get dirty(){return pt(this)}},Zo=0,ue,pe;function Zr(e,t=!1){if(e.flags|=8,t){e.next=pe,pe=e;return}e.next=ue,ue=e}function Pt(){Zo++}function Lt(){if(--Zo>0)return;if(pe){let t=pe;for(pe=void 0;t;){const o=t.next;t.next=void 0,t.flags&=-9,t=o}}let e;for(;ue;){let t=ue;for(ue=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=o}}if(e)throw e}function Jo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xo(e){let t,o=e.depsTail,r=o;for(;r;){const i=r.prevDep;r.version===-1?(r===o&&(o=i),Ot(r),Xr(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=o}function pt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Jr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Jr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Le)||(e.globalVersion=Le,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!pt(e))))return;e.flags|=2;const t=e.dep,o=f,r=A;f=e,A=!0;try{Jo(e);const i=e.fn(e._value);(t.version===0||N(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{f=o,A=r,Xo(e),e.flags&=-3}}function Ot(e,t=!1){const{dep:o,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),o.subsHead===e&&(o.subsHead=i),o.subs===e&&(o.subs=r,!r&&o.computed)){o.computed.flags&=-5;for(let n=o.computed.deps;n;n=n.nextDep)Ot(n,!0)}!t&&!--o.sc&&o.map&&o.map.delete(o.key)}function Xr(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}function Yr(e,t){e.effect instanceof $t&&(e=e.effect.fn);const o=new $t(e);t&&me(o,t);try{o.run()}catch(i){throw o.stop(),i}const r=o.run.bind(o);return r.effect=o,r}function en(e){e.effect.stop()}var A=!0,Yo=[];function tn(){Yo.push(A),A=!1}function on(){const e=Yo.pop();A=e===void 0?!0:e}function jt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=f;f=void 0;try{t()}finally{f=o}}}var Le=0,rn=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},nn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!f||!A||f===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==f)t=this.activeLink=new rn(f,this),f.deps?(t.prevDep=f.depsTail,f.depsTail.nextDep=t,f.depsTail=t):f.deps=f.depsTail=t,ei(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=f.depsTail,t.nextDep=void 0,f.depsTail.nextDep=t,f.depsTail=t,f.deps===t&&(f.deps=o)}return f.onTrack&&f.onTrack(me({effect:f},e)),t}trigger(e){this.version++,Le++,this.notify(e)}notify(e){Pt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(me({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lt()}}};function ei(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ei(r)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ft=new WeakMap,z=Symbol("Object iterate"),ht=Symbol("Map keys iterate"),ye=Symbol("Array iterate");function _(e,t,o){if(A&&f){let r=ft.get(e);r||ft.set(e,r=new Map);let i=r.get(o);i||(r.set(o,i=new nn),i.map=r,i.key=o),i.track({target:e,type:t,key:o})}}function k(e,t,o,r,i,n){const s=ft.get(e);if(!s){Le++;return}const a=d=>{d&&d.trigger({target:e,type:t,key:o,newValue:r,oldValue:i,oldTarget:n})};if(Pt(),t==="clear")s.forEach(a);else{const d=be(e),c=d&&Dt(o);if(d&&o==="length"){const l=Number(r);s.forEach((u,g)=>{(g==="length"||g===ye||!Ae(g)&&g>=l)&&a(u)})}else switch((o!==void 0||s.has(void 0))&&a(s.get(o)),c&&a(s.get(ye)),t){case"add":d?c&&a(s.get("length")):(a(s.get(z)),le(e)&&a(s.get(ht)));break;case"delete":d||(a(s.get(z)),le(e)&&a(s.get(ht)));break;case"set":le(e)&&a(s.get(z));break}}Lt()}function Y(e){const t=h(e);return t===e?t:(_(t,"iterate",ye),K(e)?t:t.map(Q))}function kt(e){return _(e=h(e),"iterate",ye),e}function I(e,t){return q(e)?ai(e)?Se(Q(t)):Se(t):Q(t)}var sn={__proto__:null,[Symbol.iterator](){return je(this,Symbol.iterator,e=>I(this,e))},concat(...e){return Y(this).concat(...e.map(t=>be(t)?Y(t):t))},entries(){return je(this,"entries",e=>(e[1]=I(this,e[1]),e))},every(e,t){return T(this,"every",e,t,void 0,arguments)},filter(e,t){return T(this,"filter",e,t,o=>o.map(r=>I(this,r)),arguments)},find(e,t){return T(this,"find",e,t,o=>I(this,o),arguments)},findIndex(e,t){return T(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return T(this,"findLast",e,t,o=>I(this,o),arguments)},findLastIndex(e,t){return T(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return T(this,"forEach",e,t,void 0,arguments)},includes(...e){return qe(this,"includes",e)},indexOf(...e){return qe(this,"indexOf",e)},join(e){return Y(this).join(e)},lastIndexOf(...e){return qe(this,"lastIndexOf",e)},map(e,t){return T(this,"map",e,t,void 0,arguments)},pop(){return ae(this,"pop")},push(...e){return ae(this,"push",e)},reduce(e,...t){return qt(this,"reduce",e,t)},reduceRight(e,...t){return qt(this,"reduceRight",e,t)},shift(){return ae(this,"shift")},some(e,t){return T(this,"some",e,t,void 0,arguments)},splice(...e){return ae(this,"splice",e)},toReversed(){return Y(this).toReversed()},toSorted(e){return Y(this).toSorted(e)},toSpliced(...e){return Y(this).toSpliced(...e)},unshift(...e){return ae(this,"unshift",e)},values(){return je(this,"values",e=>I(this,e))}};function je(e,t,o){const r=kt(e),i=r[t]();return r!==e&&!K(e)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.done||(n.value=o(n.value)),n}),i}var an=Array.prototype;function T(e,t,o,r,i,n){const s=kt(e),a=s!==e&&!K(e),d=s[t];if(d!==an[t]){const u=d.apply(e,n);return a?Q(u):u}let c=o;s!==e&&(a?c=function(u,g){return o.call(this,I(e,u),g,e)}:o.length>2&&(c=function(u,g){return o.call(this,u,g,e)}));const l=d.call(s,c,r);return a&&i?i(l):l}function qt(e,t,o,r){const i=kt(e),n=i!==e&&!K(e);let s=o,a=!1;i!==e&&(n?(a=r.length===0,s=function(c,l,u){return a&&(a=!1,c=I(e,c)),o.call(this,c,I(e,l),u,e)}):o.length>3&&(s=function(c,l,u){return o.call(this,c,l,u,e)}));const d=i[t](s,...r);return a?I(e,d):d}function qe(e,t,o){const r=h(e);_(r,"iterate",ye);const i=r[t](...o);return(i===-1||i===!1)&&wn(o[0])?(o[0]=h(o[0]),r[t](...o)):i}function ae(e,t,o=[]){tn(),Pt();const r=h(e)[t].apply(e,o);return Lt(),on(),r}var dn=Gr("__proto__,__v_isRef,__isVue"),ti=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ae));function cn(e){Ae(e)||(e=String(e));const t=h(this);return _(t,"has",e),t.hasOwnProperty(e)}var oi=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,o){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return o===(r?i?yn:ni:i?vn:ri).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const n=be(e);if(!r){let a;if(n&&(a=sn[t]))return a;if(t==="hasOwnProperty")return cn}const s=Reflect.get(e,t,fe(e)?e:o);if((Ae(t)?ti.has(t):dn(t))||(r||_(e,"get",t),i))return s;if(fe(s)){const a=n&&Dt(t)?s:s.value;return r&&ve(a)?gt(a):a}return ve(s)?r?gt(s):Wt(s):s}},ln=class extends oi{constructor(e=!1){super(!1,e)}set(e,t,o,r){let i=e[t];const n=be(e)&&Dt(t);if(!this._isShallow){const d=q(i);if(!K(o)&&!q(o)&&(i=h(i),o=h(o)),!n&&fe(i)&&!fe(o))return d?(j(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(i.value=o,!0)}const s=n?Number(t)<e.length:ut(e,t),a=Reflect.set(e,t,o,fe(e)?e:r);return e===h(r)&&a&&(s?N(o,i)&&k(e,"set",t,o,i):k(e,"add",t,o)),a}deleteProperty(e,t){const o=ut(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&o&&k(e,"delete",t,void 0,r),i}has(e,t){const o=Reflect.has(e,t);return(!Ae(t)||!ti.has(t))&&_(e,"has",t),o}ownKeys(e){return _(e,"iterate",be(e)?"length":z),Reflect.ownKeys(e)}},un=class extends oi{constructor(e=!1){super(!0,e)}set(e,t){return j(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return j(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},pn=new ln,fn=new un,Ce=e=>Reflect.getPrototypeOf(e);function hn(e,t,o){return function(...r){const i=this.__v_raw,n=h(i),s=le(n),a=e==="entries"||e===Symbol.iterator&&s,d=e==="keys"&&s,c=i[e](...r),l=t?Se:Q;return!t&&_(n,"iterate",d?ht:z),me(Object.create(c),{next(){const{value:u,done:g}=c.next();return g?{value:u,done:g}:{value:a?[l(u[0]),l(u[1])]:l(u),done:g}}})}}function Ie(e){return function(...t){{const o=t[0]?`on key "${t[0]}" `:"";j(`${Qr(e)} operation ${o}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function gn(e,t){const o={get(i){const n=this.__v_raw,s=h(n),a=h(i);e||(N(i,a)&&_(s,"get",i),_(s,"get",a));const{has:d}=Ce(s),c=e?Se:Q;if(d.call(s,i))return c(n.get(i));if(d.call(s,a))return c(n.get(a));n!==s&&n.get(i)},get size(){const i=this.__v_raw;return!e&&_(h(i),"iterate",z),i.size},has(i){const n=this.__v_raw,s=h(n),a=h(i);return e||(N(i,a)&&_(s,"has",i),_(s,"has",a)),i===a?n.has(i):n.has(i)||n.has(a)},forEach(i,n){const s=this,a=s.__v_raw,d=h(a),c=e?Se:Q;return!e&&_(d,"iterate",z),a.forEach((l,u)=>i.call(n,c(l),c(u),s))}};return me(o,e?{add:Ie("add"),set:Ie("set"),delete:Ie("delete"),clear:Ie("clear")}:{add(i){const n=h(this),s=Ce(n),a=h(i),d=!K(i)&&!q(i)?a:i;return s.has.call(n,d)||N(i,d)&&s.has.call(n,i)||N(a,d)&&s.has.call(n,a)||(n.add(d),k(n,"add",d,d)),this},set(i,n){!K(n)&&!q(n)&&(n=h(n));const s=h(this),{has:a,get:d}=Ce(s);let c=a.call(s,i);c?Kt(s,a,i):(i=h(i),c=a.call(s,i));const l=d.call(s,i);return s.set(i,n),c?N(n,l)&&k(s,"set",i,n,l):k(s,"add",i,n),this},delete(i){const n=h(this),{has:s,get:a}=Ce(n);let d=s.call(n,i);d?Kt(n,s,i):(i=h(i),d=s.call(n,i));const c=a?a.call(n,i):void 0,l=n.delete(i);return d&&k(n,"delete",i,void 0,c),l},clear(){const i=h(this),n=i.size!==0,s=le(i)?new Map(i):new Set(i),a=i.clear();return n&&k(i,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{o[i]=hn(i,e)}),o}function ii(e,t){const o=gn(e);return(r,i,n)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ut(o,i)&&i in r?o:r,i,n)}var mn={get:ii(!1)},bn={get:ii(!0)};function Kt(e,t,o){const r=h(o);if(r!==o&&t.call(e,r)){const i=Qo(e);j(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var ri=new WeakMap,vn=new WeakMap,ni=new WeakMap,yn=new WeakMap;function Sn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wt(e){return q(e)?e:si(e,!1,pn,mn,ri)}function gt(e){return si(e,!0,fn,bn,ni)}function si(e,t,o,r,i){if(!ve(e))return j(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const n=i.get(e);if(n)return n;const s=Sn(Qo(e));if(s===0)return e;const a=new Proxy(e,s===2?r:o);return i.set(e,a),a}function ai(e){return q(e)?ai(e.__v_raw):!!(e&&e.__v_isReactive)}function q(e){return!!(e&&e.__v_isReadonly)}function K(e){return!!(e&&e.__v_isShallow)}function wn(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var Q=e=>ve(e)?Wt(e):e,Se=e=>ve(e)?gt(e):e;function fe(e){return e?e.__v_isRef===!0:!1}C("nextTick",()=>Mt);C("dispatch",e=>ce.bind(ce,e));C("watch",(e,{evaluateLater:t,cleanup:o})=>(r,i)=>{let n=t(r),a=oo(()=>{let d;return n(c=>d=c),d},i);o(a)});C("store",Nr);C("data",e=>uo(e));C("root",e=>He(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=V(_n(e))),e._x_refs_proxy));function _n(e){let t=[];return x(e,o=>{o._x_refs&&t.push(o._x_refs)}),t}var Ke={};function di(e){return Ke[e]||(Ke[e]=0),++Ke[e]}function xn(e,t){return x(e,o=>{if(o._x_ids&&o._x_ids[t])return!0})}function An(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=di(t))}C("id",(e,{cleanup:t})=>(o,r=null)=>{let i=`${o}${r?`-${r}`:""}`;return Cn(e,i,t,()=>{let n=xn(e,o),s=n?n._x_ids[o]:di(o);return r?`${o}-${s}-${r}`:`${o}-${s}`})});xe((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Cn(e,t,o,r){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=r();return e._x_id[t]=i,o(()=>{delete e._x_id[t]}),i}C("el",e=>e);ci("Focus","focus","focus");ci("Persist","persist","persist");function ci(e,t,o){C(t,r=>M(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${o}`,r))}v("modelable",(e,{expression:t},{effect:o,evaluateLater:r,cleanup:i})=>{let n=r(t),s=()=>{let l;return n(u=>l=u),l},a=r(`${t} = __placeholder`),d=l=>a(()=>{},{scope:{__placeholder:l}}),c=s();d(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.setWithModifiers,g=Go({get(){return l()},set(m){u(m)}},{get(){return s()},set(m){d(m)}});i(g)})});v("teleport",(e,{modifiers:t,expression:o},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&M("x-teleport can only be used on a <template> tag",e);let i=Qt(o),n=e.content.cloneNode(!0).firstElementChild;e._x_teleport=n,n._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),n.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{n.addEventListener(a,d=>{d.stopPropagation(),e.dispatchEvent(new d.constructor(d.type,d))})}),_e(n,{},e);let s=(a,d,c)=>{c.includes("prepend")?d.parentNode.insertBefore(a,d):c.includes("append")?d.parentNode.insertBefore(a,d.nextSibling):d.appendChild(a)};b(()=>{O(()=>{s(n,i,t),E(n)})()}),e._x_teleportPutBack=()=>{let a=Qt(o);b(()=>{s(e._x_teleport,a,t)})},r(()=>b(()=>{n.remove(),J(n)}))});var In=document.createElement("div");function Qt(e){let t=O(()=>document.querySelector(e),()=>In)();return t||M(`Cannot find x-teleport element for selector: "${e}"`),t}var li=()=>{};li.inline=(e,{modifiers:t},{cleanup:o})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,o(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",li);v("effect",O((e,{expression:t},{effect:o})=>{o(w(e,t))}));function ee(e,t,o,r){let i=e,n=d=>r(d),s={},a=(d,c)=>l=>c(d,l);return o.includes("dot")&&(t=Mn(t)),o.includes("camel")&&(t=En(t)),o.includes("capture")&&(s.capture=!0),o.includes("window")&&(i=window),o.includes("document")&&(i=document),o.includes("passive")&&(s.passive=o[o.indexOf("passive")+1]!=="false"),n=ui(o,n),o.includes("prevent")&&(n=a(n,(d,c)=>{c.preventDefault(),d(c)})),o.includes("stop")&&(n=a(n,(d,c)=>{c.stopPropagation(),d(c)})),o.includes("once")&&(n=a(n,(d,c)=>{d(c),i.removeEventListener(t,n,s)})),(o.includes("away")||o.includes("outside"))&&(i=document,n=a(n,(d,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&d(c))})),o.includes("self")&&(n=a(n,(d,c)=>{c.target===e&&d(c)})),t==="submit"&&(n=a(n,(d,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(l=>l()),d(c)})),(Tn(t)||pi(t))&&(n=a(n,(d,c)=>{Pn(c,o)||d(c)})),i.addEventListener(t,n,s),()=>{i.removeEventListener(t,n,s)}}function ui(e,t){if(e.includes("debounce")){let o=e[e.indexOf("debounce")+1]||"invalid-wait",r=Oe(o.split("ms")[0])?Number(o.split("ms")[0]):250;t=Uo(t,r)}if(e.includes("throttle")){let o=e[e.indexOf("throttle")+1]||"invalid-wait",r=Oe(o.split("ms")[0])?Number(o.split("ms")[0]):250;t=Vo(t,r)}return t}function Mn(e){return e.replace(/-/g,".")}function En(e){return e.toLowerCase().replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function Oe(e){return!Array.isArray(e)&&!isNaN(e)}function Rn(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Tn(e){return["keydown","keyup"].includes(e)}function pi(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Dn=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Pn(e,t){let o=t.filter((n,s)=>n==="false"&&t[s-1]==="passive"?!1:!Dn.includes(n));if(o.includes("debounce")){let n=o.indexOf("debounce");o.splice(n,Oe((o[n+1]||"invalid-wait").split("ms")[0])?2:1)}if(o.includes("throttle")){let n=o.indexOf("throttle");o.splice(n,Oe((o[n+1]||"invalid-wait").split("ms")[0])?2:1)}if(o.length===0||o.length===1&&Zt(e.key).includes(o[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(n=>o.includes(n));return o=o.filter(n=>!i.includes(n)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&(pi(e.type)||Zt(e.key).includes(o[0])))}function Zt(e){if(!e)return[];e=Rn(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(o=>{if(t[o]===e)return o}).filter(o=>o)}v("model",(e,{modifiers:t,expression:o},{effect:r,cleanup:i})=>{let n=e;t.includes("parent")&&(n=x(e,p=>p!==e));let s=w(n,o),a;typeof o=="string"?a=w(n,`${o} = __placeholder`):typeof o=="function"&&typeof o()=="string"?a=w(n,`${o()} = __placeholder`):a=()=>{};let d=()=>{let p;return s(y=>p=y),Jt(p)?p.get():p},c=p=>{let y;s(S=>y=S),Jt(y)?y.set(p):a(()=>{},{scope:{__placeholder:p}})};typeof o=="string"&&e.type==="radio"&&b(()=>{e.hasAttribute("name")||e.setAttribute("name",o)});let l=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),m=l||u||g,R;if(L)R=()=>{};else if(m){let p=[],y=S=>c(Me(e,t,S,d()));if(l&&p.push(ee(e,"change",t,y)),u&&(p.push(ee(e,"blur",t,y)),e.form)){let S=e.form,X=()=>y({target:e});S._x_pendingModelUpdates||(S._x_pendingModelUpdates=[]),S._x_pendingModelUpdates.push(X),i(()=>{S._x_pendingModelUpdates&&S._x_pendingModelUpdates.splice(S._x_pendingModelUpdates.indexOf(X),1)})}g&&p.push(ee(e,"keydown",t,S=>{S.key==="Enter"&&y(S)})),R=()=>p.forEach(S=>S())}else{let p=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";R=ee(e,p,t,y=>{c(Me(e,t,y,d()))})}if(t.includes("fill")&&([void 0,null,""].includes(d())||Pe(e)&&Array.isArray(d())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(Me(e,t,{target:e},d())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=R,i(()=>e._x_removeModelListeners.default()),e.form){let p=ee(e.form,"reset",[],y=>{Mt(()=>e._x_model&&e._x_model.set(Me(e,t,{target:e},d())))});i(()=>p())}if(e._x_model={get(){return d()},set(p){c(p)},setWithModifiers:ui(t,c)},e._x_forceModelUpdate=p=>{p===void 0&&typeof o=="string"&&o.match(/\./)&&(p=""),b(()=>{Pe(e)?Array.isArray(p)?e.checked=p.some(y=>y==e.value):e.checked=!!p:Tt(e)?typeof p=="boolean"?e.checked=Ee(e.value)===p:e.checked=e.value==p:Ho(e,"value",p)})},e.tagName==="SELECT"){let p=new MutationObserver(()=>{e._x_forceModelUpdate(d())});p.observe(e,{childList:!0}),i(()=>p.disconnect())}r(()=>{let p=d();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(p)})});function Me(e,t,o,r){return b(()=>{if(o instanceof CustomEvent&&o.detail!==void 0)return o.detail!==null&&o.detail!==void 0?o.detail:o.target.value;if(Pe(e))if(Array.isArray(r)){let i=null;return t.includes("number")?i=Qe(o.target.value):t.includes("boolean")?i=Ee(o.target.value):i=o.target.value,o.target.checked?r.includes(i)?r:r.concat([i]):r.filter(n=>!Ln(n,i))}else return o.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(o.target.selectedOptions).map(i=>{let n=i.value||i.text;return Qe(n)}):t.includes("boolean")?Array.from(o.target.selectedOptions).map(i=>{let n=i.value||i.text;return Ee(n)}):Array.from(o.target.selectedOptions).map(i=>i.value||i.text);{let i;return Tt(e)?o.target.checked?i=o.target.value:i=r:i=o.target.value,t.includes("number")?Qe(i):t.includes("boolean")?Ee(i):t.includes("trim")?i.trim():i}}})}function Qe(e){let t=e?parseFloat(e):null;return On(t)?t:e}function Ln(e,t){return e==t}function On(e){return!Array.isArray(e)&&!isNaN(e)}function Jt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(L)return e.removeAttribute(G("cloak"));queueMicrotask(()=>b(()=>e.removeAttribute(G("cloak"))))});ko(()=>`[${G("init")}]`);v("init",O((e,{expression:t},{evaluate:o})=>typeof t=="string"?!!t.trim()&&o(t,{},!1):o(t,{},!1)));v("text",(e,{expression:t},{effect:o,evaluateLater:r})=>{let i=r(t);o(()=>{i(n=>{b(()=>{e.textContent=n})})})});v("html",(e,{expression:t},{effect:o,evaluateLater:r})=>{let i=r(t);o(()=>{i(n=>{b(()=>{Array.from(e.children).forEach(s=>J(s)),e.innerHTML=n??"",e._x_ignoreSelf=!0,E(e),delete e._x_ignoreSelf})})},{priority:"structural"})});At(_o(":",xo(G("bind:"))));var fi=(e,{value:t,modifiers:o,expression:r,original:i},{effect:n,cleanup:s})=>{if(!t){let d={};Br(d),w(e,r)(l=>{jo(e,l,i)},{scope:d});return}if(t==="key")return kn(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=w(e,r);n(()=>a(d=>{d===void 0&&typeof r=="string"&&r.match(/\./)&&(d=""),b(()=>Ho(e,t,d,o))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};fi.inline=(e,{value:t,modifiers:o,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})};v("bind",fi);function kn(e,t){e._x_keyExpression=t}Oo(()=>`[${G("data")}]`);var W=Symbol();v("data",(e,{expression:t},{cleanup:o})=>{if(Fn(e))return;let r=e[W];if((r==null?void 0:r.expression)===t)return;t=t===""?"{}":t;let i={};he(i,e);let n={};Ur(n,i);let s=B(e,t,{scope:n});(s===void 0||s===!0)&&(s={}),he(s,e);let a;if(r!=null&&r.reactiveData){a=r.reactiveData,Wn(a,s);let c={expression:t};e[W]=c,queueMicrotask(()=>{e[W]===c&&delete e[W]})}else a=ie(s);_t(a,o);let d=_e(e,a);O(()=>{a.init&&B(e,a.init)})(),o(()=>{a.destroy&&B(e,a.destroy),d();let c={reactiveData:a};e[W]=c,queueMicrotask(()=>{e[W]===c&&delete e[W]})})});function Wn(e,t){Object.keys(t).forEach(o=>{let r=Object.getOwnPropertyDescriptor(t,o),i=Object.getOwnPropertyDescriptor(e,o);r.get||r.set||i!=null&&i.get||i!=null&&i.set?(i&&delete e[o],i||(e[o]=void 0),r.get||r.set?Object.defineProperty(e,o,r):e[o]=t[o]):e[o]=t[o]}),Object.keys(e).filter(o=>!Object.prototype.hasOwnProperty.call(t,o)).forEach(o=>delete e[o])}xe((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Fn(e){return L?nt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:o},{effect:r})=>{let i=w(e,o);e._x_doHide||(e._x_doHide=()=>{b(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{b(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let n=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),d=ct(u=>u?s():n(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,n):u?a():n()}),c,l=!0;r(()=>i(u=>{!l&&u===c||(t.includes("immediate")&&(u?a():n()),d(u),c=u,l=!1)}))});v("for",O((e,{expression:t},{effect:o,cleanup:r})=>{let i=Bn(t),n=w(e,i.items),s=w(e,e._x_keyExpression||"index");e._x_lookup=new Map,o(()=>Hn(e,i,n,s),{priority:"structural"}),r(()=>{e._x_lookup.forEach(a=>b(()=>{J(a),a.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Nn(e){return t=>{Object.entries(t).forEach(([o,r])=>{e[o]=r})}}function Hn(e,t,o,r){o(i=>{Un(i)&&(i=Array.from({length:i},(c,l)=>l+1)),i==null&&(i=[]),i instanceof Set&&(i=Array.from(i)),i instanceof Map&&(i=Array.from(i));let n=e._x_lookup,s=new Map;e._x_lookup=s;let a=Vn(i),d=Object.entries(i).map(([c,l])=>{a||(c=parseInt(c));let u=zn(t,l,c,i),g;return r(m=>{typeof m=="object"&&M("x-for key cannot be an object, it must be a string or an integer",e),n.has(m)&&(s.set(m,n.get(m)),n.delete(m)),g=m},{scope:{index:c,...u}}),[g,u]});b(()=>{n.forEach(u=>{J(u),u.remove()});let c=new Set,l=e;d.forEach(([u,g])=>{if(s.has(u)){let p=s.get(u);p._x_refreshXForScope(g),l.nextElementSibling!==p&&(l.nextElementSibling&&p.replaceWith(l.nextElementSibling),l.after(p)),l=p,p._x_currentIfEl&&(p.nextElementSibling!==p._x_currentIfEl&&l.after(p._x_currentIfEl),l=p._x_currentIfEl);return}e.content.children.length>1&&M("x-for templates require a single root element, additional elements will be ignored.",e);let m=document.importNode(e.content,!0).firstElementChild,R=ie(g);_e(m,R,e),m._x_refreshXForScope=Nn(R),s.set(u,m),c.add(m),l.after(m),l=m}),c.forEach(u=>E(u)),l!==e?e._x_lastRenderedEl=l:delete e._x_lastRenderedEl})})}function Bn(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,o=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,i=e.match(r);if(!i)return;let n={};n.items=i[2].trim();let s=i[1].replace(o,"").trim(),a=s.match(t);return a?(n.item=s.replace(t,"").trim(),n.index=a[1].trim(),a[2]&&(n.collection=a[2].trim())):n.item=s,n}function zn(e,t,o,r){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=o),e.collection&&(i[e.collection]=r),i}function Un(e){return typeof e!="object"&&!isNaN(e)}function Vn(e){return typeof e=="object"&&!Array.isArray(e)}function hi(){}hi.inline=(e,{expression:t},{cleanup:o})=>{let r=He(e);r&&(r._x_refs||(r._x_refs={}),r._x_refs[t]=e,o(()=>delete r._x_refs[t]))};v("ref",hi);v("if",O((e,{expression:t},{effect:o,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&M("x-if can only be used on a <template> tag",e);let i=w(e,t),n=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return _e(a,{},e),b(()=>{e.after(a),E(a)}),e._x_currentIfEl=a,e._x_lastRenderedEl=a,e._x_undoIf=()=>{b(()=>{J(a),a.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};o(()=>i(a=>{a?n():s()}),{priority:"structural"}),r(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:o})=>{o(t).forEach(i=>An(e,i))});xe((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});At(_o("@",xo(G("on:"))));v("on",O((e,{value:t,modifiers:o,expression:r},{cleanup:i})=>{let n=r?w(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=ee(e,t,o,a=>{n(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));ze("Collapse","collapse","collapse");ze("Intersect","intersect","intersect");ze("Focus","trap","focus");ze("Mask","mask","mask");function ze(e,t,o){v(t,r=>M(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${o}`,r))}ne.setEvaluator(Vi);ne.setRawEvaluator(Ki);ne.setReactivityEngine({reactive:Wt,effect:(e,t={})=>{let o;return o=Yr(e,{scheduler:()=>{o&&(t.scheduler?t.scheduler(o):o())}}),o},release:en,raw:h});var Gn=ne,gi=Gn;/*! Bundled license information:

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
*/const Ft="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio",$n="https://assets.raggiesoft.com/raggiesoft-installer-studio/images/og-installer-studio.jpg",Nt=`${Ft}/raggiesoft-installer-studio-setup.exe`,Ht=`${Ft}/raggiesoft-installer-studio-offline-setup.exe`,jn=`${Ft}/screenshots`,we="https://github.com/raggiesoft/installer-studio",qn="/vpat/raggiesoft-installer-studio-vpat-2.5.html",Kn="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.",Qn=[{dialogId:"dlg-ide-features",fileName:"ide-features-tree.png",badge:"New in v0.4.2 • Setup Architecture",title:"1. Dedicated Features Hierarchy & Display Ordering",alt:"RaggieSoft Installer Studio Visual IDE showing the categorized 12-view left sidebar tree and the dedicated All Features hierarchy with Move Up, Move Down, DisallowAbsent lock, and Feature Description inspector.",summaryHtml:"Organize root features and nested sub-features inside an <code>All Features</code> <code>SysTreeView32</code> with 32-bit ARGB icons, reorder <code>SelectionTree</code> display priority via <strong>Move Up / Move Down</strong>, lock core features with <code>DisallowAbsent</code>, and edit descriptions losslessly.",detailHtml:"Clicking any node in the <code>All Features</code> tree populates its ID, display title, install level, parent feature, <code>DisallowAbsent</code> lock, and consumer description—updating the underlying <code>.rsip</code> AST while preserving 100% of comments and <code>@include</code> directives."},{dialogId:"dlg-ide-registry",fileName:"ide-registry-tree.png",badge:"New in v0.4.2 • Setup Architecture",title:"2. RegEdit-Style Registry Tree, Feature Filter & .REG Importer",alt:"RaggieSoft Installer Studio Registry view displaying HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE\\Software\\RaggieSoft\\Installer Studio, HKEY_USERS, and HKMU folders on the left alongside typed REG_SZ values on the right.",summaryHtml:"Navigate target registry keys just like Windows Registry Editor across <code>HKCR</code>, <code>HKCU</code>, <code>HKLM</code>, <code>HKU</code>, and <code>HKMU</code> nested folders, inspect typed <code>REG_SZ</code> / <code>REG_EXPAND_SZ</code> / <code>REG_DWORD</code> values on the right, filter keys by Feature, or import <code>.reg</code> scripts in one click.",detailHtml:"Every registry value automatically receives either a deterministic 64-bit MSI Component GUID or binds to an explicit <code>[Component.*]</code> KeyPath—supporting formatted Windows Installer tokens like <code>[INSTALLDIR]</code> and <code>[ProductVersion]</code>."},{dialogId:"dlg-ide-folders",fileName:"ide-destination-folders.png",badge:"Dual-Tree Explorer • ICE18 / ICE38 / ICE64",title:"3. Destination Computer & Folder Contents Dual Trees",alt:"RaggieSoft Installer Studio Files and Folders view showing the Destination Computer folder tree on the left and the filtered Staged Contents tree with Component and KeyPath badges on the right.",summaryHtml:"Map files and <code>CreateFolder</code> directories across 9 standard Windows Installer roots (<code>INSTALLDIR</code>, <code>ProgramData</code>, <code>AppData</code>, <code>StartMenu</code>, <code>Desktop</code>, <code>System32</code>, <code>Fonts</code>) with automatic UUIDv5 File KeyPaths and <code>ICE38</code> per-user registry KeyPaths.",detailHtml:"Selecting any root or subfolder on the left immediately filters the right-hand <code>Staged Contents</code> tree, showing each payload’s owning Feature, deterministic or explicit Component, and KeyPath rule."},{dialogId:"dlg-ide-runtimes",fileName:"ide-runtimes-msm.png",badge:"Application Information • Pre-MSI Broker",title:"4. Pre-MSI Application Runtimes & 64-Bit .MSM Tree",alt:"RaggieSoft Installer Studio Application Runtimes and Merge Modules tree grouping Pre-MSI Runtime Prerequisites and Windows Installer .MSM Merge Modules with 32-bit ARGB vector icons.",summaryHtml:"Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>) with custom reboot exit-code latching (<code>3010, 1641, 23</code>) alongside native 64-bit <code>.msm</code> Merge Modules.",detailHtml:"All prerequisites execute under one unified UAC elevation session before <code>msiexec</code> starts, while 64-bit <code>.msm</code> modules merge SQL rows and CAB streams directly in C++20 without 32-bit COM dependencies."},{dialogId:"dlg-ide-designer",fileName:"ide-wizard-designer.png",badge:"User Interface • Live GDI+ Canvas",title:"5. Live GDI+ C++ Wizard & 370×270 MSI.DLL Designers",alt:"RaggieSoft Installer Studio C++ Wizard Designer rendering a live GDI+ preview of the Windows Installer SelectionTree step next to palette and icon controls.",summaryHtml:"Preview customer-facing <code>SetupWizard.exe</code> layouts (<code>aerowizard</code>, <code>standard</code> Glass, and <code>autorun16x9</code>), brand colors, icons, and <code>SelectionTree</code> cards live in GDI+ alongside a dedicated <code>370&times;270</code> DLU <code>MSI.DLL</code> SQL dialog designer.",detailHtml:"Every compiled package pairs modern external C++20 wizard ergonomics with genuine relational Windows Installer <code>Dialog</code> and <code>Control</code> SQL tables inside <code>Product.msi</code>."}],Zn=[{dialogId:"dlg-wiz-dark",fileName:"setupwizard-setup-type.png",badge:"SetupWizard.exe • Windows 11 Dark Mode",title:"6. Accessible Option Cards & Custom-Subclassed Dark Buttons",alt:"SetupWizard.exe running in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button.",summaryHtml:"Genuine Win32 <code>BS_AUTORADIOBUTTON</code> option cards (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) and custom-subclassed <code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, and <code>Cancel</code> buttons expose full UI Automation roles and keyboard mnemonics.",detailHtml:"Screen readers (Narrator, NVDA, and JAWS) announce every option card’s title, recommendation, description, and <code>Alt+Key</code> accelerator cleanly—with zero jarring white legacy buttons in Dark Mode."},{dialogId:"dlg-wiz-light",fileName:"setupwizard-setup-type-light.png",badge:"Live Broadcast • WM_SETTINGCHANGE(ImmersiveColorSet)",title:"7. Sub-16ms Live OS Dark ↔ Light Palette Hot-Swap",alt:"The exact same open SetupWizard.exe window after receiving WM_SETTINGCHANGE ImmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting.",summaryHtml:"Toggle Windows 11 (or automatic sunset/sunrise utilities like Auto Dark Mode) between Dark Mode, Light Mode, or Contrast Themes mid-install and the open wizard flips its titlebar, cards, and buttons live in under 16 milliseconds.",detailHtml:"No process restart required: <code>IsLiveThemeBroadcast</code> refreshes DWM immersive titlebars, GDI brushes, vector glyphs, checkboxes, and push buttons on the fly."},{dialogId:"dlg-wiz-tree",fileName:"setupwizard-selection-tree.png",badge:"SetupWizard.exe • Custom Setup & Modify",title:"8. Authentic 32-Bit ARGB Windows Installer SelectionTree",alt:"SetupWizard.exe Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB split-dropdown state icons and live disk space cost card.",summaryHtml:"Reads <code>Feature</code>, <code>FeatureComponents</code>, and <code>File</code> SQL tables directly from <code>Product.msi</code> in under 2ms—rendering crisp 32-bit ARGB split-dropdown icons, <code>DisallowAbsent</code> locks, and live byte costing.",detailHtml:"User choices translate directly into canonical <code>ADDLOCAL</code>, <code>REMOVE</code>, and <code>ADVERTISE</code> properties passed to <code>MsiInstallProductW</code> during fresh installs and Maintenance Modify."}],Jn=[{dialogId:"dlg-help-viewer",fileName:"helpviewer-contents.png",badge:"RaggieSoftHelp.exe • Named Pipe F1 IPC",title:"9. Zero-Dependency Native C++20 Offline Help Viewer",alt:"RaggieSoftHelp.exe v0.4.3 native C++20 offline Help Viewer showing the 32-bit ARGB Contents tree on the left and formatted MSI SelectionTree documentation on the right.",summaryHtml:"Press <code>F1</code> inside any IDE view to open searchable offline HTML5 chapters in under 5ms via Named Pipe IPC—rendered natively through <code>System32\\Msftedit.dll</code> with zero <code>.NET</code> or <code>WebView2</code> dependencies.",detailHtml:'The exact same <code>help/raggiesoft.installer-studio/</code> HTML5 topics ship inside the installer and power the web documentation under <a href="/docs">/docs</a>.'},{dialogId:"dlg-msiprism",fileName:"msiprism-sql-inspector.png",badge:"msiprism.exe • Categorized SQL Schema Tree",title:"10. Native 64-Bit Dark Mode MSI, MSM, MST & MSP SQL Inspector",alt:"RaggieSoft MSI Prism v0.4.3 displaying a categorized 5-folder SQL schema tree on the left with 32-bit ARGB table icons and relational Feature rows on the right.",summaryHtml:"Open any <code>.msi</code>, <code>.msm</code>, or <code>.msp</code> database into a categorized 5-group <code>SysTreeView32</code> schema tree, inspect relational rows in Dark or Light Mode, audit <code>ICE80</code> flags, and generate <code>.mst</code> or <code>.msp</code> deltas.",detailHtml:"Groups all 44+ Windows Installer SQL tables into <em>Metadata &amp; Streams</em>, <em>Core Packaging Tables</em>, <em>Registry, Shortcuts &amp; Classes</em>, <em>Dialogs &amp; UI Controls</em>, and <em>Sequences, Locators &amp; Actions</em>."}];function Ze(e){const t=`${jn}/${e.fileName}`;return`
    <figure class="shot-card">
      <button
        type="button"
        class="shot-preview-btn"
        data-open-dialog="${e.dialogId}"
        aria-haspopup="dialog"
        aria-label="Open full-size screenshot: ${e.title}"
      >
        <img src="${t}" alt="${e.alt}" loading="lazy" />
        <span class="shot-zoom-pill">Click for Full-Size 1:1 View</span>
      </button>
      <figcaption>
        <span class="eyebrow" style="margin-bottom: 0;">${e.badge}</span>
        <strong>${e.title}</strong>
        <span>${e.summaryHtml}</span>
      </figcaption>
    </figure>

    <dialog id="${e.dialogId}" class="shot-lightbox" aria-labelledby="${e.dialogId}-title">
      <div class="shot-lightbox-panel">
        <div class="shot-lightbox-header">
          <div>
            <span class="eyebrow" style="color: #fde68a; margin-bottom: 0.15rem;">${e.badge}</span>
            <h3 id="${e.dialogId}-title" class="shot-lightbox-title">${e.title}</h3>
          </div>
          <button type="button" class="shot-lightbox-close" data-close-dialog aria-label="Close full-size screenshot dialog">
            Close (Esc)
          </button>
        </div>
        <div class="shot-lightbox-stage">
          <img src="${t}" alt="${e.alt}" loading="lazy" />
        </div>
        <div class="shot-lightbox-caption">
          ${e.detailHtml}
        </div>
      </div>
    </dialog>
  `}function Xn(){return`
    <section class="hero" aria-labelledby="tour-title">
      <span class="eyebrow">Real Native Win32 C++20 Captures • v0.4.3 on Windows 11</span>
      <h1 id="tour-title">Visual Feature Tour &amp; Full-Size Screenshots</h1>
      <p class="lead">
        Every window on this page is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables
        (<code>InstallerStudio.exe</code>, <code>SetupWizard.exe</code>, <code>RaggieSoftHelp.exe</code>, and
        <code>msiprism.exe</code>) using stock Windows 11 system libraries—featuring 32-bit ARGB vector
        <code>SysTreeView32</code> hierarchies, custom-subclassed Dark Mode controls, and live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
        <strong>Click or press Enter on any screenshot to inspect it at full 1:1 native size.</strong>
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Nt}">Download Installer Studio v0.4.3 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Ht}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/roadmap">Explore v1.0 Engineering Roadmap</a>
        <a class="btn btn-outline" href="/docs">Read Distributed F1 Manual</a>
      </div>
    </section>

    <section aria-labelledby="tour-ide-heading">
      <span class="eyebrow">Part 1 • 12-View Tree-First Visual IDE (InstallerStudio.exe)</span>
      <h2 id="tour-ide-heading" style="margin-top: 0.25rem;">Hierarchical Project Authoring Without Legacy ListView Clutter</h2>
      <p>
        Instead of cramming features, folders, registry keys, runtimes, and shortcuts into flat spreadsheets,
        <code>InstallerStudio.exe</code> organizes every subsystem into keyboard-accessible <code>SysTreeView32</code>
        hierarchies with 20 anti-aliased 32-bit ARGB icons—synchronized 1:1 with a comment-preserving plain-text
        <code>.rsip</code> AST.
      </p>
      <div class="shot-grid">
        ${Qn.map(Ze).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="tour-wiz-heading">
      <span class="eyebrow">Part 2 • Accessible Customer Runtime (SetupWizard.exe)</span>
      <h2 id="tour-wiz-heading" style="margin-top: 0.25rem;">WCAG 2.2 AA Setup Cards, Live OS Theme Switching &amp; MSI SelectionTree</h2>
      <p>
        Customer-facing installers respect the user's Windows 11 Dark Mode, Light Mode, and Contrast Theme settings from
        the very first pixel—and flip palettes live in under 16ms if sunset hits mid-installation.
      </p>
      <div class="shot-grid">
        ${Zn.map(Ze).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="tour-tools-heading">
      <span class="eyebrow">Part 3 • Built-In Companion Tools (RaggieSoftHelp.exe &amp; msiprism.exe)</span>
      <h2 id="tour-tools-heading" style="margin-top: 0.25rem;">Instant F1 Offline Documentation &amp; 64-Bit SQL Database Inspection</h2>
      <div class="shot-grid">
        ${Jn.map(Ze).join(`
`)}
      </div>
    </section>
  `}function Yn(){return`
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">28 Years in the Making (1998–2026) • Why I Built This</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">From Visual Basic 6.0 in 1998 to Zero-Bloat Win32 C++20</h2>
      <p>
        Ever since I started learning Visual Basic 6.0 back in 1998, I spent 28 years searching for the right Windows
        installation tool—shipping software across more than a dozen packaging engines spanning every era of Windows
        deployment: the limited-edition setup wizard bundled in the Visual Studio 6.0 box, classic procedural script
        installers, 3D-beveled commercial suites, interactive CD-ROM multimedia autorun builders (yes, at one point I even
        tried bending an autorun menu builder into an application installer!), lightweight open-source script packagers, and
        heavyweight enterprise MSI and XML toolchains.
      </p>
      <p>
        Every Windows installer ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code>. Yet every tool I
        tried forced a painful tradeoff between multi-gigabyte IDE bloat, 32-bit legacy debt, opaque binary project files,
        steep XML boilerplate, or broken Windows 11 Dark Mode and screen-reader accessibility.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> takes everything those eras got right—plain-text diffable manifests,
        authentic relational <code>.msi</code> compliance, hierarchical tree editors, single-file <code>LZMS</code> solid
        compression, and classic-to-modern wizard ergonomics—and rebuilds it from first principles as original, MIT-licensed
        native Win32 C++20 software for <code>x64</code> and <code>ARM64</code>.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.4.3</code>)</h3>
            <ul class="feature-list">
              <li><strong>Single-Download CPU-Aware Web &amp; Offline Universal Installers</strong>: Users never have to guess whether they own an <code>AMD64</code> (<code>x64</code>) or <code>ARM64</code> PC—ship one compact <strong>Smart Web Stub</strong> (<code>IsWow64Process2</code> + <code>WinHTTP</code> + SHA-256) or one <strong>Combined Offline Universal EXE</strong> bundling both architectures</li>
              <li><strong>12-View Tree-First Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong>: Categorized sidebar, dedicated <strong>Features</strong> tree (<code>Move Up</code>/<code>Down</code>), <strong><code>RegEdit</code>-style Registry</strong> tree (<code>.REG</code> import + Feature filter), Dual Folder trees, and 5 guided <strong>AeroWizards</strong>—with <strong><code>Community == 100% Premier</code> parity</strong></li>
              <li><strong>100% Dark-Mode-Complete UI + Live OS Theme Hot-Swapping</strong>: Custom-subclassed push buttons, checkboxes, 32-bit ARGB vector tree icons, and RichEdit panels that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code></li>
              <li><strong>Native C++20 Help System, MSI <code>SelectionTree</code>, Pre-MSI Runtimes &amp; <code>msiprism.exe</code></strong>: Zero-dependency <code>RaggieSoftHelp.exe</code>, 32-bit ARGB feature tree, unlimited <code>[Prerequisite.*]</code> runtimes, 64-bit <code>.MSM</code> merging, and <code>--emit-ai-spec</code> / <code>--emit-vpat</code></li>
            </ul>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/screenshots">Take the Visual Screenshot Tour &rarr;</a>
            <a class="btn btn-outline" href="/changelog">v0.4.3 Release Notes</a>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Focused Path to <code>v1.0.0 GA</code> (Dogfood North Star)</h3>
            <ul class="feature-list">
              <li><strong><code>v0.5.0</code> — 8 Wizard Styles &amp; WCAG-Guarded Branding</strong>: <code>Wizard95</code>, <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code> (with billboards &amp; docked 3D gauge), and <code>Autorun16x9</code> + live WCAG 2.2 AA contrast enforcer</li>
              <li><strong><code>v0.6.0</code> — Granular <code>.rswpak</code> On-Demand Feature Packs + <code>.NET 11</code> + <code>Engine = native</code></strong>: Stream optional multi-gigabyte feature packs on demand, curated <code>.NET 11</code> presets, and zero-<code>msi.dll</code> transactional extraction</li>
              <li><strong><code>v0.7.0</code> &amp; <code>v0.8.0</code> — From-Scratch Dialog Builders, <code>RsDialog</code> Scripting &amp; VB6 <code>.vbp</code> / <code>.slnx</code> Importers</strong>: Blank-canvas C++ &amp; raw <code>MSI.DLL</code> dialog designers plus Reg-Free COM VB6 <code>.vbp</code> importing for classic utilities like <em>StoreTrainer</em></li>
              <li><strong><code>v0.9.0</code> &amp; <code>v1.0.0 GA</code> — Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Full Production Cutover</strong>: Azure Artifact Signing, guided <code>.MSP</code> servicing, and packaging 100% of RaggieSoft's own software</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/roadmap">Read Full v1.0 Engineering Roadmap</a>
        </article>
      </div>
    </section>
  `}function es(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.4.3) • Universal x64 &amp; ARM64</span>
          <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
          <p class="lead">
            An original, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
            Design projects visually inside a <strong>12-View Tree-First IDE</strong>—with dedicated <strong>Features</strong> and
            <strong><code>RegEdit</code>-style Registry</strong> trees, 5 guided <strong>AeroWizards</strong>, Dual C++ &amp;
            <code>MSI.DLL</code> Dialog Designers, and a built-in C++ <code>F1</code> Help Viewer—and ship <strong>one universal
            <code>Setup.exe</code></strong> that automatically detects your user's processor.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${Nt}">Download Installer Studio v0.4.3 (Auto-Detects CPU)</a>
            <a class="btn btn-outline" href="${Ht}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
            <a class="btn btn-outline" href="/screenshots">Visual Tour &amp; Screenshots</a>
            <a class="btn btn-outline" href="/roadmap">Public Roadmap</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${$n}"
            width="1200"
            height="630"
            alt="Collector's Edition boxed software render of RaggieSoft Installer Studio — Install Without Limits (Native C++20 for x64 and ARM64)."
          />
        </figure>
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

    ${Yn()}

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
              <th scope="row">Tree-First Visual IDE</th>
              <td><strong>12 Views + 20 32-Bit ARGB Vector Tree Icons</strong></td>
              <td>Dedicated <strong>Features</strong>, <strong><code>RegEdit</code> Registry</strong>, <strong>Dual Folder</strong>, <strong>Runtimes</strong>, and <strong>Shortcuts</strong> trees with <code>DarkMode_Explorer</code> chevrons.</td>
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
            <h3><code>InstallerStudio.exe</code> — 12-View Tree-First IDE</h3>
            <p>
              Features a 4-category sidebar tree, dedicated <strong>Features</strong> and <strong><code>RegEdit</code> Registry</strong>
              trees (with <code>.REG</code> import), Dual Folder &amp; Contents trees, 5 guided Win32 <strong>AeroWizards</strong>,
              Dual Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/screenshots">Explore IDE Screenshots</a>
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
              Inspect relational SQL tables grouped across 5 schema categories in 64-bit Dark Mode with <strong>MSI Prism</strong>,
              and browse searchable offline HTML5 documentation in under 5ms via Named Pipe <code>F1</code> IPC inside
              <strong>RaggieSoft Help Viewer</strong>.
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Browse Distributed Manual</a>
        </article>
      </div>
    </section>
  `}function ts(){return`
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.4.3 Shipped &rarr; v1.0.0 GA Dogfood Cutover</span>
      <h1 id="roadmap-page-title">Public Engineering Roadmap</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is built in the open as original, zero-dependency native Win32 C++20
        software for Windows 11 <code>x64</code> and <code>ARM64</code>. Our <strong><code>v1.0.0 GA</code> North Star</strong>
        is clear and practical: reaching the exact point where <strong>100% of RaggieSoft's own Windows applications, classic
        VB6 utilities (<em>StoreTrainer</em>), interactive novels, and supporter audio archives</strong> are packaged, signed,
        updated, and distributed exclusively with Installer Studio—while permanently keeping
        <strong>Community Edition at 100% technical feature parity with Premier Edition</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${we}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/ROADMAP.md">Open Raw /ROADMAP.md</a>
        <a class="btn btn-outline" href="/screenshots">Visual Tour (v0.4.3)</a>
        <a class="btn btn-outline" href="/changelog">Shipped Changelog</a>
      </div>
    </section>

    <section aria-labelledby="roadmap-matrix-heading">
      <span class="eyebrow">At-a-Glance Schedule</span>
      <h2 id="roadmap-matrix-heading">Milestone Overview Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>RaggieSoft Installer Studio Milestones from Technical Preview to v1.0.0 GA and Post-1.0</caption>
          <thead>
            <tr>
              <th scope="col">Milestone</th>
              <th scope="col">Primary Focus</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>v0.1.0</code> – <code>v0.4.3</code></th>
              <td>Core C++20 compiler, CPU-aware Smart Web Stub &amp; Combined Offline Universal EXE (<code>x64 + ARM64</code>), 12-View Tree-First IDE, MSI <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, native <code>F1</code> Help Viewer, &amp; live Dark Mode</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.5.0</code></th>
              <td>8 Wizard Styles (<code>Wizard95</code>, <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code> &amp; <code>Autorun16x9</code>), complete Publisher Branding (<code>.rswskin</code> + billboards), &amp; live WCAG 2.2 AA Contrast Enforcer</td>
              <td><span class="status-pill status-next">Next Up</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.6.0</code></th>
              <td>Granular On-Demand Feature Packs (<code>.rswpak</code>), curated <code>.NET 11</code> runtime presets, &amp; zero-<code>msi.dll</code> <code>Engine = native</code></td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.7.0</code></th>
              <td>From-Scratch Dual Dialog Builders (C++ <code>SetupWizard.exe</code> + Raw <code>370&times;270</code> <code>MSI.DLL</code> SQL canvas) &amp; <code>RsDialog</code> (<code>Rs*()</code>) procedural dialog scripting</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.8.0</code></th>
              <td>Solution &amp; Legacy Project Importers (Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM for <em>StoreTrainer</em>, &amp; <code>.msi</code> decompiler) + Windows Restart Manager (<code>Rstrtmgr.dll</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.9.0</code></th>
              <td>First-Class Authenticode &amp; Azure Artifact Signing Studio, white-label <code>RsUpdate.exe</code> Auto-Updater, &amp; guided Microsoft-compliant <code>.MSP</code> servicing (<code>--plan-update</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.0.0 GA</code></th>
              <td>Turnkey GitHub Actions / Azure DevOps tasks, <code>--emit-winget</code>, &amp; 100% RaggieSoft production cutover across all apps, interactive books, and supporter audio archives</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.1+</code> (Post-1.0)</th>
              <td>Disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture, Visual Studio <code>.vsix</code>, Windows Services/Firewall/Config Patchers, in-process <code>.MSIXBUNDLE</code>, 20-lang <code>I18N</code> + RTL, &amp; <code>--emit-sbom</code></td>
              <td><span class="status-pill">Post-1.0</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div x-data="{ phaseFilter: 'all' }">
      <section aria-label="Filter Roadmap Milestones" style="margin-bottom: 1.5rem;">
        <div class="btn-row" role="group" aria-label="Show all milestones or focus on one release">
          <button type="button" class="btn" :class="phaseFilter === 'all' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'all'">All Milestones</button>
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.4.3)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v05' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v05'">v0.5 (Wizards &amp; Branding)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v06' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v06'">v0.6 (.rswpak &amp; .NET 11)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v07' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v07'">v0.7 (Dialog Builders)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v08' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v08'">v0.8 (.slnx &amp; VB6 .vbp)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v09' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v09'">v0.9 (Signing &amp; Updater)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v10' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v10'">v1.0 GA &amp; Post-1.0</button>
        </div>
      </section>

      <!-- Shipped Foundation -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.4.3</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>CPU-Aware Smart Web Stub &amp; Combined Offline Universal EXE (<code>v0.4.3</code>)</strong>: Eliminates separate <code>x64</code> vs. <code>ARM64</code> download confusion via a compact 64-bit universal outer launcher that pierces Windows 11 Prism emulation through <code>IsWow64Process2</code> to download or unpack the genuine native silicon installer with SHA-256 verification.</li>
          <li><strong>12-View Tree-First Win32 C++20 Visual IDE (<code>v0.4.2</code>)</strong>: Categorized sidebar tree, dedicated <strong>Features</strong> hierarchy with <code>Move Up</code> / <code>Move Down</code> ordering, <strong><code>RegEdit</code>-style Registry</strong> tree with <code>.REG</code> file importing and Feature filtering, Dual Destination Folder &amp; Contents trees, and a 5-category SQL schema tree in <code>msiprism.exe</code>.</li>
          <li><strong>Complete Win32 Dark Mode &amp; Live OS Palette Hot-Swapping (<code>v0.4.1</code>)</strong>: Custom-subclassed push buttons (<code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, <code>Cancel</code>), checkboxes, 32-bit ARGB vector tree icons, and ComboBoxes that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> in under 16ms.</li>
          <li><strong>Native C++20 <code>F1</code> Help Viewer, Pre-MSI Runtimes, 64-Bit <code>.MSM</code> &amp; <code>SelectionTree</code> (<code>v0.3.0</code>–<code>v0.4.0</code>)</strong>: Zero-dependency <code>RaggieSoftHelp.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching, pure 64-bit <code>.msm</code> SQL + CAB merging, and Windows <code>LZMS</code> solid compression.</li>
        </ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="/screenshots">Explore Live v0.4.3 Screenshots</a>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1.0 &rarr; v0.4.3 Changelog</a>
        </div>
      </section>

      <!-- v0.5.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v05'" aria-labelledby="phase-v05-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Target v0.5.0 • Next Up</span>
          <h2 id="phase-v05-heading" style="margin-top: 0.5rem;">8 Wizard Layout Variations, White-Label Branding Studio &amp; Live WCAG 2.2 AA Contrast Enforcer</h2>
          <ul class="feature-list">
            <li><strong>Eight First-Party Wizard Styles (<code>[UI] WizardLayout</code>)</strong>:
              <ul class="feature-list" style="margin-top: 0.35rem; margin-bottom: 0.35rem;">
                <li><strong><code>Wizard95</code></strong>: Classic 1995 desktop 3D beveled dialog sheet (<code>#C0C0C0</code> surface, etched dividers, <code>164&times;314</code> left bitmap rail, and beveled push buttons).</li>
                <li><strong><code>Wizard97</code></strong>: Classic enterprise header-banner layout with right-side emblem and bottom-right <code>&lt; Back</code> / <code>Next &gt;</code> / <code>Cancel</code> footer—modernized for Dark &amp; Light Mode.</li>
                <li><strong><code>AeroWizard</code></strong>: Command-bar layout featuring a vector GDI+ <code>30&times;30</code> circular <code>&larr;</code> Back glyph in the top-left command area.</li>
                <li><strong><code>FluentMica</code></strong>: Modern Windows 11 native backdrop via <code>DwmSetWindowAttribute(DWMWA_SYSTEMBACKDROP_TYPE, DWMSBT_MAINWINDOW / DWMSBT_TABBEDWINDOW)</code> with a unified borderless surface, left-hand vertical step-progress rail, and rounded <code>8px</code> cards.</li>
                <li><strong><code>OneClickSplash</code></strong>: Compact centered <code>~480&times;280</code> friction-free card with one primary <strong>Install</strong> button and a <em>"Customize installation..."</em> disclosure toggle.</li>
                <li><strong><code>PassiveToast</code></strong>: Clean non-interactive <code>/passive</code> &amp; <code>/qb</code> progress banner (centered or docked near the system tray) with UI Automation live-region percentage announcements.</li>
                <li><strong><code>FullScreenBlue</code></strong>: Nostalgic 1990s cobalt-blue (<code>#000080 &rarr; #000000</code>) full-screen <code>SETUP.EXE</code> wash with a drop-shadowed serif title, floating 3D beveled dialogs, <strong>optional rotating installation billboards</strong>, and a floating <strong>3D Beveled Progress Gauge</strong> (centered or docked beneath billboards—ideal for retro utilities like <em>StoreTrainer</em>) while keeping modern DPI scaling and screen-reader accessibility.</li>
                <li><strong><code>Autorun16x9</code></strong>: Widescreen <code>16:9</code> Collector's Edition &amp; digital media launcher menu.</li>
              </ul>
            </li>
            <li><strong>Non-Negotiable Windows Contrast Theme Auto-Override (<code>SPI_GETHIGHCONTRAST</code>)</strong>: Every layout automatically bypasses custom gradients, bitmaps, and Mica backdrops whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is active to paint strictly with semantic OS colors and <code>2px</code> solid borders.</li>
            <li><strong>Complete Publisher Branding &amp; Live WCAG 2.2 AA Contrast Enforcer (<code>[Branding]</code> &amp; <code>.rswskin</code>)</strong>: Customize Light &amp; Dark Mode brand colors, banners, sidebars, and billboards—backed by live W3C luminance ratios, a one-click <em>"Auto-Adjust Nearest Accessible Shade"</em> button in the IDE, and automated CI validation in <code>instbuild.exe --validate</code>.</li>
          </ul>
        </div>
      </section>

      <!-- v0.6.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v06'" aria-labelledby="phase-v06-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.6.0</span>
          <h2 id="phase-v06-heading" style="margin-top: 0.5rem;">Granular On-Demand Feature Packs (<code>.rswpak</code>), <code>.NET 11</code> Presets &amp; Native Direct Engine</h2>
          <ul class="feature-list">
            <li><strong>Granular On-Demand Feature Packs (<code>.rswpak</code>)</strong>: Building on <code>v0.4.3</code>'s CPU-aware Smart Web Stub and Combined Offline Universal EXE, split optional multi-gigabyte features (high-DPI assets, offline docs, or language packs) into external LZMS-compressed <code>.rswpak</code> blocks fetched on demand via <code>WinHTTP</code> with SHA-256 + Authenticode verification when selected in <code>SelectionTree</code>.</li>
            <li><strong>First-Class <code>.NET 11</code> (<code>net11.0</code> / <code>net11.0-windows</code>) Runtime Presets</strong>: Curated <code>DotNet11Desktop</code>, <code>DotNet11AspNet</code>, and <code>DotNet11Runtime</code> / <code>DotNet10Runtime</code> presets alongside <code>.NET 10.0 LTS</code>.</li>
            <li><strong>Native Direct Engine (<code>Engine = native | msi</code>)</strong>: Optional zero-<code>msi.dll</code> transactional extraction backend with rollback journaling and signed <code>Uninstall.exe</code>—installing multi-hundred-file interactive book and supporter audio packs in milliseconds.</li>
          </ul>
        </div>
      </section>

      <!-- v0.7.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v07'" aria-labelledby="phase-v07-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.7.0</span>
          <h2 id="phase-v07-heading" style="margin-top: 0.5rem;">From-Scratch Dual Dialog Builders (C++ &amp; Raw <code>MSI.DLL</code>) &amp; <code>RsDialog</code> Scripting</h2>
          <ul class="feature-list">
            <li><strong>From-Scratch C++ &amp; Raw <code>370&times;270</code> <code>MSI.DLL</code> Dialog Designers</strong>: Blank-canvas WYSIWYG editors for building custom wizard pages in both <code>SetupWizard.exe</code> (<code>[Dialog.*]</code>) and standalone <code>msiexec</code> SQL tables (<code>[MsiDialog.*]</code> / <code>[MsiControl.*]</code>).</li>
            <li><strong><code>RsDialog</code> Standard Library + <code>.rssc</code> Event Hooks</strong>: Lifecycle hooks (<code>OnBegin</code>, <code>OnBeforeInstall</code>, <code>OnAfterInstall</code>) paired with procedural <code>RsWelcome()</code>, <code>RsLicense()</code>, <code>RsSetupType()</code>, <code>RsFeatureTree()</code>, <code>RsAskDestPath()</code>, <code>RsAskText()</code>, <code>RsAskOptions()</code>, <code>RsStartCopy()</code>, and <code>RsFinish()</code> dialogs.</li>
          </ul>
        </div>
      </section>

      <!-- v0.8.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v08'" aria-labelledby="phase-v08-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.8.0</span>
          <h2 id="phase-v08-heading" style="margin-top: 0.5rem;">Solution &amp; Legacy Project Importers (<code>.slnx</code>, VB6 <code>.vbp</code> Reg-Free COM &amp; <code>.msi</code>) + Restart Manager</h2>
          <ul class="feature-list">
            <li><strong>Visual Studio <code>.slnx</code> / <code>.csproj</code> / <code>.vcxproj</code> Importer</strong>: One-click detection of <code>.NET 11</code> / <code>.NET 10 LTS</code> / <code>VC++</code> / <code>WebView2</code> prerequisites, <code>x64</code> + <code>ARM64</code> publish folders, icons, and PE versions.</li>
            <li><strong>Visual Basic 6.0 (<code>.vbp</code>) Importer with Windows 11 WRP &amp; Reg-Free COM Modes</strong>: Built for classic apps like <em>StoreTrainer</em>—parses <code>ExeName32</code>, <code>Reference=</code>, and <code>Object=*.ocx</code> lines, honors Windows 11 Resource Protection on inbox <code>SysWOW64</code> runtimes (<code>msvbvm60.dll</code>), and offers either local SP6 <code>.MSM</code> consumption or zero-elevation <strong>Reg-Free COM</strong> SxS manifests.</li>
            <li><strong><code>.msi</code> Decompiler &amp; Windows Restart Manager (<code>Rstrtmgr.dll</code>)</strong>: Import existing <code>.msi</code> databases into <code>.rsip</code> projects and gracefully close running app processes during upgrades without OS reboots.</li>
          </ul>
        </div>
      </section>

      <!-- v0.9.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v09'" aria-labelledby="phase-v09-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.9.0</span>
          <h2 id="phase-v09-heading" style="margin-top: 0.5rem;">Authenticode &amp; Azure Artifact Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Guided <code>.MSP</code> Servicing</h2>
          <ul class="feature-list">
            <li><strong>Interactive Authenticode &amp; Azure Artifact Signing Studio</strong>: Windows Certificate Store picker (<code>CryptUIDlgSelectCertificateFromStore</code>), Azure Artifact Signing (<code>dlib</code> + <code>MetadataJson</code>) tester, and one-click Dual-Layer <code>WinVerifyTrust</code> verification on both inner <code>Product.msi</code> and outer <code>Setup.exe</code>.</li>
            <li><strong>Royalty-Free White-Label Auto-Updater (<code>RsUpdate.exe</code>) &amp; Guided <code>.MSP</code> Servicing (<code>--plan-update</code>)</strong>: Publisher-branded HTTPS updater unlocked across all editions plus automated Microsoft Component servicing lint rules for binary-delta <code>.msp</code> patches and Major Upgrades.</li>
          </ul>
        </div>
      </section>

      <!-- v1.0.0 GA & Post-1.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v10'" aria-labelledby="phase-v10-heading" class="card">
        <div>
          <span class="status-pill">Target v1.0.0 GA &amp; v1.1+</span>
          <h2 id="phase-v10-heading" style="margin-top: 0.5rem;"><code>v1.0.0 GA</code> Production Dogfood Cutover &amp; Post-1.0 Enterprise Expansion</h2>
          <ul class="feature-list">
            <li><strong><code>v1.0.0 GA</code> — Turnkey CI/CD, <code>--emit-winget</code> &amp; 100% RaggieSoft Cutover</strong>: First-party GitHub Actions / Azure DevOps tasks, <code>winget-pkgs</code> YAML export, and complete signed install, upgrade, repair, silent (<code>/s</code>), and uninstall validation across every RaggieSoft desktop app, interactive book, and supporter audio archive on clean Windows 11 <code>x64</code> and <code>ARM64</code> PCs.</li>
            <li><strong><code>v1.1+</code> Post-1.0 Expansion</strong>: One-click disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture ("Repackager"), Visual Studio <code>.vsix</code> extension, declarative Windows Services / Firewall / JSON-XML-INI Config Patchers, in-process <code>.MSIXBUNDLE</code> (<code>AppxPackaging.dll</code>), 20+ language <code>I18N</code> + RTL mirroring, and SPDX / CycloneDX <code>--emit-sbom</code> reports.</li>
          </ul>
        </div>
      </section>
    </div>
  `}function os(){return`
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • Universal x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Nt}">Download Latest v0.4.3 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Ht}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/screenshots">Inspect v0.4.3 Screenshots</a>
        <a class="btn btn-outline" href="${we}">View Commits on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="v043-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v043-heading" style="margin-top: 0.25rem;">v0.4.3 — CPU-Aware Smart Web Stub &amp; Combined Offline Universal Single-EXE (x64 + ARM64)</h2>
      <ul class="feature-list">
        <li><strong>Smart CPU-Aware Web Stub (<code>&lt;Product&gt;-setup.exe</code>)</strong>: Everyday users never have to guess whether their Windows 11 PC has an <code>AMD64</code> (<code>x64</code>) or <code>ARM64</code> processor. Compiled as a zero-dependency static <code>/MT</code> 64-bit <code>x64</code> launcher that starts natively on Intel/AMD PCs and via Prism on Windows 11 ARM64 PCs, it calls <code>IsWow64Process2</code> in under 0.1ms to detect true native silicon, streams <strong>only</strong> the matching native installer over HTTPS (<code>WinHTTP</code>) inside an accessible Dark/Light/High-Contrast progress dialog, verifies its build-stamped <strong>SHA-256</strong> digest (<code>bcrypt.dll</code>), and launches the genuine native installer.</li>
        <li><strong>All-in-One Offline Universal EXE (<code>&lt;Product&gt;-offline-setup.exe</code>)</strong>: Bundles <strong>both</strong> <code>LZMS</code>-compressed <code>x64</code> and <code>ARM64</code> native installers inside a single self-contained portable executable for air-gapped workstations, USB drives, and archival preservation—automatically extracting and executing the host's true native architecture while forwarding all CLI flags (<code>/s</code>, <code>/qn</code>, <code>--extract-msi</code>, <code>INSTALLDIR=...</code>).</li>
        <li><strong>Visual IDE, CLI &amp; Standing Screenshot Automation</strong>: Added <code>BuildUniversal</code> and <code>UniversalDownloadBaseUrl</code> controls to <code>InstallerStudio.exe</code>, <code>--universal</code> to <code>instbuild.exe</code>, strict <code>x64;1033</code> / <code>Arm64;1033</code> <code>PID_TEMPLATE</code> verification in <code>insttests.exe</code>, and <code>export-all-screenshots.ps1</code> so 100% of website screenshots are freshly captured on every release.</li>
      </ul>
    </section>

    <section aria-labelledby="v042-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v042-heading" style="margin-top: 0.25rem;">v0.4.2 — 12-View Tree-First Visual IDE, Features &amp; RegEdit Registry Trees, Categorized MSI Prism &amp; Inspector Fixes</h2>
        <ul class="feature-list">
          <li><strong>32-Bit ARGB Vector Tree Engine (<code>StudioTreeIcon</code> + <code>ApplyDarkTreeViewTheme</code>)</strong>: Replaced flat <code>LISTBOX</code> and <code>SysListView32</code> overuse across <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 20 anti-aliased premultiplied ARGB vector icons and Windows 11 <code>DarkMode_Explorer</code> / <code>Explorer</code> chevrons.</li>
          <li><strong>Categorized 12-View Sidebar &amp; New Dedicated <code>Features</code> View</strong>: Grouped IDE navigation under <em>Application Information</em>, <em>Setup Architecture</em>, <em>User Interface</em>, and <em>Deployment &amp; Source</em>, and added a dedicated <code>All Features</code> hierarchy view with <code>Move Up</code> / <code>Move Down</code> AST reordering, <code>+ New Feature</code>, <code>+ Sub-Feature</code>, <code>DisallowAbsent</code> core locks, and live <code>Feature Description</code> editing.</li>
          <li><strong>New <code>RegEdit</code>-Style <code>Registry</code> View + <code>.REG</code> File Importer</strong>: Added nested hive/subkey folder navigation across <code>HKEY_CLASSES_ROOT</code>, <code>HKEY_CURRENT_USER</code>, <code>HKEY_LOCAL_MACHINE</code>, <code>HKEY_USERS</code> (<code>HKU</code>), and <code>HKEY_USER_MACHINE_DEFAULT</code> (<code>HKMU</code>) paired with a typed right-hand values tree, per-Feature filtering, and UTF-8 / UTF-16LE <code>.reg</code> script importing.</li>
          <li><strong>Dual-Tree <code>Files &amp; Folders</code>, <code>Shortcuts</code> Tree, Live Component Inspector &amp; Categorized <code>msiprism.exe</code></strong>: Upgraded Destination Contents, Application Runtimes &amp; <code>.MSM</code>, File Associations, and Shortcuts (<code>Start Menu</code> &amp; <code>Desktop</code>) to hierarchical trees, wired live <code>TVN_SELCHANGEDW</code> Component inspection in <code>Components &amp; KeyPaths</code>, and organized <code>msiprism.exe</code> SQL tables into 5 logical schema categories.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v041-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v041-heading" style="margin-top: 0.25rem;">v0.4.1 — Dark-Mode Push Buttons &amp; Live OS Theme Hot-Swapping</h2>
        <ul class="feature-list">
          <li><strong>Dark-Mode-Aware Accessible Push Buttons (<code>AttachAccessiblePushButtonSubclass</code>)</strong>: Replaced stock <code>ComCtl32 v6</code> light-mode white push buttons across <code>SetupWizard.exe</code> (<code>&lt; Back</code>, <code>Next &gt;</code>, <code>Cancel</code>), <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 100% public-API <code>SetWindowSubclass</code> + GDI+ vector buttons while keeping native UI Automation <code>Button</code> roles and <code>Alt+Key</code> mnemonics intact.</li>
          <li><strong>Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Palette Hot-Swapping</strong>: All four Win32 GUI binaries listen for live Windows 11 Light &harr; Dark Mode and Contrast Theme broadcasts, flipping DWM frames, cards, buttons, checkboxes, headers, dropdowns, and RichEdit typography in <code>&lt; 16ms</code> without restarting.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v040-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
      <span class="release-badge">Milestone • November 2026</span>
      <h2 id="v040-heading" style="margin-top: 0.25rem;">v0.4.0 — Native C++20 Help System, Dark-Mode UI Subclasses &amp; AI Blueprints</h2>
      <ul class="feature-list">
        <li><strong>New <code>RaggieSoftHelp.exe</code> Native C++20 Help Viewer</strong>: Converted RaggieSoft's modular <code>.rshm.json</code> documentation viewer into a 100% static <code>/MT</code> Win32 C++20 binary (zero <code>.NET</code> and zero <code>WebView2</code> dependencies!) featuring Contents, Index, full-text Search, in-process HTML5-to-RTF typography (<code>Msftedit.dll</code>), and single-instance Named Pipe <code>F1</code> IPC.</li>
        <li><strong>Bundled <code>raggiesoft.installer-studio</code> Offline Help Module</strong>: Shipped 8 comprehensive offline HTML5 chapters wired directly to <code>F1</code> across the IDE and mirrored 1:1 to <a href="/docs">/docs</a>.</li>
        <li><strong>Global Win32 Dark Mode Checkbox &amp; ListView Header Subclasses</strong>: Added <code>AttachAccessibleCheckboxSubclass</code> and <code>AttachDarkAwareListViewSubclass</code> in <code>RswGlassRenderer.hpp</code> so checkboxes and <code>SysListView32</code> column headers maintain <code>&ge; 15.8:1</code> WCAG AAA contrast across Dark, Light, and High Contrast modes.</li>
        <li><strong>Expanded From-Scratch AI Agent Blueprints &amp; Screenshot Exporter</strong>: Upgraded <code>instbuild.exe --emit-ai-spec</code> (<code>/llms.txt</code>, <code>/llms-full.txt</code>, <code>/SKILL.md</code>) and added <code>--export-screenshots</code> across GUI tools.</li>
      </ul>
      </div>
    </section>

    <section aria-labelledby="v030-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v030-heading" style="margin-top: 0.25rem;">v0.3.0 — Editions Parity, LZMS Compression, Pre-MSI Runtimes, .MSM &amp; SelectionTree</h2>
        <ul class="feature-list">
          <li><strong>IDE Editions (<code>Community == Premier</code>)</strong>: Defined <code>Community</code>, <code>Express</code>, <code>Professional</code>, and <code>Premier</code> tiers with <code>Community</code> permanently maintaining 100% feature parity with <code>Premier</code>.</li>
          <li><strong>Windows <code>LZMS</code> Solid Compression</strong>: Integrated <code>COMPRESS_ALGORITHM_LZMS</code> (<code>Cabinet.lib</code>) to shrink embedded <code>Product.msi</code> and offline runtime payloads inside <code>Setup.exe</code>.</li>
          <li><strong>Unlimited Pre-MSI <code>[Prerequisite.*]</code> Runtime Broker &amp; 64-Bit <code>.MSM</code> Merger</strong>: Added curated and custom runtime execution before <code>msiexec</code> under one UAC prompt plus native 64-bit SQL + CAB Merge Module consumption.</li>
          <li><strong>Authentic Windows Installer <code>SelectionTree</code> &amp; Clean Status Formatting</strong>: Added 32-bit ARGB split-dropdown feature icons, live byte-cost cards, <code>DisallowAbsent</code> core locks, and <code>MsiFormatRecordW</code> status formatting.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v021-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Bugfix &amp; Polish • November 2026</span>
        <h2 id="v021-heading" style="margin-top: 0.25rem;">v0.2.1 — Real-World Setup Fixes, Dark Mode Checkboxes &amp; UAC Elevation Broker</h2>
        <ul class="feature-list">
          <li>Added Dark Mode checkbox subclassing in <code>SetupWizard.exe</code>, bottom-right footer navigation, persistent <code>Signature</code> / <code>AppSearch</code> locator SQL tables, and seamless <code>asInvoker</code> &rarr; <code>--elevated-msi-worker</code> UAC elevation.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v020-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Feature Milestone • November 2026</span>
        <h2 id="v020-heading" style="margin-top: 0.25rem;">v0.2.0 — Destination Computer Tree, Component Rules &amp; Dual Dialog Designers</h2>
        <ul class="feature-list">
          <li>Added the Destination Computer folder tree, Microsoft Component Rule validation (<code>ICE18</code>, <code>ICE38</code>, <code>ICE64</code>, <code>ICE80</code>), File Associations &amp; Shell Verbs, guided Win32 AeroWizards, and the <code>370&times;270</code> <code>MSI.DLL</code> SQL Dialog Designer.</li>
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
  `}function Xt(){return`
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
        <a class="btn btn-primary" href="${qn}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="/screenshots">View Dark &amp; Light Mode Captures</a>
        <a class="btn btn-outline" href="${we}">Inspect C++20 Accessibility Source</a>
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
            <h3>Dark-Mode Buttons, Checkboxes, Trees &amp; Headers</h3>
            <p>
              Shared Win32 subclasses and 32-bit PARGB <code>StudioTreeIcon</code> image lists override stock light-only
              controls so every push button, checkbox, <code>SysTreeView32</code> node, report column header, and focus ring
              maintains high WCAG contrast across Dark and Light modes.
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
              <th scope="row">Dark Mode Surface, TreeView &amp; Checkbox Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
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
  `}function is(){return`
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Single-Source Offline &amp; Web Manual • Schema v0.4</span>
      <h1 id="docs-title">User Guide, .rsip Reference &amp; AI Specifications</h1>
      <p class="lead">
        Every chapter below is compiled from the <strong>exact same HTML5 documentation module</strong>
        (<code>help/raggiesoft.installer-studio/</code>) distributed inside RaggieSoft Installer Studio and displayed offline
        by <code>RaggieSoftHelp.exe</code> whenever you press <code>F1</code> in the IDE—alongside our machine-readable
        <a href="/llms-full.txt">/llms-full.txt</a> and <a href="/SKILL.md">SKILL.md</a> coding-agent specs.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/docs/welcome-overview">Start Reading Chapter 1 &rarr;</a>
        <a class="btn btn-outline" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="/SKILL.md">Download AI SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="manual-chapters-heading">
      <span class="eyebrow">Official Distributed Help Module (8 Chapters)</span>
      <h2 id="manual-chapters-heading">Browse Documentation Chapters</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <span class="eyebrow">Chapter 1 • Getting Started</span>
            <h3><a href="/docs/welcome-overview" style="color: inherit; text-decoration: none;">Overview, Editions &amp; Hybrid .rsip Architecture</a></h3>
            <p>Meet the 5 static <code>/MT</code> C++20 executables, the <code>Community == Premier</code> parity pledge, and <code>.rsip</code> / <code>.rsis</code> / <code>.rsii</code> manifests.</p>
          </div>
          <a class="btn btn-outline" href="/docs/welcome-overview">Read Chapter 1</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 2 • Visual IDE &amp; Wizards</span>
            <h3><a href="/docs/ide-and-aerowizards" style="color: inherit; text-decoration: none;">Tree-First Visual IDE &amp; 5 Guided AeroWizards</a></h3>
            <p>Tour the categorized views of <code>InstallerStudio.exe</code>, the 5 native Win32 AeroWizards, Features &amp; Registry trees, File Associations, and lossless AST saving.</p>
          </div>
          <a class="btn btn-outline" href="/docs/ide-and-aerowizards">Read Chapter 2</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 3 • Windows Installer Engine</span>
            <h3><a href="/docs/components-and-keypaths" style="color: inherit; text-decoration: none;">Destination Folders, Components &amp; KeyPath Rules</a></h3>
            <p>Enforce Microsoft Single-Directory (<code>RSW031</code>), <code>ICE38</code> HKCU User-Profile KeyPaths (<code>RSW032</code>), and <code>ICE18</code> <code>CreateFolder</code> rules.</p>
          </div>
          <a class="btn btn-outline" href="/docs/components-and-keypaths">Read Chapter 3</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 4 • Windows Installer Engine</span>
            <h3><a href="/docs/runtimes-and-merge-modules" style="color: inherit; text-decoration: none;">Pre-MSI Runtime Prerequisites &amp; .MSM Merge Modules</a></h3>
            <p>Distribute <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes via <code>WinHTTP</code> download, <code>LZMS</code> embed, or <code>Redist\\</code> plus 64-bit <code>.MSM</code> merging.</p>
          </div>
          <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules">Read Chapter 4</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 5 • Wizard UI &amp; Dialogs</span>
            <h3><a href="/docs/selection-tree-and-dialogs" style="color: inherit; text-decoration: none;">MSI SelectionTree, C++ Glass Wizard &amp; MSI.DLL Dialogs</a></h3>
            <p>Customize <code>SetupWizard.exe</code>, the authentic 32-bit ARGB MSI <code>SelectionTree</code>, and <code>370&times;270</code> <code>MSI.DLL</code> SQL dialogs.</p>
          </div>
          <a class="btn btn-outline" href="/docs/selection-tree-and-dialogs">Read Chapter 5</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 6 • CLI &amp; AI Automation</span>
            <h3><a href="/docs/cli-and-ai-agents" style="color: inherit; text-decoration: none;">Headless CLI (instbuild.exe) &amp; AI Agent Authoring</a></h3>
            <p>Compile <code>x64</code> and <code>ARM64</code> packages in CI/CD, validate with JSON diagnostics, and generate from-scratch projects with coding agents.</p>
          </div>
          <a class="btn btn-outline" href="/docs/cli-and-ai-agents">Read Chapter 6</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 7 • Compliance &amp; Security</span>
            <h3><a href="/docs/accessibility-and-vpat" style="color: inherit; text-decoration: none;">WCAG 2.2 AA Accessibility, Dark Mode &amp; VPAT 2.5</a></h3>
            <p>UI Automation roles, High Contrast themes, Dark Mode button/checkbox/header subclasses, and automated HTML5 VPAT 2.5 exports.</p>
          </div>
          <a class="btn btn-outline" href="/docs/accessibility-and-vpat">Read Chapter 7</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 8 • Compliance &amp; Security</span>
            <h3><a href="/docs/msiprism-and-patches" style="color: inherit; text-decoration: none;">MSI Prism SQL Inspector, Signing, .MST &amp; .MSP</a></h3>
            <p>Inspect <code>.msi</code>/<code>.msm</code>/<code>.msp</code> relational tables in <code>msiprism.exe</code>, apply Dual-Layer Authenticode signing, and emit <code>.mst</code>/<code>.msp</code> deltas.</p>
          </div>
          <a class="btn btn-outline" href="/docs/msiprism-and-patches">Read Chapter 8</a>
        </article>
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="quick-index-heading">
      <span class="eyebrow">Direct Topic Anchors (Synced with module.rshm.json)</span>
      <h2 id="quick-index-heading" style="margin-top: 0.25rem;">Quick Keyword Index</h2>
      <div class="btn-row">
        <a class="btn btn-outline" href="/docs/welcome-overview#editions">Community == Premier Parity</a>
        <a class="btn btn-outline" href="/docs/components-and-keypaths#component-rules">ICE18 &amp; ICE38 Component Rules</a>
        <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules#prerequisites">[Prerequisite.*] Pre-MSI Runtimes</a>
        <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules#mergemodules">[MergeModule.*] (.MSM)</a>
        <a class="btn btn-outline" href="/docs/selection-tree-and-dialogs#selection-tree">MSI SelectionTree</a>
        <a class="btn btn-outline" href="/docs/cli-and-ai-agents#ai-specs">llms.txt &amp; SKILL.md</a>
        <a class="btn btn-outline" href="/docs/accessibility-and-vpat#vpat-export">VPAT 2.5 Export</a>
        <a class="btn btn-outline" href="/docs/msiprism-and-patches#msiprism">MSI Prism Inspector</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.4 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Feature, Registry, Prerequisite, MergeModule, Component, MsiDialog..."
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
            <tr x-show="!q || 'registry hklm hkcu hkcr hku hkmu dword reg'.includes(q.toLowerCase())">
              <th scope="row"><code>[Registry.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Root</code> (<code>HKLM|HKCU|HKCR|HKU|HKMU</code>), <code>Key</code>, <code>Name</code>, <code>Type</code> (<code>string|expand_string|dword</code>), <code>Value</code>, <code>Feature</code>, and optional <code>Component</code>.</td>
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
            <tr x-show="!q || 'shortcut startmenu desktop lnk'.includes(q.toLowerCase())">
              <th scope="row"><code>[Shortcut.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Name</code>, <code>TargetFile</code>, <code>Location</code> (<code>StartMenu|Desktop</code>), <code>Arguments</code>, and <code>Feature</code> with automatic <code>ICE38</code> KeyPaths.</td>
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
  `}function rs(){return`
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
  `}const Yt=[{path:"/",navLabel:"Overview",seoTitle:"RaggieSoft Installer Studio — v0.4.3 Technical Preview",seoDescription:"Zero-dependency Win32 C++20 Windows installer IDE, MSI compiler, universal x64/ARM64 Setup.exe, and offline Help Viewer.",renderBody:es},{path:"/screenshots",navLabel:"Visual Tour",seoTitle:"Visual Tour & Screenshots | RaggieSoft Installer Studio",seoDescription:"Explore full-size Windows 11 screenshots of RaggieSoft Installer Studio v0.4.3: Features & Registry trees, Dark/Light SetupWizard, and MSI Prism.",renderBody:Xn},{path:"/roadmap",navLabel:"Roadmap",seoTitle:"Public Engineering Roadmap | RaggieSoft Installer Studio",seoDescription:"Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.4.3 through v1.0 GA across Windows 11 x64 and ARM64.",renderBody:ts},{path:"/docs",navLabel:"Docs & AI Spec",seoTitle:"Documentation & .rsip v0.4 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.4 project and .rsis suite reference covering Features, Registry, Prerequisites, Merge Modules, Components, and AI /llms.txt specs.",renderBody:is},{path:"/changelog",navLabel:"Version History",seoTitle:"Version History & Changelog (v0.4.3) | Installer Studio",seoDescription:"Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.4.3 across Windows 11 x64 and ARM64.",renderBody:os},{path:"/vpat",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.",renderBody:Xt},{path:"/accessibility",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:Xt},{path:"/security",navLabel:"Security",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Authenticode signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:rs}];function ns(e,t){const o=Yt.find(a=>a.path===e),r=e.startsWith("/docs/")?"/docs":e,i=Yt.filter(a=>!!a.navLabel).map(a=>{const d=a.path===r?' aria-current="page"':"";return`<li><a class="nav-link" href="${a.path}"${d}>${a.navLabel}</a></li>`}).join(""),n=o?o.renderBody():`
        <section class="hero" aria-labelledby="err-title">
          <span class="eyebrow">HTTP 404 • Route Not Found</span>
          <h1 id="err-title">Page Not Found</h1>
          <p class="lead">The requested RaggieSoft Installer Studio documentation or preview route could not be found.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/">Return to Project Overview</a>
            <a class="btn btn-outline" href="/screenshots">Explore Visual Tour</a>
            <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
          </div>
        </section>
      `;return{html:`
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.4.3)</span>
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
              <li><a class="nav-link" href="${we}">GitHub</a></li>
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
          <a href="/">Overview</a>
          <a href="/screenshots">Visual Tour &amp; Screenshots</a>
          <a href="/roadmap">Public Roadmap</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/changelog">Version History (v0.4.3)</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
          <a href="/ROADMAP.md">/ROADMAP.md</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="${we}">GitHub Repository</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source Technical Preview licensed under the MIT License.
          Feedback &amp; engineering inquiries: <a href="mailto:hello@michaelpragsdale.com">hello@michaelpragsdale.com</a>.
        </p>
        <p class="disclaimer-box">${Kn}</p>
      </div>
    </footer>
  `}}const Je=document.getElementById("app");if(Je&&Je.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Je.innerHTML=ns(e).html}document.addEventListener("click",e=>{const t=e.target;if(!t)return;const o=t.closest("[data-open-dialog]");if(o){const i=o.getAttribute("data-open-dialog"),n=i?document.getElementById(i):null;n&&typeof n.showModal=="function"&&n.showModal();return}const r=t.closest("[data-close-dialog]");if(r){const i=r.closest("dialog");i&&i.close();return}t.tagName==="DIALOG"&&t.classList.contains("shot-lightbox")&&t.close()});window.Alpine=gi;gi.start();
