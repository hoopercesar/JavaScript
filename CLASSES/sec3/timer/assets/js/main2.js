// otra versión del algoritmo anterior

// esta función crea la hora en formato hh:mm:ss
// cuando le entrego un contador la función entrega en formato hora.
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const zerar = document.querySelector(".zerar");
const pausar = document.querySelector(".pausar");

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

document.addEventListener("click", function (ev) {
  const elem = ev.target; // marca el evento de hacer click en cualquier lugar del DOM

  if (elem.classList.contains("iniciar")) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove("pausado");
  }

  if (elem.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }

  if (elem.classlist.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundo = 0;
    relogio.classList.remove("pausado");
  }
});
