import{W as f,c as _,a as y}from"./useButtonFunctions-Gtg0q8Hh.js";import{g}from"./useMdRendererForAffiliates-ZBZJ_Ke2.js";import{e as h}from"./useEditorFromTextArea-Vu5XOOF9.js";import{m as i}from"./marked.esm-KKTQJ6Gi.js";import{r as x,b,w as d,o as T,e as o,g as v,v as k,h as a,_ as C,j as w,k as M,l as V}from"./index-MMltP9Ln.js";import"./markdown-dpzZz7rj.js";const H=o("h1",null,"News item",-1),L={class:"form-group"},B=o("label",{for:"input"},"Text (in Markdown)",-1),I={class:"form-group clearfix",style:{"margin-top":"40px"}},N=o("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},E=o("span",{class:"glyphicon glyphicon-copy"},null,-1),R=["data-component"],j=o("span",{class:"glyphicon glyphicon-copy"},null,-1),q={style:{"max-width":"590px",margin:"0 auto","background-color":"#fff"}},A={id:"rendered"},D=["innerHTML"];function F(c,e,s,t,l,p){const r=x("Workspace");return T(),b(r,null,{form:d(()=>[H,o("div",L,[B,v(o("textarea",{class:"form-control",id:"input","onUpdate:modelValue":e[0]||(e[0]=n=>t.input=n)},null,512),[[k,t.input]])]),o("div",I,[o("button",{class:"btn btn-default",id:"refresh",onClick:e[1]||(e[1]=(...n)=>t.reset&&t.reset(...n))},[N,a(" Reset")]),o("div",W,[o("button",{class:"btn btn-primary",id:"copyHtml",onClick:e[2]||(e[2]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[E,a(" Copy HTML")]),o("button",{class:"btn btn-info",id:"copyTextVersion","data-component":s.currentTemplate,onClick:e[3]||(e[3]=(...n)=>t.copyTextVersion&&t.copyTextVersion(...n)),"aria-label":"Copied Text!"},[j,a(" Copy text")],8,R)])])]),"render-container":d(()=>[o("div",q,[o("div",A,[o("div",{align:"left",bgcolor:"#ffffff",innerHTML:t.output},null,8,D)])])]),_:1})}const O={components:{Workspace:f},props:["currentTemplate"],setup(c){const e=g();i.use({renderer:e}),i.setOptions({gfm:!0,headerIds:!1});const s=`# Lorem ipsum dolor sit amet
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`,t=w(s);function l(){const u=document.getElementById("input");h(t,u,"calc(100vh - 275px)")}M(l);const p=V(()=>i(t.value));function r(){_()}function n(){y()}function m(){t.value=s}return{input:t,props:c,reset:m,copy:r,copyTextVersion:n,output:p}}},Q=C(O,[["render",F]]);export{Q as default};
