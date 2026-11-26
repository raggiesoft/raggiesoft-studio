(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();var st=!1,nt=!1,O=[],dt=-1,Oe=!1,At=!1;function xo(e){_o(e)}function Co(){At=!0}function Ao(){At=!1,si()}function _o(e){O.includes(e)||(O.push(e),e._x_schedulerPriority!==void 0&&(Oe=!0)),si()}function _t(e){let t=O.indexOf(e);t!==-1&&t>dt&&O.splice(t,1)}function si(){if(!nt&&!st){if(At)return;st=!0,queueMicrotask(Io)}}function Io(){st=!1,nt=!0;for(let e=0;e<O.length;e++)Oe&&Mo(e),O[e](),dt=e;O.length=0,dt=-1,Oe=!1,nt=!1}function Mo(e){let t=new Map,i=O.slice(e).sort((a,o)=>To(a,o,t));for(let a=0;a<i.length;a++)O[e+a]=i[a];Oe=!1}function To(e,t,i){return Ze(e)?Ze(t)?jt(e._x_schedulerPriority.el,i)-jt(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Ze(t)?1:0}function Ze(e){return e._x_schedulerPriority!==void 0}function jt(e,t){if(t.has(e))return t.get(e);let i=0,a=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(a,i),i}var de,te,ce,ni,Ro=0,ct=!0;function Do(e){ct=!1,e(),ct=!0}function Eo(e){de=e.reactive,ce=e.release,te=t=>e.effect(t,{scheduler:i=>{ct?xo(i):i()}}),ni=e.raw}function qt(e){te=e}function Po(e){let t=()=>{};return[(a,o)=>{let r=(o==null?void 0:o.priority)==="structural"?Ro++:void 0,s=te(a);return r!==void 0&&s!==void 0&&(s._x_schedulerPriority={el:e,order:r}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(n=>n())}),e._x_effects.add(s),t=()=>{s!==void 0&&(e._x_effects.delete(s),ce(s))},s},()=>{t()}]}function di(e,t){let i=!0,a,o,r=te(()=>{let s=e(),n=JSON.stringify(s);if(!i&&(typeof s=="object"||s!==a)){let d=typeof a=="object"?JSON.parse(o):a;queueMicrotask(()=>{t(s,d)})}a=s,o=n,i=!1});return()=>{_t(r),ce(r)}}async function ko(e){Co();try{await e(),await Promise.resolve()}finally{Ao()}}var ci=[],li=[],ui=[];function Lo(e){ui.push(e)}function It(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,li.push(t))}function pi(e){ci.push(e)}function gi(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function hi(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,a])=>{(t===void 0||t.includes(i))&&(a.forEach(o=>o()),delete e._x_attributeCleanups[i])})}function Wo(e){var t,i;for((t=e._x_effects)==null||t.forEach(_t);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var Ue=new MutationObserver(Ge),Mt=!1;function Tt(){Ue.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Mt=!0}function fi(){Oo(),Ue.disconnect(),Mt=!1}var N=[];function Oo(){let e=Ue.takeRecords();N.push(()=>e.length>0&&Ge(e));let t=N.length;queueMicrotask(()=>{if(N.length===t)for(;N.length>0;)N.shift()()})}function Ho(){for(;N.length>0;)N.shift()();let e=Ue.takeRecords();e.length>0&&Ge(e)}function b(e){if(!Mt)return e();fi();try{return e()}finally{Tt()}}var Rt=!1,He=[];function Fo(){Rt=!0}function Bo(){Rt=!1,Ge(He),He=[]}function Ge(e){if(Rt){He=He.concat(e);return}let t=[],i=new Set,a=new Map,o=new Map;for(let r=0;r<e.length;r++)if(!e[r].target._x_ignoreMutationObserver&&(e[r].type==="childList"&&(e[r].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&i.add(s)}),e[r].addedNodes.forEach(s=>{if(s.nodeType===1){if(i.has(s)){i.delete(s);return}s._x_marker||t.push(s)}})),e[r].type==="attributes")){let s=e[r].target,n=e[r].attributeName,d=e[r].oldValue,c=()=>{a.has(s)||a.set(s,[]),a.get(s).push({name:n,value:s.getAttribute(n)})},l=()=>{o.has(s)||o.set(s,[]),o.get(s).push(n)};s.hasAttribute(n)&&d===null?c():s.hasAttribute(n)?(l(),c()):l()}o.forEach((r,s)=>{hi(s,r)}),a.forEach((r,s)=>{ci.forEach(n=>n(s,r))});for(let r of i)t.some(s=>s.contains(r))||li.forEach(s=>s(r));for(let r of t)r.isConnected&&ui.forEach(s=>s(r));t=null,i=null,a=null,o=null}function mi(e){return K(q(e))}function Ie(e,t,i){return e._x_dataStack=[t,...q(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(a=>a!==t)}}function q(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?q(e.host):e.parentNode?q(e.parentNode):[]}function K(e){return new Proxy({objects:e},zo)}function bi(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:bi(Object.getPrototypeOf(e),t)}var zo={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?No:Reflect.get(e.find(a=>Reflect.has(a,t))||{},t,i)},set({objects:e},t,i,a){let o;for(const s of e)if(o=bi(s,t),o)break;o||(o=e[e.length-1]);const r=Object.getOwnPropertyDescriptor(o,t);return r!=null&&r.set&&(r!=null&&r.get)?r.set.call(a,i)||!0:Reflect.set(o,t,i)}};function No(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function Dt(e,t=()=>{}){let i=o=>typeof o=="object"&&!Array.isArray(o)&&o!==null,a=(o,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(o)).forEach(([s,{value:n,enumerable:d}])=>{if(d===!1||n===void 0||typeof n=="object"&&n!==null&&n.__v_skip)return;let c=r===""?s:`${r}.${s}`;typeof n=="object"&&n!==null&&n._x_interceptor?o[s]=n.initialize(e,c,s,t):i(n)&&n!==o&&!(n instanceof Element)&&a(n,c)})};return a(e)}function vi(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(a,o,r,s){return e(this.initialValue,()=>Uo(a,o),n=>lt(a,o,n),o,r,s)}};return t(i),a=>{if(typeof a=="object"&&a!==null&&a._x_interceptor){let o=i.initialize.bind(i);i.initialize=(r,s,n,d)=>{let c=a.initialize(r,s,n,d);return i.initialValue=c,o(r,s,n,d)}}else i.initialValue=a;return i}}function Uo(e,t){return t.split(".").reduce((i,a)=>i[a],e)}function lt(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),lt(e[t[0]],t.slice(1),i)}}var Si={};function D(e,t){Si[e]=t}function Se(e,t){let i=Go(t);return Object.entries(Si).forEach(([a,o])=>{Object.defineProperty(e,`$${a}`,{get(){return o(t,i)},enumerable:!1})}),e}function Go(e){let[t,i]=Ii(e),a={interceptor:vi,...t};return It(e,i),a}function $o(e,t,i,...a){try{return i(...a)}catch(o){ne(o,e,t)}}function ne(...e){return yi(...e)}var yi=jo;function Vo(e){yi=e}function jo(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var se=!0;function wi(e){let t=se;se=!1;let i=e();return se=t,i}function $(e,t,i={}){let a;return A(e,t)(o=>a=o,i),a}function A(...e){return xi(...e)}var xi=()=>{};function qo(e){xi=e}var Ci;function Ko(e){Ci=e}function Xo(e,t){let i={};Se(i,e);let a=[i,...q(e)],o=typeof t=="function"?Qo(a,t):Yo(a,t,e);return $o.bind(null,e,t,o)}function Qo(e,t){return(i=()=>{},{scope:a={},params:o=[],context:r}={})=>{if(!se){ye(i,t,K([a,...e]),o);return}let s=t.apply(K([a,...e]),o);ye(i,s)}}var Ye={};function Zo(e,t){if(Ye[e])return Ye[e];let i=Object.getPrototypeOf(async function(){}).constructor,a=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,r=(()=>{try{let s=new i(["__self","scope"],`with (scope) { __self.result = ${a} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return ne(s,t,e),Promise.resolve()}})();return Ye[e]=r,r}function Yo(e,t,i){let a=Zo(t,i);return(o=()=>{},{scope:r={},params:s=[],context:n}={})=>{a.result=void 0,a.finished=!1;let d=K([r,...e]);if(typeof a=="function"){let c=a.call(n,a,d).catch(l=>ne(l,i,t));a.finished?(ye(o,a.result,d,s,i),a.result=void 0):c.then(l=>{ye(o,l,d,s,i)}).catch(l=>ne(l,i,t)).finally(()=>a.result=void 0)}}}function ye(e,t,i,a,o){if(se&&typeof t=="function"){let r=t.apply(i,a);r instanceof Promise?r.then(s=>ye(e,s,i,a)).catch(s=>ne(s,o,t)):e(r)}else typeof t=="object"&&t instanceof Promise?t.then(r=>e(r)):e(t)}function Jo(...e){return Ci(...e)}function ea(e,t,i={}){let a={};Se(a,e);let o=[a,...q(e)],r=K([i.scope??{},...o]),s=i.params??[];if(t.includes("await")){let n=Object.getPrototypeOf(async function(){}).constructor,d=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new n(["scope"],`with (scope) { let __result = ${d}; return __result }`).call(i.context,r)}else{let n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,c=new Function(["scope"],`with (scope) { let __result = ${n}; return __result }`).call(i.context,r);return typeof c=="function"&&se?c.apply(r,s):c}}var Et="x-";function X(e=""){return Et+e}function ta(e){Et=e}var Fe={};function v(e,t){return Fe[e]=t,{before(i){if(!Fe[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const a=G.indexOf(i);G.splice(a>=0?a:G.indexOf("DEFAULT"),0,e)}}}function ia(e){return Object.keys(Fe).includes(e)}function $e(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let r=Object.entries(e._x_virtualDirectives).map(([n,d])=>({name:n,value:d})),s=Ai(r);r=r.map(n=>s.find(d=>d.name===n.name)?{name:`x-bind:${n.name}`,value:`"${n.value}"`}:n),t=t.concat(r)}let a={};return t.map(Ri((r,s)=>a[r]=s)).filter(Ei).map(ra(a,i)).sort(sa).map(r=>aa(e,r))}function Ai(e){return Array.from(e).map(Ri()).filter(t=>!Ei(t))}var ut=!1,ge=new Map,_i=Symbol();function oa(e){ut=!0;let t=Symbol();_i=t,ge.set(t,[]);let i=()=>{for(;ge.get(t).length;)ge.get(t).shift()();ge.delete(t)},a=()=>{ut=!1,i()};e(i),a()}function Ii(e){let t=[],i=n=>t.push(n),[a,o]=Po(e);return t.push(o),[{Alpine:le,effect:a,cleanup:i,evaluateLater:A.bind(A,e),evaluate:$.bind($,e)},()=>t.forEach(n=>n())]}function aa(e,t){let i=()=>{},a=Fe[t.type]||i,[o,r]=Ii(e);gi(e,t.original,r);let s=()=>{e._x_ignore||e._x_ignoreSelf||(a.inline&&a.inline(e,t,o),a=a.bind(a,e,t,o),ut?ge.get(_i).push(a):a())};return s.runCleanups=r,s}var Mi=(e,t)=>({name:i,value:a})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:a}),Ti=e=>e;function Ri(e=()=>{}){return({name:t,value:i})=>{let{name:a,value:o}=Di.reduce((r,s)=>s(r),{name:t,value:i});return a!==t&&e(a,t),{name:a,value:o}}}var Di=[];function Pt(e){Di.push(e)}function Ei({name:e}){return Pi().test(e)}var Pi=()=>new RegExp(`^${Et}([^:^.]+)\\b`);function ra(e,t){return({name:i,value:a})=>{i===a&&(a="");let o=i.match(Pi()),r=i.match(/:([a-zA-Z0-9\-_:]+)/),s=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],n=t||e[i]||i;return{type:o?o[1]:null,value:r?r[1]:null,modifiers:s.map(d=>d.replace(".","")),expression:a,original:n}}}var pt="DEFAULT",G=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",pt,"teleport"];function sa(e,t){let i=G.indexOf(e.type)===-1?pt:e.type,a=G.indexOf(t.type)===-1?pt:t.type;return G.indexOf(i)-G.indexOf(a)}function Q(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(o=>Q(o,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let a=e.firstElementChild;for(;a;)Q(a,t),a=a.nextElementSibling}var H=!1;function F(e,t=()=>{}){return(...i)=>H?t(...i):e(...i)}function na(e){return(...t)=>H&&e(...t)}var ki=[];function Me(e){ki.push(e)}function da(e,t){ki.forEach(i=>i(e,t)),H=!0,Li(()=>{k(t,(i,a)=>{a(i,()=>{})})}),H=!1}var gt=!1;function ca(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),H=!0,gt=!0,Li(()=>{la(t)}),H=!1,gt=!1}function la(e){let t=!1;k(e,(a,o)=>{Q(a,(r,s)=>{if(t&&ma(r))return s();t=!0,o(r,s)})})}function Li(e){let t=te;qt((i,a)=>{let o=t(i);return ce(o),()=>{}}),e(),qt(t)}var Ve=0;function ua(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),Ve++),i.pending++,Promise.resolve(t).catch(a=>{try{ne(a,e)}catch(o){setTimeout(()=>{throw o},0)}}).then(()=>pa(e,i))}function pa(e,t){t.pending--,!(t.pending>0)&&(Ho(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Ve--,e.isConnected&&(ha(t),k(e))))}function ga(e,t){if(Ve===0)return!1;let i=M(e,a=>a._x_deferInit);return i?(Wi(i._x_deferInit,e,t.map(({name:a})=>a)),!0):!1}function Wi(e,t,i){let a=e.queuedAttributes.get(t);(!a||a.marker!==t._x_marker)&&(a={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,a)),i.forEach(o=>a.names.add(o))}function ha(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let a=M(i,r=>r._x_deferInit);if(a){Wi(a._x_deferInit,i,Array.from(t.names));return}let o=Array.from(t.names).filter(r=>i.hasAttribute(r)).map(r=>({name:r,value:i.getAttribute(r)}));o.length!==0&&$e(i,o).forEach(r=>r())})}Me((e,t)=>{Ve!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||M(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function he(e,t,i={},a={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...a}))}function P(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Kt=!1;function fa(){Kt&&P("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Kt=!0,document.body||P("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),he(document,"alpine:init"),he(document,"alpine:initializing"),Tt(),Lo(t=>k(t,Q)),It(t=>ie(t)),pi((t,i)=>{ga(t,i)||$e(t,i).forEach(a=>a())});let e=t=>!je(t.parentElement,!0);Array.from(document.querySelectorAll(Fi().join(","))).filter(e).forEach(t=>{k(t)}),he(document,"alpine:initialized"),setTimeout(()=>{Sa()})}var kt=[],Oi=[];function Hi(){return kt.map(e=>e())}function Fi(){return kt.concat(Oi).map(e=>e())}function Bi(e){kt.push(e)}function zi(e){Oi.push(e)}function je(e,t=!1){return M(e,i=>{if((t?Fi():Hi()).some(o=>i.matches(o)))return!0})}function M(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return M(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return M(e.parentNode.host,t);if(e.parentElement)return M(e.parentElement,t)}}function ma(e){return Hi().some(t=>e.matches(t))}var Ni=[];function ba(e){Ni.push(e)}var va=1;function k(e,t=Q,i=()=>{}){M(e,a=>a._x_ignore)||oa(()=>{t(e,(a,o)=>{a._x_marker||(i(a,o),Ni.forEach(r=>r(a,o)),$e(a,a.attributes).forEach(r=>r()),a._x_ignore||(a._x_marker=va++),a._x_ignore&&o())})})}function ie(e,t=Q){t(e,i=>{Wo(i),hi(i),delete i._x_marker})}function Sa(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,a])=>{ia(i)||a.some(o=>{if(document.querySelector(o))return P(`found "${o}", but missing ${t} plugin`),!0})})}var ht=[],Lt=!1;function Wt(e=()=>{}){return queueMicrotask(()=>{Lt||setTimeout(()=>{ft()})}),new Promise(t=>{ht.push(()=>{e(),t()})})}function ft(){for(Lt=!1;ht.length;)ht.shift()()}function ya(){Lt=!0}function Ot(e,t){return Array.isArray(t)?Xt(e,t.join(" ")):typeof t=="object"&&t!==null?wa(e,t):typeof t=="function"?Ot(e,t()):Xt(e,t)}function mt(e){return e.split(/\s/).filter(Boolean)}function Xt(e,t){let i=o=>mt(o).filter(r=>!e.classList.contains(r)).filter(Boolean),a=o=>(e.classList.add(...o),()=>{e.classList.remove(...o)});return t=t===!0?t="":t||"",a(i(t))}function wa(e,t){let i=Object.entries(t).flatMap(([s,n])=>n?mt(s):!1).filter(Boolean),a=Object.entries(t).flatMap(([s,n])=>n?!1:mt(s)).filter(Boolean),o=[],r=[];return a.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),r.push(s))}),i.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),o.push(s))}),()=>{r.forEach(s=>e.classList.add(s)),o.forEach(s=>e.classList.remove(s))}}function qe(e,t){return typeof t=="object"&&t!==null?xa(e,t):Ca(e,t)}function xa(e,t){let i={};return Object.entries(t).forEach(([a,o])=>{i[a]=e.style[a],a.startsWith("--")||(a=Aa(a)),e.style.setProperty(a,o)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{qe(e,i)}}function Ca(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function Aa(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function bt(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:i,expression:a},{evaluate:o})=>{typeof a=="function"&&(a=o(a)),a!==!1&&(!a||typeof a=="boolean"?Ia(e,i,t):_a(e,a,t))});function _a(e,t,i){Ui(e,Ot,""),{enter:o=>{e._x_transition.enter.during=o},"enter-start":o=>{e._x_transition.enter.start=o},"enter-end":o=>{e._x_transition.enter.end=o},leave:o=>{e._x_transition.leave.during=o},"leave-start":o=>{e._x_transition.leave.start=o},"leave-end":o=>{e._x_transition.leave.end=o}}[i](t)}function Ia(e,t,i){Ui(e,qe);let a=!t.includes("in")&&!t.includes("out")&&!i,o=a||t.includes("in")||["enter"].includes(i),r=a||t.includes("out")||["leave"].includes(i);t.includes("in")&&!a&&(t=t.filter((y,oe)=>oe<t.indexOf("out"))),t.includes("out")&&!a&&(t=t.filter((y,oe)=>oe>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),n=s||t.includes("opacity"),d=s||t.includes("scale"),c=n?0:1,l=d?ue(t,"scale",95)/100:1,u=ue(t,"delay",0)/1e3,m=ue(t,"origin","center"),g="opacity, transform",C=ue(t,"duration",150)/1e3,p=ue(t,"duration",75)/1e3,S="cubic-bezier(0.4, 0.0, 0.2, 1)";o&&(e._x_transition.enter.during={transformOrigin:m,transitionDelay:`${u}s`,transitionProperty:g,transitionDuration:`${C}s`,transitionTimingFunction:S},e._x_transition.enter.start={opacity:c,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r&&(e._x_transition.leave.during={transformOrigin:m,transitionDelay:`${u}s`,transitionProperty:g,transitionDuration:`${p}s`,transitionTimingFunction:S},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${l})`})}function Ui(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(a=()=>{},o=()=>{}){vt(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},a,o)},out(a=()=>{},o=()=>{}){vt(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},a,o)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,a){const o=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let r=()=>o(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):r():e._x_transition?e._x_transition.in(i):r();return}e._x_hidePromise=e._x_transition?new Promise((s,n)=>{e._x_transition.out(()=>{},()=>s(a)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>n({isFromCancelledTransition:!0}))}):Promise.resolve(a),queueMicrotask(()=>{let s=Gi(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):o(()=>{let n=d=>{let c=Promise.all([d._x_hidePromise,...(d._x_hideChildren||[]).map(n)]).then(([l])=>l==null?void 0:l());return delete d._x_hidePromise,delete d._x_hideChildren,c};n(e).catch(d=>{if(!d.isFromCancelledTransition)throw d})})})};function Gi(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Gi(t)}function vt(e,t,{during:i,start:a,end:o}={},r=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(a).length===0&&Object.keys(o).length===0){r(),s();return}let n,d,c;Ma(e,{start(){n=t(e,a)},during(){d=t(e,i)},before:r,end(){n(),c=t(e,o)},after:s,cleanup(){d(),c()}})}function Ma(e,t){let i,a,o,r=bt(()=>{b(()=>{i=!0,a||t.before(),o||(t.end(),ft()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:bt(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();r()}),finish:r},b(()=>{t.start(),t.during()}),ya(),requestAnimationFrame(()=>{if(i)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,n=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),b(()=>{t.before()}),a=!0,requestAnimationFrame(()=>{i||(b(()=>{t.end()}),ft(),setTimeout(e._x_transitioning.finish,s+n),o=!0)})})}function ue(e,t,i){if(e.indexOf(t)===-1)return i;const a=e[e.indexOf(t)+1];if(!a||t==="scale"&&isNaN(a))return i;if(t==="duration"||t==="delay"){let o=a.match(/([0-9]+)ms/);if(o)return o[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[a,e[e.indexOf(t)+2]].join(" "):a}function $i(e,t,i,a=[]){switch(e._x_bindings||(e._x_bindings=de({})),e._x_bindings[t]=i,t=a.includes("camel")?Wa(t):t,t){case"value":Ta(e,i);break;case"style":Da(e,i);break;case"class":Ra(e,i);break;case"selected":case"checked":Ea(e,t,i);break;default:Ht(e,t,i);break}}function Ta(e,t){if(Ft(e))e.attributes.value===void 0&&(e.value=t);else if(Be(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Oa(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")La(e,t);else if(e.tagName==="OPTION")Ht(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function Ra(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Ot(e,t)}function Da(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=qe(e,t)}function Ea(e,t,i){Ht(e,t,i),ka(e,t,i)}function Ht(e,t,i){[null,void 0,!1].includes(i)&&Fa(t)?e.removeAttribute(t):(Vi(t)&&(i=t),Ba(i)&&(i=JSON.stringify(i)),Pa(e,t,i))}function Pa(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function ka(e,t,i){e[t]!==i&&(e[t]=i)}function La(e,t){const i=[].concat(t).map(a=>a+"");Array.from(e.options).forEach(a=>{a.selected=i.includes(a.value)})}function Wa(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Oa(e,t){return e==t}function Le(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Ha=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Vi(e){return Ha.has(e)}function Fa(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Ba(e){return typeof e=="object"&&e!==null}function za(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:ji(e,t,i)}function Na(e,t,i,a=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let o=e._x_inlineBindings[t];return o.extract=a,wi(()=>$(e,o.expression))}return ji(e,t,i)}function ji(e,t,i){let a=e.getAttribute(t);return a===null?typeof i=="function"?i():i:a===""?!0:Vi(t)?!![t,"true"].includes(a):a}function Be(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Ft(e){return e.type==="radio"||e.localName==="ui-radio"}function qi(e,t){let i;return function(){const a=this,o=arguments,r=function(){i=null,e.apply(a,o)};clearTimeout(i),i=setTimeout(r,t)}}function Ki(e,t){let i;return function(){let a=this,o=arguments;i||(e.apply(a,o),i=!0,setTimeout(()=>i=!1,t))}}function Xi({get:e,set:t},{get:i,set:a}){let o=!0,r,s=te(()=>{let n=e(),d=i();if(o)a(Je(n)),o=!1;else{let c=JSON.stringify(n),l=JSON.stringify(d);c!==r?a(Je(n)):c!==l&&t(Je(d))}r=JSON.stringify(e()),JSON.stringify(i())});return()=>{_t(s),ce(s)}}function Je(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Ua(e){(Array.isArray(e)?e:[e]).forEach(i=>i(le))}var W={},Qt=!1;function Ga(e,t){if(Qt||(W=de(W),Qt=!0),t===void 0)return W[e];W[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?W[e]=t.initialize(W,e,e,()=>{}):Dt(W[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&W[e].init()}function $a(){return W}var Qi={};function Va(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?Zi(e,i()):(Qi[e]=i,()=>{})}function ja(e){return Object.entries(Qi).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...a)=>i(...a)}})}),e}function Zi(e,t,i){let a=[];for(;a.length;)a.pop()();let o=Object.entries(t).map(([s,n])=>({name:s,value:n})),r=Ai(o);return o=o.map(s=>r.find(n=>n.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),$e(e,o,i).map(s=>{a.push(s.runCleanups),s()}),()=>{for(;a.length;)a.pop()()}}var Yi={};function qa(e,t){Yi[e]=t}function Ka(e,t){return Object.entries(Yi).forEach(([i,a])=>{Object.defineProperty(e,i,{get(){return(...o)=>a.bind(t)(...o)},enumerable:!1})}),e}var Xa={get reactive(){return de},get release(){return ce},get effect(){return te},get raw(){return ni},get transaction(){return ko},version:"3.17.5",flushAndStopDeferringMutations:Bo,dontAutoEvaluateFunctions:wi,disableEffectScheduling:Do,startObservingMutations:Tt,stopObservingMutations:fi,setReactivityEngine:Eo,onAttributeRemoved:gi,onAttributesAdded:pi,closestDataStack:q,skipDuringClone:F,onlyDuringClone:na,addRootSelector:Bi,addInitSelector:zi,setErrorHandler:Vo,interceptClone:Me,addScopeToNode:Ie,deferMutations:Fo,mapAttributes:Pt,evaluateLater:A,interceptInit:ba,initInterceptors:Dt,injectMagics:Se,setEvaluator:qo,setRawEvaluator:Ko,mergeProxies:K,extractProp:Na,findClosest:M,onElRemoved:It,closestRoot:je,destroyTree:ie,interceptor:vi,transition:vt,setStyles:qe,mutateDom:b,deferInit:ua,directive:v,entangle:Xi,throttle:Ki,debounce:qi,evaluate:$,evaluateRaw:Jo,initTree:k,nextTick:Wt,prefixed:X,prefix:ta,plugin:Ua,magic:D,store:Ga,start:fa,clone:ca,cloneNode:da,bound:za,$data:mi,watch:di,walk:Q,data:qa,bind:Va},le=Xa;function Qa(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var we=Object.assign,Za=Object.prototype.hasOwnProperty,St=(e,t)=>Za.call(e,t),xe=Array.isArray,fe=e=>Ji(e)==="[object Map]",Ya=e=>typeof e=="string",Te=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Ja=Object.prototype.toString,Ji=e=>Ja.call(e),eo=e=>Ji(e).slice(8,-1),Bt=e=>Ya(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),U=(e,t)=>!Object.is(e,t);function Z(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var h,et=new WeakSet,Zt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,et.has(this)&&(et.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ir(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yt(this),io(this);const e=h,t=R;h=this,R=!0;try{return this.fn()}finally{h!==this&&Z("Active effect was not restored correctly - this is likely a Vue internal bug."),oo(this),h=e,R=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ut(e);this.deps=this.depsTail=void 0,Yt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?et.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yt(this)&&this.run()}get dirty(){return yt(this)}},to=0,me,be;function ir(e,t=!1){if(e.flags|=8,t){e.next=be,be=e;return}e.next=me,me=e}function zt(){to++}function Nt(){if(--to>0)return;if(be){let t=be;for(be=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;me;){let t=me;for(me=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=i}}if(e)throw e}function io(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oo(e){let t,i=e.depsTail,a=i;for(;a;){const o=a.prevDep;a.version===-1?(a===i&&(i=o),Ut(a),ar(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=o}e.deps=t,e.depsTail=i}function yt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(or(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function or(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ze)||(e.globalVersion=ze,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!yt(e))))return;e.flags|=2;const t=e.dep,i=h,a=R;h=e,R=!0;try{io(e);const o=e.fn(e._value);(t.version===0||U(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{h=i,R=a,oo(e),e.flags&=-3}}function Ut(e,t=!1){const{dep:i,prevSub:a,nextSub:o}=e;if(a&&(a.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=a,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=o),i.subs===e&&(i.subs=a,!a&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)Ut(r,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function ar(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function rr(e,t){e.effect instanceof Zt&&(e=e.effect.fn);const i=new Zt(e);t&&we(i,t);try{i.run()}catch(o){throw i.stop(),o}const a=i.run.bind(i);return a.effect=i,a}function sr(e){e.effect.stop()}var R=!0,ao=[];function nr(){ao.push(R),R=!1}function dr(){const e=ao.pop();R=e===void 0?!0:e}function Yt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=h;h=void 0;try{t()}finally{h=i}}}var ze=0,cr=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},lr=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!h||!R||h===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==h)t=this.activeLink=new cr(h,this),h.deps?(t.prevDep=h.depsTail,h.depsTail.nextDep=t,h.depsTail=t):h.deps=h.depsTail=t,ro(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=h.depsTail,t.nextDep=void 0,h.depsTail.nextDep=t,h.depsTail=t,h.deps===t&&(h.deps=i)}return h.onTrack&&h.onTrack(we({effect:h},e)),t}trigger(e){this.version++,ze++,this.notify(e)}notify(e){zt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(we({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Nt()}}};function ro(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ro(a)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var wt=new WeakMap,V=Symbol("Object iterate"),xt=Symbol("Map keys iterate"),Ae=Symbol("Array iterate");function I(e,t,i){if(R&&h){let a=wt.get(e);a||wt.set(e,a=new Map);let o=a.get(i);o||(a.set(i,o=new lr),o.map=a,o.key=i),o.track({target:e,type:t,key:i})}}function B(e,t,i,a,o,r){const s=wt.get(e);if(!s){ze++;return}const n=d=>{d&&d.trigger({target:e,type:t,key:i,newValue:a,oldValue:o,oldTarget:r})};if(zt(),t==="clear")s.forEach(n);else{const d=xe(e),c=d&&Bt(i);if(d&&i==="length"){const l=Number(a);s.forEach((u,m)=>{(m==="length"||m===Ae||!Te(m)&&m>=l)&&n(u)})}else switch((i!==void 0||s.has(void 0))&&n(s.get(i)),c&&n(s.get(Ae)),t){case"add":d?c&&n(s.get("length")):(n(s.get(V)),fe(e)&&n(s.get(xt)));break;case"delete":d||(n(s.get(V)),fe(e)&&n(s.get(xt)));break;case"set":fe(e)&&n(s.get(V));break}}Nt()}function ae(e){const t=f(e);return t===e?t:(I(t,"iterate",Ae),J(e)?t:t.map(ee))}function Gt(e){return I(e=f(e),"iterate",Ae),e}function E(e,t){return Y(e)?go(e)?_e(ee(t)):_e(t):ee(t)}var ur={__proto__:null,[Symbol.iterator](){return tt(this,Symbol.iterator,e=>E(this,e))},concat(...e){return ae(this).concat(...e.map(t=>xe(t)?ae(t):t))},entries(){return tt(this,"entries",e=>(e[1]=E(this,e[1]),e))},every(e,t){return L(this,"every",e,t,void 0,arguments)},filter(e,t){return L(this,"filter",e,t,i=>i.map(a=>E(this,a)),arguments)},find(e,t){return L(this,"find",e,t,i=>E(this,i),arguments)},findIndex(e,t){return L(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return L(this,"findLast",e,t,i=>E(this,i),arguments)},findLastIndex(e,t){return L(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return L(this,"forEach",e,t,void 0,arguments)},includes(...e){return it(this,"includes",e)},indexOf(...e){return it(this,"indexOf",e)},join(e){return ae(this).join(e)},lastIndexOf(...e){return it(this,"lastIndexOf",e)},map(e,t){return L(this,"map",e,t,void 0,arguments)},pop(){return pe(this,"pop")},push(...e){return pe(this,"push",e)},reduce(e,...t){return Jt(this,"reduce",e,t)},reduceRight(e,...t){return Jt(this,"reduceRight",e,t)},shift(){return pe(this,"shift")},some(e,t){return L(this,"some",e,t,void 0,arguments)},splice(...e){return pe(this,"splice",e)},toReversed(){return ae(this).toReversed()},toSorted(e){return ae(this).toSorted(e)},toSpliced(...e){return ae(this).toSpliced(...e)},unshift(...e){return pe(this,"unshift",e)},values(){return tt(this,"values",e=>E(this,e))}};function tt(e,t,i){const a=Gt(e),o=a[t]();return a!==e&&!J(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=i(r.value)),r}),o}var pr=Array.prototype;function L(e,t,i,a,o,r){const s=Gt(e),n=s!==e&&!J(e),d=s[t];if(d!==pr[t]){const u=d.apply(e,r);return n?ee(u):u}let c=i;s!==e&&(n?c=function(u,m){return i.call(this,E(e,u),m,e)}:i.length>2&&(c=function(u,m){return i.call(this,u,m,e)}));const l=d.call(s,c,a);return n&&o?o(l):l}function Jt(e,t,i,a){const o=Gt(e),r=o!==e&&!J(e);let s=i,n=!1;o!==e&&(r?(n=a.length===0,s=function(c,l,u){return n&&(n=!1,c=E(e,c)),i.call(this,c,E(e,l),u,e)}):i.length>3&&(s=function(c,l,u){return i.call(this,c,l,u,e)}));const d=o[t](s,...a);return n?E(e,d):d}function it(e,t,i){const a=f(e);I(a,"iterate",Ae);const o=a[t](...i);return(o===-1||o===!1)&&Ir(i[0])?(i[0]=f(i[0]),a[t](...i)):o}function pe(e,t,i=[]){nr(),zt();const a=f(e)[t].apply(e,i);return Nt(),dr(),a}var gr=Qa("__proto__,__v_isRef,__isVue"),so=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Te));function hr(e){Te(e)||(e=String(e));const t=f(this);return I(t,"has",e),t.hasOwnProperty(e)}var no=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const a=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return o;if(t==="__v_raw")return i===(a?o?Ar:uo:o?Cr:lo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const r=xe(e);if(!a){let n;if(r&&(n=ur[t]))return n;if(t==="hasOwnProperty")return hr}const s=Reflect.get(e,t,ve(e)?e:i);if((Te(t)?so.has(t):gr(t))||(a||I(e,"get",t),o))return s;if(ve(s)){const n=r&&Bt(t)?s:s.value;return a&&Ce(n)?Ct(n):n}return Ce(s)?a?Ct(s):$t(s):s}},fr=class extends no{constructor(e=!1){super(!1,e)}set(e,t,i,a){let o=e[t];const r=xe(e)&&Bt(t);if(!this._isShallow){const d=Y(o);if(!J(i)&&!Y(i)&&(o=f(o),i=f(i)),!r&&ve(o)&&!ve(i))return d?(Z(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(o.value=i,!0)}const s=r?Number(t)<e.length:St(e,t),n=Reflect.set(e,t,i,ve(e)?e:a);return e===f(a)&&n&&(s?U(i,o)&&B(e,"set",t,i,o):B(e,"add",t,i)),n}deleteProperty(e,t){const i=St(e,t),a=e[t],o=Reflect.deleteProperty(e,t);return o&&i&&B(e,"delete",t,void 0,a),o}has(e,t){const i=Reflect.has(e,t);return(!Te(t)||!so.has(t))&&I(e,"has",t),i}ownKeys(e){return I(e,"iterate",xe(e)?"length":V),Reflect.ownKeys(e)}},mr=class extends no{constructor(e=!1){super(!0,e)}set(e,t){return Z(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return Z(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},br=new fr,vr=new mr,De=e=>Reflect.getPrototypeOf(e);function Sr(e,t,i){return function(...a){const o=this.__v_raw,r=f(o),s=fe(r),n=e==="entries"||e===Symbol.iterator&&s,d=e==="keys"&&s,c=o[e](...a),l=t?_e:ee;return!t&&I(r,"iterate",d?xt:V),we(Object.create(c),{next(){const{value:u,done:m}=c.next();return m?{value:u,done:m}:{value:n?[l(u[0]),l(u[1])]:l(u),done:m}}})}}function Ee(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";Z(`${tr(e)} operation ${i}failed: target is readonly.`,f(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function yr(e,t){const i={get(o){const r=this.__v_raw,s=f(r),n=f(o);e||(U(o,n)&&I(s,"get",o),I(s,"get",n));const{has:d}=De(s),c=e?_e:ee;if(d.call(s,o))return c(r.get(o));if(d.call(s,n))return c(r.get(n));r!==s&&r.get(o)},get size(){const o=this.__v_raw;return!e&&I(f(o),"iterate",V),o.size},has(o){const r=this.__v_raw,s=f(r),n=f(o);return e||(U(o,n)&&I(s,"has",o),I(s,"has",n)),o===n?r.has(o):r.has(o)||r.has(n)},forEach(o,r){const s=this,n=s.__v_raw,d=f(n),c=e?_e:ee;return!e&&I(d,"iterate",V),n.forEach((l,u)=>o.call(r,c(l),c(u),s))}};return we(i,e?{add:Ee("add"),set:Ee("set"),delete:Ee("delete"),clear:Ee("clear")}:{add(o){const r=f(this),s=De(r),n=f(o),d=!J(o)&&!Y(o)?n:o;return s.has.call(r,d)||U(o,d)&&s.has.call(r,o)||U(n,d)&&s.has.call(r,n)||(r.add(d),B(r,"add",d,d)),this},set(o,r){!J(r)&&!Y(r)&&(r=f(r));const s=f(this),{has:n,get:d}=De(s);let c=n.call(s,o);c?ei(s,n,o):(o=f(o),c=n.call(s,o));const l=d.call(s,o);return s.set(o,r),c?U(r,l)&&B(s,"set",o,r,l):B(s,"add",o,r),this},delete(o){const r=f(this),{has:s,get:n}=De(r);let d=s.call(r,o);d?ei(r,s,o):(o=f(o),d=s.call(r,o));const c=n?n.call(r,o):void 0,l=r.delete(o);return d&&B(r,"delete",o,void 0,c),l},clear(){const o=f(this),r=o.size!==0,s=fe(o)?new Map(o):new Set(o),n=o.clear();return r&&B(o,"clear",void 0,void 0,s),n}}),["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=Sr(o,e)}),i}function co(e,t){const i=yr(e);return(a,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(St(i,o)&&o in a?i:a,o,r)}var wr={get:co(!1)},xr={get:co(!0)};function ei(e,t,i){const a=f(i);if(a!==i&&t.call(e,a)){const o=eo(e);Z(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var lo=new WeakMap,Cr=new WeakMap,uo=new WeakMap,Ar=new WeakMap;function _r(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $t(e){return Y(e)?e:po(e,!1,br,wr,lo)}function Ct(e){return po(e,!0,vr,xr,uo)}function po(e,t,i,a,o){if(!Ce(e))return Z(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=o.get(e);if(r)return r;const s=_r(eo(e));if(s===0)return e;const n=new Proxy(e,s===2?a:i);return o.set(e,n),n}function go(e){return Y(e)?go(e.__v_raw):!!(e&&e.__v_isReactive)}function Y(e){return!!(e&&e.__v_isReadonly)}function J(e){return!!(e&&e.__v_isShallow)}function Ir(e){return e?!!e.__v_raw:!1}function f(e){const t=e&&e.__v_raw;return t?f(t):e}var ee=e=>Ce(e)?$t(e):e,_e=e=>Ce(e)?Ct(e):e;function ve(e){return e?e.__v_isRef===!0:!1}D("nextTick",()=>Wt);D("dispatch",e=>he.bind(he,e));D("watch",(e,{evaluateLater:t,cleanup:i})=>(a,o)=>{let r=t(a),n=di(()=>{let d;return r(c=>d=c),d},o);i(n)});D("store",$a);D("data",e=>mi(e));D("root",e=>je(e));D("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=K(Mr(e))),e._x_refs_proxy));function Mr(e){let t=[];return M(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var ot={};function ho(e){return ot[e]||(ot[e]=0),++ot[e]}function Tr(e,t){return M(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function Rr(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ho(t))}D("id",(e,{cleanup:t})=>(i,a=null)=>{let o=`${i}${a?`-${a}`:""}`;return Dr(e,o,t,()=>{let r=Tr(e,i),s=r?r._x_ids[i]:ho(i);return a?`${i}-${s}-${a}`:`${i}-${s}`})});Me((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Dr(e,t,i,a){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let o=a();return e._x_id[t]=o,i(()=>{delete e._x_id[t]}),o}D("el",e=>e);fo("Focus","focus","focus");fo("Persist","persist","persist");function fo(e,t,i){D(t,a=>P(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,a))}v("modelable",(e,{expression:t},{effect:i,evaluateLater:a,cleanup:o})=>{let r=a(t),s=()=>{let l;return r(u=>l=u),l},n=a(`${t} = __placeholder`),d=l=>n(()=>{},{scope:{__placeholder:l}}),c=s();d(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.setWithModifiers,m=Xi({get(){return l()},set(g){u(g)}},{get(){return s()},set(g){d(g)}});o(m)})});v("teleport",(e,{modifiers:t,expression:i},{cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&P("x-teleport can only be used on a <template> tag",e);let o=ti(i),r=e.content.cloneNode(!0).firstElementChild;e._x_teleport=r,r._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),r.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(n=>{r.addEventListener(n,d=>{d.stopPropagation(),e.dispatchEvent(new d.constructor(d.type,d))})}),Ie(r,{},e);let s=(n,d,c)=>{c.includes("prepend")?d.parentNode.insertBefore(n,d):c.includes("append")?d.parentNode.insertBefore(n,d.nextSibling):d.appendChild(n)};b(()=>{F(()=>{s(r,o,t),k(r)})()}),e._x_teleportPutBack=()=>{let n=ti(i);b(()=>{s(e._x_teleport,n,t)})},a(()=>b(()=>{r.remove(),ie(r)}))});var Er=document.createElement("div");function ti(e){let t=F(()=>document.querySelector(e),()=>Er)();return t||P(`Cannot find x-teleport element for selector: "${e}"`),t}var mo=()=>{};mo.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",mo);v("effect",F((e,{expression:t},{effect:i})=>{i(A(e,t))}));function re(e,t,i,a){let o=e,r=d=>a(d),s={},n=(d,c)=>l=>c(d,l);return i.includes("dot")&&(t=Pr(t)),i.includes("camel")&&(t=kr(t)),i.includes("capture")&&(s.capture=!0),i.includes("window")&&(o=window),i.includes("document")&&(o=document),i.includes("passive")&&(s.passive=i[i.indexOf("passive")+1]!=="false"),r=bo(i,r),i.includes("prevent")&&(r=n(r,(d,c)=>{c.preventDefault(),d(c)})),i.includes("stop")&&(r=n(r,(d,c)=>{c.stopPropagation(),d(c)})),i.includes("once")&&(r=n(r,(d,c)=>{d(c),o.removeEventListener(t,r,s)})),(i.includes("away")||i.includes("outside"))&&(o=document,r=n(r,(d,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&d(c))})),i.includes("self")&&(r=n(r,(d,c)=>{c.target===e&&d(c)})),t==="submit"&&(r=n(r,(d,c)=>{c.target._x_pendingModelUpdates&&c.target._x_pendingModelUpdates.forEach(l=>l()),d(c)})),(Wr(t)||vo(t))&&(r=n(r,(d,c)=>{Hr(c,i)||d(c)})),o.addEventListener(t,r,s),()=>{o.removeEventListener(t,r,s)}}function bo(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",a=Ne(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=qi(t,a)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",a=Ne(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Ki(t,a)}return t}function Pr(e){return e.replace(/-/g,".")}function kr(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Ne(e){return!Array.isArray(e)&&!isNaN(e)}function Lr(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Wr(e){return["keydown","keyup"].includes(e)}function vo(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Or=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Hr(e,t){let i=t.filter((r,s)=>r==="false"&&t[s-1]==="passive"?!1:!Or.includes(r));if(i.includes("debounce")){let r=i.indexOf("debounce");i.splice(r,Ne((i[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let r=i.indexOf("throttle");i.splice(r,Ne((i[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&ii(e.key).includes(i[0]))return!1;const o=["ctrl","shift","alt","meta","cmd","super"].filter(r=>i.includes(r));return i=i.filter(r=>!o.includes(r)),!(o.length>0&&o.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===o.length&&(vo(e.type)||ii(e.key).includes(i[0])))}function ii(e){if(!e)return[];e=Lr(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}v("model",(e,{modifiers:t,expression:i},{effect:a,cleanup:o})=>{let r=e;t.includes("parent")&&(r=M(e,p=>p!==e));let s=A(r,i),n;typeof i=="string"?n=A(r,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?n=A(r,`${i()} = __placeholder`):n=()=>{};let d=()=>{let p;return s(S=>p=S),oi(p)?p.get():p},c=p=>{let S;s(y=>S=y),oi(S)?S.set(p):n(()=>{},{scope:{__placeholder:p}})};typeof i=="string"&&e.type==="radio"&&b(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let l=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),m=t.includes("enter"),g=l||u||m,C;if(H)C=()=>{};else if(g){let p=[],S=y=>c(Pe(e,t,y,d()));if(l&&p.push(re(e,"change",t,S)),u&&(p.push(re(e,"blur",t,S)),e.form)){let y=e.form,oe=()=>S({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(oe),o(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(oe),1)})}m&&p.push(re(e,"keydown",t,y=>{y.key==="Enter"&&S(y)})),C=()=>p.forEach(y=>y())}else{let p=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";C=re(e,p,t,S=>{c(Pe(e,t,S,d()))})}if(t.includes("fill")&&([void 0,null,""].includes(d())||Be(e)&&Array.isArray(d())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(Pe(e,t,{target:e},d())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=C,o(()=>e._x_removeModelListeners.default()),e.form){let p=re(e.form,"reset",[],S=>{Wt(()=>e._x_model&&e._x_model.set(Pe(e,t,{target:e},d())))});o(()=>p())}if(e._x_model={get(){return d()},set(p){c(p)},setWithModifiers:bo(t,c)},e._x_forceModelUpdate=p=>{p===void 0&&typeof i=="string"&&i.match(/\./)&&(p=""),b(()=>{Be(e)?Array.isArray(p)?e.checked=p.some(S=>S==e.value):e.checked=!!p:Ft(e)?typeof p=="boolean"?e.checked=Le(e.value)===p:e.checked=e.value==p:$i(e,"value",p)})},e.tagName==="SELECT"){let p=new MutationObserver(()=>{e._x_forceModelUpdate(d())});p.observe(e,{childList:!0}),o(()=>p.disconnect())}a(()=>{let p=d();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(p)})});function Pe(e,t,i,a){return b(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Be(e))if(Array.isArray(a)){let o=null;return t.includes("number")?o=at(i.target.value):t.includes("boolean")?o=Le(i.target.value):o=i.target.value,i.target.checked?a.includes(o)?a:a.concat([o]):a.filter(r=>!Fr(r,o))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(o=>{let r=o.value||o.text;return at(r)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(o=>{let r=o.value||o.text;return Le(r)}):Array.from(i.target.selectedOptions).map(o=>o.value||o.text);{let o;return Ft(e)?i.target.checked?o=i.target.value:o=a:o=i.target.value,t.includes("number")?at(o):t.includes("boolean")?Le(o):t.includes("trim")?o.trim():o}}})}function at(e){let t=e?parseFloat(e):null;return Br(t)?t:e}function Fr(e,t){return e==t}function Br(e){return!Array.isArray(e)&&!isNaN(e)}function oi(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(H)return e.removeAttribute(X("cloak"));queueMicrotask(()=>b(()=>e.removeAttribute(X("cloak"))))});zi(()=>`[${X("init")}]`);v("init",F((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));v("text",(e,{expression:t},{effect:i,evaluateLater:a})=>{let o=a(t);i(()=>{o(r=>{b(()=>{e.textContent=r})})})});v("html",(e,{expression:t},{effect:i,evaluateLater:a})=>{let o=a(t);i(()=>{o(r=>{b(()=>{Array.from(e.children).forEach(s=>ie(s)),e.innerHTML=r??"",e._x_ignoreSelf=!0,k(e),delete e._x_ignoreSelf})})},{priority:"structural"})});Pt(Mi(":",Ti(X("bind:"))));var So=(e,{value:t,modifiers:i,expression:a,original:o},{effect:r,cleanup:s})=>{if(!t){let d={};ja(d),A(e,a)(l=>{Zi(e,l,o)},{scope:d});return}if(t==="key")return zr(e,a);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let n=A(e,a);r(()=>n(d=>{d===void 0&&typeof a=="string"&&a.match(/\./)&&(d=""),b(()=>$i(e,t,d,i))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};So.inline=(e,{value:t,modifiers:i,expression:a})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:a,extract:!1})};v("bind",So);function zr(e,t){e._x_keyExpression=t}Bi(()=>`[${X("data")}]`);var z=Symbol();v("data",(e,{expression:t},{cleanup:i})=>{if(Ur(e))return;let a=e[z];if((a==null?void 0:a.expression)===t)return;t=t===""?"{}":t;let o={};Se(o,e);let r={};Ka(r,o);let s=$(e,t,{scope:r});(s===void 0||s===!0)&&(s={}),Se(s,e);let n;if(a!=null&&a.reactiveData){n=a.reactiveData,Nr(n,s);let c={expression:t};e[z]=c,queueMicrotask(()=>{e[z]===c&&delete e[z]})}else n=de(s);Dt(n,i);let d=Ie(e,n);F(()=>{n.init&&$(e,n.init)})(),i(()=>{n.destroy&&$(e,n.destroy),d();let c={reactiveData:n};e[z]=c,queueMicrotask(()=>{e[z]===c&&delete e[z]})})});function Nr(e,t){Object.keys(t).forEach(i=>{let a=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);a.get||a.set||o!=null&&o.get||o!=null&&o.set?(o&&delete e[i],o||(e[i]=void 0),a.get||a.set?Object.defineProperty(e,i,a):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}Me((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Ur(e){return H?gt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:i},{effect:a})=>{let o=A(e,i);e._x_doHide||(e._x_doHide=()=>{b(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{b(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let r=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},n=()=>setTimeout(s),d=bt(u=>u?s():r(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,s,r):u?n():r()}),c,l=!0;a(()=>o(u=>{!l&&u===c||(t.includes("immediate")&&(u?n():r()),d(u),c=u,l=!1)}))});v("for",F((e,{expression:t},{effect:i,cleanup:a})=>{let o=Vr(t),r=A(e,o.items),s=A(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>$r(e,o,r,s),{priority:"structural"}),a(()=>{e._x_lookup.forEach(n=>b(()=>{ie(n),n.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Gr(e){return t=>{Object.entries(t).forEach(([i,a])=>{e[i]=a})}}function $r(e,t,i,a){i(o=>{qr(o)&&(o=Array.from({length:o},(c,l)=>l+1)),o==null&&(o=[]),o instanceof Set&&(o=Array.from(o)),o instanceof Map&&(o=Array.from(o));let r=e._x_lookup,s=new Map;e._x_lookup=s;let n=Kr(o),d=Object.entries(o).map(([c,l])=>{n||(c=parseInt(c));let u=jr(t,l,c,o),m;return a(g=>{typeof g=="object"&&P("x-for key cannot be an object, it must be a string or an integer",e),r.has(g)&&(s.set(g,r.get(g)),r.delete(g)),m=g},{scope:{index:c,...u}}),[m,u]});b(()=>{r.forEach(u=>{ie(u),u.remove()});let c=new Set,l=e;d.forEach(([u,m])=>{if(s.has(u)){let p=s.get(u);p._x_refreshXForScope(m),l.nextElementSibling!==p&&(l.nextElementSibling&&p.replaceWith(l.nextElementSibling),l.after(p)),l=p,p._x_currentIfEl&&(p.nextElementSibling!==p._x_currentIfEl&&l.after(p._x_currentIfEl),l=p._x_currentIfEl);return}e.content.children.length>1&&P("x-for templates require a single root element, additional elements will be ignored.",e);let g=document.importNode(e.content,!0).firstElementChild,C=de(m);Ie(g,C,e),g._x_refreshXForScope=Gr(C),s.set(u,g),c.add(g),l.after(g),l=g}),c.forEach(u=>k(u)),l!==e?e._x_lastRenderedEl=l:delete e._x_lastRenderedEl})})}function Vr(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,a=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,o=e.match(a);if(!o)return;let r={};r.items=o[2].trim();let s=o[1].replace(i,"").trim(),n=s.match(t);return n?(r.item=s.replace(t,"").trim(),r.index=n[1].trim(),n[2]&&(r.collection=n[2].trim())):r.item=s,r}function jr(e,t,i,a){let o={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,n)=>{o[s]=t[n]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{o[s]=t[s]}):o[e.item]=t,e.index&&(o[e.index]=i),e.collection&&(o[e.collection]=a),o}function qr(e){return typeof e!="object"&&!isNaN(e)}function Kr(e){return typeof e=="object"&&!Array.isArray(e)}function yo(){}yo.inline=(e,{expression:t},{cleanup:i})=>{let a=je(e);a&&(a._x_refs||(a._x_refs={}),a._x_refs[t]=e,i(()=>delete a._x_refs[t]))};v("ref",yo);v("if",F((e,{expression:t},{effect:i,cleanup:a})=>{e.tagName.toLowerCase()!=="template"&&P("x-if can only be used on a <template> tag",e);let o=A(e,t),r=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let n=e.content.cloneNode(!0).firstElementChild;return Ie(n,{},e),b(()=>{e.after(n),k(n)}),e._x_currentIfEl=n,e._x_lastRenderedEl=n,e._x_undoIf=()=>{b(()=>{ie(n),n.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},n},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>o(n=>{n?r():s()}),{priority:"structural"}),a(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(o=>Rr(e,o))});Me((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});Pt(Mi("@",Ti(X("on:"))));v("on",F((e,{value:t,modifiers:i,expression:a},{cleanup:o})=>{let r=a?A(e,a):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=re(e,t,i,n=>{r(()=>{},{scope:{$event:n},params:[n]})});o(()=>s())}));Ke("Collapse","collapse","collapse");Ke("Intersect","intersect","intersect");Ke("Focus","trap","focus");Ke("Mask","mask","mask");function Ke(e,t,i){v(t,a=>P(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,a))}le.setEvaluator(Xo);le.setRawEvaluator(ea);le.setReactivityEngine({reactive:$t,effect:(e,t={})=>{let i;return i=rr(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:sr,raw:f});var Xr=le,wo=Xr;/*! Bundled license information:

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
*/const Vt="https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio",x="https://assets.raggiesoft.com/raggiesoft-studio/boxes",Qr=`${x}/og-raggiesoft-studio-suite.jpg`,Zr=`${x}/og-installer-studio.jpg`,Yr=`${x}/og-training-studio.jpg`,Jr=`${x}/og-help-studio.jpg`,es=`${x}/og-document-studio.jpg`,ts=`${x}/og-localization-studio.jpg`,is=`${x}/og-launcher-studio.jpg`,os=`${x}/og-showcase-studio.jpg`,Re=`${Vt}/raggiesoft-installer-studio-setup.exe`,Xe=`${Vt}/raggiesoft-installer-studio-offline-setup.exe`,as="https://assets.raggiesoft.com/desktop-apps/windows/apps/accessibility-studio/raggiesoft-accessibility-studio-setup.exe",_=`${Vt}/screenshots`,ke="https://assets.raggiesoft.com/raggiesoft-studio/mockups",We="https://github.com/raggiesoft/installer-studio",rs="https://github.com/raggiesoft/accessibility-studio",ss="/installer-studio/vpat/raggiesoft-installer-studio-vpat-2.5.html",ns="Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.",w={dialogId:"dlg-box-suite-complete",imgUrl:`${x}/box-raggiesoft-studio-suite.png`,badge:"Collector’s Slipcase • Complete 8-Product Enterprise & Publisher Suite",title:"RaggieSoft Studio — Complete Eight-Tool Workstation Suite",alt:"3D 1990s-style Collector’s Edition retail box for RaggieSoft Studio Suite featuring eight jewel-toned crystalline obelisks converging around a brass armillary sphere over a perspective grid, embossed 8-Tools Enterprise Edition gold foil seal, and eight-color spine wrap.",summaryHtml:"Eight focused developer, compliance, documentation, and publishing tools built on plain-text Git-diffable manifests, code-level WCAG 2.2 Level AA &amp; Section 508 accessibility, native <code>x64</code> &amp; <code>ARM64</code> performance, and automated HTML5 VPAT 2.5 conformance reports.",detailHtml:"Anchored by our flagship <strong>Installer Studio v0.5.0</strong> and <strong>Accessibility Studio v1.0.0</strong>, expanded with <strong>Training Studio v0.1.0</strong> (bandwidth-proof SCORM 1.2 &amp; 2004 courseware), <strong>Help Studio</strong> (<code>.CHM</code> / <code>.hhp</code> migration &amp; native <code>F1</code> clients), <strong>Document Studio</strong> (<code>PDF/UA-1</code>), <strong>Localization Studio</strong>, <strong>Launcher Studio</strong>, and <strong>Showcase Studio</strong>."},ds=[{dialogId:"dlg-box-installer",imgUrl:`${x}/box-installer-studio.png`,badge:"1 • Flagship v0.5.0 Shipping • .rsip / .rsis",title:"RaggieSoft Installer Studio",alt:"3D 1990s-style retail box for RaggieSoft Installer Studio featuring interlocking chrome, brass, and royal-cobalt glass puzzle cubes and gears above a perspective blueprint grid.",summaryHtml:"<strong>Install Without Limits.</strong> Zero-dependency static <code>/MT</code> Win32 C++20 visual IDE &amp; CLI compiling signed <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.msp</code>, and 10-style <code>SetupWizard.exe</code> installers with Auto-VPAT 2.5.",detailHtml:"28 years in the making (since the 1998 Visual Basic 6.0 Package &amp; Deployment Wizard): plain-text comment-preserving <code>.rsip</code> manifests, CPU-aware Universal <code>Setup.exe</code> stubs, pre-MSI runtime chaining, and Dual-Layer Azure Artifact Signing.",actionHref:"/installer-studio",actionLabel:"Installer Studio Hub →",secondaryHref:Re,secondaryLabel:"Download v0.5.0"},{dialogId:"dlg-box-a11y",imgUrl:`${x}/box-accessibility-studio.png`,badge:"2 • v1.0.0 Shipping (.NET 11) • .a11yproj",title:"RaggieSoft Accessibility Studio",alt:"3D 1990s-style retail box for RaggieSoft Accessibility Studio featuring a crystal optical prism refracting light into emerald, gold, and sapphire pathways above a golden bridge arch.",summaryHtml:"<strong>Audit, Diff &amp; Refactor WCAG 2.2.</strong> Source-level HTML5, WAI-ARIA, CSS contrast, and WebVTT caption IDE with Monaco side-by-side Guided Fix diffs, live Chromium emulation, and headless CI/CD SARIF 2.1.0 gates.",detailHtml:"Pinpoints exact 1-based line and column violations across web portals, templates, and caption tracks, previews safe source fixes before touching disk, and exports executive HTML5 &amp; Revised Section 508 matrices.",actionHref:"/accessibility-studio",actionLabel:"Accessibility Studio →",secondaryHref:as,secondaryLabel:"Download v1.0.0"},{dialogId:"dlg-box-training",imgUrl:`${x}/box-training-studio.png`,badge:"3 • v0.1.0 PoC & Live Demo (.NET 11) • .rstp",title:"RaggieSoft Training Studio",alt:"3D 1990s-style retail box for RaggieSoft Training Studio featuring a brushed-brass and royal-amethyst crystal lighthouse-chronometer beacon radiating golden checkpoint rings and soundwave arcs.",summaryHtml:"<strong>Bandwidth-Proof SCORM 1.2 &amp; 2004.</strong> Compiles plain-text <code>.rstp</code> + Markdown slides, compact Opus/AAC audio, and verified <code>.vtt</code> captions into <code>&lt;50 KB</code> proxy-resilient players with offline checkpoint queues and Auto-VPAT 2.5.",detailHtml:"Built to replace 400 MB progressive MP4 compliance courses that stall on Oracle Taleo and Workday WAN links—featuring atomic 10-second cue commits, locked forward scrubbers, and a compile-time WCAG 2.2 AA gate.",actionHref:"/training-studio",actionLabel:"Try Live LMS Demo →"},{dialogId:"dlg-box-help",imgUrl:`${x}/box-help-studio.png`,badge:"4 • Architecture Preview • .rshp / .hhp",title:"RaggieSoft Help Studio",alt:"3D 1990s-style retail box for RaggieSoft Help Studio featuring an illuminated crystal codex on a bronze pedestal beneath floating golden index folders and a brass compass rose.",summaryHtml:"<strong>Modern Offline F1 Help &amp; .CHM Migration.</strong> Imports legacy Microsoft HTML Help Workshop (<code>.hhp</code>, <code>.hhc</code>, <code>.hhk</code>, <code>.chm</code>) projects into modular <code>.rshm</code> packs OR a standalone zero-dependency C++20 <code>Help.exe</code> client.",detailHtml:"Replaces retired Internet Explorer <code>mshtml.dll</code> <code>.chm</code> files blocked on network shares with instant Named Pipe <code>F1</code> context-ID routing, Dark/Light/High-Contrast themes, static web docs, and Auto-VPAT 2.5.",actionHref:"/help-studio",actionLabel:"Explore Help Studio →"},{dialogId:"dlg-box-document",imgUrl:`${x}/box-document-studio.png`,badge:"5 • Architecture Preview • .rsdp",title:"RaggieSoft Document Studio",alt:"3D 1990s-style retail box for RaggieSoft Document Studio featuring ruby-garnet crystal tablets and golden hierarchical tag-tree pyramids over a crimson-obsidian grid.",summaryHtml:"<strong>Tagged PDF/UA-1 Without Tag-Tree Pain.</strong> Compiles plain-text <code>.rsdp</code> manifests and Markdown into machine-verified ISO 14289-1 <code>PDF/UA-1</code> manuals, policies, certificates, and Section 508 / ADA Title II forms.",detailHtml:"Eliminates hours of manual Acrobat tag-tree repair every time a municipal policy, employee handbook, or board packet changes—enforcing reading order, table header scopes, and alt text at compile time.",actionHref:"/document-studio",actionLabel:"Explore Document Studio →"},{dialogId:"dlg-box-localization",imgUrl:`${x}/box-localization-studio.png`,badge:"6 • Architecture Preview • .rsloc",title:"RaggieSoft Localization Studio",alt:"3D 1990s-style retail box for RaggieSoft Localization Studio featuring a sapphire-indigo crystal polyhedron encircled by three brass orbital rings and mirrored crystal prisms.",summaryHtml:"<strong>Safe App, Installer &amp; Caption Translation.</strong> Side-by-side <code>.RESX</code>, <code>XLIFF 2.1</code>, <code>.rsip</code>, <code>.rstp</code>, and multilingual <code>WebVTT</code> IDE with locked format tokens, <code>&amp;</code> mnemonic clash checks, and <code>BCP 47</code> gates.",detailHtml:"Prevents broken <code>{0}</code> / <code>$(ARCH)</code> placeholders, duplicate keyboard accelerators, and unreadable <code>&gt;25 CPS</code> translated closed captions across desktop software, installers, and training modules.",actionHref:"/localization-studio",actionLabel:"Explore Localization →"},{dialogId:"dlg-box-launcher",imgUrl:`${x}/box-launcher-studio.png`,badge:"7 • Design Preview • .rslp",title:"RaggieSoft Launcher Studio",alt:"3D 1990s-style retail box for RaggieSoft Launcher Studio featuring a chrome and electric-cyan glass astrolabe launching golden spheres across an indigo wireframe globe.",summaryHtml:"<strong>White-Label Desktop App Hubs.</strong> Visual IDE &amp; <code>.rslp</code> compiler for building publisher-branded Windows 11 app shelves and <code>SHA-256</code> + Authenticode-verified delta updaters hosted on any static CDN.",detailHtml:"Inspired by our production RaggieSoft Launcher: zero database servers, zero forced user accounts, zero store gatekeepers, and native <code>x64</code> &amp; <code>ARM64</code> update verification.",actionHref:"/launcher-studio",actionLabel:"Explore Launcher Studio →"},{dialogId:"dlg-box-showcase",imgUrl:`${x}/box-showcase-studio.png`,badge:"8 • Design Preview • .rssp",title:"RaggieSoft Showcase Studio",alt:"3D 1990s-style retail box for RaggieSoft Showcase Studio featuring an iridescent optical disc, ruby sphere, teal crystal pyramid, and brass soundwave ribbon.",summaryHtml:"<strong>Accessible Collector Menus.</strong> Compiles <code>.rssp</code> manifests into zero-dependency Win32 C++20 launchpads—supporting both 1990s painted <code>.BMP</code> CD-ROM art with UIA focus rings and modern Windows 11 <code>FluentMica</code>.",detailHtml:"Purpose-built for USB collector box sets, multi-installer suite menus, companion media discs, and accessible museum/classroom kiosks with automatic <code>SPI_GETHIGHCONTRAST</code> override.",actionHref:"/showcase-studio",actionLabel:"Explore Showcase Studio →"}],j={showcase90s:{dialogId:"dlg-mockup-showcase-90s",imgUrl:`${ke}/mockup-showcase-1990s-bmp-a11y.png`,badge:"Showcase Studio Runtime • 1990s .BMP Mode + WCAG 2.2 AA Safeguards",title:"1990s Painted .BMP CD-ROM Showcase — Upgraded with Modern Accessibility",alt:"RaggieSoft Showcase Studio 1990s painted bitmap CD-ROM collector menu displaying classic 3D beveled artwork over a teal wash alongside a high-contrast dual-ring keyboard focus indicator, Alt+Key mnemonics, UI Automation screen-reader readout, and Windows High-Contrast override status bar.",summaryHtml:"Preserves the beloved <code>640&times;480</code> / <code>800&times;600</code> painted <code>.BMP</code> CD-ROM look on a classic <code>#008080</code> desktop wash while backing every painted hotspot with an invisible Win32 <code>BUTTON</code> UI Automation proxy, dual-ring <code>Tab</code> / 4-way arrow focus, muted-by-default captioned audio, and instant <code>SPI_GETHIGHCONTRAST</code> override.",detailHtml:"In the 1990s, painted bitmap menus were completely inaccessible to blind, low-vision, and keyboard-only users because buttons were just flat pixels on a single background image. Showcase Studio solves this cleanly in Win32 C++20: authors place rectangular or polygon hotspots over any retro <code>.BMP</code>/<code>.PNG</code> canvas, and the runtime creates real windowless/child UI Automation <code>Button</code> peers with <code>Alt+Key</code> mnemonics, dual black/gold high-contrast focus frames, and automatic OS Contrast Theme fallback."},showcaseModern:{dialogId:"dlg-mockup-showcase-modern",imgUrl:`${ke}/mockup-showcase-modern-fluent.png`,badge:"Showcase Studio Runtime • Windows 11 FluentMica 16:9 Mode",title:"Modern Windows 11 FluentMica 16:9 Collector’s Edition Launchpad",alt:"RaggieSoft Showcase Studio modern widescreen 16:9 Windows 11 FluentMica collector launchpad showing left category navigation, cosmic hero banner, accessible action cards for installing desktop apps, opening offline books, and playing captioned bonus tracks.",summaryHtml:"Compiles the exact same <code>.rssp</code> project structure into a crisp Per-Monitor V2 DPI Windows 11 <code>DWMSBT_MAINWINDOW</code> Mica launchpad with rounded <code>8px</code> action cards, live Light &harr; Dark palette switching, and one-click handoff to signed <code>Setup.exe</code> packages.",detailHtml:"Designed for USB box sets, downloadable ISO collector editions, multi-package suite front-ends, offline press kits, and museum or classroom kiosks—booting in under 40ms from static <code>/MT</code> C++20 on <code>x64</code> and <code>ARM64</code> with zero browser engine bloat."},showcaseIde:{dialogId:"dlg-mockup-showcase-ide",imgUrl:`${ke}/mockup-showcase-studio-ide.png`,badge:"ShowcaseStudio.exe • Visual Page, Hotspot & Focus-Matrix IDE",title:"ShowcaseStudio.exe — Visual Canvas, 4-Way Focus Graph & WCAG Inspector",alt:"RaggieSoft Showcase Studio Win32 C++20 IDE mockup showing the Pages and Assets tree on the left, central interactive hotspot canvas with directional Up/Down/Left/Right focus arrows, and right-hand Inspector with UI Automation labels and High-Contrast preview.",summaryHtml:"Author multi-page interactive menus visually with a hierarchical <code>Pages &amp; Assets</code> tree, visual 4-way arrow/D-pad focus-routing overlays, live WCAG 2.2 AA accessibility lint gates, and a 100% comment-preserving plain-text <code>.rssp</code> manifest.",detailHtml:"Borrowing the best ideas from classic card-based multimedia builders and set-top disc authoring tools, the central canvas draws explicit directional focus links (<code>FocusUp</code>, <code>FocusDown</code>, <code>FocusLeft</code>, <code>FocusRight</code>) and refuses to compile unlabeled hotspots unless every interactive region exposes a human-readable UI Automation name."},launcherIde:{dialogId:"dlg-mockup-launcher-ide",imgUrl:`${ke}/mockup-launcher-studio-ide.png`,badge:"LauncherStudio.exe • White-Label Desktop Hub & Static-CDN Updater IDE",title:"LauncherStudio.exe — Branded Desktop App Hub & Catalog Compiler",alt:"RaggieSoft Launcher Studio IDE mockup showing the Catalog Channels and App Shelves tree on the left, live branded Publisher Hub preview in the center with Install and Update tiles, and SHA-256 + Authenticode static-CDN settings on the right.",summaryHtml:"Design your own zero-account, custom-branded Windows 11 desktop application hub, offline eBook/audio library shelf, and static-CDN delta updater using diff-friendly <code>.rslp</code> manifests—with live Light/Dark/High-Contrast WCAG 2.2 AA verification.",detailHtml:"Publish a static signed <code>catalog.json</code> alongside your <code>.msi</code>, <code>.msp</code>, or <code>Engine = native</code> packages on any HTTPS server, S3 bucket, or Cloudflare R2 bucket—zero database servers to maintain, zero forced customer logins, and mandatory <code>SHA-256</code> + <code>WinVerifyTrust</code> signature verification before any update executes."}},cs=[{dialogId:"dlg-ide-features",imgUrl:`${_}/ide-features-tree.png`,badge:"v0.5.0 • Setup Architecture",title:"1. Dedicated Features Hierarchy & Plain-English Inclusion Tiers",alt:"RaggieSoft Installer Studio v0.5.0 Visual IDE showing the categorized 12-view left sidebar tree and the dedicated All Features hierarchy with plain-English Minimal and Typical inclusion badges, Move Up/Down ordering, DisallowAbsent lock, and Included In dropdown.",summaryHtml:"Organize root features and nested sub-features inside an <code>All Features</code> <code>SysTreeView32</code>, choose plain-English <strong>Included In</strong> tiers (<em>Minimal / Compact</em>, <em>Typical / Express</em>, <em>Complete Only</em>, or <em>Hidden</em>) instead of raw MSI <code>InstallLevel</code> numbers, and reorder display priority with <strong>Move Up / Move Down</strong>.",detailHtml:"Clicking any node in the <code>All Features</code> tree populates its ID, display title, plain-English <code>Included In</code> setup tier, parent feature, <code>DisallowAbsent</code> lock, and consumer description—updating the underlying <code>.rsip</code> AST while preserving 100% of comments and <code>@include</code> directives."},{dialogId:"dlg-ide-registry",imgUrl:`${_}/ide-registry-tree.png`,badge:"Setup Architecture • RegEdit Hierarchy",title:"2. RegEdit-Style Registry Tree, Feature Filter & .REG Importer",alt:"RaggieSoft Installer Studio v0.4.5 Registry view displaying HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE\\Software\\RaggieSoft\\Installer Studio, HKEY_USERS, and HKMU folders on the left alongside typed REG_SZ values on the right.",summaryHtml:"Navigate target registry keys just like Windows Registry Editor across <code>HKCR</code>, <code>HKCU</code>, <code>HKLM</code>, <code>HKU</code>, and <code>HKMU</code> nested folders, inspect typed <code>REG_SZ</code> / <code>REG_EXPAND_SZ</code> / <code>REG_DWORD</code> values on the right, filter keys by Feature, or import <code>.reg</code> scripts in one click.",detailHtml:"Every registry value automatically receives either a deterministic 64-bit MSI Component GUID or binds to an explicit <code>[Component.*]</code> KeyPath—supporting formatted Windows Installer tokens like <code>[INSTALLDIR]</code> and <code>[ProductVersion]</code>."},{dialogId:"dlg-ide-folders",imgUrl:`${_}/ide-destination-folders.png`,badge:"Dual-Tree Explorer • ICE18 / ICE38 / ICE64",title:"3. Destination Computer & Folder Contents Dual Trees",alt:"RaggieSoft Installer Studio v0.4.5 Files and Folders view showing the Destination Computer folder tree on the left and the filtered Staged Contents tree with Component and KeyPath badges on the right.",summaryHtml:"Map files and <code>CreateFolder</code> directories across 9 standard Windows Installer roots (<code>INSTALLDIR</code>, <code>ProgramData</code>, <code>AppData</code>, <code>StartMenu</code>, <code>Desktop</code>, <code>System32</code>, <code>Fonts</code>) with automatic UUIDv5 File KeyPaths and <code>ICE38</code> per-user registry KeyPaths.",detailHtml:"Selecting any root or subfolder on the left immediately filters the right-hand <code>Staged Contents</code> tree, showing each payload’s owning Feature, deterministic or explicit Component, and KeyPath rule."},{dialogId:"dlg-ide-runtimes",imgUrl:`${_}/ide-runtimes-msm.png`,badge:"Application Information • Pre-MSI Broker",title:"4. Pre-MSI Application Runtimes & 64-Bit .MSM Tree",alt:"RaggieSoft Installer Studio v0.4.5 Application Runtimes and Merge Modules tree grouping Pre-MSI Runtime Prerequisites and Windows Installer .MSM Merge Modules with 32-bit ARGB vector icons.",summaryHtml:"Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>) with custom reboot exit-code latching (<code>3010, 1641, 23</code>) alongside native 64-bit <code>.msm</code> Merge Modules.",detailHtml:"All prerequisites execute under one unified UAC elevation session before <code>msiexec</code> starts, while 64-bit <code>.msm</code> modules merge SQL rows and CAB streams directly in C++20 without 32-bit COM dependencies."},{dialogId:"dlg-ide-designer",imgUrl:`${_}/ide-wizard-designer.png`,badge:"New in v0.5.0 • 10 Styles + WCAG Auto-Fix",title:"5. Live 10-Style C++ Wizard Designer & WCAG 2.2 AA Contrast Enforcer",alt:"RaggieSoft Installer Studio v0.5.0 C++ Wizard Designer showcasing the 10 Setup.exe styles dropdown with fullscreenteal (1995 ACME #008080 Teal) and win95_classic Typical/Compact/Complete/Custom cards rendered live alongside the Auto-Fix WCAG button and WCAG 2.2 AA PASS badge.",summaryHtml:"Switch live across all <strong>10 <code>SetupWizard.exe</code> styles</strong> (from <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp; <code>fullscreenblue</code> Cobalt wash through <code>wizard95</code>, <code>aerowizard</code>, and Windows 11 <code>fluentmica</code>), pick <strong>Typical / Compact / Complete / Custom</strong> Setup Types, and click <strong>Auto-Fix WCAG</strong> to guarantee dual-theme contrast.",detailHtml:"Every compiled package pairs selectable era-spanning C++20 wizard ergonomics (honoring <code>SPI_GETHIGHCONTRAST</code> automatically) with genuine relational Windows Installer <code>Dialog</code> and <code>Control</code> SQL tables inside <code>Product.msi</code>."}],ls=[{dialogId:"dlg-wiz-acme-teal",imgUrl:`${_}/setupwizard-fullscreen-teal.png`,badge:"New in v0.5.0 • 1995 ACME #008080 Teal Callback",title:"6. FullScreenTeal (#008080 ACME Engine Callback) & 4-Card Classic Setup Types",alt:"SetupWizard.exe v0.5.0 running in FullScreenTeal mode displaying the classic 1995 Microsoft ACME Setup Engine #008080 Teal desktop wash, drop-shadowed italic serif title, floating 3D Billboard card, bottom-right 3D sunken progress gauge, and centered #C0C0C0 3D beveled dialog with Typical, Compact, Complete, and Custom Setup Types.",summaryHtml:"An unmistakable tribute to the classic mid-1990s <strong>Microsoft ACME Setup Engine (<code>#008080</code> Desktop Teal)</strong>—pairing a drop-shadowed italic serif product banner, floating <code>[Billboard.*]</code> card, bottom-right 3D sunken progress gauge, and 4-card <strong>Typical / Compact / Complete / Custom</strong> Setup Types.",detailHtml:"Under the nostalgic <code>#008080</code> Teal wash and <code>#C0C0C0</code> 3D beveled chrome runs 100% modern Per-Monitor V2 DPI scaling, full keyboard &amp; screen-reader UI Automation, and instant <code>SPI_GETHIGHCONTRAST</code> Windows Contrast Theme fallback."},{dialogId:"dlg-wiz-blue-wash",imgUrl:`${_}/setupwizard-fullscreen-blue.png`,badge:"New in v0.5.0 • 1995 SETUP.EXE Cobalt Wash",title:"7. FullScreenBlue (#000080 → #000000 Cobalt Wash) + Billboards & 3D Gauge",alt:"SetupWizard.exe v0.5.0 running in FullScreenBlue mode displaying the classic 1995 #000080 to #000000 Cobalt-Blue gradient backdrop, italic Times New Roman drop-shadowed Setup title, floating 3D Billboard card, docked 3D sunken progress gauge, and floating #C0C0C0 3D beveled Setup Type dialog.",summaryHtml:"Brings back the iconic 1995 full-screen <strong><code>#000080 &rarr; #000000</code> Cobalt-Blue</strong> gradient wash with a drop-shadowed serif product title, floating 3D beveled dialog, rotating installation billboards, and a docked 3D sunken progress gauge.",detailHtml:"Ideal for classic retro utilities like <em>StoreTrainer</em> and collector editions—while keeping Windows 11 <code>x64</code>/<code>ARM64</code> transactional MSI safety and single-UAC elevation intact."},{dialogId:"dlg-wiz-95",imgUrl:`${_}/setupwizard-wizard95.png`,badge:"New in v0.5.0 • Classic #C0C0C0 3D Sheet",title:"8. Wizard95 Standalone #C0C0C0 3D Beveled Dialog & 164px Left Graphic Rail",alt:"SetupWizard.exe v0.5.0 running in standalone Wizard95 mode with a classic #C0C0C0 3D beveled window sheet, 164px sunken vertical graphic rail on the left, etched horizontal footer rule, and classic 3D beveled push buttons.",summaryHtml:"Standalone classic 1995 desktop wizard geometry featuring a crisp <code>#C0C0C0</code> 3D face, <code>164px</code> sunken left vertical graphic rail across every wizard step, two-line etched horizontal rules, and <code>EDGE_RAISED</code> / <code>EDGE_SUNKEN</code> 3D push buttons.",detailHtml:"Automatically yields to OS semantic colors whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is enabled."},{dialogId:"dlg-wiz-mica",imgUrl:`${_}/setupwizard-fluent-mica.png`,badge:"New in v0.5.0 • Windows 11 Fluent Mica",title:"9. FluentMica Surface & 7-Stage Vertical Progress Rail",alt:"SetupWizard.exe v0.5.0 running in Windows 11 FluentMica mode featuring a 7-stage vertical step-progress rail on the left (Welcome, License, Setup Type, Customize, Ready, Installing, Completed) alongside accessible Dark Mode option cards.",summaryHtml:"Modern Windows 11 native <code>DWMSBT_TABBEDWINDOW</code> Mica surface in zero-dependency Win32 C++20 featuring a 7-stage left vertical step-progress rail with live completion checkmarks.",detailHtml:"Gives modern Windows 11 desktop apps a clean Fluent step-rail aesthetic with zero <code>WinUI 3</code>, <code>.NET</code>, or <code>WebView2</code> runtime dependencies."},{dialogId:"dlg-wiz-dark",imgUrl:`${_}/setupwizard-setup-type.png`,badge:"SetupWizard.exe • Windows 11 Dark Mode",title:"10. Accessible Option Cards & Custom-Subclassed Dark Buttons",alt:"SetupWizard.exe v0.5.0 running in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button.",summaryHtml:"Genuine Win32 <code>BS_AUTORADIOBUTTON</code> option cards (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) and custom-subclassed <code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, and <code>Cancel</code> buttons expose full UI Automation roles and keyboard mnemonics.",detailHtml:"Screen readers (Narrator, NVDA, and JAWS) announce every option card’s title, recommendation, description, and <code>Alt+Key</code> accelerator cleanly—with zero jarring white legacy buttons in Dark Mode."},{dialogId:"dlg-wiz-light",imgUrl:`${_}/setupwizard-setup-type-light.png`,badge:"Live Broadcast • WM_SETTINGCHANGE(ImmersiveColorSet)",title:"11. Sub-16ms Live OS Dark ↔ Light Palette Hot-Swap",alt:"The exact same open SetupWizard.exe v0.5.0 window after receiving WM_SETTINGCHANGE ImmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting.",summaryHtml:"Toggle Windows 11 (or automatic sunset/sunrise utilities) between Dark Mode, Light Mode, or Contrast Themes mid-install and the open wizard flips its titlebar, cards, and buttons live in under 16 milliseconds.",detailHtml:"No process restart required: <code>IsLiveThemeBroadcast</code> refreshes DWM immersive titlebars, GDI brushes, vector glyphs, checkboxes, and push buttons on the fly."},{dialogId:"dlg-wiz-tree",imgUrl:`${_}/setupwizard-selection-tree.png`,badge:"SetupWizard.exe • Custom Setup & Modify",title:"12. Authentic 32-Bit ARGB Windows Installer SelectionTree",alt:"SetupWizard.exe v0.5.0 Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB split-dropdown state icons and live disk space cost card.",summaryHtml:"Reads <code>Feature</code>, <code>FeatureComponents</code>, and <code>File</code> SQL tables directly from <code>Product.msi</code> in under 2ms—rendering crisp 32-bit ARGB split-dropdown icons, <code>DisallowAbsent</code> locks, and live byte costing.",detailHtml:"User choices translate directly into canonical <code>ADDLOCAL</code>, <code>REMOVE</code>, and <code>ADVERTISE</code> properties passed to <code>MsiInstallProductW</code> during fresh installs and Maintenance Modify."}],us=[{dialogId:"dlg-help-viewer",imgUrl:`${_}/helpviewer-contents.png`,badge:"RaggieSoftHelp.exe • Named Pipe F1 IPC",title:"13. Zero-Dependency Native C++20 Offline Help Viewer",alt:"RaggieSoftHelp.exe v0.5.0 native C++20 offline Help Viewer showing the 32-bit ARGB Contents tree on the left and formatted MSI SelectionTree documentation on the right.",summaryHtml:"Press <code>F1</code> inside any IDE view to open searchable offline HTML5 chapters in under 5ms via Named Pipe IPC—rendered natively through <code>System32\\Msftedit.dll</code> with zero <code>.NET</code> or <code>WebView2</code> dependencies.",detailHtml:'The exact same <code>help/raggiesoft.installer-studio/</code> HTML5 topics ship inside the installer and power the web documentation under <a href="/installer-studio/docs">/installer-studio/docs</a>.'},{dialogId:"dlg-msiprism",imgUrl:`${_}/msiprism-sql-inspector.png`,badge:"msiprism.exe • Categorized SQL Schema Tree",title:"14. Native 64-Bit Dark Mode MSI, MSM, MST & MSP SQL Inspector",alt:"RaggieSoft MSI Prism v0.5.0 displaying a categorized 5-folder SQL schema tree on the left with 32-bit ARGB table icons and relational Feature rows on the right.",summaryHtml:"Open any <code>.msi</code>, <code>.msm</code>, or <code>.msp</code> database into a categorized 5-group <code>SysTreeView32</code> schema tree, inspect relational rows in Dark or Light Mode, audit <code>ICE80</code> flags, and generate <code>.mst</code> or <code>.msp</code> deltas.",detailHtml:"Groups all 44+ Windows Installer SQL tables into <em>Metadata &amp; Streams</em>, <em>Core Packaging Tables</em>, <em>Registry, Shortcuts &amp; Classes</em>, <em>Dialogs &amp; UI Controls</em>, and <em>Sequences, Locators &amp; Actions</em>."}];function Qe(){return`
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
  `}function T(e){const t=e.actionHref?`
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
  `}function ps(){return`
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
            <a class="btn btn-outline" href="/accessibility-studio">Accessibility Studio (v1.0.0) &rarr;</a>
            <a class="btn btn-outline" href="/training-studio">Try Training Studio SCORM Demo &rarr;</a>
            <a class="btn btn-outline" href="/help-studio">Preview Help Studio (.CHM / F1) &rarr;</a>
          </div>
          ${Qe()}
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${Qr}"
            width="1200"
            height="630"
            alt="3D Collector’s Edition boxed software showcase of RaggieSoft Studio Suite — Eight Cohesive Developer, Compliance, and Publishing Tools."
          />
        </figure>
      </div>
    </section>

    <section aria-labelledby="box-shelf-heading">
      <span class="eyebrow">Complete 8-Product Lineup • Flagship Slipcase + Symmetrical 4&times;2 Product Quick Cards</span>
      <h2 id="box-shelf-heading" style="margin-top: 0.25rem;">Explore All Eight RaggieSoft Studio Products</h2>

      <!-- Featured Full-Width Umbrella Suite Slipcase Card -->
      <figure class="suite-box-featured">
        <button
          type="button"
          class="shot-preview-btn"
          data-open-dialog="${w.dialogId}"
          aria-haspopup="dialog"
          aria-label="Open full-size view: ${w.title}"
        >
          <img src="${w.imgUrl}" alt="${w.alt}" loading="lazy" />
          <span class="shot-zoom-pill">Inspect Full 1200&times;960 Box</span>
        </button>
        <figcaption class="suite-box-featured-body">
          <span class="eyebrow" style="margin-bottom: 0;">${w.badge}</span>
          <h3 style="font-size: 1.35rem; margin: 0;">${w.title}</h3>
          <p style="margin: 0;">${w.summaryHtml}</p>
          <p style="margin: 0; color: var(--text-muted); font-size: 0.94rem;">${w.detailHtml}</p>
          <div class="btn-row" style="margin-top: 0.4rem;">
            <a class="btn btn-primary" href="/installer-studio">Flagship: Installer Studio v0.5.0 &rarr;</a>
            <a class="btn btn-outline" href="/training-studio">New: Training Studio PoC &amp; Demo &rarr;</a>
            <button type="button" class="btn btn-outline" data-open-dialog="${w.dialogId}">
              Zoom 8-Tool Suite Box
            </button>
          </div>
        </figcaption>
      </figure>

      <dialog id="${w.dialogId}" class="shot-lightbox" aria-labelledby="${w.dialogId}-title">
        <div class="shot-lightbox-panel">
          <div class="shot-lightbox-header">
            <div>
              <span class="eyebrow" style="color: #fde68a; margin-bottom: 0.15rem;">${w.badge}</span>
              <h3 id="${w.dialogId}-title" class="shot-lightbox-title">${w.title}</h3>
            </div>
            <button type="button" class="shot-lightbox-close" data-close-dialog aria-label="Close full-size screenshot dialog">
              Close (Esc)
            </button>
          </div>
          <div class="shot-lightbox-stage">
            <img src="${w.imgUrl}" alt="${w.alt}" loading="lazy" />
          </div>
          <div class="shot-lightbox-caption">
            ${w.detailHtml}
          </div>
        </div>
      </dialog>

      <!-- Balanced 4x2 (Desktop) / 2x4 (Tablet) / 1x8 (Mobile) Quick Product Cards -->
      <div class="grid-4x2">
        ${ds.map(T).join(`
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

    <section aria-labelledby="upcoming-mockups-heading">
      <span class="eyebrow">Early Design Previews • Click Any Mockup for Full-Size 1280&times;800 Inspection</span>
      <h2 id="upcoming-mockups-heading" style="margin-top: 0.25rem;">Preview Upcoming Showcase Studio &amp; Launcher Studio Concepts</h2>
      <div class="shot-grid">
        ${T(j.showcase90s)}
        ${T(j.showcaseModern)}
        ${T(j.launcherIde)}
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
              <th scope="row">Zero Telemetry &amp; 100% White-Label</th>
              <td><code>Community == Premier</code> feature parity, MIT open-source code, zero license phone-home, and publisher-owned <code>VERSIONINFO</code></td>
              <td>Your customers see your organization name, your artwork, and your product identity—never third-party adware or nag screens.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function gs(){return`
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
            src="${Yr}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Training Studio — Zero-Bloat SCORM 1.2 and 2004 Courseware Compiler."
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
  `}function hs(){return`
    <section class="hero" aria-labelledby="help-studio-title">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Help Studio • Native Offline F1 Help &amp; Legacy .CHM Migration</span>
          <h1 id="help-studio-title">Retire Legacy .CHM Files Without Losing Your HTML Help Workshop Projects.</h1>
          <p class="lead">
            Millions of desktop and industrial Windows applications still depend on 1990s Compiled HTML Help (<code>.chm</code>)—yet
            <code>hh.exe</code> renders inside retired Internet Explorer <code>mshtml.dll</code>, blocks over network shares under
            Mark-of-the-Web, lacks Dark Mode and High-Contrast themes, and fails modern Section 508 audits.
            <strong>RaggieSoft Help Studio</strong> imports existing <strong>HTML Help Workshop (<code>.hhp</code>, <code>.hhc</code>,
            <code>.hhk</code>, and <code>.chm</code>)</strong> projects cleanly and compiles both pluggable <code>.rshm</code>
            modules and standalone zero-dependency Win32 C++20 <code>F1</code> help clients.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/installer-studio/docs">See Live Single-Source Web Manual &rarr;</a>
            <a class="btn btn-outline" href="/installer-studio">Download Installer Studio (Includes RaggieSoftHelp.exe)</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${Jr}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Help Studio — Modern Offline F1 Help and Turnkey HTML Help .CHM Migration."
          />
        </figure>
      </div>
    </section>

    <section aria-labelledby="help-pillars-heading">
      <span class="eyebrow">Built on Our Proven Static /MT C++20 RaggieSoftHelp.exe Engine</span>
      <h2 id="help-pillars-heading" style="margin-top: 0.25rem;">Four Core Capabilities of RaggieSoft Help Studio</h2>
      <div class="grid-2x2">
        <article class="card card-highlight">
          <h3>1. Turnkey HTML Help Workshop (<code>.hhp</code> / <code>.chm</code>) Importer</h3>
          <p>
            Point Help Studio at any existing <code>.hhp</code> project, <code>.hhc</code> Table of Contents, <code>.hhk</code>
            Keyword Index, C/C++/VB6 <code>[MAP]</code> &amp; <code>[ALIAS]</code> context header IDs, or decompiled
            <code>.chm</code> archive to generate a clean, Git-diffable <code>.rshp</code> manifest in seconds.
          </p>
        </article>
        <article class="card card-highlight">
          <h3>2. Modular <code>.rshm</code> Plug-In OR Standalone Branded Client</h3>
          <p>
            Ship lightweight <code>module.rshm.json</code> documentation packs into a shared suite help viewer, OR stamp a
            100% white-label standalone Win32 C++20 <code>&lt;YourProduct&gt;Help.exe</code> (<code>x64</code> &amp;
            <code>ARM64</code>) with zero <code>.NET</code> or <code>WebView2</code> runtime dependencies.
          </p>
        </article>
        <article class="card">
          <h3>3. Instant Named Pipe <code>F1</code> Context Routing</h3>
          <p>
            Drop-in C/C++, C#/.NET 11, Delphi, and VB6 helper headers replace <code>HtmlHelpW(..., HH_HELP_CONTEXT, id)</code>
            with sub-5ms Named Pipe navigation—opening the exact dialog topic without spawning duplicate windows.
          </p>
        </article>
        <article class="card">
          <h3>4. Single-Source Offline Help + Static SEO Web Portal + VPAT 2.5</h3>
          <p>
            Every <code>.rshp</code> build compiles offline desktop help, static WCAG 2.2 AA web documentation pages, and a
            procurement-ready HTML5 VPAT 2.5 conformance report from one set of Markdown/HTML5 chapters.
          </p>
        </article>
      </div>
    </section>
  `}function fs(){return`
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
            src="${es}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Document Studio — Tagged PDF/UA-1 Without Tag-Tree Pain."
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
  `}function ms(){return`
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
            src="${ts}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Localization Studio — Safe App, Installer, and Caption Translation."
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
  `}function bs(){return`
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
            src="${is}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Launcher Studio — Custom Desktop App Hubs and Static-CDN Delta Updaters."
          />
        </figure>
      </div>
    </section>

    <section id="launcher-mockup-section" aria-labelledby="launcher-shot-heading">
      <span class="eyebrow">High-DPI Workstation Concept • Click Image for Full 1280&times;800 Lightbox</span>
      <h2 id="launcher-shot-heading" style="margin-top: 0.25rem;">Visual Catalog Tree, Live Branded Hub Preview &amp; Signing Inspector</h2>
      <div class="shot-grid" style="grid-template-columns: minmax(0, 1fr); max-width: 58rem;">
        ${T(j.launcherIde)}
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
  `}function vs(){return`
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
            src="${os}"
            width="1200"
            height="630"
            alt="3D boxed software showcase of RaggieSoft Showcase Studio — 1990s Painted .BMP CD-ROM Menus with WCAG 2.2 AA Safeguards and Windows 11 FluentMica."
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
        ${T(j.showcase90s)}
        ${T(j.showcaseModern)}
        ${T(j.showcaseIde)}
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
  `}function Ss(){return`
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
            <a class="btn btn-primary" href="${Re}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
            <a class="btn btn-outline" href="${Xe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
            <a class="btn btn-outline" href="/installer-studio/screenshots">14 Live Screenshots</a>
            <a class="btn btn-outline" href="/installer-studio/docs">Docs &amp; .rsip Spec</a>
          </div>
          ${Qe()}
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${Zr}"
            width="1200"
            height="630"
            alt="Collector's Edition boxed software render of RaggieSoft Installer Studio — Install Without Limits (Native C++20 for x64 and ARM64)."
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
              <li><strong>Plain-English Feature Inclusion Tiers &amp; 12-View Tree-First IDE</strong>: Decide whether each feature belongs to a <em>Minimal / Compact</em>, <em>Typical / Express</em>, or <em>Complete</em> setup, edit <strong><code>RegEdit</code>-style Registry</strong> &amp; Dual Folder trees, and enjoy permanent <strong><code>Community == 100% Premier</code> parity</strong></li>
              <li><strong>100% Dark-Mode-Complete UI, Native C++20 <code>F1</code> Help &amp; <code>msiprism.exe</code></strong>: Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> palette hot-swapping, <code>SPI_GETHIGHCONTRAST</code> override, zero-dependency <code>RaggieSoftHelp.exe</code>, Pre-MSI runtimes, 64-bit <code>.MSM</code> merging, and <code>--emit-vpat</code></li>
            </ul>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/installer-studio/screenshots">Take the Visual Screenshot Tour &rarr;</a>
            <a class="btn btn-outline" href="/installer-studio/faq">Frequently Asked Questions</a>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Focused Path to <code>v1.0.0 GA</code> (Dogfood North Star)</h3>
            <ul class="feature-list">
              <li><strong><code>v0.6.0</code> (Next Up) — SFX <code>.EXE</code>, Multi-Volume Disk Spanning, Loose Media (<code>msiexec /a</code>), <code>.rswpak</code> &amp; Multi-Engine Suites</strong>: Build folder/ZIP-to-SFX <code>.exe</code> extractors, split multi-disc <code>CAB1..N.cab</code> sets, support loose uncompressed <em>Run from Media / Network</em> &amp; <code>msiexec /a</code> admin images, and chain <code>.msi</code> apps + <code>Engine = native</code> content packs</li>
              <li><strong><code>v0.7.0</code> — From-Scratch Dual Dialog Builders &amp; <code>RsDialog</code> Scripting</strong>: Blank-canvas WYSIWYG C++ (<code>SetupWizard.exe</code>) &amp; raw <code>370&times;270</code> <code>MSI.DLL</code> SQL dialog designers plus procedural <code>Rs*()</code> dialog scripting</li>
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
              <td><strong><code>Community == Premier</code> + 100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Community Edition enjoys full Premier feature parity, and compiled <code>Setup.exe</code> / <code>.msi</code> files carry your publisher identity with zero watermarks.</td>
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
  `}function ys(){return`
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
        <a class="btn btn-primary" href="${Re}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Xe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/installer-studio/faq">Read FAQ</a>
        <a class="btn btn-outline" href="/installer-studio/roadmap">Explore v1.0 Roadmap</a>
      </div>
      ${Qe()}
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
        ${cs.map(T).join(`
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
        ${ls.map(T).join(`
`)}
      </div>
    </section>

    <section aria-labelledby="tour-tools-heading">
      <span class="eyebrow">Part 3 • Built-In Companion Tools (RaggieSoftHelp.exe &amp; msiprism.exe)</span>
      <h2 id="tour-tools-heading" style="margin-top: 0.25rem;">Instant F1 Offline Documentation &amp; 64-Bit SQL Database Inspection</h2>
      <div class="shot-grid">
        ${us.map(T).join(`
`)}
      </div>
    </section>
  `}function ws(){return`
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.5.0 Shipped &rarr; v1.0.0 GA Dogfood Cutover</span>
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
        <a class="btn btn-primary" href="${We}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/installer-studio/ROADMAP.md">Open Raw ROADMAP.md</a>
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
              <th scope="row"><code>v0.6.0</code></th>
              <td>Lightweight Self-Extracting <code>.EXE</code> Builder (<code>PackageKind = sfx</code>), Multi-Volume Disk Spanning (<code>CAB1..N.cab</code>), Loose Uncompressed Source Media (<em>Run from Media / Network</em> &amp; <code>msiexec.exe /a</code> Admin Installs), <code>.rswpak</code> Packs, <code>.NET 11</code> presets, &amp; Multi-Engine Suite Setup (<code>Engine = native | msi</code>)</td>
              <td><span class="status-pill status-next">Next Up</span></td>
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
          <span class="status-pill status-shipped">Shipped in v0.5.0</span>
          <h2 id="phase-v05-heading" style="margin-top: 0.5rem;">10 Wizard Layout Variations, Classic &amp; Custom Setup Types &amp; WCAG Contrast Enforcer</h2>
          <ul class="feature-list">
            <li><strong>Classic &amp; Modern Wizard Geometries (<code>[UI] WizardLayout</code>)</strong>: Includes <code>Wizard95</code> (<code>164px</code> sunken left graphic rail across all steps), <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code>, <code>FullScreenTeal</code>, and <code>Autorun16x9</code>.</li>
            <li><strong>Classic Windows 95 &amp; Author-Defined Setup Types (<code>[SetupType.&lt;Id&gt;]</code>)</strong>: Built-in <strong>Typical / Compact / Complete / Custom</strong> or modern <strong>Express / Compact / Custom</strong> presets plus repeatable custom publisher Setup Types.</li>
            <li><strong>Windows Contrast Theme Override &amp; Live WCAG 2.2 AA Contrast Enforcer</strong>: Honors <code>SPI_GETHIGHCONTRAST</code> automatically and validates custom brand hex colors via <code>RSW055</code> in <code>instbuild.exe --validate</code>.</li>
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
            <li><strong>Granular On-Demand Feature Packs (<code>.rswpak</code>) &amp; Multi-Engine Suites (<code>PackageKind = suite</code>)</strong>: Chain transactional <code>.msi</code> desktop apps alongside multi-gigabyte <code>Engine = native</code> book and music libraries.</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v07'" aria-labelledby="phase-v07-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.7.0</span>
          <h2 id="phase-v07-heading" style="margin-top: 0.5rem;">From-Scratch Dual Dialog Builders (C++ &amp; Raw <code>MSI.DLL</code>) &amp; <code>RsDialog</code> Scripting</h2>
          <ul class="feature-list">
            <li><strong>From-Scratch C++ &amp; Raw <code>370&times;270</code> <code>MSI.DLL</code> Dialog Designers</strong>: Blank-canvas WYSIWYG editors for building custom wizard pages in both <code>SetupWizard.exe</code> (<code>[Dialog.*]</code>) and standalone <code>msiexec</code> SQL tables (<code>[MsiDialog.*]</code> / <code>[MsiControl.*]</code>).</li>
            <li><strong><code>RsDialog</code> Standard Library + <code>.rssc</code> Event Hooks</strong>: Lifecycle hooks paired with procedural <code>RsWelcome()</code>, <code>RsLicense()</code>, <code>RsSetupType()</code>, <code>RsFeatureTree()</code>, <code>RsAskDestPath()</code>, and <code>RsFinish()</code> dialogs.</li>
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
          <h2 id="phase-v09-heading" style="margin-top: 0.5rem;">Authenticode &amp; Azure Artifact Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Guided <code>.MSP</code> Servicing</h2>
          <ul class="feature-list">
            <li><strong>Interactive Signing Studio &amp; White-Label <code>RsUpdate.exe</code></strong>: Certificate store picker, Azure Artifact Signing tester, Dual-Layer <code>WinVerifyTrust</code> check, and guided binary-delta <code>.msp</code> servicing.</li>
          </ul>
        </div>
      </section>

      <section x-show="phaseFilter === 'all' || phaseFilter === 'v10'" aria-labelledby="phase-v10-heading" class="card">
        <div>
          <span class="status-pill">Target v1.0.0 GA &amp; v1.1+</span>
          <h2 id="phase-v10-heading" style="margin-top: 0.5rem;"><code>v1.0.0 GA</code> Production Dogfood Cutover &amp; Post-1.0 Enterprise Expansion</h2>
          <ul class="feature-list">
            <li><strong><code>v1.0.0 GA</code></strong>: First-party GitHub Actions / Azure DevOps tasks, <code>--emit-winget</code>, and 100% RaggieSoft production cutover across all Windows apps, interactive novels, and audio archives.</li>
            <li><strong><code>v1.1+</code> Post-1.0</strong>: Disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture, Visual Studio <code>.vsix</code>, Windows Services/Firewall/Config Patchers, in-process <code>.MSIXBUNDLE</code> (<code>AppxPackaging.dll</code>), 20+ language <code>I18N</code> + RTL, and SPDX / CycloneDX <code>--emit-sbom</code>.</li>
          </ul>
        </div>
      </section>
    </div>
  `}function xs(){return`
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
            <p>Meet the 5 static <code>/MT</code> C++20 executables, the <code>Community == Premier</code> parity pledge, and <code>.rsip</code> / <code>.rsis</code> / <code>.rsii</code> manifests.</p>
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
        <a class="btn btn-outline" href="/installer-studio/docs/welcome-overview#editions">Community == Premier Parity</a>
        <a class="btn btn-outline" href="/installer-studio/docs/components-and-keypaths#component-rules">ICE18 &amp; ICE38 Component Rules</a>
        <a class="btn btn-outline" href="/installer-studio/docs/runtimes-and-merge-modules#prerequisites">[Prerequisite.*] Pre-MSI Runtimes</a>
        <a class="btn btn-outline" href="/installer-studio/docs/runtimes-and-merge-modules#mergemodules">[MergeModule.*] (.MSM)</a>
        <a class="btn btn-outline" href="/installer-studio/docs/selection-tree-and-dialogs#selection-tree">MSI SelectionTree</a>
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
            <tr x-show="!q || 'package name version upgradecode msi msm'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code> &amp; <code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, 3-part <code>Version</code>, <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code>, <code>DefaultSubdir</code>, <code>MainExecutable</code>.</td>
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
  `}function Cs(){return`
    <section class="hero" aria-labelledby="faq-title">
      <span class="eyebrow">Technical &amp; Consumer Questions Answered • v0.5.0</span>
      <h1 id="faq-title">Frequently Asked Questions</h1>
      <p class="lead">
        Clear, honest answers about Dual-Layer Microsoft Azure Artifact Signing, why our universal installer targets
        64-bit <code>x64</code> and <code>ARM64</code> (skipping extinct <code>IA-64</code> and 32-bit <code>x86</code>
        host OS builds while still supporting legacy 32-bit app payloads), plain-English setup tiers, accessibility, and our
        permanent <code>Community == Premier</code> pledge.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Re}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Xe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
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
      <span class="eyebrow">Part 2 • Setup Types, Inclusion Tiers, Licensing &amp; AI Agents</span>
      <h2 id="faq-authoring-heading" style="margin-top: 0.25rem;">Plain-English Authoring, Accessibility &amp; Community == Premier</h2>
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
            <h3>6. Does Community Edition really have 100% feature parity with Premier—with zero watermarks?</h3>
            <p>
              <strong>Yes, permanently.</strong> Community Edition unlocks every single MSI table, Pre-MSI Runtime Prerequisite,
              64-bit <code>.MSM</code> Merge Module weaver, Universal Single-EXE packager, AeroWizard, VPAT 2.5 generator, and CLI
              command with zero locked views and zero visible watermarks.
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
      </div>
    </section>
  `}function As(){return`
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • Signed Universal x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${Re}">Download Latest v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${Xe}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
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
  `}function ai(){return`
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
        <a class="btn btn-primary" href="${ss}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
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
  `}function _s(){return`
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">Static /MT C++20 • Minimal SBOM • Air-Gap Friendly</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled directly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound IDE
        telemetry, and zero cryptocurrency/blockchain code.
      </p>
      ${Qe()}
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
  `}const ri=[{path:"/",navGroup:"suite",navLabel:"Suite Overview",seoTitle:"RaggieSoft Studio — Packaging, A11y, Launcher & Showcase",seoDescription:"Native Windows 11 x64 & ARM64 developer suite: Installer Studio v0.5.0, Accessibility Studio v1.0.0, Launcher Studio, and Showcase Studio.",renderBody:ps},{path:"/installer-studio",navGroup:"installer-studio",navLabel:"Overview",seoTitle:"RaggieSoft Installer Studio v0.5 — Native C++20 Packager",seoDescription:"Zero-dependency Win32 C++20 MSI & Setup.exe IDE and compiler for Windows 11 x64 and ARM64 with 10 Wizard Styles and WCAG 2.2 AA Auto-Contrast.",renderBody:Ss},{path:"/installer-studio/screenshots",navGroup:"installer-studio",navLabel:"Screenshots",seoTitle:"Visual Tour & Screenshots | RaggieSoft Installer Studio",seoDescription:"Explore full-size Windows 11 screenshots of RaggieSoft Installer Studio v0.5.0: 10 Wizard Styles, ACME Teal & Cobalt washes, and IDE trees.",renderBody:ys},{path:"/installer-studio/roadmap",navGroup:"installer-studio",navLabel:"Roadmap",seoTitle:"Public Engineering Roadmap | RaggieSoft Installer Studio",seoDescription:"Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.5.0 through v1.0 GA across Windows 11 x64 and ARM64.",renderBody:ws},{path:"/installer-studio/docs",navGroup:"installer-studio",navLabel:"Docs & AI Spec",seoTitle:"Documentation & .rsip v0.5 Spec | Installer Studio",seoDescription:"Searchable .rsip v0.5 project and .rsis suite reference covering 10 Wizard Styles, Setup Types, Features, Registry, Runtimes, and /llms.txt.",renderBody:xs},{path:"/installer-studio/faq",navGroup:"installer-studio",navLabel:"FAQ",seoTitle:"FAQ — Azure Signing, ARM64/x64 & Setup Types | RaggieSoft",seoDescription:"Answers on Microsoft Azure Artifact Signing, why IA-64 and 32-bit x86 host builds are skipped, Setup Types, and Community == Premier parity.",renderBody:Cs},{path:"/installer-studio/changelog",navGroup:"installer-studio",navLabel:"Changelog",seoTitle:"Version History & Changelog (v0.5.0) | Installer Studio",seoDescription:"Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.5.0 across Windows 11 x64 and ARM64.",renderBody:As},{path:"/installer-studio/vpat",navGroup:"installer-studio",navLabel:"Accessibility & VPAT",seoTitle:"WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio",seoDescription:"Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.",renderBody:ai},{path:"/installer-studio/accessibility",navGroup:"installer-studio",seoTitle:"Accessible Windows Installer Architecture | RaggieSoft",seoDescription:"Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.",renderBody:ai},{path:"/installer-studio/security",navGroup:"installer-studio",navLabel:"Security",seoTitle:"Security, Static /MT C++20 & Signing | Installer Studio",seoDescription:"Static /MT Win32 C++20 compilation, dual-layer Azure Artifact Signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.",renderBody:_s},{path:"/training-studio",navGroup:"suite",navLabel:"Training Studio",seoTitle:"RaggieSoft Training Studio — WCAG 2.2 AA SCORM Compiler",seoDescription:"Compile plain-text .rstp + Markdown slides into bandwidth-proof <50 KB SCORM 1.2 & 2004 packages with offline checkpointing and Auto-VPAT 2.5.",renderBody:gs},{path:"/help-studio",navGroup:"suite",navLabel:"Help Studio",seoTitle:"RaggieSoft Help Studio — Offline F1 Help & .CHM Import",seoDescription:"Migrate legacy Microsoft HTML Help (.hhp, .hhc, .hhk, .chm) into modular .rshm packs or standalone zero-dependency Win32 C++20 F1 help clients.",renderBody:hs},{path:"/document-studio",navGroup:"suite",navLabel:"Document Studio",seoTitle:"RaggieSoft Document Studio — Tagged PDF/UA-1 Compiler",seoDescription:"Compile plain-text .rsdp manifests and Markdown into machine-verified ISO 14289-1 Tagged PDF/UA-1 handbooks, policies, and Section 508 forms.",renderBody:fs},{path:"/localization-studio",navGroup:"suite",navLabel:"Localization Studio",seoTitle:"RaggieSoft Localization Studio — .RESX, XLIFF & WebVTT",seoDescription:"Side-by-side .RESX, XLIFF 2.1, .rsip, .rstp, and WebVTT localization IDE with locked format tokens, & mnemonic checks, and <=25 CPS caption gates.",renderBody:ms},{path:"/launcher-studio",navGroup:"suite",navLabel:"Launcher Studio",seoTitle:"RaggieSoft Launcher Studio — Custom Desktop App Hubs",seoDescription:"Visual IDE and .rslp manifest compiler for building white-label Windows 11 x64 & ARM64 desktop app hubs, offline shelves, and static-CDN updaters.",renderBody:bs},{path:"/showcase-studio",navGroup:"suite",navLabel:"Showcase Studio",seoTitle:"RaggieSoft Showcase Studio — Accessible Collector Menus",seoDescription:"Author classic 1990s .BMP CD-ROM menus with WCAG 2.2 AA safeguards and modern Windows 11 FluentMica launchpads in zero-dependency Win32 C++20.",renderBody:vs}];function Is(e,t){const i=ri.find(g=>g.path===e),a=e==="/installer-studio"||e.startsWith("/installer-studio/"),o=e.startsWith("/installer-studio/docs/")?"/installer-studio/docs":e==="/installer-studio/accessibility"?"/installer-studio/vpat":e,s=[{href:"/",label:"Suite",isCurrent:e==="/",isSection:!1},{href:"/installer-studio",label:"Installer",isCurrent:e==="/installer-studio",isSection:a&&e!=="/installer-studio"},{href:"/accessibility-studio",label:"Accessibility",isCurrent:!1,isSection:!1},{href:"/training-studio",label:"Training",isCurrent:e==="/training-studio",isSection:!1},{href:"/help-studio",label:"Help",isCurrent:e==="/help-studio",isSection:!1},{href:"/document-studio",label:"Document",isCurrent:e==="/document-studio",isSection:!1},{href:"/localization-studio",label:"Localization",isCurrent:e==="/localization-studio",isSection:!1},{href:"/launcher-studio",label:"Launcher",isCurrent:e==="/launcher-studio",isSection:!1},{href:"/showcase-studio",label:"Showcase",isCurrent:e==="/showcase-studio",isSection:!1}].map(g=>{const C=g.isCurrent?' aria-current="page"':"";return`<li><a class="nav-link${g.isSection?" is-section-active":""}" href="${g.href}"${C}>${g.label}</a></li>`}).join(`
              `),n=ri.filter(g=>g.navGroup==="installer-studio"&&!!g.navLabel),d=a?`
      <div class="product-subnav">
        <div class="product-subnav-inner">
          <span class="product-subnav-label">Installer Studio v0.5.0:</span>
          <nav aria-label="Installer Studio Product Pages">
            <ul class="product-subnav-list">
              ${n.map(g=>{const C=g.path===o?' aria-current="page"':"";return`<li><a class="product-subnav-link" href="${g.path}"${C}>${g.navLabel}</a></li>`}).join(`
              `)}
              <li><a class="product-subnav-link" href="${We}">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </div>`:"",c=a?`
          <div class="mobile-product-subnav">
            <span class="mobile-product-subnav-title">Installer Studio v0.5.0 Pages</span>
            <nav aria-label="Installer Studio Mobile Sub-Pages">
              <ul class="nav-list">
                ${n.map(g=>{const C=g.path===o?' aria-current="page"':"";return`<li><a class="nav-link" href="${g.path}"${C}>${g.navLabel}</a></li>`}).join(`
                `)}
                <li><a class="nav-link" href="${We}">Installer Studio GitHub</a></li>
              </ul>
            </nav>
          </div>`:"",l=i?i.renderBody():`
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
          <span class="brand-title">RaggieSoft Studio</span>
          <span class="brand-sub">${a?"Installer Studio v0.5.0 • Zero-Dependency Win32 C++20 for x64 &amp; ARM64":e==="/training-studio"?"Training Studio v0.1.0 • Bandwidth-Proof WCAG 2.2 AA SCORM 1.2 &amp; 2004":e==="/help-studio"?"Help Studio • Native Offline F1 Help &amp; Legacy .CHM / .HHP Migration":e==="/document-studio"?"Document Studio • Deterministic ISO 14289-1 Tagged PDF/UA-1 Compiler":e==="/localization-studio"?"Localization Studio • Multilingual .RESX, XLIFF &amp; WebVTT Compliance IDE":e==="/launcher-studio"?"Launcher Studio • Branded Desktop App Hubs &amp; Static-CDN Updaters":e==="/showcase-studio"?"Showcase Studio • Accessible 1990s .BMP &amp; Windows 11 FluentMica Menus":"Eight-Tool Packaging, Accessibility, Training, Help &amp; Publishing Suite"}</span>
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
              ${s}
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
          <a href="/installer-studio">Installer Studio (v0.5.0)</a>
          <a href="/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="/training-studio">Training Studio (v0.1.0)</a>
          <a href="/help-studio">Help Studio (.CHM / F1)</a>
          <a href="/document-studio">Document Studio (PDF/UA-1)</a>
          <a href="/localization-studio">Localization Studio</a>
          <a href="/launcher-studio">Launcher Studio</a>
          <a href="/showcase-studio">Showcase Studio</a>
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
          <a href="${We}">Installer GitHub</a>
          <a href="${rs}">Accessibility GitHub</a>
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
        <p class="disclaimer-box">${ns}</p>
      </div>
    </footer>
  `}}const rt=document.getElementById("app");if(rt&&rt.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\.html$/i,"").replace(/\/+$/,"")||"/";rt.innerHTML=Is(e).html}document.addEventListener("click",e=>{const t=e.target;if(!t)return;const i=t.closest("[data-open-dialog]");if(i){const o=i.getAttribute("data-open-dialog"),r=o?document.getElementById(o):null;r&&typeof r.showModal=="function"&&r.showModal();return}const a=t.closest("[data-close-dialog]");if(a){const o=a.closest("dialog");o&&o.close();return}t.tagName==="DIALOG"&&t.classList.contains("shot-lightbox")&&t.close()});window.Alpine=wo;wo.start();
