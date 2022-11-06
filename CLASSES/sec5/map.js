// maps cambia los valores del array

const nums = [5, 3, 7, 11, 6, 9, 2, 23, 54, 32, 21];

// duplicar cada número
const doble = nums.map((num) => 2 * num);
console.log(doble);

// ejemplos
const pessoas = [
  { nome: "pepe", edad: 34 },
  { nome: "kata", edad: 13 },
  { nome: "jose", edad: 37 },
  { nome: "fercho", edad: 21 },
  { nome: "daniel", edad: 93 },
  { nome: "joao", edad: 8 },
];

// retorna array con los nombres de cada objeto
const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

// retorna un objeto con las edades
const objEdad = pessoas.map((obj) => ({ edad: obj.edad }));
console.log(objEdad[0], objEdad[2], objEdad[3]);

// adicionar la llave ID para cada objeto
const ids = pessoas.map((obj, indice) => {
  obj.id = 1000 * (indice + 1);
  return obj;
});
console.log(ids[0], ids[4]);
