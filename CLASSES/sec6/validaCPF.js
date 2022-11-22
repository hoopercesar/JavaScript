// let cpf = "705.484.450-52";
let cpf = "064.890.987-50";

// separa números de verificador. separa numeros en lista
let numbers = cpf.split("-")[0].split("");

// filtra puntos
let resultado = numbers.filter((a) => a != ".");

let suma = 0;
let k = 10;
let ver1;
resultado.forEach((a) => {
  suma += a * k;
  k--;
  return suma;
});

// primer dígito verificador
if (11 - (suma % 11) > 9) {
  ver1 = 0;
} else {
  ver1 = 11 - (suma % 11);
}
// agrega ver1 a lista de números
resultado.push(ver1);

let n = 11;
let suma2 = 0;
let ver2;
resultado.forEach((a) => {
  suma2 += a * n;
  n--;
  return suma2;
});
// primer dígito verificador
if (11 - (suma2 % 11) > 9) {
  ver2 = 0;
} else {
  ver2 = 11 - (suma2 % 11);
}

// console.log(resultado, ver2);

let verificador = [ver1.toString(), ver2.toString()].reduce((a, b) => a + b);
if (verificador != cpf.split("-")[1]) {
  console.log("CPF errado");
} else {
  console.log("CPF correcto");
}
