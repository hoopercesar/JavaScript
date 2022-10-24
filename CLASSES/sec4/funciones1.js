// declaração de função (function hoisting)
// se declara la función al inicio o al final del script y la
// función puede ser llamada desde cualquier lugar, al inicio o al final.
ejemplo("al inicio");

function ejemplo(a) {
  console.log(`Ésto es function hoisting ${a}`);
}

ejemplo("al final");

// ==================================
// las funciones son objetos de primera clase
// function expressions

const souUmDado = function (a) {
  console.log(`soy un dato ${a}`);
};
souUmDado("prueba 1");

// función de una función
function executaFuncion(funcao) {
  funcao(`prueba 2`);
}
executaFuncion(souUmDado);
executaFuncion(ejemplo);

// Arrow function
const funcaoArrow = (a) => {
  console.log(`soy una función Arrow ${a}`);
};
funcaoArrow("=>");

// funcion dentro de un Objeto
const obj = {
  falar: function () {
    console.log("estou falando");
  },
  ouvir: function () {
    console.log("estou ouvindo");
  },
  suma: function (a, b) {
    let suma = a + b;
    console.log(`el es resultado ${suma}`);
  },
};
obj.falar();
obj.ouvir();
obj.suma(3, 6);
