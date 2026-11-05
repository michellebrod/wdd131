"use strict";

const botaoMenu = document.querySelector("#botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");
const anoAtual = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

botaoMenu.addEventListener("click", () => {
  const aberto = menuPrincipal.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  botaoMenu.textContent = aberto ? "✕" : "☰";
});

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
