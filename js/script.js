//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
    console.log(link);
  }
}

links.forEach(ativarLink);

//Ativar Item orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (parametro) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Ativar perguntasfrequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// Ativar Galeria de Imagem

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const midia = matchMedia("(min-width: 1000px)").matches;
  if (midia) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
