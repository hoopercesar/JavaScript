function retornaDate(data) {
  if (data && !(data instanceof Date)) {
    //console.log("No es instancia");
    throw new TypeError("Esperando instancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleDateString("es-CL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digits",
    // minute: "2-digits",
    // second: "2-digits",
    // hour12: false,
  });
}

try {
  const date = new Date("03-04-1992 17:30:12");
  console.log(retornaDate(date));
} catch (e) {
  console.log("Hubo un error");
} finally {
  console.log("have a nice day");
}
// console.log(!(new Date() instanceof Date));
