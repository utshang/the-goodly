import{o as t,c as n,a as s,t as a,h as i,f as _,F as d,r as l,J as g}from"./entry.slxBjbjw.js";import{u}from"./fetch.TuZMNjhR.js";const h={class:"even:bg-gray-100 p-4"},p={class:"font-fold text-2xl"},f={class:"text-gray-700"},x={class:"flex items-center mt-4"},k={class:"text-green-700 mr-10"},y={class:"text-blue-500"},v={__name:"MessageCard",props:{message:Object},setup(e){return(c,o)=>(t(),n("div",h,[s("h1",p,a(e.message.name),1),s("p",f,a(e.message.message),1),s("div",x,[s("p",k,a(e.message.email),1),s("p",y,a(e.message.phone),1)])]))}},$=v,B={key:0,class:"rounded shadow mt-20"},b={key:1},M={__name:"[id]",setup(e){const c=i(),{data:o}=u(`/api/car/listings/${c.params.id}/message`,"$VVPC693QYJ");return(C,F)=>{const m=$;return _(o).length>0?(t(),n("div",B,[(t(!0),n(d,null,l(_(o),r=>(t(),g(m,{key:r.id,message:r},null,8,["message"]))),128))])):(t(),n("div",b,"There is no message."))}}};export{M as default};
