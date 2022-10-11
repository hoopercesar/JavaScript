// para ejecutar Ctrl + F5
let nome = "ramon";
nome = "sapolio";

// se puede inicializar una variable con let, pero no asignarle
// un valor
// se puede inicializar una variable con let
// pero luego cambiar al nombre de la variable
// sin usar LET...
console.log(nome + " es tu nombre"); // salida: sapolio

console.log("Hola");
console.log(23, 45, "cesar");
console.log("mi nombre es: " + "César");

const name = "chepo";

// datos primitivos
let a = 2;
const b = a;
console.log(a, b); // 2 2

a = 3;
console.log(a, b); // 3 2
a++;
console.log(a);
// parseInt(transforma string a entero)
// parseFloat(string decimal a número)

let m = "2.3421";
console.log(typeof m, typeof parseFloat(m)); // string number

// window.confirm('consulta'); ==> arroja valor booleano
let conf = window.confirm("cierras página");
let div1 = document.querySelectorAll(".resultados");
if (conf == true) {
  div1[0].innerText = "Todo OK";
}

// se abre una ventana de diálogo en el dom
// el resultado es lo que escriba el usuario
let nombre = window.prompt("Digite su nombre");
let div2 = document.getElementsByClassName("nombre");
div2[0].innerText = nombre;

let numa = window.prompt("Digite A: ");
let numb = window.prompt("digite B: ");
let numc = window.prompt("digite C: ");
numa = parseFloat(numa);
numb = parseFloat(numb);
numc = parseFloat(numc);
let x1 = (-numb + Math.sqrt(numb ** 2 - 4 * numa * numc)) / (2 * numa);
let x2 = (-numb - Math.sqrt(numb ** 2 - 4 * numa * numc)) / (2 * numa);
let suma = x1 + x2;

alert(`Los resultados son ${x1} y ${x2}`);
