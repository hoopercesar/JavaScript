// todas las propiedades se definen con defineproperty()
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: true,
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: true,
    },

    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: false,
    },
  });
}

const prod1 = new Produto("camiseta", 10, 3);

console.log(prod1);
prod1.estoque = 500000;

for (let chave in prod1) {
  console.log(chave);
}
