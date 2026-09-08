# Padrão bilíngue (PT/EN) — mecanismo

O site guarda as duas versões do texto na mesma página, e alterna a visibilidade via CSS + um atributo no elemento `<html>`. Não há dois builds nem dois arquivos por idioma.

## Estrutura observada

1. A raiz do documento carrega o idioma ativo:
   ```html
   <html lang="pt-BR" data-lang="pt">
   ```

2. Qualquer texto que precisa variar por idioma é envolvido em um elemento com `data-lang-el`:
   ```html
   <span data-lang-el="pt">Início</span>
   <span data-lang-el="en">Home</span>
   ```
   Para blocos maiores (parágrafos, seções inteiras), o mesmo padrão se aplica em `<div>`:
   ```html
   <div data-lang-el="pt">
     <p>Texto em português...</p>
   </div>
   <div data-lang-el="en">
     <p>English text...</p>
   </div>
   ```

3. O CSS controla a visibilidade:
   ```css
   [data-lang-el]{ display: none; }
   html[data-lang="pt"] [data-lang-el="pt"]{ display: revert; }
   html[data-lang="en"] [data-lang-el="en"]{ display: revert; }
   ```

4. Um botão de alternância (`.langtoggle`) dispara um script inline que:
   - Atualiza o atributo `data-lang` na raiz
   - Atualiza `lang` (`pt-BR` ou `en`) para acessibilidade/SEO
   - Persiste a escolha em `localStorage` sob a chave `felipi-site-lang`
   - Troca os `href` dos links de download de CV com base em `data-pdf-pt` / `data-pdf-en`

## Regra para conteúdo novo

Ao adicionar qualquer texto visível — título, parágrafo, label de botão, alt text de imagem relevante — sempre forneça as duas versões usando esse padrão. Nunca deixe uma seção só em um idioma "para depois"; isso quebra a paridade e deixa a página incompleta quando o usuário troca o toggle.

## O que NÃO fazer

- Não crie páginas separadas por idioma (`index-en.html`), o padrão do site é conteúdo único com toggle.
- Não use `hidden` ou JS para esconder/mostrar elementos de idioma — o mecanismo já é 100% CSS, orientado pelo atributo `data-lang` na raiz.
- Não esqueça de atualizar o `alt` de imagens e o `title` da página se o conteúdo mudar de sentido entre os idiomas.
