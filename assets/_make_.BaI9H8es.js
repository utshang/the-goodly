import{_ as X}from"./nuxt-img.AwD500gu.js";import{_ as Z}from"./nuxt-link.CagziBPg.js";import{o as C,c as O,a as S,f as D,b as T,w as W,t as L,x as ee,k as x,y as R,z as te,A as V,B as ne,C as N,D as ae,E as re,G as J,H as I,F as oe,r as se,I as q,J as ie,K as ce,L as le,M as B,N as ue,i as G,g as fe,O as de}from"./entry.CL4bAtTh.js";import"./vue.f36acd1f.BcMcFezH.js";const pe=""+new URL("heartFilled.DVIIbLWt.png",import.meta.url).href,me=""+new URL("heartOutline.DHlaH5YD.png",import.meta.url).href,he={class:"relative h-full"},ye=["src"],_e={class:"card-body relative"},ge=S("span",{class:"badge border-0 absolute top-1"},"HOT",-1),ve={class:"card-title text-base"},we={__name:"ProductCard",props:{car:Object,favored:Boolean},emits:["favor"],setup(e,{emit:a}){const t=a;return(r,n)=>{const o=X,l=Z;return C(),O("li",null,[S("div",he,[S("img",{src:e.favored?D(pe):D(me),class:"w-10 h-10 z-20 absolute bottom-4 right-4 cursor-pointer",alt:"",onClick:n[0]||(n[0]=f=>t("favor",e.car.id))},null,8,ye),T(l,{to:`/product/${e.car.name}-${e.car.id}`,class:"card h-full bg-base-100 shadow-xl"},{default:W(()=>[T(o,{src:e.car.url,alt:"prdouct",class:"p-8 h-60 object-contain"},null,8,["src"]),S("div",_e,[ge,S("h2",ve,L(e.car.name),1),S("p",null,"$ "+L(e.car.price),1)])]),_:1},8,["to"])])])}}},be=we,De=Symbol.for("nuxt:client-only"),Se=ee({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:a,attrs:t}){const r=x(!1);return R(()=>{r.value=!0}),te(De,!0),n=>{var y;if(r.value)return(y=a.default)==null?void 0:y.call(a);const o=a.fallback||a.placeholder;if(o)return o();const l=n.fallback||n.placeholder||"",f=n.fallbackTag||n.placeholderTag||"span";return O(f,t,l)}}});function Ce(e){return ae()?(re(e),!0):!1}function M(e){return typeof e=="function"?e():D(e)}const xe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Oe=Object.prototype.toString,Pe=e=>Oe.call(e)==="[object Object]",ke=()=>{};function Ae(e,a){function t(...r){return new Promise((n,o)=>{Promise.resolve(e(()=>a.apply(this,r),{fn:a,thisArg:this,args:r})).then(n).catch(o)})}return t}const K=e=>e();function Fe(e=K){const a=x(!0);function t(){a.value=!1}function r(){a.value=!0}const n=(...o)=>{a.value&&e(...o)};return{isActive:ne(a),pause:t,resume:r,eventFilter:n}}function Ne(e){return e||J()}function Ee(e,a,t={}){const{eventFilter:r=K,...n}=t;return N(e,Ae(r,a),n)}function Te(e,a,t={}){const{eventFilter:r,...n}=t,{eventFilter:o,pause:l,resume:f,isActive:y}=Fe(r);return{stop:Ee(e,a,{...n,eventFilter:o}),pause:l,resume:f,isActive:y}}function Me(e,a=!0,t){Ne()?R(e,t):a?e():V(e)}function $e(e){var a;const t=M(e);return(a=t==null?void 0:t.$el)!=null?a:t}const F=xe?window:void 0;function z(...e){let a,t,r,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,n]=e,a=F):[a,t,r,n]=e,!a)return ke;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const o=[],l=()=>{o.forEach(s=>s()),o.length=0},f=(s,d,v,g)=>(s.addEventListener(d,v,g),()=>s.removeEventListener(d,v,g)),y=N(()=>[$e(a),M(n)],([s,d])=>{if(l(),!s)return;const v=Pe(d)?{...d}:d;o.push(...t.flatMap(g=>r.map(b=>f(s,g,b,v))))},{immediate:!0,flush:"post"}),_=()=>{y(),l()};return Ce(_),_}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__",je=Le();function Le(){return A in k||(k[A]=k[A]||{}),k[A]}function Be(e,a){return je[e]||a}function ze(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const He={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},H="vueuse-storage";function We(e,a,t,r={}){var n;const{flush:o="pre",deep:l=!0,listenToStorageChanges:f=!0,writeDefaults:y=!0,mergeDefaults:_=!1,shallow:s,window:d=F,eventFilter:v,onError:g=i=>{console.error(i)},initOnMounted:b}=r,c=(s?I:x)(typeof a=="function"?a():a);if(!t)try{t=Be("getDefaultStorage",()=>{var i;return(i=F)==null?void 0:i.localStorage})()}catch(i){g(i)}if(!t)return c;const h=M(a),u=ze(h),p=(n=r.serializer)!=null?n:He[u],{pause:E,resume:$}=Te(c,()=>U(c.value),{flush:o,deep:l,eventFilter:v});d&&f&&Me(()=>{z(d,"storage",P),z(d,H,Q),b&&P()}),b||P();function j(i,m){d&&d.dispatchEvent(new CustomEvent(H,{detail:{key:e,oldValue:i,newValue:m,storageArea:t}}))}function U(i){try{const m=t.getItem(e);if(i==null)j(m,null),t.removeItem(e);else{const w=p.write(i);m!==w&&(t.setItem(e,w),j(m,w))}}catch(m){g(m)}}function Y(i){const m=i?i.newValue:t.getItem(e);if(m==null)return y&&h!=null&&t.setItem(e,p.write(h)),h;if(!i&&_){const w=p.read(m);return typeof _=="function"?_(w,h):u==="object"&&!Array.isArray(w)?{...h,...w}:w}else return typeof m!="string"?m:p.read(m)}function P(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){c.value=h;return}if(!(i&&i.key!==e)){E();try{(i==null?void 0:i.newValue)!==p.write(c.value)&&(c.value=Y(i))}catch(m){g(m)}finally{i?V($):$()}}}}function Q(i){P(i.detail)}return c}function Re(e,a,t={}){const{window:r=F}=t;return We(e,a,r==null?void 0:r.localStorage,t)}const Ve={class:"productList grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"},Je={__name:"Cards",props:{cars:Array},setup(e){const a=Re("favorite",{}),t=r=>{r in a.value?delete a.value[r]:a.value={...a.value,[r]:!0}};return(r,n)=>{const o=be,l=Se;return C(),O("ul",Ve,[T(l,null,{default:W(()=>[(C(!0),O(oe,null,se(e.cars,f=>(C(),q(o,{key:f.id,car:f,onFavor:t,favored:f.id in D(a)},null,8,["car","favored"]))),128))]),_:1})])}}},Ie=Je,qe=e=>e==="defer"||e===!1;function Ge(...e){var b;const a=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(a);let[t,r,n={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const o=ue(),l=r,f=()=>null,y=()=>o.isHydrating?o.payload.data[t]:o.static.data[t];n.server=n.server??!0,n.default=n.default??f,n.getCachedData=n.getCachedData??y,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??ie.deep,n.dedupe=n.dedupe??"cancel";const _=()=>![null,void 0].includes(n.getCachedData(t));if(!o._asyncData[t]||!n.immediate){(b=o.payload._errors)[t]??(b[t]=null);const c=n.deep?x:I;o._asyncData[t]={data:c(n.getCachedData(t)??n.default()),pending:x(!_()),error:ce(o.payload._errors,t),status:x("idle")}}const s={...o._asyncData[t]};s.refresh=s.execute=(c={})=>{if(o._asyncDataPromises[t]){if(qe(c.dedupe??n.dedupe))return o._asyncDataPromises[t];o._asyncDataPromises[t].cancelled=!0}if((c._initial||o.isHydrating&&c._initial!==!1)&&_())return Promise.resolve(n.getCachedData(t));s.pending.value=!0,s.status.value="pending";const h=new Promise((u,p)=>{try{u(l(o))}catch(E){p(E)}}).then(u=>{if(h.cancelled)return o._asyncDataPromises[t];let p=u;n.transform&&(p=n.transform(u)),n.pick&&(p=Ke(p,n.pick)),o.payload.data[t]=p,s.data.value=p,s.error.value=null,s.status.value="success"}).catch(u=>{if(h.cancelled)return o._asyncDataPromises[t];s.error.value=G(u),s.data.value=D(n.default()),s.status.value="error"}).finally(()=>{h.cancelled||(s.pending.value=!1,delete o._asyncDataPromises[t])});return o._asyncDataPromises[t]=h,o._asyncDataPromises[t]};const d=()=>s.refresh({_initial:!0}),v=n.server!==!1&&o.payload.serverRendered;{const c=J();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const u=c._nuxtOnBeforeMountCbs;c&&(le(()=>{u.forEach(p=>{p()}),u.splice(0,u.length)}),B(()=>u.splice(0,u.length)))}v&&o.isHydrating&&(s.error.value||_())?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):c&&(o.payload.serverRendered&&o.isHydrating||n.lazy)&&n.immediate?c._nuxtOnBeforeMountCbs.push(d):n.immediate&&d(),n.watch&&N(n.watch,()=>s.refresh());const h=o.hook("app:data:refresh",async u=>{(!u||u.includes(t))&&await s.refresh()});c&&B(h)}const g=Promise.resolve(o._asyncDataPromises[t]).then(()=>s);return Object.assign(g,s),g}function Ke(e,a){const t={};for(const r of a)t[r]=e[r];return t}const Ue=async(e,a)=>{console.log(a);const{make:t,minPrice:r,maxPrice:n}=a,{data:o,error:l,refresh:f}=await Ge("test",()=>$fetch(`/api/cars/${e}`,{params:{...a}}),{watch:[t,r,n]});if(l.value)throw G({...l.value,statusMessage:"unable to fetch cars"});return{data:o,refresh:f}},Ye={key:1,class:"text-center"},tt={__name:"[[make]]",async setup(e){let a,t;const r=fe(),{data:n,refresh:o}=([a,t]=de(()=>Ue(r.params.city,{minPrice:r.query.minPrice,maxPrice:r.query.maxPrice,make:r.params.make})),a=await a,t(),a);return N(()=>r.query,()=>{window.location.reload(!0)}),console.log(r.params),console.log(r.query),(l,f)=>{const y=Ie;return D(n).length?(C(),q(y,{key:0,cars:D(n)},null,8,["cars"])):(C(),O("div",Ye,"No Cars Found."))}}};export{tt as default};
