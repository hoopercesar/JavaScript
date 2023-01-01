function IngresaLibros() {
  this.formulario = document.querySelector(".formulario");
  this.eventos();
}

IngresaLibros.prototype.eventos = function () {
  this.formulario.addEventListener("submit", (ev) => {
    this.handleSubmit(ev);
    // ev.preventDefault();
    // this.validaCampos();
  });
};

IngresaLibros.prototype.handleSubmit = function (ev) {
  ev.preventDefault();
  if (this.validaCampos()) {
    this.mensajeValidacion("campos ingresados correctamente");
  }
};

IngresaLibros.prototype.mensajeValidacion = function (mensaje) {
  let div = document.createElement("div");
  div.innerHTML = mensaje;
  div.style.color = "green";
  div.style.fontSize = "20px";
  document.querySelector(".submit").insertAdjacentElement("afterend", div);
};

// validación que los campos hayan sido llenados
IngresaLibros.prototype.validaCampos = function () {
  let validacion = true;
  for (let textoError of this.formulario.querySelectorAll(".error-text")) {
    textoError.remove();
  }

  this.formulario.querySelectorAll(".validar").forEach((campo) => {
    if (!campo.value) {
      this.mensajeError(campo, "Debe llenar campo");
      validacion = false;
    }

    if (campo.classList.contains("year")) {
      if (
        isNaN(campo.value) ||
        campo.value.length !== 4 ||
        campo.value < 1850 ||
        campo.value > 2023
      ) {
        this.mensajeError(campo, "Debes ingresar un año válido");
        validacion = false;
      }
    }
  });
  return validacion;
};

IngresaLibros.prototype.mensajeError = function (campo, mensaje) {
  let div = document.createElement("div");
  div.innerHTML = mensaje;
  div.style.color = "blue";
  div.style.fontSize = "15px";
  div.classList.add("error-text");
  campo.insertAdjacentElement("afterend", div);
};

const libro = new IngresaLibros();
