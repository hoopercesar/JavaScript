// MANIPULANDO PROTOTYPES
// new Object --> Object.prototype

const objA = {
  chaveA: "A",
  chaveA2: "otra A",
  // __proto__ : Object.prototype
};

const objB = {
  chaveB: "B",
};

// podemos manipular las chaves del objB para acceder a las chaves de objA
// a través del objB. Para éso, primero debemos vincular ambos objetos
Object.setPrototypeOf(objB, objA);
// ahora que están vinculados podemos acceder a las chaves de objA
// pero observemos lo siguiente:
console.log(objB); // retorna sólo las claves-valor con las que fue definido
// el objB
console.log(objB.chaveA); // retorna el valor de la chaveA A
// entonces, las claves del objA se transformaron en el __proto__ del objB
// es decir, se cumple que objB.__proto__ = objA
console.log(objB.__proto__); // {chaveA: 'A', chaveA2: 'otra A'}

const objC = {
  chaveC: "C",
};
Object.setPrototypeOf(objC, objB); // el objC pasa pelo objB que passa pelo objA
console.log(objC.chaveA); // A

// Aplicado a funciones constructoras
function Produto(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
}

// método para restar un % de descuento
Produto.prototype.desconto = function (percentagem) {
  return (this.preco = this.preco * (1 - percentagem / 100));
};

// método del constructor Produto que aumenta el precio
Produto.prototype.aumento = function (percentagem) {
  return (this.preco = this.preco * (1 + percentagem / 100));
};

const p1 = new Produto("vaso", 10, 5);
p1.aumento(100);
console.log(p1);

// creamos un objeto literal
const p2 = {
  nome: "caneca",
  preco: 15,
};
console.log("==============");
console.log(p2);
// console.log(p2.aumento(100)); // ERROR: no reconoce la función aumento() en p2

// traspasamos prototype a p2
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2); // Produto {nome: 'caneca', preco: 16.5}
// Qué ocurrió aquí?? p2 se definió literalmente (no a través de función constructora)
// la función prototype está asociada inicialmente sólo a los objetos creados
// con la función constructora, pero con el método setPrototypeOf se traspasó el prototype
// y se puede llamar el método desde p2, de tal modo que p2 aparece generada por Produto
