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
- Etapa: em andamento; diagnóstico e plano escritos em `docs/diagnostico.md`, com as escolhas D1 a D10 como proposta em `docs/decisoes.md`. Nenhum código da página ainda.
- Código: branch `claude/modernizacao`; o último commit é o desta passagem (`docs: diagnóstico e plano da modernização`); sem commit: nada.
- Verificações: contraste das cores do original calculado com a fórmula da WCAG (tabela no diagnóstico) → abaixo do mínimo; contraste do menu sobre `bg_01.png`, medido nos pixels do PNG → 1,45 a 1,56; código não executado: ainda não há página.
- Pendências: decisão do Pedro sobre D1 a D10; revisão do Codex do diagnóstico e do plano (até aprovar, no máximo 3 rodadas); implementação; revisão final do Codex; OK do Pedro para integrar na `main`.
- Próxima ação: registrar as decisões do Pedro em `docs/decisoes.md` e mandar o diagnóstico e o plano para a revisão do Codex.
