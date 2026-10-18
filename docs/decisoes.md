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

## D11 — Formulários sem JavaScript (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Codex (revisão do plano, rodada 1, commit `08b9ac2`), redigida pelo Claude; decidida por: Pedro
- Contexto: sem servidor, o envio nativo de um formulário com `method="post"` (D7) cai numa página de erro (501 no `python -m http.server`, 405 no GitHub Pages), e o projeto exige que a página continue usável sem JavaScript.
- Decisão: o botão de envio dos dois formulários vem desativado no HTML e o JavaScript o ativa. Sem JavaScript, um aviso junto ao formulário diz que o envio é só uma demonstração e mostra o telefone e o e-mail da clínica. Nada é enviado ao servidor. Com JavaScript, a confirmação também deixa claro que é uma demonstração.
- Motivo: ninguém cai numa página de erro, e quem visita entende que o formulário é uma demonstração. O telefone e o e-mail mostrados também são fictícios (D1), então o aviso não promete atendimento real (corrigido em 18/10/2026; apontado pelo Codex na rodada 2).
- Alternativas descartadas: deixar como no Projeto5 (envio por POST que termina em erro do servidor) — oferecida, o Pedro escolheu o botão desativado.
- Implementação: ainda não.

## D1 — Identidade fictícia (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: o original mostra o nome, o logo, o telefone, o e-mail e o endereço de uma clínica real, o nome e a foto da dentista e a marca registrada do alinhador (nome, logo e selos de certificação).
- Decisão: clínica fictícia "Clara Odontologia", com a dentista "Dra. Helena Prado", em Florianópolis. O tratamento é chamado de "alinhadores transparentes", sem a marca. Telefone `(48) 1234-5678` (número de assinante não começa com 1, então não pode ser de ninguém) e e-mail no domínio reservado `.example`, para que os links `tel:` e `mailto:` não cheguem a uma pessoa real. Nenhuma clínica com esse nome foi achada em Florianópolis numa busca na web em 18/10/2026.
- Motivo: o repositório vai ser público; não deve parecer o site da clínica real nem anunciar uma marca registrada.
- Alternativas descartadas: o nome "Translúcida Odontologia" — oferecido, o Pedro escolheu "Clara"; manter a marca do alinhador como nome do tratamento — anúncio de marca real num site fictício; telefone e domínio com cara de reais — um clique em `tel:` ou `mailto:` poderia chegar a alguém.
- Implementação: ainda não.

## D2 — Fotos de licença livre (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: as fotos do original têm origem e licença desconhecidas, incluindo um "antes e depois" de paciente identificável.
- Decisão: trocar todas por fotos do Pexels, sem metadados (EXIF), em JPG otimizado: as quatro redondas do topo, as três das etapas e a do "sobre". Sem rosto inteiro: sorrisos, alinhadores e mãos, como já são duas das quatro fotos redondas do original.
- Motivo: licença clara para um repositório público; sem rosto inteiro, ninguém real fica parecendo paciente ou funcionário de uma clínica inventada.
- Alternativas descartadas: manter as do curso — licença desconhecida e paciente identificável; fotos com rosto inteiro de modelos — pessoa real associada a uma clínica fictícia.
- Implementação: ainda não.

## D3 — Ícones em SVG (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: os seis ícones são PNG de 43 a 69 px, de origem desconhecida, que borram em telas de alta densidade.
- Decisão: redesenhar os seis no mesmo estilo (traço verde, cantos arredondados) em SVG dentro do HTML, com o mesmo significado: círculo tracejado (transparente), hambúrguer (comer), dente com aparelho riscado (sem fios), relógio (rapidez), rosto sorrindo (falar) e dente sorrindo (ver o resultado).
- Motivo: nitidez em qualquer tela, cor controlada pelo CSS e nenhum arquivo de licença incerta.
- Alternativas descartadas: manter os PNG — borrados e de origem incerta; uma biblioteca de ícones — dependência para seis desenhos.
- Implementação: ainda não.

## D4 — Ondas em SVG (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: os dois fundos de ondas são PNG de 1,3 MB e 0,9 MB.
- Decisão: degradê verde-água em CSS e ondas em SVG no próprio HTML (ou no CSS), com o mesmo desenho do mockup.
- Motivo: cerca de 2,2 MB a menos, nitidez em qualquer largura e cores ajustáveis para o contraste.
- Alternativas descartadas: os PNG atuais otimizados — continuariam pesando centenas de KB e perdendo nitidez.
- Implementação: ainda não.

## D5 — Menu único em JavaScript puro (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: a lista de links do menu está escrita duas vezes, com um terceiro bloco só para o ícone (corrigido em 18/10/2026: o texto original dizia "três vezes"; apontado pelo Codex), e depende de jQuery 3.2.1 (com CVEs conhecidas) e do Font Awesome 4.7 (cerca de 1,1 MB para um ícone).
- Decisão: um `<nav>` só, com botão acessível (`aria-expanded`, `aria-controls`) que abre a lista no celular e fecha com Esc, com clique fora e ao escolher um item. Ícone das três barras em CSS. Sem jQuery e sem Font Awesome. Sem JavaScript, os links aparecem como lista.
- Motivo: corrige os bugs do menu (bug 4 do diagnóstico) e tira duas dependências que só serviam para isso.
- Alternativas descartadas: atualizar o jQuery para a versão mais nova — dependência inteira para cerca de 40 linhas.
- Implementação: ainda não.

## D6 — Conteúdo dos mockups (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: o HTML parou no meio (Lorem ipsum, quatro passos, "Aparelho Fixo" repetido), e os mockups do mesmo projeto mostram o conteúdo pretendido.
- Decisão: seguir os mockups onde o HTML está incompleto: seis passos com os títulos do mockup, os doze itens reais da comparação, legenda nas três fotos das etapas e o botão "Agendar avaliação gratuita". Textos reescritos sem a marca e sem promessas de saúde além do que o mockup já dizia.
- Motivo: completa o projeto como foi desenhado, sem inventar seções.
- Alternativas descartadas: manter o Lorem ipsum — a página pareceria inacabada; criar seções novas — fugiria do original.
- Implementação: ainda não.

## D7 — Formulários sem servidor (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: os dois formulários não têm servidor, rótulos nem validação útil, e o envio põe os dados na URL.
- Decisão: rótulos visíveis, tipos certos (`email`, `tel`), telefone opcional como no mockup, validação em português com o erro embaixo do campo, foco no primeiro erro e mensagem de confirmação na tela. `method="post"` nos dois, para os dados nunca irem para a URL.
- Motivo: corrige os bugs 5 e 6 e deixa claro para quem testa o que aconteceu.
- Alternativas descartadas: ligar a um serviço de formulários — precisa de conta; fica como recomendação no README.
- Implementação: ainda não.

## D8 — Bloco da dentista no contato (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: o mockup do contato tem a foto real da dentista e os selos de certificação da marca do alinhador.
- Decisão: um cartão com as iniciais da dentista fictícia num círculo verde, o nome e "Ortodontista", no lugar da foto e dos selos.
- Motivo: mantém o desenho do mockup sem usar o rosto de ninguém nem os selos da marca.
- Alternativas descartadas: foto de banco de imagens — pessoa real como dentista inventada; tirar o bloco — o contato perderia o rosto da clínica que o mockup pede.
- Implementação: ainda não.

## D9 — Telefone clicável e visível no celular (18/10/2026)
- Estado: aceita (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: no celular o telefone do cabeçalho some, e o número nunca é link.
- Decisão: todos os números como link `tel:`. No celular, o telefone fica visível no topo, na chamada ("Ou ligue para…") e no contato.
- Motivo: no celular, ligar é o caminho mais curto para agendar.
- Alternativas descartadas: manter escondido — perde o contato mais rápido justamente no celular.
- Implementação: ainda não.

## D10 — Opcionais (18/10/2026)
- Estado: (a) aceita; (b) rejeitada (18/10/2026)
- Proposta por: Claude; decidida por: Pedro
- Contexto: a classe `selected` do menu parece querer marcar a seção atual, mas só muda no hover; os projetos anteriores da série têm blocos que aparecem ao rolar.
- Decisão: (a) o traço do menu acompanha a seção visível (`IntersectionObserver`); (b) blocos marcados aparecem ao entrar na tela, respeitando `prefers-reduced-motion` e visíveis sem JavaScript.
- Motivo: (a) termina o que o original começou; (b) mantém a série coerente.
- Alternativas descartadas: (b) blocos que aparecem ao rolar — oferecido junto, o Pedro escolheu só o (a).
- Implementação: (a) ainda não; (b) não será feito.

## Fluxo da modernização (18/10/2026)
- Estado: aceita
- Proposta por: Claude; decidida por: Pedro
- Contexto: primeira tarefa do projeto (recriar o exercício `projeto_09` de 2017), também usada para testar o trabalho conjunto entre o Claude e o Codex. O Pedro autorizou chamar o Codex nesta tarefa; pela linha de comando, o Codex só lê.
- Decisão: o Claude implementa. O Codex revisa só lendo, em dois pontos: o diagnóstico com o plano (antes do código) e a implementação final, cada um até aprovar, no máximo 3 rodadas. O trabalho fica na branch `claude/modernizacao`, com a passagem em `docs/andamento.md`; a integração na `main` só acontece depois da aprovação do Codex e do OK do Pedro, e a publicação é outro passo, também com o OK dele. Os modelos de instruções para agentes (este arquivo, `AGENTS.md`, `CLAUDE.md`, `docs/andamento.md` e o modelo de PR) entram desde o primeiro commit.
- Motivo: revisar o plano antes de codar evita retrabalho; a branch deixa a `main` só com o que foi revisado e aprovado.
- Alternativas descartadas: o Codex revisar só o código final — o plano não passaria pelo olhar dele; dividir a implementação, com o Codex aberto pelo Pedro no app dele — mais trabalho para o Pedro; ficar só com o README, como nos projetos anteriores — as decisões e a passagem não ficariam no repositório; commits direto na `main` — pularia as etapas de integração e publicação.
- Implementação: commit inicial da `main` (instruções e modelos); o resto, ainda não.
