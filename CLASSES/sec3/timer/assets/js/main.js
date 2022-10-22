// esta función crea la hora en formato hh:mm:ss
// cuando le entrego un contador la función entrega en formato hora.

function creaHoraEnSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("es-CL", {
    hour12: false,
    timeZone: "UTC",
  });
}

let segundo = 0;
let timer;
function iniciaRelogio() {
  timer = setInterval(function () {
    segundo++;
    relogio.innerHTML = creaHoraEnSegundos(segundo);
  }, 1000);
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const zerar = document.querySelector(".zerar");
const pausar = document.querySelector(".pausar");

iniciar.addEventListener("click", function (ev) {
  // console.log("has presionado iniciar");
  clearInterval(timer);
  iniciaRelogio();
  relogio.classList.remove("pausado");
});

pausar.addEventListener("click", function (ev) {
  clearInterval(timer);
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (ev) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundo = 0;
  relogio.classList.remove("pausado");
});
