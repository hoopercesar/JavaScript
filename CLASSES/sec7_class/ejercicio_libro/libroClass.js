class Libros {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (ev) => {
      this.handleSubmit(ev);
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    // console.log(ev);
    const validos = this.sonCamposValidos();
  }

  sonCamposValidos() {
    let valid = true;

    for (let textoError of this.formulario.querySelectorAll(".error_text")) {
      textoError.remove();
    }

    document.querySelectorAll(".validar").forEach((campo) => {
      if (!campo.value) {
        this.mensajeError(campo, "Este campo debe llenarse");
        valid = false;
      }

      if (campo.classList.contains(".year")) {
        console.log(campo);
        if (typeof campo.value !== "number") {
          console.log("No ingresaste un número");
          // this.mensajeError(campo, "Ingrese Numero");
          valid = false;
        }
      }
    });

    return valid;
  }

  mensajeError(campo, mensaje) {
    let div = document.createElement("div");
    div.innerHTML = mensaje;
    div.style.color = "red";
    div.style.fontSize = "15px";
    div.classList.add("error_text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const libros = new Libros();
