# Diagnóstico e plano da modernização

Escrito em 18/10/2026 pelo Claude, antes de qualquer código. As escolhas do plano estão em [`decisoes.md`](decisoes.md), cada uma com o estado.

## O original

- **Origem:** exercício de curso de 2017 (`projeto_09`), guardado fora do repositório. É a landing page de uma clínica odontológica **real** de Florianópolis, para o tratamento com alinhadores transparentes de uma marca registrada. Este repositório não reproduz o nome, a foto, o telefone, o e-mail nem o endereço reais da clínica ou da dentista.
- **Arquivos:** 30, somando 28 MB. Desses, 24 MB são os dois mockups do layout (desktop e celular). O resto: `index.html`, `css/style.css`, Font Awesome 4.7 local (dois CSS e seis fontes), uma pasta `js` vazia e as imagens: dois fundos de ondas em PNG (1,3 MB e 0,9 MB), o logo, seis ícones, quatro fotos redondas, três fotos das etapas, uma foto de rosto e o logo da marca do alinhador.
- **Seções:** topo (logo, menu, telefone; chamada com formulário de e-mail e quatro fotos redondas) → seis diferenciais → sobre (foto e dois blocos de texto) → depoimento (frase sobre fundo de ondas) → etapas (três fotos e uma linha do tempo de quatro passos) → diferenças (aparelho tradicional × alinhador) → contato (dados e formulário) → rodapé (logo).
- **JavaScript:** jQuery 3.2.1 com duas funções. Na passagem do mouse, o item do menu ganha a classe `selected` e fica com ela. No celular, o ícone abre e fecha a lista `ul.nav-desktop`. O próprio HTML avisa, num comentário: "FALTA O MENU MOBILE!".
- **Mockups:** mostram o que o HTML não terminou: seis passos com título, os itens reais da comparação, o texto dos diferenciais, o placeholder "Seu email", o botão "Agendar avaliação gratuita", a foto da dentista com selos no contato e o logo do rodapé sobre uma onda.

## Pontos positivos

- A ordem das seções conta uma história clara: benefício → quem faz → prova → como funciona → comparação → contato.
- Paleta coerente em tons de verde-água, ondas suaves, fotos redondas, botões e campos arredondados, ícones de traço verde e a comparação com itens riscados em vermelho.
- Já usa flexbox nos diferenciais, `box-sizing: border-box` global, um `.container` reaproveitado e quatro media queries (1300, 1024, 900 e 480px).
- Nomes de classe em português e comentários no fechamento das divs.

## Bugs

1. A meta viewport usa `;` no lugar de `,` (inválido) e `maximum-scale=1.0`, que impede o zoom no celular.
2. Todos os links têm `href=""`: o menu só recarrega a página, e nenhuma seção tem `id`.
3. A classe `selected` do menu muda no hover e não volta: o traço fica no último item em que o mouse passou, sem relação com a seção visível.
4. Menu mobile:
   - é aberto por um `<i>` dentro de um `<h3>`, então não funciona pelo teclado e não informa se está aberto;
   - a lista fica fora do cabeçalho, presa em `top: 70px`;
   - não fecha ao escolher um item;
   - aberto no celular, continua visível se a janela crescer para o tamanho de desktop, porque o `slideToggle` deixa `display: block` no elemento e nenhuma regra o esconde no desktop.
5. Formulário do topo: sem rótulo nem placeholder. O envio recarrega a página e põe o e-mail na URL (`?email=…&acao=…`).
6. Formulário de contato:
   - o campo de e-mail é `type="text"` com o placeholder "\*Nome", copiado do campo anterior;
   - nenhum campo tem rótulo;
   - o telefone é obrigatório, mas o mockup diz "opcional";
   - o envio também põe nome, e-mail e telefone na URL.
7. Em telas de até 480px, a linha do tempo das etapas some inteira (`.etapas__group2 { display: none; }`): no celular não há "como funciona".
8. No celular, o telefone do cabeçalho some, e em nenhum lugar o número é um link `tel:`.
9. A seção "sobre" sobrepõe a seguinte com `top: 30px` e `z-index`, e o depoimento sobe com `top: -70px` relativo, que desloca o desenho mas deixa o espaço original vazio.
10. Duas das três fotos das etapas não têm legenda no HTML (o mockup tem).

## Acessibilidade

- Falta `lang` no `<html>`. Não há `<h1>`: tudo é `<h2>`, inclusive o título de cada diferencial, e o ícone do menu está num `<h3>`.
- Nenhuma imagem tem `alt`.
- Os formulários dependem só de placeholder; o campo de e-mail do topo e os campos de texto do contato tiram o contorno de foco (`outline: 0`) sem pôr nada no lugar.
- Contraste muito abaixo do mínimo (4,5:1 no texto comum, 3:1 no texto grande):

| Texto | Contraste |
| --- | --- |
| Menu branco sobre o fundo verde-claro do topo (medido nos pixels do PNG) | 1,45 a 1,56 |
| Títulos em `#a9c4b8` sobre branco | 1,86 |
| Destaques em `#7dd5b0` sobre branco | 1,75 |
| Destaques em `#03ca9f` sobre branco | 2,11 |
| Texto branco no botão `#00daaa` | 1,81 |
| Títulos e textos em `#509d87` sobre branco | 3,22 |
| `#509d87` sobre o fundo `#98FCDE` do contato | 2,66 |

## Código e dependências

- jQuery 3.2.1 (2017), carregado de CDN sem SRI, para dois comportamentos. Essa versão tem falhas conhecidas (CVE-2019-11358, CVE-2020-11022 e CVE-2020-11023).
- Font Awesome 4.7 (cerca de 1,1 MB em oito arquivos) para um único ícone, o do menu.
- Os dois fundos de ondas pesam 2,2 MB, e a foto de rosto, 560 KB, em PNG.
- Layout com `float` e `div.clear` em quase todas as seções; estilos inline (floats, margens, borda); `div` vazias como separadores na comparação.
- Menu escrito três vezes: `ul.nav-desktop` (que na verdade é o menu do celular), `nav.desktop` e `nav.mobile`.
- Google Fonts na API antiga, sem `display=swap`; `font-family: "Roboto"` sem fonte reserva.

## Conteúdo e identidade

- Lorem ipsum nos diferenciais, no "sobre" e nas etapas; a comparação repete "Aparelho Fixo" doze vezes.
- Nome, telefone, e-mail, endereço e logo da clínica real, e nome da dentista real.
- Fotos de pessoas de origem e licença desconhecidas, inclusive um "antes e depois" de um paciente identificável, e o logo de uma marca registrada.
- Os seis ícones dos diferenciais são PNG pequenos (43 a 69 px), de origem desconhecida, que borram em telas de alta densidade.

## Plano

**Mantido:** HTML, CSS e JavaScript puros, sem build; a fonte Roboto; a ordem e o papel de cada seção; a paleta verde-água (com tons mais escuros onde houver texto); as ondas, as fotos redondas, os ícones de traço, a linha do tempo numerada e a comparação riscada; os nomes de classe do original, inclusive o padrão `etapas__…`; indentação com tab e comentários de fechamento.

**Atualizado:** viewport e `lang`; títulos em ordem (`h1` → `h2` → `h3`); links para cada seção; layout com flexbox e grid no lugar dos floats; tamanhos fluidos com `clamp()` e variáveis em `:root`; Google Fonts com `display=swap`; texto e cores no padrão AA.

**Substituído** (propostas D1 a D9 em [`decisoes.md`](decisoes.md)):

- identidade fictícia, sem a marca registrada do alinhador;
- fotos de licença livre;
- ícones em SVG;
- ondas em SVG;
- um menu só, em JavaScript puro, sem jQuery e sem Font Awesome;
- o conteúdo que falta, tirado dos mockups;
- formulários com rótulo, validação e confirmação;
- o bloco da dentista no contato com iniciais no lugar da foto real;
- telefone clicável e visível no celular.

**Prioridade 1 — correções:** os bugs 1 a 10, a acessibilidade e a identidade.

**Prioridade 2 — melhorias:** responsividade em quatro faixas (desktop, notebook, tablet, celular); estados de foco e hover; `prefers-reduced-motion`; rolagem suave; imagens otimizadas; meta description e favicon.

**Opcionais** (D10): o traço do menu acompanha a seção visível, que é o que a classe `selected` parece querer; blocos que aparecem ao rolar, como nos projetos anteriores. Em 18/10/2026 o Pedro aceitou o primeiro e recusou o segundo.

**Fora do escopo** (vão como recomendação no README): envio real dos formulários, que precisa de servidor ou serviço externo; testes automatizados no repositório, que trariam `package.json` e dependências a um projeto estático.

**Como vai ser verificado:** validador de HTML (`html-validate`); axe-core no desktop e no celular, com o menu aberto; contraste dos textos sobre as ondas e as fotos; navegador em 375, 768, 1024 e 1440px, sem rolagem horizontal; menu pelo mouse, pelo teclado, com Esc e com clique fora; formulários com campos vazios, e-mail inválido e envio válido; página com o JavaScript desligado. Cada resultado vai para a passagem em [`andamento.md`](andamento.md).

**Commits:** um por seção ou funcionalidade, na branch `claude/modernizacao`. A integração na `main` espera a aprovação do Codex e o OK do Pedro.
