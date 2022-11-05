const nomes = ["pepe", "kata", "jose", "fercho", "daniel", "joao"];

// array.splice(indice, delete, elem1, elem2, elem3, ...)
// delete: cantidad de elemntos a borrar a partir del índice
// elem1, elem2... son los elementos a adicionar
// splice guarda los elemntos eliminados

console.log(nomes, nomes.splice(2, 3)); // ['pepe', 'kata', 'joao']
// eliminó 3 elementos, a partir del índice 2

const elim = nomes.splice(1, 1);
console.log(elim); // kata
const agreg = nomes.splice(1, 0, "juan", "camila", "fer", "doroty");
console.log(nomes); // [pepe, juan, camila, fer, doroty, joao]
