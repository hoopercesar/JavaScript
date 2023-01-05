function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensaje, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensaje !== "string") reject("bad value");
    setTimeout(() => {
      resolve(mensaje);
    }, tempo);
  });
}

console.log("Mensaje inicial: ");
esperaAi("mensaje 1: conexão com BD", rand(4000, 5000))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(2222, rand(2000, 3000));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("mensaje 3: tratando os dados", rand(1000, 2000));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("exibe dados na tela");
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
// esperaAi("mensaje 2", rand(2000, 5000));
// esperaAi("mensaje 3", rand(2000, 5000));
