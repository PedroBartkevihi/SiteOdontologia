# Decisões técnicas

Uma entrada por decisão, a mais recente no topo. Decisão nunca é reescrita: quando muda, a antiga fica como está e ganha o estado "substituída em dd/mm/aaaa por <link>", e a nova entra com data.

Estados: **proposta** (aguarda quem decide), **aceita**, **rejeitada** e **substituída**. Aceita não quer dizer implementada: a implementação vai na linha própria. Decisão tomada por delegação diz quem delegou, a data e a tarefa coberta; a delegação não vale para outra tarefa.

## Modelo

```
## <Título curto> (dd/mm/aaaa)
- Estado: proposta | aceita | rejeitada | substituída em dd/mm/aaaa por <link>
- Proposta por: <agente ou pessoa>; decidida por: <pessoa>, ou "<agente>, por delegação de <pessoa> em dd/mm/aaaa para <tarefa>"
- Contexto: <o problema e o que limita a escolha>
- Decisão: <o que foi escolhido>
- Motivo: <por quê>
- Alternativas descartadas: <alternativa> — <por que não>
- Implementação: <PR ou commit>, ou "ainda não"
```

<!-- decisões abaixo, a mais recente primeiro -->

## Fluxo da modernização (18/10/2026)
- Estado: aceita
- Proposta por: Claude; decidida por: Pedro
- Contexto: primeira tarefa do projeto (recriar o exercício `projeto_09` de 2017), também usada para testar o trabalho conjunto entre o Claude e o Codex. O Pedro autorizou chamar o Codex nesta tarefa; pela linha de comando, o Codex só lê.
- Decisão: o Claude implementa. O Codex revisa só lendo, em dois pontos: o diagnóstico com o plano (antes do código) e a implementação final, cada um até aprovar, no máximo 3 rodadas. O trabalho fica na branch `claude/modernizacao`, com a passagem em `docs/andamento.md`; a integração na `main` só acontece depois da aprovação do Codex e do OK do Pedro, e a publicação é outro passo, também com o OK dele. Os modelos de instruções para agentes (este arquivo, `AGENTS.md`, `CLAUDE.md`, `docs/andamento.md` e o modelo de PR) entram desde o primeiro commit.
- Motivo: revisar o plano antes de codar evita retrabalho; a branch deixa a `main` só com o que foi revisado e aprovado.
- Alternativas descartadas: o Codex revisar só o código final — o plano não passaria pelo olhar dele; dividir a implementação, com o Codex aberto pelo Pedro no app dele — mais trabalho para o Pedro; ficar só com o README, como nos projetos anteriores — as decisões e a passagem não ficariam no repositório; commits direto na `main` — pularia as etapas de integração e publicação.
- Implementação: commit inicial da `main` (instruções e modelos); o resto, ainda não.
