// vamos a usar objetos para pedir datos y validar un RUN
const rut = "12.678.579-8";
const multiplicadores = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];

let total = rut.split("-");
// let verificador = total[1];
let numbers = total[0].split("");
const resultado = numbers.filter((number) => number != ".").reverse();

let suma = 0;
let k = 0;
resultado.forEach((res) => {
  suma += res * multiplicadores[k];
  k++;
  return suma;
});
let digitVer;
if (11 - (suma % 11) === 11) {
  digitVer = 0;
} else if (11 - (suma % 11) === 10) {
  digitVer = "K";
} else {
  digitVer = 11 - (suma % 11);
}

if (digitVer != total[1]) {
  console.log("Rut Incorrecto");
} else {
  console.log("Gracias por su información");
}
