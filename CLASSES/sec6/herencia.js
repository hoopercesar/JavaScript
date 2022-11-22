// Produto -> aumento ou desconto
// caamiseta= cor, caneta=material, lapis

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (percentagem) {
  this.preco = this.preco * (1 + percentagem / 100);
};

Produto.prototype.desconto = function (percentagem) {
  this.preco = this.preco * (1 - percentagem / 100);
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
// Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto("algo", 120);
const camiseta = new Camiseta("regata", 7.5, "blue");
camiseta.aumento(10);
console.log(camiseta);
console.log(produto);

console.log("--------- * -------------");

function Vidro(nome, preco, tipo) {
  Produto.call(this, nome, preco);
  this.tipo = tipo;
}
// para heredar los métodos de Produto
Vidro.prototype = Object.create(Produto.prototype);
Vidro.prototype.constructor = Vidro;

const ventana = new Vidro("templado", 120, "polarizado");
console.log(ventana);
ventana.desconto(5);
console.log(ventana);

console.log("----------- CANECA------------");

function Caneca(nome, preco, cor, material, quantidade) {
  Produto.call(this, nome, preco);
  this.cor = cor;
  this.material = material;
  this.quantidade = quantidade;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// por cada 5 unidades descuenta 2% vidrio, 1% plástico
Caneca.prototype.descuento = function () {
  if (this.material === "vidro") {
    return (this.preco =
      this.preco * (1 - 0.02 * Math.trunc(this.quantidade / 5)));
  } else if (this.material === "plastico") {
    return (this.preco =
      this.preco * (1 - 0.01 * Math.trunc(this.quantidade / 5)));
  }
};

const caneca = new Caneca("caneca", 100, "red", "plástico", 5);
caneca.descuento();
console.log(caneca);
