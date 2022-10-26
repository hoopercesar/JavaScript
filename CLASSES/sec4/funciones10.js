// this

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está falando do ${assunto}`;
    },
  };
}
const p1 = criaPessoa("cesar", "soto");
console.log(p1);
