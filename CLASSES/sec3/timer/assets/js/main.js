const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const zerar = document.querySelector(".zerar");
const pausar = document.querySelector(".pausar");

iniciar.addEventListener("click", function (ev) {
  ev.preventDefault();
  console.log("has presionado iniciar");
});

pausar.addEventListener("click", function (ev) {
  ev.preventDefault();
  console.log("has presionado pausar");
});

zerar.addEventListener("click", function (ev) {
  ev.preventDefault();
  console.log("has presionado zerar");
});

// zerar.addEventListener('')
