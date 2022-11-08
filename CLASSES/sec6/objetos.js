const pessoa = {
  nome: "pepe",
  sobrenome: "soto",
  peso: 80,
  altura: 170,
  edad: 30,

  falarNome: function () {
    return `${this.nome} es un personaje`;
  },

  getDataNacimento: function () {
    const dateAtual = new Date();
    return dateAtual.getFullYear() - this.edad;
  },

  imc: function () {
    return (this.peso / (this.altura / 100) ** 2).toFixed(2);
  },
};

console.log(pessoa.falarNome(), pessoa.getDataNacimento());
console.log("------------------- * -------------");

// factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,

    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("carla", "soto");
console.log(p1.nomeCompleto());

console.log("------*------");

// función constructora
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// la palabra New crea un objeto y luego asigna this dentro del objeto
// para devolver el mismo this.
// usamos this porque esa palabra representa el objeto creado.
// this.nome es la representación de objeto.nome ó objeto['nome'].
// this es la representación en abstracto del objeto
const person1 = new Pessoa("alex", "perez");
const alguien = new Pessoa("maria", "yepe");

person1.nome = "checho maraco"; // cambia el nombre de alex a carlos
Object.freeze(alguien); // con este comendo se protege el contenido del ojeto alguien
alguien.nome = "pepa"; // así no cambia el nombre que se mantiene como maria

person1.habla = function () {
  return `Hola ${this.nome}`;
};

console.log(person1.habla());
// console.log(alguien);
