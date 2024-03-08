import{g as V,j as A,k as _,l as L,h as M,c as u,a as t,e as v,t as d,f as a,m as f,v as y,n as R,p as x,F as b,r as U,b as q,i as B,q as $,o as c,s as F}from"./entry.CIdVOj8v.js";import{u as T}from"./useCars.swDCQaES.js";import{u as j}from"./vue.f36acd1f.CtNUxNCM.js";const D=()=>{function k(m){return m.charAt(0).toUpperCase()+m.slice(1)}return{capitalizeFirstLetter:k}},E={class:"filter flex justify-end"},I={class:"relative w-3/12 cursor-pointer"},S={class:"text-indigo-600"},H={key:0,class:"bg-violet-100 p-5 absolute z-50 w-full"},G={class:"ml-5 relative w-3/12 cursor-pointer"},J={class:"text-indigo-600"},K={key:0,class:"bg-violet-100 p-5 absolute z-50 w-full"},O=["onClick"],Q={class:"ml-5 relative w-3/12 cursor-pointer"},W={class:"text-indigo-600"},X={key:0,class:"bg-violet-100 p-5 absolute z-50 w-full"},se={__name:"product",setup(k){const{makes:m}=T(),i=V(),w=A(),{capitalizeFirstLetter:g}=D();j({title:`${i.params.make?g(i.params.make):"Something good"} in ${g(i.params.city)}`});const p=_({city:!1,make:!1,price:!1}),l=n=>{p.value[n]=!p.value[n]},r=_(""),C=()=>{if(r.value){if(!isNaN(parseInt(r.value)))throw B({statusCode:400,message:"Invalid city format"});l("city"),$(`/products/${r.value}/product/${i.params.make}`),r.value=""}},P=n=>{l("make"),$(`/products/${i.params.city}/product/${n}`)},o=L({min:"",max:""}),h=M(()=>{const n=i.query.minPrice,e=i.query.maxPrice;return!n&&!e?"Any":!n&&e?`<${e}`:n&&!e?`>${n}`:`$${n}~$${e}`}),z=()=>{l("price"),!(o.min>=o.max)&&w.push({query:{minPrice:o.min,maxPrice:o.max}})};return(n,e)=>{const N=F;return c(),u(b,null,[t("div",E,[t("div",I,[t("div",{onClick:e[0]||(e[0]=s=>l("city"))},[v(" Location: "),t("span",S,d(a(i).params.city==="city"?"Any":a(i).params.city),1)]),a(p).city?(c(),u("div",H,[f(t("input",{type:"text",placeholder:"City",class:"input input-bordered w-full max-w-xs","onUpdate:modelValue":e[1]||(e[1]=s=>R(r)?r.value=s:null)},null,512),[[y,a(r)]]),t("button",{class:"btn btn=primary mt-3 w-full",onClick:e[2]||(e[2]=s=>C())}," Apply ")])):x("",!0)]),t("div",G,[t("div",{onClick:e[3]||(e[3]=s=>l("make"))},[v(" Brand: "),t("span",J,d(a(i).params.make||"All"),1)]),a(p).make?(c(),u("ul",K,[(c(!0),u(b,null,U(a(m),s=>(c(),u("li",{class:"text-indigo-600 capitalize",key:s,onClick:Y=>P(s)},d(s),9,O))),128))])):x("",!0)]),t("div",Q,[t("div",{onClick:e[4]||(e[4]=s=>l("price"))},[v(" Price: "),t("span",W,d(a(h)),1)]),a(p).price?(c(),u("div",X,[f(t("input",{type:"number",placeholder:"Min",class:"input input-bordered w-full max-w-xs","onUpdate:modelValue":e[5]||(e[5]=s=>a(o).min=s)},null,512),[[y,a(o).min]]),f(t("input",{type:"number",placeholder:"Max",class:"input input-bordered w-full max-w-xs mt-3","onUpdate:modelValue":e[6]||(e[6]=s=>a(o).max=s)},null,512),[[y,a(o).max]]),t("button",{class:"btn btn=primary mt-3 w-full",onClick:e[7]||(e[7]=s=>z())}," Apply ")])):x("",!0)])]),q(N)],64)}}};export{se as default};