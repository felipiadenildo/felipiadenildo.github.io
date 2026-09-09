# felipiadenildo.github.io

[English](#english) · [Português](#português)

## English

Source for [felipiadenildo.github.io](https://felipiadenildo.github.io), my personal site. Plain HTML, CSS and JavaScript, no build step, no framework, deployed straight through GitHub Pages.

### Pages

- `index.html` — home, the only page linked from navigation. Full résumé and cover
  letter content embedded inline (progressive disclosure via `<details>`), light/dark
  toggle, English/Portuguese toggle.
- `historia.html`, `blog.html`, `listas.html` — kept live at their own URLs (each
  `noindex`) but not linked from anywhere; not part of the active site.
- `cv/` — the two general downloads linked from the home page: bilingual CV and
  bilingual cover letter (English and Portuguese in the same PDF).

Every page has a language toggle (`data-lang-el` attributes in the HTML). `index.html`
has its own inline toggle script; the older pages share `content/render.js`.

### Running it locally

No install needed. Serve the folder with any static server, for example:

```sh
python3 -m http.server
```

---

## Português

Fonte do [felipiadenildo.github.io](https://felipiadenildo.github.io), meu site pessoal. HTML, CSS e JavaScript puros, sem build, sem framework, publicado direto pelo GitHub Pages.

### Páginas

- `index.html` — início, única página presente na navegação. Currículo e carta de
  apresentação completos embutidos ali (progressive disclosure via `<details>`),
  alternância de tema claro/escuro e de idioma PT/EN.
- `historia.html`, `blog.html`, `listas.html` — continuam no ar por URL direta (cada
  uma com `noindex`), mas sem link em lugar nenhum; não fazem parte do site ativo.
- `cv/` — os dois downloads gerais linkados na home: CV bilíngue e carta bilíngue
  (inglês e português no mesmo PDF).

Toda página tem alternância de idioma (atributos `data-lang-el` no HTML). O
`index.html` tem seu próprio script de alternância; as páginas mais antigas
compartilham `content/render.js`.

### Rodando localmente

Não precisa instalar nada. Sirva a pasta com qualquer servidor estático, por exemplo:

```sh
python3 -m http.server
```
