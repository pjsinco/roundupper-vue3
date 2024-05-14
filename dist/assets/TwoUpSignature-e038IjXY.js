import{W as J,c as Q,a as X}from"./useButtonFunctions-X_uKD_qn.js";import{u as Y}from"./renderer-aoa-general-P0pOEpI4.js";import{e as z}from"./useEditorFromTextArea-YaS29rLp.js";import"./markdown--qxOycaS.js";import{m as x}from"./marked.esm-KKTQJ6Gi.js";import{b as Z,w as M,e as $,o as ee,d as e,g as r,v as p,A as te,s as oe,h as U,x as v,_ as ne,k as s,q as V,m as C,l as se}from"./index-OZfifPv8.js";import"./styles-base-aoa-general-5iRRJacY.js";const ie=e("h1",{class:"component__title"},"Two-up signature",-1),le={class:"item-group"},de=e("h4",null,"Signature 1",-1),ae={class:"form-group"},re=e("label",{for:"sig1Url"},"Image URL",-1),ge={class:"form-group"},ce=e("label",{for:"sig1Input"},"Text (in Markdown)",-1),pe={class:"form-group"},ue=e("label",{for:"sig1ImageWidth"},"Image size",-1),me={class:"form-group"},fe=e("label",{for:"sig1Spacer"},"Image spacer",-1),he={class:"item-group"},_e=e("h4",null,"Signature 2",-1),xe={class:"form-group"},ve=e("label",{for:"sig2Url"},"Image URL",-1),be={class:"form-group"},we=e("label",{for:"sig2Input"},"Text (in Markdown)",-1),ye={class:"form-group"},Ie=e("label",{for:"sig2ImageWidth"},"Image size",-1),ke={class:"form-group"},Ue=e("label",{for:"sig2Spacer"},"Image spacer",-1),Se={class:"row"},Ee={class:"col-xs"},Te={class:"form-group"},Le={class:"checkbox-inline"},We=["disabled"],ze={class:"form-group clearfix",style:{"margin-top":"40px"}},Me=e("span",{class:"glyphicon glyphicon-refresh"},null,-1),Ve={class:"btn-group pull-right"},Ce=e("span",{class:"glyphicon glyphicon-copy"},null,-1),Ge={style:{"max-width":"600px",margin:"0 auto",padding:"24px 0","background-color":"#fff",border:"1px dotted #d0d0d0",overflow:"hidden"}},Pe={id:"rendered"},He={align:"center",border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{background:"#ffffff","background-color":"#ffffff",width:"100%"}},Ae={style:{direction:"ltr","font-size":"0px",padding:"0px","text-align":"center"}},Be=e("span",{id:"mso_0"},null,-1),Ne={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-left",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Fe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Oe={style:{"vertical-align":"top",padding:"0 18px 24px 36px"}},Re={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},je={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},qe=["src","width"],De={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},Ke=["innerHTML"],Je=e("span",{id:"mso_1"},null,-1),Qe={class:"mj-column-per-50 mj-outlook-group-fix two-up-image-right",style:{"font-size":"0px","text-align":"left",direction:"ltr",display:"inline-block","vertical-align":"top",width:"100%"}},Xe={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},Ye={style:{"vertical-align":"top",padding:"0 36px 24px 18px"}},Ze={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",width:"100%"},$e={border:"0",cellpadding:"0",cellspacing:"0",role:"presentation",style:{"border-collapse":"collapse","border-spacing":"0px"}},et=["src","width"],tt={align:"left",style:{"font-size":"0px",padding:"0","word-break":"break-word"}},ot=["innerHTML"],nt=e("span",{id:"mso_2"},null,-1);function st(G,o,S,t,E,T){const u=$("Workspace");return ee(),Z(u,null,{form:M(()=>[ie,e("div",le,[de,e("div",ae,[re,r(e("input",{class:"form-control",type:"text",id:"sig1Url","onUpdate:modelValue":o[0]||(o[0]=n=>t.sig1Url=n)},null,512),[[p,t.sig1Url]])]),e("div",ge,[ce,r(e("textarea",{class:"form-control",id:"sig1Input","onUpdate:modelValue":o[1]||(o[1]=n=>t.sig1Input=n),rows:"4"},null,512),[[p,t.sig1Input]])]),e("div",pe,[ue,r(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig1ImageWidth",ref:"sig1Image","onUpdate:modelValue":o[2]||(o[2]=n=>t.sig1ImageWidth=n),onInput:o[3]||(o[3]=n=>t.showGuides=!0)},null,544),[[p,t.sig1ImageWidth]])]),e("div",me,[fe,r(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig1Spacer",ref:"sig1Spacer","onUpdate:modelValue":o[4]||(o[4]=n=>t.sig1Padding=n),onInput:o[5]||(o[5]=n=>t.showGuides=!0)},null,544),[[p,t.sig1Padding]])])]),e("div",he,[_e,e("div",xe,[ve,r(e("input",{class:"form-control",type:"text",id:"sig2Url","onUpdate:modelValue":o[6]||(o[6]=n=>t.sig2Url=n)},null,512),[[p,t.sig2Url]])]),e("div",be,[we,r(e("textarea",{class:"form-control",id:"sig2Input","onUpdate:modelValue":o[7]||(o[7]=n=>t.sig2Input=n),rows:"4"},null,512),[[p,t.sig2Input]])]),e("div",ye,[Ie,r(e("input",{class:"form-control",type:"range",max:"252",step:"1",min:"0",id:"sig2ImageWidth",ref:"sig2Image","onUpdate:modelValue":o[8]||(o[8]=n=>t.sig2ImageWidth=n),onInput:o[9]||(o[9]=n=>t.showGuides=!0)},null,544),[[p,t.sig2ImageWidth]])]),e("div",ke,[Ue,r(e("input",{class:"form-control",type:"range",max:"100",step:"1",min:"0",id:"sig2Spacer",ref:"sig2Spacer","onUpdate:modelValue":o[10]||(o[10]=n=>t.sig2Padding=n),onInput:o[11]||(o[11]=n=>t.showGuides=!0)},null,544),[[p,t.sig2Padding]])])]),e("div",Se,[e("div",Ee,[e("div",Te,[e("div",Le,[e("label",{class:te({disabled:!t.canShowGuides})},[r(e("input",{type:"checkbox",name:"showGuides","onUpdate:modelValue":o[12]||(o[12]=n=>t.showGuides=n),disabled:!t.canShowGuides},null,8,We),[[oe,t.showGuides]]),U("Show guide")],2)])])])]),e("div",ze,[e("button",{class:"btn btn-default",id:"refresh",onClick:o[13]||(o[13]=(...n)=>t.reset&&t.reset(...n))},[Me,U(" Reset")]),e("div",Ve,[e("button",{class:"btn btn-primary",id:"copyHtml",onClick:o[14]||(o[14]=(...n)=>t.copy&&t.copy(...n)),"aria-label":"Copied HTML!"},[Ce,U(" Copy HTML")])])])]),"render-container":M(()=>[e("div",Ge,[e("div",Pe,[e("table",He,[e("tbody",null,[e("tr",null,[e("td",Ae,[Be,e("div",Ne,[e("table",Fe,[e("tbody",null,[e("tr",null,[e("td",Oe,[e("table",Re,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:v({fontSize:"0px",padding:t.sig1Padding/2+"px 0 "+(12+t.sig1Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",je,[e("tbody",null,[e("tr",null,[e("td",{style:v({width:t.sig1ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig1Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig1ImageWidth,height:"auto"},null,8,qe)],4)])])])],4)]),e("tr",null,[e("td",De,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig1Output,ref:"guideEl"},null,8,Ke)])])])])])])])])]),Je,e("div",Qe,[e("table",Xe,[e("tbody",null,[e("tr",null,[e("td",Ye,[e("table",Ze,[e("tbody",null,[e("tr",null,[e("td",{align:"left",style:v({fontSize:"0px",padding:t.sig2Padding/2+"px 0 "+(12+t.sig2Padding/2)+"px 0",wordBreak:"break-word"})},[e("table",$e,[e("tbody",null,[e("tr",null,[e("td",{style:v({width:t.sig2ImageWidth+"px"})},[e("img",{alt:"Signature",src:t.sig2Url,style:{border:"0",display:"block",outline:"none","text-decoration":"none",height:"auto",width:"100%","font-size":"13px"},width:t.sig2ImageWidth,height:"auto"},null,8,et)],4)])])])],4)]),e("tr",null,[e("td",tt,[e("div",{style:{"font-family":"Arial, Helvetica, sans-serif","font-size":"16px","font-weight":"normal","line-height":"24px","text-align":"left",color:"#2a2a2a"},innerHTML:t.sig2Output},null,8,ot)])])])])])])])])]),nt])])])])])])]),_:1})}const it={components:{Workspace:J},props:["currentTemplate"],setup(G){const o="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwq/979203/1708018507zc9ErKRp/signature_monka_228_2x.png",S="https://resources.osteopathic.org/l/979203/2024-02-15/d6dwm/979203/1708018506pNSVFVsl/signature_creason_228_2x.png",t=`**Lorem Ipsum Dolor**  
Nullam Fringilla`,E=s(o),T=s(S),u=s(null),n=s(null),P=s(0),H=s(0),b=s(null),w=s(null),A=s(252),B=s(252),m=s(t),y=s(t),d=s(!1);let I=d.value;const L=s(null),k=s(!0),W="guide";V(m,()=>{m.value==""?k.value=!1:k.value=!0}),V(d,()=>{const a=L.value.querySelector("p");if(d.value===!0){let i=null,l=null;if(a){const g=a.firstChild;if(g.tagName=="SPAN")return;if(g.nodeType==1?(i=g.firstChild,l=g):g.nodeType==3&&(i=g,l=a),i&&l){const c=document.createElement("span");c.appendChild(document.createTextNode(i.nodeValue)),c.style.position="relative",c.setAttribute("id",W),c.classList.add("guide"),l.replaceChild(c,i)}}}else{const i=document.getElementById(W);i.parentElement.innerHTML=i.innerHTML}});const{renderer:N}=Y();x.use({renderer:N}),x.setOptions({gfm:!0,headerIds:!1});const F=C(()=>x(m.value)),O=C(()=>x(y.value));function R(){const a=document.getElementById("sig1Input");z(m,a).on("change",()=>{d.value=!1});const l=document.getElementById("sig2Input");z(y,l)}function f(a){I=d.value}function h(a){d.value=I}function j(){function a(i){const l=['<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="two-up-image-left-outlook" style="vertical-align:top;width:300px;" ><![endif]-->','<!--[if mso | IE]></td><td class="two-up-image-right-outlook" style="vertical-align:top;width:300px;" ><![endif]-->',"<!--[if mso | IE]></td></tr></table><![endif]-->"],g=/<span.?id="mso_\d"><\/span>/gm,c=[...i.matchAll(g)];console.log(`Found ${c.length} targets for ${l.length} replacements`);for(let _=0,K=l.length;_<K;_++)i=i.replace(c[_],l[_]);return i}d.value=!1,I=d.value,Q(a)}function q(){X()}function D(){window.location.reload()}return se(()=>{R(),u.value.addEventListener("mousedown",f),u.value.addEventListener("mouseup",h),b.value.addEventListener("mousedown",f),b.value.addEventListener("mouseup",h),n.value.addEventListener("mousedown",f),n.value.addEventListener("mouseup",h),w.value.addEventListener("mousedown",f),w.value.addEventListener("mouseup",h)}),{sig1Image:u,sig2Image:n,sig1Url:E,sig2Url:T,sig1ImageWidth:A,sig2ImageWidth:B,sig1Spacer:b,sig2Spacer:w,sig1Padding:P,sig2Padding:H,sig1Input:m,sig2Input:y,sig1Output:F,sig2Output:O,showGuides:d,canShowGuides:k,guideEl:L,copy:j,copyTextVersion:q,reset:D}}},ut=ne(it,[["render",st]]);export{ut as default};
