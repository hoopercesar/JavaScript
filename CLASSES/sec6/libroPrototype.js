function IngresaLibros(titulo, autor, year, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.year = year;
  this.genero = genero;
}

IngresaLibros.prototype.eventos = function () {
  this.formulario.addEventListener("submit", (ev) => {
    this.handleSubmit(ev);
  });
};

IngresaLibros.prototype.handleSubmit = function (ev) {
  ev.preventDefault();
};

// validación que los campos hayan sido llenados
IngresaLibros.prototype.validaCampos = function () {
  formulario.querySelectorAll(".validar").forEach((campo) => {
    if (!campo.value) {
      this.mensajeError(campo, "Debe llenar campo");
    }
  });
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
