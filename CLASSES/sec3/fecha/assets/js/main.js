const data = new Date();
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviemnte",
  "diciembre",
];

const dias = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

const fechas = {
  diaSem: dias[data.getDay()],
  dia: data.getDate(),
  year: data.getFullYear(),
  mes: meses[data.getMonth()],
  hora: data.getHours(),
  min: data.getMinutes(),
  segs: data.getSeconds(),
};

const h1 = document.querySelector(".conteiner h1");

let mensaje = `<p> Hoy es ${fechas.diaSem} ${fechas.dia} de ${fechas.mes} de ${fechas.year}. 
 <br /> Son las ${fechas.hora}:${fechas.min}:${fechas.segs} </p>`;
h1.innerHTML = mensaje;

//console.log(mensaje);
