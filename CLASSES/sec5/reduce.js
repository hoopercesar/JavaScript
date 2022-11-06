const nums = [5, 3, 7, 11, 6, 9, 2, 23, 54, 32, 21];

// sumar los números del arreglo
const total = nums.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

// retornar arreglo con los numeros pares
const pares = nums.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);
console.log(pares);

console.log("***********************");

// otro ejemplo
const pessoas = [
  { nome: "pepe", edad: 34 },
  { nome: "kata", edad: 13 },
  { nome: "jose", edad: 37 },
  { nome: "fercho", edad: 21 },
  { nome: "daniel", edad: 93 },
  { nome: "joao", edad: 8 },
];

// retornar a la persona mayor
const mayor = pessoas.reduce((acumulador, valor) => {
  if (valor.edad > acumulador.edad) return valor;
  return acumulador;
});
console.log(mayor);
