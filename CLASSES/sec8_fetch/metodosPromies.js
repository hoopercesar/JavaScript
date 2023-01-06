function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensaje, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensaje !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(mensaje);
      return;
    }, tempo);
  });
}

// Estos son los métodos
// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  "primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  // esperaAi(1000, 1000),
  "outro valor",
];

// sirve para realizar una cadena de promises.
Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
