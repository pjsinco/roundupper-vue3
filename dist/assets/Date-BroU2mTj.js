import{W as f,r as g,c as u,a as m}from"./useButtonFunctions-VvMJiUt7.js";import{r as _,b as x,w as i,o as b,e as t,g as T,v,h as n,t as C,_ as M,i as k}from"./index-bHBSUCkW.js";const w={class:"form-group"},D=t("label",{for:"date"},"Date of Roundup",-1),V={class:"form-group clearfix",style:{"margin-top":"40px"}},H=t("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},B=t("span",{class:"glyphicon glyphicon-copy"},null,-1),J=["data-component"],L=t("span",{class:"glyphicon glyphicon-copy"},null,-1),N={style:{"border-collapse":"collapse","line-height":"16px"},width:"100%",cellspacing:"0",cellpadding:"0",align:"center"},S={class:"centermepadtop10",style:{"font-family":"helvetica","font-size":"19px",color:"#667574","font-weight":"200"},align:"left"},A=t("span",{style:{"font-weight":"400",color:"#22528e"}},"Latest posts",-1);function F(c,o,a,e,r,p){const l=_("Workspace");return b(),x(l,null,{form:i(()=>[t("div",w,[D,T(t("input",{class:"form-control",type:"text",id:"date","onUpdate:modelValue":o[0]||(o[0]=s=>e.state.date=s)},null,512),[[v,e.state.date]])]),t("div",V,[t("button",{class:"btn btn-default",id:"refresh",onClick:o[1]||(o[1]=(...s)=>e.reset&&e.reset(...s))},[H,n(" Reset")]),t("div",W,[t("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[2]||(o[2]=(...s)=>e.copy&&e.copy(...s)),"aria-label":"Copied HTML!"},[B,n(" Copy HTML")]),t("button",{class:"btn btn-info",id:"copyTextVersion","data-component":a.currentTemplate,onClick:o[3]||(o[3]=(...s)=>e.copyTextVersion&&e.copyTextVersion(...s)),"aria-label":"Copied Text!"},[L,n(" Copy text")],8,J)])])]),render:i(()=>[t("table",N,[t("tr",null,[t("td",S,[A,n(" "+C(e.state.date),1)])])])]),_:1})}const R={components:{Workspace:f},props:["currentTemplate"],setup(c){const o=new Date,a=o.getDate(),e=o.getMonth(),r=o.getFullYear(),l={date:`${["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][e]} ${a}, ${r}`},s=k({...l});function d(){u()}function y(){const h=["Most recent posts: "+date.value,"(https://thedo.osteopathic.org)",""].join(`
`);return m(h)}return{state:s,props:c,reset:g,copy:d,copyTextVersion:y}}},O=M(R,[["render",F]]);export{O as default};