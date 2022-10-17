const div = document.querySelector(".paragrafos");
const ps = div.querySelectorAll("p");

// selecciona todo lo relativo al estilo del body
const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;
console.log(backgroundBody);

for (p of ps) {
  p.style.backgroundColor = backgroundBody;
  console.log(p);
}
