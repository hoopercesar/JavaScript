function formulario() {
  // seleccionamos el formulario
  const form = document.querySelector(".form");
  const resultados = document.querySelector(".resultados");
  //console.log("datos enviados");

  function submitForm(evento) {
    evento.preventDefault();
    const altura = form.querySelector(".altura").value;
    const peso = form.querySelector(".peso").value;
    //console.log(altura, peso);
    const imc = peso / altura ** 2;
    console.log(imc);
    resultados.innerHTML = `<p>${imc}</p>`;
  }
  const dados = form.addEventListener("submit", submitForm);
}

formulario();
