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
  document.body.classList.toggle("menu-open");
}

function criarTopico() {
  document.getElementById("enviar-topico-duvida").style.display = "block";
  document.getElementById("criar-topico-duvida").style.display = "none";
  document.getElementById("topico-duvida-enviado").style.display = "none";
}

function enviarTopico() {
  document.getElementById("enviar-topico-duvida").style.display = "none";
  document.getElementById("topico-duvida-enviado").style.display = "flex";
}

function abrirTopico() {
  let topicoComResposta = document.getElementById("topico-com-resposta");
  let respostas = document.getElementById("respostas");
  let tresPontos = document.getElementById("tres-pontos");
  let mais = document.getElementById("mais-pergunta-topico");

  if (respostas.style.display === "none") {
    respostas.style.display = "block";
    topicoComResposta.style.marginBottom = "0";
    tresPontos.style.display = "none";
    mais.style.display = "flex";
  } else {
    respostas.style.display = "none";
    topicoComResposta.style.marginBottom = "1.6rem";
    tresPontos.style.display = "inline";
    mais.style.display = "none";
  }
}
abrirTopico();
