---
name: site-maintenance
description: Manutenção do site pessoal estático (felipiadenildo.github.io) — HTML, CSS e JavaScript puros, sem build e sem framework, publicado via GitHub Pages. Cobre edição de páginas existentes, adição de conteúdo novo, manutenção do padrão bilíngue PT/EN, atualização dos PDFs de currículo e ajustes de estilo respeitando o sistema de design já estabelecido. Use quando o usuário pedir para editar, atualizar, adicionar ou revisar algo no site pessoal, em index.html, historia.html, blog.html, listas.html ou nos PDFs de cv/.
when_to_use: Disparar em pedidos como "atualiza meu site", "adiciona uma seção nova na home", "troca o CV que está linkado", "ajusta essa página", "isso está quebrando no modo escuro", "cria uma página nova pro site".
---

# Manutenção do Site Pessoal

## Contexto do projeto

Repositório: `felipiadenildo/felipiadenildo.github.io`. HTML, CSS e JavaScript puros — sem build step, sem framework, sem bundler. Publicado direto pelo GitHub Pages a partir da branch `main`.

```
├── index.html      # home — única página na navegação, currículo e carta embutidos
├── historia.html   # "minha história" — no ar por URL direta, sem link, noindex
├── blog.html       # blog — idem
├── listas.html     # filmes/séries/livros/anime — idem
├── assets/         # imagens
├── content/        # JS de comportamento das páginas antigas (render.js, easter-egg.js)
└── cv/             # os 2 PDFs bilíngues linkados na home (CV e carta)
```

Não há template compartilhado entre páginas — cada `.html` é um arquivo independente e completo. Isso tem uma consequência importante: **qualquer elemento repetido entre páginas (nav do topo, footer, fontes) existe duplicado em cada arquivo.** Ao alterar a navegação, um card de estilo ou qualquer coisa "global" que exista em mais de uma página, edite todas as que a contêm — não existe include/partial que propague a mudança sozinho.

Rodar localmente, sem instalar nada:
```bash
python3 -m http.server
```

## Antes de editar

O site evolui entre sessões. Sempre leia o arquivo completo antes de editar — não assuma que a estrutura descrita aqui ainda é 100% exata. Este SKILL.md descreve o padrão observado; o arquivo real é a fonte da verdade.

## Padrão bilíngue (PT/EN)

O site mantém português e inglês na mesma marcação, sem builds separados. Ver [reference-i18n-pattern.md](reference-i18n-pattern.md) para o mecanismo completo. Regra prática: **todo conteúdo novo (texto visível) precisa das duas versões**, `pt` e `en`, com paridade de conteúdo e tom entre elas — não é uma tradução literal, é o mesmo texto reescrito naturalmente em cada idioma (para tom e naturalidade, use a skill `writing-review`/`translate-pt-en` conforme o caso).

## Sistema de design

Não introduza cores, fontes ou espaçamentos novos sem necessidade — o site usa um conjunto fechado de tokens CSS e componentes reutilizáveis, incluindo tema claro/escuro com toggle manual. Ver [reference-design-system.md](reference-design-system.md) para a paleta completa (nas três camadas: claro, escuro automático, escuro forçado pelo toggle), tipografia e classes de componente (`.card`, `.cv-card`, `.accordion`, `.links a`, etc.).

## Progressive disclosure (accordions)

Experiência, Formação, Competências, Projetos Acadêmicos e Liderança mostram só o
cabeçalho (instituição/cargo/data/local) por padrão — a descrição fica atrás de um
clique, via `<details class="accordion"><summary class="accordion-toggle">...`. Ao
adicionar uma entrada nova nessas seções, siga esse padrão em vez de deixar texto
sempre visível. A seção "Sobre" usa uma variante sem cabeçalho (`.readmore-toggle`,
ícone `+`/`×`) pra continuar o texto corrido.

## Currículo e carta (cv/)

Só 2 PDFs, ambos bilíngues (inglês e português no mesmo arquivo):
`cv/felipi-sousa-cv-bilingual.pdf` e `cv/felipi-sousa-carta-bilingual.pdf`. Não há
mais versões PT/EN separadas nem variante "foco em TI" — foram retiradas de propósito
em 09/09/2026. Os links desses dois na home não trocam de `href` por idioma (o PDF já
é bilíngue); não use mais o padrão antigo `data-pdf-pt`/`data-pdf-en`.

Os `.tex` fonte vivem em `02_cv_and_letters/src/` (raiz do projeto, `~/Projects/career`,
fora deste repo) e os PDFs compilados em `02_cv_and_letters/dist/`, nomeados com a
data (`cv-bilingual-AAAA-MM-DD.pdf`). Depois de recompilar, rode `./sync_cvs.sh` na
raiz do projeto — ele acha o PDF datado mais recente sozinho e copia pra cá com o
nome estável que os links da home esperam. Os PDFs em si vêm da skill `latex-cv`.

## Checklist antes de considerar pronto

1. Testou localmente com `python3 -m http.server`?
2. Alternou entre PT e EN e o conteúdo novo aparece nos dois?
3. Conferiu modo claro e escuro, incluindo o toggle manual (não só o automático do sistema)?
4. Se mexeu na navegação (`.topbar`) ou em qualquer elemento repetido, aplicou a mudança em todas as páginas relevantes?
5. Testou o toggle de idioma e o de tema depois de recarregar a página (`localStorage` deve manter as duas preferências)?

Apresente o diff antes de gravar mudanças, especialmente em `index.html` — é a página de entrada usada para recrutadores.

**Nunca faça `git push` (nem publique de qualquer outra forma) sem o "pode ir" explícito do Felipi.** No GitHub Pages, push para `main` é publicação imediata — mostrar o diff e ele aprovar o conteúdo não é a mesma coisa que ele autorizar subir para produção.
