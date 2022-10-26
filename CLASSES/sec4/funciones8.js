// el problema de funciones que demoran en retornar el llamado
// surge cuando unas funciones dependen de otras
// si los datos de entrada dependen de la salida de otras funciones
// o si, las funciones deben ejecutarse según un orden

function random(max = 3000, min = 1000) {
  num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

// console.log(random());

function f1() {
  setTimeout(function () {
    console.log("f1");
  }, random());
}

function f2() {
  setTimeout(function () {
    console.log("f2");
  }, random());
}

function f3() {
  setTimeout(function () {
    console.log("f3");
  }, random());
  return "f3";
}

function f4(a) {
  return "olá" + a;
}

// f1();
// f2();
// f3();
// f4(f3());
// console.log("Hola");
// retorna Hola, f2 f3 f1 f3 que no fueron ejecutadas en orden

// para resolver este problema se usa el callback
// el callback establece un orden. obliga a que la función f2 sea ejecutada
// después de f1 y que f3 se ejecute después de f2, etc.
function g1(callback) {
  setTimeout(function () {
    console.log("g1");
    if (callback) callback();
  }, random());
}

function g2(callback) {
  setTimeout(function () {
    console.log("g2");
    if (callback) callback();
  }, random());
}

function g3(callback) {
  setTimeout(function () {
    console.log("g3");
    if (callback) callback();
  }, random());
  return "g3";
}

function g4(a) {
  return "olá" + a;
}

// ésto se llama callback hell
// porque crece en la medida que crecen las funciones
// la función g2 está dentro de g1, la función g3 se ejecuta
// g1(function () {
//   g2(function () {
//     g3(function () {
//       g4(g3());
//     });
//   });
// });

// otra forma de ejecutar los callback
g1(g1Callback);

function g1Callback() {
  g2(g2Callback);
}

function g2Callback() {
  g3(g3Callback);
}

function g3Callback() {
  g4();
}
