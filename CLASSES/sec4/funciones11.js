// função fábrica, fabrica objetos
// função construtora constroi objetos

function Pessoa(nome, sobrenome, CPF) {
  // atributos y métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  const cpf = CPF;

  this.metodo = function () {
    console.log(`${this.nome} : sou um método`);
  };

  // atributos y métodos privados
  const metodoPrivado = function () {
    console.log("ésto no es de acceso público");
  };

  // const CPF = 123456;
}

const p1 = new Pessoa("luis", "soto");
const p2 = new Pessoa("pepe", "castro");
const p3 = new Pessoa("juan", "ruz", 12345);
p3.metodo(); // juan: sou um método
console.log(p3.CPF); // undefined
p3.metodoPrivado(); // error p3.metodoPrivados is not a function
