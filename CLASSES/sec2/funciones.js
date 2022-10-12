function saludo(nome) {
  return `Buenos Días, ${nome}`;
}

const hola = saludo("pepe");
console.log(hola);

function suma(a = 2, b = 5) {
  const resultado = a + b;
  return resultado;
}

const resultado = suma();
console.log(resultado); // 7 retorna los valores dados por defecto
console.log(suma(7, 9)); // 16 retona la suma de los valores actuales

// Otra forma de crear funciones
console.log("otra definición de funciones");

const raiz = function (n) {
  return Math.sqrt(n);
};

console.log(raiz(4), raiz(7), raiz(-9));

console.log(`<br />`);
console.log("arrow function");
const cubo = (n) => n ** 3;

console.log(cubo(3));
