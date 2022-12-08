class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // método de instancia
  aumentarVolume(valor) {
    this.volume += 2 * valor;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // método estático
  static trocarPilha() {
    console.log("ok, vou trocar");
  }

  static resuelve(a, b) {
    console.log(a + b);
  }
}

const controle1 = new ControleRemoto("samgsumg");
controle1.aumentarVolume(2);

ControleRemoto.trocarPilha(); // para llamar método estático
// para llamar métodos estáticos no es necesario instanciar la clase
// es decir, no se requiere crear un objeto con la clase.
ControleRemoto.resuelve(3, 2);

// todos los demás métodos dentro de las clases deben, para llamarse,
// deben ser instanciados previamente creando un objeto nuevo con la clase.
console.log(Math.random()); // este es un ejemplo de método estático
// Math es una clase y random un método. No es necesario instanciar la clase
// para llamar el método random;
// los métodos estáticos no tienen acceso a los datos de la instancia.

// console.log(controle1);
