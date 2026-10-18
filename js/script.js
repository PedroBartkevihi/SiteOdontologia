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


	var secoes = document.querySelectorAll("[data-menu]");

	function marcaMenu(id){
		linksMenu.forEach(function(link){
			var atual = link.getAttribute("href") === "#" + id;
			link.parentElement.classList.toggle("selected", atual);
			if(atual){
				link.setAttribute("aria-current", "true");
			}else{
				link.removeAttribute("aria-current");
			}
		});
	}

	if(secoes.length && "IntersectionObserver" in window){
		var observaSecoes = new IntersectionObserver(function(entradas){
			entradas.forEach(function(entrada){
				if(entrada.isIntersecting){
					marcaMenu(entrada.target.getAttribute("data-menu"));
				}
			});
		}, { rootMargin: "-40% 0px -55% 0px" });

		secoes.forEach(function(secao){ observaSecoes.observe(secao); });
	}
})();
