// función que entrega el valos máximo entre dos números

function maximo(a, b) {
  resultado = Math.max(a, b);
  return resultado;
}

// otra versión
function maximo2(a, b) {
  return a > b ? a : b;
}

// version con error function
const max3 = (a, b) => (a > b ? a : b);

console.log(maximo(5, 8));
console.log(maximo2(25, 10));
console.log(max3(27.43, 27.435));
