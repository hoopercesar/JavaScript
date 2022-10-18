// escrever uma função que receba uma imagem
// e retorne se a imagem está em modo paisagem

function ePaisagem(altura, largura) {
  return largura > altura;
}

// console.log(ePaisagem(400, 300));
if (ePaisagem(400, 300)) {
  console.log("Modo Paisagem");
} else {
  console.log("Modo Portrait");
}

// con error function
const ePaisaje = (altura, largura) => largura > altura;

ePaisaje(200, 400) ? console.log("Modo Paisaje") : console.log("Modo retrato");
