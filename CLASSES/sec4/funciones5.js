// return

function suma(a, b) {
  return a + b;
}
// console.log(suma(3, 8));

function suma2(a, b) {
  console.log(a + b);
}
// suma2(3, 5);

let x1 = suma(3, 8);
let x2 = suma2(3, 6);
console.log(typeof x1, typeof x2); // number undefined
// la primera función retorna un número
// la segunda función retorna indefinido

document.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  // con click el body queda en rojo
});

function criaObjeto(nome, sobrenome) {
  return { nome, sobrenome };
}

const obj1 = criaObjeto("andres", "perez");
const obj2 = {
  nome: "juan",
  sobrenome: "soto",
};
console.log(typeof obj1, typeof obj2);
