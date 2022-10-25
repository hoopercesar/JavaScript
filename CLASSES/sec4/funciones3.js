// con objetos y desestructuración
function algo({ nome, sobrenome }) {
  console.log(nome, sobrenome);
}
const obj = { nome: "pedro", cidade: "lota", sobrenome: "perez", edade: 30 };
const a = ({ nome, sobrenome } = obj);
algo(a);

// con arrays
function funcion(a, b, c) {
  console.log(a + b + c);
}

const b = [1, 7, 10, 4, 5, 6];
const c = ([x1, x2, x3, ...x] = b);
console.log(x3);
funcion(x1, x2, x3);
