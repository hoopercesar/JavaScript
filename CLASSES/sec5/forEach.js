const nums = [5, 3, 7, 11, 6, 9, 2, 23, 54, 32, 21, 67, 12];

let resultado = [];
nums.forEach((num) => {
  resultado.push(num * 3);
});
console.log(resultado);

// sumar
let suma = 0;
nums.forEach((num) => (suma += num));
console.log(suma);

// seleccionar los pares
let pares = [];
nums.forEach((num) => {
  if (num % 2 === 0) pares.push(num);
});
console.log(pares);

console.log("------------ * -----------");

const pessoas = [
  { nome: "pepe", edad: 34 },
  { nome: "kata", edad: 13 },
  { nome: "jose", edad: 37 },
  { nome: "fercho", edad: 21 },
  { nome: "daniel", edad: 93 },
  { nome: "joao", edad: 8 },
];

let age = 0;
pessoas.forEach((a, b) => {
  console.log(a, b);
});
