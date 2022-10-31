function Calculadora() {
  this.numero = 3;
  this.display = document.querySelector(".display");

  this.inicia = function () {
    this.clicqueBotoes();
  };

  this.clicqueBotoes = function () {
    document.addEventListener("click", (ev) => {
      const elem = ev.target;
      console.log(elem);
    });
  };
}
const calc = new Calculadora();
calc.inicia();
// console.log(calc.numero);
