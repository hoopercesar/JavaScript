function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensaje, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof mensaje !== "string") {
        reject("Cai no erro");
        return;
      }
      resolve(mensaje);
      return;
    }, tempo);
  });
}

// Estos son los métodos
// Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//   // "primeiro valor",
//   esperaAi("Promise 1", rand(1000, 5000)),
//   esperaAi("Promise 2", rand(1000, 5000)),
//   esperaAi("Promise 3", rand(1000, 5000)),
//   esperaAi(1000, rand(1000, 5000)),
//   // "outro valor",
// ];

// Promise.all: sirve para realizar una cadena de promises.
// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promie.race: entrega la promesa que se resuelva más rápido
// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("baixei página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("Erro", e));
