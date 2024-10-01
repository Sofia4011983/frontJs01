//INICIO DO PROJETO CALCULADORA HTML/CSS/JS

//REFERENCIAR ELEMENTOS COM JS

const app = document.querySelector("#app");

const numero1 = document.querySelector("#numero1");

const numero2 = document.querySelector("#numero2");

const btnCalcular = document.querySelector("#btnCalcular");

const resultados = document.querySelector(".resultados");

const soma = document.querySelector(".soma");

const subtracao = document.querySelector(".subtracao");

const multiplicacao = document.querySelector(".multiplicacao");

const divisao = document.querySelector(".divisao");

//CRIAR FUNÇÃO

function calcular() {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);
  soma.innerHTML = `A soma de ${n1} e ${n2} é : ${n1 + n2}`;
  //return res;
}

calcular();

//ADICIONAR ESCUTADOR DE ELEMENTOS

btnCalcular.addEventListener("click", function (evento) {
  evento.preventDefault();
  calcular();
});
