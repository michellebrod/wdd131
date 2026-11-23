const parametros = new URLSearchParams(window.location.search);
const produto = parametros.get("produto");
const classificacao = parametros.get("classificacao");
const dataInstalacao = parametros.get("dataInstalacao");
const mensagem = document.querySelector("#mensagem-confirmacao");
const total = document.querySelector("#total-avaliacoes");

// A confirmação só conta quando os campos obrigatórios foram enviados.
if (produto && classificacao && dataInstalacao) {
  const contadorAnterior = Number.parseInt(localStorage.getItem("contadorAvaliacoes") || "0", 10);
  const contadorAtual = (Number.isNaN(contadorAnterior) ? 0 : contadorAnterior) + 1;
  localStorage.setItem("contadorAvaliacoes", `${contadorAtual}`);
  mensagem.textContent = "Sua avaliação foi enviada com sucesso! Obrigada pela participação.";
  total.textContent = `Você concluiu ${contadorAtual} avaliação(ões) neste navegador.`;
} else {
  mensagem.textContent = "Nenhuma avaliação foi recebida. Preencha o formulário para enviar sua opinião.";
  const contadorAnterior = Number.parseInt(localStorage.getItem("contadorAvaliacoes") || "0", 10);
  const contador = Number.isNaN(contadorAnterior) ? 0 : contadorAnterior;
  total.textContent = `Avaliações concluídas neste navegador: ${contador}.`;
}

let d = new Date();
document.querySelector("#anoAtual").textContent = d.getFullYear();
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;
