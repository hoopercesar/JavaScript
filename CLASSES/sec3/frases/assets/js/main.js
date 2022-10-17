const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const h1 = document.querySelector(".conteiner");
const div = document.createElement("div");
let mensaje = "";
for (i = 0; i < 4; i++) {
  const { tag, texto } = elementos[i];
  // console.log(tag, texto);
  // mensaje += `<${tag}>${texto}</${tag}><br />`; otro camino
  tagCreada = document.createElement(tag);
  tagCreada.innerHTML = texto;
  div.appendChild(tagCreada);
}

h1.appendChild(div);
