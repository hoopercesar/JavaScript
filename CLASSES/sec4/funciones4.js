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
