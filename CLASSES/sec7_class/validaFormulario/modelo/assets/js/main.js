class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (ev) => {
      this.handleSubmit(ev);
    });
  }

  // el evento que envía los datos por submit
  handleSubmit(ev) {
    ev.preventDefault();
    const validos = this.saoCamposValidos();
    console.log(validos);
  }

  saoCamposValidos() {
    let valid = true;
    document.querySelectorAll(".validar").forEach((campo) => {
      if (!campo.value) {
        this.criaErro(campo, "Debe llenar el campo ");
      }
      console.log(campo.classList[0]);
    });

    // for (let campo of this.formulario.querySelectorAll(".validar")) {
    //   console.log(campo);
    // }
  }

  criaErro(campo, mensaje) {
    const div = document.createElement("div");
    div.innerHTML = mensaje;
    div.style.color = "red";
    div.style.fontSize = "15px";
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
