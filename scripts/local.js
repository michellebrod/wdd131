"use strict";

const temperatura = 8; // graus Celsius
const velocidadeVento = 12; // km/h

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * velocidadeVento ** 0.16 + 0.3965 * temperatura * velocidadeVento ** 0.16;
}

const temperaturaElemento = document.querySelector("#temperatura");
const ventoElemento = document.querySelector("#vento");
const sensacaoElemento = document.querySelector("#sensacao-termica");

temperaturaElemento.textContent = temperatura;
ventoElemento.textContent = velocidadeVento;

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoElemento.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
} else {
    sensacaoElemento.textContent = "N/A";
}

document.querySelector("#anoAtual").textContent = new Date().getFullYear();
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;
