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

const num2 = numeros.filter((num, indice) => {
  console.log(num, indice);
  return num > 10;
});
console.log(num2);

const nomes = ["pepe", "kata", "jose", "fercho", "daniel", "joao"];

const names = nomes.filter((nome) => nome[1] === "e");
console.log(nomes);
// console.log(names);
