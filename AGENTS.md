# Projeto6 — instruções para agentes

Landing page de uma clínica odontológica fictícia, recriada a partir de um exercício de curso de front-end de 2017, para fins de estudo. Detalhes no [README](README.md).

Vale para qualquer agente (Claude, Codex ou outro), em qualquer máquina. Leia também os `AGENTS.md` das subpastas que for mexer.

## Comandos

- Instalar: nada; o projeto não tem dependências nem etapa de build.
- Testar: não há testes automatizados no repositório. As verificações de cada tarefa (validador de HTML, acessibilidade, navegador em várias larguras, página sem JavaScript) ficam registradas na passagem, com comando e resultado.
- Rodar localmente: `python -m http.server 8080` na raiz e abrir `http://localhost:8080`.
- Validar o HTML (precisa de Node): `npx html-validate index.html`.

## Onde ficam as coisas

- Estrutura e funcionalidades: [README](README.md)
- Diagnóstico do original e plano da modernização: [`docs/diagnostico.md`](docs/diagnostico.md)
- Decisões técnicas: [`docs/decisoes.md`](docs/decisoes.md)
- Passagem de trabalho sem PR: [`docs/andamento.md`](docs/andamento.md)

## Regras do projeto

- HTML, CSS e JavaScript puros, sem framework, biblioteca ou etapa de build.
- Preservar o estilo do código original: nomes de classe em português (inclusive os do original), indentação com tab e comentário no fechamento das divs.
- Identidade fictícia: nenhum nome, marca, foto, telefone, e-mail ou endereço de pessoa ou empresa real.
- Fotos só com licença livre e sem metadados (EXIF).
- Textos em português do Brasil; contraste mínimo WCAG AA; a página continua usável sem JavaScript.
- Commits pequenos, com mensagens no padrão `tipo: descrição` em português (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`).

## Como o trabalho é dividido

- **Quem decide:** Pedro, dono do projeto. Escolha técnica nova, inclusive interna de implementação, entra como proposta em `docs/decisoes.md` até ele aprovar. Executar o que já foi aprovado não é escolha nova. Uma delegação dele ("decida você o X") vale só para a tarefa em que foi dada e é registrada com a data.
- **Papéis:** no começo de cada tarefa fica dito quem implementa e quem revisa. Sem isso, quem recebeu o pedido implementa e ninguém revisa. Ter dois agentes no projeto não autoriza um a chamar o outro: revisão ou consulta só com pedido expresso do Pedro. Quem revisa só lê, cita o commit que revisou e segue até aprovar, no máximo 3 rodadas; desacordo depois disso vai para o Pedro.
- **Trabalho simultâneo:** cada agente na sua branch e na sua worktree; nunca dois agentes trocando de branch na mesma pasta.
- **Reler:** ao assumir uma tarefa, leia a última passagem (no PR ou em `docs/andamento.md`). Antes de editar, revisar ou concluir, releia os arquivos em vez de confiar no que leu antes, e confira no código o que está escrito.
- **Fontes que discordam:** se a decisão registrada, o código e uma nota antiga não batem, aponte a diferença em vez de escolher uma.
- **Etapas:** implementado → revisado (quando houver revisão) → integrado na `main` → publicação autorizada. Diga em que etapa está; "pronto" sozinho não vale.
- **Ao parar:** quem implementou deixa a passagem, terminada a tarefa ou não: na descrição do PR ou, sem PR, em `docs/andamento.md` na branch da tarefa. A referência é o último commit, nunca só a branch. O que ficar fora de commit leva o caminho da worktree, e ela não é apagada enquanto guardar a única cópia, com ou sem PR.
- **Tarefa parada:** passagem "em andamento" sem atualização há mais de 7 dias conta como parada. Quem retomar registra na passagem que assumiu, com data e agente.
