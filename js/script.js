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
