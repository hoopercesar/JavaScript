//
//
try {
  console.log(noExisto);
} catch (err) {
  console.log("La variable no existe");
  // console.log(err);
}

// console.log(Math.random() * (10 + 5) - 5);
// la ejecución del programa continúa a pesar del error

try {
  console.log(a); // la salida depende de dónde está esta linea
  console.log("abrí archivo");
  console.log("manipulé archivo y dió error");
  console.log("cerré archivo");
  // console.log(a); la salida depende de dónde está esta linea

  try {
    console.log(b);
  } catch (e) {
    console.log("hubo error 2");
  } finally {
    console.log("También es finally");
  }
} catch (e) {
  console.log("tratanto error");
} finally {
  console.log("Finally: se ejecuta siempre");
}

console.log("##########################");
