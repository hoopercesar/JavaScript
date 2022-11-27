function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} dice hola`);
    },
    comer() {
      console.log(`${this.nome} está comiendo`);
    },
    beber() {
      console.log(`${this.nome} está comiendo`);
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    saobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("juan", "soto");
const p2 = criaPessoa("maria", "pires");
console.log(p2);
