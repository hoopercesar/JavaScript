// IEEE 754 2008

const num1 = 3.2345;
const num2 = 4;
let num3 = 0.7;
let num4 = 0.1;

console.log(Number.isInteger(num2)); // booleano para determinar si número es entero
console.log(num1.toFixed(3)); // corta la cantidad de decimales

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0
console.log(Number.isInteger(num3), num3);
// num3 (que aquí vale 1.0) no lo lee como un entero
// para resolverlo debemos usar lo siguiente
num3 = parseFloat(num3.toFixed(2));
// con la línea anterior resolvemos el problema de la impresición
// al sumar números decimales
console.log("es entero?:", Number.isInteger(num3), num3);
num3 += num4; // 1.1
num3 += num4; // 1.2
num3 += num4; // 1.3
console.log("es entero?:", Number.isInteger(num3), num3);
num3 = parseFloat(num3.toFixed(2)); // quitamos la impresición
console.log("es entero?:", Number.isInteger(num3), num3);
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0
console.log("es entero?:", Number.isInteger(num3), num3);
num3 = Number(num3.toFixed(2)); // este método produce el mismo resultado
console.log("es entero?:", Number.isInteger(num3), num3);
