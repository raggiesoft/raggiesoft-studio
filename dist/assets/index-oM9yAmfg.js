(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();var Ze=!1,Ye=!1,D=[],et=-1,Pe=!1,mt=!1;function mo(e){So(e)}function bo(){mt=!0}function vo(){mt=!1,Yt()}function So(e){D.includes(e)||(D.push(e),e._x_schedulerPriority!==void 0&&(Pe=!0)),Yt()}function bt(e){let t=D.indexOf(e);t!==-1&&t>et&&D.splice(t,1)}function Yt(){if(!Ye&&!Ze){if(mt)return;Ze=!0,queueMicrotask(yo)}}function yo(){Ze=!1,Ye=!0;for(let e=0;e<D.length;e++)Pe&&_o(e),D[e](),et=e;D.length=0,et=-1,Pe=!1,Ye=!1}function _o(e){let t=new Map,i=D.slice(e).sort((r,o)=>wo(r,o,t));for(let r=0;r<i.length;r++)D[e+r]=i[r];Pe=!1}function wo(e,t,i){return Ge(e)?Ge(t)?Bt(e._x_schedulerPriority.el,i)-Bt(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Ge(t)?1:0}function Ge(e){return e._x_schedulerPriority!==void 0}function Bt(e,t){if(t.has(e))return t.get(e);let i=0,r=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(r,i),i}var re,Q,ne,ei,xo=0,tt=!0;function Ao(e){tt=!1,e(),tt=!0}function Co(e){re=e.reactive,ne=e.release,Q=t=>e.effect(t,{scheduler:i=>{tt?mo(i):i()}}),ei=e.raw}function Ht(e){Q=e}function Io(e){let t=()=>{};return[(r,o)=>{let n=(o==null?void 0:o.priority)==="structural"?xo++:void 0,s=Q(r);return n!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:n}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(a=>a())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),ne(s))},s},()=>{t()}]}function ti(e,t){let i=!0,r,o,n=Q(()=>{let s=e(),a=JSON.stringify(s);if(!i&&(typeof s=="object"||s!==r)){let c=typeof r=="object"?JSON.parse(o):r;queueMicrotask(()=>{t(s,c)})}r=s,o=a,i=!1});return()=>{bt(n),ne(n)}}async function Mo(e){bo();try{await e(),await Promise.resolve()}finally{vo()}}var ii=[],oi=[],ri=[];function Ro(e){ri.push(e)}function vt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,oi.push(t))}function ni(e){ii.push(e)}function si(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function ai(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,r])=>{(t===void 0||t.includes(i))&&(r.forEach(o=>o()),delete e._x_attributeCleanups[i])})}function To(e){var t,i;for((t=e._x_effects)==null||t.forEach(bt);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var We=new MutationObserver(Ne),St=!1;function yt(){We.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),St=!0}function ci(){Po(),We.disconnect(),St=!1}var F=[];function Po(){let e=We.takeRecords();F.push(()=>e.length>0&&Ne(e));let t=F.length;queueMicrotask(()=>{if(F.length===t)for(;F.length>0;)F.shift()()})}function Eo(){for(;F.length>0;)F.shift()();let e=We.takeRecords();e.length>0&&Ne(e)}function b(e){if(!St)return e();ci();try{return e()}finally{yt()}}var _t=!1,Ee=[];function Do(){_t=!0}function Oo(){_t=!1,Ne(Ee),Ee=[]}function Ne(e){if(_t){Ee=Ee.concat(e);return}let t=[],i=new Set,r=new Map,o=new Map;for(let n=0;n<e.length;n++)if(!e[n].target._x_ignoreMutationObserver&&(e[n].type==="childList"&&(e[n].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&i.add(s)}),e[n].addedNodes.forEach(s=>{if(s.nodeType===1){if(i.has(s)){i.delete(s);return}s._x_marker||t.push(s)}})),e[n].type==="attributes")){let s=e[n].target,a=e[n].attributeName,c=e[n].oldValue,d=()=>{r.has(s)||r.set(s,[]),r.get(s).push({name:a,value:s.getAttribute(a)})},l=()=>{o.has(s)||o.set(s,[]),o.get(s).push(a)};s.hasAttribute(a)&&c===null?d():s.hasAttribute(a)?(l(),d()):l()}o.forEach((n,s)=>{ai(s,n)}),r.forEach((n,s)=>{ii.forEach(a=>a(s,n))});for(let n of i)t.some(s=>s.contains(n))||oi.forEach(s=>s(n));for(let n of t)n.isConnected&&ri.forEach(s=>s(n));t=null,i=null,r=null,o=null}function di(e){return U(G(e))}function xe(e,t,i){return e._x_dataStack=[t,...G(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function G(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?G(e.host):e.parentNode?G(e.parentNode):[]}function U(e){return new Proxy({objects:e},ko)}function li(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:li(Object.getPrototypeOf(e),t)}var ko={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?Lo:Reflect.get(e.find(r=>Reflect.has(r,t))||{},t,i)},set({objects:e},t,i,r){let o;for(const s of e)if(o=li(s,t),o)break;o||(o=e[e.length-1]);const n=Object.getOwnPropertyDescriptor(o,t);return n!=null&&n.set&&(n!=null&&n.get)?n.set.call(r,i)||!0:Reflect.set(o,t,i)}};function Lo(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function wt(e,t=()=>{}){let i=o=>typeof o=="object"&&!Array.isArray(o)&&o!==null,r=(o,n="")=>{Object.entries(Object.getOwnPropertyDescriptors(o)).forEach(([s,{value:a,enumerable:c}])=>{if(c===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let d=n===""?s:`${n}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?o[s]=a.initialize(e,d,s,t):i(a)&&a!==o&&!(a instanceof Element)&&r(a,d)})};return r(e)}function ui(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(r,o,n,s){return e(this.initialValue,()=>Wo(r,o),a=>it(r,o,a),o,n,s)}};return t(i),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let o=i.initialize.bind(i);i.initialize=(n,s,a,c)=>{let d=r.initialize(n,s,a,c);return i.initialValue=d,o(n,s,a,c)}}else i.initialValue=r;return i}}function Wo(e,t){return t.split(".").reduce((i,r)=>i[r],e)}function it(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),it(e[t[0]],t.slice(1),i)}}var pi={};function C(e,t){pi[e]=t}function ge(e,t){let i=No(t);return Object.entries(pi).forEach(([r,o])=>{Object.defineProperty(e,`$${r}`,{get(){return o(t,i)},enumerable:!1})}),e}function No(e){let[t,i]=Si(e),r={interceptor:ui,...t};return vt(e,i),r}function Fo(e,t,i,...r){try{return i(...r)}catch(o){oe(o,e,t)}}function oe(...e){return fi(...e)}var fi=Ho;function Bo(e){fi=e}function Ho(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var ie=!0;function hi(e){let t=ie;ie=!1;let i=e();return ie=t,i}function z(e,t,i={}){let r;return _(e,t)(o=>r=o,i),r}function _(...e){return gi(...e)}var gi=()=>{};function zo(e){gi=e}var mi;function Vo(e){mi=e}function Go(e,t){let i={};ge(i,e);let r=[i,...G(e)],o=typeof t=="function"?Uo(r,t):$o(r,t,e);return Fo.bind(null,e,t,o)}function Uo(e,t){return(i=()=>{},{scope:r={},params:o=[],context:n}={})=>{if(!ie){me(i,t,U([r,...e]),o);return}let s=t.apply(U([r,...e]),o);me(i,s)}}var Ue={};function jo(e,t){if(Ue[e])return Ue[e];let i=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,n=(()=>{try{let s=new i(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return oe(s,t,e),Promise.resolve()}})();return Ue[e]=n,n}function $o(e,t,i){let r=jo(t,i);return(o=()=>{},{scope:n={},params:s=[],context:a}={})=>{r.result=void 0,r.finished=!1;let c=U([n,...e]);if(typeof r=="function"){let d=r.call(a,r,c).catch(l=>oe(l,i,t));r.finished?(me(o,r.result,c,s,i),r.result=void 0):d.then(l=>{me(o,l,c,s,i)}).catch(l=>oe(l,i,t)).finally(()=>r.result=void 0)}}}function me(e,t,i,r,o){if(ie&&typeof t=="function"){let n=t.apply(i,r);n instanceof Promise?n.then(s=>me(e,s,i,r)).catch(s=>oe(s,o,t)):e(n)}else typeof t=="object"&&t instanceof Promise?t.then(n=>e(n)):e(t)}function qo(...e){return mi(...e)}function Ko(e,t,i={}){let r={};ge(r,e);let o=[r,...G(e)],n=U([i.scope??{},...o]),s=i.params??[];if(t.includes("await")){let a=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new a(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(i.context,n)}else{let a=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,d=new Function(["scope"],`with (scope) { let __result = ${a}; return __result }`).call(i.context,n);return typeof d=="function"&&ie?d.apply(n,s):d}}var xt="x-";function j(e=""){return xt+e}function Xo(e){xt=e}var De={};function v(e,t){return De[e]=t,{before(i){if(!De[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const r=H.indexOf(i);H.splice(r>=0?r:H.indexOf("DEFAULT"),0,e)}}}function Jo(e){return Object.keys(De).includes(e)}function Fe(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let n=Object.entries(e._x_virtualDirectives).map(([a,c])=>({name:a,value:c})),s=bi(n);n=n.map(a=>s.find(c=>c.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),t=t.concat(n)}let r={};return t.map(wi((n,s)=>r[n]=s)).filter(Ai).map(Yo(r,i)).sort(er).map(n=>Zo(e,n))}function bi(e){return Array.from(e).map(wi()).filter(t=>!Ai(t))}var ot=!1,de=new Map,vi=Symbol();function Qo(e){ot=!0;let t=Symbol();vi=t,de.set(t,[]);let i=()=>{for(;de.get(t).length;)de.get(t).shift()();de.delete(t)},r=()=>{ot=!1,i()};e(i),r()}function Si(e){let t=[],i=a=>t.push(a),[r,o]=Io(e);return t.push(o),[{Alpine:se,effect:r,cleanup:i,evaluateLater:_.bind(_,e),evaluate:z.bind(z,e)},()=>t.forEach(a=>a())]}function Zo(e,t){let i=()=>{},r=De[t.type]||i,[o,n]=Si(e);si(e,t.original,n);let s=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,o),r=r.bind(r,e,t,o),ot?de.get(vi).push(r):r())};return s.runCleanups=n,s}var yi=(e,t)=>({name:i,value:r})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:r}),_i=e=>e;function wi(e=()=>{}){return({name:t,value:i})=>{let{name:r,value:o}=xi.reduce((n,s)=>s(n),{name:t,value:i});return r!==t&&e(r,t),{name:r,value:o}}}var xi=[];function At(e){xi.push(e)}function Ai({name:e}){return Ci().test(e)}var Ci=()=>new RegExp(`^${xt}([^:^.]+)\\b`);function Yo(e,t){return({name:i,value:r})=>{i===r&&(r="");let o=i.match(Ci()),n=i.match(/:([a-zA-Z0-9\-_:]+)/),s=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[i]||i;return{type:o?o[1]:null,value:n?n[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:r,original:a}}}var rt="DEFAULT",H=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",rt,"teleport"];function er(e,t){let i=H.indexOf(e.type)===-1?rt:e.type,r=H.indexOf(t.type)===-1?rt:t.type;return H.indexOf(i)-H.indexOf(r)}function $(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(o=>$(o,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let r=e.firstElementChild;for(;r;)$(r,t),r=r.nextElementSibling}var O=!1;function k(e,t=()=>{}){return(...i)=>O?t(...i):e(...i)}function tr(e){return(...t)=>O&&e(...t)}var Ii=[];function Ae(e){Ii.push(e)}function ir(e,t){Ii.forEach(i=>i(e,t)),O=!0,Mi(()=>{R(t,(i,r)=>{r(i,()=>{})})}),O=!1}var nt=!1;function or(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),O=!0,nt=!0,Mi(()=>{rr(t)}),O=!1,nt=!1}function rr(e){let t=!1;R(e,(r,o)=>{$(r,(n,s)=>{if(t&&lr(n))return s();t=!0,o(n,s)})})}function Mi(e){let t=Q;Ht((i,r)=>{let o=t(i);return ne(o),()=>{}}),e(),Ht(t)}var Be=0;function nr(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),Be++),i.pending++,Promise.resolve(t).catch(r=>{try{oe(r,e)}catch(o){setTimeout(()=>{throw o},0)}}).then(()=>sr(e,i))}function sr(e,t){t.pending--,!(t.pending>0)&&(Eo(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Be--,e.isConnected&&(cr(t),R(e))))}function ar(e,t){if(Be===0)return!1;let i=x(e,r=>r._x_deferInit);return i?(Ri(i._x_deferInit,e,t.map(({name:r})=>r)),!0):!1}function Ri(e,t,i){let r=e.queuedAttributes.get(t);(!r||r.marker!==t._x_marker)&&(r={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,r)),i.forEach(o=>r.names.add(o))}function cr(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let r=x(i,n=>n._x_deferInit);if(r){Ri(r._x_deferInit,i,Array.from(t.names));return}let o=Array.from(t.names).filter(n=>i.hasAttribute(n)).map(n=>({name:n,value:i.getAttribute(n)}));o.length!==0&&Fe(i,o).forEach(n=>n())})}Ae((e,t)=>{Be!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||x(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,i={},r={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...r}))}function M(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var zt=!1;function dr(){zt&&M("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),zt=!0,document.body||M("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),yt(),Ro(t=>R(t,$)),vt(t=>Z(t)),ni((t,i)=>{ar(t,i)||Fe(t,i).forEach(r=>r())});let e=t=>!He(t.parentElement,!0);Array.from(document.querySelectorAll(Ei().join(","))).filter(e).forEach(t=>{R(t)}),le(document,"alpine:initialized"),setTimeout(()=>{fr()})}var Ct=[],Ti=[];function Pi(){return Ct.map(e=>e())}function Ei(){return Ct.concat(Ti).map(e=>e())}function Di(e){Ct.push(e)}function Oi(e){Ti.push(e)}function He(e,t=!1){return x(e,i=>{if((t?Ei():Pi()).some(o=>i.matches(o)))return!0})}function x(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return x(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return x(e.parentNode.host,t);if(e.parentElement)return x(e.parentElement,t)}}function lr(e){return Pi().some(t=>e.matches(t))}var ki=[];function ur(e){ki.push(e)}var pr=1;function R(e,t=$,i=()=>{}){x(e,r=>r._x_ignore)||Qo(()=>{t(e,(r,o)=>{r._x_marker||(i(r,o),ki.forEach(n=>n(r,o)),Fe(r,r.attributes).forEach(n=>n()),r._x_ignore||(r._x_marker=pr++),r._x_ignore&&o())})})}function Z(e,t=$){t(e,i=>{To(i),ai(i),delete i._x_marker})}function fr(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,r])=>{Jo(i)||r.some(o=>{if(document.querySelector(o))return M(`found "${o}", but missing ${t} plugin`),!0})})}var st=[],It=!1;function Mt(e=()=>{}){return queueMicrotask(()=>{It||setTimeout(()=>{at()})}),new Promise(t=>{st.push(()=>{e(),t()})})}function at(){for(It=!1;st.length;)st.shift()()}function hr(){It=!0}function Rt(e,t){return Array.isArray(t)?Vt(e,t.join(" ")):typeof t=="object"&&t!==null?gr(e,t):typeof t=="function"?Rt(e,t()):Vt(e,t)}function ct(e){return e.split(/\s/).filter(Boolean)}function Vt(e,t){let i=o=>ct(o).filter(n=>!e.classList.contains(n)).filter(Boolean),r=o=>(e.classList.add(...o),()=>{e.classList.remove(...o)});return t=t===!0?t="":t||"",r(i(t))}function gr(e,t){let i=Object.entries(t).flatMap(([s,a])=>a?ct(s):!1).filter(Boolean),r=Object.entries(t).flatMap(([s,a])=>a?!1:ct(s)).filter(Boolean),o=[],n=[];return r.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),n.push(s))}),i.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),o.push(s))}),()=>{n.forEach(s=>e.classList.add(s)),o.forEach(s=>e.classList.remove(s))}}function ze(e,t){return typeof t=="object"&&t!==null?mr(e,t):br(e,t)}function mr(e,t){let i={};return Object.entries(t).forEach(([r,o])=>{i[r]=e.style[r],r.startsWith("--")||(r=vr(r)),e.style.setProperty(r,o)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{ze(e,i)}}function br(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function vr(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function dt(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:i,expression:r},{evaluate:o})=>{typeof r=="function"&&(r=o(r)),r!==!1&&(!r||typeof r=="boolean"?yr(e,i,t):Sr(e,r,t))});function Sr(e,t,i){Li(e,Rt,""),{enter:o=>{e._x_transition.enter.during=o},"enter-start":o=>{e._x_transition.enter.start=o},"enter-end":o=>{e._x_transition.enter.end=o},leave:o=>{e._x_transition.leave.during=o},"leave-start":o=>{e._x_transition.leave.start=o},"leave-end":o=>{e._x_transition.leave.end=o}}[i](t)}function yr(e,t,i){Li(e,ze);let r=!t.includes("in")&&!t.includes("out")&&!i,o=r||t.includes("in")||["enter"].includes(i),n=r||t.includes("out")||["leave"].includes(i);t.includes("in")&&!r&&(t=t.filter((y,Y)=>Y<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((y,Y)=>Y>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),d=a?0:1,l=c?ae(t,"scale",95)/100:1,u=ae(t,"delay",0)/1e3,g=ae(t,"origin","center"),m="opacity, transform",T=ae(t,"duration",150)/1e3,p=ae(t,"duration",75)/1e3,S="cubic-bezier(0.4, 0.0, 0.2, 1)";o&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${T}s`,transitionTimingFunction:S},e._x_transition.enter.start={opacity:d,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),n&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:m,transitionDuration:`${p}s`,transitionTimingFunction:S},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:d,transform:`scale(${l})`})}function Li(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(r=()=>{},o=()=>{}){lt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,o)},out(r=()=>{},o=()=>{}){lt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,o)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,r){const o=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let n=()=>o(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):n():e._x_transition?e._x_transition.in(i):n();return}e._x_hidePromise=e._x_transition?new Promise((s,a)=>{e._x_transition.out(()=>{},()=>s(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let s=Wi(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):o(()=>{let a=c=>{let d=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(a)]).then(([l])=>l==null?void 0:l());return delete c._x_hidePromise,delete c._x_hideChildren,d};a(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Wi(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Wi(t)}function lt(e,t,{during:i,start:r,end:o}={},n=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(r).length===0&&Object.keys(o).length===0){n(),s();return}let a,c,d;_r(e,{start(){a=t(e,r)},during(){c=t(e,i)},before:n,end(){a(),d=t(e,o)},after:s,cleanup(){c(),d()}})}function _r(e,t){let i,r,o,n=dt(()=>{b(()=>{i=!0,r||t.before(),o||(t.end(),at()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:dt(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();n()}),finish:n},b(()=>{t.start(),t.during()}),hr(),requestAnimationFrame(()=>{if(i)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),b(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{i||(b(()=>{t.end()}),at(),setTimeout(e._x_transitioning.finish,s+a),o=!0)})})}function ae(e,t,i){if(e.indexOf(t)===-1)return i;const r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return i;if(t==="duration"||t==="delay"){let o=r.match(/([0-9]+)ms/);if(o)return o[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}function Ni(e,t,i,r=[]){switch(e._x_bindings||(e._x_bindings=re({})),e._x_bindings[t]=i,t=r.includes("camel")?Tr(t):t,t){case"value":wr(e,i);break;case"style":Ar(e,i);break;case"class":xr(e,i);break;case"selected":case"checked":Cr(e,t,i);break;default:Tt(e,t,i);break}}function wr(e,t){if(Pt(e))e.attributes.value===void 0&&(e.value=t);else if(Oe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Pr(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Rr(e,t);else if(e.tagName==="OPTION")Tt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function xr(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Rt(e,t)}function Ar(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=ze(e,t)}function Cr(e,t,i){Tt(e,t,i),Mr(e,t,i)}function Tt(e,t,i){[null,void 0,!1].includes(i)&&Dr(t)?e.removeAttribute(t):(Fi(t)&&(i=t),Or(i)&&(i=JSON.stringify(i)),Ir(e,t,i))}function Ir(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function Mr(e,t,i){e[t]!==i&&(e[t]=i)}function Rr(e,t){const i=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=i.includes(r.value)})}function Tr(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Pr(e,t){return e==t}function Te(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Er=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Fi(e){return Er.has(e)}function Dr(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Or(e){return typeof e=="object"&&e!==null}function kr(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Bi(e,t,i)}function Lr(e,t,i,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let o=e._x_inlineBindings[t];return o.extract=r,hi(()=>z(e,o.expression))}return Bi(e,t,i)}function Bi(e,t,i){let r=e.getAttribute(t);return r===null?typeof i=="function"?i():i:r===""?!0:Fi(t)?!![t,"true"].includes(r):r}function Oe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Pt(e){return e.type==="radio"||e.localName==="ui-radio"}function Hi(e,t){let i;return function(){const r=this,o=arguments,n=function(){i=null,e.apply(r,o)};clearTimeout(i),i=setTimeout(n,t)}}function zi(e,t){let i;return function(){let r=this,o=arguments;i||(e.apply(r,o),i=!0,setTimeout(()=>i=!1,t))}}function Vi({get:e,set:t},{get:i,set:r}){let o=!0,n,s=Q(()=>{let a=e(),c=i();if(o)r(je(a)),o=!1;else{let d=JSON.stringify(a),l=JSON.stringify(c);d!==n?r(je(a)):d!==l&&t(je(c))}n=JSON.stringify(e()),JSON.stringify(i())});return()=>{bt(s),ne(s)}}function je(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Wr(e){(Array.isArray(e)?e:[e]).forEach(i=>i(se))}var E={},Gt=!1;function Nr(e,t){if(Gt||(E=re(E),Gt=!0),t===void 0)return E[e];E[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?E[e]=t.initialize(E,e,e,()=>{}):wt(E[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&E[e].init()}function Fr(){return E}var Gi={};function Br(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?Ui(e,i()):(Gi[e]=i,()=>{})}function Hr(e){return Object.entries(Gi).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...r)=>i(...r)}})}),e}function Ui(e,t,i){let r=[];for(;r.length;)r.pop()();let o=Object.entries(t).map(([s,a])=>({name:s,value:a})),n=bi(o);return o=o.map(s=>n.find(a=>a.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),Fe(e,o,i).map(s=>{r.push(s.runCleanups),s()}),()=>{for(;r.length;)r.pop()()}}var ji={};function zr(e,t){ji[e]=t}function Vr(e,t){return Object.entries(ji).forEach(([i,r])=>{Object.defineProperty(e,i,{get(){return(...o)=>r.bind(t)(...o)},enumerable:!1})}),e}var Gr={get reactive(){return re},get release(){return ne},get effect(){return Q},get raw(){return ei},get transaction(){return Mo},version:"3.17.5",flushAndStopDeferringMutations:Oo,dontAutoEvaluateFunctions:hi,disableEffectScheduling:Ao,startObservingMutations:yt,stopObservingMutations:ci,setReactivityEngine:Co,onAttributeRemoved:si,onAttributesAdded:ni,closestDataStack:G,skipDuringClone:k,onlyDuringClone:tr,addRootSelector:Di,addInitSelector:Oi,setErrorHandler:Bo,interceptClone:Ae,addScopeToNode:xe,deferMutations:Do,mapAttributes:At,evaluateLater:_,interceptInit:ur,initInterceptors:wt,injectMagics:ge,setEvaluator:zo,setRawEvaluator:Vo,mergeProxies:U,extractProp:Lr,findClosest:x,onElRemoved:vt,closestRoot:He,destroyTree:Z,interceptor:ui,transition:lt,setStyles:ze,mutateDom:b,deferInit:nr,directive:v,entangle:Vi,throttle:zi,debounce:Hi,evaluate:z,evaluateRaw:qo,initTree:R,nextTick:Mt,prefixed:j,prefix:Xo,plugin:Wr,magic:C,store:Nr,start:dr,clone:or,cloneNode:ir,bound:kr,$data:di,watch:ti,walk:$,data:zr,bind:Br},se=Gr;function Ur(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var be=Object.assign,jr=Object.prototype.hasOwnProperty,ut=(e,t)=>jr.call(e,t),ve=Array.isArray,ue=e=>$i(e)==="[object Map]",$r=e=>typeof e=="string",Ce=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",qr=Object.prototype.toString,$i=e=>qr.call(e),qi=e=>$i(e).slice(8,-1),Et=e=>$r(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},Xr=Kr(e=>e.charAt(0).toUpperCase()+e.slice(1)),B=(e,t)=>!Object.is(e,t);function q(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var f,$e=new WeakSet,Ut=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$e.has(this)&&($e.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jt(this),Xi(this);const e=f,t=A;f=this,A=!0;try{return this.fn()}finally{f!==this&&q("Active effect was not restored correctly - this is likely a Vue internal bug."),Ji(this),f=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kt(e);this.deps=this.depsTail=void 0,jt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$e.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pt(this)&&this.run()}get dirty(){return pt(this)}},Ki=0,pe,fe;function Jr(e,t=!1){if(e.flags|=8,t){e.next=fe,fe=e;return}e.next=pe,pe=e}function Dt(){Ki++}function Ot(){if(--Ki>0)return;if(fe){let t=fe;for(fe=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;pe;){let t=pe;for(pe=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=i}}if(e)throw e}function Xi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ji(e){let t,i=e.depsTail,r=i;for(;r;){const o=r.prevDep;r.version===-1?(r===i&&(i=o),kt(r),Zr(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=i}function pt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ke)||(e.globalVersion=ke,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!pt(e))))return;e.flags|=2;const t=e.dep,i=f,r=A;f=e,A=!0;try{Xi(e);const o=e.fn(e._value);(t.version===0||B(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{f=i,A=r,Ji(e),e.flags&=-3}}function kt(e,t=!1){const{dep:i,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=o),i.subs===e&&(i.subs=r,!r&&i.computed)){i.computed.flags&=-5;for(let n=i.computed.deps;n;n=n.nextDep)kt(n,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function Zr(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function Yr(e,t){e.effect instanceof Ut&&(e=e.effect.fn);const i=new Ut(e);t&&be(i,t);try{i.run()}catch(o){throw i.stop(),o}const r=i.run.bind(i);return r.effect=i,r}function en(e){e.effect.stop()}var A=!0,Qi=[];function tn(){Qi.push(A),A=!1}function on(){const e=Qi.pop();A=e===void 0?!0:e}function jt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=f;f=void 0;try{t()}finally{f=i}}}var ke=0,rn=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},nn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!f||!A||f===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==f)t=this.activeLink=new rn(f,this),f.deps?(t.prevDep=f.depsTail,f.depsTail.nextDep=t,f.depsTail=t):f.deps=f.depsTail=t,Zi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=f.depsTail,t.nextDep=void 0,f.depsTail.nextDep=t,f.depsTail=t,f.deps===t&&(f.deps=i)}return f.onTrack&&f.onTrack(be({effect:f},e)),t}trigger(e){this.version++,ke++,this.notify(e)}notify(e){Dt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(be({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ot()}}};function Zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Zi(r)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ft=new WeakMap,V=Symbol("Object iterate"),ht=Symbol("Map keys iterate"),ye=Symbol("Array iterate");function w(e,t,i){if(A&&f){let r=ft.get(e);r||ft.set(e,r=new Map);let o=r.get(i);o||(r.set(i,o=new nn),o.map=r,o.key=i),o.track({target:e,type:t,key:i})}}function W(e,t,i,r,o,n){const s=ft.get(e);if(!s){ke++;return}const a=c=>{c&&c.trigger({target:e,type:t,key:i,newValue:r,oldValue:o,oldTarget:n})};if(Dt(),t==="clear")s.forEach(a);else{const c=ve(e),d=c&&Et(i);if(c&&i==="length"){const l=Number(r);s.forEach((u,g)=>{(g==="length"||g===ye||!Ce(g)&&g>=l)&&a(u)})}else switch((i!==void 0||s.has(void 0))&&a(s.get(i)),d&&a(s.get(ye)),t){case"add":c?d&&a(s.get("length")):(a(s.get(V)),ue(e)&&a(s.get(ht)));break;case"delete":c||(a(s.get(V)),ue(e)&&a(s.get(ht)));break;case"set":ue(e)&&a(s.get(V));break}}Ot()}function ee(e){const t=h(e);return t===e?t:(w(t,"iterate",ye),X(e)?t:t.map(J))}function Lt(e){return w(e=h(e),"iterate",ye),e}function I(e,t){return K(e)?no(e)?_e(J(t)):_e(t):J(t)}var sn={__proto__:null,[Symbol.iterator](){return qe(this,Symbol.iterator,e=>I(this,e))},concat(...e){return ee(this).concat(...e.map(t=>ve(t)?ee(t):t))},entries(){return qe(this,"entries",e=>(e[1]=I(this,e[1]),e))},every(e,t){return P(this,"every",e,t,void 0,arguments)},filter(e,t){return P(this,"filter",e,t,i=>i.map(r=>I(this,r)),arguments)},find(e,t){return P(this,"find",e,t,i=>I(this,i),arguments)},findIndex(e,t){return P(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return P(this,"findLast",e,t,i=>I(this,i),arguments)},findLastIndex(e,t){return P(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return P(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ke(this,"includes",e)},indexOf(...e){return Ke(this,"indexOf",e)},join(e){return ee(this).join(e)},lastIndexOf(...e){return Ke(this,"lastIndexOf",e)},map(e,t){return P(this,"map",e,t,void 0,arguments)},pop(){return ce(this,"pop")},push(...e){return ce(this,"push",e)},reduce(e,...t){return $t(this,"reduce",e,t)},reduceRight(e,...t){return $t(this,"reduceRight",e,t)},shift(){return ce(this,"shift")},some(e,t){return P(this,"some",e,t,void 0,arguments)},splice(...e){return ce(this,"splice",e)},toReversed(){return ee(this).toReversed()},toSorted(e){return ee(this).toSorted(e)},toSpliced(...e){return ee(this).toSpliced(...e)},unshift(...e){return ce(this,"unshift",e)},values(){return qe(this,"values",e=>I(this,e))}};function qe(e,t,i){const r=Lt(e),o=r[t]();return r!==e&&!X(e)&&(o._next=o.next,o.next=()=>{const n=o._next();return n.done||(n.value=i(n.value)),n}),o}var an=Array.prototype;function P(e,t,i,r,o,n){const s=Lt(e),a=s!==e&&!X(e),c=s[t];if(c!==an[t]){const u=c.apply(e,n);return a?J(u):u}let d=i;s!==e&&(a?d=function(u,g){return i.call(this,I(e,u),g,e)}:i.length>2&&(d=function(u,g){return i.call(this,u,g,e)}));const l=c.call(s,d,r);return a&&o?o(l):l}function $t(e,t,i,r){const o=Lt(e),n=o!==e&&!X(e);let s=i,a=!1;o!==e&&(n?(a=r.length===0,s=function(d,l,u){return a&&(a=!1,d=I(e,d)),i.call(this,d,I(e,l),u,e)}):i.length>3&&(s=function(d,l,u){return i.call(this,d,l,u,e)}));const c=o[t](s,...r);return a?I(e,c):c}function Ke(e,t,i){const r=h(e);w(r,"iterate",ye);const o=r[t](...i);return(o===-1||o===!1)&&_n(i[0])?(i[0]=h(i[0]),r[t](...i)):o}function ce(e,t,i=[]){tn(),Dt();const r=h(e)[t].apply(e,i);return Ot(),on(),r}var cn=Ur("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ce));function dn(e){Ce(e)||(e=String(e));const t=h(this);return w(t,"has",e),t.hasOwnProperty(e)}var eo=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return o;if(t==="__v_raw")return i===(r?o?Sn:oo:o?vn:io).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const n=ve(e);if(!r){let a;if(n&&(a=sn[t]))return a;if(t==="hasOwnProperty")return dn}const s=Reflect.get(e,t,he(e)?e:i);if((Ce(t)?Yi.has(t):cn(t))||(r||w(e,"get",t),o))return s;if(he(s)){const a=n&&Et(t)?s:s.value;return r&&Se(a)?gt(a):a}return Se(s)?r?gt(s):Wt(s):s}},ln=class extends eo{constructor(e=!1){super(!1,e)}set(e,t,i,r){let o=e[t];const n=ve(e)&&Et(t);if(!this._isShallow){const c=K(o);if(!X(i)&&!K(i)&&(o=h(o),i=h(i)),!n&&he(o)&&!he(i))return c?(q(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(o.value=i,!0)}const s=n?Number(t)<e.length:ut(e,t),a=Reflect.set(e,t,i,he(e)?e:r);return e===h(r)&&a&&(s?B(i,o)&&W(e,"set",t,i,o):W(e,"add",t,i)),a}deleteProperty(e,t){const i=ut(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&i&&W(e,"delete",t,void 0,r),o}has(e,t){const i=Reflect.has(e,t);return(!Ce(t)||!Yi.has(t))&&w(e,"has",t),i}ownKeys(e){return w(e,"iterate",ve(e)?"length":V),Reflect.ownKeys(e)}},un=class extends eo{constructor(e=!1){super(!0,e)}set(e,t){return q(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return q(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},pn=new ln,fn=new un,Ie=e=>Reflect.getPrototypeOf(e);function hn(e,t,i){return function(...r){const o=this.__v_raw,n=h(o),s=ue(n),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,d=o[e](...r),l=t?_e:J;return!t&&w(n,"iterate",c?ht:V),be(Object.create(d),{next(){const{value:u,done:g}=d.next();return g?{value:u,done:g}:{value:a?[l(u[0]),l(u[1])]:l(u),done:g}}})}}function Me(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";q(`${Xr(e)} operation ${i}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function gn(e,t){const i={get(o){const n=this.__v_raw,s=h(n),a=h(o);e||(B(o,a)&&w(s,"get",o),w(s,"get",a));const{has:c}=Ie(s),d=e?_e:J;if(c.call(s,o))return d(n.get(o));if(c.call(s,a))return d(n.get(a));n!==s&&n.get(o)},get size(){const o=this.__v_raw;return!e&&w(h(o),"iterate",V),o.size},has(o){const n=this.__v_raw,s=h(n),a=h(o);return e||(B(o,a)&&w(s,"has",o),w(s,"has",a)),o===a?n.has(o):n.has(o)||n.has(a)},forEach(o,n){const s=this,a=s.__v_raw,c=h(a),d=e?_e:J;return!e&&w(c,"iterate",V),a.forEach((l,u)=>o.call(n,d(l),d(u),s))}};return be(i,e?{add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear")}:{add(o){const n=h(this),s=Ie(n),a=h(o),c=!X(o)&&!K(o)?a:o;return s.has.call(n,c)||B(o,c)&&s.has.call(n,o)||B(a,c)&&s.has.call(n,a)||(n.add(c),W(n,"add",c,c)),this},set(o,n){!X(n)&&!K(n)&&(n=h(n));const s=h(this),{has:a,get:c}=Ie(s);let d=a.call(s,o);d?qt(s,a,o):(o=h(o),d=a.call(s,o));const l=c.call(s,o);return s.set(o,n),d?B(n,l)&&W(s,"set",o,n,l):W(s,"add",o,n),this},delete(o){const n=h(this),{has:s,get:a}=Ie(n);let c=s.call(n,o);c?qt(n,s,o):(o=h(o),c=s.call(n,o));const d=a?a.call(n,o):void 0,l=n.delete(o);return c&&W(n,"delete",o,void 0,d),l},clear(){const o=h(this),n=o.size!==0,s=ue(o)?new Map(o):new Set(o),a=o.clear();return n&&W(o,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=hn(o,e)}),i}function to(e,t){const i=gn(e);return(r,o,n)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ut(i,o)&&o in r?i:r,o,n)}var mn={get:to(!1)},bn={get:to(!0)};function qt(e,t,i){const r=h(i);if(r!==i&&t.call(e,r)){const o=qi(e);q(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var io=new WeakMap,vn=new WeakMap,oo=new WeakMap,Sn=new WeakMap;function yn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wt(e){return K(e)?e:ro(e,!1,pn,mn,io)}function gt(e){return ro(e,!0,fn,bn,oo)}function ro(e,t,i,r,o){if(!Se(e))return q(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const n=o.get(e);if(n)return n;const s=yn(qi(e));if(s===0)return e;const a=new Proxy(e,s===2?r:i);return o.set(e,a),a}function no(e){return K(e)?no(e.__v_raw):!!(e&&e.__v_isReactive)}function K(e){return!!(e&&e.__v_isReadonly)}function X(e){return!!(e&&e.__v_isShallow)}function _n(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var J=e=>Se(e)?Wt(e):e,_e=e=>Se(e)?gt(e):e;function he(e){return e?e.__v_isRef===!0:!1}C("nextTick",()=>Mt);C("dispatch",e=>le.bind(le,e));C("watch",(e,{evaluateLater:t,cleanup:i})=>(r,o)=>{let n=t(r),a=ti(()=>{let c;return n(d=>c=d),c},o);i(a)});C("store",Fr);C("data",e=>di(e));C("root",e=>He(e));C("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=U(wn(e))),e._x_refs_proxy));function wn(e){let t=[];return x(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var Xe={};function so(e){return Xe[e]||(Xe[e]=0),++Xe[e]}function xn(e,t){return x(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function An(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=so(t))}C("id",(e,{cleanup:t})=>(i,r=null)=>{let o=`${i}${r?`-${r}`:""}`;return Cn(e,o,t,()=>{let n=xn(e,i),s=n?n._x_ids[i]:so(i);return r?`${i}-${s}-${r}`:`${i}-${s}`})});Ae((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Cn(e,t,i,r){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let o=r();return e._x_id[t]=o,i(()=>{delete e._x_id[t]}),o}C("el",e=>e);ao("Focus","focus","focus");ao("Persist","persist","persist");function ao(e,t,i){C(t,r=>M(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,r))}v("modelable",(e,{expression:t},{effect:i,evaluateLater:r,cleanup:o})=>{let n=r(t),s=()=>{let l;return n(u=>l=u),l},a=r(`${t} = __placeholder`),c=l=>a(()=>{},{scope:{__placeholder:l}}),d=s();c(d),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.setWithModifiers,g=Vi({get(){return l()},set(m){u(m)}},{get(){return s()},set(m){c(m)}});o(g)})});v("teleport",(e,{modifiers:t,expression:i},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&M("x-teleport can only be used on a <template> tag",e);let o=Kt(i),n=e.content.cloneNode(!0).firstElementChild;e._x_teleport=n,n._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),n.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(a=>{n.addEventListener(a,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),xe(n,{},e);let s=(a,c,d)=>{d.includes("prepend")?c.parentNode.insertBefore(a,c):d.includes("append")?c.parentNode.insertBefore(a,c.nextSibling):c.appendChild(a)};b(()=>{k(()=>{s(n,o,t),R(n)})()}),e._x_teleportPutBack=()=>{let a=Kt(i);b(()=>{s(e._x_teleport,a,t)})},r(()=>b(()=>{n.remove(),Z(n)}))});var In=document.createElement("div");function Kt(e){let t=k(()=>document.querySelector(e),()=>In)();return t||M(`Cannot find x-teleport element for selector: "${e}"`),t}var co=()=>{};co.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",co);v("effect",k((e,{expression:t},{effect:i})=>{i(_(e,t))}));function te(e,t,i,r){let o=e,n=c=>r(c),s={},a=(c,d)=>l=>d(c,l);return i.includes("dot")&&(t=Mn(t)),i.includes("camel")&&(t=Rn(t)),i.includes("capture")&&(s.capture=!0),i.includes("window")&&(o=window),i.includes("document")&&(o=document),i.includes("passive")&&(s.passive=i[i.indexOf("passive")+1]!=="false"),n=lo(i,n),i.includes("prevent")&&(n=a(n,(c,d)=>{d.preventDefault(),c(d)})),i.includes("stop")&&(n=a(n,(c,d)=>{d.stopPropagation(),c(d)})),i.includes("once")&&(n=a(n,(c,d)=>{c(d),o.removeEventListener(t,n,s)})),(i.includes("away")||i.includes("outside"))&&(o=document,n=a(n,(c,d)=>{e.contains(d.target)||d.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(d))})),i.includes("self")&&(n=a(n,(c,d)=>{d.target===e&&c(d)})),t==="submit"&&(n=a(n,(c,d)=>{d.target._x_pendingModelUpdates&&d.target._x_pendingModelUpdates.forEach(l=>l()),c(d)})),(Pn(t)||uo(t))&&(n=a(n,(c,d)=>{Dn(d,i)||c(d)})),o.addEventListener(t,n,s),()=>{o.removeEventListener(t,n,s)}}function lo(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",r=Le(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Hi(t,r)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",r=Le(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=zi(t,r)}return t}function Mn(e){return e.replace(/-/g,".")}function Rn(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Le(e){return!Array.isArray(e)&&!isNaN(e)}function Tn(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Pn(e){return["keydown","keyup"].includes(e)}function uo(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var En=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Dn(e,t){let i=t.filter((n,s)=>n==="false"&&t[s-1]==="passive"?!1:!En.includes(n));if(i.includes("debounce")){let n=i.indexOf("debounce");i.splice(n,Le((i[n+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let n=i.indexOf("throttle");i.splice(n,Le((i[n+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&Xt(e.key).includes(i[0]))return!1;const o=["ctrl","shift","alt","meta","cmd","super"].filter(n=>i.includes(n));return i=i.filter(n=>!o.includes(n)),!(o.length>0&&o.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===o.length&&(uo(e.type)||Xt(e.key).includes(i[0])))}function Xt(e){if(!e)return[];e=Tn(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}v("model",(e,{modifiers:t,expression:i},{effect:r,cleanup:o})=>{let n=e;t.includes("parent")&&(n=x(e,p=>p!==e));let s=_(n,i),a;typeof i=="string"?a=_(n,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?a=_(n,`${i()} = __placeholder`):a=()=>{};let c=()=>{let p;return s(S=>p=S),Jt(p)?p.get():p},d=p=>{let S;s(y=>S=y),Jt(S)?S.set(p):a(()=>{},{scope:{__placeholder:p}})};typeof i=="string"&&e.type==="radio"&&b(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let l=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),m=l||u||g,T;if(O)T=()=>{};else if(m){let p=[],S=y=>d(Re(e,t,y,c()));if(l&&p.push(te(e,"change",t,S)),u&&(p.push(te(e,"blur",t,S)),e.form)){let y=e.form,Y=()=>S({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(Y),o(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(Y),1)})}g&&p.push(te(e,"keydown",t,y=>{y.key==="Enter"&&S(y)})),T=()=>p.forEach(y=>y())}else{let p=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";T=te(e,p,t,S=>{d(Re(e,t,S,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Oe(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&d(Re(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=T,o(()=>e._x_removeModelListeners.default()),e.form){let p=te(e.form,"reset",[],S=>{Mt(()=>e._x_model&&e._x_model.set(Re(e,t,{target:e},c())))});o(()=>p())}if(e._x_model={get(){return c()},set(p){d(p)},setWithModifiers:lo(t,d)},e._x_forceModelUpdate=p=>{p===void 0&&typeof i=="string"&&i.match(/\./)&&(p=""),b(()=>{Oe(e)?Array.isArray(p)?e.checked=p.some(S=>S==e.value):e.checked=!!p:Pt(e)?typeof p=="boolean"?e.checked=Te(e.value)===p:e.checked=e.value==p:Ni(e,"value",p)})},e.tagName==="SELECT"){let p=new MutationObserver(()=>{e._x_forceModelUpdate(c())});p.observe(e,{childList:!0}),o(()=>p.disconnect())}r(()=>{let p=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(p)})});function Re(e,t,i,r){return b(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Oe(e))if(Array.isArray(r)){let o=null;return t.includes("number")?o=Je(i.target.value):t.includes("boolean")?o=Te(i.target.value):o=i.target.value,i.target.checked?r.includes(o)?r:r.concat([o]):r.filter(n=>!On(n,o))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(o=>{let n=o.value||o.text;return Je(n)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(o=>{let n=o.value||o.text;return Te(n)}):Array.from(i.target.selectedOptions).map(o=>o.value||o.text);{let o;return Pt(e)?i.target.checked?o=i.target.value:o=r:o=i.target.value,t.includes("number")?Je(o):t.includes("boolean")?Te(o):t.includes("trim")?o.trim():o}}})}function Je(e){let t=e?parseFloat(e):null;return kn(t)?t:e}function On(e,t){return e==t}function kn(e){return!Array.isArray(e)&&!isNaN(e)}function Jt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(O)return e.removeAttribute(j("cloak"));queueMicrotask(()=>b(()=>e.removeAttribute(j("cloak"))))});Oi(()=>`[${j("init")}]`);v("init",k((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));v("text",(e,{expression:t},{effect:i,evaluateLater:r})=>{let o=r(t);i(()=>{o(n=>{b(()=>{e.textContent=n})})})});v("html",(e,{expression:t},{effect:i,evaluateLater:r})=>{let o=r(t);i(()=>{o(n=>{b(()=>{Array.from(e.children).forEach(s=>Z(s)),e.innerHTML=n??"",e._x_ignoreSelf=!0,R(e),delete e._x_ignoreSelf})})},{priority:"structural"})});At(yi(":",_i(j("bind:"))));var po=(e,{value:t,modifiers:i,expression:r,original:o},{effect:n,cleanup:s})=>{if(!t){let c={};Hr(c),_(e,r)(l=>{Ui(e,l,o)},{scope:c});return}if(t==="key")return Ln(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let a=_(e,r);n(()=>a(c=>{c===void 0&&typeof r=="string"&&r.match(/\./)&&(c=""),b(()=>Ni(e,t,c,i))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};po.inline=(e,{value:t,modifiers:i,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})};v("bind",po);function Ln(e,t){e._x_keyExpression=t}Di(()=>`[${j("data")}]`);var N=Symbol();v("data",(e,{expression:t},{cleanup:i})=>{if(Nn(e))return;let r=e[N];if((r==null?void 0:r.expression)===t)return;t=t===""?"{}":t;let o={};ge(o,e);let n={};Vr(n,o);let s=z(e,t,{scope:n});(s===void 0||s===!0)&&(s={}),ge(s,e);let a;if(r!=null&&r.reactiveData){a=r.reactiveData,Wn(a,s);let d={expression:t};e[N]=d,queueMicrotask(()=>{e[N]===d&&delete e[N]})}else a=re(s);wt(a,i);let c=xe(e,a);k(()=>{a.init&&z(e,a.init)})(),i(()=>{a.destroy&&z(e,a.destroy),c();let d={reactiveData:a};e[N]=d,queueMicrotask(()=>{e[N]===d&&delete e[N]})})});function Wn(e,t){Object.keys(t).forEach(i=>{let r=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);r.get||r.set||o!=null&&o.get||o!=null&&o.set?(o&&delete e[i],o||(e[i]=void 0),r.get||r.set?Object.defineProperty(e,i,r):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}Ae((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Nn(e){return O?nt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:i},{effect:r})=>{let o=_(e,i);e._x_doHide||(e._x_doHide=()=>{b(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{b(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let n=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),c=dt(u=>u?s():n(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,n):u?a():n()}),d,l=!0;r(()=>o(u=>{!l&&u===d||(t.includes("immediate")&&(u?a():n()),c(u),d=u,l=!1)}))});v("for",k((e,{expression:t},{effect:i,cleanup:r})=>{let o=Hn(t),n=_(e,o.items),s=_(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>Bn(e,o,n,s),{priority:"structural"}),r(()=>{e._x_lookup.forEach(a=>b(()=>{Z(a),a.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Fn(e){return t=>{Object.entries(t).forEach(([i,r])=>{e[i]=r})}}function Bn(e,t,i,r){i(o=>{Vn(o)&&(o=Array.from({length:o},(d,l)=>l+1)),o==null&&(o=[]),o instanceof Set&&(o=Array.from(o)),o instanceof Map&&(o=Array.from(o));let n=e._x_lookup,s=new Map;e._x_lookup=s;let a=Gn(o),c=Object.entries(o).map(([d,l])=>{a||(d=parseInt(d));let u=zn(t,l,d,o),g;return r(m=>{typeof m=="object"&&M("x-for key cannot be an object, it must be a string or an integer",e),n.has(m)&&(s.set(m,n.get(m)),n.delete(m)),g=m},{scope:{index:d,...u}}),[g,u]});b(()=>{n.forEach(u=>{Z(u),u.remove()});let d=new Set,l=e;c.forEach(([u,g])=>{if(s.has(u)){let p=s.get(u);p._x_refreshXForScope(g),l.nextElementSibling!==p&&(l.nextElementSibling&&p.replaceWith(l.nextElementSibling),l.after(p)),l=p,p._x_currentIfEl&&(p.nextElementSibling!==p._x_currentIfEl&&l.after(p._x_currentIfEl),l=p._x_currentIfEl);return}e.content.children.length>1&&M("x-for templates require a single root element, additional elements will be ignored.",e);let m=document.importNode(e.content,!0).firstElementChild,T=re(g);xe(m,T,e),m._x_refreshXForScope=Fn(T),s.set(u,m),d.add(m),l.after(m),l=m}),d.forEach(u=>R(u)),l!==e?e._x_lastRenderedEl=l:delete e._x_lastRenderedEl})})}function Hn(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,o=e.match(r);if(!o)return;let n={};n.items=o[2].trim();let s=o[1].replace(i,"").trim(),a=s.match(t);return a?(n.item=s.replace(t,"").trim(),n.index=a[1].trim(),a[2]&&(n.collection=a[2].trim())):n.item=s,n}function zn(e,t,i,r){let o={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{o[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{o[s]=t[s]}):o[e.item]=t,e.index&&(o[e.index]=i),e.collection&&(o[e.collection]=r),o}function Vn(e){return typeof e!="object"&&!isNaN(e)}function Gn(e){return typeof e=="object"&&!Array.isArray(e)}function fo(){}fo.inline=(e,{expression:t},{cleanup:i})=>{let r=He(e);r&&(r._x_refs||(r._x_refs={}),r._x_refs[t]=e,i(()=>delete r._x_refs[t]))};v("ref",fo);v("if",k((e,{expression:t},{effect:i,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&M("x-if can only be used on a <template> tag",e);let o=_(e,t),n=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return xe(a,{},e),b(()=>{e.after(a),R(a)}),e._x_currentIfEl=a,e._x_lastRenderedEl=a,e._x_undoIf=()=>{b(()=>{Z(a),a.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},a},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>o(a=>{a?n():s()}),{priority:"structural"}),r(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(o=>An(e,o))});Ae((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});At(yi("@",_i(j("on:"))));v("on",k((e,{value:t,modifiers:i,expression:r},{cleanup:o})=>{let n=r?_(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=te(e,t,i,a=>{n(()=>{},{scope:{$event:a},params:[a]})});o(()=>s())}));Ve("Collapse","collapse","collapse");Ve("Intersect","intersect","intersect");Ve("Focus","trap","focus");Ve("Mask","mask","mask");function Ve(e,t,i){v(t,r=>M(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,r))}se.setEvaluator(Go);se.setRawEvaluator(Ko);se.setReactivityEngine({reactive:Wt,effect:(e,t={})=>{let i;return i=Yr(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:en,raw:h});var Un=se,ho=Un;/*! Bundled license information:

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
*/const Nt="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio",jn="https://assets.raggiesoft.com/raggiesoft-installer-studio/images/og-installer-studio.jpg",Ft=`${Nt}/raggiesoft-installer-studio-x64-setup.exe`,go=`${Nt}/raggiesoft-installer-studio-arm64-setup.exe`,L=`${Nt}/screenshots`,we="https://github.com/raggiesoft/installer-studio",$n="/vpat/raggiesoft-installer-studio-vpat-2.5.html",qn="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function Kn(){return`
    <section aria-labelledby="screenshots-heading">
      <span class="eyebrow">Real Native Win32 C++20 Captures • Windows 11 Dark &amp; Light Mode</span>
      <h2 id="screenshots-heading">See RaggieSoft Installer Studio v0.4.1 in Action</h2>
      <p>
        Every window below is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables using stock Windows 11
        system libraries (<code>gdiplus.dll</code>, <code>comctl32.dll</code>, <code>Msftedit.dll</code>, and <code>msi.dll</code>)—with
        custom Dark Mode push-button, checkbox, and <code>SysListView32</code> column-header subclasses plus live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
      </p>
      <div class="shot-grid">
        <!-- Screenshot 1: Visual IDE Destination Computer Tree & Dark-Header ListView -->
        <figure class="shot-card">
          <img
            src="${L}/ide-destination-folders.png"
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
            src="${L}/ide-runtimes-msm.png"
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
            src="${L}/ide-wizard-designer.png"
            alt="RaggieSoft Installer Studio C++ Wizard Designer previewing the Windows Installer SelectionTree step live on a GDI+ canvas."
            loading="lazy"
          />
          <figcaption>
            <strong>3. Visual IDE — Live GDI+ C++ Wizard Designer</strong>
            Customize accent palettes, icons, and <code>aerowizard</code>, <code>standard</code> Glass, or <code>autorun16x9</code> layouts with instant live preview.
          </figcaption>
        </figure>

        <!-- Screenshot 4: SetupWizard.exe Accessible Option Cards & Dark Push Buttons -->
        <figure class="shot-card">
          <img
            src="${L}/setupwizard-setup-type.png"
            alt="SetupWizard.exe in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button."
            loading="lazy"
          />
          <figcaption>
            <strong>4. SetupWizard.exe — Dark Mode Cards &amp; Custom-Subclassed Buttons</strong>
            Genuine <code>BS_AUTORADIOBUTTON</code> cards and dark-themed <code>&lt; Back</code> / Royal Cobalt <code>Next &gt;</code> / <code>Cancel</code> buttons with full UI Automation support.
          </figcaption>
        </figure>

        <!-- Screenshot 5: Live OS Light Mode Hot-Swap via WM_SETTINGCHANGE(ImmersiveColorSet) -->
        <figure class="shot-card">
          <img
            src="${L}/setupwizard-setup-type-light.png"
            alt="The exact same open SetupWizard.exe window after receiving WM_SETTINGCHANGE ImmmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting."
            loading="lazy"
          />
          <figcaption>
            <strong>5. Live OS Theme Hot-Swap (<code>ImmersiveColorSet</code>)</strong>
            Toggle Windows 11 between Dark Mode, Light Mode, or High Contrast mid-install and the open wizard flips palettes live in <code>&lt; 16ms</code> without restarting.
          </figcaption>
        </figure>

        <!-- Screenshot 6: SetupWizard.exe Authentic MSI SelectionTree -->
        <figure class="shot-card">
          <img
            src="${L}/setupwizard-selection-tree.png"
            alt="SetupWizard.exe Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB drive state icons and live disk space cost card."
            loading="lazy"
          />
          <figcaption>
            <strong>6. SetupWizard.exe — Authentic MSI SelectionTree</strong>
            Reads embedded <code>Feature</code> tables directly from <code>Product.msi</code>, rendering 32-bit ARGB split-dropdown state icons and live per-feature byte costs.
          </figcaption>
        </figure>

        <!-- Screenshot 7: Native C++20 RaggieSoftHelp.exe Offline Viewer -->
        <figure class="shot-card">
          <img
            src="${L}/helpviewer-search.png"
            alt="RaggieSoftHelp.exe native C++20 offline Help Viewer showing full-text search results, dark-mode checkbox, dark buttons, and formatted documentation reader."
            loading="lazy"
          />
          <figcaption>
            <strong>7. RaggieSoftHelp.exe — Zero-Dependency C++20 Help Viewer</strong>
            Press <code>F1</code> in any IDE view to jump straight to offline HTML5 topics via Named Pipe IPC—with zero <code>.NET</code> or <code>WebView2</code> dependencies.
          </figcaption>
        </figure>

        <!-- Screenshot 8: RaggieSoft MSI Prism 64-Bit SQL Inspector -->
        <figure class="shot-card">
          <img
            src="${L}/msiprism-sql-inspector.png"
            alt="RaggieSoft MSI Prism opening raggiesoft-installer-studio-arm64.msi and displaying all 44 SQL tables alongside Feature rows in Dark Mode."
            loading="lazy"
          />
          <figcaption>
            <strong>8. msiprism.exe — Native 64-Bit Dark Mode SQL Inspector</strong>
            Inspect relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> packages, run ICE80 audits, and diff transforms or patches.
          </figcaption>
        </figure>
      </div>
    </section>
  `}function Xn(){return`
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
            <h3>Shipping Today in Technical Preview (<code>v0.4.1</code>)</h3>
            <ul class="feature-list">
              <li><strong>100% Dark-Mode-Complete Win32 UI + Live OS Theme Hot-Swapping</strong>: Custom-subclassed push buttons, checkboxes, <code>SysListView32</code> headers, and RichEdit panels that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> without restarting</li>
              <li><strong>10-View Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong> with 5 native <strong>AeroWizards</strong>—with <strong>Community Edition maintaining 100% feature parity with Premier</strong></li>
              <li><strong>Zero-Dependency Native C++20 Help System (<code>RaggieSoftHelp.exe</code>)</strong>: Pluggable <code>module.rshm.json</code> offline documentation viewer with Contents, Index, Search, and instant Named Pipe <code>F1</code> navigation</li>
              <li><strong>Authentic MSI <code>SelectionTree</code> &amp; Pre-MSI Runtime Engine</strong>: 32-bit ARGB split-icon feature tree in <code>Setup.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching, and 64-bit <code>.MSM</code> Merge Module merging</li>
              <li><strong>Windows <code>LZMS</code> Solid Compression + <code>msiprism.exe</code></strong> 64-bit Dark Mode SQL inspector + <code>instbuild.exe --emit-ai-spec</code> &amp; <code>--emit-vpat</code></li>
            </ul>
          </div>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1 &rarr; v0.4.1 Version History</a>
        </article>
        <article class="card">
          <div>
            <h3>Next Milestones on the Workbench (Phases B–G)</h3>
            <ul class="feature-list">
              <li><strong>Single-Download Universal Web &amp; Offline Installers + <code>.NET 11</code> Presets</strong>: Replace separate <code>x64</code> / <code>ARM64</code> links with one CPU-aware Web <code>Setup.exe</code> (fetching only the right architecture via <code>.rswpak</code> On-Demand Feature Packs) plus one All-in-One Offline <code>Setup.exe</code>, alongside curated <code>.NET 11</code> + <code>.NET 10 LTS</code> detection and optional <code>Engine = native</code></li>
              <li><strong>8 Wizard Styles (<code>Wizard95</code>, <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code> &amp; <code>Autorun16x9</code>)</strong> + automatic <code>SPI_GETHIGHCONTRAST</code> contrast-theme override</li>
              <li><strong>WCAG-Guarded Publisher Branding &amp; From-Scratch Dual Dialog Builders</strong>: Full Light/Dark brand colors with live WCAG 2.2 AA contrast enforcement, custom C++ &amp; raw <code>370&times;270</code> <code>MSI.DLL</code> dialogs, <code>RsDialog</code> (<code>Rs*()</code>) scripting, and Authenticode / Azure Artifact Signing UX</li>
              <li><strong>Setup Capture (<code>.wsb</code> Sandbox), VB6 <code>.vbp</code> Reg-Free COM Import &amp; White-Label <code>RsUpdate.exe</code></strong>: Snapshot-diff repackager, Visual Studio <code>.slnx</code> / VB6 <code>.vbp</code> importers, guided <code>.MSP</code> servicing, native <code>.MSIXBUNDLE</code>, and SPDX/CycloneDX <code>--emit-sbom</code></li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/roadmap">Read Full Public Roadmap (Phases B–G)</a>
        </article>
      </div>
    </section>
  `}function Jn(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.4.1) • x64 &amp; ARM64</span>
          <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
          <p class="lead">
            An original, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
            Design projects visually with modern <strong>AeroWizards</strong>, Destination Computer folder trees, Dual C++ &amp;
            <code>MSI.DLL</code> Dialog Designers, and a built-in native C++ <code>F1</code> Help Viewer—or let coding agents author
            comment-preserving <code>.rsip</code> manifests from scratch into real <code>.msi</code>, <code>.msm</code>,
            <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA <code>Setup.exe</code> installers.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${Ft}">Download Technical Preview v0.4.1 (x64)</a>
            <a class="btn btn-outline" href="${go}">Download Native ARM64 Preview</a>
            <a class="btn btn-outline" href="/roadmap">Explore Public Roadmap</a>
            <a class="btn btn-outline" href="/changelog">Version History (v0.4.1)</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${jn}"
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

    ${Kn()}

    ${Xn()}

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
          <a class="btn btn-outline" href="/changelog">Inspect v0.4.1 Release Notes</a>
        </article>
      </div>
    </section>
  `}function Qn(){return`
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.4.1 Shipped &rarr; v1.0.0 GA</span>
      <h1 id="roadmap-page-title">Public Engineering Roadmap</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is built in the open as original, zero-dependency native Win32 C++20
        software for Windows 11 <code>x64</code> and <code>ARM64</code>. Below is our complete human-readable roadmap—from
        what ships today in <code>v0.4.1</code> through General Availability (<code>v1.0.0 GA</code>)—guided by a permanent
        pledge that <strong>Community Edition maintains 100% technical feature parity with Premier Edition</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${we}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/ROADMAP.md">Open Raw /ROADMAP.md</a>
        <a class="btn btn-outline" href="/changelog">View Shipped Changelog (v0.4.1)</a>
        <a class="btn btn-outline" href="${Ft}">Download v0.4.1 Preview</a>
      </div>
    </section>

    <section aria-labelledby="roadmap-matrix-heading">
      <span class="eyebrow">At-a-Glance Schedule</span>
      <h2 id="roadmap-matrix-heading">Milestone Overview Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>RaggieSoft Installer Studio Milestones from Technical Preview to v1.0.0 GA</caption>
          <thead>
            <tr>
              <th scope="col">Phase / Target</th>
              <th scope="col">Primary Focus</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>v0.1.0</code> – <code>v0.4.1</code></th>
              <td>Core C++20 compiler, 10-View Visual IDE, MSI <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, native <code>F1</code> Help Viewer, Dark Mode push buttons, &amp; live <code>ImmersiveColorSet</code> hot-swapping</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row">Phase B (<code>v0.5.0</code>)</th>
              <td>Authenticode Signing Studio, 8 Wizard Styles (<code>Wizard95</code>..<code>FluentMica</code>..<code>FullScreenBlue</code>), WCAG-guarded Publisher Branding, From-Scratch C++ &amp; Raw <code>MSI.DLL</code> Dialog Builders + <code>RsDialog</code> scripting, <code>.rswpak</code> On-Demand Feature Packs, <code>.NET 11</code>, &amp; Universal Single-EXE</td>
              <td><span class="status-pill status-next">Next Up</span></td>
            </tr>
            <tr>
              <th scope="row">Phase C (<code>v0.6.0</code>)</th>
              <td>Snapshot-Diff Setup Capture ("Repackager") &amp; one-click disposable Windows 11 Pro Sandbox (<code>.wsb</code>) capture</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase D (<code>v0.7.0</code>)</th>
              <td>Open-Format Import Wizard (<code>.msi</code>/<code>.msm</code>, Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM, XML/INI) &amp; Visual Studio <code>.vsix</code> extension</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase E (<code>v0.8.0</code>)</th>
              <td>Windows Services, safe <code>PATH</code> / Firewall / Scheduled Tasks, JSON/XML/INI Config Patchers, &amp; Windows Restart Manager (<code>Rstrtmgr.dll</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase F (<code>v0.9.0</code>)</th>
              <td>White-label <code>RsUpdate.exe</code> Auto-Updater, guided <code>.MSP</code> servicing (<code>--plan-update</code>), native <code>.MSIX</code>/<code>.MSIXBUNDLE</code>, <code>I18N</code> + RTL, &amp; SPDX/CycloneDX <code>--emit-sbom</code></td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase G (<code>v1.0.0 GA</code>)</th>
              <td>Turnkey GitHub Actions &amp; Azure DevOps tasks + 100% RaggieSoft production cutover across all apps, interactive books, and supporter audio archives</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div x-data="{ phaseFilter: 'all' }">
      <section aria-label="Filter Roadmap Phases" style="margin-bottom: 1.5rem;">
        <div class="btn-row" role="group" aria-label="Show all phases or focus on one milestone">
          <button type="button" class="btn" :class="phaseFilter === 'all' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'all'">All Phases</button>
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.4.1)</button>
          <button type="button" class="btn" :class="phaseFilter === 'b' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'b'">Phase B (v0.5)</button>
          <button type="button" class="btn" :class="phaseFilter === 'c' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'c'">Phase C (v0.6)</button>
          <button type="button" class="btn" :class="phaseFilter === 'd' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'd'">Phase D (v0.7)</button>
          <button type="button" class="btn" :class="phaseFilter === 'e' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'e'">Phase E (v0.8)</button>
          <button type="button" class="btn" :class="phaseFilter === 'f' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'f'">Phase F (v0.9)</button>
          <button type="button" class="btn" :class="phaseFilter === 'g' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'g'">Phase G (v1.0 GA)</button>
        </div>
      </section>

      <!-- Shipped Foundation -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.4.1</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>Five Native Static <code>/MT</code> C++20 Executables (<code>x64</code> &amp; <code>ARM64</code>)</strong>: <code>InstallerStudio.exe</code> (10-view visual IDE + 5 guided AeroWizards), <code>instbuild.exe</code> (headless CLI compiler, JSON linter, AI spec &amp; VPAT 2.5 generator), <code>SetupWizard.exe</code> (accessible runtime bootstrapper), <code>msiprism.exe</code> (64-bit Dark Mode SQL inspector), and <code>RaggieSoftHelp.exe</code> (offline HTML5 documentation viewer with Named Pipe <code>F1</code> IPC).</li>
          <li><strong>Complete Win32 Dark Mode &amp; Live OS Palette Hot-Swapping (<code>v0.4.1</code>)</strong>: Custom-subclassed push buttons (<code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, <code>Cancel</code>), checkboxes, <code>SysListView32</code> headers, and ComboBoxes that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> (including automatic day/night schedulers like Auto Dark Mode) without restarting.</li>
          <li><strong>Pre-MSI Runtimes, 64-Bit <code>.MSM</code> Merging &amp; Authentic <code>SelectionTree</code> (<code>v0.3.0</code>)</strong>: Unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching before <code>msiexec</code>, pure 64-bit <code>.msm</code> SQL + CAB merging, <code>COMPRESS_ALGORITHM_LZMS</code> solid compression, and 32-bit ARGB split-dropdown feature trees.</li>
        </ul>
        <a class="btn btn-outline" href="/changelog">Read Detailed v0.1.0 &rarr; v0.4.1 Release Notes</a>
      </section>

      <!-- Phase B -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'b'" aria-labelledby="phase-b-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Phase B • Target v0.5.0 (Next Up)</span>
          <h2 id="phase-b-heading" style="margin-top: 0.5rem;">Signing Studio, 8 Wizard Styles, WCAG-Guarded Branding, From-Scratch C++ &amp; MSI Dialog Builders, <code>RsDialog</code> Scripting, <code>.rswpak</code> Feature Packs, <code>.NET 11</code> &amp; Universal Single-EXE</h2>
          <ul class="feature-list">
            <li><strong>First-Class Authenticode Signing UX</strong>: Interactive Windows Certificate Store picker (<code>CryptUIDlgSelectCertificateFromStore</code>), local <code>.pfx</code> / hardware token configuration, Azure Artifact Signing (<code>dlib</code> + <code>MetadataJson</code>) tester, and one-click Dual-Layer Signature Verifier (<code>WinVerifyTrust</code> on both inner <code>Product.msi</code> and outer <code>Setup.exe</code>).</li>
            <li><strong>Eight First-Party Wizard Layout Variations (<code>[UI] WizardLayout</code>)</strong>:
              <ul class="feature-list" style="margin-top: 0.35rem; margin-bottom: 0.35rem;">
                <li><strong><code>Wizard95</code></strong>: Classic 1995 desktop 3D beveled dialog sheet (<code>#C0C0C0</code> surface, etched dividers, <code>164&times;314</code> left bitmap rail, and beveled buttons).</li>
                <li><strong><code>Wizard97</code></strong>: Classic enterprise header-banner layout with right-side emblem and bottom-right <code>&lt; Back</code> / <code>Next &gt;</code> / <code>Cancel</code> footer—modernized for Dark &amp; Light Mode.</li>
                <li><strong><code>AeroWizard</code></strong>: Command-bar layout featuring a vector GDI+ <code>30&times;30</code> circular <code>&larr;</code> Back glyph in the top-left command area.</li>
                <li><strong><code>FluentMica</code></strong>: Modern Windows 11 native backdrop via <code>DwmSetWindowAttribute(DWMWA_SYSTEMBACKDROP_TYPE, DWMSBT_MAINWINDOW / DWMSBT_TABBEDWINDOW)</code> with a unified borderless header, left-hand vertical step-progress rail (<code>Welcome &rarr; License &rarr; Options &rarr; Install &rarr; Finish</code>), and rounded <code>8px</code> cards in pure zero-dependency C++20.</li>
                <li><strong><code>OneClickSplash</code></strong>: Compact centered <code>~480&times;280</code> friction-free card with one primary <strong>Install</strong> button, live progress bar, and a subtle <em>"Customize installation..."</em> disclosure button that expands into the full Custom Setup flow only when clicked.</li>
                <li><strong><code>PassiveToast</code></strong>: Clean non-interactive <code>/passive</code> &amp; <code>/qb</code> enterprise status surface (centered or docked near the bottom-right system tray) with Dark/Light/High-Contrast styling and UI Automation live-region percentage announcements.</li>
                <li><strong><code>FullScreenBlue</code></strong>: Nostalgic 1990s cobalt-blue (<code>#000080 &rarr; #000000</code>) full-screen <code>SETUP.EXE</code> backdrop wash with a shadow-boxed serif title in the top-left corner, floating 3D beveled setup dialogs, <strong>optional rotating installation billboards</strong>, and a floating <strong>3D Beveled Progress Gauge</strong> that sits centered or docks at the <strong>bottom-center / bottom-right</strong> beneath billboards—while keeping full modern DPI scaling, keyboard navigation, and screen-reader accessibility under the hood.</li>
                <li><strong><code>Autorun16x9</code></strong>: Widescreen <code>16:9</code> Collector's Edition &amp; digital media launcher menu.</li>
              </ul>
            </li>
            <li><strong>Non-Negotiable Windows Contrast Theme Auto-Override (<code>SPI_GETHIGHCONTRAST</code>)</strong>: Across every single <code>WizardLayout</code> and custom skin, <code>SetupWizard.exe</code> checks <code>SPI_GETHIGHCONTRAST</code> at startup and live on <code>WM_SETTINGCHANGE</code> / <code>WM_SYSCOLORCHANGE</code>—automatically bypassing custom gradients, bitmaps, and Mica backdrops whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is active to paint strictly with <code>COLOR_WINDOW</code>, <code>COLOR_WINDOWTEXT</code>, <code>COLOR_HIGHLIGHT</code>, and <code>2px</code> solid borders.</li>
            <li><strong>Complete Publisher Branding, Custom Imagery &amp; Enforced WCAG 2.2 AA Contrast Guardrails (<code>[Branding]</code> &amp; <code>.rswskin</code>)</strong>: Customize every Light &amp; Dark Mode brand color, header banner, sidebar rail, product badge, background wash, and install billboard—backed by a live W3C relative luminance contrast enforcer inside <code>InstallerStudio.exe</code> (with a one-click <em>"Auto-Adjust Nearest Accessible Shade"</em> button preserving brand hue) and automated CI checks in <code>instbuild.exe --validate</code>.</li>
            <li><strong>From-Scratch Dual Dialog Builders (C++ <code>SetupWizard.exe</code> + Raw <code>MSI.DLL</code>) &amp; <code>RsDialog</code> (<code>Rs*()</code>) Scripting</strong>: Build completely custom wizard dialogs from a blank canvas for <strong>both</strong> C++ <code>SetupWizard.exe</code> (<code>[Dialog.*]</code>) AND raw <code>370&times;270</code> DLU relational <code>MSI.DLL</code> SQL tables (<code>[MsiDialog.*]</code> / <code>[MsiControl.*]</code>), paired with <code>.rssc</code> event hooks and our procedural <strong><code>RsDialog</code></strong> standard library (<code>RsWelcome()</code>, <code>RsLicense()</code>, <code>RsSetupType()</code>, <code>RsFeatureTree()</code>, <code>RsAskDestPath()</code>, <code>RsAskText()</code>, <code>RsAskOptions()</code>, <code>RsStartCopy()</code>, <code>RsFinish()</code>, <code>RsFinishReboot()</code>).</li>
            <li><strong>CPU-Aware Universal Web Installer via On-Demand Feature Packs (<code>.rswpak</code>)</strong>: Eliminate separate <code>x64</code> and <code>ARM64</code> download links on product websites. Ship a single compact <code>Setup.exe</code> that queries <code>IsWow64Process2</code> at launch (piercing Windows 11 Prism emulation) and downloads <strong>only</strong> the matching native <code>ARM64</code> or <code>x64</code> LZMS-compressed <code>.rswpak</code> edition and selected optional features over <code>WinHTTP</code> with SHA-256 + Authenticode verification.</li>
            <li><strong>All-in-One Offline Universal Single-EXE (<code>Architecture = universal</code>) &amp; Native Direct Engine (<code>Engine = native</code>)</strong>: Alongside the lightweight <code>.rswpak</code> Web Installer, emit a single self-contained Offline <code>Setup.exe</code> packing <strong>both</strong> <code>x64</code> and <code>ARM64</code> LZMS payloads and prerequisites in one file for air-gapped networks and archival media—plus an optional zero-<code>msi.dll</code> transactional extraction backend with rollback journaling and signed <code>Uninstall.exe</code>.</li>
            <li><strong>First-Class <code>.NET 11</code> (<code>net11.0</code> / <code>net11.0-windows</code>) Runtime Presets</strong>: Curated <code>DotNet11Desktop</code>, <code>DotNet11AspNet</code>, and <code>DotNet11Runtime</code> / <code>DotNet10Runtime</code> presets alongside <code>.NET 10.0 LTS</code>, verifying native <code>arm64</code> and <code>x64</code>-on-ARM64 runtimes in <code>&lt; 1ms</code>.</li>
          </ul>
        </div>
      </section>

      <!-- Phase C -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'c'" aria-labelledby="phase-c-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase C • Target v0.6.0</span>
          <h2 id="phase-c-heading" style="margin-top: 0.5rem;">Setup Capture ("Repackager") &amp; Disposable Windows Sandbox (<code>.wsb</code>) Mode</h2>
          <ul class="feature-list">
            <li><strong>Snapshot-Diff Repackager (<code>Legacy Setup.exe &rarr; .rsip &rarr; .msi + .mst</code>)</strong>: Capture fast pre/post filesystem and <code>HKLM</code>/<code>HKCU</code>/<code>HKCR</code> registry baselines while tracking child sub-installers inside a Win32 Job Object (<code>CreateJobObjectW</code>), filter OS background noise, tokenize paths into <code>[ProgramFiles64Folder]</code>, harvest <code>.lnk</code> shortcuts and Windows Services, and emit editable <code>.rsip</code> projects plus enterprise <code>.mst</code> transforms.</li>
            <li><strong>One-Click Disposable Windows Sandbox (<code>.wsb</code>) Capture</strong>: Detect Windows 11 Pro, Enterprise, and Education hosts via <code>GetProductInfo</code>, spin up a pristine throwaway Windows Sandbox VM automatically, run the legacy installer + capture agent in isolation, and return the clean <code>.rsip</code> + captured files without touching the developer's PC.</li>
          </ul>
        </div>
      </section>

      <!-- Phase D -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'd'" aria-labelledby="phase-d-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase D • Target v0.7.0</span>
          <h2 id="phase-d-heading" style="margin-top: 0.5rem;">Open-Format Setup Conversion Wizard (Including VB6 <code>.vbp</code>!) &amp; Visual Studio Extension (<code>.vsix</code>)</h2>
          <ul class="feature-list">
            <li><strong><code>.msi</code> / <code>.msm</code> &amp; Visual Studio <code>.slnx</code> / <code>.csproj</code> / <code>.vcxproj</code> / <code>CMakeLists.txt</code> Importers</strong>: Decompile existing Windows Installer databases via <code>msiprism</code> SQL + FDI CAB extraction, or inspect Visual Studio solutions in one click to auto-configure <code>.NET 11</code> / <code>.NET 10 LTS</code> / <code>VC++</code> / <code>WebView2</code> prerequisites and <code>x64</code> + <code>ARM64</code> outputs.</li>
            <li><strong>Visual Basic 6.0 (<code>.vbp</code>) Importer with Windows 11 WRP &amp; Reg-Free COM Modes</strong>: Parse <code>ExeName32</code>, <code>Reference=</code>, and <code>Object=*.ocx</code> entries directly from <code>.vbp</code> projects; respect Windows 11 Resource Protection on built-in <code>SysWOW64</code> runtimes (<code>msvbvm60.dll</code>); and offer either classic local SP6 <code>.MSM</code> consumption or modern zero-elevation <strong>Reg-Free COM</strong> (<code>&lt;comClass&gt;</code> / <code>&lt;typelib&gt;</code> side-by-side manifests).</li>
            <li><strong>Open XML &amp; INI Script Importers + Visual Studio <code>.vsix</code> Extension</strong>: Convert structured XML/INI installer manifests into <code>.rsip</code> (flagging custom procedural blocks for AI translation into <code>.rssc</code> + <code>RsDialog</code>), and add <code>.rsip</code>/<code>.rsis</code> templates, syntax highlighting, and right-click packaging directly inside Visual Studio.</li>
          </ul>
        </div>
      </section>

      <!-- Phase E -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'e'" aria-labelledby="phase-e-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase E • Target v0.8.0</span>
          <h2 id="phase-e-heading" style="margin-top: 0.5rem;">Enterprise System Primitives, Config Patchers &amp; Windows Restart Manager</h2>
          <ul class="feature-list">
            <li><strong>Windows Services, Safe <code>PATH</code>, Firewall Rules &amp; Scheduled Tasks</strong>: Declarative <code>[Service.*]</code> (<code>ServiceInstall</code>/<code>ServiceControl</code> + SCM recovery), non-destructive <code>[Environment.*]</code> <code>PATH</code> updates (<code>[~]</code> semantics), <code>[FirewallRule.*]</code> (<code>INetFwPolicy2</code>), and <code>[ScheduledTask.*]</code> with automatic rollback and uninstall cleanup.</li>
            <li><strong>Declarative Config Patchers (<code>[JsonPatch.*]</code>, <code>[XmlConfig.*]</code>, <code>[IniFile.*]</code>)</strong>: Stamp install-time wizard properties cleanly into <code>appsettings.json</code>, <code>.xml</code>/<code>.config</code>, and <code>.ini</code> files while preserving user customizations across upgrades.</li>
            <li><strong>Windows Restart Manager (<code>Rstrtmgr.dll</code>) Integration</strong>: Detect running processes locking target files via <code>RmStartSession</code> / <code>RmGetList</code> and guide users through a WCAG-accessible <em>"Close Running Applications &amp; Continue"</em> flow to avoid unnecessary reboots.</li>
          </ul>
        </div>
      </section>

      <!-- Phase F -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'f'" aria-labelledby="phase-f-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase F • Target v0.9.0</span>
          <h2 id="phase-f-heading" style="margin-top: 0.5rem;">White-Label Auto-Updater, Guided <code>.MSP</code> Patching, Native <code>.MSIX</code> &amp; Global <code>I18N</code> / SBOM</h2>
          <ul class="feature-list">
            <li><strong>Royalty-Free White-Label Auto-Updater (<code>RsUpdate.exe</code> / <code>[AutoUpdate]</code>)</strong>: Unlocked across all editions (including Community!), stamped with your own <code>.ico</code>, <code>ProductName</code>, and <code>CompanyName</code>, verifying SHA-256 + <code>WinVerifyTrust</code> signatures over HTTPS to apply <code>.msp</code> patches, <code>.msi</code> Major Upgrades, or Native Engine updates.</li>
            <li><strong>Guided Microsoft-Compliant Update &amp; <code>.MSP</code> Servicing (<code>--plan-update</code>)</strong>: Diff against a shipped baseline <code>.msi</code>, enforce official Windows Installer Component rules automatically, emit binary-delta <code>.msp</code> Minor Updates when eligible, or guide one-click Major Upgrade transitions in plain English.</li>
            <li><strong>In-Process <code>.MSIX</code> / <code>.MSIXBUNDLE</code> Compiler (<code>AppxPackaging.dll</code>) &amp; <code>--emit-winget</code></strong>: Emit single-arch <code>.msix</code>, unified <code>x64 + ARM64</code> <code>.msixbundle</code> packages, optional Windows 11 Sparse Package Identity, and <code>winget-pkgs</code> YAML manifests directly from C++20 with zero external SDK downloads.</li>
            <li><strong>Multi-Language Localization (<code>I18N</code> + RTL) &amp; Procurement SBOMs (<code>--emit-sbom</code>)</strong>: UTF-8 <code>.rslang</code> tables for 20+ languages (including <code>WS_EX_LAYOUTRTL</code> right-to-left mirroring) plus <strong>SPDX 2.3 / CycloneDX JSON SBOM</strong> generation alongside HTML5 <strong>VPAT 2.5</strong> reports.</li>
          </ul>
        </div>
      </section>

      <!-- Phase G -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'g'" aria-labelledby="phase-g-heading" class="card">
        <div>
          <span class="status-pill">Phase G • Target v1.0.0 GA</span>
          <h2 id="phase-g-heading" style="margin-top: 0.5rem;">Turnkey CI/CD Actions &amp; 100% Production Cutover Gate</h2>
          <ul class="feature-list">
            <li><strong>First-Party CI/CD Tasks (<code>GitHub Actions</code> &amp; <code>Azure DevOps</code>)</strong>: Turnkey <code>raggiesoft/setup-installer-studio</code> workflows supporting headless JSON linting, matrix <code>x64</code> + <code>ARM64</code> + <code>universal</code> builds, Azure Artifact Signing, <code>--emit-vpat</code>, <code>--emit-sbom</code>, and <code>--emit-winget</code>.</li>
            <li><strong>Production Validation Gate</strong>: Complete build, Authenticode signing, clean install, upgrade, repair, silent deploy (<code>/s</code>), and uninstall verification across every RaggieSoft desktop application, interactive book, and supporter audio archive on clean Windows 11 <code>x64</code> and <code>ARM64</code> hardware.</li>
          </ul>
        </div>
      </section>
    </div>
  `}function Zn(){return`
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Ft}">Download Latest v0.4.1 (x64)</a>
        <a class="btn btn-outline" href="${go}">Download Latest v0.4.1 (ARM64)</a>
        <a class="btn btn-outline" href="${we}">View Commits on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="v041-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v041-heading" style="margin-top: 0.25rem;">v0.4.1 — Dark-Mode Push Buttons &amp; Live OS Theme Hot-Swapping</h2>
      <ul class="feature-list">
        <li><strong>Dark-Mode-Aware Accessible Push Buttons (<code>AttachAccessiblePushButtonSubclass</code>)</strong>: Replaced stock <code>ComCtl32 v6</code> light-mode white push buttons across <code>SetupWizard.exe</code> (<code>&lt; Back</code>, <code>Next &gt;</code>, <code>Cancel</code>), <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 100% public-API <code>SetWindowSubclass</code> + GDI+ vector buttons (Royal Cobalt primary CTA fills, Slate-Navy secondary fills, inline UAC shield icons via <code>BCM_SETSHIELD</code>, and <code>SPI_GETHIGHCONTRAST</code> system-brush fallback) while keeping native UI Automation <code>Button</code> roles and <code>Alt+Key</code> mnemonics intact.</li>
        <li><strong>Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Palette Hot-Swapping</strong>: All four Win32 GUI binaries now listen for live Windows 11 Light &harr; Dark Mode and Contrast Theme broadcasts, flipping DWM frames, cards, buttons, checkboxes, ListView headers, dropdowns, and RichEdit typography in <code>&lt; 16ms</code> without restarting.</li>
      </ul>
    </section>

    <section aria-labelledby="v040-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
      <span class="release-badge">Milestone • November 2026</span>
      <h2 id="v040-heading" style="margin-top: 0.25rem;">v0.4.0 — Native C++20 Help System, Dark-Mode UI Subclasses &amp; AI Blueprints</h2>
      <ul class="feature-list">
        <li><strong>New <code>RaggieSoftHelp.exe</code> Native C++20 Help Viewer</strong>: Converted RaggieSoft's modular <code>.rshm.json</code> documentation viewer into a 100% static <code>/MT</code> Win32 C++20 binary (zero <code>.NET</code> and zero <code>WebView2</code> dependencies!) featuring Contents, Index, full-text Search, in-process HTML5-to-RTF typography (<code>Msftedit.dll</code>), and single-instance Named Pipe <code>F1</code> IPC.</li>
        <li><strong>Bundled <code>raggiesoft.installer-studio</code> Offline Help Module</strong>: Shipped 8 comprehensive offline HTML5 chapters wired directly to <code>F1</code> across all 10 views of <code>InstallerStudio.exe</code>.</li>
        <li><strong>Global Win32 Dark Mode Checkbox &amp; ListView Header Subclasses</strong>: Added <code>AttachAccessibleCheckboxSubclass</code> and <code>AttachDarkAwareListViewSubclass</code> in <code>RswGlassRenderer.hpp</code> so checkboxes and <code>SysListView32</code> column headers maintain <code>&ge; 15.8:1</code> WCAG AAA contrast across Dark, Light, and High Contrast modes.</li>
        <li><strong>Expanded From-Scratch AI Agent Blueprints</strong>: Upgraded <code>instbuild.exe --emit-ai-spec</code> (<code>/llms.txt</code>, <code>/llms-full.txt</code>, <code>/SKILL.md</code>) with an AI Pre-Flight Checklist and complete enterprise <code>.rsip</code> blueprint.</li>
        <li><strong>Automated WIC Window Screenshot Exporter</strong>: Added <code>--export-screenshots</code> across GUI tools for reproducible visual QA.</li>
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
        <a class="btn btn-primary" href="${$n}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
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
  `}function Yn(){return`
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
  `}function es(){return`
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
  `}const Zt=[{path:"/",navLabel:"Preview & Gallery",seoTitle:"RaggieSoft Installer Studio — v0.4.1 Technical Preview",seoDescription:"Zero-dependency Win32 C++20 Windows installer IDE, MSI compiler, SelectionTree wizard, and offline Help Viewer for x64 and ARM64.",renderBody:Jn},{path:"/roadmap",navLabel:"Roadmap",seoTitle:"Public Engineering Roadmap | RaggieSoft Installer Studio",seoDescription:"Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.4.1 through v1.0 GA across Windows 11 x64 and ARM64.",renderBody:Qn},{path:"/docs",navLabel:"Docs & AI Spec",seoTitle:"Documentation & .rsip v0.4 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.4 project and .rsis suite reference covering Prerequisites, Merge Modules, Components, SelectionTree, and AI /llms.txt specs.",renderBody:Yn},{path:"/changelog",navLabel:"Version History",seoTitle:"Version History & Changelog (v0.4.1) | Installer Studio",seoDescription:"Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.4.1 across Windows 11 x64 and ARM64.",renderBody:Zn},{path:"/vpat",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.",renderBody:Qt},{path:"/accessibility",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:Qt},{path:"/security",navLabel:"Security",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Authenticode signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:es}];function ts(e){const t=Zt.find(n=>n.path===e),i=Zt.filter(n=>!!n.navLabel).map(n=>{const s=n.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${n.path}"${s}>${n.navLabel}</a></li>`}).join(""),r=t?t.renderBody():`
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
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.4.1)</span>
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
      ${r}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Preview &amp; Gallery</a>
          <a href="/roadmap">Public Roadmap</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/changelog">Version History (v0.4.1)</a>
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
        <p class="disclaimer-box">${qn}</p>
      </div>
    </footer>
  `}}const Qe=document.getElementById("app");if(Qe&&Qe.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Qe.innerHTML=ts(e).html}window.Alpine=ho;ho.start();
