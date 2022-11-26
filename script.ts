function somar (a: number, b: number) {
  return a + b;
}

console.log(somar(2, 7));

const barato: boolean | string = 200 < 400 ? true : "produto caro";

// Não é necessário anotar o tipo desta forma, pois o ts trabalha com inferência.

// A declaração do tipo será útil principalmente para especificar o tipo 
// de um ou mais parâmetros quando criarmos funções.

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreço(produto: {nome: string; preco: string}) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
};

transformarPreço(nintendo);
console.log(nintendo);

// Exercício 1: conserte os erros da seguinte função:
function normalizaTexto(texto: string) {
  return texto.trim().toLowerCase();
};

console.log(normalizaTexto(' DDEWF  '));

// Exercício 2
const input = document.querySelector('input');
const p = document.querySelector('p');
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(+input.value);
};

function calcularGanho(value: number) {
  if (p) {
    p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
  }
};

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(+input.value);
  }

};

if (input) {
  input.addEventListener('keyup', totalMudou);
};

console.log("teste");