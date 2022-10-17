const tresHoras = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras);
console.log(data);
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

const data2 = new Date("1992-03-04 17:30:45");
//const data3 = new Date.now();
console.log(data2);
console.log("dia", data2.getDate());
console.log("mes", meses[data2.getMonth()]);
console.log("año", data2.getFullYear());
console.log("hora", data2.getHours());
console.log("minutos", data2.getMinutes());
console.log("Segundos", data2.getSeconds());
console.log("DIA", dias[data2.getDay()]);
console.log("ms", data2.getMilliseconds());

const data3 = Date.now(); // la data actual en milisegundos
// contados desde el inicio (diciembre 31 1969 a las 21 hrs aprox)
console.log(Date(data3));
