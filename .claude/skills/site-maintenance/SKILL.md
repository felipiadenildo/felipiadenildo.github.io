---
name: site-maintenance
description: Manutenção do site pessoal estático (felipiadenildo.github.io) — HTML, CSS e JavaScript puros, sem build e sem framework, publicado via GitHub Pages. Cobre edição de páginas existentes, adição de conteúdo novo, manutenção do padrão bilíngue PT/EN, atualização dos PDFs de currículo e ajustes de estilo respeitando o sistema de design já estabelecido. Use quando o usuário pedir para editar, atualizar, adicionar ou revisar algo no site pessoal, em index.html, historia.html, blog.html, listas.html ou nos PDFs de cv/.
when_to_use: Disparar em pedidos como "atualiza meu site", "adiciona uma seção nova na home", "troca o CV que está linkado", "ajusta essa página", "isso está quebrando no modo escuro", "cria uma página nova pro site".
---

# Manutenção do Site Pessoal

## Contexto do projeto

Repositório: `felipiadenildo/felipiadenildo.github.io`. HTML, CSS e JavaScript puros — sem build step, sem framework, sem bundler. Publicado direto pelo GitHub Pages a partir da branch `main`.

Estrutura observada:

```
├── index.html      # home
├── historia.html   # "minha história"
├── blog.html       # blog
├── listas.html     # filmes/séries/livros/anime
├── assets/         # imagens
├── content/        # JS de comportamento (ex.: content/easter-egg.js)
└── cv/             # PDFs do currículo (4 variantes, ver seção CV)
```

Não há template compartilhado entre páginas — cada `.html` é um arquivo independente e completo. Isso tem uma consequência importante: **qualquer elemento repetido entre páginas (nav do topo, footer, fontes) existe duplicado em cada arquivo.** Ao alterar a navegação, um card de estilo ou qualquer coisa "global", edite todas as páginas que a contêm — não existe include/partial que propague a mudança sozinho.

## Reformulação em andamento (decisão já fechada, ainda não aplicada no repo)

A estrutura acima (4 páginas com nav visível, 2 variantes de CV para download) é o que está publicado hoje, mas o Felipi já fechou uma reformulação da home ainda não implementada neste repo:
- As abas Minha História, Blog e Listas saem da navegação visível e ganham `noindex`; os arquivos continuam no ar por URL direta (GitHub Pages não tem backend para bloquear de verdade).
- A home passa a carregar CV e carta de apresentação em prosa, dentro do próprio layout, para o recrutador ver tudo sem sair da página.
- Downloads no fim da home ficam restritos a CV completo + carta base genérica; versões específicas por vaga não são publicadas aqui (vão para um repo privado à parte).

Ao pegar uma tarefa de edição na home, verifique com o Felipi se ela já é sobre essa reformulação ou se é um ajuste pontual na estrutura antiga — não assuma qual das duas está em vigor sem checar o estado atual do arquivo e perguntar se necessário.

Rodar localmente, sem instalar nada:
```bash
python3 -m http.server
```

## Antes de editar

O site evolui entre sessões. Sempre leia o arquivo completo antes de editar — não assuma que a estrutura descrita aqui ainda é 100% exata. Este SKILL.md descreve o padrão observado; o arquivo real é a fonte da verdade.

## Padrão bilíngue (PT/EN)

O site mantém português e inglês na mesma marcação, sem builds separados. Ver [reference-i18n-pattern.md](reference-i18n-pattern.md) para o mecanismo completo. Regra prática: **todo conteúdo novo (texto visível) precisa das duas versões**, `pt` e `en`, com paridade de conteúdo e tom entre elas — não é uma tradução literal, é o mesmo texto reescrito naturalmente em cada idioma (para tom e naturalidade, use a skill `writing-review`/`translate-pt-en` conforme o caso).

## Sistema de design

Não introduza cores, fontes ou espaçamentos novos sem necessidade — o site usa um conjunto fechado de tokens CSS e componentes reutilizáveis. Ver [reference-design-system.md](reference-design-system.md) para a paleta completa, tipografia e classes de componente (`.card`, `.cv-card`, `.notice`, `.links a`, etc.). Sempre confira o modo escuro (`prefers-color-scheme: dark`) ao alterar cores — os tokens já têm variante dark definida em `:root`.

## Currículo (cv/)

Existem 4 PDFs, cruzando idioma e variante:
- `cv/felipi-sousa-cv-pt.pdf` / `cv/felipi-sousa-cv-en.pdf` (versão completa)
- `cv/felipi-sousa-cv-pt-tech.pdf` / `cv/felipi-sousa-cv-en-tech.pdf` (versão tech, sem monitoria)

Os links de download usam atributos `data-pdf-pt` e `data-pdf-en` no elemento `<a>`, trocados dinamicamente pelo script de idioma. Ao atualizar um PDF, mantenha o nome do arquivo (sobrescreva) ou, se mudar o nome, atualize os dois atributos `data-pdf-*` correspondentes. Os PDFs em si vêm da skill `latex-cv` — depois de gerar/atualizar um `.tex`, compile e substitua o arquivo aqui.

> Atualização de 08/09/2026: o projeto raiz (`~/Projects/career`) foi reorganizado — os fontes `.tex` agora vivem em `02_cv_and_letters/src/` e os PDFs compilados em `02_cv_and_letters/dist/`. Rode `./sync_cvs.sh` na raiz do projeto pra copiar os PDFs de lá pra cá com o nome certo, em vez de copiar à mão. A home hoje também baixa uma versão bilíngue única (`felipi-sousa-cv-bilingual.pdf`, `felipi-sousa-carta-bilingual.pdf`), sem o toggle `data-pdf-pt`/`data-pdf-en` pra esses dois links específicos.

## Checklist antes de considerar pronto

1. Testou localmente com `python3 -m http.server`?
2. Alternou entre PT e EN e o conteúdo novo aparece nos dois?
3. Conferiu modo claro e escuro?
4. Se mexeu na navegação (`.sitenav`) ou em qualquer elemento repetido, aplicou a mudança em todas as páginas relevantes?
5. Testou o toggle de idioma depois de recarregar a página (`localStorage` deve manter a preferência)?

Apresente o diff antes de gravar mudanças, especialmente em `index.html` — é a página de entrada usada para recrutadores.

**Nunca faça `git push` (nem publique de qualquer outra forma) sem o "pode ir" explícito do Felipi.** No GitHub Pages, push para `main` é publicação imediata — mostrar o diff e ele aprovar o conteúdo não é a mesma coisa que ele autorizar subir para produção.
