import{_ as Z}from"./nuxt-img.DUrEt5kg.js";import{_ as ee}from"./nuxt-link.DJuD9Ci1.js";import{o as P,c as E,a as k,f as x,b as $,w as J,t as R,x as te,k as A,y as U,z as ne,A as q,B as ae,C as j,D as re,E as se,G as I,H as G,F as K,r as oe,I as ie,J as ce,K as le,L as ue,M as H,N as fe,i as Q,h as de,O,P as pe,l as me,Q as he,g as ye,R as _e,e as ge}from"./entry.Cv-9iYsw.js";import"./vue.f36acd1f.CPxDwBVE.js";const ve=""+new URL("heartFilled.DVIIbLWt.png",import.meta.url).href,be=""+new URL("heartOutline.DHlaH5YD.png",import.meta.url).href,we={class:"relative h-full"},De=["src"],Se={class:"card-body relative"},Ce=k("span",{class:"badge border-0 absolute top-1"},"HOT",-1),Oe={class:"card-title text-base"},xe={__name:"ProductCard",props:{car:Object,favored:Boolean},emits:["favor"],setup(e,{emit:a}){const t=a;return(s,n)=>{const r=Z,c=ee;return P(),E("li",null,[k("div",we,[k("img",{src:e.favored?x(ve):x(be),class:"w-10 h-10 z-20 absolute bottom-4 right-4 cursor-pointer",alt:"",onClick:n[0]||(n[0]=f=>t("favor",e.car.id))},null,8,De),$(c,{to:`/product/${e.car.name}-${e.car.id}`,class:"card h-full bg-base-100 shadow-xl"},{default:J(()=>[$(r,{src:e.car.url,alt:"prdouct",class:"p-8 h-60 object-contain"},null,8,["src"]),k("div",Se,[Ce,k("h2",Oe,R(e.car.name),1),k("p",null,"$ "+R(e.car.price),1)])]),_:1},8,["to"])])])}}},ke=xe,Ae=Symbol.for("nuxt:client-only"),Fe=te({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:a,attrs:t}){const s=A(!1);return U(()=>{s.value=!0}),ne(Ae,!0),n=>{var g;if(s.value)return(g=a.default)==null?void 0:g.call(a);const r=a.fallback||a.placeholder;if(r)return r();const c=n.fallback||n.placeholder||"",f=n.fallbackTag||n.placeholderTag||"span";return E(f,t,c)}}});function Pe(e){return re()?(se(e),!0):!1}function z(e){return typeof e=="function"?e():x(e)}const Ee=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=Object.prototype.toString,Ne=e=>Te.call(e)==="[object Object]",$e=()=>{};function Le(e,a){function t(...s){return new Promise((n,r)=>{Promise.resolve(e(()=>a.apply(this,s),{fn:a,thisArg:this,args:s})).then(n).catch(r)})}return t}const Y=e=>e();function je(e=Y){const a=A(!0);function t(){a.value=!1}function s(){a.value=!0}const n=(...r)=>{a.value&&e(...r)};return{isActive:ae(a),pause:t,resume:s,eventFilter:n}}function Me(e){return e||I()}function Re(e,a,t={}){const{eventFilter:s=Y,...n}=t;return j(e,Le(s,a),n)}function ze(e,a,t={}){const{eventFilter:s,...n}=t,{eventFilter:r,pause:c,resume:f,isActive:g}=je(s);return{stop:Re(e,a,{...n,eventFilter:r}),pause:c,resume:f,isActive:g}}function Be(e,a=!0,t){Me()?U(e,t):a?e():q(e)}function He(e){var a;const t=z(e);return(a=t==null?void 0:t.$el)!=null?a:t}const L=Ee?window:void 0;function V(...e){let a,t,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,n]=e,a=L):[a,t,s,n]=e,!a)return $e;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const r=[],c=()=>{r.forEach(o=>o()),r.length=0},f=(o,p,b,_)=>(o.addEventListener(p,b,_),()=>o.removeEventListener(p,b,_)),g=j(()=>[He(a),z(n)],([o,p])=>{if(c(),!o)return;const b=Ne(p)?{...p}:p;r.push(...t.flatMap(_=>s.map(w=>f(o,_,w,b))))},{immediate:!0,flush:"post"}),h=()=>{g(),c()};return Pe(h),h}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__",Ve=We();function We(){return N in T||(T[N]=T[N]||{}),T[N]}function Je(e,a){return Ve[e]||a}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function Ie(e,a,t,s={}){var n;const{flush:r="pre",deep:c=!0,listenToStorageChanges:f=!0,writeDefaults:g=!0,mergeDefaults:h=!1,shallow:o,window:p=L,eventFilter:b,onError:_=i=>{console.error(i)},initOnMounted:w}=s,l=(o?G:A)(typeof a=="function"?a():a);if(!t)try{t=Je("getDefaultStorage",()=>{var i;return(i=L)==null?void 0:i.localStorage})()}catch(i){_(i)}if(!t)return l;const m=z(a),u=Ue(m),d=(n=s.serializer)!=null?n:qe[u],{pause:F,resume:v}=ze(l,()=>D(l.value),{flush:r,deep:c,eventFilter:b});p&&f&&Be(()=>{V(p,"storage",C),V(p,W,X),w&&C()}),w||C();function M(i,y){p&&p.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:i,newValue:y,storageArea:t}}))}function D(i){try{const y=t.getItem(e);if(i==null)M(y,null),t.removeItem(e);else{const S=d.write(i);y!==S&&(t.setItem(e,S),M(y,S))}}catch(y){_(y)}}function B(i){const y=i?i.newValue:t.getItem(e);if(y==null)return g&&m!=null&&t.setItem(e,d.write(m)),m;if(!i&&h){const S=d.read(y);return typeof h=="function"?h(S,m):u==="object"&&!Array.isArray(S)?{...m,...S}:S}else return typeof y!="string"?y:d.read(y)}function C(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){l.value=m;return}if(!(i&&i.key!==e)){F();try{(i==null?void 0:i.newValue)!==d.write(l.value)&&(l.value=B(i))}catch(y){_(y)}finally{i?q(v):v()}}}}function X(i){C(i.detail)}return l}function Ge(e,a,t={}){const{window:s=L}=t;return Ie(e,a,s==null?void 0:s.localStorage,t)}const Ke={class:"productList grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"},Qe={__name:"Cards",props:{cars:Array},setup(e){const a=Ge("favorite",{}),t=s=>{s in a.value?delete a.value[s]:a.value={...a.value,[s]:!0}};return(s,n)=>{const r=ke,c=Fe;return P(),E("ul",Ke,[$(c,null,{default:J(()=>[(P(!0),E(K,null,oe(e.cars,f=>(P(),ie(r,{key:f.id,car:f,onFavor:t,favored:f.id in x(a)},null,8,["car","favored"]))),128))]),_:1})])}}},Ye=Qe,Xe=e=>e==="defer"||e===!1;function Ze(...e){var w;const a=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(a);let[t,s,n={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof s!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const r=fe(),c=s,f=()=>null,g=()=>r.isHydrating?r.payload.data[t]:r.static.data[t];n.server=n.server??!0,n.default=n.default??f,n.getCachedData=n.getCachedData??g,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??ce.deep,n.dedupe=n.dedupe??"cancel";const h=()=>![null,void 0].includes(n.getCachedData(t));if(!r._asyncData[t]||!n.immediate){(w=r.payload._errors)[t]??(w[t]=null);const l=n.deep?A:G;r._asyncData[t]={data:l(n.getCachedData(t)??n.default()),pending:A(!h()),error:le(r.payload._errors,t),status:A("idle")}}const o={...r._asyncData[t]};o.refresh=o.execute=(l={})=>{if(r._asyncDataPromises[t]){if(Xe(l.dedupe??n.dedupe))return r._asyncDataPromises[t];r._asyncDataPromises[t].cancelled=!0}if((l._initial||r.isHydrating&&l._initial!==!1)&&h())return Promise.resolve(n.getCachedData(t));o.pending.value=!0,o.status.value="pending";const m=new Promise((u,d)=>{try{u(c(r))}catch(F){d(F)}}).then(u=>{if(m.cancelled)return r._asyncDataPromises[t];let d=u;n.transform&&(d=n.transform(u)),n.pick&&(d=et(d,n.pick)),r.payload.data[t]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(u=>{if(m.cancelled)return r._asyncDataPromises[t];o.error.value=Q(u),o.data.value=x(n.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete r._asyncDataPromises[t])});return r._asyncDataPromises[t]=m,r._asyncDataPromises[t]};const p=()=>o.refresh({_initial:!0}),b=n.server!==!1&&r.payload.serverRendered;{const l=I();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const u=l._nuxtOnBeforeMountCbs;l&&(ue(()=>{u.forEach(d=>{d()}),u.splice(0,u.length)}),H(()=>u.splice(0,u.length)))}b&&r.isHydrating&&(o.error.value||h())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(r.payload.serverRendered&&r.isHydrating||n.lazy)&&n.immediate?l._nuxtOnBeforeMountCbs.push(p):n.immediate&&p(),n.watch&&j(n.watch,()=>o.refresh());const m=r.hook("app:data:refresh",async u=>{(!u||u.includes(t))&&await o.refresh()});l&&H(m)}const _=Promise.resolve(r._asyncDataPromises[t]).then(()=>o);return Object.assign(_,o),_}function et(e,a){const t={};for(const s of a)t[s]=e[s];return t}function tt(e,a,t){const[s={},n]=typeof a=="string"?[{},a]:[a,t],r=de(()=>{let D=e;return typeof D=="function"&&(D=D()),O(D)}),c=s.key||pe([n,typeof r.value=="string"?r.value:"",...nt(s)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const f=c===n?"$f"+c:c;if(!s.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:g,lazy:h,default:o,transform:p,pick:b,watch:_,immediate:w,getCachedData:l,deep:m,...u}=s,d=me({...he,...u,cache:typeof s.cache=="boolean"?void 0:s.cache}),F={server:g,lazy:h,default:o,transform:p,pick:b,immediate:w,getCachedData:l,deep:m,watch:_===!1?[]:[d,r,..._||[]]};let v;return Ze(f,()=>{var C;(C=v==null?void 0:v.abort)==null||C.call(v),v=typeof AbortController<"u"?new AbortController:{};const D=O(s.timeout);return D&&setTimeout(()=>v.abort(),D),(s.$fetch||globalThis.$fetch)(r.value,{signal:v.signal,...d})},F)}function nt(e){var t;const a=[((t=O(e.method))==null?void 0:t.toUpperCase())||"GET",O(e.baseURL)];for(const s of[e.params||e.query]){const n=O(s);if(!n)continue;const r={};for(const[c,f]of Object.entries(n))r[O(c)]=O(f);a.push(r)}return a}const at=async(e,a)=>{const{data:t,pending:s,error:n,refresh:r}=await tt(`/api/cars/${e}`,{params:{...a}},"$3y0lmp87o4");if(n.value)throw Q({...n.value,statusMessage:"unable to fetch cars"});return console.log(t),{data:t,pending:s,refresh:r}},ct={__name:"[[make]]",async setup(e){let a,t;const s=ye(),{data:n,pending:r,refresh:c}=([a,t]=_e(()=>at(s.params.city,{minPrice:s.query.minPrice,maxPrice:s.query.maxPrice,make:s.params.make})),a=await a,t(),a);return console.log(n),j(()=>s.query,()=>c()),(f,g)=>{const h=Ye;return P(),E(K,null,[ge(R(x(r)?"請求中":"完成")+" ",1),$(h,{cars:x(n)},null,8,["cars"])],64)}}};export{ct as default};
