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

    // para que no s repita el mensaje de error al reenviar
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    document.querySelectorAll(".validar").forEach((campo) => {
      if (!campo.value) {
        this.criaErro(campo, `Ingresse ${campo.classList[0]}`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }
    });
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido");
    }
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
