import{W as u,c as g,a as m}from"./useButtonFunctions-ncZId72i.js";import{b as _,w as r,e as x,o as b,d as t,g as T,v,h as a,i as C,_ as M,j as k}from"./index-dWZJ7Htj.js";const w={class:"form-group"},D=t("label",{for:"date"},"Date of Roundup",-1),V={class:"form-group clearfix",style:{"margin-top":"40px"}},H=t("span",{class:"glyphicon glyphicon-refresh"},null,-1),W={class:"btn-group pull-right"},B=t("span",{class:"glyphicon glyphicon-copy"},null,-1),J=["data-component"],L=t("span",{class:"glyphicon glyphicon-copy"},null,-1),N={style:{"border-collapse":"collapse","line-height":"16px"},width:"100%",cellspacing:"0",cellpadding:"0",align:"center"},S={class:"centermepadtop10",style:{"font-family":"helvetica","font-size":"19px",color:"#667574","font-weight":"200"},align:"left"},j=t("span",{style:{"font-weight":"400",color:"#22528e"}},"Latest posts",-1);function A(c,o,l,e,i,p){const s=x("Workspace");return b(),_(s,null,{form:r(()=>[t("div",w,[D,T(t("input",{class:"form-control",type:"text",id:"date","onUpdate:modelValue":o[0]||(o[0]=n=>e.state.date=n)},null,512),[[v,e.state.date]])]),t("div",V,[t("button",{class:"btn btn-default",id:"refresh",onClick:o[1]||(o[1]=(...n)=>e.reset&&e.reset(...n))},[H,a(" Reset")]),t("div",W,[t("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[2]||(o[2]=(...n)=>e.copy&&e.copy(...n)),"aria-label":"Copied HTML!"},[B,a(" Copy HTML")]),t("button",{class:"btn btn-info",id:"copyTextVersion","data-component":l.currentTemplate,onClick:o[3]||(o[3]=(...n)=>e.copyTextVersion&&e.copyTextVersion(...n)),"aria-label":"Copied Text!"},[L,a(" Copy text")],8,J)])])]),render:r(()=>[t("table",N,[t("tr",null,[t("td",S,[j,a(" "+C(e.state.date),1)])])])]),_:1})}const F={components:{Workspace:u},props:["currentTemplate"],setup(c){const o=new Date,l=o.getDate(),e=o.getMonth(),i=o.getFullYear(),s={date:`${["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][e]} ${l}, ${i}`};let n=k({...s});function d(){g()}function y(){const f=["Most recent posts: "+date.value,"(https://thedo.osteopathic.org)",""].join(`
`);return m(f)}function h(){n.date=s.date}return{state:n,props:c,reset:h,copy:d,copyTextVersion:y}}},O=M(F,[["render",A]]);export{O as default};