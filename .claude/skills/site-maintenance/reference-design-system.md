# Sistema de design — tokens e componentes

Extraído da folha de estilo inline em `index.html`. Antes de estilizar algo novo,
verifique se um token ou classe existente já resolve — o site é deliberadamente
minimalista e consistente. Os valores abaixo foram conferidos em 09/09/2026; a folha
de estilo do arquivo é sempre a fonte da verdade se divergir.

## Paleta (CSS custom properties em `:root`)

Modo claro — tom "papel" quente (reformulado em 08/09/2026, inspirado no projeto
`site-izadora` do próprio Felipi, sem copiar as cores dele):
```css
--paper: #f6f2ea; --paper-raised: #fffdf8; --ink: #211e17; --ink-soft: #5c5749;
--ink-faint: #8f8873; --line: #ddd3bd; --tag-bg-hover: #211e17; --tag-fg-hover: #f6f2ea;
--focus-ring: #211e17; --accent: #a8321f; --topbar-bg: rgba(246,242,234,0.78);
```

Modo escuro (mesmas variáveis redefinidas em duas camadas — `@media (prefers-color-scheme: dark)`
para o padrão do sistema, e `:root[data-theme="dark"]` pra quando o toggle manual força o tema):
```css
--paper: #131310; --paper-raised: #1b1b17; --ink: #eeeee6; --ink-soft: #a8a99c;
--ink-faint: #75766b; --line: #33342c; --tag-bg-hover: #eeeee6; --tag-fg-hover: #131310;
--focus-ring: #eeeee6; --accent: #e08a6e; --topbar-bg: rgba(19,19,16,0.78);
```

`color-scheme: light dark` já está declarado em `:root`. Além do modo automático do
sistema, existe um toggle manual sol/lua (`#theme-toggle`) que seta
`data-theme="light"` ou `data-theme="dark"` na tag `<html>` e persiste a escolha em
`localStorage` (`felipi-site-theme`) — ao adicionar uma cor nova, garanta que ela
está coberta nas três camadas (`:root` claro, media query escura, override
`[data-theme="dark"]`), senão o toggle manual não vai funcionar direito pra ela.

## Tipografia

Três famílias, carregadas via Google Fonts, cada uma com um papel fixo:

| Fonte | Uso |
|---|---|
| **Newsreader** (serif) | Títulos (`h1`, `h2` de seção), texto corrido (`.prose p`), tagline — tom editorial |
| **IBM Plex Sans** | Corpo de UI: bullets, cards, footer, texto de interface |
| **IBM Plex Mono** | Navegação, labels em caixa alta, datas, "eyebrow", kickers, elementos técnicos |

Não introduza uma quarta fonte. Se precisar de uma variação de peso, verifique se o `@import` do Google Fonts já carrega esse peso antes de usá-lo.

## Layout

- Container central `.wrap > .sheet`, largura máxima `40rem`, padding generoso (`clamp()` para responsividade)
- `.topbar` fixo no topo, com blur (`backdrop-filter`) e fundo via `--topbar-bg`; esconde ao rolar pra baixo e reaparece ao rolar pra cima. Contém só o toggle de tema (sol/lua) e o toggle de idioma (PT/EN) — nada de navegação de página, a home é a única página linkada.
- Seções (`section`) com `aria-labelledby` apontando pro próprio `h2`

## Componentes reutilizáveis

- **`.card`**: bloco elevado (Destaques) — kicker + título + texto + link de ação
- **`.cv-card`**: variante pros dois downloads de currículo/carta no fim da página
- **`.accordion`** (`<details class="accordion">` + `<summary class="accordion-toggle">`): padrão de progressive disclosure usado em Experiência, Formação, Competências, Projetos Acadêmicos e Liderança — só cabeçalho (instituição/cargo/data/local) visível por padrão, descrição atrás do clique. Nativo do HTML, sem JS, degrada bem. Ver a seção "Sobre" pro caso equivalente sem cabeçalho: usa `.readmore-toggle`, um ícone `+`/`×` circular no lugar do texto "ver mais".
- **`.links a`**: botões de contato (LinkedIn, GitHub, email) — borda sólida, inverte cor no hover
- **`.eyebrow`**: label pequeno em mono caps acima do `h1`, usado para localização/contexto

Não existe mais `.notice` (era o aviso de "site em construção" — removido quando a
home passou a carregar o conteúdo completo).

## Acessibilidade — convenções já em uso

- `aria-labelledby` conectando `section` aos seus `h2`
- `alt` descritivo em toda imagem de conteúdo
- `prefers-reduced-motion: reduce` respeitado nas animações e transições (toggle de tema, chevron do accordion)
- `:focus-visible` com outline visível em elementos interativos, incluindo os `<summary>` dos accordions

Mantenha essas convenções em qualquer elemento novo — são parte do padrão do site, não são decisões cosméticas opcionais.
