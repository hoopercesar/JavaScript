function formulario() {
  // seleccionamos el formulario
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  console.log("datos enviados");

  function submitForm(evento) {
    evento.preventDefault();
    const altura = form.querySelector(".altura").value;
    const peso = form.querySelector(".peso").value;
    console.log(altura, peso);
  }
  const dados = form.addEventListener("submit", submitForm);
}

formulario();
