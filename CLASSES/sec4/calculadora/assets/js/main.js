function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    // btnClear: document.querySelector(".btn-clear"),
    // btnEqual: document.querySelector(".btn-eq"),

    inicia() {
      this.cliqueBotoes();
      this.cliqueEnter();
    },

    cliqueEnter() {
      this.display.addEventListener("keyup", (ev) => {
        if (ev.keyCode === 13) {
          this.resultadoOperacao();
        }
      });
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
      this.display.value = "";
    },

    resultadoOperacao() {
      let resultado = this.display.value;

      try {
        resultado = eval(resultado);
        if (!resultado) {
          alert("Resultado Inválido");
          return;
        }
        this.display.value = resultado;
      } catch (e) {
        alert("Resultado Inválido");
        return;
      }
    },

    // este método hace el llamado a cada función
    // según el botón al que se haga click que se lee con
    // el addEventListener

    cliqueBotoes() {
      // aquí this es la calculadora
      document.addEventListener("click", (ev) => {
        const elem = ev.target;
        // console.log(this);

        if (elem.classList.contains("btn-num")) {
          this.btnParaDisplay(elem.innerText);
        }

        if (elem.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (elem.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (elem.classList.contains("btn-eq")) {
          this.resultadoOperacao(this.display.value);
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
      // console.log(this.display.value);
    },
  };
}
// console.log(display);
const calculadora = criaCalculadora();
calculadora.inicia();