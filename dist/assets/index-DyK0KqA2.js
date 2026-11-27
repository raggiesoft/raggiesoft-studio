(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();var dt=!1,ct=!1,H=[],lt=-1,Ne=!1,It=!1;function Ii(e){Ei(e)}function Ti(){It=!0}function Ri(){It=!1,co()}function Ei(e){H.includes(e)||(H.push(e),e._x_schedulerPriority!==void 0&&(Ne=!0)),co()}function Tt(e){let t=H.indexOf(e);t!==-1&&t>lt&&H.splice(t,1)}function co(){if(!ct&&!dt){if(It)return;dt=!0,queueMicrotask(_i)}}function _i(){dt=!1,ct=!0;for(let e=0;e<H.length;e++)Ne&&Di(e),H[e](),lt=e;H.length=0,lt=-1,Ne=!1,ct=!1}function Di(e){let t=new Map,o=H.slice(e).sort((a,i)=>ki(a,i,t));for(let a=0;a<o.length;a++)H[e+a]=o[a];Ne=!1}function ki(e,t,o){return Je(e)?Je(t)?Kt(e._x_schedulerPriority.el,o)-Kt(t._x_schedulerPriority.el,o)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Je(t)?1:0}function Je(e){return e._x_schedulerPriority!==void 0}function Kt(e,t){if(t.has(e))return t.get(e);let o=0,a=e;for(;e;)o++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(a,o),o}var ce,te,le,lo,Pi=0,ut=!0;function Li(e){ut=!1,e(),ut=!0}function Wi(e){ce=e.reactive,le=e.release,te=t=>e.effect(t,{scheduler:o=>{ut?Ii(o):o()}}),lo=e.raw}function Yt(e){te=e}function Hi(e){let t=()=>{};return[(a,i)=>{let s=(i==null?void 0:i.priority)==="structural"?Pi++:void 0,r=te(a);return s!==void 0&&r!==void 0&&(r._x_schedulerPriority={el:e,order:s}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(n=>n())}),e._x_effects.add(r),t=()=>{r!==void 0&&(e._x_effects.delete(r),le(r))},r},()=>{t()}]}function uo(e,t){let o=!0,a,i,s=te(()=>{let r=e(),n=JSON.stringify(r);if(!o&&(typeof r=="object"||r!==a)){let d=typeof a=="object"?JSON.parse(i):a;queueMicrotask(()=>{t(r,d)})}a=r,i=n,o=!1});return()=>{Tt(s),le(s)}}async function Oi(e){Ti();try{await e(),await Promise.resolve()}finally{Ri()}}var po=[],go=[],ho=[];function Fi(e){ho.push(e)}function Rt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,go.push(t))}function mo(e){po.push(e)}function fo(e,t,o){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(o)}function bo(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([o,a])=>{(t===void 0||t.includes(o))&&(a.forEach(i=>i()),delete e._x_attributeCleanups[o])})}function Bi(e){var t,o;for((t=e._x_effects)==null||t.forEach(Tt);(o=e._x_cleanups)!=null&&o.length;)e._x_cleanups.pop()()}var je=new MutationObserver(qe),Et=!1;function _t(){je.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Et=!0}function So(){Ni(),je.disconnect(),Et=!1}var z=[];function Ni(){let e=je.takeRecords();z.push(()=>e.length>0&&qe(e));let t=z.length;queueMicrotask(()=>{if(z.length===t)for(;z.length>0;)z.shift()()})}function zi(){for(;z.length>0;)z.shift()();let e=je.takeRecords();e.length>0&&qe(e)}function b(e){if(!Et)return e();So();try{return e()}finally{_t()}}var Dt=!1,ze=[];function Ui(){Dt=!0}function Gi(){Dt=!1,qe(ze),ze=[]}function qe(e){if(Dt){ze=ze.concat(e);return}let t=[],o=new Set,a=new Map,i=new Map;for(let s=0;s<e.length;s++)if(!e[s].target._x_ignoreMutationObserver&&(e[s].type==="childList"&&(e[s].removedNodes.forEach(r=>{r.nodeType===1&&r._x_marker&&o.add(r)}),e[s].addedNodes.forEach(r=>{if(r.nodeType===1){if(o.has(r)){o.delete(r);return}r._x_marker||t.push(r)}})),e[s].type==="attributes")){let r=e[s].target,n=e[s].attributeName,d=e[s].oldValue,c=()=>{a.has(r)||a.set(r,[]),a.get(r).push({name:n,value:r.getAttribute(n)})},l=()=>{i.has(r)||i.set(r,[]),i.get(r).push(n)};r.hasAttribute(n)&&d===null?c():r.hasAttribute(n)?(l(),c()):l()}i.forEach((s,r)=>{bo(r,s)}),a.forEach((s,r)=>{po.forEach(n=>n(r,s))});for(let s of o)t.some(r=>r.contains(s))||go.forEach(r=>r(s));for(let s of t)s.isConnected&&ho.forEach(r=>r(s));t=null,o=null,a=null,i=null}function yo(e){return K(q(e))}function _e(e,t,o){return e._x_dataStack=[t,...q(o||e)],()=>{e._x_dataStack=e._x_dataStack.filter(a=>a!==t)}}function q(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?q(e.host):e.parentNode?q(e.parentNode):[]}function K(e){return new Proxy({objects:e},Vi)}function vo(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:vo(Object.getPrototypeOf(e),t)}var Vi={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(o=>Object.prototype.hasOwnProperty.call(o,t)||Reflect.has(o,t))},get({objects:e},t,o){return t=="toJSON"?$i:Reflect.get(e.find(a=>Reflect.has(a,t))||{},t,o)},set({objects:e},t,o,a){let i;for(const r of e)if(i=vo(r,t),i)break;i||(i=e[e.length-1]);const s=Object.getOwnPropertyDescriptor(i,t);return s!=null&&s.set&&(s!=null&&s.get)?s.set.call(a,o)||!0:Reflect.set(i,t,o)}};function $i(){return Reflect.ownKeys(this).reduce((t,o)=>(t[o]=Reflect.get(this,o),t),{})}function kt(e,t=()=>{}){let o=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,a=(i,s="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([r,{value:n,enumerable:d}])=>{if(d===!1||n===void 0||typeof n=="object"&&n!==null&&n.__v_skip)return;let c=s===""?r:`${s}.${r}`;typeof n=="object"&&n!==null&&n._x_interceptor?i[r]=n.initialize(e,c,r,t):o(n)&&n!==i&&!(n instanceof Element)&&a(n,c)})};return a(e)}function wo(e,t=()=>{}){let o={initialValue:void 0,_x_interceptor:!0,initialize(a,i,s,r){return e(this.initialValue,()=>ji(a,i),n=>pt(a,i,n),i,s,r)}};return t(o),a=>{if(typeof a=="object"&&a!==null&&a._x_interceptor){let i=o.initialize.bind(o);o.initialize=(s,r,n,d)=>{let c=a.initialize(s,r,n,d);return o.initialValue=c,i(s,r,n,d)}}else o.initialValue=a;return o}}function ji(e,t){return t.split(".").reduce((o,a)=>o[a],e)}function pt(e,t,o){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=o;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),pt(e[t[0]],t.slice(1),o)}}var Co={};function _(e,t){Co[e]=t}function xe(e,t){let o=qi(t);return Object.entries(Co).forEach(([a,i])=>{Object.defineProperty(e,`$${a}`,{get(){return i(t,o)},enumerable:!1})}),e}function qi(e){let[t,o]=Eo(e),a={interceptor:wo,...t};return Rt(e,o),a}function Ki(e,t,o,...a){try{return o(...a)}catch(i){de(i,e,t)}}function de(...e){return xo(...e)}var xo=Zi;function Yi(e){xo=e}function Zi(e,t,o=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:o}),console.warn(`Alpine Expression Error: ${e.message}

${o?'Expression: "'+o+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var ne=!0;function Ao(e){let t=ne;ne=!1;let o=e();return ne=t,o}function V(e,t,o={}){let a;return x(e,t)(i=>a=i,o),a}function x(...e){return Mo(...e)}var Mo=()=>{};function Xi(e){Mo=e}var Io;function Qi(e){Io=e}function Ji(e,t){let o={};xe(o,e);let a=[o,...q(e)],i=typeof t=="function"?ea(a,t):oa(a,t,e);return Ki.bind(null,e,t,i)}function ea(e,t){return(o=()=>{},{scope:a={},params:i=[],context:s}={})=>{if(!ne){Ae(o,t,K([a,...e]),i);return}let r=t.apply(K([a,...e]),i);Ae(o,r)}}var et={};function ta(e,t){if(et[e])return et[e];let o=Object.getPrototypeOf(async function(){}).constructor,a=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,s=(()=>{try{let r=new o(["__self","scope"],`with (scope) { __self.result = ${a} }; __self.finished = true; return __self.result;`);return Object.defineProperty(r,"name",{value:`[Alpine] ${e}`}),r}catch(r){return de(r,t,e),Promise.resolve()}})();return et[e]=s,s}function oa(e,t,o){let a=ta(t,o);return(i=()=>{},{scope:s={},params:r=[],context:n}={})=>{a.result=void 0,a.finished=!1;let d=K([s,...e]);if(typeof a=="function"){let c=a.call(n,a,d).catch(l=>de(l,o,t));a.finished?(Ae(i,a.result,d,r,o),a.result=void 0):c.then(l=>{Ae(i,l,d,r,o)}).catch(l=>de(l,o,t)).finally(()=>a.result=void 0)}}}function Ae(e,t,o,a,i){if(ne&&typeof t=="function"){let s=t.apply(o,a);s instanceof Promise?s.then(r=>Ae(e,r,o,a)).catch(r=>de(r,i,t)):e(s)}else typeof t=="object"&&t instanceof Promise?t.then(s=>e(s)):e(t)}function ia(...e){return Io(...e)}function aa(e,t,o={}){let a={};xe(a,e);let i=[a,...q(e)],s=K([o.scope??{},...i]),r=o.params??[];if(t.includes("await")){let n=Object.getPrototypeOf(async function(){}).constructor,d=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new n(["scope"],`with (scope) { let __result = ${d}; return __result }`).call(o.context,s)}else{let n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${n}; return __result }`).call(o.context,s);return typeof c=="function"&&ne?c.apply(s,r):c}}var Pt="x-";function Y(e=""){return Pt+e}function sa(e){Pt=e}var Ue={};function S(e,t){return Ue[e]=t,{before(o){if(!Ue[o]){console.warn(String.raw`Cannot find directive \`${o}\`. \`${e}\` will use the default order of execution`);return}const a=G.indexOf(o);G.splice(a>=0?a:G.indexOf("DEFAULT"),0,e)}}}function ra(e){return Object.keys(Ue).includes(e)}function Ke(e,t,o){if(t=Array.from(t),e._x_virtualDirectives){let s=Object.entries(e._x_virtualDirectives).map(([n,d])=>({name:n,value:d})),r=To(s);s=s.map(n=>r.find(d=>d.name===n.name)?{name:`x-bind:${n.name}`,value:`"${n.value}"`}:n),t=t.concat(s)}let a={};return t.map(ko((s,r)=>a[s]=r)).filter(Lo).map(ca(a,o)).sort(la).map(s=>da(e,s))}function To(e){return Array.from(e).map(ko()).filter(t=>!Lo(t))}var gt=!1,fe=new Map,Ro=Symbol();function na(e){gt=!0;let t=Symbol();Ro=t,fe.set(t,[]);let o=()=>{for(;fe.get(t).length;)fe.get(t).shift()();fe.delete(t)},a=()=>{gt=!1,o()};e(o),a()}function Eo(e){let t=[],o=n=>t.push(n),[a,i]=Hi(e);return t.push(i),[{Alpine:ue,effect:a,cleanup:o,evaluateLater:x.bind(x,e),evaluate:V.bind(V,e)},()=>t.forEach(n=>n())]}function da(e,t){let o=()=>{},a=Ue[t.type]||o,[i,s]=Eo(e);fo(e,t.original,s);let r=()=>{e._x_ignore||e._x_ignoreSelf||(a.inline&&a.inline(e,t,i),a=a.bind(a,e,t,i),gt?fe.get(Ro).push(a):a())};return r.runCleanups=s,r}var _o=(e,t)=>({name:o,value:a})=>(o.startsWith(e)&&(o=o.replace(e,t)),{name:o,value:a}),Do=e=>e;function ko(e=()=>{}){return({name:t,value:o})=>{let{name:a,value:i}=Po.reduce((s,r)=>r(s),{name:t,value:o});return a!==t&&e(a,t),{name:a,value:i}}}var Po=[];function Lt(e){Po.push(e)}function Lo({name:e}){return Wo().test(e)}var Wo=()=>new RegExp(`^${Pt}([^:^.]+)\\b`);function ca(e,t){return({name:o,value:a})=>{o===a&&(a="");let i=o.match(Wo()),s=o.match(/:([a-zA-Z0-9\-_:]+)/),r=o.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],n=t||e[o]||o;return{type:i?i[1]:null,value:s?s[1]:null,modifiers:r.map(d=>d.replace(".","")),expression:a,original:n}}}var ht="DEFAULT",G=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",ht,"teleport"];function la(e,t){let o=G.indexOf(e.type)===-1?ht:e.type,a=G.indexOf(t.type)===-1?ht:t.type;return G.indexOf(o)-G.indexOf(a)}function Z(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>Z(i,t));return}let o=!1;if(t(e,()=>o=!0),o)return;let a=e.firstElementChild;for(;a;)Z(a,t),a=a.nextElementSibling}var O=!1;function F(e,t=()=>{}){return(...o)=>O?t(...o):e(...o)}function ua(e){return(...t)=>O&&e(...t)}var Ho=[];function De(e){Ho.push(e)}function pa(e,t){Ho.forEach(o=>o(e,t)),O=!0,Oo(()=>{P(t,(o,a)=>{a(o,()=>{})})}),O=!1}var mt=!1;function ga(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),O=!0,mt=!0,Oo(()=>{ha(t)}),O=!1,mt=!1}function ha(e){let t=!1;P(e,(a,i)=>{Z(a,(s,r)=>{if(t&&va(s))return r();t=!0,i(s,r)})})}function Oo(e){let t=te;Yt((o,a)=>{let i=t(o);return le(i),()=>{}}),e(),Yt(t)}var Ye=0;function ma(e,t){let o=e._x_deferInit;o||(o=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},o.ownsIgnore&&(e._x_ignore=!0),Ye++),o.pending++,Promise.resolve(t).catch(a=>{try{de(a,e)}catch(i){setTimeout(()=>{throw i},0)}}).then(()=>fa(e,o))}function fa(e,t){t.pending--,!(t.pending>0)&&(zi(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Ye--,e.isConnected&&(Sa(t),P(e))))}function ba(e,t){if(Ye===0)return!1;let o=T(e,a=>a._x_deferInit);return o?(Fo(o._x_deferInit,e,t.map(({name:a})=>a)),!0):!1}function Fo(e,t,o){let a=e.queuedAttributes.get(t);(!a||a.marker!==t._x_marker)&&(a={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,a)),o.forEach(i=>a.names.add(i))}function Sa(e){e.queuedAttributes.forEach((t,o)=>{if(!o.isConnected||!o._x_marker||o._x_marker!==t.marker)return;let a=T(o,s=>s._x_deferInit);if(a){Fo(a._x_deferInit,o,Array.from(t.names));return}let i=Array.from(t.names).filter(s=>o.hasAttribute(s)).map(s=>({name:s,value:o.getAttribute(s)}));i.length!==0&&Ke(o,i).forEach(s=>s())})}De((e,t)=>{Ye!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||T(e,o=>o._x_deferInit)&&(t._x_ignore=!0))});function be(e,t,o={},a={}){return e.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:!0,composed:!0,cancelable:!0,...a}))}function k(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Zt=!1;function ya(){Zt&&k("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Zt=!0,document.body||k("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),be(document,"alpine:init"),be(document,"alpine:initializing"),_t(),Fi(t=>P(t,Z)),Rt(t=>oe(t)),mo((t,o)=>{ba(t,o)||Ke(t,o).forEach(a=>a())});let e=t=>!Ze(t.parentElement,!0);Array.from(document.querySelectorAll(zo().join(","))).filter(e).forEach(t=>{P(t)}),be(document,"alpine:initialized"),setTimeout(()=>{xa()})}var Wt=[],Bo=[];function No(){return Wt.map(e=>e())}function zo(){return Wt.concat(Bo).map(e=>e())}function Uo(e){Wt.push(e)}function Go(e){Bo.push(e)}function Ze(e,t=!1){return T(e,o=>{if((t?zo():No()).some(i=>o.matches(i)))return!0})}function T(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return T(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return T(e.parentNode.host,t);if(e.parentElement)return T(e.parentElement,t)}}function va(e){return No().some(t=>e.matches(t))}var Vo=[];function wa(e){Vo.push(e)}var Ca=1;function P(e,t=Z,o=()=>{}){T(e,a=>a._x_ignore)||na(()=>{t(e,(a,i)=>{a._x_marker||(o(a,i),Vo.forEach(s=>s(a,i)),Ke(a,a.attributes).forEach(s=>s()),a._x_ignore||(a._x_marker=Ca++),a._x_ignore&&i())})})}function oe(e,t=Z){t(e,o=>{Bi(o),bo(o),delete o._x_marker})}function xa(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,o,a])=>{ra(o)||a.some(i=>{if(document.querySelector(i))return k(`found "${i}", but missing ${t} plugin`),!0})})}var ft=[],Ht=!1;function Ot(e=()=>{}){return queueMicrotask(()=>{Ht||setTimeout(()=>{bt()})}),new Promise(t=>{ft.push(()=>{e(),t()})})}function bt(){for(Ht=!1;ft.length;)ft.shift()()}function Aa(){Ht=!0}function Ft(e,t){return Array.isArray(t)?Xt(e,t.join(" ")):typeof t=="object"&&t!==null?Ma(e,t):typeof t=="function"?Ft(e,t()):Xt(e,t)}function St(e){return e.split(/\s/).filter(Boolean)}function Xt(e,t){let o=i=>St(i).filter(s=>!e.classList.contains(s)).filter(Boolean),a=i=>(e.classList.add(...i),()=>{e.classList.remove(...i)});return t=t===!0?t="":t||"",a(o(t))}function Ma(e,t){let o=Object.entries(t).flatMap(([r,n])=>n?St(r):!1).filter(Boolean),a=Object.entries(t).flatMap(([r,n])=>n?!1:St(r)).filter(Boolean),i=[],s=[];return a.forEach(r=>{e.classList.contains(r)&&(e.classList.remove(r),s.push(r))}),o.forEach(r=>{e.classList.contains(r)||(e.classList.add(r),i.push(r))}),()=>{s.forEach(r=>e.classList.add(r)),i.forEach(r=>e.classList.remove(r))}}function Xe(e,t){return typeof t=="object"&&t!==null?Ia(e,t):Ta(e,t)}function Ia(e,t){let o={};return Object.entries(t).forEach(([a,i])=>{o[a]=e.style[a],a.startsWith("--")||(a=Ra(a)),e.style.setProperty(a,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Xe(e,o)}}function Ta(e,t){let o=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",o||"")}}function Ra(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function yt(e,t=()=>{}){let o=!1;return function(){o?t.apply(this,arguments):(o=!0,e.apply(this,arguments))}}S("transition",(e,{value:t,modifiers:o,expression:a},{evaluate:i})=>{typeof a=="function"&&(a=i(a)),a!==!1&&(!a||typeof a=="boolean"?_a(e,o,t):Ea(e,a,t))});function Ea(e,t,o){$o(e,Ft,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[o](t)}function _a(e,t,o){$o(e,Xe);let a=!t.includes("in")&&!t.includes("out")&&!o,i=a||t.includes("in")||["enter"].includes(o),s=a||t.includes("out")||["leave"].includes(o);t.includes("in")&&!a&&(t=t.filter((v,ae)=>ae<t.indexOf("out"))),t.includes("out")&&!a&&(t=t.filter((v,ae)=>ae>t.indexOf("out")));let r=!t.includes("opacity")&&!t.includes("scale"),n=r||t.includes("opacity"),d=r||t.includes("scale"),c=n?0:1,l=d?he(t,"scale",95)/100:1,u=he(t,"delay",0)/1e3,f=he(t,"origin","center"),g="opacity, transform",C=he(t,"duration",150)/1e3,p=he(t,"duration",75)/1e3,y="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:f,transitionDelay:`${u}s`,transitionProperty:g,transitionDuration:`${C}s`,transitionTimingFunction:y},e._x_transition.enter.start={opacity:c,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(e._x_transition.leave.during={transformOrigin:f,transitionDelay:`${u}s`,transitionProperty:g,transitionDuration:`${p}s`,transitionTimingFunction:y},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${l})`})}function $o(e,t,o={}){e._x_transition||(e._x_transition={enter:{during:o,start:o,end:o},leave:{during:o,start:o,end:o},in(a=()=>{},i=()=>{}){vt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},a,i)},out(a=()=>{},i=()=>{}){vt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},a,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,o,a){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>i(o);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(o):s():e._x_transition?e._x_transition.in(o):s();return}e._x_hidePromise=e._x_transition?new Promise((r,n)=>{e._x_transition.out(()=>{},()=>r(a)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>n({isFromCancelledTransition:!0}))}):Promise.resolve(a),queueMicrotask(()=>{let r=jo(e);r?(r._x_hideChildren||(r._x_hideChildren=[]),r._x_hideChildren.push(e)):i(()=>{let n=d=>{let c=Promise.all([d._x_hidePromise,...(d._x_hideChildren||[]).map(n)]).then(([l])=>l==null?void 0:l());return delete d._x_hidePromise,delete d._x_hideChildren,c};n(e).catch(d=>{if(!d.isFromCancelledTransition)throw d})})})};function jo(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:jo(t)}function vt(e,t,{during:o,start:a,end:i}={},s=()=>{},r=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(o).length===0&&Object.keys(a).length===0&&Object.keys(i).length===0){s(),r();return}let n,d,c;Da(e,{start(){n=t(e,a)},during(){d=t(e,o)},before:s,end(){n(),c=t(e,i)},after:r,cleanup(){d(),c()}})}function Da(e,t){let o,a,i,s=yt(()=>{b(()=>{o=!0,a||t.before(),i||(t.end(),bt()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(r){this.beforeCancels.push(r)},cancel:yt(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},b(()=>{t.start(),t.during()}),Aa(),requestAnimationFrame(()=>{if(o)return;let r=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,n=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;r===0&&(r=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),b(()=>{t.before()}),a=!0,requestAnimationFrame(()=>{o||(b(()=>{t.end()}),bt(),setTimeout(e._x_transitioning.finish,r+n),i=!0)})})}function he(e,t,o){if(e.indexOf(t)===-1)return o;const a=e[e.indexOf(t)+1];if(!a||t==="scale"&&isNaN(a))return o;if(t==="duration"||t==="delay"){let i=a.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[a,e[e.indexOf(t)+2]].join(" "):a}function qo(e,t,o,a=[]){switch(e._x_bindings||(e._x_bindings=ce({})),e._x_bindings[t]=o,t=a.includes("camel")?Ba(t):t,t){case"value":ka(e,o);break;case"style":La(e,o);break;case"class":Pa(e,o);break;case"selected":case"checked":Wa(e,t,o);break;default:Bt(e,t,o);break}}function ka(e,t){if(Nt(e))e.attributes.value===void 0&&(e.value=t);else if(Ge(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(o=>Na(o,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Fa(e,t);else if(e.tagName==="OPTION")Bt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function Pa(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Ft(e,t)}function La(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Xe(e,t)}function Wa(e,t,o){Bt(e,t,o),Oa(e,t,o)}function Bt(e,t,o){[null,void 0,!1].includes(o)&&Ua(t)?e.removeAttribute(t):(Ko(t)&&(o=t),Ga(o)&&(o=JSON.stringify(o)),Ha(e,t,o))}function Ha(e,t,o){e.getAttribute(t)!=o&&e.setAttribute(t,o)}function Oa(e,t,o){e[t]!==o&&(e[t]=o)}function Fa(e,t){const o=[].concat(t).map(a=>a+"");Array.from(e.options).forEach(a=>{a.selected=o.includes(a.value)})}function Ba(e){return e.toLowerCase().replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function Na(e,t){return e==t}function Fe(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var za=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Ko(e){return za.has(e)}function Ua(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Ga(e){return typeof e=="object"&&e!==null}function Va(e,t,o){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Yo(e,t,o)}function $a(e,t,o,a=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=a,Ao(()=>V(e,i.expression))}return Yo(e,t,o)}function Yo(e,t,o){let a=e.getAttribute(t);return a===null?typeof o=="function"?o():o:a===""?!0:Ko(t)?!![t,"true"].includes(a):a}function Ge(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Nt(e){return e.type==="radio"||e.localName==="ui-radio"}function Zo(e,t){let o;return function(){const a=this,i=arguments,s=function(){o=null,e.apply(a,i)};clearTimeout(o),o=setTimeout(s,t)}}function Xo(e,t){let o;return function(){let a=this,i=arguments;o||(e.apply(a,i),o=!0,setTimeout(()=>o=!1,t))}}function Qo({get:e,set:t},{get:o,set:a}){let i=!0,s,r=te(()=>{let n=e(),d=o();if(i)a(tt(n)),i=!1;else{let c=JSON.stringify(n),l=JSON.stringify(d);c!==s?a(tt(n)):c!==l&&t(tt(d))}s=JSON.stringify(e()),JSON.stringify(o())});return()=>{Tt(r),le(r)}}function tt(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function ja(e){(Array.isArray(e)?e:[e]).forEach(o=>o(ue))}var W={},Qt=!1;function qa(e,t){if(Qt||(W=ce(W),Qt=!0),t===void 0)return W[e];W[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?W[e]=t.initialize(W,e,e,()=>{}):kt(W[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&W[e].init()}function Ka(){return W}var Jo={};function Ya(e,t){let o=typeof t!="function"?()=>t:t;return e instanceof Element?ei(e,o()):(Jo[e]=o,()=>{})}function Za(e){return Object.entries(Jo).forEach(([t,o])=>{Object.defineProperty(e,t,{get(){return(...a)=>o(...a)}})}),e}function ei(e,t,o){let a=[];for(;a.length;)a.pop()();let i=Object.entries(t).map(([r,n])=>({name:r,value:n})),s=To(i);return i=i.map(r=>s.find(n=>n.name===r.name)?{name:`x-bind:${r.name}`,value:`"${r.value}"`}:r),Ke(e,i,o).map(r=>{a.push(r.runCleanups),r()}),()=>{for(;a.length;)a.pop()()}}var ti={};function Xa(e,t){ti[e]=t}function Qa(e,t){return Object.entries(ti).forEach(([o,a])=>{Object.defineProperty(e,o,{get(){return(...i)=>a.bind(t)(...i)},enumerable:!1})}),e}var Ja={get reactive(){return ce},get release(){return le},get effect(){return te},get raw(){return lo},get transaction(){return Oi},version:"3.17.5",flushAndStopDeferringMutations:Gi,dontAutoEvaluateFunctions:Ao,disableEffectScheduling:Li,startObservingMutations:_t,stopObservingMutations:So,setReactivityEngine:Wi,onAttributeRemoved:fo,onAttributesAdded:mo,closestDataStack:q,skipDuringClone:F,onlyDuringClone:ua,addRootSelector:Uo,addInitSelector:Go,setErrorHandler:Yi,interceptClone:De,addScopeToNode:_e,deferMutations:Ui,mapAttributes:Lt,evaluateLater:x,interceptInit:wa,initInterceptors:kt,injectMagics:xe,setEvaluator:Xi,setRawEvaluator:Qi,mergeProxies:K,extractProp:$a,findClosest:T,onElRemoved:Rt,closestRoot:Ze,destroyTree:oe,interceptor:wo,transition:vt,setStyles:Xe,mutateDom:b,deferInit:ma,directive:S,entangle:Qo,throttle:Xo,debounce:Zo,evaluate:V,evaluateRaw:ia,initTree:P,nextTick:Ot,prefixed:Y,prefix:sa,plugin:ja,magic:_,store:qa,start:ya,clone:ga,cloneNode:pa,bound:Va,$data:yo,watch:uo,walk:Z,data:Xa,bind:Ya},ue=Ja;function es(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}var Me=Object.assign,ts=Object.prototype.hasOwnProperty,wt=(e,t)=>ts.call(e,t),Ie=Array.isArray,Se=e=>oi(e)==="[object Map]",os=e=>typeof e=="string",ke=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",is=Object.prototype.toString,oi=e=>is.call(e),ii=e=>oi(e).slice(8,-1),zt=e=>os(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,as=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},ss=as(e=>e.charAt(0).toUpperCase()+e.slice(1)),U=(e,t)=>!Object.is(e,t);function X(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var h,ot=new WeakSet,Jt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ot.has(this)&&(ot.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eo(this),si(this);const e=h,t=E;h=this,E=!0;try{return this.fn()}finally{h!==this&&X("Active effect was not restored correctly - this is likely a Vue internal bug."),ri(this),h=e,E=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vt(e);this.deps=this.depsTail=void 0,eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ot.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ct(this)&&this.run()}get dirty(){return Ct(this)}},ai=0,ye,ve;function rs(e,t=!1){if(e.flags|=8,t){e.next=ve,ve=e;return}e.next=ye,ye=e}function Ut(){ai++}function Gt(){if(--ai>0)return;if(ve){let t=ve;for(ve=void 0;t;){const o=t.next;t.next=void 0,t.flags&=-9,t=o}}let e;for(;ye;){let t=ye;for(ye=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=o}}if(e)throw e}function si(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ri(e){let t,o=e.depsTail,a=o;for(;a;){const i=a.prevDep;a.version===-1?(a===o&&(o=i),Vt(a),ds(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=i}e.deps=t,e.depsTail=o}function Ct(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ns(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ns(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ve)||(e.globalVersion=Ve,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ct(e))))return;e.flags|=2;const t=e.dep,o=h,a=E;h=e,E=!0;try{si(e);const i=e.fn(e._value);(t.version===0||U(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{h=o,E=a,ri(e),e.flags&=-3}}function Vt(e,t=!1){const{dep:o,prevSub:a,nextSub:i}=e;if(a&&(a.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=a,e.nextSub=void 0),o.subsHead===e&&(o.subsHead=i),o.subs===e&&(o.subs=a,!a&&o.computed)){o.computed.flags&=-5;for(let s=o.computed.deps;s;s=s.nextDep)Vt(s,!0)}!t&&!--o.sc&&o.map&&o.map.delete(o.key)}function ds(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}function cs(e,t){e.effect instanceof Jt&&(e=e.effect.fn);const o=new Jt(e);t&&Me(o,t);try{o.run()}catch(i){throw o.stop(),i}const a=o.run.bind(o);return a.effect=o,a}function ls(e){e.effect.stop()}var E=!0,ni=[];function us(){ni.push(E),E=!1}function ps(){const e=ni.pop();E=e===void 0?!0:e}function eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=h;h=void 0;try{t()}finally{h=o}}}var Ve=0,gs=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},hs=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!h||!E||h===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==h)t=this.activeLink=new gs(h,this),h.deps?(t.prevDep=h.depsTail,h.depsTail.nextDep=t,h.depsTail=t):h.deps=h.depsTail=t,di(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=h.depsTail,t.nextDep=void 0,h.depsTail.nextDep=t,h.depsTail=t,h.deps===t&&(h.deps=o)}return h.onTrack&&h.onTrack(Me({effect:h},e)),t}trigger(e){this.version++,Ve++,this.notify(e)}notify(e){Ut();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(Me({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gt()}}};function di(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)di(a)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var xt=new WeakMap,$=Symbol("Object iterate"),At=Symbol("Map keys iterate"),Re=Symbol("Array iterate");function M(e,t,o){if(E&&h){let a=xt.get(e);a||xt.set(e,a=new Map);let i=a.get(o);i||(a.set(o,i=new hs),i.map=a,i.key=o),i.track({target:e,type:t,key:o})}}function B(e,t,o,a,i,s){const r=xt.get(e);if(!r){Ve++;return}const n=d=>{d&&d.trigger({target:e,type:t,key:o,newValue:a,oldValue:i,oldTarget:s})};if(Ut(),t==="clear")r.forEach(n);else{const d=Ie(e),c=d&&zt(o);if(d&&o==="length"){const l=Number(a);r.forEach((u,f)=>{(f==="length"||f===Re||!ke(f)&&f>=l)&&n(u)})}else switch((o!==void 0||r.has(void 0))&&n(r.get(o)),c&&n(r.get(Re)),t){case"add":d?c&&n(r.get("length")):(n(r.get($)),Se(e)&&n(r.get(At)));break;case"delete":d||(n(r.get($)),Se(e)&&n(r.get(At)));break;case"set":Se(e)&&n(r.get($));break}}Gt()}function se(e){const t=m(e);return t===e?t:(M(t,"iterate",Re),J(e)?t:t.map(ee))}function $t(e){return M(e=m(e),"iterate",Re),e}function D(e,t){return Q(e)?mi(e)?Ee(ee(t)):Ee(t):ee(t)}var ms={__proto__:null,[Symbol.iterator](){return it(this,Symbol.iterator,e=>D(this,e))},concat(...e){return se(this).concat(...e.map(t=>Ie(t)?se(t):t))},entries(){return it(this,"entries",e=>(e[1]=D(this,e[1]),e))},every(e,t){return L(this,"every",e,t,void 0,arguments)},filter(e,t){return L(this,"filter",e,t,o=>o.map(a=>D(this,a)),arguments)},find(e,t){return L(this,"find",e,t,o=>D(this,o),arguments)},findIndex(e,t){return L(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return L(this,"findLast",e,t,o=>D(this,o),arguments)},findLastIndex(e,t){return L(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return L(this,"forEach",e,t,void 0,arguments)},includes(...e){return at(this,"includes",e)},indexOf(...e){return at(this,"indexOf",e)},join(e){return se(this).join(e)},lastIndexOf(...e){return at(this,"lastIndexOf",e)},map(e,t){return L(this,"map",e,t,void 0,arguments)},pop(){return me(this,"pop")},push(...e){return me(this,"push",e)},reduce(e,...t){return to(this,"reduce",e,t)},reduceRight(e,...t){return to(this,"reduceRight",e,t)},shift(){return me(this,"shift")},some(e,t){return L(this,"some",e,t,void 0,arguments)},splice(...e){return me(this,"splice",e)},toReversed(){return se(this).toReversed()},toSorted(e){return se(this).toSorted(e)},toSpliced(...e){return se(this).toSpliced(...e)},unshift(...e){return me(this,"unshift",e)},values(){return it(this,"values",e=>D(this,e))}};function it(e,t,o){const a=$t(e),i=a[t]();return a!==e&&!J(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=o(s.value)),s}),i}var fs=Array.prototype;function L(e,t,o,a,i,s){const r=$t(e),n=r!==e&&!J(e),d=r[t];if(d!==fs[t]){const u=d.apply(e,s);return n?ee(u):u}let c=o;r!==e&&(n?c=function(u,f){return o.call(this,D(e,u),f,e)}:o.length>2&&(c=function(u,f){return o.call(this,u,f,e)}));const l=d.call(r,c,a);return n&&i?i(l):l}function to(e,t,o,a){const i=$t(e),s=i!==e&&!J(e);let r=o,n=!1;i!==e&&(s?(n=a.length===0,r=function(c,l,u){return n&&(n=!1,c=D(e,c)),o.call(this,c,D(e,l),u,e)}):o.length>3&&(r=function(c,l,u){return o.call(this,c,l,u,e)}));const d=i[t](r,...a);return n?D(e,d):d}function at(e,t,o){const a=m(e);M(a,"iterate",Re);const i=a[t](...o);return(i===-1||i===!1)&&_s(o[0])?(o[0]=m(o[0]),a[t](...o)):i}function me(e,t,o=[]){us(),Ut();const a=m(e)[t].apply(e,o);return Gt(),ps(),a}var bs=es("__proto__,__v_isRef,__isVue"),ci=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ke));function Ss(e){ke(e)||(e=String(e));const t=m(this);return M(t,"has",e),t.hasOwnProperty(e)}var li=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,o){if(t==="__v_skip")return e.__v_skip;const a=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return i;if(t==="__v_raw")return o===(a?i?Rs:gi:i?Ts:pi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const s=Ie(e);if(!a){let n;if(s&&(n=ms[t]))return n;if(t==="hasOwnProperty")return Ss}const r=Reflect.get(e,t,we(e)?e:o);if((ke(t)?ci.has(t):bs(t))||(a||M(e,"get",t),i))return r;if(we(r)){const n=s&&zt(t)?r:r.value;return a&&Te(n)?Mt(n):n}return Te(r)?a?Mt(r):jt(r):r}},ys=class extends li{constructor(e=!1){super(!1,e)}set(e,t,o,a){let i=e[t];const s=Ie(e)&&zt(t);if(!this._isShallow){const d=Q(i);if(!J(o)&&!Q(o)&&(i=m(i),o=m(o)),!s&&we(i)&&!we(o))return d?(X(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(i.value=o,!0)}const r=s?Number(t)<e.length:wt(e,t),n=Reflect.set(e,t,o,we(e)?e:a);return e===m(a)&&n&&(r?U(o,i)&&B(e,"set",t,o,i):B(e,"add",t,o)),n}deleteProperty(e,t){const o=wt(e,t),a=e[t],i=Reflect.deleteProperty(e,t);return i&&o&&B(e,"delete",t,void 0,a),i}has(e,t){const o=Reflect.has(e,t);return(!ke(t)||!ci.has(t))&&M(e,"has",t),o}ownKeys(e){return M(e,"iterate",Ie(e)?"length":$),Reflect.ownKeys(e)}},vs=class extends li{constructor(e=!1){super(!0,e)}set(e,t){return X(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return X(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},ws=new ys,Cs=new vs,Le=e=>Reflect.getPrototypeOf(e);function xs(e,t,o){return function(...a){const i=this.__v_raw,s=m(i),r=Se(s),n=e==="entries"||e===Symbol.iterator&&r,d=e==="keys"&&r,c=i[e](...a),l=t?Ee:ee;return!t&&M(s,"iterate",d?At:$),Me(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:n?[l(u[0]),l(u[1])]:l(u),done:f}}})}}function We(e){return function(...t){{const o=t[0]?`on key "${t[0]}" `:"";X(`${ss(e)} operation ${o}failed: target is readonly.`,m(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function As(e,t){const o={get(i){const s=this.__v_raw,r=m(s),n=m(i);e||(U(i,n)&&M(r,"get",i),M(r,"get",n));const{has:d}=Le(r),c=e?Ee:ee;if(d.call(r,i))return c(s.get(i));if(d.call(r,n))return c(s.get(n));s!==r&&s.get(i)},get size(){const i=this.__v_raw;return!e&&M(m(i),"iterate",$),i.size},has(i){const s=this.__v_raw,r=m(s),n=m(i);return e||(U(i,n)&&M(r,"has",i),M(r,"has",n)),i===n?s.has(i):s.has(i)||s.has(n)},forEach(i,s){const r=this,n=r.__v_raw,d=m(n),c=e?Ee:ee;return!e&&M(d,"iterate",$),n.forEach((l,u)=>i.call(s,c(l),c(u),r))}};return Me(o,e?{add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear")}:{add(i){const s=m(this),r=Le(s),n=m(i),d=!J(i)&&!Q(i)?n:i;return r.has.call(s,d)||U(i,d)&&r.has.call(s,i)||U(n,d)&&r.has.call(s,n)||(s.add(d),B(s,"add",d,d)),this},set(i,s){!J(s)&&!Q(s)&&(s=m(s));const r=m(this),{has:n,get:d}=Le(r);let c=n.call(r,i);c?oo(r,n,i):(i=m(i),c=n.call(r,i));const l=d.call(r,i);return r.set(i,s),c?U(s,l)&&B(r,"set",i,s,l):B(r,"add",i,s),this},delete(i){const s=m(this),{has:r,get:n}=Le(s);let d=r.call(s,i);d?oo(s,r,i):(i=m(i),d=r.call(s,i));const c=n?n.call(s,i):void 0,l=s.delete(i);return d&&B(s,"delete",i,void 0,c),l},clear(){const i=m(this),s=i.size!==0,r=Se(i)?new Map(i):new Set(i),n=i.clear();return s&&B(i,"clear",void 0,void 0,r),n}}),["keys","values","entries",Symbol.iterator].forEach(i=>{o[i]=xs(i,e)}),o}function ui(e,t){const o=As(e);return(a,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(wt(o,i)&&i in a?o:a,i,s)}var Ms={get:ui(!1)},Is={get:ui(!0)};function oo(e,t,o){const a=m(o);if(a!==o&&t.call(e,a)){const i=ii(e);X(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var pi=new WeakMap,Ts=new WeakMap,gi=new WeakMap,Rs=new WeakMap;function Es(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jt(e){return Q(e)?e:hi(e,!1,ws,Ms,pi)}function Mt(e){return hi(e,!0,Cs,Is,gi)}function hi(e,t,o,a,i){if(!Te(e))return X(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const r=Es(ii(e));if(r===0)return e;const n=new Proxy(e,r===2?a:o);return i.set(e,n),n}function mi(e){return Q(e)?mi(e.__v_raw):!!(e&&e.__v_isReactive)}function Q(e){return!!(e&&e.__v_isReadonly)}function J(e){return!!(e&&e.__v_isShallow)}function _s(e){return e?!!e.__v_raw:!1}function m(e){const t=e&&e.__v_raw;return t?m(t):e}var ee=e=>Te(e)?jt(e):e,Ee=e=>Te(e)?Mt(e):e;function we(e){return e?e.__v_isRef===!0:!1}_("nextTick",()=>Ot);_("dispatch",e=>be.bind(be,e));_("watch",(e,{evaluateLater:t,cleanup:o})=>(a,i)=>{let s=t(a),n=uo(()=>{let d;return s(c=>d=c),d},i);o(n)});_("store",Ka);_("data",e=>yo(e));_("root",e=>Ze(e));_("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=K(Ds(e))),e._x_refs_proxy));function Ds(e){let t=[];return T(e,o=>{o._x_refs&&t.push(o._x_refs)}),t}var st={};function fi(e){return st[e]||(st[e]=0),++st[e]}function ks(e,t){return T(e,o=>{if(o._x_ids&&o._x_ids[t])return!0})}function Ps(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=fi(t))}_("id",(e,{cleanup:t})=>(o,a=null)=>{let i=`${o}${a?`-${a}`:""}`;return Ls(e,i,t,()=>{let s=ks(e,o),r=s?s._x_ids[o]:fi(o);return a?`${o}-${r}-${a}`:`${o}-${r}`})});De((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Ls(e,t,o,a){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let i=a();return e._x_id[t]=i,o(()=>{delete e._x_id[t]}),i}_("el",e=>e);bi("Focus","focus","focus");bi("Persist","persist","persist");function bi(e,t,o){_(t,a=>k(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${o}`,a))}S("modelable",(e,{expression:t},{effect:o,evaluateLater:a,cleanup:i})=>{let s=a(t),r=()=>{let l;return s(u=>l=u),l},n=a(`${t} = __placeholder`),d=l=>n(()=>{},{scope:{__placeholder:l}}),c=r();d(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.setWithModifiers,f=Qo({get(){return l()},set(g){u(g)}},{get(){return r()},set(g){d(g)}});i(f)})});S("teleport",(e,{modifiers:t,expression:o},{cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&k("x-teleport can only be used on a <template> tag",e);let i=io(o),s=e.content.cloneNode(!0).firstElementChild;e._x_teleport=s,s._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(n=>{s.addEventListener(n,d=>{d.stopPropagation(),e.dispatchEvent(new d.constructor(d.type,d))})}),_e(s,{},e);let r=(n,d,c)=>{c.includes("prepend")?d.parentNode.insertBefore(n,d):c.includes("append")?d.parentNode.insertBefore(n,d.nextSibling):d.appendChild(n)};b(()=>{F(()=>{r(s,i,t),P(s)})()}),e._x_teleportPutBack=()=>{let n=io(o);b(()=>{r(e._x_teleport,n,t)})},a(()=>b(()=>{s.remove(),oe(s)}))});var Ws=document.createElement("div");function io(e){let t=F(()=>document.querySelector(e),()=>Ws)();return t||k(`Cannot find x-teleport element for selector: "${e}"`),t}var Si=()=>{};Si.inline=(e,{modifiers:t},{cleanup:o})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,o(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};S("ignore",Si);S("effect",F((e,{expression:t},{effect:o})=>{o(x(e,t))}));function re(e,t,o,a){let i=e,s=d=>a(d),r={},n=(d,c)=>l=>c(d,l);return o.includes("dot")&&(t=Hs(t)),o.includes("camel")&&(t=Os(t)),o.includes("capture")&&(r.capture=!0),o.includes("window")&&(i=window),o.includes("document")&&(i=document),o.includes("passive")&&(r.passive=o[o.indexOf("passive")+1]!=="false"),s=yi(o,s),o.includes("prevent")&&(s=n(s,(d,c)=>{c.preventDefault(),d(c)})),o.includes("stop")&&(s=n(s,(d,c)=>{c.stopPropagation(),d(c)})),o.includes("once")&&(s=n(s,(d,c)=>{d(c),i.removeEventListener(t,s,r)})),(o.includes("away")||o.includes("outside"))&&(i=document,s=n(s,(d,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&d(c))})),o.includes("self")&&(s=n(s,(d,c)=>{c.target===e&&d(c)})),t==="submit"&&(s=n(s,(d,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(l=>l()),d(c)})),(Bs(t)||vi(t))&&(s=n(s,(d,c)=>{zs(c,o)||d(c)})),i.addEventListener(t,s,r),()=>{i.removeEventListener(t,s,r)}}function yi(e,t){if(e.includes("debounce")){let o=e[e.indexOf("debounce")+1]||"invalid-wait",a=$e(o.split("ms")[0])?Number(o.split("ms")[0]):250;t=Zo(t,a)}if(e.includes("throttle")){let o=e[e.indexOf("throttle")+1]||"invalid-wait",a=$e(o.split("ms")[0])?Number(o.split("ms")[0]):250;t=Xo(t,a)}return t}function Hs(e){return e.replace(/-/g,".")}function Os(e){return e.toLowerCase().replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function $e(e){return!Array.isArray(e)&&!isNaN(e)}function Fs(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Bs(e){return["keydown","keyup"].includes(e)}function vi(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Ns=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function zs(e,t){let o=t.filter((s,r)=>s==="false"&&t[r-1]==="passive"?!1:!Ns.includes(s));if(o.includes("debounce")){let s=o.indexOf("debounce");o.splice(s,$e((o[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(o.includes("throttle")){let s=o.indexOf("throttle");o.splice(s,$e((o[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(o.length===0||o.length===1&&ao(e.key).includes(o[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(s=>o.includes(s));return o=o.filter(s=>!i.includes(s)),!(i.length>0&&i.filter(r=>((r==="cmd"||r==="super")&&(r="meta"),e[`${r}Key`])).length===i.length&&(vi(e.type)||ao(e.key).includes(o[0])))}function ao(e){if(!e)return[];e=Fs(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(o=>{if(t[o]===e)return o}).filter(o=>o)}S("model",(e,{modifiers:t,expression:o},{effect:a,cleanup:i})=>{let s=e;t.includes("parent")&&(s=T(e,p=>p!==e));let r=x(s,o),n;typeof o=="string"?n=x(s,`${o} = __placeholder`):typeof o=="function"&&typeof o()=="string"?n=x(s,`${o()} = __placeholder`):n=()=>{};let d=()=>{let p;return r(y=>p=y),so(p)?p.get():p},c=p=>{let y;r(v=>y=v),so(y)?y.set(p):n(()=>{},{scope:{__placeholder:p}})};typeof o=="string"&&e.type==="radio"&&b(()=>{e.hasAttribute("name")||e.setAttribute("name",o)});let l=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),f=t.includes("enter"),g=l||u||f,C;if(O)C=()=>{};else if(g){let p=[],y=v=>c(He(e,t,v,d()));if(l&&p.push(re(e,"change",t,y)),u&&(p.push(re(e,"blur",t,y)),e.form)){let v=e.form,ae=()=>y({target:e});v._x_pendingModelUpdates||(v._x_pendingModelUpdates=[]),v._x_pendingModelUpdates.push(ae),i(()=>{v._x_pendingModelUpdates&&v._x_pendingModelUpdates.splice(v._x_pendingModelUpdates.indexOf(ae),1)})}f&&p.push(re(e,"keydown",t,v=>{v.key==="Enter"&&y(v)})),C=()=>p.forEach(v=>v())}else{let p=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";C=re(e,p,t,y=>{c(He(e,t,y,d()))})}if(t.includes("fill")&&([void 0,null,""].includes(d())||Ge(e)&&Array.isArray(d())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(He(e,t,{target:e},d())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=C,i(()=>e._x_removeModelListeners.default()),e.form){let p=re(e.form,"reset",[],y=>{Ot(()=>e._x_model&&e._x_model.set(He(e,t,{target:e},d())))});i(()=>p())}if(e._x_model={get(){return d()},set(p){c(p)},setWithModifiers:yi(t,c)},e._x_forceModelUpdate=p=>{p===void 0&&typeof o=="string"&&o.match(/\./)&&(p=""),b(()=>{Ge(e)?Array.isArray(p)?e.checked=p.some(y=>y==e.value):e.checked=!!p:Nt(e)?typeof p=="boolean"?e.checked=Fe(e.value)===p:e.checked=e.value==p:qo(e,"value",p)})},e.tagName==="SELECT"){let p=new MutationObserver(()=>{e._x_forceModelUpdate(d())});p.observe(e,{childList:!0}),i(()=>p.disconnect())}a(()=>{let p=d();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(p)})});function He(e,t,o,a){return b(()=>{if(o instanceof CustomEvent&&o.detail!==void 0)return o.detail!==null&&o.detail!==void 0?o.detail:o.target.value;if(Ge(e))if(Array.isArray(a)){let i=null;return t.includes("number")?i=rt(o.target.value):t.includes("boolean")?i=Fe(o.target.value):i=o.target.value,o.target.checked?a.includes(i)?a:a.concat([i]):a.filter(s=>!Us(s,i))}else return o.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(o.target.selectedOptions).map(i=>{let s=i.value||i.text;return rt(s)}):t.includes("boolean")?Array.from(o.target.selectedOptions).map(i=>{let s=i.value||i.text;return Fe(s)}):Array.from(o.target.selectedOptions).map(i=>i.value||i.text);{let i;return Nt(e)?o.target.checked?i=o.target.value:i=a:i=o.target.value,t.includes("number")?rt(i):t.includes("boolean")?Fe(i):t.includes("trim")?i.trim():i}}})}function rt(e){let t=e?parseFloat(e):null;return Gs(t)?t:e}function Us(e,t){return e==t}function Gs(e){return!Array.isArray(e)&&!isNaN(e)}function so(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}S("cloak",e=>{if(O)return e.removeAttribute(Y("cloak"));queueMicrotask(()=>b(()=>e.removeAttribute(Y("cloak"))))});Go(()=>`[${Y("init")}]`);S("init",F((e,{expression:t},{evaluate:o})=>typeof t=="string"?!!t.trim()&&o(t,{},!1):o(t,{},!1)));S("text",(e,{expression:t},{effect:o,evaluateLater:a})=>{let i=a(t);o(()=>{i(s=>{b(()=>{e.textContent=s})})})});S("html",(e,{expression:t},{effect:o,evaluateLater:a})=>{let i=a(t);o(()=>{i(s=>{b(()=>{Array.from(e.children).forEach(r=>oe(r)),e.innerHTML=s??"",e._x_ignoreSelf=!0,P(e),delete e._x_ignoreSelf})})},{priority:"structural"})});Lt(_o(":",Do(Y("bind:"))));var wi=(e,{value:t,modifiers:o,expression:a,original:i},{effect:s,cleanup:r})=>{if(!t){let d={};Za(d),x(e,a)(l=>{ei(e,l,i)},{scope:d});return}if(t==="key")return Vs(e,a);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let n=x(e,a);s(()=>n(d=>{d===void 0&&typeof a=="string"&&a.match(/\./)&&(d=""),b(()=>qo(e,t,d,o))})),r(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};wi.inline=(e,{value:t,modifiers:o,expression:a})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:a,extract:!1})};S("bind",wi);function Vs(e,t){e._x_keyExpression=t}Uo(()=>`[${Y("data")}]`);var N=Symbol();S("data",(e,{expression:t},{cleanup:o})=>{if(js(e))return;let a=e[N];if((a==null?void 0:a.expression)===t)return;t=t===""?"{}":t;let i={};xe(i,e);let s={};Qa(s,i);let r=V(e,t,{scope:s});(r===void 0||r===!0)&&(r={}),xe(r,e);let n;if(a!=null&&a.reactiveData){n=a.reactiveData,$s(n,r);let c={expression:t};e[N]=c,queueMicrotask(()=>{e[N]===c&&delete e[N]})}else n=ce(r);kt(n,o);let d=_e(e,n);F(()=>{n.init&&V(e,n.init)})(),o(()=>{n.destroy&&V(e,n.destroy),d();let c={reactiveData:n};e[N]=c,queueMicrotask(()=>{e[N]===c&&delete e[N]})})});function $s(e,t){Object.keys(t).forEach(o=>{let a=Object.getOwnPropertyDescriptor(t,o),i=Object.getOwnPropertyDescriptor(e,o);a.get||a.set||i!=null&&i.get||i!=null&&i.set?(i&&delete e[o],i||(e[o]=void 0),a.get||a.set?Object.defineProperty(e,o,a):e[o]=t[o]):e[o]=t[o]}),Object.keys(e).filter(o=>!Object.prototype.hasOwnProperty.call(t,o)).forEach(o=>delete e[o])}De((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function js(e){return O?mt?!0:e.hasAttribute("data-has-alpine-state"):!1}S("show",(e,{modifiers:t,expression:o},{effect:a})=>{let i=x(e,o);e._x_doHide||(e._x_doHide=()=>{b(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{b(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let s=()=>{e._x_doHide(),e._x_isShown=!1},r=()=>{e._x_doShow(),e._x_isShown=!0},n=()=>setTimeout(r),d=yt(u=>u?r():s(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,r,s):u?n():s()}),c,l=!0;a(()=>i(u=>{!l&&u===c||(t.includes("immediate")&&(u?n():s()),d(u),c=u,l=!1)}))});S("for",F((e,{expression:t},{effect:o,cleanup:a})=>{let i=Ys(t),s=x(e,i.items),r=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,o(()=>Ks(e,i,s,r),{priority:"structural"}),a(()=>{e._x_lookup.forEach(n=>b(()=>{oe(n),n.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function qs(e){return t=>{Object.entries(t).forEach(([o,a])=>{e[o]=a})}}function Ks(e,t,o,a){o(i=>{Xs(i)&&(i=Array.from({length:i},(c,l)=>l+1)),i==null&&(i=[]),i instanceof Set&&(i=Array.from(i)),i instanceof Map&&(i=Array.from(i));let s=e._x_lookup,r=new Map;e._x_lookup=r;let n=Qs(i),d=Object.entries(i).map(([c,l])=>{n||(c=parseInt(c));let u=Zs(t,l,c,i),f;return a(g=>{typeof g=="object"&&k("x-for key cannot be an object, it must be a string or an integer",e),s.has(g)&&(r.set(g,s.get(g)),s.delete(g)),f=g},{scope:{index:c,...u}}),[f,u]});b(()=>{s.forEach(u=>{oe(u),u.remove()});let c=new Set,l=e;d.forEach(([u,f])=>{if(r.has(u)){let p=r.get(u);p._x_refreshXForScope(f),l.nextElementSibling!==p&&(l.nextElementSibling&&p.replaceWith(l.nextElementSibling),l.after(p)),l=p,p._x_currentIfEl&&(p.nextElementSibling!==p._x_currentIfEl&&l.after(p._x_currentIfEl),l=p._x_currentIfEl);return}e.content.children.length>1&&k("x-for templates require a single root element, additional elements will be ignored.",e);let g=document.importNode(e.content,!0).firstElementChild,C=ce(f);_e(g,C,e),g._x_refreshXForScope=qs(C),r.set(u,g),c.add(g),l.after(g),l=g}),c.forEach(u=>P(u)),l!==e?e._x_lastRenderedEl=l:delete e._x_lastRenderedEl})})}function Ys(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,o=/^\s*\(|\)\s*$/g,a=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,i=e.match(a);if(!i)return;let s={};s.items=i[2].trim();let r=i[1].replace(o,"").trim(),n=r.match(t);return n?(s.item=r.replace(t,"").trim(),s.index=n[1].trim(),n[2]&&(s.collection=n[2].trim())):s.item=r,s}function Zs(e,t,o,a){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(r=>r.trim()).forEach((r,n)=>{i[r]=t[n]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(r=>r.trim()).forEach(r=>{i[r]=t[r]}):i[e.item]=t,e.index&&(i[e.index]=o),e.collection&&(i[e.collection]=a),i}function Xs(e){return typeof e!="object"&&!isNaN(e)}function Qs(e){return typeof e=="object"&&!Array.isArray(e)}function Ci(){}Ci.inline=(e,{expression:t},{cleanup:o})=>{let a=Ze(e);a&&(a._x_refs||(a._x_refs={}),a._x_refs[t]=e,o(()=>delete a._x_refs[t]))};S("ref",Ci);S("if",F((e,{expression:t},{effect:o,cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&k("x-if can only be used on a <template> tag",e);let i=x(e,t),s=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let n=e.content.cloneNode(!0).firstElementChild;return _e(n,{},e),b(()=>{e.after(n),P(n)}),e._x_currentIfEl=n,e._x_lastRenderedEl=n,e._x_undoIf=()=>{b(()=>{oe(n),n.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},n},r=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};o(()=>i(n=>{n?s():r()}),{priority:"structural"}),a(()=>e._x_undoIf&&e._x_undoIf())}));S("id",(e,{expression:t},{evaluate:o})=>{o(t).forEach(i=>Ps(e,i))});De((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});Lt(_o("@",Do(Y("on:"))));S("on",F((e,{value:t,modifiers:o,expression:a},{cleanup:i})=>{let s=a?x(e,a):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let r=re(e,t,o,n=>{s(()=>{},{scope:{$event:n},params:[n]})});i(()=>r())}));Qe("Collapse","collapse","collapse");Qe("Intersect","intersect","intersect");Qe("Focus","trap","focus");Qe("Mask","mask","mask");function Qe(e,t,o){S(t,a=>k(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${o}`,a))}ue.setEvaluator(Ji);ue.setRawEvaluator(aa);ue.setReactivityEngine({reactive:jt,effect:(e,t={})=>{let o;return o=cs(e,{scheduler:()=>{o&&(t.scheduler?t.scheduler(o):o())}}),o},release:ls,raw:m});var Js=ue,xi=Js;/*! Bundled license information:

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
*/const qt="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio",w="https://assets.raggiesoft.com/raggiesoft-studio/boxes",er="https://assets.raggiesoft.com/raggiesoft-studio/logo/raggiesoft-studio-logo.svg",tr=`${w}/box-raggiesoft-studio-suite.png`,or=`${w}/box-installer-studio.png`,ir=`${w}/box-training-studio.png`,ar=`${w}/box-help-studio.png`,sr=`${w}/box-document-studio.png`,rr=`${w}/box-localization-studio.png`,nr=`${w}/box-launcher-studio.png`,dr=`${w}/box-showcase-studio.png`,ie=`${qt}/raggiesoft-installer-studio-setup.exe`,Pe=`${qt}/raggiesoft-installer-studio-offline-setup.exe`,Ai="https://assets.raggiesoft.com/desktop-apps/windows/apps/accessibility-studio/raggiesoft-accessibility-studio-setup.exe",A=`${qt}/screenshots`,Oe="https://assets.raggiesoft.com/raggiesoft-studio/mockups",Ce="https://assets.raggiesoft.com/raggiesoft-studio/previews",Be="https://github.com/raggiesoft/installer-studio",cr="https://github.com/raggiesoft/accessibility-studio",lr="/installer-studio/vpat/raggiesoft-installer-studio-vpat-2.5.html",ur="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.",R={dialogId:"dlg-box-suite-complete",imgUrl:`${w}/box-raggiesoft-studio-suite.png`,badge:"Collector’s Slipcase • Complete 8-Product Enterprise & Publisher Suite",title:"RaggieSoft Studio — Complete Eight-Tool Workstation Suite",alt:"3D 1990s-style Collector’s Edition retail box for RaggieSoft Studio Suite featuring eight jewel-toned crystalline obelisks converging around a brass armillary sphere over a perspective grid, embossed 8-Tools Enterprise Edition gold foil seal, and eight-color spine wrap.",detailHtml:"Anchored by our flagship <strong>Installer Studio v0.5.0</strong> and <strong>Accessibility Studio v1.0.0</strong>, expanded with <strong>Training Studio v0.1.0</strong> (bandwidth-proof SCORM 1.2 &amp; 2004 courseware), <strong>Help Studio</strong> (<code>.CHM</code> / <code>.hhp</code> migration &amp; native <code>F1</code> clients), <strong>Document Studio</strong> (<code>PDF/UA-1</code>), <strong>Localization Studio</strong>, <strong>Launcher Studio</strong>, and <strong>Showcase Studio</strong>."},pr=[{dialogId:"dlg-box-installer",imgUrl:`${w}/box-installer-studio.png`,badge:"1 • Flagship v0.5.0 Shipping • .rsip / .rsis",title:"RaggieSoft Installer Studio",alt:"3D 1990s-style retail box for RaggieSoft Installer Studio featuring interlocking chrome, brass, and royal-cobalt glass puzzle cubes and gears above a perspective blueprint grid.",summaryHtml:"<strong>Install Without Limits.</strong> Zero-dependency static <code>/MT</code> Win32 C++20 visual IDE &amp; CLI compiling signed <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.msp</code>, and 10-style <code>SetupWizard.exe</code> installers with Auto-VPAT 2.5.",detailHtml:"28 years in the making (since the 1998 Visual Basic 6.0 Package &amp; Deployment Wizard): plain-text comment-preserving <code>.rsip</code> manifests, CPU-aware Universal <code>Setup.exe</code> stubs, pre-MSI runtime chaining, and Dual-Layer Azure Artifact Signing.",actionHref:"/installer-studio",actionLabel:"Installer Studio Hub →",secondaryHref:ie,secondaryLabel:"Download v0.5.0"},{dialogId:"dlg-box-a11y",imgUrl:`${w}/box-accessibility-studio.png`,badge:"2 • v1.0.0 Shipping (.NET 11) • .a11yproj",title:"RaggieSoft Accessibility Studio",alt:"3D 1990s-style retail box for RaggieSoft Accessibility Studio featuring a crystal optical prism refracting light into emerald, gold, and sapphire pathways above a golden bridge arch.",summaryHtml:"<strong>Audit, Diff &amp; Refactor WCAG 2.2.</strong> Source-level HTML5, WAI-ARIA, CSS contrast, and WebVTT caption IDE with Monaco side-by-side Guided Fix diffs, live Chromium emulation, and headless CI/CD SARIF 2.1.0 gates.",detailHtml:"Pinpoints exact 1-based line and column violations across web portals, templates, and caption tracks, previews safe source fixes before touching disk, and exports executive HTML5 &amp; Revised Section 508 matrices.",actionHref:"/accessibility-studio",actionLabel:"Accessibility Studio →",secondaryHref:Ai,secondaryLabel:"Download v1.0.0"},{dialogId:"dlg-box-training",imgUrl:`${w}/box-training-studio.png`,badge:"3 • v0.1.0 PoC & Live Demo (.NET 11) • .rstp",title:"RaggieSoft Training Studio",alt:"3D 1990s-style retail box for RaggieSoft Training Studio featuring a brushed-brass and royal-amethyst crystal lighthouse-chronometer beacon radiating golden checkpoint rings and soundwave arcs.",summaryHtml:"<strong>Bandwidth-Proof SCORM 1.2 &amp; 2004.</strong> Compiles plain-text <code>.rstp</code> + Markdown slides, compact Opus/AAC audio, and verified <code>.vtt</code> captions into <code>&lt;50 KB</code> proxy-resilient players with offline checkpoint queues and Auto-VPAT 2.5.",detailHtml:"Built to replace 400 MB progressive MP4 compliance courses that stall on Oracle Taleo and Workday WAN links—featuring atomic 10-second cue commits, locked forward scrubbers, and a compile-time WCAG 2.2 AA gate.",actionHref:"/training-studio",actionLabel:"Try Live LMS Demo →"},{dialogId:"dlg-box-help",imgUrl:`${w}/box-help-studio.png`,badge:"4 • v0.5.0 Static C++20 Built • .rshp / .chm / .hlp",title:"RaggieSoft Help Studio",alt:"3D 1990s-style retail box for RaggieSoft Help Studio featuring an illuminated crystal codex on a bronze pedestal beneath floating golden index folders and a brass compass rose.",summaryHtml:"<strong>Modern Offline F1 Help + .CHM &amp; WinHelp .HLP Rescue.</strong> Imports legacy HTML Help (<code>.chm</code>, <code>.hhp</code>) AND 1990s WinHelp (<code>.hlp</code>, <code>.cnt</code>, Word <code>.rtf</code>) into modular <code>.rshm</code> packs OR a standalone zero-dependency C++20 <code>Help.exe</code>.",detailHtml:"100% static <code>/MT</code> Win32 C++20 across <code>x64</code> &amp; <code>ARM64</code>: scrubs Microsoft Word <code>MsoNormal</code> Dark-Mode hazards, opens raw <code>.chm</code> &amp; <code>.hlp</code> files live on Windows 11, routes <code>F1</code> in <code>&lt;5ms</code> via Named Pipes, and emits static web portals + Auto-VPAT 2.5.",actionHref:"/help-studio",actionLabel:"Explore Help Studio →"},{dialogId:"dlg-box-document",imgUrl:`${w}/box-document-studio.png`,badge:"5 • Architecture Preview • .rsdp",title:"RaggieSoft Document Studio",alt:"3D 1990s-style retail box for RaggieSoft Document Studio featuring ruby-garnet crystal tablets and golden hierarchical tag-tree pyramids over a crimson-obsidian grid.",summaryHtml:"<strong>Tagged PDF/UA-1 Without Tag-Tree Pain.</strong> Compiles plain-text <code>.rsdp</code> manifests and Markdown into machine-verified ISO 14289-1 <code>PDF/UA-1</code> manuals, policies, certificates, and Section 508 / ADA Title II forms.",detailHtml:"Eliminates hours of manual Acrobat tag-tree repair every time a municipal policy, employee handbook, or board packet changes—enforcing reading order, table header scopes, and alt text at compile time.",actionHref:"/document-studio",actionLabel:"Explore Document Studio →"},{dialogId:"dlg-box-localization",imgUrl:`${w}/box-localization-studio.png`,badge:"6 • Architecture Preview • .rsloc",title:"RaggieSoft Localization Studio",alt:"3D 1990s-style retail box for RaggieSoft Localization Studio featuring a sapphire-indigo crystal polyhedron encircled by three brass orbital rings and mirrored crystal prisms.",summaryHtml:"<strong>Safe App, Installer &amp; Caption Translation.</strong> Side-by-side <code>.RESX</code>, <code>XLIFF 2.1</code>, <code>.rsip</code>, <code>.rstp</code>, and multilingual <code>WebVTT</code> IDE with locked format tokens, <code>&amp;</code> mnemonic clash checks, and <code>BCP 47</code> gates.",detailHtml:"Prevents broken <code>{0}</code> / <code>$(ARCH)</code> placeholders, duplicate keyboard accelerators, and unreadable <code>&gt;25 CPS</code> translated closed captions across desktop software, installers, and training modules.",actionHref:"/localization-studio",actionLabel:"Explore Localization →"},{dialogId:"dlg-box-launcher",imgUrl:`${w}/box-launcher-studio.png`,badge:"7 • Design Preview • .rslp",title:"RaggieSoft Launcher Studio",alt:"3D 1990s-style retail box for RaggieSoft Launcher Studio featuring a chrome and electric-cyan glass astrolabe launching golden spheres across an indigo wireframe globe.",summaryHtml:"<strong>White-Label Desktop App Hubs.</strong> Visual IDE &amp; <code>.rslp</code> compiler for building publisher-branded Windows 11 app shelves and <code>SHA-256</code> + Authenticode-verified delta updaters hosted on any static CDN.",detailHtml:"Inspired by our production RaggieSoft Launcher: zero database servers, zero forced user accounts, zero store gatekeepers, and native <code>x64</code> &amp; <code>ARM64</code> update verification.",actionHref:"/launcher-studio",actionLabel:"Explore Launcher Studio →"},{dialogId:"dlg-box-showcase",imgUrl:`${w}/box-showcase-studio.png`,badge:"8 • Design Preview • .rssp",title:"RaggieSoft Showcase Studio",alt:"3D 1990s-style retail box for RaggieSoft Showcase Studio featuring an iridescent optical disc, ruby sphere, teal crystal pyramid, and brass soundwave ribbon.",summaryHtml:"<strong>Accessible Collector Menus.</strong> Compiles <code>.rssp</code> manifests into zero-dependency Win32 C++20 launchpads—supporting both 1990s painted <code>.BMP</code> CD-ROM art with UIA focus rings and modern Windows 11 <code>FluentMica</code>.",detailHtml:"Purpose-built for USB collector box sets, multi-installer suite menus, companion media discs, and accessible museum/classroom kiosks with automatic <code>SPI_GETHIGHCONTRAST</code> override.",actionHref:"/showcase-studio",actionLabel:"Explore Showcase Studio →"}],j={showcase90s:{dialogId:"dlg-mockup-showcase-90s",imgUrl:`${Oe}/mockup-showcase-1990s-bmp-a11y.png`,badge:"Showcase Studio Runtime • 1990s .BMP Mode + WCAG 2.2 AA Safeguards",title:"1990s Painted .BMP CD-ROM Showcase — Upgraded with Modern Accessibility",alt:"RaggieSoft Showcase Studio 1990s painted bitmap CD-ROM collector menu displaying classic 3D beveled artwork over a teal wash alongside a high-contrast dual-ring keyboard focus indicator, Alt+Key mnemonics, UI Automation screen-reader readout, and Windows High-Contrast override status bar.",summaryHtml:"Preserves the beloved <code>640&times;480</code> / <code>800&times;600</code> painted <code>.BMP</code> CD-ROM look on a classic <code>#008080</code> desktop wash while backing every painted hotspot with an invisible Win32 <code>BUTTON</code> UI Automation proxy, dual-ring <code>Tab</code> / 4-way arrow focus, muted-by-default captioned audio, and instant <code>SPI_GETHIGHCONTRAST</code> override.",detailHtml:"In the 1990s, painted bitmap menus were completely inaccessible to blind, low-vision, and keyboard-only users because buttons were just flat pixels on a single background image. Showcase Studio solves this cleanly in Win32 C++20: authors place rectangular or polygon hotspots over any retro <code>.BMP</code>/<code>.PNG</code> canvas, and the runtime creates real windowless/child UI Automation <code>Button</code> peers with <code>Alt+Key</code> mnemonics, dual black/gold high-contrast focus frames, and automatic OS Contrast Theme fallback."},showcaseModern:{dialogId:"dlg-mockup-showcase-modern",imgUrl:`${Oe}/mockup-showcase-modern-fluent.png`,badge:"Showcase Studio Runtime • Windows 11 FluentMica 16:9 Mode",title:"Modern Windows 11 FluentMica 16:9 Collector’s Edition Launchpad",alt:"RaggieSoft Showcase Studio modern widescreen 16:9 Windows 11 FluentMica collector launchpad showing left category navigation, cosmic hero banner, accessible action cards for installing desktop apps, opening offline books, and playing captioned bonus tracks.",summaryHtml:"Compiles the exact same <code>.rssp</code> project structure into a crisp Per-Monitor V2 DPI Windows 11 <code>DWMSBT_MAINWINDOW</code> Mica launchpad with rounded <code>8px</code> action cards, live Light &harr; Dark palette switching, and one-click handoff to signed <code>Setup.exe</code> packages.",detailHtml:"Designed for USB box sets, downloadable ISO collector editions, multi-package suite front-ends, offline press kits, and museum or classroom kiosks—booting in under 40ms from static <code>/MT</code> C++20 on <code>x64</code> and <code>ARM64</code> with zero browser engine bloat."},showcaseIde:{dialogId:"dlg-mockup-showcase-ide",imgUrl:`${Oe}/mockup-showcase-studio-ide.png`,badge:"ShowcaseStudio.exe • Visual Page, Hotspot & Focus-Matrix IDE",title:"ShowcaseStudio.exe — Visual Canvas, 4-Way Focus Graph & WCAG Inspector",alt:"RaggieSoft Showcase Studio Win32 C++20 IDE mockup showing the Pages and Assets tree on the left, central interactive hotspot canvas with directional Up/Down/Left/Right focus arrows, and right-hand Inspector with UI Automation labels and High-Contrast preview.",summaryHtml:"Author multi-page interactive menus visually with a hierarchical <code>Pages &amp; Assets</code> tree, visual 4-way arrow/D-pad focus-routing overlays, live WCAG 2.2 AA accessibility lint gates, and a 100% comment-preserving plain-text <code>.rssp</code> manifest.",detailHtml:"Borrowing the best ideas from classic card-based multimedia builders and set-top disc authoring tools, the central canvas draws explicit directional focus links (<code>FocusUp</code>, <code>FocusDown</code>, <code>FocusLeft</code>, <code>FocusRight</code>) and refuses to compile unlabeled hotspots unless every interactive region exposes a human-readable UI Automation name."},launcherIde:{dialogId:"dlg-mockup-launcher-ide",imgUrl:`${Oe}/mockup-launcher-studio-ide.png`,badge:"LauncherStudio.exe • White-Label Desktop Hub & Static-CDN Updater IDE",title:"LauncherStudio.exe — Branded Desktop App Hub & Catalog Compiler",alt:"RaggieSoft Launcher Studio IDE mockup showing the Catalog Channels and App Shelves tree on the left, live branded Publisher Hub preview in the center with Install and Update tiles, and SHA-256 + Authenticode static-CDN settings on the right.",summaryHtml:"Design your own zero-account, custom-branded Windows 11 desktop application hub, offline eBook/audio library shelf, and static-CDN delta updater using diff-friendly <code>.rslp</code> manifests—with live Light/Dark/High-Contrast WCAG 2.2 AA verification.",detailHtml:"Publish a static signed <code>catalog.json</code> alongside your <code>.msi</code>, <code>.msp</code>, or <code>Engine = native</code> packages on any HTTPS server, S3 bucket, or Cloudflare R2 bucket—zero database servers to maintain, zero forced customer logins, and mandatory <code>SHA-256</code> + <code>WinVerifyTrust</code> signature verification before any update executes."}},gr=[{dialogId:"dlg-ide-features",imgUrl:`${A}/ide-features-tree.png`,badge:"v0.5.0 • Setup Architecture",title:"1. Dedicated Features Hierarchy & Plain-English Inclusion Tiers",alt:"RaggieSoft Installer Studio v0.5.0 Visual IDE showing the categorized 12-view left sidebar tree and the dedicated All Features hierarchy with plain-English Minimal and Typical inclusion badges, Move Up/Down ordering, DisallowAbsent lock, and Included In dropdown.",summaryHtml:"Organize root features and nested sub-features inside an <code>All Features</code> <code>SysTreeView32</code>, choose plain-English <strong>Included In</strong> tiers (<em>Minimal / Compact</em>, <em>Typical / Express</em>, <em>Complete Only</em>, or <em>Hidden</em>) instead of raw MSI <code>InstallLevel</code> numbers, and reorder display priority with <strong>Move Up / Move Down</strong>.",detailHtml:"Clicking any node in the <code>All Features</code> tree populates its ID, display title, plain-English <code>Included In</code> setup tier, parent feature, <code>DisallowAbsent</code> lock, and consumer description—updating the underlying <code>.rsip</code> AST while preserving 100% of comments and <code>@include</code> directives."},{dialogId:"dlg-ide-registry",imgUrl:`${A}/ide-registry-tree.png`,badge:"Setup Architecture • RegEdit Hierarchy",title:"2. RegEdit-Style Registry Tree, Feature Filter & .REG Importer",alt:"RaggieSoft Installer Studio v0.4.5 Registry view displaying HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE\\Software\\RaggieSoft\\Installer Studio, HKEY_USERS, and HKMU folders on the left alongside typed REG_SZ values on the right.",summaryHtml:"Navigate target registry keys just like Windows Registry Editor across <code>HKCR</code>, <code>HKCU</code>, <code>HKLM</code>, <code>HKU</code>, and <code>HKMU</code> nested folders, inspect typed <code>REG_SZ</code> / <code>REG_EXPAND_SZ</code> / <code>REG_DWORD</code> values on the right, filter keys by Feature, or import <code>.reg</code> scripts in one click.",detailHtml:"Every registry value automatically receives either a deterministic 64-bit MSI Component GUID or binds to an explicit <code>[Component.*]</code> KeyPath—supporting formatted Windows Installer tokens like <code>[INSTALLDIR]</code> and <code>[ProductVersion]</code>."},{dialogId:"dlg-ide-folders",imgUrl:`${A}/ide-destination-folders.png`,badge:"Dual-Tree Explorer • ICE18 / ICE38 / ICE64",title:"3. Destination Computer & Folder Contents Dual Trees",alt:"RaggieSoft Installer Studio v0.4.5 Files and Folders view showing the Destination Computer folder tree on the left and the filtered Staged Contents tree with Component and KeyPath badges on the right.",summaryHtml:"Map files and <code>CreateFolder</code> directories across 9 standard Windows Installer roots (<code>INSTALLDIR</code>, <code>ProgramData</code>, <code>AppData</code>, <code>StartMenu</code>, <code>Desktop</code>, <code>System32</code>, <code>Fonts</code>) with automatic UUIDv5 File KeyPaths and <code>ICE38</code> per-user registry KeyPaths.",detailHtml:"Selecting any root or subfolder on the left immediately filters the right-hand <code>Staged Contents</code> tree, showing each payload’s owning Feature, deterministic or explicit Component, and KeyPath rule."},{dialogId:"dlg-ide-runtimes",imgUrl:`${A}/ide-runtimes-msm.png`,badge:"Application Information • Pre-MSI Broker",title:"4. Pre-MSI Application Runtimes & 64-Bit .MSM Tree",alt:"RaggieSoft Installer Studio v0.4.5 Application Runtimes and Merge Modules tree grouping Pre-MSI Runtime Prerequisites and Windows Installer .MSM Merge Modules with 32-bit ARGB vector icons.",summaryHtml:"Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>) with custom reboot exit-code latching (<code>3010, 1641, 23</code>) alongside native 64-bit <code>.msm</code> Merge Modules.",detailHtml:"All prerequisites execute under one unified UAC elevation session before <code>msiexec</code> starts, while 64-bit <code>.msm</code> modules merge SQL rows and CAB streams directly in C++20 without 32-bit COM dependencies."},{dialogId:"dlg-ide-designer",imgUrl:`${A}/ide-wizard-designer.png`,badge:"New in v0.5.0 • 10 Styles + WCAG Auto-Fix",title:"5. Live 10-Style C++ Wizard Designer & WCAG 2.2 AA Contrast Enforcer",alt:"RaggieSoft Installer Studio v0.5.0 C++ Wizard Designer showcasing the 10 Setup.exe styles dropdown with fullscreenteal (1995 ACME #008080 Teal) and win95_classic Typical/Compact/Complete/Custom cards rendered live alongside the Auto-Fix WCAG button and WCAG 2.2 AA PASS badge.",summaryHtml:"Switch live across all <strong>10 <code>SetupWizard.exe</code> styles</strong> (from <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp; <code>fullscreenblue</code> Cobalt wash through <code>wizard95</code>, <code>aerowizard</code>, and Windows 11 <code>fluentmica</code>), pick <strong>Typical / Compact / Complete / Custom</strong> Setup Types, and click <strong>Auto-Fix WCAG</strong> to guarantee dual-theme contrast.",detailHtml:"Every compiled package pairs selectable era-spanning C++20 wizard ergonomics (honoring <code>SPI_GETHIGHCONTRAST</code> automatically) with genuine relational Windows Installer <code>Dialog</code> and <code>Control</code> SQL tables inside <code>Product.msi</code>."}],hr=[{dialogId:"dlg-wiz-acme-teal",imgUrl:`${A}/setupwizard-fullscreen-teal.png`,badge:"New in v0.5.0 • 1995 ACME #008080 Teal Callback",title:"6. FullScreenTeal (#008080 ACME Engine Callback) & 4-Card Classic Setup Types",alt:"SetupWizard.exe v0.5.0 running in FullScreenTeal mode displaying the classic 1995 Microsoft ACME Setup Engine #008080 Teal desktop wash, drop-shadowed italic serif title, floating 3D Billboard card, bottom-right 3D sunken progress gauge, and centered #C0C0C0 3D beveled dialog with Typical, Compact, Complete, and Custom Setup Types.",summaryHtml:"An unmistakable tribute to the classic mid-1990s <strong>Microsoft ACME Setup Engine (<code>#008080</code> Desktop Teal)</strong>—pairing a drop-shadowed italic serif product banner, floating <code>[Billboard.*]</code> card, bottom-right 3D sunken progress gauge, and 4-card <strong>Typical / Compact / Complete / Custom</strong> Setup Types.",detailHtml:"Under the nostalgic <code>#008080</code> Teal wash and <code>#C0C0C0</code> 3D beveled chrome runs 100% modern Per-Monitor V2 DPI scaling, full keyboard &amp; screen-reader UI Automation, and instant <code>SPI_GETHIGHCONTRAST</code> Windows Contrast Theme fallback."},{dialogId:"dlg-wiz-blue-wash",imgUrl:`${A}/setupwizard-fullscreen-blue.png`,badge:"New in v0.5.0 • 1995 SETUP.EXE Cobalt Wash",title:"7. FullScreenBlue (#000080 → #000000 Cobalt Wash) + Billboards & 3D Gauge",alt:"SetupWizard.exe v0.5.0 running in FullScreenBlue mode displaying the classic 1995 #000080 to #000000 Cobalt-Blue gradient backdrop, italic Times New Roman drop-shadowed Setup title, floating 3D Billboard card, docked 3D sunken progress gauge, and floating #C0C0C0 3D beveled Setup Type dialog.",summaryHtml:"Brings back the iconic 1995 full-screen <strong><code>#000080 &rarr; #000000</code> Cobalt-Blue</strong> gradient wash with a drop-shadowed serif product title, floating 3D beveled dialog, rotating installation billboards, and a docked 3D sunken progress gauge.",detailHtml:"Ideal for classic retro utilities like <em>StoreTrainer</em> and collector editions—while keeping Windows 11 <code>x64</code>/<code>ARM64</code> transactional MSI safety and single-UAC elevation intact."},{dialogId:"dlg-wiz-95",imgUrl:`${A}/setupwizard-wizard95.png`,badge:"New in v0.5.0 • Classic #C0C0C0 3D Sheet",title:"8. Wizard95 Standalone #C0C0C0 3D Beveled Dialog & 164px Left Graphic Rail",alt:"SetupWizard.exe v0.5.0 running in standalone Wizard95 mode with a classic #C0C0C0 3D beveled window sheet, 164px sunken vertical graphic rail on the left, etched horizontal footer rule, and classic 3D beveled push buttons.",summaryHtml:"Standalone classic 1995 desktop wizard geometry featuring a crisp <code>#C0C0C0</code> 3D face, <code>164px</code> sunken left vertical graphic rail across every wizard step, two-line etched horizontal rules, and <code>EDGE_RAISED</code> / <code>EDGE_SUNKEN</code> 3D push buttons.",detailHtml:"Automatically yields to OS semantic colors whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is enabled."},{dialogId:"dlg-wiz-mica",imgUrl:`${A}/setupwizard-fluent-mica.png`,badge:"New in v0.5.0 • Windows 11 Fluent Mica",title:"9. FluentMica Surface & 7-Stage Vertical Progress Rail",alt:"SetupWizard.exe v0.5.0 running in Windows 11 FluentMica mode featuring a 7-stage vertical step-progress rail on the left (Welcome, License, Setup Type, Customize, Ready, Installing, Completed) alongside accessible Dark Mode option cards.",summaryHtml:"Modern Windows 11 native <code>DWMSBT_TABBEDWINDOW</code> Mica surface in zero-dependency Win32 C++20 featuring a 7-stage left vertical step-progress rail with live completion checkmarks.",detailHtml:"Gives modern Windows 11 desktop apps a clean Fluent step-rail aesthetic with zero <code>WinUI 3</code>, <code>.NET</code>, or <code>WebView2</code> runtime dependencies."},{dialogId:"dlg-wiz-dark",imgUrl:`${A}/setupwizard-setup-type.png`,badge:"SetupWizard.exe • Windows 11 Dark Mode",title:"10. Accessible Option Cards & Custom-Subclassed Dark Buttons",alt:"SetupWizard.exe v0.5.0 running in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button.",summaryHtml:"Genuine Win32 <code>BS_AUTORADIOBUTTON</code> option cards (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) and custom-subclassed <code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, and <code>Cancel</code> buttons expose full UI Automation roles and keyboard mnemonics.",detailHtml:"Screen readers (Narrator, NVDA, and JAWS) announce every option card’s title, recommendation, description, and <code>Alt+Key</code> accelerator cleanly—with zero jarring white legacy buttons in Dark Mode."},{dialogId:"dlg-wiz-light",imgUrl:`${A}/setupwizard-setup-type-light.png`,badge:"Live Broadcast • WM_SETTINGCHANGE(ImmersiveColorSet)",title:"11. Sub-16ms Live OS Dark ↔ Light Palette Hot-Swap",alt:"The exact same open SetupWizard.exe v0.5.0 window after receiving WM_SETTINGCHANGE ImmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting.",summaryHtml:"Toggle Windows 11 (or automatic sunset/sunrise utilities) between Dark Mode, Light Mode, or Contrast Themes mid-install and the open wizard flips its titlebar, cards, and buttons live in under 16 milliseconds.",detailHtml:"No process restart required: <code>IsLiveThemeBroadcast</code> refreshes DWM immersive titlebars, GDI brushes, vector glyphs, checkboxes, and push buttons on the fly."},{dialogId:"dlg-wiz-tree",imgUrl:`${A}/setupwizard-selection-tree.png`,badge:"SetupWizard.exe • Custom Setup & Modify",title:"12. Authentic 32-Bit ARGB Windows Installer SelectionTree",alt:"SetupWizard.exe v0.5.0 Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB split-dropdown state icons and live disk space cost card.",summaryHtml:"Reads <code>Feature</code>, <code>FeatureComponents</code>, and <code>File</code> SQL tables directly from <code>Product.msi</code> in under 2ms—rendering crisp 32-bit ARGB split-dropdown icons, <code>DisallowAbsent</code> locks, and live byte costing.",detailHtml:"User choices translate directly into canonical <code>ADDLOCAL</code>, <code>REMOVE</code>, and <code>ADVERTISE</code> properties passed to <code>MsiInstallProductW</code> during fresh installs and Maintenance Modify."}],Mi=[{dialogId:"dlg-prev-suite-dual",imgUrl:`${Ce}/preview-v060-suite-dual-progress.png`,badge:"In-Lab Preview • v0.6.0 Unified Suite (.rsis)",title:"Monotonic Dual-Bar Suite Setup & Taskbar Progress (Zero Resets)",alt:"Real Windows 11 C++20 capture of RaggieSoft Studio Unified Suite Setup v0.6.0 showing a 4-product checklist with [Required] lock, monotonic 58% Overall Suite Progress bar (Package 2 of 4), live 64% Current Component progress bar, and single-UAC Install Selected button.",summaryHtml:"<strong>Zero Sawtooth Resets:</strong> Renders a byte-weighted, strictly monotonic <strong>Overall Suite Progress</strong> bar (<code>0%&ndash;100%</code>, bound 1:1 to Windows Taskbar <code>ITaskbarList3</code>) above a live <strong>Current Component</strong> bar streaming real-time <code>MSI.DLL</code> and <code>Engine = native</code> progress.",detailHtml:"Engineered to power the 8-tool RaggieSoft Studio Suite (including free <em>RaggieSoft Studio Community</em>): dynamically adopts standalone sibling installs under one clean Windows <em>Installed apps</em> maintenance entry (<code>ARPSYSTEMCOMPONENT=1</code>) and executes all selected packages under a single UAC prompt.",actionHref:"/editions",actionLabel:"Explore Suite Editions →"},{dialogId:"dlg-prev-sfx-compact",imgUrl:`${Ce}/preview-v060-sfx-compact.png`,badge:"In-Lab Preview • v0.6.0 Self-Extractor & Standalone Tool",title:"Compact LZMS Self-Extractor & %TEMP% Software Wrapper",alt:"Real Windows 11 Dark Mode C++20 capture of Portable Zip Utility v0.6.0 Self-Extracting Archive showing destination folder C:\\RaggieSoft\\Samples\\ZipUtility, live 42% LZMS unpacking progress bar, Open document after extraction checkbox, and Extract button.",summaryHtml:"<strong><code>PackageKind = sfx</code> + Standalone <code>rswsfx.exe</code>:</strong> Compresses any folder or <code>.zip</code> into a zero-dependency <code>LZMS</code> single-file <code>.exe</code>—or extracts silently to <code>%TEMP%</code> to run your inner setup, wait on child cleanup helpers (<code>_ISDEL.EXE</code>), and scrub <code>%TEMP%</code> afterward.",detailHtml:"Ships inside every edition of Installer Studio (including <strong>Essentials</strong> and <strong>Community</strong>) and as a dedicated standalone desktop utility for instant single-file archives with automatic Dark Mode, Light Mode, and Windows Contrast Theme compliance.",actionHref:"/installer-studio/roadmap",actionLabel:"v0.6.0 Roadmap →"},{dialogId:"dlg-prev-aero-dark",imgUrl:`${Ce}/preview-v060-aerowizard-true-dark.png`,badge:"In-Lab Preview • v0.6.0 7 Guided IDE AeroWizards",title:"True Dark Mode Native Win32 AeroWizards (SFX, Native & Suites)",alt:"Real Windows 11 Dark Mode C++20 capture of InstallerStudio.exe Step 1 of 3 Self-Extracting .EXE and Simple Native Setup Wizard showing dark titlebar, back navigation button, cyan instruction heading, dark combobox and text inputs, and Next/Cancel buttons.",summaryHtml:"<strong>7 Guided Wizards in <code>InstallerStudio.exe</code>:</strong> Expands the IDE wizard shelf with guided <strong>Self-Extractor / Simple Native Setup</strong> and <strong>Unified Multi-Product Suite</strong> AeroWizards rendered natively in crisp Windows 11 Dark &amp; Light Mode.",detailHtml:"Replaces stock light-only shell wizard chrome in Dark Mode with Per-Monitor V2 DPI custom-painted AeroWizard command surfaces, full <code>Alt+Key</code> mnemonics, and lossless comment-preserving <code>.rsip</code> generation.",actionHref:"/raggiescript",actionLabel:"Explore RaggieScript →"}],mr=[{dialogId:"dlg-help-viewer",imgUrl:`${A}/helpviewer-contents.png`,badge:"RaggieSoftHelp.exe • Named Pipe F1 IPC",title:"13. Zero-Dependency Native C++20 Offline Help Viewer",alt:"RaggieSoftHelp.exe v0.5.0 native C++20 offline Help Viewer showing the 32-bit ARGB Contents tree on the left and formatted MSI SelectionTree documentation on the right.",summaryHtml:"Press <code>F1</code> inside any IDE view to open searchable offline HTML5 chapters in under 5ms via Named Pipe IPC—rendered natively through <code>System32\\Msftedit.dll</code> with zero <code>.NET</code> or <code>WebView2</code> dependencies.",detailHtml:'The exact same <code>help/raggiesoft.installer-studio/</code> HTML5 topics ship inside the installer and power the web documentation under <a href="/installer-studio/docs">/installer-studio/docs</a>.'},{dialogId:"dlg-msiprism",imgUrl:`${A}/msiprism-sql-inspector.png`,badge:"msiprism.exe • Categorized SQL Schema Tree",title:"14. Native 64-Bit Dark Mode MSI, MSM, MST & MSP SQL Inspector",alt:"RaggieSoft MSI Prism v0.5.0 displaying a categorized 5-folder SQL schema tree on the left with 32-bit ARGB table icons and relational Feature rows on the right.",summaryHtml:"Open any <code>.msi</code>, <code>.msm</code>, or <code>.msp</code> database into a categorized 5-group <code>SysTreeView32</code> schema tree, inspect relational rows in Dark or Light Mode, audit <code>ICE80</code> flags, and generate <code>.mst</code> or <code>.msp</code> deltas.",detailHtml:"Groups all 44+ Windows Installer SQL tables into <em>Metadata &amp; Streams</em>, <em>Core Packaging Tables</em>, <em>Registry, Shortcuts &amp; Classes</em>, <em>Dialogs &amp; UI Controls</em>, and <em>Sequences, Locators &amp; Actions</em>."}];function pe(){return`
    <aside class="calc-panel" aria-label="Signed Binary and Temporary Windows SmartScreen Reputation Notice" style="margin-top: 1.15rem; padding: 1rem 1.2rem;">
      <span class="eyebrow" style="margin-bottom: 0.25rem;">Signed Binary Notice • Why Windows SmartScreen Still Prompts Temporarily</span>
      <p style="margin: 0 0 0.55rem 0; font-size: 0.95rem;">
        <strong>100% Cryptographically Signed:</strong>
        Every official RaggieSoft Studio download—including Universal Web &amp; Offline <code>Setup.exe</code> launchers,
        inner <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code> databases, <strong>Installer Studio
        <code>v0.5.0</code></strong>, and <strong>Accessibility Studio <code>v1.0.0</code></strong>—is Dual-Layer
        Authenticode-signed via <strong>Microsoft Azure Artifact Signing</strong> (<code>Verified publisher: Michael Ragsdale</code>,
        RFC 3161 timestamped, and verified with <code>signtool verify /pa</code>).
      </p>
      <p style="margin: 0; font-size: 0.92rem; color: var(--text-muted);">
        <strong>Why SmartScreen may still say &ldquo;Windows protected your PC&rdquo; right now:</strong>
        Our Microsoft Public Trust signing certificate is brand-new (issued <strong>November 25, 2026</strong>). Under
        Microsoft&rsquo;s current SmartScreen rules, newly issued certificates start at zero download reputation until initial
        install volume and <strong>Microsoft Security Intelligence (WDSI)</strong> review complete (already submitted).
        To install safely while reputation clears: click <strong>More info</strong>, confirm Windows shows
        <strong><code>Publisher: Michael Ragsdale</code></strong> (never <em>&ldquo;Unknown publisher&rdquo;</em>), and click
        <strong>Run anyway</strong>.
        <a href="/installer-studio/faq#smartscreen">Full details in the FAQ &rarr;</a>
      </p>
    </aside>
  `}function I(e){const t=e.actionHref?`
        <div class="btn-row" style="margin-top: auto; padding-top: 0.55rem;">
          <a class="btn btn-primary" href="${e.actionHref}" style="font-size: 0.84rem; padding: 0.42rem 0.8rem;">${e.actionLabel??"Explore Product →"}</a>
          ${e.secondaryHref?`<a class="btn btn-outline" href="${e.secondaryHref}" style="font-size: 0.84rem; padding: 0.42rem 0.8rem;">${e.secondaryLabel??"Download"}</a>`:""}
        </div>`:"";return`
    <figure class="shot-card">
      <button
        type="button"
        class="shot-preview-btn"
        data-open-dialog="${e.dialogId}"
        aria-haspopup="dialog"
        aria-label="Open full-size view: ${e.title}"
      >
        <img src="${e.imgUrl}" alt="${e.alt}" loading="lazy" />
        <span class="shot-zoom-pill">Full-Size View</span>
      </button>
      <figcaption>
        <span class="eyebrow" style="margin-bottom: 0;">${e.badge}</span>
        <strong>${e.title}</strong>
        <span>${e.summaryHtml}</span>${t}
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
          <img src="${e.imgUrl}" alt="${e.alt}" loading="lazy" />
        </div>
        <div class="shot-lightbox-caption">
          ${e.detailHtml}
        </div>
      </div>
    </dialog>
  `}function fr(){return`
    <section class="hero" aria-labelledby="suite-hero-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Studio • Eight-Tool Developer, Compliance &amp; Publishing Suite</span>
          <h1 id="suite-hero-title">Zero-Bloat Engineering Tools Built on Plain-Text Manifests &amp; WCAG 2.2 AA.</h1>
          <p class="lead">
            Anchored by our pride-and-joy <strong>Installer Studio <code>v0.5.0</code></strong> (28 years in the making since
            the 1998 Visual Basic 6.0 Package &amp; Deployment Wizard) and <strong>Accessibility Studio <code>v1.0.0</code></strong>,
            <strong>RaggieSoft Studio</strong> unites <strong>eight</strong> focused tools that replace bloated, legacy enterprise
            authoring suites—now joined by <strong>Training Studio <code>v0.1.0</code></strong> (bandwidth-proof SCORM 1.2 &amp;
            2004 courseware), <strong>Help Studio</strong> (turnkey <code>.CHM</code> / HTML Help migration &amp; native <code>F1</code>
            clients), <strong>Document Studio</strong>, <strong>Localization Studio</strong>, <strong>Launcher Studio</strong>,
            and <strong>Showcase Studio</strong>.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/installer-studio">Installer Studio (v0.5.0 Flagship) &rarr;</a>
            <a class="btn btn-outline" href="/editions">Suite Editions &amp; Free Community &rarr;</a>
            <a class="btn btn-outline" href="/raggiescript">RaggieScript (.rssc) Hub &rarr;</a>
            <a class="btn btn-outline" href="/accessibility-studio">Accessibility Studio (v1.0.0) &rarr;</a>
            <a class="btn btn-outline" href="/training-studio">Try Training Studio SCORM Demo &rarr;</a>
          </div>
          ${pe()}
        </div>
        <figure class="hero-box-showcase">
          <button
            type="button"
            class="shot-preview-btn"
            data-open-dialog="${R.dialogId}"
            aria-haspopup="dialog"
            aria-label="Open full-size 1200 by 960 box view: ${R.title}"
            style="border-bottom: 0;"
          >
            <img
              src="${tr}"
              width="1200"
              height="960"
              alt="${R.alt}"
            />
            <span class="shot-zoom-pill">Full 1200&times;960 Box</span>
          </button>
        </figure>
      </div>
      <dialog id="${R.dialogId}" class="shot-lightbox" aria-labelledby="${R.dialogId}-title">
        <div class="shot-lightbox-panel">
          <div class="shot-lightbox-header">
            <div>
              <span class="eyebrow" style="color: #fde68a; margin-bottom: 0.15rem;">${R.badge}</span>
              <h3 id="${R.dialogId}-title" class="shot-lightbox-title">${R.title}</h3>
            </div>
            <button type="button" class="shot-lightbox-close" data-close-dialog aria-label="Close full-size screenshot dialog">
              Close (Esc)
            </button>
          </div>
          <div class="shot-lightbox-stage">
            <img src="${R.imgUrl}" alt="${R.alt}" loading="lazy" />
          </div>
          <div class="shot-lightbox-caption">
            ${R.detailHtml}
          </div>
        </div>
      </dialog>
    </section>

    <section aria-labelledby="box-shelf-heading">
      <span class="eyebrow">Complete 8-Product Lineup • Symmetrical 4&times;2 Product Quick Cards</span>
      <h2 id="box-shelf-heading" style="margin-top: 0.25rem;">Explore All Eight RaggieSoft Studio Products</h2>

      <!-- Balanced 4x2 (Desktop) / 2x4 (Tablet) / 1x8 (Mobile) Quick Product Cards -->
      <div class="grid-4x2">
        ${pr.map(I).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="pipeline-heading">
      <span class="eyebrow">How All Eight Tools Fit Together • Two Symmetrical 4-Stage Workflows</span>
      <h2 id="pipeline-heading" style="margin-top: 0.25rem;">End-to-End Enterprise Compliance &amp; Software Publishing Lifecycle</h2>
      <div class="pipeline-grid">
        <div class="pipeline-step">
          <span class="pipeline-num">1 • Installer Studio</span>
          <h3>Package &amp; Dual-Sign</h3>
          <p style="margin-bottom: 0;">
            Our <code>v0.5.0</code> C++20 flagship compiles native <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code>
            databases, 10-style <code>SetupWizard.exe</code> installers, and VPAT 2.5 reports.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">2 • Accessibility Studio</span>
          <h3>Audit &amp; Refactor</h3>
          <p style="margin-bottom: 0;">
            Verify HTML5, WAI-ARIA, CSS contrast, and <code>.vtt</code> captions in our <code>.NET 11</code> IDE &amp; CI/CD
            OASIS SARIF 2.1.0 scanner.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">3 • Training Studio</span>
          <h3>Resilient SCORM</h3>
          <p style="margin-bottom: 0;">
            Compile <code>.rstp</code> + Markdown into <code>&lt;50 KB</code> proxy-proof SCORM 1.2 &amp; 2004 compliance courses
            with offline queues &amp; Auto-VPAT.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">4 • Help Studio</span>
          <h3>Native <code>F1</code> &amp; <code>.CHM</code> Import</h3>
          <p style="margin-bottom: 0;">
            Migrate legacy HTML Help Workshop (<code>.hhp</code>/<code>.chm</code>) projects into modular <code>.rshm</code>
            packs or standalone C++20 <code>F1</code> clients.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">5 • Document Studio</span>
          <h3>Tagged <code>PDF/UA-1</code></h3>
          <p style="margin-bottom: 0;">
            Compile plain-text <code>.rsdp</code> handbooks, policies, and ADA Title II / Section 508 forms without manual
            Acrobat tag-tree repair.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">6 • Localization Studio</span>
          <h3>Safe Translation</h3>
          <p style="margin-bottom: 0;">
            Translate <code>.RESX</code>, <code>XLIFF</code>, <code>.rsip</code>, and <code>.vtt</code> captions while locking
            <code>{0}</code> tokens, <code>&amp;</code> mnemonics, and <code>&le;25 CPS</code> speed.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">7 • Launcher Studio</span>
          <h3>Branded App Hubs</h3>
          <p style="margin-bottom: 0;">
            Deliver ongoing <code>SHA-256</code> + Authenticode-verified updates from any static HTTPS host or CDN without
            store gatekeepers.
          </p>
        </div>
        <div class="pipeline-step">
          <span class="pipeline-num">8 • Showcase Studio</span>
          <h3>Collector Editions</h3>
          <p style="margin-bottom: 0;">
            Present USB/ISO collector editions in 1990s painted <code>.BMP</code> menus with UIA safeguards or modern Windows 11
            <code>FluentMica</code>.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="lab-v060-heading">
      <span class="eyebrow">Coming Next in the Studio Lab • Real Native Win32 C++20 Captures (Click for 1:1 View)</span>
      <h2 id="lab-v060-heading" style="margin-top: 0.25rem;">In the Lab: Monotonic Dual-Bar Suites, %TEMP% Self-Extractors &amp; True Dark AeroWizards</h2>
      <p>
        While our signed <strong>Installer Studio <code>v0.5.0</code></strong> release completes initial Windows SmartScreen
        reputation review, active <code>v0.6.0</code> &amp; <code>v0.7.0</code> engineering continues daily—bringing unified
        multi-product <code>.rsis</code> Suites with <strong>zero-reset monotonic Overall + Component dual progress bars</strong>,
        compact <code>LZMS</code> self-extractors (<code>_ISDEL.EXE</code>-aware <code>%TEMP%</code> wrappers + standalone
        <code>rswsfx.exe</code>), and Suite-wide <a href="/raggiescript"><strong><code>RaggieScript</code> (<code>.rssc</code>)</strong></a>!
      </p>
      <div class="shot-grid">
        ${Mi.map(I).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="upcoming-mockups-heading">
      <span class="eyebrow">Early Design Previews • Click Any Mockup for Full-Size 1280&times;800 Inspection</span>
      <h2 id="upcoming-mockups-heading" style="margin-top: 0.25rem;">Preview Upcoming Showcase Studio &amp; Launcher Studio Concepts</h2>
      <div class="shot-grid">
        ${I(j.showcase90s)}
        ${I(j.showcaseModern)}
        ${I(j.launcherIde)}
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="shared-dna-heading">
      <span class="eyebrow">Shared RaggieSoft Studio Engineering Standards</span>
      <h2 id="shared-dna-heading" style="margin-top: 0.25rem;">Six Non-Negotiable Commitments Across All Eight Studio Tools</h2>
      <div class="table-wrap" style="margin-bottom: 0;">
        <table>
          <caption>Shared Architectural Standards Across the 8-Product RaggieSoft Studio Suite</caption>
          <thead>
            <tr>
              <th scope="col">Engineering Pillar</th>
              <th scope="col">Suite-Wide Implementation</th>
              <th scope="col">Developer &amp; Customer Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Plain-Text Diffable Projects</th>
              <td>Comment-preserving <code>.rsip</code> (Installer), <code>.a11yproj</code> (Accessibility), <code>.rstp</code> (Training), <code>.rshp</code> (Help), <code>.rsdp</code> (Document), <code>.rsloc</code> (Localization), <code>.rslp</code> (Launcher), and <code>.rssp</code> (Showcase)</td>
              <td>Clean Git pull-request diffs, zero opaque binary lock-in, and deterministic AI coding-agent authoring.</td>
            </tr>
            <tr>
              <th scope="row">WCAG 2.2 AA &amp; Auto-VPAT 2.5</th>
              <td>Compile-time accessibility gates, <code>&ge; 4.5:1</code> Dark/Light contrast, <code>forced-colors</code> / <code>SPI_GETHIGHCONTRAST</code> overrides, and HTML5 VPAT 2.5 generation</td>
              <td>Every developer IDE and every exported installer, SCORM course, help manual, PDF, and launcher passes accessibility procurement out of the box.</td>
            </tr>
            <tr>
              <th scope="row">Native <code>x64</code> &amp; <code>ARM64</code> Silicon</th>
              <td>First-class Windows 11 <code>x64</code> and native <code>ARM64</code> binaries (.NET 11 &amp; static <code>/MT</code> C++20) paired with <code>IsWow64Process2</code> universal launchers</td>
              <td>Instant cold startup on both Intel/AMD workstations and Snapdragon Windows on ARM laptops without emulation penalties.</td>
            </tr>
            <tr>
              <th scope="row">Unified Offline <code>F1</code> Help</th>
              <td>Modular <code>.rshm.json</code> HTML5 manuals &amp; legacy <code>.hhp</code>/<code>.chm</code> migration rendered in <code>&lt; 5ms</code> by zero-dependency <code>RaggieSoftHelp.exe</code></td>
              <td>Press <code>F1</code> anywhere—even on air-gapped networks or UNC shares where legacy <code>.CHM</code> files fail.</td>
            </tr>
            <tr>
              <th scope="row">Public Trust Signing</th>
              <td>Dual-Layer Microsoft Azure Artifact Signing + RFC 3161 SHA-256 timestamps + <code>bcrypt.dll</code> digest checks</td>
              <td>Cryptographic tamper protection across inner payloads, outer bootstrappers, and static-CDN catalog updates.</td>
            </tr>
            <tr>
              <th scope="row">Zero Telemetry &amp; 4-Tier Suite Symmetry</th>
              <td>All 8 tools &amp; All-Access Suite bundles share <a href="/installer-studio/editions"><code>Community == Architect</code></a>, <code>Essentials</code>, <code>Developer</code> (with <strong><code>RaggieScript</code></strong> across all 8 tools!), and <code>Architect</code></td>
              <td>Hobbyists, students, educators, and OSS maintainers get the full 8-tool <strong>RaggieSoft Studio Community Suite</strong> free with zero watermarks, while commercial teams scale cleanly.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function ge(e){return`
    <section class="calc-panel" aria-label="${e.productName} Four-Edition Lineup and Roadmap Status">
      <span class="eyebrow">Suite-Wide 4-Edition Symmetry • ${e.statusNote}</span>
      <h2 style="margin-top: 0.25rem;">${e.productName} — Four Named Editions (<code>Community == Architect</code>)</h2>
      <p style="margin-top: 0;">
        Available standalone or bundled inside the 8-tool <strong>All-Access RaggieSoft Studio Suite</strong>—including the free
        <strong>RaggieSoft Studio Community Edition Suite</strong> for hobbyists, students, educators, and open-source authors.
      </p>
      <div class="pipeline-grid" style="margin-bottom: 1rem;">
        <article class="pipeline-step">
          <span class="pipeline-num">Free • Hobbyist, EDU &amp; OSS</span>
          <h3>Community Edition</h3>
          <p style="margin-bottom: 0;"><strong>100% technical parity with Architect Edition</strong>, zero watermarks, and full publisher ownership.</p>
        </article>
        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 1 • 1 Seat</span>
          <h3>Essentials Edition</h3>
          <p style="margin-bottom: 0;">${e.essentialsSummary}</p>
        </article>
        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 2 • + CI/CD</span>
          <h3>Developer Edition</h3>
          <p style="margin-bottom: 0;">${e.developerSummary}</p>
        </article>
        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 3 • Enterprise</span>
          <h3>Architect Edition</h3>
          <p style="margin-bottom: 0;">${e.architectSummary}</p>
        </article>
      </div>
      <div class="btn-row" style="margin-top: 0.5rem;">
        <a class="btn btn-primary" href="/editions">Compare All 8 Products &amp; Suite Bundles &rarr;</a>
        <a class="btn btn-outline" href="/raggiescript">Explore RaggieScript (.rssc) Profile &rarr;</a>
      </div>
    </section>
  `}function br(){return`
    <section class="hero" aria-labelledby="suite-editions-title">
      <span class="eyebrow">All 8 Studio Products + All-Access Suites • Community == 100% Architect Parity</span>
      <h1 id="suite-editions-title">RaggieSoft Studio Editions &amp; All-Access Suite Matrix</h1>
      <p class="lead">
        Every product in the <strong>8-tool RaggieSoft Studio lineup</strong>—<em>Installer</em>, <em>Showcase</em>,
        <em>Launcher</em>, <em>Help</em>, <em>Training</em>, <em>Document</em>, <em>Localization</em>, and
        <em>Accessibility Studio</em>—adopts the exact same four named editions (<strong>Community</strong>,
        <strong>Essentials</strong>, <strong>Developer</strong>, and <strong>Architect</strong>), available individually or as a
        unified <strong>All-Access RaggieSoft Studio Suite</strong> license—explicitly including our free
        <strong>RaggieSoft Studio Community Edition Suite</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${ie}">Download Installer Studio v0.5.0 Preview</a>
        <a class="btn btn-outline" href="${Ai}">Download Accessibility Studio v1.0.0</a>
        <a class="btn btn-outline" href="/installer-studio/editions">Detailed 25-Row Installer Matrix &rarr;</a>
        <a class="btn btn-outline" href="/raggiescript">Explore RaggieScript (.rssc) &rarr;</a>
      </div>
      ${pe()}
    </section>

    <section class="lms-sandbox" aria-labelledby="edition-recommender-heading" x-data="{ orgType: 'indie', toolScope: 'suite' }">
      <span class="eyebrow">Interactive Licensing Advisor • Zero-Account Evaluation</span>
      <h2 id="edition-recommender-heading" style="margin-top: 0.25rem;">Which Edition or All-Access Suite Fits Your Workflow?</h2>
      <div class="calc-controls" style="margin-top: 0.85rem;">
        <div class="field-group">
          <label for="rec-org">1. Who is building and shipping?</label>
          <select id="rec-org" x-model="orgType" style="border-radius: 0.5rem; border: 1px solid var(--border); background: var(--bg); color: var(--text);">
            <option value="indie">Hobbyist, Student, Educator, Non-Profit, OSS, or Micro-Indie</option>
            <option value="solo_isv">Commercial Solo ISV / Desktop App Publisher (Guided No-Code)</option>
            <option value="team_ci">Commercial Engineering Team (RaggieScript + Headless CI/CD)</option>
            <option value="enterprise">Enterprise, Government / Section 508, or Multi-Product Suite Publisher</option>
          </select>
        </div>
        <div class="field-group">
          <label for="rec-scope">2. How many Studio tools do you need?</label>
          <select id="rec-scope" x-model="toolScope" style="border-radius: 0.5rem; border: 1px solid var(--border); background: var(--bg); color: var(--text);">
            <option value="suite">2+ Tools (Packaging + Help + A11y + Showcase / Full 8-Tool Suite)</option>
            <option value="single">Just 1 Standalone Tool (e.g., Installer Studio or Training Studio)</option>
            <option value="sfx_only">Only Basic Folder / .ZIP Self-Extractors (%TEMP% Wrapper)</option>
          </select>
        </div>
      </div>

      <div class="lms-sim-card" aria-live="polite">
        <div x-show="toolScope === 'sfx_only'">
          <span class="release-badge">Recommended: Standalone Self-Extractor Utility (rswsfx.exe)</span>
          <h3>Standalone RaggieSoft Self-Extractor (<code>rswsfx.exe</code> — Coming in <code>v0.6.0</code>)</h3>
          <p style="margin-bottom: 0;">
            If you only need to wrap a folder or <code>.zip</code> into a signed <code>LZMS</code> single-file <code>.exe</code>
            (including silent extraction to <code>%TEMP%</code>, launching an inner setup, waiting on child cleanup helpers like
            <code>_ISDEL.EXE</code>, and scrubbing <code>%TEMP%</code> afterward), our standalone <strong>Self-Extractor</strong>
            utility handles the job without needing a full MSI authoring IDE—and is also bundled inside every edition of Installer Studio!
          </p>
        </div>
        <div x-show="toolScope !== 'sfx_only' && orgType === 'indie'" style="display: none;">
          <span class="release-badge">Recommended: Free Community Edition (100% Architect Parity)</span>
          <h3 x-text="toolScope === 'suite' ? 'RaggieSoft Studio Community Edition Suite (All 8 Tools — Free)' : 'Standalone Community Edition (100% Architect Parity — Free)'">RaggieSoft Studio Community Edition Suite</h3>
          <p style="margin-bottom: 0;">
            Unlocks <strong>100% of Architect Edition</strong> across all 8 Studio tools—including <code>RaggieScript</code>
            (<code>.rssc</code>), Showcase Studio bespoke <code>_support\\</code> canvas installers, <code>.rsis</code> Dual-Bar
            Suites, <code>.MSP</code> binary-delta patches, and automated HTML5 VPAT 2.5 exports—with <strong>zero watermarks</strong>!
          </p>
        </div>
        <div x-show="toolScope !== 'sfx_only' && orgType === 'solo_isv'" style="display: none;">
          <span class="release-badge">Recommended: Commercial Tier 1 — Essentials</span>
          <h3 x-text="toolScope === 'suite' ? 'All-Access RaggieSoft Studio Essentials Suite' : 'Standalone Product — Essentials Edition'">All-Access RaggieSoft Studio Essentials Suite</h3>
          <p style="margin-bottom: 0;">
            Built for 1-workstation guided commercial shipping: native <code>x64</code> &amp; <code>ARM64</code> <code>.MSI</code> +
            <code>Setup.exe</code>, <code>sfx</code> self-extractors, <code>.MSM</code> Merge Module consumption, Major Upgrades,
            WCAG 2.2 AA runtime UI, and full Authenticode / Azure Artifact Signing.
          </p>
        </div>
        <div x-show="toolScope !== 'sfx_only' && orgType === 'team_ci'" style="display: none;">
          <span class="release-badge">Recommended: Commercial Tier 2 — Developer</span>
          <h3 x-text="toolScope === 'suite' ? 'All-Access RaggieSoft Studio Developer Suite' : 'Standalone Product — Developer Edition'">All-Access RaggieSoft Studio Developer Suite</h3>
          <p style="margin-bottom: 0;">
            Unlocks <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> across your tools, <code>.MSM</code> Merge Module
            creation, custom C++ &amp; <code>MSI.DLL</code> dialog designers, legacy <code>.CHM</code> / VB6 <code>.vbp</code> /
            <code>.slnx</code> importers, <code>msiprism.exe</code>, SARIF 2.1.0 gates, and headless GitHub Actions / Azure DevOps build agents.
          </p>
        </div>
        <div x-show="toolScope !== 'sfx_only' && orgType === 'enterprise'" style="display: none;">
          <span class="release-badge">Recommended: Commercial Tier 3 — Architect</span>
          <h3 x-text="toolScope === 'suite' ? 'All-Access RaggieSoft Studio Architect Suite (Complete 8-Tool Flagship)' : 'Standalone Product — Architect Edition'">All-Access RaggieSoft Studio Architect Suite</h3>
          <p style="margin-bottom: 0;">
            Unlocks <strong>Unified Multi-Product <code>.rsis</code> Suites</strong> (monotonic Dual-Bar progress + dynamic
            <code>ARPSYSTEMCOMPONENT</code> adoption), <strong>Showcase Studio bespoke <code>_support\\</code> canvas installers</strong>,
            <code>.MSP</code> binary-delta patches, federated cross-product Help &amp; Translation Memory, and one-command
            <strong>HTML5 VPAT 2.5</strong> conformance reports across every tool.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="eight-tool-matrix-heading" x-data="{ suiteCat: 'all' }">
      <span class="eyebrow">Complete 8-Product × 4-Edition Master Table</span>
      <h2 id="eight-tool-matrix-heading" style="margin-top: 0.25rem;">How Community, Essentials, Developer &amp; Architect Map Across All 8 Tools</h2>
      <div class="btn-row" role="group" aria-label="Filter 8-tool edition matrix by discipline" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="suiteCat === 'all' ? 'btn-primary' : 'btn-outline'" @click="suiteCat = 'all'">All 8 Studio Products</button>
        <button type="button" class="btn" :class="suiteCat === 'pkg' ? 'btn-primary' : 'btn-outline'" @click="suiteCat = 'pkg'">Packaging, Hubs &amp; Showcase (3)</button>
        <button type="button" class="btn" :class="suiteCat === 'docs' ? 'btn-primary' : 'btn-outline'" @click="suiteCat = 'docs'">Help, Docs, Localization, Training &amp; A11y (5)</button>
      </div>

      <div class="table-wrap">
        <table>
          <caption>Suite-Wide Edition Capabilities Across All 8 RaggieSoft Studio Tools (Community Permanently Equals Architect)</caption>
          <thead>
            <tr>
              <th scope="col">RaggieSoft Studio Product</th>
              <th scope="col">Essentials<br /><small>(Tier 1: Guided 1-Seat)</small></th>
              <th scope="col">Developer<br /><small>(Tier 2: RaggieScript &amp; CI/CD)</small></th>
              <th scope="col">Architect &amp; Community<br /><small>(Tier 3 / Free Community Parity)</small></th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="suiteCat === 'all' || suiteCat === 'pkg'">
              <th scope="row"><a href="/installer-studio">1. Installer Studio</a><br /><small><code>.rsip</code> / <code>.rsis</code> • C++20</small></th>
              <td><code>.MSI</code> + <code>Setup.exe</code>, <code>sfx</code> + <code>rswsfx.exe</code>, consume <code>.MSM</code>, Major Upgrades, 11 Wizard Styles, Azure Signing</td>
              <td>+ Compile <code>.MSM</code>, <strong><code>RaggieScript</code></strong> (<code>installer.*</code>), Custom C++ &amp; SQL Dialogs, <code>.slnx</code>/VB6 <code>.vbp</code> importers, <code>msiprism</code>, CI/CD</td>
              <td>+ <strong>Unified <code>.rsis</code> Dual-Bar Suites</strong>, <code>.MSP</code> binary-delta patches &amp; <code>.MST</code>, Disk Spanning / <code>msiexec /a</code>, <code>.rswpak</code>, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'pkg'">
              <th scope="row"><a href="/showcase-studio">2. Showcase Studio</a><br /><small><code>.rssp</code> • C++20</small></th>
              <td>Visual 1990s <code>.BMP</code> &amp; <code>FluentMica</code> menus, declarative launch actions, 4-way focus matrix, High-Contrast fallback</td>
              <td>+ <strong><code>RaggieScript</code></strong> (<code>showcase.*</code> reactive menus, <code>msi.isInstalled</code> Install &harr; Launch states), custom templates, CI/CD</td>
              <td>+ <strong>Bespoke Full-Canvas Self-Extracting Installers</strong> (<code>_support\\</code> staging, <code>fs.*</code>, <code>reg.*</code>, <code>shortcut.*</code>, UAC manifest, rollback), Suite front-door, Kiosk Mode, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'pkg'">
              <th scope="row"><a href="/launcher-studio">3. Launcher Studio</a><br /><small><code>.rslp</code> • .NET 11</small></th>
              <td>Guided single-channel branded desktop app/media hub + static <code>catalog.json</code> + SHA-256 / Authenticode check</td>
              <td>+ <strong><code>RaggieScript</code></strong> (<code>launcher.*</code> pre-launch/GPU checks), <code>stable</code>/<code>beta</code> rings, delta updates, CI/CD</td>
              <td>+ Air-gapped Intranet / UNC mirror mode, enterprise GPO templates, multi-brand hubs, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'docs'">
              <th scope="row"><a href="/help-studio">4. Help Studio</a><br /><small><code>.rshp</code> • C++20 / .NET 11</small></th>
              <td>Visual Markdown/HTML5 &rarr; <code>.rshm</code> module + standalone zero-dependency <code>Help.exe</code> + static web manual</td>
              <td>+ <strong>Legacy <code>.CHM</code> / <code>.hhp</code> Decompiler &amp; Importer</strong>, <strong><code>RaggieScript</code></strong> (<code>help.*</code>), C++/C#/VB6 <code>F1</code> SDK, CI/CD</td>
              <td>+ <strong>Cross-Suite Federated Help Search</strong> (merging N product manuals), conditional OEM tags, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'docs'">
              <th scope="row"><a href="/training-studio">5. Training Studio</a><br /><small><code>.rstp</code> • .NET 11</small></th>
              <td>Visual <code>.rstp</code> + Markdown + <code>.vtt</code> &rarr; <code>&lt;50 KB</code> proxy-proof SCORM 1.2 &amp; 2004 <code>.zip</code></td>
              <td>+ <strong><code>RaggieScript</code></strong> (<code>training.*</code> ES2022 branching scenarios &amp; custom rubrics), Hostile LMS Simulator, CI/CD</td>
              <td>+ <strong><code>audit-scorm</code> Third-Party SCORM <code>.zip</code> Auditor</strong>, multi-course curricula, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'docs'">
              <th scope="row"><a href="/document-studio">6. Document Studio</a><br /><small><code>.rsdp</code> • .NET 11</small></th>
              <td>Visual <code>.rsdp</code> + Markdown &rarr; machine-verified ISO 14289-1 Tagged <code>PDF/UA-1</code> + accessible HTML5</td>
              <td>+ <strong>Accessible Fillable AcroForm Builder</strong>, <strong><code>RaggieScript</code></strong> (<code>document.*</code> JSON/CSV batch merge), CI/CD</td>
              <td>+ Full Matterhorn Protocol Certificate, <code>PDF/A-2a + PDF/UA-1</code> dual archival stamp, <strong>Auto-VPAT 2.5</strong></td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'docs'">
              <th scope="row"><a href="/localization-studio">7. Localization Studio</a><br /><small><code>.rsloc</code> • .NET 11</small></th>
              <td>Side-by-side <code>.RESX</code>, <code>XLIFF 2.1</code>, <code>.rsip</code>, <code>.rstp</code> &amp; <code>.vtt</code> editor + locked placeholder tokens</td>
              <td>+ Automated Win32 <code>&amp;</code> mnemonic clash solver, <code>&le;22 CPS</code> caption gate, <strong><code>RaggieScript</code></strong> (<code>localization.*</code>), CI/CD</td>
              <td>+ <strong>Cross-Suite Shared Translation Memory &amp; Glossary</strong> across apps/help/SCORM + Multilingual VPAT 2.5</td>
            </tr>
            <tr x-show="suiteCat === 'all' || suiteCat === 'docs'">
              <th scope="row"><a href="/accessibility-studio">8. Accessibility Studio</a><br /><small><code>.a11yproj</code> • .NET 11</small></th>
              <td>Desktop IDE (<code>AccessibilityStudio.exe</code>) single-project WCAG 2.2 AA source audit &amp; Monaco Guided Fix diffs</td>
              <td>+ <strong><code>RaggieScript</code></strong> (<code>a11y.*</code> custom org rules), headless <code>a11y-studio-cli</code> CI/CD gates &amp; SARIF 2.1.0</td>
              <td>+ <strong>Executive HTML5 VPAT 2.5 Generator</strong>, multi-repo portfolio rollups, &amp; Enterprise GPO MSI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function Sr(){return`
    <section class="hero" aria-labelledby="rssc-hero-title">
      <span class="eyebrow">RaggieScript (.rssc) • Unified Studio &amp; Zero-Dependency Windows Micro-App Language</span>
      <h1 id="rssc-hero-title">One Clean Curly-Brace Language Across All Eight Studio Tools.</h1>
      <p class="lead">
        <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> combines familiar C# / TypeScript curly-brace syntax with a
        compact <code>&lt;200 KB</code> static <code>/MT</code> C++20 bytecode VM (<code>RSWBC1</code> + standalone
        <code>raggiescript.exe</code> CLI) and capability-gated host profiles. It is <strong>not</strong> trying to replace C# or
        heavy application frameworks—instead, it owns <strong>zero-prerequisite (<code>0 MB</code> runtime) Windows micro-apps,
        transactional zero-MSI installers, bespoke <code>_support\\</code> collector launchpads, and embedded Studio automation</strong>
        across <strong>Community</strong>, <strong>Developer</strong>, and <strong>Architect</strong> editions.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#rssc-playground">Try 5-Profile Code Playground &darr;</a>
        <a class="btn btn-outline" href="/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Read Full Language Spec (.md)</a>
        <a class="btn btn-outline" href="https://raggiesoft.dev/labs/finsharp">Explore Sibling Fin# Compiler Lab (raggiesoft.dev) &rarr;</a>
      </div>
    </section>

    <section id="rssc-playground" class="lms-sandbox" aria-labelledby="rssc-play-heading" x-data="{ profile: 'showcase' }">
      <span class="eyebrow">Interactive 5-Profile Language Explorer • Compile-Time Capability Sandbox</span>
      <h2 id="rssc-play-heading" style="margin-top: 0.25rem;">Inspect How <code>RaggieScript</code> Adapts Across Studio Hosts &amp; Standalone EXEs</h2>
      <div class="btn-row" role="tablist" aria-label="Select RaggieScript Host Profile" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="profile === 'showcase' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(profile === 'showcase')" @click="profile = 'showcase'">1. Showcase _support\\ Canvas Installer</button>
        <button type="button" class="btn" :class="profile === 'installer' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(profile === 'installer')" @click="profile = 'installer'">2. Installer Zero-MSI Setup</button>
        <button type="button" class="btn" :class="profile === 'microapp' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(profile === 'microapp')" @click="profile = 'microapp'">3. Standalone Windows Micro-App</button>
        <button type="button" class="btn" :class="profile === 'training' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(profile === 'training')" @click="profile = 'training'">4. Training SCORM Branching</button>
        <button type="button" class="btn" :class="profile === 'a11y' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(profile === 'a11y')" @click="profile = 'a11y'">5. Custom A11y &amp; Localization Gate</button>
      </div>

      <div x-show="profile === 'showcase'">
        <p style="margin-top: 0;">
          <strong>Profile: <code>use showcase; use installer;</code> (Showcase Studio — Community &amp; Architect):</strong>
          Bundle payload files inside an embedded self-extracting <code>_support\\</code> staging directory, stamp your exact UAC
          manifest (<code>Uac.AsInvoker</code>, <code>Uac.HighestAvailable</code>, or <code>Uac.RequireAdministrator</code>), and
          drive full file copy/extraction, Registry keys, and Start Menu shortcuts from a custom-painted <code>.BMP</code> or
          <code>FluentMica</code> canvas—with automatic rollback journaling!
        </p>
        <pre aria-label="RaggieScript Showcase Studio Bespoke Canvas Installer with _support Directory">use std;
use showcase;
use installer; // Unlocked in Showcase Studio Community &amp; Architect Editions

showcase "Starlight Collector's Box Set" {
  style:      CanvasStyle.RetroBmp95;       // Or CanvasStyle.FluentMica16x9
  uac:        Uac.RequireAdministrator;     // asInvoker | highestAvailable | requireAdministrator
  supportDir: "./_support";                 // Bundled into self-extracting EXE &amp; unpacked on demand
  autoPlay:   false;                        // Enforced false by WCAG 2.2 SC 1.4.2
}

let destDir: path = sys.programFiles / "Starlight" / "CollectorEdition";

on hotspot("BtnInstall").click {
  installer.runTransaction(productId: "{7C91E240-41B0-4F92-9A2E-88B12044E901}") {
    // Every fs.*, reg.*, and shortcut.* call auto-journals to .rsw-rollback.jnl!
    fs.copyTree(from: sys.supportDir / "CoreGame", to: destDir, progress: "MainProgressBar");
    fs.copy(from: sys.supportDir / "Soundtrack-Lossless.pak", to: destDir / "Audio" / "Soundtrack.pak");

    reg.writeString(Hive.HKLM, "Software\\Starlight\\CollectorEdition", "InstallPath", str(destDir));
    shortcut.create(ShortcutLocation.StartMenu, "Starlight Collector's Edition", destDir / "Starlight.exe");
    shortcut.create(ShortcutLocation.Desktop,   "Starlight Collector's Edition", destDir / "Starlight.exe");
  }
  showcase.setHotspotLabel("BtnInstall", "&amp;Launch Collector's Edition");
}</pre>
      </div>

      <div x-show="profile === 'installer'" style="display: none;">
        <p style="margin-top: 0;">
          <strong>Profile: <code>use installer;</code> (Installer Studio — Community, Developer &amp; Architect):</strong>
          Compile 100% standalone zero-MSI <code>.rssc</code> installers (<code>/DELAYLOAD:msi.dll</code>, zero
          <code>Global_MSIExecute</code> mutex contention) with compile-time <code>wizard</code> vs. <code>install</code> phase isolation.
        </p>
        <pre aria-label="RaggieScript Zero-MSI Native Installer">use std;
use installer;

package "Sample Studio Workbench" {
  id:      "{9B4E20A1-7C93-4D62-9B44-524147474950}";
  version: 1.2.0;
  uac:     Uac.AsInvoker;          // Prompts for UAC only when clicking Install!
  style:   WizardStyle.FluentMica;
}

param installDir: path = sys.programFiles / "Sample Studio" / "Workbench";
payload AppBins { from "..\\publish\\win-\${arch}\\*" -&gt; installDir; }

wizard {
  step Welcome     { ui.welcome("Welcome to Sample Studio Workbench"); }
  step Destination { ui.folderPicker(label: "&amp;Destination folder:", bind: ref installDir); }
  step Ready       { ui.readySummary(installButton: "&amp;Install"); }
}

install {
  fs.extract(AppBins);
  reg.writeString(Hive.HKLM, "Software\\SampleStudio\\Workbench", "Version", "1.2.0");
  shortcut.create(ShortcutLocation.StartMenu, "Sample Studio Workbench", installDir / "Workbench.exe");
}</pre>
      </div>

      <div x-show="profile === 'microapp'" style="display: none;">
        <p style="margin-top: 0;">
          <strong>Profile: <code>use std; use ui.dialog;</code> (Standalone <code>raggiescript.exe --compile-exe</code>):</strong>
          Build single-file <code>&lt;250 KB</code> native Windows diagnostic utilities, config patchers, and support tools that run
          on clean Windows 11 <code>x64</code> &amp; <code>ARM64</code> PCs with zero external runtimes.
        </p>
        <pre aria-label="RaggieScript Standalone General-Purpose Windows Utility">use std;
use ui.dialog;

app "Audio Endpoint Diagnostic Utility" {
  uac:   Uac.AsInvoker;
  theme: Theme.FollowSystemWithHighContrast;
}

fn main(): int {
  let cfgPath: path = sys.localAppData / "SampleStudio" / "audio-settings.json";
  if (!fs.exists(cfgPath)) {
    ui.info("No local audio profile found; writing clean default configuration.");
    fs.writeJson(cfgPath, { sampleRateHz: 48000, exclusiveMode: false });
  }
  let digest: string = crypto.sha256File(cfgPath);
  ui.taskDialog(title: "Profile Verified", body: "SHA-256: " + digest);
  return 0;
}</pre>
      </div>

      <div x-show="profile === 'training'" style="display: none;">
        <p style="margin-top: 0;">
          <strong>Profile: <code>use training;</code> (Training Studio — Sandboxed ES2022 Target, Zero Filesystem/Network Access):</strong>
          Author deterministic branching scenarios and weighted quiz rubrics that transpile into clean, <code>eval()</code>-free
          ES2022 inside <code>&lt;50 KB</code> SCORM 1.2 &amp; SCORM 2004 packages.
        </p>
        <pre aria-label="RaggieScript Training Studio SCORM Branching Rubric">use training; // Filesystem, Registry &amp; Process namespaces forbidden at compile time!

scenario "CaptionComplianceCheck" {
  on answer(questionId: "Q3_ReadingSpeed", choice: selected) {
    if (selected == "Over30Cps") {
      course.routeRemediation(slideId: "Slide04_CaptionPacing");
      course.announcePolite("Reviewing WCAG caption reading-speed guidance before retry.");
    } else {
      course.awardPoints(points: 25, objectiveId: "OBJ_WCAG_CAPTIONS");
    }
  }
}</pre>
      </div>

      <div x-show="profile === 'a11y'" style="display: none;">
        <p style="margin-top: 0;">
          <strong>Profile: <code>use a11y; use localization;</code> (Accessibility &amp; Localization Studio CI/CD Rules):</strong>
          Enforce organization-specific design tokens, ARIA landmarks, and localized caption constraints emitting OASIS SARIF 2.1.0.
        </p>
        <pre aria-label="RaggieScript Custom Accessibility and Localization Lint Rule">use a11y;
use localization;

rule "ORG-A11Y-014: Brand Dialog Buttons Must Preserve Keyboard Accelerators" {
  severity: Severity.Error;
  on localizedString(src, target, locale) {
    if (localization.hasMnemonic(src) &amp;&amp; !localization.hasMnemonic(target)) {
      report.error(code: "ORG-A11Y-014", message: "Missing '&amp;' keyboard accelerator in locale " + locale);
    }
  }
}</pre>
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="finsharp-bridge-heading">
      <span class="eyebrow">Compiler Engineering Cross-Pollination • RaggieSoft Labs</span>
      <h2 id="finsharp-bridge-heading" style="margin-top: 0.25rem;">From <code>RaggieScript</code> Phase Isolation to Zo&euml;'s <code>Fin#</code> Linear-Type Compiler</h2>
      <p>
        <code>RaggieScript</code>'s compile-time separation between side-effect-free <code>wizard { ... }</code> steps and
        double-entry journaled <code>install { ... }</code> blocks shares architectural DNA with our experimental
        <strong>RaggieSoft Labs</strong> research project on <a href="https://raggiesoft.dev/labs/finsharp"><strong><code>Fin#</code>
        (<em>Financial Sharp</em> — <code>raggiesoft.dev/labs/finsharp</code>)</strong></a>—a domain-specific <code>.NET</code> /
        Roslyn-inspired financial compiler enforcing conservation of capital at compile time!
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://raggiesoft.dev/labs/finsharp">Visit Fin# Compiler Lab on raggiesoft.dev &rarr;</a>
        <a class="btn btn-outline" href="/editions">View Suite-Wide Editions Matrix</a>
      </div>
    </section>
  `}function yr(){return`
    <section class="hero" aria-labelledby="training-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Training Studio • v0.1.0 .NET 11 Compiler &amp; SCORM 1.2 / 2004 Runtime</span>
          <h1 id="training-studio-title">Bandwidth-Proof WCAG 2.2 AA Compliance Courseware — Zero 400 MB MP4 Stalls.</h1>
          <p class="lead">
            Born from rescuing a 14-slide municipal ADA Title II training module that baked static slides into 400+ MB
            progressive <code>.mp4</code> files and stalled across congested enterprise WAN proxies,
            <strong>RaggieSoft Training Studio</strong> (<code>rstbuild</code>) compiles Git-diffable <code>.rstp</code>
            manifests, Markdown slides, compact <code>48 kbps</code> Opus / AAC voiceovers, and verified <code>.vtt</code>
            captions into self-contained <strong>SCORM 1.2</strong> and <strong>SCORM 2004 (4th Ed.)</strong> packages
            (<code>&lt;50 KB</code> player) with an <strong>automatic HTML5 VPAT 2.5 report</strong> in the box.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#hostile-lms-demo">Try Interactive Proxy-Drop Simulator &darr;</a>
            <a class="btn btn-outline" href="/training-studio/live-player/index.html">Launch Full Compiled 3-Slide Player &rarr;</a>
            <a class="btn btn-outline" href="/training-studio/ada-title-ii-fundamentals-vpat-2.5.html">View Auto-Generated VPAT 2.5</a>
            <a class="btn btn-outline" href="/training-studio/ada-title-ii-fundamentals-scorm12.zip">Download SCORM 1.2 Sample (181 KB)</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${ir}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Training Studio — Zero-Bloat SCORM 1.2 and 2004 Courseware Compiler."
          />
        </figure>
      </div>
    </section>

    <section id="hostile-lms-demo" class="lms-sandbox" aria-labelledby="lms-demo-heading"
      x-data="{
        curSec: 12,
        maxWatched: 12,
        duration: 45,
        proxyDown: false,
        http206Stall: false,
        walPending: false,
        syncText: 'Progress Saved (slide-1@12.0s)',
        logs: [
          '[12:00:01] [SCORM 1.2] OK   LMSInitialize("")',
          '[12:00:01] [SCORM 1.2] OK   LMSSetValue(cmi.core.lesson_status = incomplete)',
          '[12:00:10] [SCORM 1.2] OK   LMSSetValue(cmi.core.lesson_location = slide-1@10.0s)',
          '[12:00:10] [SCORM 1.2] OK   LMSCommit("") -> 214 / 4,096 chars'
        ],
        advanceTenSec() {
          if (this.http206Stall) return;
          this.curSec = Math.min(this.duration, this.curSec + 10);
          this.maxWatched = Math.max(this.maxWatched, this.curSec);
          const bm = 'slide-1@' + this.curSec.toFixed(1) + 's';
          if (this.proxyDown) {
            this.walPending = true;
            this.syncText = 'Offline / Proxy Drop — Held in Local WAL (' + bm + ')';
            this.logs.unshift('[WAL QUEUE] SAVED locally -> ' + bm + ' (LMSCommit blocked by HTTP 502)');
          } else {
            this.walPending = false;
            this.syncText = 'Progress Saved (' + bm + ')';
            this.logs.unshift('[SCORM 1.2] OK   LMSCommit(' + bm + ') -> 218 / 4,096 chars');
          }
        },
        toggleProxy() {
          this.proxyDown = !this.proxyDown;
          if (this.proxyDown) {
            this.syncText = 'Proxy Dropped — Write-Ahead Queue Armed';
            this.logs.unshift('[FAULT INJ] Enterprise WAN Proxy set to HTTP 502 Bad Gateway');
          } else {
            const bm = 'slide-1@' + this.curSec.toFixed(1) + 's';
            this.walPending = false;
            this.syncText = 'Reconnected — Queued Checkpoint Replayed (' + bm + ')';
            this.logs.unshift('[RECOVERY ] OK   Replayed WAL -> LMSCommit(' + bm + ') succeeded!');
          }
        },
        toggleStall() {
          this.http206Stall = !this.http206Stall;
          this.logs.unshift(this.http206Stall
            ? '[FAULT INJ] HTTP 206 Byte-Range Stalled -> Exponential Backoff Armed (1s, 2s, 4s)'
            : '[RECOVERY ] Chunk stream resumed cleanly at ' + this.curSec.toFixed(1) + 's (Zero F12 needed!)');
        }
      }"
    >
      <span class="eyebrow">Interactive Architecture Proof • Test Fault Recovery Right in Your Browser</span>
      <h2 id="lms-demo-heading" style="margin-top: 0.25rem;">"Hostile Enterprise LMS" Fault-Injection Simulator</h2>
      <p style="margin-top: 0;">
        Toggle a corporate proxy drop below, advance the lesson timer, and watch the Write-Ahead Log (WAL) protect every
        watched second—then restore connectivity to watch the atomic <code>LMSCommit()</code> replay automatically.
      </p>

      <div class="btn-row" role="group" aria-label="Fault Injection Controls">
        <button type="button" class="btn btn-primary" @click="advanceTenSec()" :disabled="http206Stall">
          +10s Watch Time (Trigger Cue Checkpoint)
        </button>
        <button type="button" class="btn btn-outline" @click="toggleProxy()" :aria-pressed="proxyDown.toString()">
          <span x-text="proxyDown ? 'Restore LMS Network (Replay Queue)' : 'Simulate Proxy Drop (HTTP 502)'">Simulate Proxy Drop (HTTP 502)</span>
        </button>
        <button type="button" class="btn btn-outline" @click="toggleStall()" :aria-pressed="http206Stall.toString()">
          <span x-text="http206Stall ? 'Clear HTTP 206 Stream Stall' : 'Simulate HTTP 206 Range Stall'">Simulate HTTP 206 Range Stall</span>
        </button>
      </div>

      <div class="lms-sandbox-grid">
        <div class="lms-sim-card">
          <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
            <strong>Slide 1: ADA Title II Digital Access</strong>
            <span class="status-pill" :class="proxyDown || http206Stall ? 'status-next' : 'status-shipped'" x-text="syncText">
              Progress Saved (slide-1@12.0s)
            </span>
          </div>
          <label for="demo-scrubber" style="font-size:0.86rem; font-weight:600; display:block; margin-bottom:0.35rem;">
            Compliance Scrubber (Rewind anytime; forward drag locked past Watched Horizon)
          </label>
          <input
            id="demo-scrubber"
            type="range"
            min="0"
            max="45"
            step="1"
            style="width:100%; accent-color:#7c3aed;"
            :value="curSec"
            @input="if (Number($event.target.value) > maxWatched) { $event.target.value = maxWatched; curSec = maxWatched; } else { curSec = Number($event.target.value); }"
          />
          <div style="display:flex; justify-content:space-between; font-size:0.84rem; color:var(--text-muted); margin-top:0.3rem;">
            <span>Current Position: <strong x-text="curSec + 's / 45s'">12s / 45s</strong></span>
            <span>Unlocked Horizon: <strong x-text="maxWatched + 's'">12s</strong></span>
          </div>
        </div>

        <div class="lms-sim-card">
          <strong>Live <code>window.API</code> &amp; Write-Ahead Queue Telemetry</strong>
          <pre class="lms-log-pre" aria-live="polite" x-text="logs.join('\\n')">[12:00:01] [SCORM 1.2] OK   LMSInitialize("")</pre>
        </div>
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="captivate-vs-rsts">
      <span class="eyebrow">Why Municipalities, Hospitals, Universities &amp; Enterprises Switch</span>
      <h2 id="captivate-vs-rsts" style="margin-top: 0.25rem;">Legacy Video-Heavy eLearning vs. RaggieSoft Training Studio</h2>
      <div class="table-wrap" style="margin-bottom: 0;">
        <table>
          <caption>Architectural Comparison Between Legacy SCORM Exports and RaggieSoft Training Studio</caption>
          <thead>
            <tr>
              <th scope="col">Enterprise Failure Mode</th>
              <th scope="col">Legacy Video-Baked SCORM Packages</th>
              <th scope="col">RaggieSoft Training Studio (<code>.rstp</code>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Slide Payload Size</th>
              <td><code>400+ MB</code> progressive <code>.mp4</code> per static slide</td>
              <td>Semantic HTML5/CSS3 + <code>48 kbps</code> Opus audio (<code>~181 KB</code> entire 3-slide sample!)</td>
            </tr>
            <tr>
              <th scope="row">Congested Proxy / WAN Behavior</th>
              <td>Silent <code>HTTP 206</code> byte-range freezes requiring Chrome <code>F12</code></td>
              <td>Visible buffer telemetry + automatic exponential-backoff chunk recovery &amp; HLS skit slicing</td>
            </tr>
            <tr>
              <th scope="row">SCORM Bookmark Reliability</th>
              <td>Lost watch time if session drops before slide exit</td>
              <td>Atomic 10-second cue <code>LMSCommit()</code> + <code>localStorage</code>/<code>IndexedDB</code> Write-Ahead Queue</td>
            </tr>
            <tr>
              <th scope="row">LMS Compatibility</th>
              <td>Single brittle wrapper exceeding <code>4,096</code>-char limits</td>
              <td>Dual <strong>SCORM 1.2</strong> (Oracle Taleo) &amp; <strong>SCORM 2004 4th Ed.</strong> (Workday / DoD)</td>
            </tr>
            <tr>
              <th scope="row">ADA Title II &amp; Section 508 Proof</th>
              <td>Allows exporting uncaptioned, unlabeled slides</td>
              <td>Compile-time WCAG 2.2 AA gate (<code>Exit Code 2</code>) + tailored HTML5 <strong>VPAT 2.5</strong> bundled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    ${ge({productName:"RaggieSoft Training Studio",statusNote:"v0.5.0 Visual IDE & CLI Built • Live SCORM Demo Above",essentialsSummary:"Visual <code>.rstp</code> + Markdown + verified <code>.vtt</code> compiler emitting <code>&lt;50 KB</code> proxy-proof SCORM 1.2 &amp; 2004 packages.",developerSummary:"Adds <code>RaggieScript</code> (<code>training.*</code> branching scenarios &amp; custom rubrics), embedded Hostile LMS Simulator, &amp; CI/CD.",architectSummary:"Adds <code>rstbuild audit-scorm</code> legacy third-party SCORM <code>.zip</code> compliance auditor, multi-course curricula, &amp; Auto-VPAT 2.5."})}
  `}function vr(){return`
    <section class="hero" aria-labelledby="help-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Help Studio v0.5.0 • Static /MT Win32 C++20 • .CHM &amp; WinHelp .HLP Rescue</span>
          <h1 id="help-studio-title">Context Help That Actually Wakes Up on F1 — Plus Turnkey .CHM &amp; .HLP Rescue.</h1>
          <p class="lead">
            Millions of desktop, CAD, laboratory, and industrial Windows applications still depend on 1990s Compiled HTML Help
            (<code>.chm</code> — blocked over network shares under Mark-of-the-Web) or classic WinHelp (<code>.hlp</code> +
            <code>.cnt</code> — completely removed from Windows 10 and 11).
            <strong>RaggieSoft Help Studio (<code>v0.5.0</code>)</strong> is a 100% zero-dependency static <code>/MT</code>
            Win32 C++20 suite (<code>HelpStudio.exe</code>, <code>rshbuild.exe</code>, &amp; <code>RaggieSoftHelp.exe</code>)
            that opens and decompiles raw <strong><code>.chm</code>, <code>.hhp</code>, <code>.hlp</code>, <code>.cnt</code>,
            and Word footnote <code>.rtf</code></strong> archives, scrubs legacy Word <code>MsoNormal</code> inline black styles,
            and compiles modular <code>.rshm</code> packs, single-EXE <code>LZMS</code> viewers, static web portals, and VPAT 2.5!
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/help-studio/web-manual/index.html">Open Compiled Help Studio Web Manual &rarr;</a>
            <a class="btn btn-outline" href="/help-studio/raggiesoft-help-studio-help-vpat-2.5.html">View Auto-Generated VPAT 2.5</a>
            <a class="btn btn-outline" href="/help-studio/llms-full.txt">.rshp Grammar (llms-full.txt)</a>
            <a class="btn btn-outline" href="/installer-studio">Download Installer Studio (Includes RaggieSoftHelp.exe)</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${ar}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Help Studio — Modern Offline F1 Help and Turnkey HTML Help .CHM &amp; WinHelp .HLP Migration."
          />
        </figure>
      </div>
    </section>

    <section aria-labelledby="help-pillars-heading">
      <span class="eyebrow">100% Zero-Dependency Static /MT Win32 C++20 Across x64 &amp; ARM64</span>
      <h2 id="help-pillars-heading" style="margin-top: 0.25rem;">Four Core Capabilities of RaggieSoft Help Studio v0.5.0</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <h3>1. Raw <code>.CHM</code> (<code>ITSF/LZX</code>) &amp; WinHelp <code>.HLP</code>/<code>.CNT</code> Decompilers</h3>
          <p>
            Decompiles binary <code>.chm</code> (<code>LZX</code> streams + <code>#IVB</code> context IDs), <code>.hhp</code>/<code>.hhc</code>/<code>.hhk</code>,
            AND bricked 1990s <code>.hlp</code> (<code>3F 5F 03 00</code> B+ tree + <code>LZ77</code>) + <code>.cnt</code> / Word footnote
            <code>.rtf</code> archives—scrubbing Microsoft Word <code>MsoNormal</code> &amp; FrontPage <code>color:black</code> soup automatically!
          </p>
        </article>
        <article class="card card-highlight">
          <h3>2. Modular <code>.rshm</code> Pack, Single-EXE <code>LZMS</code> Viewer &amp; Direct Rescue Mode</h3>
          <p>
            Ship shared <code>module.rshm.json</code> packs, stamp a single-file <code>LZMS</code>-compressed
            <code>&lt;YourProduct&gt;Help.exe</code> (zero loose files, UNC-share safe!), OR double-click raw <code>.chm</code> and
            <code>.hlp</code> files directly in <code>RaggieSoftHelp.exe</code> on Windows 11!
          </p>
        </article>
        <article class="card">
          <h3>3. Sub-5ms Named Pipe <code>F1</code> Routing &amp; Drop-In SDKs</h3>
          <p>
            Auto-emits <code>RaggieSoftHelpSdk.hpp</code> (1-line <code>WM_HELP</code> &amp; <code>HtmlHelpCompatW</code> C++ shims),
            <code>RaggieSoftHelpSdk.cs</code> (.NET), <code>RaggieSoftHelp.bas</code> (Classic Visual Basic 6!), and TypeScript constants.
          </p>
        </article>
        <article class="card">
          <h3>4. Single-Source Offline Help + Static SEO Web Portal + VPAT 2.5</h3>
          <p>
            Every <code>.rshp</code> build compiles offline desktop help, static WCAG 2.2 AA web documentation pages (with instant search
            &amp; <code>llms.txt</code>), and a procurement-ready HTML5 VPAT 2.5 conformance report from one set of chapters.
          </p>
        </article>
      </div>
    </section>

    <section aria-labelledby="help-shots-heading">
      <span class="eyebrow">Real Native Windows 11 C++20 Captures • Zero Mockups</span>
      <h2 id="help-shots-heading" style="margin-top: 0.25rem;">Inside <code>HelpStudio.exe</code> &amp; Live WinHelp <code>.HLP</code> Rescue</h2>
      <div class="grid-2x2">
        <article class="card">
          <img src="${Ce}/helpstudio-ide-topics.png" alt="Real Windows 11 Dark Mode capture of HelpStudio.exe v0.5.0 showing the 8-view tree-first sidebar, TOC hierarchy, Markdown/HTML5 source editor, and live in-process Msftedit.dll F1 preview." style="width:100%;height:auto;border-radius:8px;margin-bottom:0.75rem;" />
          <h3>8-View Tree-First C++20 IDE &amp; Live <code>Msftedit.dll</code> Preview</h3>
          <p style="margin-bottom:0;">What you preview in the bottom pane is pixel-for-pixel what wakes up on <code>F1</code> across Dark Mode, Light Mode, and <code>SPI_GETHIGHCONTRAST</code>.</p>
        </article>
        <article class="card">
          <img src="${Ce}/helpstudio-viewer-legacy-rescue.png" alt="Real Windows 11 Dark Mode capture of RaggieSoftHelp.exe opening StoreTrainer 1.1 Classic WinHelp .HLP and .CNT directly in Legacy WinHelp Rescue Mode without WinHlp32.exe." style="width:100%;height:auto;border-radius:8px;margin-bottom:0.75rem;" />
          <h3>Direct Windows 11 Rescue Mode for Classic <code>.HLP</code> + <code>.CNT</code> &amp; <code>.CHM</code></h3>
          <p style="margin-bottom:0;">Opens 1990s <code>3F 5F 03 00</code> WinHelp binaries and UNC-share <code>.chm</code> archives directly in memory with zero <code>WinHlp32.exe</code> or <code>mshtml.dll</code> dependencies.</p>
        </article>
      </div>
    </section>

    <section class="lms-sandbox" aria-labelledby="help-sim-heading" x-data="{ ctxId: 'IDH_WIZARD_STYLES', hcMode: false }">
      <span class="eyebrow">Interactive Preview • Sub-5ms Named Pipe F1 Context Routing</span>
      <h2 id="help-sim-heading" style="margin-top: 0.25rem;">Try Legacy <code>HtmlHelpW</code> / <code>WinHelpW</code> &rarr; Native Dark-Mode <code>RaggieSoftHelp.exe</code> Routing</h2>
      <div class="btn-row" role="group" aria-label="Simulate pressing F1 on a dialog control" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="ctxId === 'IDH_WIZARD_STYLES' ? 'btn-primary' : 'btn-outline'" @click="ctxId = 'IDH_WIZARD_STYLES'">Press F1 in Wizard Designer (0x1040)</button>
        <button type="button" class="btn" :class="ctxId === 'IDH_COMPONENT_KEYPATH' ? 'btn-primary' : 'btn-outline'" @click="ctxId = 'IDH_COMPONENT_KEYPATH'">Press F1 in Classic VB6 Form (&amp;H1001)</button>
        <button type="button" class="btn" :class="ctxId === 'IDH_CHM_UNC_SHARE' ? 'btn-primary' : 'btn-outline'" @click="ctxId = 'IDH_CHM_UNC_SHARE'">Test Network UNC Share (\\\\fileserver\\help)</button>
        <button type="button" class="btn btn-outline" @click="hcMode = !hcMode" x-text="hcMode ? 'Disable High-Contrast Preview' : 'Toggle High-Contrast (SPI_GETHIGHCONTRAST)'">Toggle High-Contrast</button>
      </div>
      <div class="lms-sim-card" :style="hcMode ? 'background:#000000; color:#ffff00; border:2px solid #00ffff;' : ''" aria-live="polite">
        <p style="margin: 0 0 0.45rem; font-family: monospace; font-size: 0.86rem;">
          <strong>Named Pipe IPC:</strong> <code>\\\\.\\pipe\\RaggieSoft.HelpViewer.IPC.&lt;User&gt;</code> &bull; Context Symbol: <code x-text="ctxId">IDH_WIZARD_STYLES</code> &bull; Latency: <strong>1.8 ms</strong> (Zero IE <code>mshtml.dll</code>!)
        </p>
        <div x-show="ctxId === 'IDH_WIZARD_STYLES'">
          <h3 style="margin-top: 0.25rem;">Topic Resolved: <code>selection-tree-and-dialogs.html#wizard-styles</code></h3>
          <p style="margin-bottom: 0;">Imported cleanly from legacy <code>[MAP] #define IDH_WIZARD_STYLES 0x1040</code> &amp; binary <code>#IVB</code> tables—rendered natively via <code>System32\\Msftedit.dll</code> with full Dark Mode &amp; High-Contrast compliance.</p>
        </div>
        <div x-show="ctxId === 'IDH_COMPONENT_KEYPATH'" style="display: none;">
          <h3 style="margin-top: 0.25rem;">Classic WinHelp &amp; VB6 Rescued: <code>storetrainer-classic.hlp</code> &rarr; <code>IDH_MAIN_WINDOW</code></h3>
          <p style="margin-bottom: 0;">Generated <code>RaggieSoftHelp.bas</code> &amp; <code>RaggieSoftHelpSdk.hpp</code> wake up modern Windows 11 context help in 1 line—replacing dead <code>WinHlp32.exe</code> calls forever.</p>
        </div>
        <div x-show="ctxId === 'IDH_CHM_UNC_SHARE'" style="display: none;">
          <h3 style="margin-top: 0.25rem;">UNC &amp; Mark-of-the-Web Safe: Renders 100% Intact Over Corporate File Shares</h3>
          <p style="margin-bottom: 0;">Unlike legacy <code>.chm</code> files (which render blank <em>&ldquo;Navigation to the webpage was canceled&rdquo;</em> panes over UNC paths), <code>.rshm</code> modules and single-EXE <code>LZMS</code> viewers run cleanly anywhere.</p>
        </div>
      </div>
    </section>

    ${ge({productName:"RaggieSoft Help Studio",statusNote:"v0.5.0 Static /MT Win32 C++20 IDE, CLI & .CHM/.HLP Rescue Built",essentialsSummary:"Visual <code>.rshp</code> Markdown/HTML5 IDE compiling modular <code>.rshm</code> packs, single-EXE <code>LZMS</code> <code>Help.exe</code> clients, &amp; static web portals.",developerSummary:"Adds turnkey raw <code>.CHM</code> / <code>.hhp</code> &amp; WinHelp <code>.HLP</code> / <code>.cnt</code> / Word <code>.rtf</code> decompilers, <code>RaggieScript</code> filters, &amp; C++/C#/VB6/TS <code>F1</code> SDKs.",architectSummary:"Adds Cross-Suite Federated Help Search across multi-product installations, OEM conditional build tags, &amp; Auto-VPAT 2.5."})}
  `}function wr(){return`
    <section class="hero" aria-labelledby="doc-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Document Studio • Deterministic ISO 14289-1 PDF/UA-1 Compiler</span>
          <h1 id="doc-studio-title">Compile Verified Tagged PDF/UA-1 Handbooks &amp; Forms from Plain Text.</h1>
          <p class="lead">
            Municipalities, universities, hospitals, and federal contractors lose thousands of engineering hours manually
            repairing broken tag trees whenever a Word or desktop-publishing document is re-exported to PDF.
            <strong>RaggieSoft Document Studio</strong> compiles Git-diffable <code>.rsdp</code> manifests and Markdown
            directly into machine-verified <strong>Tagged <code>PDF/UA-1</code></strong> documents and accessible HTML5
            forms—failing the build if table scopes, reading order, bookmarks, or alt text are missing.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/accessibility-studio">Pair with Accessibility Studio v1.0 &rarr;</a>
            <a class="btn btn-outline" href="/">Back to 8-Tool Suite Overview</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${sr}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Document Studio — Tagged PDF/UA-1 Without Tag-Tree Pain."
          />
        </figure>
      </div>
    </section>

    <section aria-labelledby="doc-pillars-heading">
      <span class="eyebrow">Zero Manual Tag-Tree Repair on Every Revision</span>
      <h2 id="doc-pillars-heading" style="margin-top: 0.25rem;">Core Architectural Pillars of Document Studio</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <h3>1. Authentic Structure Tree Generation (<code>&lt;Document&gt;</code>, <code>&lt;H1&gt;..&lt;H6&gt;</code>, <code>&lt;Table&gt;</code>)</h3>
          <p>Emits genuine PDF/UA-1 structure trees, <code>/Lang</code> catalogs, embedded subset fonts, and <code>/Scope</code> table headers automatically on every build.</p>
        </article>
        <article class="card card-highlight">
          <h3>2. Dual Output: Print-Ready Tagged PDF + Responsive WCAG 2.2 AA HTML5</h3>
          <p>Publish official board packets, SOPs, and training completion certificates simultaneously as accessible web pages and archival tagged PDFs.</p>
        </article>
        <article class="card">
          <h3>3. Compile-Time Matterhorn &amp; Section 508 Gate</h3>
          <p>Blocks untagged figures, skipped heading hierarchies, unlabeled form fields, and low-contrast callouts in CI/CD before distribution.</p>
        </article>
        <article class="card">
          <h3>4. Deterministic Reproducible Builds</h3>
          <p>Plain-text <code>.rsdp</code> + Markdown diffs cleanly in Git pull requests so legal, HR, and engineering teams can review exact policy wording changes.</p>
        </article>
      </div>
    </section>

    ${ge({productName:"RaggieSoft Document Studio",statusNote:"Coming Soon • Zero-Acrobat ISO 14289-1 PDF/UA-1 Compiler",essentialsSummary:"Visual <code>.rsdp</code> + Markdown compiler emitting machine-verified Tagged <code>PDF/UA-1</code> handbooks &amp; accessible HTML5 companions.",developerSummary:"Adds Accessible Fillable AcroForm Builder (<code>/TU</code> tooltips &amp; <code>/Tabs /S</code>), <code>RaggieScript</code> CSV/JSON batch data-merge, &amp; CI/CD.",architectSummary:"Adds full Matterhorn Protocol verification certificate, dual <code>PDF/A-2a + PDF/UA-1</code> archival stamping, &amp; Auto-VPAT 2.5."})}
  `}function Cr(){return`
    <section class="hero" aria-labelledby="loc-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Localization Studio • Multilingual Compliance &amp; Caption Timing IDE</span>
          <h1 id="loc-studio-title">Translate Installers, Apps, Help &amp; Captions Without Breaking Accessibility.</h1>
          <p class="lead">
            Software and training localization routinely introduces silent regressions: broken <code>{0}</code> or
            <code>$(ARCH)</code> tokens, duplicate <code>&amp;</code> keyboard mnemonics on Windows dialogs, missing
            <code>BCP 47</code> language attributes, and translated <code>.vtt</code> closed captions that exceed readable
            characters-per-second (<code>&gt;25 CPS</code>) limits. <strong>RaggieSoft Localization Studio</strong>
            (<code>.rsloc</code>) validates every target language at compile time.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/training-studio">See Multilingual WebVTT Gate in Training Studio &rarr;</a>
            <a class="btn btn-outline" href="/">Back to 8-Tool Suite Overview</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${rr}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Localization Studio — Safe App, Installer, and Caption Translation."
          />
        </figure>
      </div>
    </section>

    <section aria-labelledby="loc-pillars-heading">
      <span class="eyebrow">Unified Across .rsip, .rstp, .rshp, .RESX &amp; XLIFF 2.1</span>
      <h2 id="loc-pillars-heading" style="margin-top: 0.25rem;">Core Architectural Pillars of Localization Studio</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <h3>1. Placeholder &amp; Variable Token Lock</h3>
          <p>Protects <code>$(ARCH)</code>, <code>[INSTALLDIR]</code>, <code>{0}</code>, and Markdown cue tags so translated builds never crash at runtime.</p>
        </article>
        <article class="card card-highlight">
          <h3>2. Automatic Dialog <code>&amp;</code> Keyboard Accelerator Solver</h3>
          <p>Detects colliding <code>Alt+Key</code> mnemonics per dialog or wizard page across every target language and suggests conflict-free accelerators.</p>
        </article>
        <article class="card">
          <h3>3. Multilingual WebVTT Reading-Speed (<code>&le;25 CPS</code>) Verifier</h3>
          <p>Audits translated SCORM and video caption tracks where expanded romance or Germanic phrasing pushes cue timing past comfortable Deaf/ESL reading speeds.</p>
        </article>
        <article class="card">
          <h3>4. <code>BCP 47</code> Language Tag &amp; RTL Layout Inspector</h3>
          <p>Validates IETF <code>BCP 47</code> subtags and previews right-to-left (<code>dir="rtl"</code>) mirroring across web, SCORM, and desktop UI layouts.</p>
        </article>
      </div>
    </section>

    <section class="lms-sandbox" aria-labelledby="loc-sim-heading" x-data="{ checkCase: 'vtt_cps' }">
      <span class="eyebrow">Interactive Compile-Time Gate Preview • rsloc --validate</span>
      <h2 id="loc-sim-heading" style="margin-top: 0.25rem;">Test Live Placeholder, Win32 <code>&amp;</code> Accelerator &amp; WebVTT Speed Checks</h2>
      <div class="btn-row" role="group" aria-label="Select Localization Validation Scenario" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="checkCase === 'vtt_cps' ? 'btn-primary' : 'btn-outline'" @click="checkCase = 'vtt_cps'">1. Translated WebVTT Overrun (31.4 CPS)</button>
        <button type="button" class="btn" :class="checkCase === 'mnemonic' ? 'btn-primary' : 'btn-outline'" @click="checkCase = 'mnemonic'">2. Duplicate Alt+Key Dialog Clash</button>
        <button type="button" class="btn" :class="checkCase === 'token_ok' ? 'btn-primary' : 'btn-outline'" @click="checkCase = 'token_ok'">3. Verified Clean Build (0 Errors)</button>
      </div>
      <div class="lms-sim-card" aria-live="polite">
        <div x-show="checkCase === 'vtt_cps'">
          <span class="release-badge">Blocked at Compile Time • Diagnostic RSLOC018</span>
          <h3><code>es-MX/slide02.vtt</code> Cue #04 Exceeds 22.0 CPS Reading Threshold (Measured: <code>31.4 CPS</code>)</h3>
          <pre class="lms-log-pre">[RSLOC018] ERROR es-MX/slide02.vtt:14:1 — Cue 00:12.000 --&gt; 00:14.800 (2.80s) contains 88 chars (31.4 CPS &gt; 22.0 CPS max).
Suggested Guided Fix: Split into two synchronized cues at clause boundary (15.7 CPS each) or extend cue end to 00:16.100.</pre>
        </div>
        <div x-show="checkCase === 'mnemonic'" style="display: none;">
          <span class="release-badge">Blocked at Compile Time • Diagnostic RSLOC009</span>
          <h3><code>de-DE/SetupStrings.rslang</code> Duplicate <code>Alt+A</code> Accelerator on <code>ReadyDlg</code></h3>
          <pre class="lms-log-pre">[RSLOC009] ERROR de-DE/SetupStrings.rslang:42 — Both "&amp;Abbrechen" (Cancel) and "&amp;Aktualisieren" (Update) claim Alt+A on ReadyDlg!
Suggested Solver Fix: Reassign Cancel to "A&amp;bbrechen" (Alt+B — conflict-free across all 6 controls on ReadyDlg).</pre>
        </div>
        <div x-show="checkCase === 'token_ok'" style="display: none;">
          <span class="release-badge">Build Verified • Exit Code 0</span>
          <h3>All 12 Locales Passed Token Lock (<code>$(ARCH)</code>, <code>[INSTALLDIR]</code>, <code>{0}</code>), Mnemonics &amp; <code>&le;22 CPS</code> Gates</h3>
          <pre class="lms-log-pre">[OK] rsloc --validate workspace.rsloc: 1,420 strings, 36 WebVTT tracks, 0 broken tokens, 0 mnemonic collisions.</pre>
        </div>
      </div>
    </section>

    ${ge({productName:"RaggieSoft Localization Studio",statusNote:"Coming Soon • Safe Multilingual App, Installer & Caption IDE",essentialsSummary:"Side-by-side <code>.RESX</code>, <code>XLIFF 2.1</code>, <code>.rsip</code>, <code>.rstp</code>, &amp; <code>.vtt</code> editor with locked variable tokens.",developerSummary:"Adds automated Win32 <code>&amp;</code> mnemonic clash solver, <code>&le;22 CPS</code> caption gate, <code>RaggieScript</code> rules, &amp; CI/CD.",architectSummary:"Adds Cross-Suite Shared Translation Memory &amp; Terminology Glossary across apps/help/SCORM plus Multilingual VPAT 2.5."})}
  `}function xr(){return`
    <section class="hero" aria-labelledby="launcher-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Studio • Upcoming Desktop Hub &amp; Static-CDN Updater IDE</span>
          <h1 id="launcher-studio-title">RaggieSoft Launcher Studio — Build Your Own Branded Desktop Hub.</h1>
          <p class="lead">
            Independent software studios, game/utility creators, authors, musicians, and enterprise internal-tools teams often
            maintain multiple desktop applications and downloadable media archives—yet building a polished, accessible desktop
            hub and delta patcher from scratch takes months. Inspired directly by our production
            <a href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a>, <strong>RaggieSoft Launcher Studio</strong> turns
            that zero-account, static-CDN architecture into a visual IDE and plain-text <code>.rslp</code> compiler for everyone.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#launcher-mockup-section">Inspect Launcher Studio IDE Mockup &darr;</a>
            <a class="btn btn-outline" href="https://launcher.raggiesoft.com">See Live RaggieSoft Launcher Inspiration</a>
            <a class="btn btn-outline" href="/installer-studio">Download Installer Studio v0.5.0 Today</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${nr}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Launcher Studio — Custom Desktop App Hubs and Static-CDN Delta Updaters."
          />
        </figure>
      </div>
    </section>

    <section id="launcher-mockup-section" aria-labelledby="launcher-shot-heading">
      <span class="eyebrow">High-DPI Workstation Concept • Click Image for Full 1280&times;800 Lightbox</span>
      <h2 id="launcher-shot-heading" style="margin-top: 0.25rem;">Visual Catalog Tree, Live Branded Hub Preview &amp; Signing Inspector</h2>
      <div class="shot-grid" style="grid-template-columns: minmax(0, 1fr); max-width: 58rem;">
        ${I(j.launcherIde)}
      </div>
    </section>

    <section aria-labelledby="launcher-pillars-heading">
      <span class="eyebrow">Zero Gatekeepers • Zero Forced Logins • Zero Database Servers</span>
      <h2 id="launcher-pillars-heading" style="margin-top: 0.25rem;">Core Architectural Pillars of Launcher Studio</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <div>
            <h3>1. Static-CDN Catalog Publishing (<code>catalog.json</code>)</h3>
            <p>
              Host your entire update channel on any static HTTPS web server, DigitalOcean Spaces bucket, Amazon S3 bucket, or
              Cloudflare R2 bucket. <code>lncbuild.exe</code> compiles your <code>.rslp</code> project into a deterministic,
              signed <code>catalog.json</code> manifest—requiring zero backend SQL databases, zero Docker containers, and zero
              recurring server maintenance.
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>2. Multi-Content Shelves: Apps, Books &amp; Audio</h3>
            <p>
              First-class support for both transactional Windows Installer applications (<code>.msi</code> / <code>.msp</code>
              built with <a href="/installer-studio">Installer Studio</a>) and multi-gigabyte <code>Engine = native</code>
              offline content packs (illustrated eBooks, lossless/streaming audio albums, sample packs, and documentation sets).
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>3. Mandatory SHA-256 &amp; <code>WinVerifyTrust</code> Security</h3>
            <p>
              Every catalog item stamps exact byte sizes and <code>SHA-256</code> digests at build time. Before launching any
              downloaded installer or applying a patch, the client verifies both the cryptographic hash via Windows
              <code>bcrypt.dll</code> and the publisher’s Authenticode signature via <code>WinVerifyTrust</code>.
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>4. WCAG 2.2 AA Contrast &amp; Full Keyboard / Gamepad Nav</h3>
            <p>
              Customize Light Mode, Dark Mode, and brand accent tokens with the same live W3C luminance enforcer shipped in
              Installer Studio <code>v0.5.0</code>—guaranteeing <code>&ge; 4.5:1</code> button contrast, clean <code>Tab</code>
              and arrow-key shelf navigation, screen-reader download progress announcements, and instant
              <code>SPI_GETHIGHCONTRAST</code> compliance.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="rslp-sample-heading">
      <span class="eyebrow">Git-Diffable &amp; AI-Agent Friendly</span>
      <h2 id="rslp-sample-heading" style="margin-top: 0.25rem;">Draft Plain-Text <code>.rslp</code> Launcher Project Grammar</h2>
      <p>
        Just like <code>.rsip</code> in Installer Studio, every visual edit inside <code>LauncherStudio.exe</code> round-trips
        losslessly to a human-readable INI manifest whose comments survive GUI saves byte-for-byte:
      </p>
      <pre aria-label="Draft .rslp RaggieSoft Launcher Project Manifest">; Sample .rslp manifest — compiles branded Launcher.exe + static-CDN catalog.json
[Launcher]
Name              = Starlight Creative Hub
Publisher         = Starlight Audio &amp; Interactive
Version           = 1.0.0
UpgradeCode       = {4D81C2F0-91A4-4E7B-8C12-7F39A50E21B8}
CatalogUrl        = https://cdn.example-owned-domain/launcher/catalog.json
RequireSignature  = true

[Branding]
WindowStyle       = fluentmica
AccentLight       = #1D4ED8
AccentDark        = #38BDF8
EnforceWcagAA     = true

[Shelf.Apps]
Title             = Desktop Applications
Layout            = cards

[Item.SynthWorkstation]
Shelf             = Apps
PackageEngine     = msi
ProjectRef        = ..installersSynthWorkstation.rsip
ReleaseNotesFile  = .
otessynth-1.4.0.md

[Shelf.CompanionMedia]
Title             = Offline Liner Notes &amp; Soundtracks
Layout            = covers</pre>
    </section>

    ${ge({productName:"RaggieSoft Launcher Studio",statusNote:"Coming Soon • Zero-Account Desktop Hub & Static-CDN Updater IDE",essentialsSummary:"Guided <code>.rslp</code> single-channel desktop app &amp; media shelf compiler emitting signed static <code>catalog.json</code> feeds.",developerSummary:"Adds <code>RaggieScript</code> (<code>launcher.*</code> pre-launch/GPU checks), <code>stable</code>/<code>beta</code> release rings, binary deltas, &amp; CI/CD.",architectSummary:"Adds air-gapped Intranet / UNC mirror mode, enterprise GPO policy templates, multi-brand white-label hubs, &amp; Auto-VPAT 2.5."})}
  `}function Ar(){return`
    <section class="hero" aria-labelledby="showcase-studio-title" x-data="{ eraTab: 'bmp90s' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Studio • Accessible Interactive Launchpads &amp; Collector Menus</span>
          <h1 id="showcase-studio-title">RaggieSoft Showcase Studio — 1990s CD-ROM Magic, Rebuilt with WCAG 2.2 AA Safeguards.</h1>
          <p class="lead">
            Remember opening a boxed PC release in 1996 and greeting an illustrated multimedia launchpad with custom artwork,
            liner notes, bonus tracks, and one-click install actions? <strong>RaggieSoft Showcase Studio</strong> revives that art
            form for <strong>commemorative USB box sets, downloadable ISO collector editions, multi-package installer suites,
            offline press kits, and accessible classroom kiosks</strong>—compiling plain-text <code>.rssp</code> projects into
            zero-dependency static <code>/MT</code> Win32 C++20 executables for <code>x64</code> and <code>ARM64</code>.
          </p>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${dr}"
            width="1200"
            height="960"
            alt="3D boxed software render of RaggieSoft Showcase Studio — 1990s Painted .BMP CD-ROM Menus with WCAG 2.2 AA Safeguards and Windows 11 FluentMica."
          />
        </figure>
      </div>

      <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.35rem;">
        <span class="eyebrow">Interactive Era &amp; Workstation Switcher (Click Any Tab, Then Click Image for 1:1 Zoom)</span>
        <div class="btn-row" role="tablist" aria-label="Showcase Studio Visual Modes" style="margin-top: 0.45rem;">
          <button
            type="button"
            class="btn"
            :class="eraTab === 'bmp90s' ? 'btn-primary' : 'btn-outline'"
            role="tab"
            :aria-selected="String(eraTab === 'bmp90s')"
            @click="eraTab = 'bmp90s'"
          >
            1. 1990s Painted .BMP + WCAG Safeguards
          </button>
          <button
            type="button"
            class="btn"
            :class="eraTab === 'fluent' ? 'btn-primary' : 'btn-outline'"
            role="tab"
            :aria-selected="String(eraTab === 'fluent')"
            @click="eraTab = 'fluent'"
          >
            2. Modern Windows 11 FluentMica (16:9)
          </button>
          <button
            type="button"
            class="btn"
            :class="eraTab === 'ide' ? 'btn-primary' : 'btn-outline'"
            role="tab"
            :aria-selected="String(eraTab === 'ide')"
            @click="eraTab = 'ide'"
          >
            3. ShowcaseStudio.exe Canvas IDE
          </button>
        </div>

        <div x-show="eraTab === 'bmp90s'" style="margin-top: 1.15rem;">
          <p style="margin-top: 0;">
            <strong>Classic 1990s Painted <code>.BMP</code> Aesthetic — Fixed for Every User:</strong> Keep authentic
            <code>#008080</code> / <code>#000080</code> desktop washes, beveled <code>#C0C0C0</code> frames, and custom pixel
            art while automatically adding dual-ring keyboard focus indicators, <code>Alt+Key</code> accelerators, real Win32
            UI Automation screen-reader peers, and live Windows Contrast Theme fallback.
          </p>
        </div>
        <div x-show="eraTab === 'fluent'" style="margin-top: 1.15rem; display: none;">
          <p style="margin-top: 0;">
            <strong>Modern Windows 11 <code>FluentMica</code> Widescreen Mode:</strong> Render a crisp Per-Monitor V2 DPI
            <code>16:9</code> collector launchpad with category rails, accessible Dark/Light action cards, captioned audio
            previews, and direct handoff to signed <code>Setup.exe</code> / <code>.msi</code> installers.
          </p>
        </div>
        <div x-show="eraTab === 'ide'" style="margin-top: 1.15rem; display: none;">
          <p style="margin-top: 0;">
            <strong>Visual Page, Hotspot &amp; 4-Way Focus-Matrix Authoring:</strong> Map pages, hotspots, directional
            <code>Up/Down/Left/Right</code> arrow routing, UI Automation labels, and High-Contrast previews inside a native
            Win32 C++20 workstation IDE.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="showcase-gallery-heading">
      <span class="eyebrow">All Three High-DPI Concept Captures • Click Any Card to Open Full-Size 1280&times;800 Modal</span>
      <h2 id="showcase-gallery-heading" style="margin-top: 0.25rem;">Inspect 1990s .BMP Mode, Modern FluentMica Mode &amp; the Canvas IDE</h2>
      <div class="shot-grid">
        ${I(j.showcase90s)}
        ${I(j.showcaseModern)}
        ${I(j.showcaseIde)}
      </div>
    </section>

    <section aria-labelledby="a11y-rescue-heading">
      <span class="eyebrow">Accessibility Engineering Deep Dive</span>
      <h2 id="a11y-rescue-heading" style="margin-top: 0.25rem;">How Showcase Studio Solves Six Classic 1990s Multimedia Accessibility Failures</h2>
      <div class="table-wrap">
        <table>
          <caption>1990s Bitmap Menu Limitations vs. RaggieSoft Showcase Studio Win32 C++20 Safeguards</caption>
          <thead>
            <tr>
              <th scope="col">1990s CD-ROM Menu Failure</th>
              <th scope="col">Showcase Studio Runtime Safeguard</th>
              <th scope="col">Standard Met</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Flat painted pixels invisible to screen readers</th>
              <td>Every canvas hotspot spawns a synchronized Win32 child <code>BUTTON</code> / <code>IAccessible</code> UI Automation proxy exposing <code>Name</code>, <code>Description</code>, <code>Role</code>, and <code>Shortcut</code> to Narrator, NVDA, and JAWS</td>
              <td>WCAG 2.2 SC 4.1.2 &amp; Section 508 502.3</td>
            </tr>
            <tr>
              <th scope="row">Mouse-only hover regions with zero keyboard access</th>
              <td>Deterministic <code>Tab</code> order plus explicit 4-way <code>FocusUp / Down / Left / Right</code> arrow &amp; Xbox/D-pad focus matrix rendered with a high-contrast dual black/gold outer/inner focus frame</td>
              <td>WCAG 2.2 SC 2.1.1 &amp; SC 2.4.11</td>
            </tr>
            <tr>
              <th scope="row">Hardcoded bitmaps illegible in High Contrast</th>
              <td>Listens for <code>SPI_GETHIGHCONTRAST</code> and <code>WM_SYSCOLORCHANGE</code>, automatically replacing decorative bitmaps with crisp <code>COLOR_WINDOW</code>, <code>COLOR_WINDOWTEXT</code>, and <code>2px</code> <code>COLOR_HIGHLIGHT</code> semantic cards</td>
              <td>WCAG 2.2 SC 1.4.11 &amp; Section 508 502.2</td>
            </tr>
            <tr>
              <th scope="row">Tiny fixed <code>640&times;480</code> postage stamp on 4K displays</th>
              <td>Per-Monitor V2 DPI scaling with selectable integer nearest-neighbor pixel-art upscaling (preserving razor-sharp retro pixels!) or vector layout reflow</td>
              <td>WCAG 2.2 SC 1.4.4 &amp; SC 1.4.10</td>
            </tr>
            <tr>
              <th scope="row">Unstoppable loud startup music loops</th>
              <td>Audio is muted or opt-in by default (<code>AutoPlayAudio = false</code>), provides a persistent <code>Alt+M</code> Mute toggle, and supports synchronized <code>.vtt</code> caption overlays for spoken commentary</td>
              <td>WCAG 2.2 SC 1.4.2 &amp; SC 1.2.2</td>
            </tr>
            <tr>
              <th scope="row">Flashing transitions &amp; forced animations</th>
              <td>Queries OS animation preferences (<code>SPI_GETCLIENTAREAANIMATION</code>) to disable wipes/particles automatically when reduced motion is enabled</td>
              <td>WCAG 2.2 SC 2.3.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="rssp-sample-heading">
      <span class="eyebrow">Plain-Text Authoring • Compiles to Zero-Dependency x64 &amp; ARM64</span>
      <h2 id="rssp-sample-heading" style="margin-top: 0.25rem;">Draft Plain-Text <code>.rssp</code> Showcase Project Grammar</h2>
      <pre aria-label="Draft .rssp RaggieSoft Showcase Project Manifest">; Sample .rssp manifest — supports both 1990s .BMP retro art &amp; modern FluentMica!
[Showcase]
Title             = RaggieSoft Collector's Box Set
Version           = 1.0.0
PresentationStyle = retro_bmp95          ; retro_bmp95 | fluentmica_16x9 | kiosk_fullscreen
CanvasSize        = 800x600
IntegerPixelScale = true
BackdropWash      = #008080
AutoPlayAudio     = false                ; Enforced false by default for WCAG 1.4.2

[Page.MainMenu]
BackgroundBitmap  = .art\boxset-main-800x600.bmp
HighContrastTitle = Collector's Box Set — Main Menu

[Hotspot.InstallApps]
Page              = MainMenu
Bounds            = 48, 132, 312, 64
Label             = &amp;Install Desktop Applications
Description       = Launches the signed x64 and ARM64 application suite installer.
Action            = run_installer
Target            = .packages\raggiesoft-apps-setup.exe
FocusDown         = BrowseBooks
FocusRight        = PlaySoundtrack

[Hotspot.BrowseBooks]
Page              = MainMenu
Bounds            = 48, 212, 312, 64
Label             = Open Offline &amp;Book Library
Description       = Opens the illustrated Ocean View Archives offline reader.
Action            = goto_page
TargetPage        = BooksShelf
FocusUp           = InstallApps</pre>
    </section>

    <section class="calc-panel" aria-labelledby="showcase-bespoke-installer-heading">
      <span class="eyebrow">Community &amp; Architect Editions • Bespoke Full-Canvas Self-Extracting Installers</span>
      <h2 id="showcase-bespoke-installer-heading" style="margin-top: 0.25rem;">Build Heavily Themed Custom Installers with <code>_support\\</code> Staging, Registry, Shortcuts &amp; UAC</h2>
      <p>
        Ever wished you could build a richly illustrated, non-rectangular or full-canvas installation experience that standard
        wizard templates simply cannot express—without losing clean rollback or Windows <em>Installed apps</em> registration?
        In <strong>Community</strong> and <strong>Architect</strong> editions, <strong>Showcase Studio</strong> unlocks the
        <code>installer.*</code> <a href="/raggiescript"><code>RaggieScript</code></a> namespace directly inside your
        <code>.rssp</code> project:
      </p>
      <div class="grid-2x2" style="margin-bottom: 0;">
        <article class="card card-highlight">
          <h3>1. Self-Extracting <code>_support\\</code> Payload Directory</h3>
          <p style="margin-bottom: 0;">
            Designate any files or folders to travel inside an embedded <code>_support\\</code> staging archive inside your single
            <code>.exe</code>, then unpack or <code>fs.copy()</code> / <code>fs.extract()</code> them onto the PC with live canvas
            progress bars and automatic temp cleanup.
          </p>
        </article>
        <article class="card card-highlight">
          <h3>2. Selectable UAC Manifests (<code>asInvoker</code> | <code>highestAvailable</code> | <code>requireAdministrator</code>)</h3>
          <p style="margin-bottom: 0;">
            Stamp your exact Win32 execution level onto the compiled Showcase <code>.exe</code>—or browse lore/music un-elevated as
            <code>asInvoker</code> and trigger single-UAC split-worker elevation only when the user clicks <strong>Install</strong>!
          </p>
        </article>
        <article class="card">
          <h3>3. Full Registry, Start Menu / Desktop Shortcuts &amp; File Copy APIs</h3>
          <p style="margin-bottom: 0;">
            Call <code>reg.writeString</code> / <code>reg.writeDword</code>, <code>shortcut.create</code>, and <code>fs.copyTree</code>
            directly from hotspot events—with every mutating call automatically journaled to <code>.rsw-rollback.jnl</code> for
            clean cancellation rollback and native <code>Uninstall.exe</code> generation!
          </p>
        </article>
        <article class="card">
          <h3>4. Official Front-Door of the 8-Tool RaggieSoft Studio Suite</h3>
          <p style="margin-bottom: 0;">
            Powers the interactive Suite Showcase front-end of RaggieSoft Studio itself—detecting already-installed tools via
            <code>msi.isInstalled</code> and handing off seamlessly to our monotonic Dual-Bar Suite engine.
          </p>
        </article>
      </div>
    </section>

    <section class="lms-sandbox" aria-labelledby="showcase-live-sim-heading" x-data="{ skin: 'bmp95', uacMode: 'asInvoker', uiaAnnouncement: 'Button 1 of 3: Install Collector Suite (Alt+I). Launches transactional _support extraction.', scriptTrace: '[READY] ShowcaseStub.exe booted in 19ms (AutoPlayAudio=false, UIA Peers=3).' }">
      <span class="eyebrow">Interactive Runtime Canvas Simulator • UI Automation + RaggieScript Trace</span>
      <h2 id="showcase-live-sim-heading" style="margin-top: 0.25rem;">Test a Live Showcase Canvas Across 1990s <code>.BMP</code>, <code>FluentMica</code> &amp; High Contrast</h2>
      <div class="btn-row" role="group" aria-label="Switch Live Showcase Canvas Skin" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="skin === 'bmp95' ? 'btn-primary' : 'btn-outline'" @click="skin = 'bmp95'; scriptTrace = '[THEME] Switched to 1990s #008080 .BMP + #C0C0C0 3D bevels (IntegerPixelScale=true).'">1990s #008080 .BMP Skin</button>
        <button type="button" class="btn" :class="skin === 'mica11' ? 'btn-primary' : 'btn-outline'" @click="skin = 'mica11'; scriptTrace = '[THEME] Switched to Windows 11 DWMSBT_MAINWINDOW FluentMica 16:9 layout.'">Windows 11 FluentMica</button>
        <button type="button" class="btn" :class="skin === 'hc' ? 'btn-primary' : 'btn-outline'" @click="skin = 'hc'; scriptTrace = '[A11Y] SPI_GETHIGHCONTRAST active: decorative bitmaps replaced with OS semantic colors.'">OS High-Contrast Theme</button>
      </div>

      <div class="lms-sim-card" :style="skin === 'bmp95' ? 'background:#008080; color:#0f172a; border:3px outset #e2e8f0;' : (skin === 'hc' ? 'background:#000000; color:#ffffff; border:2px solid #ffff00;' : '')">
        <div :style="skin === 'bmp95' ? 'background:#c0c0c0; padding:1rem; border:2px outset #ffffff;' : ''">
          <p style="margin-top: 0; font-weight: 700;">Collector's Box Set — Interactive Canvas Hotspots (Click or Tab + Enter):</p>
          <div class="btn-row" style="margin-top: 0.5rem;">
            <button type="button" class="btn btn-primary" @click="uiaAnnouncement = 'Installing from _support\\\\CoreApp to Program Files (Overall Progress: 100%, Rollback Journal Verified).'; scriptTrace = '[RSSC] installer.runTransaction -> fs.copyTree(sys.supportDir / &quot;CoreApp&quot;, destDir) + reg.writeString + shortcut.create [OK]'">1. &amp;Install App from _support</button>
            <button type="button" class="btn btn-outline" :style="skin === 'bmp95' ? 'background:#e2e8f0; color:#0f172a; border:2px outset #ffffff;' : (skin === 'hc' ? 'color:#ffff00; border-color:#ffff00;' : '')" @click="uiaAnnouncement = 'Copied bonus PDF/UA-1 liner notes to Documents folder.'; scriptTrace = '[RSSC] fs.copy(sys.supportDir / &quot;LinerNotes-PDFUA.pdf&quot;, sys.documentsDir) [OK]'">2. Copy Bonus &amp;Liner Notes</button>
            <button type="button" class="btn btn-outline" :style="skin === 'bmp95' ? 'background:#e2e8f0; color:#0f172a; border:2px outset #ffffff;' : (skin === 'hc' ? 'color:#ffff00; border-color:#ffff00;' : '')" @click="uiaAnnouncement = 'Playing commentary track with synchronized WebVTT captions enabled.'; scriptTrace = '[RSSC] audio.play(&quot;commentary.opus&quot;, captions: &quot;commentary.vtt&quot;, autoPlay: false) [OK]'">3. Play Captioned &amp;Audio Preview</button>
          </div>
        </div>
        <pre class="lms-log-pre" aria-live="polite" style="margin-top: 0.85rem;">[Narrator / NVDA UIA]: <span x-text="uiaAnnouncement"></span>
<span x-text="scriptTrace"></span></pre>
      </div>
    </section>

    ${ge({productName:"RaggieSoft Showcase Studio",statusNote:"Coming Soon • Retro .BMP + Modern FluentMica + Bespoke Installers",essentialsSummary:"Visual <code>.rssp</code> 1990s <code>.BMP</code> &amp; Windows 11 <code>FluentMica</code> menus, declarative launch actions, &amp; 4-way focus routing.",developerSummary:"Adds <code>RaggieScript</code> (<code>showcase.*</code> reactive menus &amp; live <code>msi.isInstalled</code> state switching), templates, &amp; CI/CD.",architectSummary:"Adds Bespoke Full-Canvas Self-Extracting Installers (<code>_support\\</code>, <code>fs.*</code>, <code>reg.*</code>, <code>shortcut.*</code>, UAC), Suite front-door, Kiosk Mode, &amp; Auto-VPAT 2.5."})}
  `}function Mr(){return`
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Studio Flagship • v0.5.0 Signed for Windows 11 x64 &amp; ARM64</span>
          <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
          <p class="lead">
            Compile genuine relational Windows Installer (<code>.msi</code>) databases, 64-bit Merge Modules
            (<code>.msm</code>), Transforms (<code>.mst</code>), Patches (<code>.msp</code>), and CPU-aware Universal
            <code>Setup.exe</code> bootstrappers in zero-dependency static <code>/MT</code> Win32 C++20—featuring a
            <strong>12-View Tree-First IDE</strong>, <strong>10 selectable Wizard Styles</strong> (from 1995
            <strong>ACME <code>#008080</code> Teal</strong> &amp; <strong><code>#000080</code> Cobalt</strong> washes to
            Windows 11 <code>FluentMica</code>), <strong>Typical / Compact / Complete / Custom</strong> Setup Types, and
            <strong>WCAG 2.2 AA Auto-Contrast</strong>.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${ie}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
            <a class="btn btn-outline" href="${Pe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
            <a class="btn btn-outline" href="/installer-studio/editions">Editions &amp; Matrix</a>
            <a class="btn btn-outline" href="/installer-studio/screenshots">14 Live Screenshots</a>
            <a class="btn btn-outline" href="/installer-studio/docs">Docs &amp; .rsip Spec</a>
          </div>
          ${pe()}
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${or}"
            width="1200"
            height="960"
            alt="Collector's Edition 3D boxed software render of RaggieSoft Installer Studio — Install Without Limits (Native C++20 for x64 and ARM64)."
          />
        </figure>
      </div>

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
            3. AI-Friendly .rsip v0.5 Manifest
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
          <pre aria-label="Plain-Text .rsip v0.5 Project Manifest Example">; Comment-preserving .rsip v0.5 manifest — survives GUI edits byte-for-byte!
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
SetupTypePreset   = express_custom
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
            <h3>Shipping Today in Technical Preview (<code>v0.5.0</code>)</h3>
            <ul class="feature-list">
              <li><strong>10 Era-Spanning Wizard Styles &amp; Classic Setup Types</strong>: Switch from 1995 <strong>Microsoft ACME <code>#008080</code> Teal</strong> (<code>fullscreenteal</code>), <strong><code>#000080</code> Cobalt Wash</strong> (<code>fullscreenblue</code>), &amp; <code>wizard95</code> through <code>aerowizard</code> &amp; Windows 11 <code>fluentmica</code> step-rail—paired with <strong>Typical / Compact / Complete / Custom</strong> Setup Types, <code>[Billboard.*]</code> slides, and a live <strong>WCAG 2.2 AA Contrast Enforcer</strong></li>
              <li><strong>Dual-Layer Microsoft Azure Artifact Signing &amp; Universal Single-Download EXEs</strong>: Every inner C++20 binary, <code>.msi</code> database, Smart CPU-Aware Web Stub, and Combined Offline Universal EXE (<code>x64 + ARM64</code>) is Authenticode-signed with a verified Public Trust certificate</li>
              <li><strong>Plain-English Feature Inclusion Tiers &amp; 12-View Tree-First IDE</strong>: Decide whether each feature belongs to a <em>Minimal / Compact</em>, <em>Typical / Express</em>, or <em>Complete</em> setup, edit <strong><code>RegEdit</code>-style Registry</strong> &amp; Dual Folder trees, and enjoy permanent <strong><a href="/installer-studio/editions"><code>Community == 100% Architect</code> parity</a></strong></li>
              <li><strong>100% Dark-Mode-Complete UI, Native C++20 <code>F1</code> Help &amp; <code>msiprism.exe</code></strong>: Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> palette hot-swapping, <code>SPI_GETHIGHCONTRAST</code> override, zero-dependency <code>RaggieSoftHelp.exe</code>, Pre-MSI runtimes, 64-bit <code>.MSM</code> merging, and <code>--emit-vpat</code></li>
            </ul>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/installer-studio/screenshots">Take the Visual Screenshot Tour &rarr;</a>
            <a class="btn btn-outline" href="/installer-studio/editions">Compare All 4 Editions</a>
            <a class="btn btn-outline" href="/installer-studio/faq">Frequently Asked Questions</a>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Focused Path to <code>v1.0.0 GA</code> (Dogfood North Star)</h3>
            <ul class="feature-list">
              <li><strong><code>v0.6.0</code> (Next Up) — SFX <code>.EXE</code> (<code>%TEMP%</code> Wrapper &amp; Standalone Tool), Disk Spanning, Loose Media (<code>msiexec /a</code>) &amp; Suites</strong>: Build folder/ZIP-to-SFX <code>.exe</code> extractors (including <code>%TEMP%</code> software wrappers with <code>_ISDEL.EXE</code> completion watching), split multi-disc <code>CAB1..N.cab</code> sets, and chain <code>.msi</code> apps + <code>Engine = native</code> packs</li>
              <li><strong><code>v0.7.0</code> — <code>RaggieScript</code> (<code>.rssc</code>) Zero-MSI Native Scripting &amp; Dual Dialog Builders</strong>: Curly-brace native installer language compiling to <code>RSWBC1</code> bytecode (standalone <code>.rssc</code> or hybrid <code>.rsip</code> + <code>.rssc</code> with automatic rollback journaling) plus blank-canvas C++ &amp; raw <code>370&times;270</code> <code>MSI.DLL</code> designers</li>
              <li><strong><code>v0.8.0</code> — VB6 <code>.vbp</code>, Visual Studio <code>.slnx</code> &amp; <code>.msi</code> Importers + Restart Manager</strong>: Reg-Free COM VB6 <code>.vbp</code> importing for classic utilities like <em>StoreTrainer</em> plus graceful <code>Rstrtmgr.dll</code> app shutdown</li>
              <li><strong><code>v0.9.0</code> &amp; <code>v1.0.0 GA</code> — Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Full Production Cutover</strong>: Interactive Signing Studio UI, guided <code>.MSP</code> servicing, and packaging 100% of RaggieSoft's own software</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/installer-studio/roadmap">Read Full v1.0 Engineering Roadmap</a>
        </article>
      </div>
    </section>

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
              <td><strong><a href="/installer-studio/editions"><code>Community == Architect</code></a> + 100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Community Edition enjoys full Architect feature parity across all 4 tiers (<code>Community</code>, <code>Essentials</code>, <code>Developer</code>, <code>Architect</code>), and compiled <code>Setup.exe</code> / <code>.msi</code> files carry your publisher identity with zero watermarks.</td>
            </tr>
            <tr>
              <th scope="row">AI Agent Native</th>
              <td><strong><code>--emit-ai-spec</code> + <code>--diagnostics=json</code></strong></td>
              <td>Coding agents read deterministic <code>/installer-studio/llms-full.txt</code> and <code>SKILL.md</code> specs to write, lint, and compile installers from scratch.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">Five Native Binaries in One Cohesive Toolkit</span>
      <h2 id="suite-heading">Toolkit Spotlight: IDE, CLI Compiler, Setup Wizard, MSI Prism &amp; Help Viewer</h2>
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
          <a class="btn btn-outline" href="/installer-studio/screenshots">Explore IDE Screenshots</a>
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
          <a class="btn btn-primary" href="/installer-studio/llms-full.txt">View Complete /llms-full.txt</a>
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
          <a class="btn btn-outline" href="/installer-studio/docs">Browse Distributed Manual</a>
        </article>
      </div>
    </section>
  `}function Ir(){return`
    <section class="hero" aria-labelledby="editions-page-title">
      <span class="eyebrow">Official Product Matrix • Community == 100% Architect Parity</span>
      <h1 id="editions-page-title">Editions, Feature Matrix &amp; RaggieScript</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is organized into four clear editions—<strong>Community</strong>,
        <strong>Essentials</strong>, <strong>Developer</strong>, and <strong>Architect</strong>—built around two permanent
        commitments: <strong>Community Edition maintains 100% technical feature parity with Architect Edition</strong> for
        hobbyists, solo creators, educators, and open-source maintainers, and <strong>runtime WCAG 2.2 AA accessibility and
        Authenticode signing are never paywalled in any commercial tier</strong>.
      </p>
      <p style="margin-top: 0.5rem; color: var(--text-muted);">
        <em>Commercial licensing opens alongside <code>v1.0.0 GA</code>; during active Technical Preview, our signed universal
        <code>v0.5.0</code> installer is free to download and evaluate with full Architect parity unlocked.</em>
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${ie}">Download Technical Preview v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Pe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="#edition-comparison-matrix">Jump to Full Matrix &darr;</a>
        <a class="btn btn-outline" href="#raggiescript-preview">Preview RaggieScript (.rssc) &darr;</a>
      </div>
      ${pe()}
    </section>

    <section aria-labelledby="four-editions-heading">
      <span class="eyebrow">At-a-Glance Tier Positioning</span>
      <h2 id="four-editions-heading" style="margin-top: 0.25rem;">Four Named Editions Built Around Real Engineering Workflows</h2>
      <div class="pipeline-grid">
        <article class="pipeline-step">
          <span class="pipeline-num">Free • Hobbyist, Solo, EDU &amp; OSS</span>
          <h3>Community Edition</h3>
          <p>
            <strong>100% feature parity with Architect Edition (<code>Community == Architect</code>)</strong>. Every MSI table,
            <code>RaggieScript</code> compiler, custom dialog designer, <code>.MSM</code> builder, <code>.MSP</code> patcher,
            <code>.rsis</code> Suite chainer, and VPAT 2.5 generator unlocked with <strong>zero watermarks</strong>.
          </p>
        </article>

        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 1 • 1 Workstation</span>
          <h3>Essentials Edition</h3>
          <p>
            Guided, no-code commercial packaging: relational <code>.MSI</code> + Universal <code>Setup.exe</code>
            (<code>x64</code> &amp; <code>ARM64</code>), Folder/<code>.ZIP</code> Self-Extractor (<code>sfx</code> +
            <code>%TEMP%</code> wrapper), 6 AeroWizards, 11 Wizard Styles, Pre-MSI Runtimes, <strong><code>.MSM</code>
            consumption</strong>, and <strong>Major Upgrades</strong>.
          </p>
        </article>

        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 2 • + CI/CD Agents</span>
          <h3>Developer Edition</h3>
          <p>
            Everything in <strong>Essentials</strong> plus <strong>compiling new <code>.MSM</code> Merge Modules</strong>,
            <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> zero-MSI native scripting &amp;
            <code>Engine = native</code>, From-Scratch C++ &amp; <code>MSI.DLL</code> Dialog Designers, VS/VB6 importers,
            <code>msiprism.exe</code>, <code>RsUpdate.exe</code>, and commercial CI/CD runners.
          </p>
        </article>

        <article class="pipeline-step">
          <span class="pipeline-num">Commercial Tier 3 • Enterprise &amp; 508</span>
          <h3>Architect Edition</h3>
          <p>
            Everything in <strong>Developer</strong> plus <strong>Multi-Product Unified <code>.rsis</code> Suites</strong>
            (<em>Showcase Studio</em> front-door + dynamic <code>ARPSYSTEMCOMPONENT</code>), <strong><code>.MSP</code>
            binary-delta patches &amp; <code>.MST</code> transforms</strong>, Disk Spanning / <code>msiexec /a</code>,
            <code>.rswpak</code> CDN packs, and <strong>Automated HTML5 VPAT 2.5</strong>.
          </p>
        </article>
      </div>
    </section>

    <section id="edition-comparison-matrix" class="calc-panel" aria-labelledby="matrix-table-heading" x-data="{ matrixCat: 'all' }">
      <span class="eyebrow">Complete Capability Breakdown</span>
      <h2 id="matrix-table-heading" style="margin-top: 0.25rem;">Product Editions Comparison Matrix</h2>
      <div class="btn-row" role="group" aria-label="Filter product matrix rows by capability group" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="matrixCat === 'all' ? 'btn-primary' : 'btn-outline'" @click="matrixCat = 'all'">All Capabilities (25)</button>
        <button type="button" class="btn" :class="matrixCat === 'core' ? 'btn-primary' : 'btn-outline'" @click="matrixCat = 'core'">Core MSI, SFX, UI &amp; Signing</button>
        <button type="button" class="btn" :class="matrixCat === 'dev' ? 'btn-primary' : 'btn-outline'" @click="matrixCat = 'dev'">RaggieScript, .MSM, Dialogs &amp; CI/CD</button>
        <button type="button" class="btn" :class="matrixCat === 'arch' ? 'btn-primary' : 'btn-outline'" @click="matrixCat = 'arch'">Suites, .MSP Deltas &amp; VPAT 2.5</button>
      </div>

      <div class="table-wrap" style="margin-bottom: 0;">
        <table>
          <caption>Feature Comparison Across Community, Essentials, Developer, and Architect Editions of RaggieSoft Installer Studio</caption>
          <thead>
            <tr>
              <th scope="col">Capability / Subsystem</th>
              <th scope="col">Community<br /><small>(Free — Hobbyist, EDU &amp; OSS)</small></th>
              <th scope="col">Essentials<br /><small>(Commercial Tier 1)</small></th>
              <th scope="col">Developer<br /><small>(Commercial Tier 2)</small></th>
              <th scope="col">Architect<br /><small>(Commercial Tier 3)</small></th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">100% Publisher-Owned <code>VERSIONINFO</code> (Zero Watermarks)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Native <code>x64</code>, <code>ARM64</code> &amp; Universal Single-EXE (Web + Offline)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Relational <code>.MSI</code> Compiler + <code>ICE18</code>/<code>38</code>/<code>64</code>/<code>80</code> Linter</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">WCAG 2.2 AA Runtime UI, Dark/Light Mode &amp; Contrast Themes</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">6 Guided AeroWizards &amp; All 11 Built-In Wizard Styles</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Built-In Setup Types (<code>Express/Custom</code> &amp; <code>Typical/Compact/Complete</code>)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Basic Folder / <code>.ZIP</code> Self-Extractor (<code>sfx</code> + <code>%TEMP%</code> Wrapper)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Standalone Self-Extractor Desktop Utility (<code>rswsfx.exe</code>)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Pre-MSI Runtime Prerequisites (<code>.NET 11 / 10</code>, <code>WebView2</code>, <code>VC++</code>)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row">Dual-Layer Authenticode &amp; Microsoft Azure Artifact Signing</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core'">
              <th scope="row"><strong>Consume</strong> Existing <code>.MSM</code> Merge Modules (<code>[MergeModule.*]</code>)</th>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'core' || matrixCat === 'arch'">
              <th scope="row">Application Version Servicing (<code>1.0.0</code> &rarr; <code>1.0.1</code>)</th>
              <td><strong>Major + <code>.MSP</code> Delta</strong></td>
              <td><strong>Major Upgrade Only</strong><br /><small>(Fresh <code>ProductCode</code>)</small></td>
              <td><strong>Major Upgrade Only</strong><br /><small>(Fresh <code>ProductCode</code>)</small></td>
              <td><strong>Major + <code>.MSP</code> Binary-Delta</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row"><strong>Create / Compile</strong> New <code>.MSM</code> Merge Modules (<code>PackageKind = msm</code>)</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row"><code>RaggieScript</code> (<code>.rssc</code>) Zero-MSI Native Scripting &amp; <code>Engine = native</code></th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row">From-Scratch C++ (<code>[Dialog.*]</code>) &amp; <code>370&times;270</code> <code>MSI.DLL</code> Dialog Designers</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row">Custom Author-Defined <code>[SetupType.&lt;Id&gt;]</code> Cards &amp; <code>@include</code> <code>.rsii</code> Libraries</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row">Solution &amp; Legacy Importers (<code>.slnx</code>, <code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM, <code>.msi</code>)</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row"><code>msiprism.exe</code> 64-Bit SQL Inspector, <code>RsUpdate.exe</code> &amp; <code>--emit-winget</code></th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'dev'">
              <th scope="row">Headless CI/CD Build Agents (GitHub Actions / Azure DevOps)</th>
              <td>OSS &amp; Personal Repos</td>
              <td>1 Workstation Seat</td>
              <td><strong>Commercial CI/CD</strong></td>
              <td><strong>Commercial CI/CD</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row">Multi-Product Unified <code>.rsis</code> Suites + <em>Showcase Studio</em> Front-Door</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row"><code>.MSP</code> Binary-Delta Patches (<code>RsPatch.exe</code>, <code>--plan-update</code>) &amp; <code>.MST</code> Transforms</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row">Multi-Volume Disk Spanning (<code>CAB1..N.cab</code>), Loose Media &amp; <code>msiexec /a</code></th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row">Granular On-Demand CDN Feature Packs (<code>.rswpak</code>)</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row">Automated HTML5 VPAT 2.5 Conformance Report Generator (<code>--emit-vpat</code>)</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
            <tr x-show="matrixCat === 'all' || matrixCat === 'arch'">
              <th scope="row">Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture &amp; <code>--emit-sbom</code> (<code>v1.1+</code>)</th>
              <td><strong>Yes</strong></td>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td><strong>Yes</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="tier-design-notes-heading">
      <span class="eyebrow">Key Licensing &amp; Technical Design Choices</span>
      <h2 id="tier-design-notes-heading" style="margin-top: 0.25rem;">How Essentials, Standalone Self-Extractor &amp; Upgrades Work</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <div>
            <h3>1. Why Community Edition Equals Architect Edition</h3>
            <p>
              Independent hobbyists, students, educators, and open-source maintainers deserve industrial-grade packaging tools
              without crippled dialogs or nag banners. <strong>Community Edition</strong> unlocks 100% of
              <strong>Architect Edition</strong>—from <code>RaggieScript</code> to <code>.rsis</code> Suites and VPAT 2.5—while
              keeping compiled <code>VERSIONINFO</code> and wizard chrome 100% publisher-owned.
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>2. <code>.MSM</code> Consumption &amp; Major Upgrades in Essentials</h3>
            <p>
              <strong>Essentials Edition</strong> consumes existing 32-bit and 64-bit <code>.MSM</code> Merge Modules
              (<code>[MergeModule.*]</code>) so teams can bundle vendor redistributables cleanly, while reserving new
              <code>.MSM</code> creation for <strong>Developer+</strong>. Shipping <code>1.0.0</code> &rarr; <code>1.0.1</code>
              in <strong>Essentials</strong> performs an atomic <code>MSI.DLL</code> <strong>Major Upgrade</strong> (minting a
              fresh <code>ProductCode</code> under your permanent <code>UpgradeCode</code>) without <code>.MSP</code> patch
              overhead.
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>3. Standalone Folder / <code>.ZIP</code> Self-Extractor Tool</h3>
            <p>
              In addition to <code>PackageKind = sfx</code> inside the main IDE, our lightweight <strong>Self-Extractor</strong>
              will also ship as a dedicated standalone utility—compressing any folder or <code>.zip</code> into an
              <code>LZMS</code> single-file <code>.exe</code> with selectable UAC level, Dark/Light/Contrast UI, and a
              <strong>Software Installation <code>%TEMP%</code> wrapper</strong> that automatically waits for child process trees
              and classic cleanup helpers like <code>_ISDEL.EXE</code> before scrubbing <code>%TEMP%</code>!
            </p>
          </div>
        </article>

        <article class="card">
          <div>
            <h3>4. Suite-Wide Editions, <code>RaggieScript</code> Everywhere &amp; Dual-Bar Suites</h3>
            <p>
              All <strong>8 RaggieSoft Studio products</strong> (plus All-Access <strong>Studio Suite</strong> bundles,
              including free <em>RaggieSoft Studio Community</em>) share the exact same <code>Community</code>,
              <code>Essentials</code>, <code>Developer</code>, and <code>Architect</code> tiers—with
              <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> spanning all 8 tools via host-specific subsets and
              Unified Suite Setups rendering <strong>monotonic Overall + Current Component dual progress bars</strong>!
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="raggiescript-preview" class="calc-panel" aria-labelledby="raggiescript-heading">
      <span class="eyebrow">Coming in v0.7.0 • Community, Developer &amp; Architect Editions</span>
      <h2 id="raggiescript-heading" style="margin-top: 0.25rem;">Preview: <code>RaggieScript</code> (<code>.rssc</code>) Zero-MSI Native Scripting Engine</h2>
      <p>
        When you want full programmatic control with <strong>zero <code>msi.dll</code> dependency</strong> and zero
        <code>Global_MSIExecute</code> mutex contention, <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong>
        compiles clean C# / TypeScript-style curly-brace scripts directly into compact <code>RSWBC1</code> bytecode
        (<code>&lt; 50 KB</code> static <code>/MT</code> C++20 VM with <code>/DELAYLOAD:msi.dll</code>)—supporting both
        <strong>100% standalone <code>setup.rssc</code> projects</strong> and <strong>hybrid <code>.rsip</code> +
        <code>ScriptFile = setup.rssc</code></strong> workflows.
      </p>
      <ul class="feature-list">
        <li><strong>Compile-Time Phase Isolation</strong>: <code>wizard { ... }</code> is strictly side-effect-free UI and pre-flight probing with an automatic <strong><code>&larr; Back</code></strong> navigation state stack (calling mutating operations inside <code>wizard</code> is caught at compile time via <code>RSW701</code>).</li>
        <li><strong>Automatic Double-Entry Rollback &amp; Uninstaller Ledger</strong>: Every mutating statement in <code>install { ... }</code> (<code>fs.extract</code>, <code>reg.writeString</code>, <code>shortcut.create</code>, <code>env.appendPath</code>) automatically writes its inverse undo entry to <code>.rsw-rollback.jnl</code> for instant mid-install cancellation rollback and records clean removal metadata for signed native <code>Uninstall.exe</code>.</li>
      </ul>
      <pre aria-label="RaggieScript .rssc Standalone Native Installer Preview">// Standalone RaggieScript (.rssc) project — compiles via: instbuild.exe setup.rssc --arch=x64
package "Sample Studio Workbench" {
  id:        "{9B4E20A1-7C93-4D62-9B44-524147474950}";
  version:   1.2.0;
  publisher: "Sample Studio";
  scope:     Scope.Machine;
  uac:       Uac.AsInvoker;
  style:     WizardStyle.AeroWizard;
}

param installDir: path   = sys.programFiles / "Sample Studio" / "Workbench";
param serverUrl:  string = "https://raggiesoftstudio.com";

payload CoreFiles { from "..\\publish\\win-\${arch}\\*" -&gt; installDir; }

wizard {
  step Welcome     { ui.welcome("Welcome to Sample Studio Workbench"); }
  step Destination { ui.folderPicker(label: "Install &amp;location:", bind: ref installDir); }
  step Endpoint when (!sys.isSilent) {
    ui.textBox(label: "&amp;Server URL:", bind: ref serverUrl);
  }
  step Ready       { ui.readySummary(installButton: "&amp;Install"); }
}

install {
  fs.extract(CoreFiles);
  reg.writeString(Hive.HKLM, "Software\\SampleStudio\\Workbench", "Endpoint", serverUrl);
  shortcut.create(ShortcutLocation.StartMenu, "Sample Studio Workbench", installDir / "Workbench.exe");
}</pre>
      <div class="btn-row" style="margin-top: 1rem;">
        <a class="btn btn-primary" href="/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Open Raw Editions &amp; RaggieScript Spec (.md)</a>
        <a class="btn btn-outline" href="/installer-studio/roadmap">View v0.6 &rarr; v1.0 Roadmap</a>
      </div>
    </section>
  `}function Tr(){return`
    <section class="hero" aria-labelledby="tour-title">
      <span class="eyebrow">Real Native Win32 C++20 Captures • v0.5.0 on Windows 11</span>
      <h1 id="tour-title">Visual Feature Tour &amp; Full-Size Screenshots</h1>
      <p class="lead">
        Every window on this page is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables
        (<code>InstallerStudio.exe</code>, <code>SetupWizard.exe</code>, <code>RaggieSoftHelp.exe</code>, and
        <code>msiprism.exe</code>) using stock Windows 11 system libraries—featuring <strong>10 selectable era-spanning
        wizard styles</strong> (including <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp;
        <code>fullscreenblue</code> Cobalt washes), 32-bit ARGB vector <code>SysTreeView32</code> hierarchies, and live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
        <strong>Click or press Enter on any screenshot to inspect it at full 1:1 native size.</strong>
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${ie}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Pe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/installer-studio/faq">Read FAQ</a>
        <a class="btn btn-outline" href="/installer-studio/roadmap">Explore v1.0 Roadmap</a>
      </div>
      ${pe()}
    </section>

    <section aria-labelledby="tour-ide-heading">
      <span class="eyebrow">Part 1 • 12-View Tree-First Visual IDE (InstallerStudio.exe)</span>
      <h2 id="tour-ide-heading" style="margin-top: 0.25rem;">Hierarchical Project Authoring Without Flat Spreadsheet Clutter</h2>
      <p>
        Instead of cramming features, folders, registry keys, runtimes, and shortcuts into flat spreadsheets,
        <code>InstallerStudio.exe</code> organizes every subsystem into keyboard-accessible <code>SysTreeView32</code>
        hierarchies with 20 anti-aliased 32-bit ARGB icons—synchronized 1:1 with a comment-preserving plain-text
        <code>.rsip</code> AST.
      </p>
      <div class="shot-grid">
        ${gr.map(I).join(`
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
        ${hr.map(I).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="tour-tools-heading">
      <span class="eyebrow">Part 3 • Built-In Companion Tools (RaggieSoftHelp.exe &amp; msiprism.exe)</span>
      <h2 id="tour-tools-heading" style="margin-top: 0.25rem;">Instant F1 Offline Documentation &amp; 64-Bit SQL Database Inspection</h2>
      <div class="shot-grid">
        ${mr.map(I).join(`
`)}
      </div>
    </section>

    <section id="v060-lab-previews" aria-labelledby="tour-lab-heading">
      <span class="eyebrow">Part 4 • In the Lab: Coming Next in v0.6.0 (Real Win32 C++20 Builds)</span>
      <h2 id="tour-lab-heading" style="margin-top: 0.25rem;">Monotonic Dual-Bar Suite Setup, Compact Self-Extractor &amp; True Dark AeroWizards</h2>
      <p>
        Captured directly from our active <code>v0.6.0</code> C++20 self-test suite while <code>v0.5.0</code> completes initial
        Microsoft SmartScreen reputation review:
      </p>
      <div class="shot-grid">
        ${Mi.map(I).join(`
`)}
      </div>
    </section>
  `}function Rr(){return`
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.5.0 Shipped &rarr; v1.0.0 GA Dogfood Cutover</span>
      <h1 id="roadmap-page-title">Public Engineering Roadmap</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is built in the open as original, zero-dependency native Win32 C++20
        software for Windows 11 <code>x64</code> and <code>ARM64</code>. Our <strong><code>v1.0.0 GA</code> North Star</strong>
        is clear and practical: reaching the exact point where <strong>100% of RaggieSoft's own Windows applications, classic
        VB6 utilities (<em>StoreTrainer</em>), interactive novels, and supporter audio archives</strong> are packaged, signed,
        updated, and distributed exclusively with Installer Studio—while permanently keeping
        <strong><a href="/installer-studio/editions">Community Edition at 100% technical feature parity with Architect Edition</a></strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Be}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/installer-studio/ROADMAP.md">Open Raw ROADMAP.md</a>
        <a class="btn btn-outline" href="/installer-studio/editions">Editions &amp; Matrix</a>
        <a class="btn btn-outline" href="/installer-studio/screenshots">Visual Tour (v0.5.0)</a>
        <a class="btn btn-outline" href="/installer-studio/faq">Read FAQ</a>
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
              <th scope="row"><code>v0.1.0</code> – <code>v0.5.0</code></th>
              <td>10 Wizard Styles (<code>FullScreenBlue</code> &amp; <code>FullScreenTeal</code> <code>#008080</code> ACME Callback, <code>Wizard95</code>..<code>FluentMica</code>), Classic &amp; Custom Setup Types (<code>Typical</code>/<code>Compact</code>/<code>Complete</code>/<code>Custom</code> &amp; <code>[SetupType.*]</code>), WCAG Auto-Contrast, Microsoft Azure Artifact Signing, Universal Web &amp; Offline EXEs (<code>x64 + ARM64</code>), 12-View Tree-First IDE, <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, &amp; native <code>F1</code> Help</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.5.1</code></th>
              <td>Outer <code>Setup.exe</code> <code>RequestedExecutionLevel</code> Stamping (<code>asInvoker</code> | <code>highestAvailable</code> | <code>requireAdministrator</code>), UAC-disabled (<code>EnableLUA = 0</code>) <code>CheckTokenMembership</code> Administrator rights enforcement, de-elevated Finish launch, <code>UpgradeCode</code> single-instance focus &amp; polite cross-product <code>Global_MSIExecute</code> auto-queue, Windows 7+ <code>ITaskbarList3</code> progress bar, &amp; <code>Error 1324</code> + <code>Wizard95</code> polish</td>
              <td><span class="status-pill status-next">Next Point Release</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.6.0</code></th>
              <td>Lightweight Self-Extracting <code>.EXE</code> Builder (<code>PackageKind = sfx</code> + <code>%TEMP%</code> Software Installation Wrapper &amp; Standalone Tool), Multi-Volume Disk Spanning (<code>CAB1..N.cab</code>), Loose Uncompressed Source Media (<em>Run from Media / Network</em> &amp; <code>msiexec.exe /a</code> Admin Installs), <code>.rswpak</code> Packs, <code>.NET 11</code> presets, &amp; Multi-Engine Suite Setup (<code>Engine = native | msi</code>)</td>
              <td><span class="status-pill status-next">Next Up</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.7.0</code></th>
              <td><strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> Zero-MSI Native Scripting Language &amp; <code>RSWBC1</code> Bytecode VM + From-Scratch Dual Dialog Builders (C++ <code>SetupWizard.exe</code> + Raw <code>370&times;270</code> <code>MSI.DLL</code> SQL canvas)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.8.0</code></th>
              <td>Solution &amp; Legacy Project Importers (Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM for <em>StoreTrainer</em>, &amp; <code>.msi</code> decompiler) + Windows Restart Manager (<code>Rstrtmgr.dll</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.9.0</code></th>
              <td>Interactive Authenticode &amp; Azure Artifact Signing Studio UI, white-label <code>RsUpdate.exe</code> Auto-Updater, &amp; guided Microsoft-compliant <code>.MSP</code> servicing (<code>--plan-update</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.0.0 GA</code></th>
              <td>Turnkey GitHub Actions / Azure DevOps tasks, <code>--emit-winget</code>, &amp; 100% RaggieSoft production cutover across all apps, interactive books, and supporter audio archives</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.1+</code> (Post-1.0)</th>
              <td>Disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture, Visual Studio <code>.vsix</code>, Windows Services/Firewall/Config Patchers, in-process <code>.MSIXBUNDLE</code> (<code>AppxPackaging.dll</code>), 20-lang <code>I18N</code> + RTL, &amp; <code>--emit-sbom</code></td>
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
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.5.0)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v05' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v05'">v0.5 (10 Wizard Styles • Shipped)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v06' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v06'">v0.6 (SFX EXE &amp; .rswpak • Next Up)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v07' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v07'">v0.7 (Dialog Builders)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v08' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v08'">v0.8 (.slnx &amp; VB6 .vbp)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v09' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v09'">v0.9 (Signing &amp; Updater)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v10' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v10'">v1.0 GA &amp; Post-1.0</button>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.5.0</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>10 Selectable Wizard Styles, Classic Setup Types &amp; WCAG Auto-Contrast (<code>v0.5.0</code>)</strong>: Selectable era-spanning <code>[UI] WizardLayout</code> styles (including <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp; <code>fullscreenblue</code> <code>#000080</code> Cobalt washes, <code>wizard95</code>, <code>wizard97</code>, <code>aerowizard</code>, <code>fluentmica</code>, <code>oneclick</code>, <code>passivetoast</code>, and <code>autorun16x9</code>), classic <strong>Typical / Compact / Complete / Custom</strong> &amp; <code>[SetupType.*]</code> presets, <code>[Billboard.*]</code> slides, and one-click WCAG 2.2 AA Auto-Contrast.</li>
          <li><strong>Microsoft Azure Artifact Signing &amp; ARM64 <code>/dlib</code> Dispatch (<code>v0.4.5</code>)</strong>: Dual-layer Public Trust Authenticode signing across every inner C++20 binary, <code>.msi</code> database, and Universal <code>Setup.exe</code>—backed by automatic PE <code>Machine</code> matching for <code>Azure.CodeSigning.Dlib.dll</code> on Windows 11 <code>ARM64</code> workstations and <code>ImageRemoveCertificate</code> pre-signed template stripping.</li>
          <li><strong>Plain-English Feature Inclusion Tiers (<code>v0.4.4</code>)</strong>: Replaced cryptic numeric Windows Installer <code>InstallLevel</code> inputs with human-friendly <strong>Included In</strong> tiers (<em>Minimal / Compact</em>, <em>Typical / Express</em>, <em>Complete Only</em>, and <em>Hidden</em>) across the Visual IDE and <code>.rsip</code> grammar.</li>
          <li><strong>CPU-Aware Smart Web Stub &amp; Combined Offline Universal EXE (<code>v0.4.3</code>)</strong>: Eliminates separate <code>x64</code> vs. <code>ARM64</code> download confusion via a compact 64-bit universal outer launcher that pierces Windows 11 Prism emulation through <code>IsWow64Process2</code> to download or unpack the genuine native silicon installer with SHA-256 verification.</li>
          <li><strong>12-View Tree-First Win32 C++20 Visual IDE, Live Dark Mode &amp; Native <code>F1</code> Help (<code>v0.3.0</code>–<code>v0.4.2</code>)</strong>: Categorized sidebar tree, dedicated <strong>Features</strong> and <strong><code>RegEdit</code>-style Registry</strong> trees, custom-subclassed Dark Mode push buttons and checkboxes flipping live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code>, zero-dependency <code>RaggieSoftHelp.exe</code>, Pre-MSI <code>[Prerequisite.*]</code> runtimes, and 64-bit <code>.MSM</code> merging.</li>
        </ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="/installer-studio/screenshots">Explore Live v0.5.0 Screenshots</a>
          <a class="btn btn-outline" href="/installer-studio/changelog">Read Full v0.1.0 &rarr; v0.5.0 Changelog</a>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v05'" aria-labelledby="phase-v05-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-shipped">Shipped in v0.5.0 + Next Point Release v0.5.1</span>
          <h2 id="phase-v05-heading" style="margin-top: 0.5rem;">10 Wizard Layout Variations, WCAG Contrast Enforcer &amp; Configurable UAC Timing (<code>v0.5.1</code>)</h2>
          <ul class="feature-list">
            <li><strong>Classic &amp; Modern Wizard Geometries (<code>[UI] WizardLayout</code>)</strong>: Includes <code>Wizard95</code> (<code>164px</code> sunken left graphic rail across all steps), <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code>, <code>FullScreenTeal</code>, and <code>Autorun16x9</code>.</li>
            <li><strong>Classic Windows 95 &amp; Author-Defined Setup Types (<code>[SetupType.&lt;Id&gt;]</code>)</strong>: Built-in <strong>Typical / Compact / Complete / Custom</strong> or modern <strong>Express / Compact / Custom</strong> presets plus repeatable custom publisher Setup Types.</li>
            <li><strong>Windows Contrast Theme Override &amp; Live WCAG 2.2 AA Contrast Enforcer</strong>: Honors <code>SPI_GETHIGHCONTRAST</code> automatically and validates custom brand hex colors via <code>RSW055</code> in <code>instbuild.exe --validate</code>.</li>
            <li><strong><code>v0.5.1</code> — Outer <code>Setup.exe</code> <code>RequestedExecutionLevel</code> (<code>asInvoker</code> | <code>highestAvailable</code> | <code>requireAdministrator</code>), UAC-Off Admin Gate &amp; Polite Cross-Product Auto-Queue</strong>: Stamp your chosen Win32 execution level directly onto outer <code>Setup.exe</code>, backed by <code>CheckTokenMembership(DOMAIN_ALIAS_RID_ADMINS)</code> + MSI <code>Privileged</code> checks when UAC (<code>EnableLUA = 0</code>) is turned off, per-product <code>UpgradeCode</code> single-instance focus handoff, and polite cross-product <code>Global_MSIExecute</code> auto-queuing (<code>ScopedActiveMsiBeacon</code> + amber <code>ITaskbarList3</code> taskbar progress instead of MSI <code>Error 1618</code>)! <a href="/installer-studio/docs/selection-tree-and-dialogs#uac-elevation-timing">Read the full manifest, UAC-off &amp; concurrency guide &rarr;</a></li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v06'" aria-labelledby="phase-v06-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Target v0.6.0 • Next Up</span>
          <h2 id="phase-v06-heading" style="margin-top: 0.5rem;">SFX <code>.EXE</code> Builder, Multi-Volume Disk Spanning, Loose Source Media (<code>msiexec /a</code>), <code>.rswpak</code> Packs &amp; Multi-Engine Suites</h2>
          <ul class="feature-list">
            <li><strong>Lightweight Self-Extracting Archive <code>.EXE</code> Builder (<code>PackageKind = sfx</code>)</strong>: Turn any folder or <code>.zip</code> archive into a zero-dependency, Dark-Mode-aware <code>LZMS</code> self-extracting <code>.exe</code> with optional <code>PostExtractRun</code> or <code>PostExtractOpen</code>.</li>
            <li><strong>Multi-Volume Disk Spanning, Uncompressed Loose Source Media &amp; Administrative Installs (<code>msiexec.exe /a</code>)</strong>: Split multi-gigabyte distributions across numbered external <code>CAB1..CABN.cab</code> volumes, publish uncompressed side-by-side source trees supporting <em>Run from Media</em> and <em>Run from Network</em>, and support <code>msiexec.exe /a</code> network extractions.</li>
            <li><strong>Granular On-Demand Feature Packs (<code>.rswpak</code>), Multi-Engine Suites (<code>.rsis</code>) &amp; Monotonic Dual-Bar Suite Progress</strong>: Chain transactional <code>.msi</code> desktop apps alongside <code>Engine = native</code> libraries under one Suite Maintenance Hub featuring <strong>two distinct progress bars</strong>—a byte-weighted, strictly monotonic <strong>Overall Suite Progress</strong> bar (<code>0%&ndash;100%</code>, bound 1:1 to Windows Taskbar <code>ITaskbarList3</code> with zero per-component resets!) above a live <strong>Current Component</strong> bar—plus dynamic <code>ARPSYSTEMCOMPONENT=1</code> standalone adoption.</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v07'" aria-labelledby="phase-v07-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.7.0</span>
          <h2 id="phase-v07-heading" style="margin-top: 0.5rem;"><code>RaggieScript</code> (<code>.rssc</code>) Zero-MSI Native Scripting &amp; From-Scratch Dual Dialog Builders</h2>
          <ul class="feature-list">
            <li><strong><code>RaggieScript</code> (<code>.rssc</code>) &amp; C++20 <code>RSWBC1</code> Bytecode VM</strong>: Modern curly-brace native scripting supporting both standalone <code>setup.rssc</code> projects and hybrid <code>.rsip</code> + <code>ScriptFile = setup.rssc</code> workflows—enforcing compile-time <code>wizard</code> vs. <code>install</code> phase isolation, automatic rollback journaling, and <code>/DELAYLOAD:msi.dll</code> zero-MSI execution. <a href="/installer-studio/editions#raggiescript-preview">Preview RaggieScript syntax &rarr;</a></li>
            <li><strong>From-Scratch C++ &amp; Raw <code>370&times;270</code> <code>MSI.DLL</code> Dialog Designers</strong>: Blank-canvas WYSIWYG editors for building custom wizard pages in both <code>SetupWizard.exe</code> (<code>[Dialog.*]</code>) and standalone <code>msiexec</code> SQL tables (<code>[MsiDialog.*]</code> / <code>[MsiControl.*]</code>).</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v08'" aria-labelledby="phase-v08-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.8.0</span>
          <h2 id="phase-v08-heading" style="margin-top: 0.5rem;">Solution &amp; Legacy Project Importers (<code>.slnx</code>, VB6 <code>.vbp</code> Reg-Free COM &amp; <code>.msi</code>) + Restart Manager</h2>
          <ul class="feature-list">
            <li><strong>Visual Studio <code>.slnx</code> / <code>.csproj</code> / <code>.vcxproj</code> &amp; VB6 <code>.vbp</code> Importers</strong>: One-click runtime detection plus Reg-Free COM side-by-side manifest generation for classic VB6 utilities like <em>StoreTrainer</em>.</li>
            <li><strong><code>.msi</code> Decompiler &amp; Windows Restart Manager (<code>Rstrtmgr.dll</code>)</strong>: Import existing <code>.msi</code> databases into <code>.rsip</code> projects and gracefully close running app processes during upgrades.</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v09'" aria-labelledby="phase-v09-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.9.0</span>
          <h2 id="phase-v09-heading" style="margin-top: 0.5rem;">Authenticode Signing Studio, Bundled <code>RsUpdate.exe</code> + <code>RsPatch.exe</code> Clients &amp; Guided <code>.MSP</code> Servicing</h2>
          <ul class="feature-list">
            <li><strong>Interactive Signing Studio</strong>: Certificate store picker, Azure Artifact Signing tester, and Dual-Layer <code>WinVerifyTrust</code> check on both inner <code>.msi</code> and outer <code>Setup.exe</code>.</li>
            <li><strong>Bundled <code>RsUpdate.exe</code> &amp; <code>RsPatch.exe</code> (<code>msdelta.dll</code>) Clients</strong>: Zero-service white-label updater (on-demand checks + setup opt-in weekly Windows Scheduled Task, unchecked by default) paired with a native <code>msdelta.dll</code> patching engine that assists with compile-time <code>.msp</code> generation and applies transactional binary deltas for <code>Engine = native</code> packages.</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v10'" aria-labelledby="phase-v10-heading" class="card">
        <div>
          <span class="status-pill">Target v1.0.0 GA &amp; v1.1+</span>
          <h2 id="phase-v10-heading" style="margin-top: 0.5rem;"><code>v1.0.0 GA</code> 8-Product Suite Dogfood Cutover &amp; Post-1.0 Enterprise Expansion</h2>
          <ul class="feature-list">
            <li><strong><code>v1.0.0 GA</code> 8-Tool Suite Dogfood Architecture</strong>: All 8 RaggieSoft Studio tools ship as individual <code>.msi</code> packages under <code>C:Program FilesRaggieSoftRaggieSoft Studio&lt;Product&gt;</code> (with unified <code>RaggieSoftHelp.exe</code> <code>F1</code> module discovery), fronted by a <strong>Showcase Studio</strong> interactive intro stub that installs either standalone tools or the full <code>.rsis</code> Suite under a single UAC elevation—plus first-party GitHub Actions and <code>--emit-winget</code>.</li>
            <li><strong><code>v1.1+</code> Post-1.0</strong>: Disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture, Visual Studio <code>.vsix</code>, Windows Services/Firewall/Config Patchers, in-process <code>.MSIXBUNDLE</code> (<code>AppxPackaging.dll</code>), 20+ language <code>I18N</code> + RTL, and SPDX / CycloneDX <code>--emit-sbom</code>.</li>
          </ul>
        </div>
      </section>
    </div>
  `}function Er(){return`
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Single-Source Offline &amp; Web Manual • Schema v0.5</span>
      <h1 id="docs-title">User Guide, .rsip Reference &amp; AI Specifications</h1>
      <p class="lead">
        Every chapter below is compiled from the <strong>exact same HTML5 documentation module</strong>
        (<code>help/raggiesoft.installer-studio/</code>) distributed inside RaggieSoft Installer Studio and displayed offline
        by <code>RaggieSoftHelp.exe</code> whenever you press <code>F1</code> in the IDE—alongside our machine-readable
        <a href="/installer-studio/llms-full.txt">/installer-studio/llms-full.txt</a> and
        <a href="/installer-studio/SKILL.md">SKILL.md</a> coding-agent specs.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/installer-studio/docs/welcome-overview">Start Reading Chapter 1 &rarr;</a>
        <a class="btn btn-outline" href="/installer-studio/llms.txt">Open Installer /llms.txt</a>
        <a class="btn btn-outline" href="/installer-studio/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="/installer-studio/SKILL.md">Download AI SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="manual-chapters-heading">
      <span class="eyebrow">Official Distributed Help Module (8 Chapters)</span>
      <h2 id="manual-chapters-heading">Browse Documentation Chapters</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <span class="eyebrow">Chapter 1 • Getting Started</span>
            <h3><a href="/installer-studio/docs/welcome-overview" style="color: inherit; text-decoration: none;">Overview, Editions &amp; Hybrid .rsip Architecture</a></h3>
            <p>Meet the 5 static <code>/MT</code> C++20 executables, the 4 official editions (<code>Community == Architect</code> parity, <code>Essentials</code>, <code>Developer</code>, <code>Architect</code>), and <code>.rsip</code> / <code>.rsis</code> / <code>.rsii</code> / <code>.rssc</code> files.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/welcome-overview">Read Chapter 1</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 2 • Visual IDE &amp; Wizards</span>
            <h3><a href="/installer-studio/docs/ide-and-aerowizards" style="color: inherit; text-decoration: none;">Tree-First Visual IDE &amp; 5 Guided AeroWizards</a></h3>
            <p>Tour the categorized views of <code>InstallerStudio.exe</code>, the 5 native Win32 AeroWizards, Features &amp; Registry trees, File Associations, and lossless AST saving.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/ide-and-aerowizards">Read Chapter 2</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 3 • Windows Installer Engine</span>
            <h3><a href="/installer-studio/docs/components-and-keypaths" style="color: inherit; text-decoration: none;">Destination Folders, Components &amp; KeyPath Rules</a></h3>
            <p>Enforce Microsoft Single-Directory (<code>RSW031</code>), <code>ICE38</code> HKCU User-Profile KeyPaths (<code>RSW032</code>), and <code>ICE18</code> <code>CreateFolder</code> rules.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/components-and-keypaths">Read Chapter 3</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 4 • Windows Installer Engine</span>
            <h3><a href="/installer-studio/docs/runtimes-and-merge-modules" style="color: inherit; text-decoration: none;">Pre-MSI Runtime Prerequisites &amp; .MSM Merge Modules</a></h3>
            <p>Distribute <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes via <code>WinHTTP</code> download, <code>LZMS</code> embed, or <code>Redist\\</code> plus 64-bit <code>.MSM</code> merging.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/runtimes-and-merge-modules">Read Chapter 4</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 5 • Wizard UI &amp; Dialogs</span>
            <h3><a href="/installer-studio/docs/selection-tree-and-dialogs" style="color: inherit; text-decoration: none;">MSI SelectionTree, C++ Glass Wizard &amp; MSI.DLL Dialogs</a></h3>
            <p>Customize <code>SetupWizard.exe</code>, the authentic 32-bit ARGB MSI <code>SelectionTree</code>, and <code>370&times;270</code> <code>MSI.DLL</code> SQL dialogs.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/selection-tree-and-dialogs">Read Chapter 5</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 6 • CLI &amp; AI Automation</span>
            <h3><a href="/installer-studio/docs/cli-and-ai-agents" style="color: inherit; text-decoration: none;">Headless CLI (instbuild.exe) &amp; AI Agent Authoring</a></h3>
            <p>Compile <code>x64</code> and <code>ARM64</code> packages in CI/CD, validate with JSON diagnostics, and generate from-scratch projects with coding agents.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/cli-and-ai-agents">Read Chapter 6</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 7 • Compliance &amp; Security</span>
            <h3><a href="/installer-studio/docs/accessibility-and-vpat" style="color: inherit; text-decoration: none;">WCAG 2.2 AA Accessibility, Dark Mode &amp; VPAT 2.5</a></h3>
            <p>UI Automation roles, High Contrast themes, Dark Mode button/checkbox/header subclasses, and automated HTML5 VPAT 2.5 exports.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/accessibility-and-vpat">Read Chapter 7</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 8 • Compliance &amp; Security</span>
            <h3><a href="/installer-studio/docs/msiprism-and-patches" style="color: inherit; text-decoration: none;">MSI Prism SQL Inspector, Signing, .MST &amp; .MSP</a></h3>
            <p>Inspect <code>.msi</code>/<code>.msm</code>/<code>.msp</code> relational tables in <code>msiprism.exe</code>, apply Dual-Layer Authenticode signing, and emit <code>.mst</code>/<code>.msp</code> deltas.</p>
          </div>
          <a class="btn btn-outline" href="/installer-studio/docs/msiprism-and-patches">Read Chapter 8</a>
        </article>
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="quick-index-heading">
      <span class="eyebrow">Direct Topic Anchors (Synced with module.rshm.json)</span>
      <h2 id="quick-index-heading" style="margin-top: 0.25rem;">Quick Keyword Index</h2>
      <div class="btn-row">
        <a class="btn btn-outline" href="/installer-studio/editions">Editions &amp; Feature Matrix</a>
        <a class="btn btn-outline" href="/installer-studio/docs/welcome-overview#editions">Community == Architect Parity</a>
        <a class="btn btn-outline" href="/installer-studio/docs/components-and-keypaths#component-rules">ICE18 &amp; ICE38 Component Rules</a>
        <a class="btn btn-outline" href="/installer-studio/docs/runtimes-and-merge-modules#prerequisites">[Prerequisite.*] Pre-MSI Runtimes</a>
        <a class="btn btn-outline" href="/installer-studio/docs/runtimes-and-merge-modules#mergemodules">[MergeModule.*] (.MSM)</a>
        <a class="btn btn-outline" href="/installer-studio/docs/selection-tree-and-dialogs#selection-tree">MSI SelectionTree</a>
        <a class="btn btn-outline" href="/installer-studio/docs/selection-tree-and-dialogs#uac-elevation-timing">RequestedExecutionLevel &amp; UAC (v0.5.1)</a>
        <a class="btn btn-outline" href="/installer-studio/docs/cli-and-ai-agents#ai-specs">llms.txt &amp; SKILL.md</a>
        <a class="btn btn-outline" href="/installer-studio/docs/accessibility-and-vpat#vpat-export">VPAT 2.5 Export</a>
        <a class="btn btn-outline" href="/installer-studio/docs/msiprism-and-patches#msiprism">MSI Prism Inspector</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.5 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Feature, Registry, Prerequisite, MergeModule, Component, MsiDialog..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Complete .rsip v0.5 Project, .rsis Suite &amp; .rsii Include Sections</caption>
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
            <tr x-show="!q || 'package name version upgradecode msi msm uac requestedexecutionlevel requireadministrator highestavailable asinvoker enablelua'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code> &amp; <code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, 3-part <code>Version</code>, <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code>, <code>RequestedExecutionLevel</code> (<code>asInvoker|highestAvailable|requireAdministrator</code> — planned in <code>v0.5.1</code>), <code>DefaultSubdir</code>, <code>MainExecutable</code>.</td>
            </tr>
            <tr x-show="!q || 'feature parent subfeature inclusion level minimal typical complete disallowabsent selectiontree'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, plain-English <code>Inclusion</code> (<code>minimal|typical|complete|hidden</code>), <code>Parent</code> hierarchy, <code>DisallowAbsent</code>, and <code>AllowAdvertise</code>.</td>
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
              <td><code>Extension</code>, <code>ProgId</code>, <code>Description</code>, <code>TargetFile</code>, <code>Verbs</code>, <code>ContentType</code>, and <code>Advertise</code>.</td>
            </tr>
            <tr x-show="!q || 'shortcut startmenu desktop lnk'.includes(q.toLowerCase())">
              <th scope="row"><code>[Shortcut.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Name</code>, <code>TargetFile</code>, <code>Location</code> (<code>StartMenu|Desktop</code>), <code>Arguments</code>, and <code>Feature</code> with automatic <code>ICE38</code> KeyPaths.</td>
            </tr>
            <tr x-show="!q || 'ui aerowizard glass wizardlayout wizard95 fluentmica fullscreenblue fullscreenteal acme setuptype billboard msidialogpreset'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code>, <code>[SetupType.*]</code>, <code>[Billboard.*]</code> &amp; <code>[MsiDialog.*]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>10 <code>WizardLayout</code> styles (<code>standard|wizard95|wizard97|aerowizard|fluentmica|oneclick|passivetoast|fullscreenblue|fullscreenteal|autorun16x9</code>), <code>SetupTypePreset</code> (<code>express_custom|win95_classic</code>), custom <code>[SetupType.*]</code> &amp; <code>[Billboard.*]</code> cards, plus custom <code>370&times;270</code> SQL dialogs!</td>
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
  `}function _r(){return`
    <section class="hero" aria-labelledby="faq-title">
      <span class="eyebrow">Technical &amp; Consumer Questions Answered • v0.5.0</span>
      <h1 id="faq-title">Frequently Asked Questions</h1>
      <p class="lead">
        Clear, honest answers about Dual-Layer Microsoft Azure Artifact Signing, why our universal installer targets
        64-bit <code>x64</code> and <code>ARM64</code> (skipping extinct <code>IA-64</code> and 32-bit <code>x86</code>
        host OS builds while still supporting legacy 32-bit app payloads), plain-English setup tiers, accessibility, and our
        official four-edition lineup (<a href="/installer-studio/editions"><code>Community == Architect</code> parity</a>).
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${ie}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Pe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/installer-studio/docs">Read Distributed Manual</a>
        <a class="btn btn-outline" href="/installer-studio/roadmap">View v1.0 Roadmap</a>
      </div>
    </section>

    <section aria-labelledby="faq-downloads-heading">
      <span class="eyebrow">Part 1 • Downloads, Authenticode Signing &amp; Supported Processors</span>
      <h2 id="faq-downloads-heading" style="margin-top: 0.25rem;">Code Signing, CPU Detection &amp; Architecture Choices</h2>
      <div class="grid-2x2">
        <article id="smartscreen" class="card card-highlight">
          <div>
            <h3>1. Why does Windows SmartScreen still warn on <code>v0.5.0</code> even though the downloads are cryptographically signed?</h3>
            <p>
              <strong>Every <code>v0.5.0</code> installer and inner executable is 100% Authenticode-signed via Microsoft Azure
              Artifact Signing</strong> under verified Public Trust identity (<strong>Michael Ragsdale</strong>, chaining to
              <em>Microsoft Identity Verification Root Certificate Authority 2020</em> with RFC 3161 SHA-256 timestamps from
              <code>http://timestamp.acs.microsoft.com</code> and verified via <code>signtool verify /pa</code>).
            </p>
            <p>
              <strong>Why SmartScreen still prompts temporarily:</strong> Since mid-2024, Microsoft retired automatic Day-1
              SmartScreen bypasses for all newly issued certificates (including EV and cloud HSM keys). Because our Azure
              Artifact Signing identity went live on <strong>November 25, 2026</strong>, Windows Defender SmartScreen displays
              <em>&ldquo;Windows protected your PC&rdquo;</em> until initial download reputation builds and
              <strong>Microsoft Security Intelligence (WDSI)</strong> completes its review of our submitted <code>v0.5.0</code>
              binaries (which are hash-frozen on the CDN during review).
            </p>
            <p>
              <strong>How to verify authenticity before running:</strong> Click <strong>More info</strong> on the SmartScreen
              dialog and confirm Windows displays <strong><code>Publisher: Michael Ragsdale</code></strong> before clicking
              <strong>Run anyway</strong>.
            </p>
          </div>
        </article>

        <article id="which-download" class="card">
          <div>
            <h3>2. I don't know whether my Windows PC is <code>AMD64</code> (<code>x64</code>) or <code>ARM64</code>. Which file do I download?</h3>
            <p>
              Either of our two universal buttons works on <strong>both</strong> Intel/AMD <code>x64</code> and Snapdragon /
              Windows on ARM <code>ARM64</code> computers automatically:
            </p>
            <ul class="feature-list">
              <li><strong>Smart Web Setup (<code>raggiesoft-installer-studio-setup.exe</code>, ~862 KB)</strong>: Queries <code>IsWow64Process2</code> at launch (piercing Windows 11 Prism emulation in under 0.1ms), downloads <em>only</em> your processor's native signed installer over HTTPS, verifies its SHA-256 checksum, and runs it natively.</li>
              <li><strong>Full Offline Universal Installer (<code>raggiesoft-installer-studio-offline-setup.exe</code>, ~3.9 MB)</strong>: Packs <em>both</em> signed <code>x64</code> and <code>ARM64</code> native installers inside one portable file for offline or air-gapped PCs and USB drives.</li>
            </ul>
          </div>
        </article>

        <article id="why-no-ia64-x86" class="card">
          <div>
            <h3>3. Why are <code>IA-64</code> (Itanium) and 32-bit <code>x86</code> host OS builds skipped?</h3>
            <p>
              Every supported Windows desktop, laptop, and workstation in late 2026 runs a 64-bit operating system kernel
              (<code>IMAGE_FILE_MACHINE_AMD64</code> <code>0x8664</code> or <code>IMAGE_FILE_MACHINE_ARM64</code> <code>0xAA64</code>):
            </p>
            <ul class="feature-list">
              <li><strong><code>IA-64</code> (Intel Itanium) is museum hardware</strong>: Skipping Itanium lets <code>instbuild.exe</code> strictly guard against emitting <code>PID_TEMPLATE = Intel64;1033</code> (which meant Itanium and causes <code>msiexec</code> on Intel Core and AMD Ryzen PCs to reject the MSI!), using strictly <code>x64;1033</code> and <code>Arm64;1033</code> instead.</li>
              <li><strong>32-bit <code>x86</code> Windows OS is retired</strong>: Windows 11 has never shipped a 32-bit operating system image, and 32-bit Windows 10 reached End of Support in October 2025.</li>
            </ul>
          </div>
        </article>

        <article id="legacy-32bit-apps" class="card">
          <div>
            <h3>4. Can a 64-bit Installer Studio still package legacy 32-bit applications (such as classic Visual Basic 6.0 programs)?</h3>
            <p>
              <strong>Yes!</strong> Skipping 32-bit <em>host OS</em> builds does not prevent a 64-bit <code>instbuild.exe</code>
              from packaging legacy 32-bit payload applications running via <code>SysWOW64</code>. Our <code>v0.8.0</code>
              milestone includes a <strong>Visual Basic 6.0 (<code>.vbp</code>) Importer</strong> emitting <code>Intel;1033</code>
              metadata and zero-elevation <strong>Reg-Free COM</strong> side-by-side manifests.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="faq-authoring-heading">
      <span class="eyebrow">Part 2 • Setup Types, Inclusion Tiers, Editions &amp; AI Agents</span>
      <h2 id="faq-authoring-heading" style="margin-top: 0.25rem;">Plain-English Authoring, Accessibility &amp; Official Product Editions</h2>
      <div class="card-grid">
        <article id="install-level" class="card">
          <div>
            <h3>5. What is "Included In" (<code>Minimal</code>, <code>Typical</code>, <code>Complete</code>) vs. Windows Installer <code>InstallLevel</code>?</h3>
            <p>
              RaggieSoft Installer Studio replaces cryptic numeric <code>Feature.Level</code> thresholds with plain-English
              <strong>Included In</strong> tiers (<code>minimal</code>, <code>typical</code>, <code>complete</code>, and
              <code>hidden</code>) paired with classic <strong>Typical / Compact / Complete / Custom</strong> or modern
              <strong>Express / Compact / Custom</strong> Setup Types!
            </p>
          </div>
        </article>

        <article id="community-parity" class="card">
          <div>
            <h3>6. How do Community, Essentials, Developer, and Architect editions compare—and is Community really 100% Architect parity?</h3>
            <p>
              <strong>Yes, permanently.</strong> <strong>Community Edition</strong> (free for hobbyists, solo creators, students,
              educators, and open source) maintains 100% technical feature parity with <strong>Architect Edition</strong> with zero
              watermarks. For commercial teams, <strong>Essentials</strong> covers guided <code>.MSI</code> + <code>Setup.exe</code>,
              <code>sfx</code> self-extractors, <code>.MSM</code> consumption, and Major Upgrades; <strong>Developer</strong> adds
              <code>.MSM</code> creation, <code>RaggieScript</code> (<code>.rssc</code>), custom dialog designers, and CI/CD agents;
              and <strong>Architect</strong> adds <code>.rsis</code> Suites, <code>.MSP</code> binary-delta patches, and HTML5 VPAT 2.5.
              <a href="/installer-studio/editions">View the full Editions Matrix &rarr;</a>
            </p>
          </div>
        </article>

        <article id="ai-agents-v1" class="card">
          <div>
            <h3>7. How do AI coding agents use Installer Studio?</h3>
            <p>
              <code>.rsip</code> projects and <code>.rsis</code> suites are diff-friendly plain-text INI manifests whose comments
              survive GUI saves byte-for-byte. Coding agents read our compiler-emitted
              <a href="/installer-studio/llms-full.txt">/installer-studio/llms-full.txt</a> and
              <a href="/installer-studio/SKILL.md">SKILL.md</a> specs and lint manifests via
              <code>instbuild.exe --validate --diagnostics=json</code>.
            </p>
          </div>
        </article>

        <article id="uac-elevation-timing" class="card">
          <div>
            <h3>8. Can I stamp outer <code>Setup.exe</code> as <code>asInvoker</code>, <code>highestAvailable</code>, or <code>requireAdministrator</code>—and what if UAC is turned off?</h3>
            <p>
              <strong>Yes (planned in <code>v0.5.1</code>):</strong> <code>[Package] RequestedExecutionLevel</code> gives you a
              direct choice of <code>asInvoker</code> (default just-in-time elevation on <strong>Install</strong>),
              <code>highestAvailable</code>, or <code>requireAdministrator</code> (<code>0.0s</code> launch elevation) stamped
              into the outer <code>Setup.exe</code> manifest. And even if UAC is completely disabled on the PC
              (<code>EnableLUA = 0</code>), <code>SetupWizard.exe</code> still verifies true <code>BUILTINAdministrators</code>
              rights via Win32 <code>CheckTokenMembership</code> (plus MSI <code>Privileged</code> checks) whenever
              <code>Scope = machine</code>!
              <a href="/installer-studio/docs/selection-tree-and-dialogs#uac-elevation-timing">Full manifest &amp; UAC-off guide &rarr;</a>
            </p>
          </div>
        </article>
      </div>
    </section>
  `}function Dr(){return`
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • Signed Universal x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${ie}">Download Latest v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Pe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/installer-studio/screenshots">Inspect v0.5.0 Screenshots</a>
        <a class="btn btn-outline" href="/installer-studio/faq">Read FAQ</a>
      </div>
    </section>

    <section aria-labelledby="v050-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v050-heading" style="margin-top: 0.25rem;">v0.5.0 — 10 Selectable Wizard Styles, Classic &amp; Custom Setup Types, Billboards &amp; WCAG Auto-Contrast</h2>
      <ul class="feature-list">
        <li><strong>10 Selectable First-Party Wizard Styles (<code>[UI] WizardLayout</code>)</strong>: Shipped <code>standard</code>, <code>wizard95</code> (<code>#C0C0C0</code> 3D beveled sheet + <code>164px</code> sunken left graphic rail across every page), <code>wizard97</code>, <code>aerowizard</code>, <code>fluentmica</code>, <code>oneclick</code>, <code>passivetoast</code>, <code>fullscreenblue</code>, <code>fullscreenteal</code> (1995 <code>#008080</code> ACME callback), and <code>autorun16x9</code>—all yielding automatically to <code>SPI_GETHIGHCONTRAST</code>.</li>
        <li><strong>Classic Windows 95 &amp; Author-Defined Setup Types + <code>[Billboard.*]</code></strong>: Added 4-card <code>win95_classic</code> Setup Types (<strong>Typical</strong>, <strong>Compact</strong>, <strong>Complete</strong>, <strong>Custom</strong>), repeatable <code>[SetupType.&lt;Id&gt;]</code> cards, floating 3D <code>[Billboard.&lt;Id&gt;]</code> showcase cards, and expanded <code>MSI.DLL</code> <code>ActionData</code> file/byte progress formatting.</li>
        <li><strong>Live WCAG 2.2 AA Brand Contrast Enforcer (<code>RswWcagContrast.hpp</code> &amp; <code>RSW055</code>)</strong>: Added W3C relative luminance validation in <code>instbuild.exe --validate</code> plus a one-click <strong>Auto-Fix WCAG</strong> button in <code>InstallerStudio.exe</code>.</li>
      </ul>
    </section>

    <section aria-labelledby="v045-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v045-heading" style="margin-top: 0.25rem;">v0.4.5 — Microsoft Azure Artifact Signing, ARM64 /dlib Dispatch &amp; Pre-Signed Template Safety</h2>
        <ul class="feature-list">
          <li><strong>100% Cryptographically Signed Release via Microsoft Azure Artifact Signing</strong>: Dual-Layer Public Trust Authenticode signing with RFC 3161 SHA-256 timestamps across all inner C++20 executables, <code>x64</code>/<code>ARM64</code> <code>.msi</code> databases, and Universal outer <code>Setup.exe</code> launchers.</li>
          <li><strong>Architecture-Aware <code>/dlib</code> SignTool Dispatch &amp; Local Temp Resource Stamping</strong>: Automatic PE <code>Machine</code> matching for <code>Azure.CodeSigning.Dlib.dll</code> on Windows 11 ARM64 plus clean <code>ImageRemoveCertificate</code> stripping.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v044-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v044-heading" style="margin-top: 0.25rem;">v0.4.4 — Plain-English Feature Inclusion Tiers &amp; Public FAQ</h2>
        <ul class="feature-list">
          <li>Replaced raw numeric <code>InstallLevel</code> inputs with human-friendly <strong>Included In</strong> tiers (<code>minimal</code>, <code>typical</code>, <code>complete</code>, <code>hidden</code>) and launched the public <a href="/installer-studio/faq">FAQ</a>.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v043-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v043-heading" style="margin-top: 0.25rem;">v0.4.3 — CPU-Aware Smart Web Stub &amp; Combined Offline Universal Single-EXE (x64 + ARM64)</h2>
        <ul class="feature-list">
          <li>Added <code>IsWow64Process2</code> Prism-piercing Smart Web Stubs and Combined Offline Universal EXEs with build-stamped <code>SHA-256</code> verification.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v040-v042-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestones • November 2026</span>
        <h2 id="v040-v042-heading" style="margin-top: 0.25rem;">v0.4.0 – v0.4.2 — 12-View Tree-First IDE, Dark-Mode Push Buttons &amp; Native C++20 Help</h2>
        <ul class="feature-list">
          <li>Shipped 32-bit ARGB vector <code>SysTreeView32</code> hierarchies, dedicated Features &amp; <code>RegEdit</code> Registry trees, sub-16ms live Dark &harr; Light palette hot-swapping, and zero-dependency <code>RaggieSoftHelp.exe</code>.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v010-v030-heading" class="card">
      <div>
        <span class="release-badge">Initial Milestones • November 2026</span>
        <h2 id="v010-v030-heading" style="margin-top: 0.25rem;">v0.1.0 – v0.3.0 — Static /MT C++20 Foundation, Component Rules, LZMS, Pre-MSI Runtimes &amp; .MSM</h2>
        <ul class="feature-list">
          <li>Established the static <code>/MT</code> C++20 compiler, deterministic UUIDv5 GUIDs, <code>ICE18/38/64/80</code> validation, Windows <code>LZMS</code> compression, Pre-MSI <code>[Prerequisite.*]</code> broker, 64-bit <code>.MSM</code> merger, and <code>SelectionTree</code>.</li>
        </ul>
      </div>
    </section>
  `}function ro(){return`
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
        <a class="btn btn-primary" href="${lr}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="/accessibility-studio">Explore Sibling Accessibility Studio IDE &rarr;</a>
        <a class="btn btn-outline" href="/installer-studio/screenshots">View Dark &amp; Light Mode Captures</a>
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
  `}function kr(){return`
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">Static /MT C++20 • Minimal SBOM • Air-Gap Friendly</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled directly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound IDE
        telemetry, and zero cryptocurrency/blockchain code.
      </p>
      ${pe()}
    </section>

    <section aria-labelledby="sec-pillars">
      <h2 id="sec-pillars">Four Pillars of Clean Engineering</h2>
      <div class="grid-2x2">
        <article class="card">
          <div>
            <h3>1. Static <code>/MT</code> Compilation &amp; Minimal SBOM</h3>
            <p>
              No NuGet dependency graph, no npm runtime, no Chromium bundle, and no external DLLs—even
              <code>RaggieSoftHelp.exe</code> renders offline topics natively via <code>System32\\Msftedit.dll</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>2. Dual-Layer Authenticode &amp; Azure Artifact Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code> (or <code>RSW_SIGN_ENABLED=1</code>), <code>instbuild.exe</code> signs the inner
              <code>Product.msi</code> first, strips any template certificate table cleanly via <code>ImageRemoveCertificate</code>, embeds
              the signed database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—automatically
              matching <code>x64</code>/<code>ARM64</code> <code>signtool.exe</code> to <code>Azure.CodeSigning.Dlib.dll</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>3. Prism-Piercing OS &amp; Silicon Verification</h3>
            <p>
              Calls <code>RtlGetVersion</code> inside <code>ntdll.dll</code> (bypassing <code>GetVersionEx</code> manifest shims) and <code>IsWow64Process2</code>
              to detect true ARM64 vs. x64 silicon even under Windows 11 Prism emulation, plus SHA-256 <code>bcrypt.dll</code> payload verification.
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
  `}const no=[{path:"/",navGroup:"suite",navLabel:"Suite Overview",seoTitle:"RaggieSoft Studio — 8-Tool Packaging, A11y & Publishing",seoDescription:"Eight native Windows 11 x64 & ARM64 developer tools: Installer Studio v0.5.0, Accessibility Studio v1.0.0, Training, Help, Docs, Localization & Showcase.",renderBody:fr},{path:"/editions",navGroup:"suite",navLabel:"Editions",seoTitle:"Suite Editions & Licensing Matrix | RaggieSoft Studio",seoDescription:"Compare Community (100% Architect parity), Essentials, Developer, and Architect editions across all 8 RaggieSoft Studio tools and All-Access Suites.",renderBody:br},{path:"/raggiescript",navGroup:"suite",navLabel:"RaggieScript",seoTitle:"RaggieScript (.rssc) — Studio & Micro-App Language",seoDescription:"Explore RaggieScript (.rssc): our C-family bytecode scripting language spanning all 8 RaggieSoft Studio tools, bespoke installers, and Windows micro-apps.",renderBody:Sr},{path:"/installer-studio",navGroup:"installer-studio",navLabel:"Overview",seoTitle:"RaggieSoft Installer Studio v0.5 — Native C++20 Packager",seoDescription:"Zero-dependency Win32 C++20 MSI & Setup.exe IDE and compiler for Windows 11 x64 and ARM64 with 10 Wizard Styles and WCAG 2.2 AA Auto-Contrast.",renderBody:Mr},{path:"/installer-studio/editions",navGroup:"installer-studio",navLabel:"Editions",seoTitle:"Editions & Product Matrix | RaggieSoft Installer Studio",seoDescription:"Compare Community (100% Architect parity), Essentials, Developer, and Architect editions of RaggieSoft Installer Studio, plus RaggieScript (.rssc).",renderBody:Ir},{path:"/installer-studio/screenshots",navGroup:"installer-studio",navLabel:"Screenshots",seoTitle:"Visual Tour & Screenshots | RaggieSoft Installer Studio",seoDescription:"Explore full-size Windows 11 screenshots of RaggieSoft Installer Studio v0.5.0: 10 Wizard Styles, ACME Teal & Cobalt washes, and IDE trees.",renderBody:Tr},{path:"/installer-studio/roadmap",navGroup:"installer-studio",navLabel:"Roadmap",seoTitle:"Public Engineering Roadmap | RaggieSoft Installer Studio",seoDescription:"Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.5.0 through v1.0 GA across Windows 11 x64 and ARM64.",renderBody:Rr},{path:"/installer-studio/docs",navGroup:"installer-studio",navLabel:"Docs & AI Spec",seoTitle:"Documentation & .rsip v0.5 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.5 project and .rsis suite reference covering 10 Wizard Styles, Setup Types, Features, Registry, Runtimes, and /llms.txt.",renderBody:Er},{path:"/installer-studio/faq",navGroup:"installer-studio",navLabel:"FAQ",seoTitle:"FAQ — Azure Signing, ARM64/x64 & Setup Types | RaggieSoft",seoDescription:"Answers on Microsoft Azure Artifact Signing, why IA-64 and 32-bit x86 host builds are skipped, Setup Types, and Community == Architect parity.",renderBody:_r},{path:"/installer-studio/changelog",navGroup:"installer-studio",navLabel:"Changelog",seoTitle:"Version History & Changelog (v0.5.0) | Installer Studio",seoDescription:"Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.5.0 across Windows 11 x64 and ARM64.",renderBody:Dr},{path:"/installer-studio/vpat",navGroup:"installer-studio",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.",renderBody:ro},{path:"/installer-studio/accessibility",navGroup:"installer-studio",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:ro},{path:"/installer-studio/security",navGroup:"installer-studio",navLabel:"Security",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Azure Artifact Signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:kr},{path:"/training-studio",navGroup:"suite",navLabel:"Training Studio",seoTitle:"RaggieSoft Training Studio — WCAG 2.2 AA SCORM Compiler",seoDescription:"Compile plain-text .rstp + Markdown slides into bandwidth-proof <50 KB SCORM 1.2 & 2004 packages with offline checkpointing and Auto-VPAT 2.5.",renderBody:yr},{path:"/help-studio",navGroup:"suite",navLabel:"Help Studio",seoTitle:"RaggieSoft Help Studio — Offline F1 Help & .CHM Import",seoDescription:"Migrate legacy Microsoft HTML Help (.hhp, .hhc, .hhk, .chm) into modular .rshm packs or standalone zero-dependency Win32 C++20 F1 help clients.",renderBody:vr},{path:"/document-studio",navGroup:"suite",navLabel:"Document Studio",seoTitle:"RaggieSoft Document Studio — Tagged PDF/UA-1 Compiler",seoDescription:"Compile plain-text .rsdp manifests and Markdown into machine-verified ISO 14289-1 Tagged PDF/UA-1 handbooks, policies, and Section 508 forms.",renderBody:wr},{path:"/localization-studio",navGroup:"suite",navLabel:"Localization Studio",seoTitle:"RaggieSoft Localization Studio — .RESX, XLIFF & WebVTT",seoDescription:"Side-by-side .RESX, XLIFF 2.1, .rsip, .rstp, and WebVTT localization IDE with locked format tokens, & mnemonic checks, and <=25 CPS caption gates.",renderBody:Cr},{path:"/launcher-studio",navGroup:"suite",navLabel:"Launcher Studio",seoTitle:"RaggieSoft Launcher Studio — Custom Desktop App Hubs",seoDescription:"Visual IDE and .rslp manifest compiler for building white-label Windows 11 x64 & ARM64 desktop app hubs, offline shelves, and static-CDN updaters.",renderBody:xr},{path:"/showcase-studio",navGroup:"suite",navLabel:"Showcase Studio",seoTitle:"RaggieSoft Showcase Studio — Accessible Collector Menus",seoDescription:"Author classic 1990s .BMP CD-ROM menus with WCAG 2.2 AA safeguards and modern Windows 11 FluentMica launchpads in zero-dependency Win32 C++20.",renderBody:Ar}];function Pr(e,t){const o=no.find(g=>g.path===e),a=e==="/installer-studio"||e.startsWith("/installer-studio/"),i=e.startsWith("/installer-studio/docs/")?"/installer-studio/docs":e==="/installer-studio/accessibility"?"/installer-studio/vpat":e,r=[{href:"/",label:"Suite",isCurrent:e==="/",isSection:!1},{href:"/installer-studio",label:"Installer",isCurrent:e==="/installer-studio",isSection:a&&e!=="/installer-studio"},{href:"/accessibility-studio",label:"Accessibility",isCurrent:!1,isSection:!1},{href:"/training-studio",label:"Training",isCurrent:e==="/training-studio",isSection:!1},{href:"/help-studio",label:"Help",isCurrent:e==="/help-studio",isSection:!1},{href:"/document-studio",label:"Document",isCurrent:e==="/document-studio",isSection:!1},{href:"/localization-studio",label:"Localization",isCurrent:e==="/localization-studio",isSection:!1},{href:"/launcher-studio",label:"Launcher",isCurrent:e==="/launcher-studio",isSection:!1},{href:"/showcase-studio",label:"Showcase",isCurrent:e==="/showcase-studio",isSection:!1},{href:"/editions",label:"Editions",isCurrent:e==="/editions",isSection:!1},{href:"/raggiescript",label:"RaggieScript",isCurrent:e==="/raggiescript",isSection:!1}].map(g=>{const C=g.isCurrent?' aria-current="page"':"";return`<li><a class="nav-link${g.isSection?" is-section-active":""}" href="${g.href}"${C}>${g.label}</a></li>`}).join(`
              `),n=no.filter(g=>g.navGroup==="installer-studio"&&!!g.navLabel),d=a?`
      <div class="product-subnav">
        <div class="product-subnav-inner">
          <span class="product-subnav-label">Installer Studio v0.5.0:</span>
          <nav aria-label="Installer Studio Product Pages">
            <ul class="product-subnav-list">
              ${n.map(g=>{const C=g.path===i?' aria-current="page"':"";return`<li><a class="product-subnav-link" href="${g.path}"${C}>${g.navLabel}</a></li>`}).join(`
              `)}
              <li><a class="product-subnav-link" href="${Be}">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </div>`:"",c=a?`
          <div class="mobile-product-subnav">
            <span class="mobile-product-subnav-title">Installer Studio v0.5.0 Pages</span>
            <nav aria-label="Installer Studio Mobile Sub-Pages">
              <ul class="nav-list">
                ${n.map(g=>{const C=g.path===i?' aria-current="page"':"";return`<li><a class="nav-link" href="${g.path}"${C}>${g.navLabel}</a></li>`}).join(`
                `)}
                <li><a class="nav-link" href="${Be}">Installer Studio GitHub</a></li>
              </ul>
            </nav>
          </div>`:"",l=o?o.renderBody():`
        <section class="hero" aria-labelledby="err-title">
          <span class="eyebrow">HTTP 404 • Route Not Found</span>
          <h1 id="err-title">Page Not Found</h1>
          <p class="lead">The requested RaggieSoft Studio suite or product documentation page could not be found.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/">Open RaggieSoft Studio Suite Overview</a>
            <a class="btn btn-outline" href="/installer-studio">Installer Studio (v0.5.0)</a>
            <a class="btn btn-outline" href="/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          </div>
        </section>
      `;return{html:`
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <img class="brand-mark" src="${er}" width="36" height="36" alt="" aria-hidden="true" />
          <span class="brand-text-col">
            <span class="brand-title">RaggieSoft Studio</span>
            <span class="brand-sub">${a?"Installer Studio v0.5.0 • Zero-Dependency Win32 C++20 for x64 &amp; ARM64":e==="/training-studio"?"Training Studio v0.1.0 • Bandwidth-Proof WCAG 2.2 AA SCORM 1.2 &amp; 2004":e==="/help-studio"?"Help Studio • Native Offline F1 Help &amp; Legacy .CHM / .HHP Migration":e==="/document-studio"?"Document Studio • Deterministic ISO 14289-1 Tagged PDF/UA-1 Compiler":e==="/localization-studio"?"Localization Studio • Multilingual .RESX, XLIFF &amp; WebVTT Compliance IDE":e==="/launcher-studio"?"Launcher Studio • Branded Desktop App Hubs &amp; Static-CDN Updaters":e==="/showcase-studio"?"Showcase Studio • Accessible 1990s .BMP, FluentMica &amp; _support\\ Installers":e==="/editions"?"Suite-Wide Editions • Community == 100% Architect Parity Across All 8 Tools":e==="/raggiescript"?"RaggieScript (.rssc) • Unified Studio &amp; Windows Micro-App Scripting Engine":"Eight-Tool Packaging, Accessibility, Training, Help &amp; Publishing Suite"}</span>
          </span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle studio-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open RaggieSoft Studio and RaggieSoft network menu"
          data-close-label="Close RaggieSoft Studio and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open RaggieSoft Studio and RaggieSoft network menu"
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
          <nav aria-label="RaggieSoft Studio Suite Navigation">
            <ul class="nav-list">
              ${r}
            </ul>
          </nav>${c}
        </div>
      </div>${d}
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${l}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Suite Overview (8 Tools)</a>
          <a href="/editions">Suite Editions &amp; Bundles</a>
          <a href="/raggiescript">RaggieScript (.rssc)</a>
          <a href="/installer-studio">Installer Studio (v0.5.0)</a>
          <a href="/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="/training-studio">Training Studio (v0.1.0)</a>
          <a href="/help-studio">Help Studio (.CHM / F1)</a>
          <a href="/document-studio">Document Studio (PDF/UA-1)</a>
          <a href="/localization-studio">Localization Studio</a>
          <a href="/launcher-studio">Launcher Studio</a>
          <a href="/showcase-studio">Showcase Studio</a>
          <a href="/installer-studio/editions">Installer Editions</a>
          <a href="/installer-studio/screenshots">Installer Screenshots</a>
          <a href="/installer-studio/roadmap">Installer Roadmap</a>
          <a href="/installer-studio/docs">Installer Docs &amp; Spec</a>
          <a href="/installer-studio/faq">Installer FAQ</a>
          <a href="/installer-studio/changelog">Changelog</a>
          <a href="/installer-studio/vpat">VPAT 2.5</a>
          <a href="/installer-studio/security">Security</a>
          <a href="/llms.txt">Suite /llms.txt</a>
          <a href="/installer-studio/llms-full.txt">Installer /llms-full.txt</a>
          <a href="/training-studio/llms-full.txt">Training /llms-full.txt</a>
          <a href="${Be}">Installer GitHub</a>
          <a href="${cr}">Accessibility GitHub</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source software code licensed under the MIT License;
          documentation licensed under CC BY-SA 4.0. Feedback &amp; engineering inquiries:
          <a href="mailto:hello@michaelpragsdale.com">hello@michaelpragsdale.com</a>.
        </p>
        <p class="disclaimer-box">${ur}</p>
      </div>
    </footer>
  `}}const nt=document.getElementById("app");if(nt&&nt.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\.html$/i,"").replace(/\/+$/,"")||"/";nt.innerHTML=Pr(e).html}document.addEventListener("click",e=>{const t=e.target;if(!t)return;const o=t.closest("[data-open-dialog]");if(o){const i=o.getAttribute("data-open-dialog"),s=i?document.getElementById(i):null;s&&typeof s.showModal=="function"&&s.showModal();return}const a=t.closest("[data-close-dialog]");if(a){const i=a.closest("dialog");i&&i.close();return}t.tagName==="DIALOG"&&t.classList.contains("shot-lightbox")&&t.close()});window.Alpine=xi;xi.start();
