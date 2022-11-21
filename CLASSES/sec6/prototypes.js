// Pessoa é o molde
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

// creamos el método como una función exterena que heredarán
// todos los objetos que se creen en este script
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// instanciação é criar um pessoas usando o molde Pessoa
const p1 = new Pessoa("Luis", "Soto");
const p2 = new Pessoa("Pepo", "cartes");

console.log(p1);
console.log("-------");
console.log(p2.nomeCompleto());

// O javascript é baseado em protótipos para passar propriedades
// e métodos de um objeto para outro

// Definição de protótipo
// protótipo é o termo usado para se referir ao que foi criado pela
// primeira vez, servindo de modelo ou molde para futuras produções
const data = new Date();

// protótipo para pessoa
