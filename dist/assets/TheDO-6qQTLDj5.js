import{r as n,o as r,c as m,a as o,w as a,T as _,b as h,d as v,e,_ as T,N as f,S as b,R as S,u as C,f as N}from"./index-GHJKMDaw.js";const R={class:"blank"},k=e("optgroup",{label:"Stories"},[e("option",{value:"/the-do/top-story"},"Top Story"),e("option",{value:"/the-do/feature"},"Feature")],-1),w=e("optgroup",{label:"Other parts"},[e("option",{value:"/the-do/ad"},"Ad"),e("option",{value:"/the-do/note"},"Note"),e("option",{value:"/the-do/sponsored-content"},"Sponsored Content"),e("option",{value:"/the-do/date",selected:""},"Date")],-1),V={class:"toast-container toast-top-right",id:"toastContainer"},g={class:"toast"},y=e("div",{class:"toast-title"},null,-1),B=e("div",{class:"toast-message"},null,-1);function D(t,s,l,c,$,x){const p=n("select-template"),d=n("navbar"),u=n("RouterView");return r(),m("div",R,[o(d,{templateName:"The DO"},{select:a(()=>[o(p,{onTemplateSelected:c.handleTemplateSelect},{default:a(()=>[k,w]),_:1},8,["onTemplateSelected"])]),default:a(()=>[o(_,{name:"fade",appear:"",mode:"out-in"},{default:a(()=>[(r(),h(v(t.currentTemplate),{"current-template":t.currentTemplate},null,8,["current-template"]))]),_:1})]),_:1}),o(u),e("div",V,[e("div",g,[e("button",{class:"toast-close-button",type:"button",onClick:s[0]||(s[0]=(...i)=>t.toastClose&&t.toastClose(...i))},"x"),y,B])])])}const O={components:{Navbar:f,SelectTemplate:b,RouterView:S},setup(){C();const t=N();return{handleTemplateSelect:l=>{t.push(l)}}}},E=T(O,[["render",D]]);export{E as default};