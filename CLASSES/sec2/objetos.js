function persona(nome, idade, sobrenome) {
  return { nome, sobrenome, idade };
}

// esta función va a retornar un objeto
const persona1 = persona("cesar", 33, "hooper");
console.log(persona1, persona1.idade);

const persona2 = {
  nombre: "carlos",
  edad: 25,
  apellido: "soto",

  habla() {
    console.log(`${this.nombre} ${this.apellido} está hablando`);
  },

  aumentaEdad() {
    this.edad++;
  },
};
persona2.habla();
console.log(persona2.edad);
persona2.aumentaEdad(); // esta línea activa la función para incrementar edad
console.log(persona2.edad);
persona2.aumentaEdad();
console.log(persona2.edad);
// es decir, dentro de un objeto se puede incluir un método que cambie el valor
// de los parámetros dentro del objeto
persona2.aumentaEdad();
persona2.aumentaEdad();
persona2.aumentaEdad();
console.log(persona2.edad); // aquí la  salida sería 30
