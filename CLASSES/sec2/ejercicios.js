function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultados");
  const personas = [];
  // form.onsubmit = function (ev) {
  //   ev.preventDefault();
  //   alert(1);
  //   console.log("se envió");
  // };

  // esta función hace el mismo trabajo que la anterior que está comentada
  // y ademas muestra los datos en el DOM
  function submitForm(evento) {
    evento.preventDefault();
    nome = form.querySelector(".nombre").value;
    apellido = form.querySelector(".apellido").value;
    peso = form.querySelector(".peso").value;
    altura = form.querySelector(".altura").value;

    const dados = { nome, apellido, peso, altura };
    personas.push(dados);
    console.log(personas);
    resultado.innerHTML = `<p>${dados.nome}, ${dados.apellido}, 
    ${dados.peso}, ${dados.altura}</p>`;

    return dados;
  }
  const dados = form.addEventListener("submit", submitForm);
}
meuEscopo();
