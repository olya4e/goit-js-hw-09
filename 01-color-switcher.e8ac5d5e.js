const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;e.addEventListener("click",(o=>{d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(t=>{clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.e8ac5d5e.js.map
