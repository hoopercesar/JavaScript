function esperaAi(mensaje, tempo) {
  setTimeout(() => {
    console.log(mensaje);
  }, tempo);
}

console.log("activo");
const espera = esperaAi("chucha", 2000);
