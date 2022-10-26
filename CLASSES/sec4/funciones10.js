// factory function

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // setter
    set nomeCompleto(valor) {
      // con set podemos introducir cambios a las variables
      // en este caso, vamos a recoger el nombre que viene con valor
      // y lo dejaremos como nome usando this.nome
      // ahora, nomeCompleto tendrá el nombre que ingresamos
      // con p1.nomeCompleto y el apellido que ingresamos al ejecutar
      // la función criaPessoa
      valor = valor.split(" "); // separa los elementos del nombre y forma array
      this.nome = valor.shift(); // guarda nombre y lo elimina del array
      this.sobrenome = valor.join(" "); // junta los apellidos en un solo string
    },

    fala(assunto) {
      return `${this.nome} está falando do ${assunto}`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      // con get, imc deja de ser un método y se trasnforma en
      // en atributo, igual que nome, sobrenome
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p1 = criaPessoa("cesar", "soto", 1.8, 78);
// const p2 = criaPessoa("maria", "peres", 1.6, 65);
// console.log(p2.fala("está falando sobre JS"));
p1.nomeCompleto = "fernanda sanchez hooper";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
