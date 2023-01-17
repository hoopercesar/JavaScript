const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const creaMayuscula = () => String.fromCharCode(rand(65, 91));
const creaMinuscula = () => String.fromCharCode(rand(97, 123));
const creaNumeros = () => String.fromCharCode(rand(48, 58));
const creaSimbolos = () => String.fromCharCode(rand(33, 48));

export default function arregloSenhas(
  cantidad,
  mayusculas,
  minusculas,
  numeros,
  simbolos
) {
  const arreglo = [];
  cantidad = Number(cantidad);
  for (let k = 0; k < cantidad; k++) {
    mayusculas && arreglo.push(creaMayuscula());
    minusculas && arreglo.push(creaMinuscula());
    numeros && arreglo.push(creaNumeros());
    simbolos && arreglo.push(creaSimbolos());
  }

  return arreglo.join("").slice(0, cantidad);
}

// console.log(arregloSenhas(10, true, true, true, true));
