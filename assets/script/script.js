function leiaMais() {
    let pontos = document.getElementById('pontos');
    let maisTexto = document.getElementById('mais');
    let btnVerMais = document.getElementById('btnVerMais');

    if(pontos.style.display === 'none'){
      pontos.style.display = 'inline';
      maisTexto.style.display = 'none';
      btnVerMais.innerHTML = 'Ver mais';    
    } else {
      pontos.style.display = 'none';
      maisTexto.style.display = 'flex';
      btnVerMais.innerHTML = 'Ver menos';
    }
}