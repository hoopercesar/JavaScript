// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let letras = ["a", "/", "3", "N", "#", "m", "[", "@"];

function obtieneIndices(arreglo) {
  let salida = [];
  for (let k = 0; k < arreglo.length; k++) {
    salida.push(k);
  }
  return salida;
}

// let shuffledNumbers = obtieneIndices(letras).sort(() => Math.random() - 0.5);

// esta función randomiza cualquier arreglo al randomizar
// los índices del arreglo
function randomized(arreglo) {
  let randomizado = [];
  let indicesRandom = obtieneIndices(arreglo).sort(() => Math.random() - 0.5);

  indicesRandom.forEach((indice) => {
    randomizado.push(arreglo[indice]);
  });
  return randomizado;
}

console.log(randomized(letras).join("")); // [a@/3N#m
