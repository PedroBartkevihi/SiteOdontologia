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
- Etapa: em andamento; diagnóstico e plano escritos em `docs/diagnostico.md`; o Pedro decidiu D1 a D11 em `docs/decisoes.md` (todas aceitas, menos o item (b) do D10, recusado). Revisão do Codex: rodada 1 sobre `08b9ac2` com "ajustes" (1 ponto médio, que virou a D11, e 6 baixos), todos aplicados no commit desta passagem; rodada 2 a seguir. Nenhum código da página ainda.
- Código: branch `claude/modernizacao`; o último commit é o desta passagem (`docs: ajustes da rodada 1 da revisão do Codex e decisão D11`, sobre `08b9ac2`); sem commit: nada.
- Verificações: contraste das cores do original com a fórmula de luminância relativa da WCAG 2, num `node -e` de uma linha (não versionado) → valores da tabela do diagnóstico, todos abaixo do mínimo; contraste do menu branco sobre `bg_01.png`, com um script de PowerShell (System.Drawing, não versionado) que leu os pixels da faixa y 30–110, x 600–1400 do PNG → 1,45 a 1,56; código da página não executado: ainda não existe.
- Pendências: rodada 2 da revisão do Codex do diagnóstico e do plano (no máximo 3 rodadas); implementação; revisão final do Codex; OK do Pedro para integrar na `main`.
- Próxima ação: mandar o diagnóstico e o plano para a rodada 2 da revisão do Codex.
