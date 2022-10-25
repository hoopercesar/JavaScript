// ojo con esta definición de función dentro de función

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}
// esta función, así como está definida, retorna la función que está dentro
// retorna la función falaResto
const ola = falaFrase("olá");
console.log(ola); // retorna la función falaResto
// o sea, la variable ola es ahora la función falaResto
console.log(ola("mundo")); // retorna ola mundo
console.log(typeof ola); // retorna function

function fun1(a) {
  function fun2(b) {
    return a + b;
  }
  return fun2;
}
console.log("------------ SALTO LINEA ----------------");

const a = fun1(3);
console.log(a(4)); // retorna 7
console.log(fun1(3)(4)); // retorna 7

// otro ejemplo
function criaMultiplicador(multiplicador) {
  return function multiplica(n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const quintuplica = criaMultiplicador(5);
const octuplica = criaMultiplicador(8);
const x = criaMultiplicador(2);

console.log(duplica(3)); // retorna 6
console.log(quintuplica(3)); // retorna 15
console.log(octuplica(3)); // retorna 24
console.log(x); // retorna la función multiplica

// otro ejemplo
function suma(a) {
  return function suma2(b) {
    return function suma3(c) {
      return a + b + c;
    };
  };
}

console.log(suma(2)(3)(5)); // retorna 10
console.log(suma(1)(2));
