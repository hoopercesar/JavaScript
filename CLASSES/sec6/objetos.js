const pessoa = {
  nome: "pepe",
  sobrenome: "soto",
  peso: 80,
  altura: 170,
  falarNome: function () {
    return `${this.nome} es un personaje`;
  },
  imc: function () {
    return (this.peso / (this.altura / 100) ** 2).toFixed(2);
  },
};

console.log(pessoa.falarNome(), pessoa.imc());
