function formulario() {
  // seleccionamos el formulario

  const form = document.querySelector(".form");
  const resultados = document.querySelector(".resultados");
  //console.log("datos enviados");

  function submitForm(evento) {
    evento.preventDefault();
    const altura = form.querySelector(".altura").value;
    // no está leyndo valores decimales en la altura!!
    const peso = form.querySelector(".peso").value;
    const imc = calculoImc(peso, altura);
    const mensaje = Mensaje(imc);

    let resultado;
    if (!peso || !altura) {
      resultado = "Ingrese sus datos Correctamente";
    } else {
      resultado = `<p>Tu IMC es ${imc}. ${mensaje} </p>`;
    }
    console.log(mensaje);

    resultados.innerHTML = resultado;
  }
  const dados = form.addEventListener("submit", submitForm);
}

function calculoImc(peso, altura) {
  let h = altura / 100;
  let imc = peso / h ** 2;
  return imc.toFixed(2);
}

function Mensaje(imc) {
  let mensaje;
  if (imc < 18.5) {
    mensaje = "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensaje = "Peso normal";
  } else if (imc > 24.9 && imc <= 29.9) {
    mensaje = "Sobrepeso";
  } else if (imc > 29.9 && imc <= 34.9) {
    mensaje = "Obesidad grado 1";
  } else if (imc > 34.9 && imc <= 39.9) {
    mensaje = "Obesidad grado 2";
  } else {
    mensaje = "Obesidad grado 3";
  }

  return mensaje;
}

formulario();
