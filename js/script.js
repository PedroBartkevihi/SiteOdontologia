(function(){
	"use strict";

	document.documentElement.classList.add("js");

	var toggle = document.querySelector("nav.menu .mobile");
	var menu = document.querySelector("#menu");
	var linksMenu = document.querySelectorAll("#menu a");
	var telaMobile = window.matchMedia("(max-width: 900px)");


	function abreMenu(){
		menu.classList.add("aberto");
		toggle.classList.add("ativo");
		toggle.setAttribute("aria-expanded", "true");
		toggle.setAttribute("aria-label", "Fechar menu");
	}

	function fechaMenu(){
		menu.classList.remove("aberto");
		toggle.classList.remove("ativo");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Abrir menu");
	}

	if(toggle && menu){
		toggle.addEventListener("click", function(){
			if(menu.classList.contains("aberto")){
				fechaMenu();
			}else{
				abreMenu();
			}
		});

		linksMenu.forEach(function(link){
			link.addEventListener("click", fechaMenu);
		});

		document.addEventListener("keydown", function(e){
			if(e.key === "Escape" && menu.classList.contains("aberto")){
				fechaMenu();
				toggle.focus();
			}
		});

		document.addEventListener("click", function(e){
			if(!menu.contains(e.target) && !toggle.contains(e.target)){
				fechaMenu();
			}
		});

		telaMobile.addEventListener("change", function(e){
			if(!e.matches){
				fechaMenu();
			}
		});
	}
})();
