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


	var mensagensErro = {
		nome: { vazio: "Informe seu nome.", curto: "O nome precisa ter pelo menos 2 letras." },
		email: { vazio: "Informe seu e-mail.", formato: "Digite um e-mail válido, como nome@exemplo.com." },
		telefone: { formato: "Digite o telefone com DDD: 10 ou 11 números." }
	};

	function mostraErro(campo, texto){
		var caixa = campo.closest(".form-group");
		var aviso = caixa.querySelector(".erro-campo");

		if(!aviso){
			aviso = document.createElement("p");
			aviso.className = "erro-campo";
			aviso.id = "erro-" + campo.id;
			caixa.appendChild(aviso);
		}

		aviso.textContent = texto;
		aviso.hidden = (texto === "");
		caixa.classList.toggle("invalido", texto !== "");

		if(texto){
			campo.setAttribute("aria-invalid", "true");
			campo.setAttribute("aria-describedby", aviso.id);
		}else{
			campo.removeAttribute("aria-invalid");
			campo.removeAttribute("aria-describedby");
		}
	}

	function validaCampo(campo){
		var valor = campo.value.trim();
		var regras = mensagensErro[campo.name] || {};
		var erro = "";

		if(valor === ""){
			if(campo.required){
				erro = regras.vazio;
			}
		}else if(campo.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)){
			erro = regras.formato;
		}else if(campo.type === "tel"){
			var numeros = valor.replace(/\D/g, "").length;
			if(numeros < 10 || numeros > 11){
				erro = regras.formato;
			}
		}else if(campo.minLength > 0 && valor.length < campo.minLength){
			erro = regras.curto;
		}

		mostraErro(campo, erro);
		return erro === "";
	}

	function iniciaFormulario(form, mensagemOk){
		var campos = form.querySelectorAll("input:not([type=submit]), textarea");
		var botao = form.querySelector("[type=submit]");
		var status = form.querySelector(".form-status");

		form.noValidate = true;
		botao.disabled = false;

		campos.forEach(function(campo){
			campo.addEventListener("blur", function(){
				if(campo.value.trim() !== ""){
					validaCampo(campo);
				}
			});

			campo.addEventListener("input", function(){
				if(campo.getAttribute("aria-invalid") === "true"){
					validaCampo(campo);
				}
			});
		});

		form.addEventListener("submit", function(e){
			e.preventDefault();

			var primeiroInvalido = null;

			campos.forEach(function(campo){
				if(!validaCampo(campo) && !primeiroInvalido){
					primeiroInvalido = campo;
				}
			});

			if(primeiroInvalido){
				status.textContent = "";
				status.classList.remove("sucesso");
				primeiroInvalido.focus();
				return;
			}

			var nome = form.elements.nome ? form.elements.nome.value.trim().split(/\s+/)[0] : "";

			form.reset();
			status.textContent = mensagemOk(nome);
			status.classList.add("sucesso");
		});
	}

	var formChamada = document.querySelector(".form-chamada");
	var formContato = document.querySelector(".form-contato");

	if(formChamada){
		iniciaFormulario(formChamada, function(){
			return "Pronto! Como esta página é uma demonstração, o e-mail não foi enviado de verdade.";
		});
	}

	if(formContato){
		iniciaFormulario(formContato, function(nome){
			return "Pronto, " + nome + "! Como esta página é uma demonstração, a mensagem não foi enviada de verdade.";
		});
	}
})();
