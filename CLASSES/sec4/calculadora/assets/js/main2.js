function Calculadora() {
  this.numero = 3;
  this.display = document.querySelector(".display");

  this.inicia = function () {
    this.clicqueBotoes();
  };

  // función para mostrar numeros clicados
  this.btnParaDisplay = function (valor) {
    this.display.value += valor;
  };

  // función principal que llama otras funciones con el evento click
  this.clicqueBotoes = function () {
    document.addEventListener("click", (ev) => {
      const elem = ev.target;
      console.log(elem);

      if (elem.classList.contains("btn-num")) {
        this.btnParaDisplay(elem.innerText);
      }
    });
  };
}
const calc = new Calculadora();
calc.inicia();
// console.log(calc.numero);
