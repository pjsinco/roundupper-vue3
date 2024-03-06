import{W as j,c as D,a as O}from"./useButtonFunctions-UDrwH9tw.js";import{b as q,w as N,e as J,o as W,d as e,g as h,v as L,m as X,c as I,n as G,F as K,q as M,h as _,s as C,t as R,x as P,_ as Q,j as p,l as A,p as F}from"./index-Fgb5mHzP.js";import{r as Y,t as H,a as Z}from"./toNumber-vM6Efxel.js";var z=function(){return Y.Date.now()},$="Expected a function",ee=Math.max,te=Math.min;function oe(k,n,s){var o,r,c,i,t,d,m=0,a=!1,f=!1,x=!0;if(typeof k!="function")throw new TypeError($);n=H(n)||0,Z(s)&&(a=!!s.leading,f="maxWait"in s,c=f?ee(H(s.maxWait)||0,n):c,x="trailing"in s?!!s.trailing:x);function b(l){var u=o,y=r;return o=r=void 0,m=l,i=k.apply(y,u),i}function U(l){return m=l,t=setTimeout(v,n),a?b(l):i}function V(l){var u=l-d,y=l-m,E=n-u;return f?te(E,c-y):E}function T(l){var u=l-d,y=l-m;return d===void 0||u>=n||u<0||f&&y>=c}function v(){var l=z();if(T(l))return w(l);t=setTimeout(v,V(l))}function w(l){return t=void 0,x&&o?b(l):(o=r=void 0,i)}function g(){t!==void 0&&clearTimeout(t),m=0,o=d=r=t=void 0}function S(){return t===void 0?i:w(z())}function B(){var l=z(),u=T(l);if(o=arguments,r=this,d=l,u){if(t===void 0)return U(d);if(f)return clearTimeout(t),t=setTimeout(v,n),b(d)}return t===void 0&&(t=setTimeout(v,n)),i}return B.cancel=g,B.flush=S,B}const ne=e("div",{class:"row"},[e("div",{class:"col-xs-12"},[e("h1",{class:"component__title"},"Image block")])],-1),le={class:"row",slot:"form"},ie={class:"col-xs-12"},se={class:"form-group"},ae=e("label",{for:"text"},"Image URL",-1),re={class:"row"},de={class:"col-xs-6"},ce={class:"form-group"},pe=e("label",{for:"align"},"Alignment",-1),ue=["value"],me={class:"col-xs-6"},fe={class:"form-group",style:{"margin-bottom":"0"}},ge=e("label",{for:"displayWidth"},"Display width (in pixels)",-1),he=e("p",{class:"help-block"},"Full-width: 528px",-1),ve={class:"row"},_e={class:"col-xs-12"},xe={slot:"form"},be={class:"form-group"},ye=e("label",{for:"caption"},"Caption",-1),ke={class:"row"},Te={class:"col-xs-12"},we={class:"form-group"},Se={class:"checkbox-inline"},We={class:"checkbox-inline pull-right"},Ce={class:"row"},Ae={class:"col-xs-12"},Ue={class:"form-group clearfix",style:{"margin-top":"40px"}},Ve=e("span",{class:"glyphicon glyphicon-refresh"},null,-1),Be={class:"btn-group pull-right"},Le=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ie=["data-component"],Me=e("span",{class:"glyphicon glyphicon-copy"},null,-1),ze={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0","box-sizing":"content-box"}},Ee={id:"rendered"},Ne={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},Re={class:"mj-column-per-100 mj-outlook-group-fix",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Fe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"vertical-align":"top"},width:"100%"},He=["align"],je={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},De=["src","width"],Oe={key:0},qe=["align"];function Je(k,n,s,o,r,c){const i=J("Workspace");return W(),q(i,null,{form:N(()=>[ne,e("div",le,[e("div",ie,[e("div",se,[ae,h(e("input",{class:"form-control",type:"text",id:"imageUrl","onUpdate:modelValue":n[0]||(n[0]=t=>o.imageUrl=t)},null,512),[[L,o.imageUrl]])])])]),e("div",re,[e("div",de,[e("div",ce,[pe,h(e("select",{class:"form-control",id:"align","onUpdate:modelValue":n[1]||(n[1]=t=>o.selectedAlign=t)},[(W(!0),I(K,null,G(o.alignOptions,t=>(W(),I("option",{value:t.value},R(t.text),9,ue))),256))],512),[[X,o.selectedAlign]])])]),e("div",me,[e("div",fe,[ge,h(e("input",{class:"form-control",type:"number",min:"100",max:"600",id:"displayWidth","onUpdate:modelValue":n[2]||(n[2]=t=>o.displayWidth=t)},null,512),[[L,o.displayWidth]]),he])])]),e("div",ve,[e("div",_e,[e("div",xe,[e("div",be,[ye,h(e("input",{class:"form-control",type:"text",id:"caption","onUpdate:modelValue":n[3]||(n[3]=t=>o.caption=t)},null,512),[[L,o.caption]])])])])]),e("div",ke,[e("div",Te,[e("div",we,[e("div",Se,[e("label",null,[h(e("input",{type:"checkbox",name:"spaceAbove","onUpdate:modelValue":n[4]||(n[4]=t=>o.spaceAbove=t)},null,512),[[M,o.spaceAbove]]),_("Space above")]),e("label",null,[h(e("input",{type:"checkbox",name:"spaceBelow","onUpdate:modelValue":n[5]||(n[5]=t=>o.spaceBelow=t)},null,512),[[M,o.spaceBelow]]),_("Space below")])]),e("div",We,[e("label",null,[h(e("input",{type:"checkbox",name:"bleed","onUpdate:modelValue":n[6]||(n[6]=t=>o.bleed=t)},null,512),[[M,o.bleed]]),_("Bleed")])])])])]),e("div",Ce,[e("div",Ae,[e("div",Ue,[e("button",{class:"btn btn-default",id:"refresh",onClick:n[7]||(n[7]=(...t)=>o.reset&&o.reset(...t))},[Ve,_(" Reset")]),e("div",Be,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:n[8]||(n[8]=(...t)=>o.copy&&o.copy(...t)),"aria-label":"Copied HTML!"},[Le,_(" Copy HTML")]),e("button",{class:"btn btn-info",id:"copyTextVersion","data-component":s.currentTemplate,onClick:n[9]||(n[9]=(...t)=>o.copyTextVersion&&o.copyTextVersion(...t)),"aria-label":"Copied Text!"},[Me,_(" Copy text")],8,Ie)])])])])]),"render-container":N(()=>[e("div",ze,[e("div",Ee,[e("table",Ne,[e("tbody",null,[e("tr",null,[e("td",{style:C(o.spacingStyle)},[e("div",Re,[e("table",Fe,[e("tbody",null,[e("tr",null,[e("td",{class:"pardot-region-type-image",align:o.selectedAlign,style:{"font-size":"0px",padding:"0","word-break":"break-word"}},[e("table",je,[e("tbody",null,[e("tr",null,[e("td",{style:C({width:o.displayWidthNumber+"px"})},[e("img",{src:o.imageUrl,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:o.displayWidthNumber,height:"auto"},null,8,De)],4)])])])],8,He)]),o.caption!=""?(W(),I("tr",Oe,[e("td",{align:o.selectedAlign,style:C(o.captionTdStyle)},[e("div",{style:C(o.captionStyle)},R(o.caption),5)],12,qe)])):P("",!0)])])])],4)])])])])])]),_:1})}const Xe={components:{Workspace:j},props:["currentTemplate"],setup(k){const n="https://resources.osteopathic.org/l/979203/2024-02-08/d3kmr/979203/1707396067as5M6Jke/ph_250sq.png",s=p(n),o=p([{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]),r=p("center"),c=p(!0),i=p(!0),t=p(!1),d=p("Lorem ipsum dolor"),m=p(""),a=p(253),f=()=>{s.value=n,r.value="center",c.value=!0,i.value=!0,d.value="Lorem ipsum dolor",a.value=253,t.value=!1};function x(){D()}function b(){O()}const U=A(()=>({paddingTop:c.value?"24px":"0",paddingRight:t.value?"0":"36px",paddingBottom:i.value?"24px":"0",paddingLeft:t.value?"0":"36px",direction:"ltr",fontSize:"0px",textAlign:"center"})),V=A(()=>({fontSize:"0px",paddingTop:"8px",paddingLeft:t.value?"36px":"0",paddingRight:t.value?"36px":"0",paddingBottom:"0",wordBreak:"break-word"})),T=A(()=>({fontFamily:"Arial, Helvetica, sans-serif",fontSize:"14px",fontWeight:"normal",lineHeight:"21px",textAlign:r.value,color:"#666666"})),v=A(()=>{const g=/(\d+)/gm,S=`${a.value}`.match(g);return S?S[0]:null});function w(g){t.value?g>600&&(a.value=600):g>528&&(a.value=528)}return F(a,oe(w,250)),F(t,g=>{t.value||a.value>528&&(a.value=528)}),{displayWidth:a,displayWidthNumber:v,bleed:t,altText:m,caption:d,spacingStyle:U,captionStyle:T,captionTdStyle:V,alignOptions:o,imageUrl:s,selectedAlign:r,spaceAbove:c,spaceBelow:i,reset:f,copy:x,copyTextVersion:b}}},Qe=Q(Xe,[["render",Je]]);export{Qe as default};
