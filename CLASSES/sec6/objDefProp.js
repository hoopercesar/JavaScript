function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque; // de esta manera esta variable es publica

  // de esta manera esta propiedad es privada
  Object.defineProperty(this, "estoque", {
    enumerable: true, // muestra la llave
    value: estoque, // muestra el valor de la llave
    writable: false, // alterar el valor o no (true or false)
    configurable: true, // configurable las propiedades
  });

  // a
  Object.defineProperty(this, "estoque", {
    enumerable: true, // muestra la llave
    value: estoque, // muestra el valor de la llave
    writable: true, // alterar el 'valor' (o no) (true or false)
    configurable: false, // configurable las propiedades
  });
}

const prod1 = new Produto("camiseta", 10, 3);

console.log(prod1);
prod1.estoque = 500000;

console.log(prod1);
