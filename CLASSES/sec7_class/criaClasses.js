class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

// sólo para comparar class con la función constructora
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.fala = function () {
  console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa("pepe", "soto");
const p2 = new Pessoa2("jõao", "pires");
// p1.falar();
console.log(p1);
console.log(p2);
