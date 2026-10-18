# Andamento

Passagem de trabalho das tarefas que ainda não têm PR (com PR, a passagem vai na descrição dele). Fica na branch da tarefa. Quem implementou escreve ao parar, terminada a tarefa ou não; a mais recente no topo. Quem pega confere no código antes de confiar no que está aqui.

Passagem "em andamento" sem atualização há mais de 7 dias conta como parada. Quem retomar acrescenta uma passagem nova dizendo que assumiu, com data e agente.

## Modelo

```
## Passagem: <tarefa> (dd/mm/aaaa, agente)
- Objetivo: <o que a tarefa quer>
- Etapa: <em andamento | implementado | revisado | integrado na main | publicação autorizada>; <o que já funciona>; retomada: "assumido em dd/mm/aaaa por <agente>"
- Código: branch <nome>, último commit <hash curto>; sem commit: <arquivos> na worktree <caminho>, ou "nada"
- Verificações: `<comando>` → <resultado>; o que não rodou: "não executado: <motivo>"
- Pendências: <o que falta>
- Próxima ação: <o primeiro passo de quem pegar>
```

A referência é o último commit, não a branch, porque o conteúdo da branch muda. O que ficar fora de commit só existe na worktree indicada; ela não é apagada enquanto guardar a única cópia.

<!-- passagens abaixo, a mais recente primeiro -->

## Passagem: modernização do projeto_09 — integrada na main (18/10/2026, Claude)
- Objetivo: o mesmo da passagem de implementação, mais abaixo.
- Etapa: integrado na main. O Pedro autorizou a integração ("Pode integrar a branch claude/modernizacao na main", 18/10/2026); merge com `--no-ff` no commit `ba97a59`, que traz os 30 commits da branch. O conteúdo da `main` ficou idêntico ao do último commit revisado da branch (`60ae0cc`; desde `bf71e7f`, aprovado pelo Codex, só mudou `docs/andamento.md`).
- Código: `main`, último commit é o desta passagem, sobre `ba97a59`; a branch `claude/modernizacao` continua existindo, parada em `60ae0cc`; sem commit: nada.
- Verificações: `git diff claude/modernizacao main` logo depois do merge → sem diferença; as verificações da página são as da passagem "ajustes da revisão", mais abaixo.
- Pendências: publicação (repositório no GitHub e GitHub Pages), só com o OK do Pedro e o nome do repositório.
- Próxima ação: com o OK do Pedro, criar o repositório, enviar a `main` e ativar o Pages.

## Passagem: modernização do projeto_09 — revisada (18/10/2026, Claude)
- Objetivo: o mesmo da passagem de implementação, mais abaixo.
- Etapa: revisado. O Codex aprovou a implementação na rodada 2, sobre `bf71e7f`, sem pontos pendentes ("os quatro pontos anteriores foram resolvidos"; "não encontrei regressões nem impedimentos técnicos à integração"). Ao todo, a tarefa teve 4 rodadas de revisão do Codex: o plano (ajustes sobre `08b9ac2`, aprovado sobre `d0551f5`) e a implementação (ajustes sobre `9755225`, aprovado sobre `bf71e7f`).
- Código: branch `claude/modernizacao`; o último commit é o desta passagem, sobre `bf71e7f`; sem commit: nada.
- Verificações: as da passagem "ajustes da revisão", logo abaixo, valem para este código (desde `436a65d` só mudaram arquivos de `docs/`).
- Pendências: OK do Pedro para integrar na `main`; publicação (repositório no GitHub e GitHub Pages), que é outro passo, também com o OK dele.
- Próxima ação: com o OK do Pedro, integrar a branch na `main`.

## Passagem: modernização do projeto_09 — ajustes da revisão (18/10/2026, Claude)
- Objetivo: o mesmo da passagem de implementação, logo abaixo.
- Etapa: implementado; revisão final do Codex em andamento. Rodada 1 sobre `9755225`: "ajustes", com 2 pontos médios (e-mail malformado como `ana@exemplo..com` passava; rótulo do e-mail do topo escondido, contra a D7) e 2 baixos (avisos sem JavaScript sem o telefone e o e-mail da D11; linhas "Implementação" das decisões ainda em "ainda não"). Os 4 foram aplicados em `d608880`, `436a65d` e no commit desta passagem. Rodada 2 a seguir.
- Código: branch `claude/modernizacao`; o último commit é o desta passagem (`docs: decisões com os commits e passagem dos ajustes da revisão`), sobre `436a65d`; sem commit: nada.
- Verificações, repetidas depois dos ajustes: as capturas e os testes da passagem anterior podiam ter usado CSS em cache no Chrome sem interface (o `http.server` não manda `Cache-Control`), o que apareceu ao conferir o formulário do topo. Com o cache desligado (`Network.setCacheDisabled`), tudo foi refeito sobre `436a65d`:
  - `npx html-validate index.html` → só `prefer-button` (2) e `tel-non-breaking` (10, agora com os links dos avisos), as mesmas regras de estilo explicadas abaixo.
  - `node --check js/script.js` → ok.
  - axe-core em 1440px e em 375px com o menu aberto → 0 violações; 59 textos sobre degradê medidos à parte → pior caso 4,98:1.
  - Larguras 320 a 1440px e 640px (zoom de 200%) → sem rolagem horizontal; menu aberto e janela crescendo → fecha e volta ao normal; sem JavaScript → botões desativados, dois avisos com telefone e e-mail, nenhum pedido de rede no Enter nem no clique.
  - Formulários → mesmos resultados da passagem anterior; e-mails `ana@exemplo..com`, `ana@exemplo.com.`, `ana@.exemplo.com`, `ana@email`, `ana@@email.com` e `ana email@x.com` recusados; `ana@email.com`, `ana.souza+teste@sub.exemplo.com.br` e `a@b.co` aceitos.
  - Formulário do topo: rótulo visível acima do campo; botão alinhado ao campo no desktop; no celular a ordem é rótulo, campo, erro, botão, aviso e confirmação, conferida pelas posições na tela, com e sem JavaScript.
  - Seção visível no menu → mesmos resultados, em 1440 e 375px.
  - Não executado: leitor de tela real e navegadores além do Chrome.
- Pendências: rodada 2 da revisão do Codex (no máximo 3 rodadas); OK do Pedro para integrar na `main`; publicação, também com o OK dele.
- Próxima ação: mandar a branch para a rodada 2 da revisão do Codex.

## Passagem: modernização do projeto_09 — implementação (18/10/2026, Claude)
- Objetivo: recriar o exercício `projeto_09` (2017) como landing page moderna de uma clínica fictícia, seguindo `docs/diagnostico.md` e as decisões D1 a D11 de `docs/decisoes.md`.
- Etapa: implementado; a página está completa (topo, benefícios, sobre, depoimento, etapas, comparação, contato e rodapé), com menu mobile, marcação da seção visível (D10a) e formulários de demonstração (D7 e D11). Falta a revisão final do Codex.
- Código: branch `claude/modernizacao`, último commit `64b2f88` (25 commits desde a `main`; a esta passagem se soma o commit que a registra); sem commit: nada.
- Verificações (servidor: `python -m http.server 8086 --bind 127.0.0.1` na raiz; Chrome sem interface controlado pelo protocolo de depuração (CDP), com scripts de Node que ficaram só no scratchpad da sessão e não foram guardados):
  - `npx html-validate index.html` → 8 apontamentos de 2 regras de estilo, nenhum de HTML inválido: `prefer-button` (o `<input type="submit">` do original, mantido de propósito, como no Projeto5) e `tel-non-breaking` (o número pode quebrar de linha; resolvido no CSS com `white-space: nowrap` em `a[href^="tel:"]`, sem trocar os caracteres, para o número continuar copiável).
  - `node --check js/script.js` → ok.
  - axe-core 4 (regras WCAG 2.0/2.1/2.2 A e AA e boas práticas) em 1440px e em 375px com o menu aberto → 0 violações; 58 textos sobre degradê ficaram "incompletos" (o axe não mede degradê) e foram medidos à parte, cada cor de texto contra todas as cores do degradê do fundo, com a fórmula da WCAG → pior caso 4,98:1 (verde-escuro sobre `#7fe0c4`), nenhum abaixo do mínimo.
  - Larguras 320, 375, 640 (= 1280px com zoom de 200%), 768, 1024 e 1440px → `scrollWidth` igual à largura em todas e nenhum elemento de texto ou campo fora da tela.
  - Menu: abre, fecha com Esc (foco volta ao botão), com clique fora e ao escolher um link; aberto no celular, a janela indo para 1280px fecha o menu e volta a lista ao normal (bug 4); voltando ao celular, continua fechado.
  - Seção visível: o menu marca Alinhadores, Benefícios (diferenciais, sobre e depoimento), Serve para mim? (etapas e comparação) e Contato (contato e rodapé), em 1440 e 375px, com `aria-current` só no link atual.
  - Formulários: vazio, e-mail sem domínio, nome com 1 letra e telefone curto mostram o erro certo e levam o foco ao primeiro campo inválido; envio válido (com e sem telefone) limpa os campos e mostra a confirmação de demonstração; nome com `<img onerror>` aparece como texto e não executa; nenhum dado vai para a URL.
  - Sem JavaScript: botões de envio desativados, aviso de demonstração nos dois formulários, menu como lista de links; Enter no campo de e-mail e clique no botão do contato → nenhum pedido de rede e a URL não muda (D11).
  - Fotos das etapas no tablet (768px) e no celular (375px) → visíveis e alinhadas (bug 11).
  - Fotos: 8 JPG do Pexels sem segmentos APP1–APP15 (EXIF), conferido lendo os marcadores do arquivo; projeto com 355 KB, contra 28 MB do original.
  - Não executado: teste em leitor de tela real e em navegadores além do Chrome (não há outro configurado aqui).
- Pendências: revisão final do Codex (até aprovar, no máximo 3 rodadas); OK do Pedro para integrar na `main`; publicação, que é outro passo, também com o OK dele.
- Próxima ação: mandar a branch para a revisão do Codex.

## Passagem: modernização do projeto_09 (18/10/2026, Claude)
- Objetivo: recriar o exercício `projeto_09` (2017) como landing page moderna de uma clínica fictícia, preservando seções, paleta e estilo do código.
- Etapa: em andamento; diagnóstico e plano **revisados**: o Codex pediu ajustes na rodada 1 (sobre `08b9ac2`; 1 ponto médio, que virou a D11, e 6 baixos) e aprovou na rodada 2 (sobre `d0551f5`), com 2 pontos baixos de documentação, corrigidos no commit desta passagem. O Pedro decidiu D1 a D11 em `docs/decisoes.md` (todas aceitas, menos o item (b) do D10). Nenhum código da página ainda.
- Código: branch `claude/modernizacao`; o último commit é o desta passagem (`docs: ajustes da rodada 2 da revisão do plano`, sobre `d0551f5`); sem commit: nada.
- Verificações: contraste das cores do original com a fórmula de luminância relativa da WCAG 2 → valores da tabela do diagnóstico, todos abaixo do mínimo. O cálculo cabe numa linha e pode ser refeito: `node -e "const L=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=0.03928?v/12.92:((v+0.055)/1.055)**2.4);return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]};const r=(a,b)=>{const x=L(a),y=L(b);return ((Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)).toFixed(2)};console.log(r('#a9c4b8','#ffffff'))"` (troque as duas cores). Contraste do menu branco sobre `bg_01.png` → 1,45 a 1,56: um script de PowerShell (System.Drawing) leu os pixels da faixa y 30–110, x 600–1400 do PNG, de 4 em 4 linhas e 8 em 8 colunas, e aplicou a mesma fórmula; o script não foi guardado, e esta descrição é o que permite refazê-lo. Código da página não executado: ainda não existe.
- Pendências: implementação; revisão final do Codex; OK do Pedro para integrar na `main`.
- Próxima ação: começar a implementação pela marcação HTML e pelas fotos.
