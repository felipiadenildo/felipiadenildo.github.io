// Motor de renderização dos posts (window.SITE_POSTS, definidos em posts.js)
// pra "Minha História" (timeline) e "Blog" (feed).
// Ver 08_Site_Pessoal/PLANO-consolidacao-2026-08-31.md, seção 12.2.
//
// Cada post é renderizado UMA vez, com os dois idiomas presentes no DOM
// simultaneamente via data-lang-el="pt"/"en" — a troca de idioma é só CSS,
// mesma convenção do resto do site. Não precisa re-renderizar ao trocar
// de idioma.
(function(){
  // Envolve um campo bilíngue { pt, en } nos spans/divs data-lang-el
  // padrão do site.
  function bi(field, tag){
    tag = tag || 'span';
    if(!field) return '';
    var pt = field.pt || '';
    var en = field.en || field.pt || '';
    return '<' + tag + ' data-lang-el="pt">' + pt + '</' + tag + '>' +
           '<' + tag + ' data-lang-el="en">' + en + '</' + tag + '>';
  }

  function renderMedia(media){
    if(!media || !media.length) return '';
    return media.map(function(m){
      var icon = m.kind === 'photo-placeholder' ? '&#128247;' : '&#9998;';
      return '<div class="gap"><span class="gap-icon" aria-hidden="true">' + icon + '</span><p>' + bi(m.note) + '</p></div>';
    }).join('');
  }

  function renderQuote(post){
    if(!post.quote) return '';
    return '<blockquote class="tl-quote">' + bi(post.quote) + '</blockquote>';
  }

  function entryClasses(post, extra){
    var classes = ['tl-entry'];
    if(extra) classes.push(extra);
    if(post.flags && post.flags.featured) classes.push('tl-entry--featured');
    return classes.join(' ');
  }

  function renderChapter(post){
    return '<div class="' + entryClasses(post, 'tl-entry--chapter') + '" id="' + post.id + '">' +
      '<p class="tl-year">' + bi(post.dateLabel) + '</p>' +
      '<h3 class="tl-title">' + bi(post.title) + '</h3>' +
      '<div class="tl-text">' + bi(post.body, 'div') + '</div>' +
      renderQuote(post) +
      renderMedia(post.media) +
      '</div>';
  }

  function renderEvent(post){
    return '<div class="' + entryClasses(post) + '" id="' + post.id + '">' +
      '<p class="tl-year">' + bi(post.dateLabel) + '</p>' +
      '<h3 class="tl-title">' + bi(post.title) + '</h3>' +
      '<div class="tl-text">' + bi(post.body, 'div') + '</div>' +
      renderMedia(post.media) +
      '</div>';
  }

  function renderPhoto(post){
    var caption = (post.media && post.media[0]) ? bi(post.media[0].note) : '';
    return '<div class="' + entryClasses(post, 'tl-entry--photo') + '" id="' + post.id + '">' +
      '<p class="tl-year">' + bi(post.dateLabel) + '</p>' +
      '<h3 class="tl-title">' + bi(post.title) + '</h3>' +
      '<div class="tl-photo-feature"><div class="gap"><span class="gap-icon" aria-hidden="true">&#128247;</span><p>' + caption + '</p></div></div>' +
      '<div class="tl-text">' + bi(post.body, 'div') + '</div>' +
      '</div>';
  }

  function renderNote(post){
    return '<div class="' + entryClasses(post, 'tl-entry--note') + '" id="' + post.id + '">' +
      '<div class="tl-card">' +
      '<h3 class="tl-title">' + bi(post.title) + '</h3>' +
      '<div class="tl-text">' + bi(post.body, 'div') + '</div>' +
      '</div></div>';
  }

  var RENDERERS = { chapter: renderChapter, event: renderEvent, photo: renderPhoto, note: renderNote };

  function sortKeyOf(post){
    if(!post.date) return null;
    return String(post.date).split('/')[0];
  }

  function renderTimeline(containerSelector){
    var el = document.querySelector(containerSelector);
    if(!el) return;
    var posts = (window.SITE_POSTS || []).filter(function(p){
      return p.flags && p.flags.timeline && !p.flags.draft;
    });
    posts.sort(function(a, b){
      var ka = sortKeyOf(a), kb = sortKeyOf(b);
      if(ka === null && kb === null) return 0;
      if(ka === null) return 1;   // sem data vai pro fim, por enquanto
      if(kb === null) return -1;
      return ka < kb ? -1 : (ka > kb ? 1 : 0);
    });
    el.innerHTML = posts.map(function(p){
      return (RENDERERS[p.type] || renderEvent)(p);
    }).join('');
  }

  function renderBlog(containerSelector, emptyStateSelector){
    var el = document.querySelector(containerSelector);
    if(!el) return;
    var posts = (window.SITE_POSTS || []).filter(function(p){
      return p.flags && p.flags.blog && !p.flags.draft;
    });
    if(!posts.length) return; // deixa o estado vazio estático como está
    posts.sort(function(a, b){
      var ka = sortKeyOf(a), kb = sortKeyOf(b);
      if(ka === null || kb === null) return 0;
      return ka > kb ? -1 : (ka < kb ? 1 : 0); // mais recente primeiro
    });
    var empty = emptyStateSelector ? document.querySelector(emptyStateSelector) : null;
    if(empty) empty.hidden = true;
    el.innerHTML = posts.map(function(p){
      return (RENDERERS[p.type] || renderEvent)(p);
    }).join('');
  }

  window.SiteRender = { renderTimeline: renderTimeline, renderBlog: renderBlog };
})();
