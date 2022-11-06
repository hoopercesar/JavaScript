const nums = [5, 3, 7, 11, 6, 9, 2, 23, 54, 32, 21];

// usando filter, map y reduce vamos a hacer lo siguiente
// escoger  los impares
// duplicarlos
// sumarlos

const resultado = nums
  .filter((num) => num % 2 !== 0)
  .map((num) => 2 * num)
  .reduce((ac, valor) => ac + valor);
console.log(resultado);
