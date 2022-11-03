// funciones generadoras

function* generador1() {
  // codigo
  yield "valor 1";
  // más codigo
  yield "valor 2";
  // más codigo
  yield "valor 3";
}

const g1 = generador1();
console.log(g1.next()); //{value: ''valor 1', done: false}
console.log(g1.next().value); // valor 2
console.log(g1.next().value); // valor 3
console.log(g1.next().value);
console.log("-----------------------");

// se puede iterrar sobre los valores del generadors
for (let valor of generador1()) {
  console.log(valor);
}

// ejemplo 2
function* generadora2() {
  let i = 0;

  while (i < 2) {
    yield i;
    console.log(i);
    i++;
  }
}

// console.log(generadora2().next().value);
// console.log(generadora2().next().value);
// console.log(generadora2().next().value);
// console.log(generadora2().next().value);
// console.log(generadora2().next().value);

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_");

// ejemplo 3
function* generador3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generador4() {
  yield* generador3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generador4();
for (let valor of g4) {
  console.log(valor); // 0 1 2 3 4 5
}

console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_");

// ejemplo 4
function* generador5() {
  yield function () {
    console.log("viene del y1");
  };

  yield function () {
    console.log("viene del y2");
  };

  return function () {
    console.log("viene del return");
  };
  // la función se detiene en el return

  yield function () {
    console.log("viene del y3");
  };
}

const g5 = generador5();
const f1 = g5.next().value;
const f2 = g5.next().value;
const f3 = g5.next().value;

f1();
f2();
f3();
