// Easter egg simples e visual: código Konami ativa uma trilha de
// patinhas cruzando a tela. Ligado ao Gatos do C2 / felinet, não só
// referência genérica de videogame. Requer o CSS .paw-trail / @keyframes
// paw-walk já presente na página (ver <style> de cada .html).
(function(){
  var seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  var pos = 0;

  function normalize(key){
    return key.length === 1 ? key.toLowerCase() : key;
  }

  function spawnPaws(){
    var el = document.createElement('div');
    el.className = 'paw-trail';
    el.textContent = '🐾🐾🐾🐾🐾';
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 3500);
  }

  window.addEventListener('keydown', function(e){
    var key = normalize(e.key);
    if(key === seq[pos]){
      pos++;
      if(pos === seq.length){
        pos = 0;
        spawnPaws();
      }
    } else {
      pos = (key === seq[0]) ? 1 : 0;
    }
  });
})();
