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
alert("alguien te mira");

// window.confirm('consulta'); ==> arroja valor booleano
let conf = window.confirm("cierras página");
let divs = document.querySelectorAll(".resultados");
if (conf == true) {
  divs[0].innerText = "Todo OK";
}
