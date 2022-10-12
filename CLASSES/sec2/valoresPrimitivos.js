// variables primitivas y de referencia

// primitivas
let a = "pepe";
let b = a;
console.log(a, b); // pepe pepe
a = "chepo";
console.log(a, b); // chepo pepe
// b es una copia de a, por tanto, si cambia a, b conserva el valor primitivo

// referencia
let x = [1, 2, 3];
let y = x;
console.log(x, y); // [1, 2, 3] [1, 2, 3]
x.push(5);
console.log(x, y); // [1, 2, 3, 5] [1, 2, 3, 5]
// y no copia el primitivo de x, asi que si x cambia, cambian los dos
// para hacer una copia se debe usar lo siguiente
let z = [...y]; // esta es la forma de copiar un objeto
x.push(-2);
console.log("x:", x, "y:", y, "z:", z); // [1, 2, 3, 5, -2] [1, 2, 3, 5, -2] [1, 2, 3, 5]
// ahora z es una copia del primitivo. no cambia aunque cambie x e y

// otro ejemplo
const persona1 = {
  nome: "pedro",
  sobrenome: "soto",
};
const persona2 = persona1;
console.log(persona2); // {nome: pedro, sobrenome: soto}

persona1.nome = "manuel";
console.log(persona2); // {nome: manuel, sobrenome: soto}
// persona2 no es una copia, es una referencia de persona 1.

// para hacer una copia se usa este procedimiento
let persona3 = { ...persona1 };
persona2.nome = "daniel";
console.log("per1:", persona1, "per2:", persona2, "per3:", persona3);
// {nome: daniel, sobrenome: soto} {nome: daniel, sobrenome: soto}
// {nome: manuel, sobrenome: soto}
