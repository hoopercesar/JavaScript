let a = "A";
let b = "B";
let c = "C";

// console.log(a, b, c);
// la salida será A, B, C

// si asignamos otros valores
[a, b, c] = [b, c, a];
console.log(a, b, c);

// DESESTRUCTURACIÓN
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2, num3, ...resto] = nums;
// asigna los primeros dos números del arreglo nums a num1 y num2
// respectivamente. y el resto de los números del areglo los
// asigna a resto.
console.log(num1, num2, num3);
console.log(resto);

// se puede escoger alternando la elección
const [uno, , tres, , , seis] = nums;
console.log(uno, tres, seis);

const arreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [, [, , algo]] = arreglo;
console.log(algo);
