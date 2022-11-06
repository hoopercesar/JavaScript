// filter retorna un array con la cantiad original o menos

const numeros = [5, 50, 1, 80, 2, 3, 4, 19, 27, 11, 15];
// const algo = [];
// for (let k of numeros) {
//   if (k > 10) {
//     algo.push(k);
//   }
// }
// console.log(algo);

function callBackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const numerosFiltrados = numeros.filter((num) => num > 10);
console.log(numerosFiltrados);

const num2 = numeros.filter((num, indice, array) => {
  // console.log(num, indice, array);
  if (num > 10) {
    return { num, indice, array };
  }
  // return num > 10;
});
console.log(num2);
console.log("=================================");

const pessoas = [
  { nome: "pepe", edad: 34 },
  { nome: "kata", edad: 13 },
  { nome: "jose", edad: 37 },
  { nome: "fercho", edad: 21 },
  { nome: "daniel", edad: 93 },
  { nome: "joao", edad: 8 },
];
// retornar personas con nombres con más de 4 letras
const adultos = pessoas.filter((obj) => obj.nome.length > 4);
console.log(adultos);

// retornar mayores de 40 años
const viejos = pessoas.filter((obj) => obj.edad > 40);
console.log(viejos);

// retorna nombres que terminan con a
const a = pessoas.filter((obj) => obj.nome.endsWith("a"));
console.log(a[0]);

// console.log(pessoas);
// console.log(names);
