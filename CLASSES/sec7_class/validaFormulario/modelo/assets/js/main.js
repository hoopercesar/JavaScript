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
    const senhasValidas = this.senhaSaoValidas();

    if (validos && senhasValidas) {
      alert("Formulário Enviado");
      this.formulario.submit();
    }
  }

  senhaSaoValidas() {
    let valid = true;
    const senha1 = this.formulario.querySelector(".senha").value;
    const senha2 = this.formulario.querySelector(".repetirsenha").value;

    if (senha1 !== senha2) {
      valid = false;
      this.criaErro(senha2, "Senhas devem ser iguais");
    }

    return valid;
  }

  // funcion para validar CPF, RUT, USUARIO
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

      if (campo.classList.contains("rut")) {
        // console.log(campo.value);
        if (!this.validaRUT(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    });
    return valid;
  }

  // para validar cpf llama la clase ValidaCPF
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido");
    }
  }

  // Para validar rut llama la clase ValidaRUT
  validaRUT(campo) {
    const rut = new ValidaRUT(campo.value);
    if (!rut.valida()) {
      this.criaErro(campo, "RUT inválido");
    }
  }

  // para validar nombre
  validaUsuario(campo) {
    const usuario = campo.value;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuario debe contener entre 3 y 12 caracteres");
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuario deve conter números ou caracteres");
    }
    return true;
  }

  criaErro(campo, mensaje) {
    // console.log(campo);
    const div = document.createElement("div");
    div.innerHTML = mensaje;
    div.style.color = "red";
    div.style.fontSize = "15px";
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
