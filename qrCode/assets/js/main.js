// const qrcode = new QRCode("qrcode", "https://www.geeksforgeeks.org");
const inputs = document.querySelectorAll(".input");
let datos = {};

document.addEventListener("click", (ev) => {
  ev.preventDefault();
  const elem = ev.target;

  if (elem.innerHTML === "Enviar") {
    datos = creaDatos();
    // return datos;
    const texto = JSON.stringify(datos);
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: texto,
      width: 300,
      height: 300,
      colorDark: "#5868bf",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
  // console.log(datos);
});

function creaDatos() {
  inputs.forEach((input) => {
    datos[input.classList[1]] = input.value;
  });
  return datos;
}

// console.log(texto);
