import{c as y,a as g}from"./useButtonFunctions-X_uKD_qn.js";import{k as e,m as v}from"./index-OZfifPv8.js";function w(i={}){let t=Object.assign({},{spaceAbove:!0,spaceBelow:!0,text:"Learn more",link:""},i);const s=e(t.text),r=e(t.link),a=e(t.spaceAbove),c=e(t.spaceBelow);function p(){y(f=>{const n=new DocumentFragment,l=document.createElement("div");l.innerHTML=f,n.append(l);const o=n.getElementById("msoPadding");if(o!==null){const x=`${o.getAttribute("style")} mso-padding-alt: 10px 32px;`;o.setAttribute("style",x)}return n.firstElementChild.innerHTML})}function d(){g()}function u(){s.value="Learn more",r.value=""}const m=v(()=>({direction:"ltr",fontSize:"0px",paddingTop:a.value?"20px":"0",paddingBottom:c.value?"20px":"0",paddingLeft:"0px",textAlign:"center"}));return{text:s,link:r,spaceAbove:a,spaceBelow:c,copy:p,copyTextVersion:d,reset:u,buttonTdStyle:m}}export{w as u};