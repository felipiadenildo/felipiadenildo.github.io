# felipiadenildo.github.io

[English](#english) · [Português](#português)

## English

Source for [felipiadenildo.github.io](https://felipiadenildo.github.io), my personal site. Plain HTML, CSS and JavaScript, no build step, no framework, deployed straight through GitHub Pages.

### Pages

- `index.html` — home
- `historia.html` — my story
- `listas.html` — movies, TV series, books and anime I've kept track of
- `blog.html` — blog
- `cv/` — CV in English and Portuguese, general and tech-focused versions

Every page has a language toggle (`data-lang-el` attributes in the HTML, switched by `content/render.js`) so English and Portuguese live in the same markup instead of separate builds.

### Running it locally

No install needed. Serve the folder with any static server, for example:

```sh
python3 -m http.server
```

---

## Português

Fonte do [felipiadenildo.github.io](https://felipiadenildo.github.io), meu site pessoal. HTML, CSS e JavaScript puros, sem build, sem framework, publicado direto pelo GitHub Pages.

### Páginas

- `index.html` — início
- `historia.html` — minha história
- `listas.html` — filmes, séries, livros e animes que fui registrando
- `blog.html` — blog
- `cv/` — currículo em inglês e português, versões gerais e voltadas a tech

Toda página tem alternância de idioma (atributos `data-lang-el` no HTML, trocados por `content/render.js`), então inglês e português convivem no mesmo markup em vez de builds separados.

### Rodando localmente

Não precisa instalar nada. Sirva a pasta com qualquer servidor estático, por exemplo:

```sh
python3 -m http.server
```
