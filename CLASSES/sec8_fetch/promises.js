function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensaje, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensaje);
    }, tempo);
  });
}

console.log("activo");
esperaAi("mensaje 1", rand(4000, 5000))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("mensaje 2", rand(2000, 3000));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("mensaje 3", rand(1000, 2000));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch();
// esperaAi("mensaje 2", rand(2000, 5000));
// esperaAi("mensaje 3", rand(2000, 5000));
