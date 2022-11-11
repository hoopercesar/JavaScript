// cómo copiar objetos
const produto = { nome: "caneca", preco: 2 };

// COPIA POR REFERENCIA
const outraCoisa = produto; // el valor de protudo y utraCoisa pueden ser alterados
// alterando sólo el valor de uno de ellos
outraCoisa.nome = "pepe";
console.log(produto); // retorno {nome: 'pepe', preco:2}

// COPIAR USANDO SPREAD
// con el operador spread podemos copiar el contenido de produto
// sin referencia, es decir, si cambiamos algún valor de la copia
// no se verá afectado el original;
const produto2 = {
  ...produto,
  material: "acero", // se puede agregar otra llave/valor
};
produto2.nome = "getulio";
console.log(produto2);

// COPIAR USANDO ASSIGN
const produto3 = Object.assign({}, produto, {
  material: "porcelanato",
  quantidade: 87,
  origem: "são paulo",
});
console.log(produto3);
produto3.nome = "lalo"; // sólo afecta al objeto produto3
console.log(produto, produto3);
