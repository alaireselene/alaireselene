import{h as u,u as r,i as c,j as i,k as o,P as m,r as v}from"./app.e4ea9ed7.js";import{S as h}from"./SkipLink.87951796.js";var L=u({name:"404",setup(){var a;const n=r(),e=c(),s=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:l}=i({to:(a=e.value.home)!==null&&a!==void 0?a:n.value});return()=>[o(h),o(v("CommonWrapper"),{sidebar:!1},()=>o("main",{class:"page not-found",id:"main-content"},[o(m),o("blockquote",s()),o("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),o("button",{class:"action-button",onClick:()=>l()},e.value.routeLocales.home)]))]}});export{L as default};
