!function(){document.querySelector(".loader"),document.querySelector(".error");var e="https://api.thecatapi.com/v1",t="live_vdjq6J9uGaAJpVe8CZrdne8KDK7tWhZFs0NMzSeBgCbKcrNYzL3wFnXM3ELZcOP7";var n=document.querySelector(".breed-select"),r=document.querySelector(".cat-info"),c=document.querySelector(".loader"),o=(document.querySelector(".error"),[]);fetch("".concat(e,"/breeds?api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){e=e.filter((function(e){var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})),o=e;for(var t=0;t<o.length;t++){var n=o[t],r=document.createElement("option");n.image&&(r.value=n.id,r.innerHTML="".concat(n.name),document.querySelector(".breed-select").appendChild(r))}})).catch((function(e){console.log(e),e.removeAttribute("hidden")})),n.addEventListener("change",(function(){var n=this;c.removeAttribute("hidden"),setTimeout((function(){c.setAttribute("hidden",!0),r.innerHTML="";var o,i=n.options[n.selectedIndex];a=i.value,console.log("Selected Value:",a),(o=a,fetch("".concat(e,"/images/search?breed_ids=").concat(o,"&api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){console.log(e[0]);var t=e[0],n=t.breeds[0],c='\n      <img src = "'.concat(t.url,'" class="cat-img" width="500"/>\n      <p class="cat-desc">').concat(n.description,'</p>\n      <p class="cat-temperament">').concat(n.temperament,"</p>\n    ");r.innerHTML=c}))}),500)}));var a=""}();
//# sourceMappingURL=index.bc0f0dbe.js.map
