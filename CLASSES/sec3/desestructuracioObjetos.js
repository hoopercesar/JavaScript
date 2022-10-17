const persona = {
  nome: "carlos",
  sobrenome: "perez",
  edad: 30,
  endereco: {
    rua: "av. brasil",
    numero: 30,
    apto: 303,
  },
};

const { nome, sobrenome, endereco } = persona;
console.log(endereco);

const {
  endereco: { rua, numero, apto },
} = persona;
// const {objeto1} = {objeto2}
console.log(rua);
console.log(numero);
console.log(apto);

const { nombre, apellido, ...rest } = persona;
console.log(nombre);
