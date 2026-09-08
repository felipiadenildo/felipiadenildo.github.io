# Sistema de design — tokens e componentes

Extraído da folha de estilo inline observada em `index.html`. Antes de estilizar algo novo, verifique se um token ou classe existente já resolve — o site é deliberadamente minimalista e consistente.

## Paleta (CSS custom properties em `:root`)

Modo claro:
```css
--paper: #f0f1ee;        /* fundo da página */
--paper-raised: #ffffff; /* cards, superfícies elevadas */
--ink: #16160f;          /* texto principal */
--ink-soft: #55564d;     /* texto secundário */
--ink-faint: #8a8b80;    /* texto terciário, legendas */
--line: #d3d4cc;         /* bordas, divisores */
--accent: #8a2a1f;       /* cor de destaque — links de ação, pontos */
--focus-ring: #16160f;   /* outline de foco (acessibilidade) */
```

Modo escuro (via `@media (prefers-color-scheme: dark)`, mesmas variáveis redefinidas):
```css
--paper: #131310; --paper-raised: #1b1b17; --ink: #eeeee6; --ink-soft: #a8a99c;
--ink-faint: #75766b; --line: #33342c; --accent: #d97a68; --focus-ring: #eeeee6;
```

`color-scheme: light dark` já está declarado em `:root` — não é preciso reimplementar a detecção de tema, só usar as variáveis.

## Tipografia

Três famílias, carregadas via Google Fonts, cada uma com um papel fixo:

| Fonte | Uso |
|---|---|
| **Newsreader** (serif) | Títulos (`h1`, `h2` de card), texto corrido (`.prose p`), tagline — tom editorial |
| **IBM Plex Sans** | Corpo de UI: botões, cards, footer, texto de interface |
| **IBM Plex Mono** | Navegação, labels em caixa alta, "eyebrow", kickers, elementos técnicos |

Não introduza uma quarta fonte. Se precisar de uma variação de peso, verifique se o `@import` do Google Fonts já carrega esse peso antes de usá-lo.

## Layout

- Container central `.wrap > .sheet`, largura máxima `40rem`, padding generoso (`clamp()` para responsividade)
- `.topbar` fixo no topo, com blur (`backdrop-filter`), esconde ao rolar pra baixo e reaparece ao rolar pra cima
- Seções (`section`) separadas por borda superior sutil (`.line`) com kicker em mono caps acima do conteúdo

## Componentes reutilizáveis

- **`.card`**: bloco elevado (projeto, destaque) — kicker + título + texto + link de ação
- **`.cv-card`**: variante para as opções de download de currículo, borda sólida em vez de fundo elevado
- **`.notice`**: aviso discreto com borda tracejada e ponto de destaque (`.dot`), usado para mensagens de "em construção"
- **`.links a`**: botões de contato (LinkedIn, GitHub, email) — borda sólida, inverte cor no hover
- **`.eyebrow`**: label pequeno em mono caps acima do `h1`, usado para localização/contexto

## Acessibilidade — convenções já em uso

- `aria-labelledby` conectando `section` aos seus `h2`
- `aria-current="page"` no link ativo da navegação
- `alt` descritivo em toda imagem de conteúdo
- `prefers-reduced-motion: reduce` respeitado nas animações (ex.: `.paw-trail`)
- `:focus-visible` com outline visível em elementos interativos

Mantenha essas convenções em qualquer elemento novo — são parte do padrão do site, não são decisões cosméticas opcionais.
