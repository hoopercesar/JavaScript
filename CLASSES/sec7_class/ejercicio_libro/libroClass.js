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
    if (this.sonCamposValidos()) {
      console.log("Campos validados");
      this.creaArreglos();
    }
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

      if (campo.classList.contains("year")) {
        console.log(campo.value.length);
        if (
          isNaN(campo.value) ||
          campo.value.length !== 4 ||
          +campo.value < 1850 ||
          +campo.value > 2023
        ) {
          this.mensajeError(campo, "Debes ingresar un año válido");
          valid = false;
        }
      }
    });
    return valid;
  }

  creaArreglos() {
    let lista = [];
    let dic = {};
    document.querySelectorAll(".validar").forEach((campo) => {
      // console.log(campo.classList[0], campo.value);
      dic[campo.classList[0]] = campo.value;
    });
    lista.push(dic);
    console.log(lista);
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
