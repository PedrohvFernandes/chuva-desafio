function leiaMais() {
  let pontos = document.getElementById("pontos");
  let maisTexto = document.getElementById("mais");
  let btnVerMais = document.getElementById("btnVerMais");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnVerMais.innerHTML = "Ver mais";
  } else {
    pontos.style.display = "none";
    maisTexto.style.display = "flex";
    btnVerMais.innerHTML = "Ver menos";
  }
}

// Função para abrir o modal de login
function abrirModalUsuario() {
  let modalUser = document.getElementById("modal-usuario-responsivo");
  if (window.innerWidth <= 895) {
    if (modalUser.style.display === "none") {
      modalUser.style.display = "block";
    } else {
      modalUser.style.display = "none";
    }
  } else {
    modalUser.style.display = "none";
  }
}
abrirModalUsuario();

// Função para abrir o menu de navegação
function abrirMenu() {
  document.body.classList.toggle("menu-open")
}