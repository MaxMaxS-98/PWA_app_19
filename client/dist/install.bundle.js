(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{console.log("beforeinstallprompt fired",t),t.preventDefault(),window.deferredPrompt=t,e.removeAttribute("hidden")})),e.addEventListener("click",(async()=>{const t=window.deferredPrompt;if(!t)return;t.prompt();const o=await t.userChoice;"accepted"===o.outcome?console.log("User accepted the A2HS prompt",o):console.log("User dismissed the A2HS prompt",o),window.deferredPrompt=null,e.setAttribute("hidden",!0)})),window.addEventListener("appinstalled",(e=>{console.log("a2hs installed"),window.deferredPrompt=null}))})();