// se crean los métodos independientemente
const falar = {
  falar() {
    console.log(`${this.nome} dice hola`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comiendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está comiendo`);
  },
};

// luego, se reúnen en conjunto dentro del prototipol objeto
// puedo incluir los métodos que se consideren necesarios
const pessoaPrototype = { ...falar, ...beber, ...comer };
// otra forma de hacer lo anterior
// const pessoaPrototype = Object.assing({}, falar, comer, beber)

// función constructora
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    saobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("juan", "soto");
const p2 = criaPessoa("maria", "pires");
p2.beber();
