const _velocidade = Symbol();

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 55;
  }

  // para configurar la velocidad desde fuera
  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor <= 0 || valor >= 100) return;
    this[_velocidade] = valor;
  }
  // para ver la velocidad desde fuera de la clase
  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this.velocidade <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("fusca");
// for (let k = 0; k <= 200; k++) {
//   c1.acelerar();
// }
// c1.velocidade = 10; // SETTER
c1.freiar();
// console.log(); // GETTER y velocidade
