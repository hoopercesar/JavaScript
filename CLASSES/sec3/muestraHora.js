function muestraHora() {
  let data = new Date();

  return data.toLocaleTimeString("es-cl", {
    hour12: false,
  });
}

// para que la hora se actualic automáticamente
// usamos setInterval
// primero creamos una función que llame a la función muestraHora
// function auxiliar() {
//   console.log(muestraHora());
// }
// // ahora hacemos referencia en setInterval de esta ultima función
// setInterval(auxiliar, 1000);

// usando función anónima
const timer = setInterval(function () {
  console.log(muestraHora());
}, 1000);

// la siguiente función hace que el conador anterior se ejecute
// por 10000 ms
setTimeout(function () {
  clearInterval(timer);
}, 4000);

setTimeout(function () {
  console.log("Hola");
}, 3000);
