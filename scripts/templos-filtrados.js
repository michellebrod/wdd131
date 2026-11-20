'use strict';

// Dados originais fornecidos pela atividade + três templos adicionais.
const templos = [
  {
    nomeDoTemplo: 'Aba Nigeria',
    localizacao: 'Aba, Nigéria',
    consagracao: '2005, 7 de agosto',
    area: 11500,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg'
  },
  {
    nomeDoTemplo: 'Manti Utah',
    localizacao: 'Manti, Utah, Estados Unidos',
    consagracao: '1888, 21 de maio',
    area: 74792,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg'
  },
  {
    nomeDoTemplo: 'Payson Utah',
    localizacao: 'Payson, Utah, Estados Unidos',
    consagracao: '2015, 7 de junho',
    area: 96630,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg'
  },
  {
    nomeDoTemplo: 'Yigo Guam',
    localizacao: 'Yigo, Guam',
    consagracao: '2020, 2 de maio',
    area: 6861,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg'
  },
  {
    nomeDoTemplo: 'Washington D.C.',
    localizacao: 'Kensington, Maryland, Estados Unidos',
    consagracao: '1974, 19 de novembro',
    area: 156558,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg'
  },
  {
    nomeDoTemplo: 'Lima Peru',
    localizacao: 'Lima, Peru',
    consagracao: '1986, 10 de janeiro',
    area: 9600,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg'
  },
  {
    nomeDoTemplo: 'Cidade do México, México',
    localizacao: 'Cidade do México, México',
    consagracao: '1983, 2 de dezembro',
    area: 116642,
    urlDaImagem: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg'
  },
  {
    nomeDoTemplo: 'Salt Lake Utah',
    localizacao: 'Salt Lake City, Utah, Estados Unidos',
    consagracao: '1893, 6 de abril',
    area: 382207,
    urlDaImagem: 'https://a.cdn-hotels.com/gdcs/production107/d1915/6a2a1aa1-31ab-4289-9d94-43b65aa94755.jpg?h=1066&impolicy=fcrop&q=medium&w=1600'
  },
  {
    nomeDoTemplo: 'Roma Itália',
    localizacao: 'Roma, Itália',
    consagracao: '2019, 10 de março',
    area: 41010,
    urlDaImagem: 'https://pt.thechurchnews.com/resizer/v2/Z2NFDOQH2PIAMLHFCEHDMPSYAE.jpg?auth=0e8e000f5b728dabe8dbf982e04c5fe50aa185bb1602fe5cada048e73e0334ea&focal=0%2C0&height=517&width=800'
  },
  {
    nomeDoTemplo: 'São Paulo Brasil',
    localizacao: 'São Paulo, Brasil',
    consagracao: '1978, 30 de outubro',
    area: 59246,
    urlDaImagem: 'https://www.thechurchnews.com/resizer/v2/23LYMFNC3IT2KHIBOYMXDIHURY.jpg?auth=a3af2eea5ec8f7731e13cbe1545e3cf9cad05c19ac5bc715bb2badfa1887dc15&focal=0%2C0&height=900&width=1440'
  }
];

const galeria = document.querySelector('#galeria-templos');
const tituloFiltro = document.querySelector('#titulo-filtro');
const quantidadeTemplos = document.querySelector('#quantidade-templos');
const linksFiltro = document.querySelectorAll('[data-filtro]');
const botaoMenu = document.querySelector('#botao-menu');
const menuPrincipal = document.querySelector('#menu-principal');

function criarCartaoTemplo(templo) {
  const cartao = document.createElement('article');
  cartao.classList.add('cartao-templo');

  const titulo = document.createElement('h3');
  titulo.textContent = templo.nomeDoTemplo;

  const localizacao = document.createElement('p');
  const textoLocalizacao = document.createElement('strong');
  textoLocalizacao.textContent = 'Localização: ';
  localizacao.append(textoLocalizacao, document.createTextNode(templo.localizacao));

  const consagracao = document.createElement('p');
  const textoConsagracao = document.createElement('strong');
  textoConsagracao.textContent = 'Consagrado: ';
  consagracao.append(textoConsagracao, document.createTextNode(templo.consagracao));

  const area = document.createElement('p');
  const textoArea = document.createElement('strong');
  textoArea.textContent = 'Área: ';
  area.append(textoArea, document.createTextNode(`${templo.area.toLocaleString('pt-BR')} pés²`));

  const imagem = document.createElement('img');
  imagem.src = templo.urlDaImagem;
  imagem.alt = `Vista externa do Templo de ${templo.nomeDoTemplo}`;
  imagem.loading = 'lazy';
  imagem.decoding = 'async';
  imagem.width = 400;
  imagem.height = 250;

  cartao.append(titulo, localizacao, consagracao, area, imagem);
  return cartao;
}

function exibirTemplos(listaDeTemplos) {
  galeria.replaceChildren(...listaDeTemplos.map(criarCartaoTemplo));
  quantidadeTemplos.textContent = `${listaDeTemplos.length} ${listaDeTemplos.length === 1 ? 'templo encontrado' : 'templos encontrados'}`;
}

function filtrarTemplos(tipo) {
  switch (tipo) {
    case 'antigos':
      return templos.filter((templo) => Number.parseInt(templo.consagracao, 10) < 1900);
    case 'novos':
      return templos.filter((templo) => Number.parseInt(templo.consagracao, 10) > 2000);
    case 'grandes':
      return templos.filter((templo) => templo.area > 90000);
    case 'pequenos':
      return templos.filter((templo) => templo.area < 10000);
    default:
      return templos;
  }
}

const titulos = {
  todos: 'Todos os templos',
  antigos: 'Templos antigos — antes de 1900',
  novos: 'Templos novos — depois de 2000',
  grandes: 'Templos grandes — acima de 90.000 pés²',
  pequenos: 'Templos pequenos — abaixo de 10.000 pés²'
};

function selecionarFiltro(tipo) {
  const filtro = Object.hasOwn(titulos, tipo) ? tipo : 'todos';
  tituloFiltro.textContent = titulos[filtro];
  exibirTemplos(filtrarTemplos(filtro));

  linksFiltro.forEach((link) => {
    const selecionado = link.dataset.filtro === filtro;
    link.classList.toggle('ativo', selecionado);
    if (selecionado) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  menuPrincipal.classList.remove('aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
  botaoMenu.textContent = '☰';
}

linksFiltro.forEach((link) => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault();
    const filtro = link.dataset.filtro;
    selecionarFiltro(filtro);
    window.history.replaceState(null, '', `#${filtro}`);
  });
});

botaoMenu.addEventListener('click', () => {
  const aberto = menuPrincipal.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', `${aberto}`);
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  botaoMenu.textContent = aberto ? '✕' : '☰';
});

document.querySelector('#anoAtual').textContent = `${new Date().getFullYear()}`;
document.querySelector('#ultimaModificacao').textContent = `Última modificação: ${document.lastModified}`;
selecionarFiltro(window.location.hash.slice(1));
