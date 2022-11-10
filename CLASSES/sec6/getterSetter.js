function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,

    get: function () {
      return estoquePrivado;
    },

    set: function (valor) {
      // vamos a validar que elvalor ingresado sea un número
      // y no un string
      if (typeof valor !== "number") {
        throw new TypeError("Valor mal ingresado. Reingrese el estoque");
      }

      estoquePrivado = valor;
    },
  });
}

const prod1 = new Produto("camiseta", 10, 3);
prod1.estoque = 800984; // este es el argumento que llega a función set
console.log(prod1.estoque);
