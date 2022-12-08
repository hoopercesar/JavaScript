class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já está ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.name + " já está desligado");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends Smartphone {
  constructor(nome, cor, modelo, temWifi) {
    super(nome, cor, modelo);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log("você alterou a maneira de ligar");
  }

  falaOi() {
    console.log("Oi, tudo bem?");
  }
}

// const d1 = new DispositivoEletronico("smartphone");

// d1.ligar();
// console.log(d1);
// d1.desligar();
// console.log(d1);

const s1 = new Smartphone("Aipon", "pink", "10");
// s1.ligar();
// console.log(s1);
// s1.ligar();
// console.log(s1);
// s1.desligar();
// console.log(s1);
// s1.desligar();

const t1 = new Tablet("XPP", "green", "USX9", "wifi");
console.log(t1);
t1.ligar();
t1.falaOi();
