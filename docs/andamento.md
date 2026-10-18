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

## Passagem: modernização do projeto_09 (18/10/2026, Claude)
- Objetivo: recriar o exercício `projeto_09` (2017) como landing page moderna de uma clínica fictícia, preservando seções, paleta e estilo do código.
- Etapa: em andamento; diagnóstico e plano **revisados**: o Codex pediu ajustes na rodada 1 (sobre `08b9ac2`; 1 ponto médio, que virou a D11, e 6 baixos) e aprovou na rodada 2 (sobre `d0551f5`), com 2 pontos baixos de documentação, corrigidos no commit desta passagem. O Pedro decidiu D1 a D11 em `docs/decisoes.md` (todas aceitas, menos o item (b) do D10). Nenhum código da página ainda.
- Código: branch `claude/modernizacao`; o último commit é o desta passagem (`docs: ajustes da rodada 2 da revisão do plano`, sobre `d0551f5`); sem commit: nada.
- Verificações: contraste das cores do original com a fórmula de luminância relativa da WCAG 2 → valores da tabela do diagnóstico, todos abaixo do mínimo. O cálculo cabe numa linha e pode ser refeito: `node -e "const L=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=0.03928?v/12.92:((v+0.055)/1.055)**2.4);return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]};const r=(a,b)=>{const x=L(a),y=L(b);return ((Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)).toFixed(2)};console.log(r('#a9c4b8','#ffffff'))"` (troque as duas cores). Contraste do menu branco sobre `bg_01.png` → 1,45 a 1,56: um script de PowerShell (System.Drawing) leu os pixels da faixa y 30–110, x 600–1400 do PNG, de 4 em 4 linhas e 8 em 8 colunas, e aplicou a mesma fórmula; o script não foi guardado, e esta descrição é o que permite refazê-lo. Código da página não executado: ainda não existe.
- Pendências: implementação; revisão final do Codex; OK do Pedro para integrar na `main`.
- Próxima ação: começar a implementação pela marcação HTML e pelas fotos.
