let num1 = 9.49587;
let num2 = 9.5;

console.log("con floor:", Math.floor(num1));
console.log("con ceil:", Math.ceil(num1));
console.log("con round:", Math.round(num1));
console.log("con round:", Math.round(num2));

// crear un número aleatorio entero entre 20 y 80
const lista = [];
for (k = 1; k < 11; k++) {
  let aleatorio = Math.round(Math.random() * 80 + 20);
  lista.push(aleatorio);
}
console.log(lista, "el maximo:", Math.max(lista), "minimo:", Math.min(lista));
