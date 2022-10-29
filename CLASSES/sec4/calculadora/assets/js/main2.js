function Calculadora() {
  this.numero = 3;
  this.display = document.querySelector(".display");

  this.inicia = function () {};
}
const calc = new Calculadora();
console.log(calc.numero);
