// arguments que sustenta todos os argumentos enviados

function funcao() {
  console.log("Oie");
  console.log(arguments[0], arguments[3]);
  // una función creada para sin parámetros de ingreso
  // puede recibir argumentos. Se puede acceder a esos argumentos
  // usando arguments.
}

funcao("valor", "color", "textura", "olor", 1, 2, 3);

function argumentos() {
  let dato = [];
  for (let arg of arguments) {
    dato.push(arg);
  }
  console.log(dato);
}
argumentos("todo", "nada", "pedazo", 3, "cama", "17");

function algo() {
  let total = 0;
  for (arg of arguments) {
    total += arg;
  }
  console.log(total);
}
algo(1, 2, 3, 4, 5, 6, 8, 8);
