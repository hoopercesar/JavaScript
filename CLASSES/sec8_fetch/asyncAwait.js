function rand(min = 0, max = 3000) {
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

// esperaAi("Fase 1", rand()).then((valor) => {
//   console.log(valor);
//   return esperaAi("Fase 2", rand()).then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 3", rand()).then((valor) => {
//       console.log(valor);
//       return esperaAi("Fase 4", rand())
//         .then((valor) => {
//           console.log(valor);
//           return valor;
//         })
//         .then((valor) => {
//           console.log("Terminó en fase: ", valor);
//         })
//         .catch((e) => {
//           console.log("Erro", e);
//         });
//     });
//   });
// });

// mismo procedimiento usando Async - Await
async function executa() {
  try {
    const fase1 = esperaAi("fase 1", 2000);
    console.log(fase1);
    setTimeout(function () {
      console.log("Promise que estaba pendente", fase1);
    }, 2100);

    const fase2 = await esperaAi("fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi("fase 3", rand());
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

// estados de async-await
// pending: que está pendiente
// fullfilled: resuelta
// rejected: rechazada
