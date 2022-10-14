const u = 10;
const z = 0;

console.log(!true, !!true); // false true
console.log(u > 3 && u === 10 && u > 7 && u > 0); // true
console.log(z > 11);
console.log(!!"loco");
console.log("fernanda" && " ");
console.log("hola" && NaN && "maria");

function falaOi() {
  return "oi";
}

const seEjecuta = "joao";
console.log(seEjecuta && falaOi()); // S: oi. como 'joao' es verdader,
// se ejecuta la función falaOi

// OR
console.log(0 || null || false || "maria" || true); // S: maria.
//  retorna el primer verdadero pues OR necesita un sólo valor verdadero
// para retornar ese valor verdadero. 'maria' es un string verdadero
// que no es vacío, así que retorna 'maria'
console.log(0 || null || false || "false" || NaN); // retorna false
// porque es un string 'false'.
