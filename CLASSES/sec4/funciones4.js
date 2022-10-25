function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta("-", 20, 3, 4, 5, 6);

// cuando se necesita enviar una cantidad desconocida de argumentos
// dentro de una función, se puede usar como parámetro la ...rest
function params(...args) {
  console.log(args);
}
params("-", 3, 4, 3, 7, 8, 12);
