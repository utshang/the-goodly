import{u as n}from"./useSupabaseClient.BGqNFx6O.js";import{u as r,c,e as i,t as l,f as u,a as o,o as p}from"./entry.CIdVOj8v.js";const _={class:"mt-10"},g=o("h1",{class:"text-5xl font-bold mb-5"},"Login",-1),h={__name:"login",setup(m){const e=n(),t=r(),a=async()=>{const{error:s}=e.auth.signInWithOAuth({provider:"google"});s&&console.log(s)};return(s,b)=>(p(),c("div",_,[i(l(u(t))+" ",1),g,o("button",{class:"btn btn-primary",onClick:a},"Login with Google")]))}};export{h as default};