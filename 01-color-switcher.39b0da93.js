!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(){this.disabled=!0,a.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),500)})),a.addEventListener("click",(function(){e.disabled=!1,this.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.39b0da93.js.map