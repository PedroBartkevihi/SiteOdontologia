# Clara Odontologia — Landing page de clínica (projeto de estudo)

**Ver online:** https://pedrobartkevihi.github.io/SiteOdontologia/

Landing page de uma clínica odontológica **fictícia**, especializada em alinhadores transparentes, criada **para fins de estudo**. O ponto de partida foi um exercício de curso de 2017 (o "Projeto 09"), feito em HTML e CSS com jQuery e Font Awesome, que retratava uma clínica real. O objetivo foi modernizar o código e o visual (layout, cores, tipografia, responsividade, acessibilidade e pequenas interações), mantendo as seções, a paleta verde-água, as ondas, as fotos redondas, a fonte Roboto e o estilo de escrita do código original.

A **Clara Odontologia**, a **Dra. Helena Prado**, o telefone, o e-mail e o endereço são inventados e não correspondem a nenhuma pessoa ou empresa real. O telefone começa com 1, o que nenhum número de assinante no Brasil faz, e o e-mail usa o domínio reservado `.example`; assim, os links `tel:` e `mailto:` não chegam a ninguém.

## O que mudou em relação ao original

| Original | Agora |
| --- | --- |
| Clínica, dentista e contatos reais; logo e selos de uma marca registrada de alinhadores | Clínica e dentista fictícias; o tratamento é chamado de "alinhadores transparentes" |
| Fotos de origem desconhecida, inclusive um "antes e depois" de paciente | Fotos do Pexels, sem rosto inteiro e sem metadados |
| jQuery 3.2.1 e Font Awesome 4.7 (~1,1 MB) para dois comportamentos e um ícone | JavaScript puro, sem dependências |
| Fundos de ondas em PNG (2,2 MB) e ícones em PNG pequenos | Ondas e ícones em SVG |
| Menu mobile inacabado ("FALTA O MENU MOBILE!") e links com `href=""` | Um menu só, que funciona pelo teclado e marca a seção visível |
| Formulários sem rótulo, com o campo de e-mail marcado como "\*Nome" e os dados indo para a URL | Rótulos, validação em português, confirmação de demonstração e nada enviado ao servidor |
| Lorem ipsum e a comparação repetindo "Aparelho Fixo" | Conteúdo completo, tirado dos mockups do próprio exercício |
| Linha do tempo das etapas escondida no celular | Seis passos visíveis em qualquer tela |
| Layout com `float`, `div.clear` e estilos inline | Flexbox, grid, variáveis em `:root` e `clamp()` |
| Sem `lang`, sem `h1`, imagens sem `alt` e contrastes de 1,5 a 3,2:1 | Estrutura semântica, `alt` em todas as fotos e contraste no padrão WCAG AA |

O diagnóstico completo do original e o plano estão em [`docs/diagnostico.md`](docs/diagnostico.md).

## Tecnologias

- HTML5 (página única, sem framework)
- CSS3 (variáveis em `:root`, flexbox, grid, `clamp()`, media queries e SVG em `data:` para as ondas)
- JavaScript (vanilla, sem dependências)
- [Google Fonts](https://fonts.google.com/) — Roboto

Sem etapa de build: é só abrir o `index.html`.

## Estrutura

```
Projeto6/
├── index.html          (topo, benefícios, sobre, depoimento, etapas, comparação, contato e rodapé)
├── favicon.svg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── rosto.jpg           (seção "sobre")
│   ├── round_images/       (as quatro fotos redondas do topo)
│   └── etapas/             (as três fotos das etapas)
├── docs/
│   ├── diagnostico.md      (diagnóstico do original e plano)
│   ├── decisoes.md         (decisões técnicas, com o estado de cada uma)
│   └── andamento.md        (passagem de trabalho)
├── AGENTS.md               (instruções para agentes de IA)
└── CLAUDE.md
```

## Interações (`js/script.js`)

- Menu mobile: abre e fecha pelo botão, com `Esc`, com clique fora ou ao escolher um link; informa o estado com `aria-expanded`.
- O traço do menu acompanha a seção visível na tela (`IntersectionObserver`), com `aria-current` no link da seção atual.
- Formulários do topo e do contato: validam e-mail, nome e telefone, mostram o erro embaixo do campo e levam o foco ao primeiro campo inválido. Como não há servidor, o envio só mostra uma confirmação dizendo que a página é uma demonstração.
- Sem JavaScript, a página continua usável: o menu vira uma lista de links e os botões de envio ficam desativados, com um aviso de demonstração.
- Respeita `prefers-reduced-motion`.

## Como executar

Abra o `index.html` no navegador, ou rode um servidor estático na pasta do projeto:

```bash
python -m http.server 8080
```

E acesse `http://localhost:8080`.

## Como o projeto foi feito

A modernização foi feita pelo Claude e revisada pelo Codex, com as decisões tomadas pelo Pedro. As regras desse trabalho estão no [`AGENTS.md`](AGENTS.md). As decisões, com quem propôs e quem decidiu, estão em [`docs/decisoes.md`](docs/decisoes.md), e o andamento, em [`docs/andamento.md`](docs/andamento.md).

## Próximos passos possíveis

- Envio real dos formulários, por um serviço como o Formspree (precisa de conta).
- Fotos em WebP com tamanhos diferentes para o celular.
- Testes automatizados (por exemplo, com o Playwright) para o menu e os formulários; trariam `package.json` e dependências a um projeto que hoje não tem nenhuma.

## Créditos

- Fotos do [Pexels](https://www.pexels.com/) (licença livre, sem necessidade de atribuição), recortadas e sem metadados: [1](https://www.pexels.com/photo/12474261/), [2](https://www.pexels.com/photo/28407749/), [3](https://www.pexels.com/photo/28110692/), [4](https://www.pexels.com/photo/3762441/), [5](https://www.pexels.com/photo/6502294/), [6](https://www.pexels.com/photo/3845985/), [7](https://www.pexels.com/photo/3762453/) e [8](https://www.pexels.com/photo/11887613/).
- Ícones, logo e ondas desenhados em SVG para este projeto, no estilo dos originais.

## Uso

Repositório de **estudo de front-end, sem fins comerciais**. O código-fonte (HTML, CSS e JavaScript) é de autoria de **Pedro Farias** e pode ser reaproveitado livremente. Toda a identidade (nome da clínica, dentista, textos e contatos) é fictícia.
