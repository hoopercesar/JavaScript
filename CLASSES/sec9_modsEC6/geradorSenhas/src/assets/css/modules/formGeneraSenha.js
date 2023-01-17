import arregloSenhas from "./generadores";

const boton = document.querySelector(".gerar-senha");
const variables = document.querySelectorAll("input");
const resultado = document.querySelector(".senha-gerada");
let mayuscula = false;
let minuscula = false;
let numeros = false;
let simbolos = false;
let cantidad;

export default () => {
  boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    // handleSubmit();

    resultado.innerHTML = handleSubmit();
  });
};

function handleSubmit() {
  variables.forEach((variable) => {
    if (variable.type === "number") {
      cantidad = variable.value;
      // console.log(cantidad);
    } else {
      if (variable.classList.contains("chk-mayusculas") && variable.checked)
        mayuscula = true;
      if (variable.classList.contains("chk-minusculas") && variable.checked)
        minuscula = true;
      if (variable.classList.contains("chk-numeros") && variable.checked)
        numeros = true;
      if (variable.classList.contains("chk-simbolos") && variable.checked)
        simbolos = true;
    }
  });
  return arregloSenhas(cantidad, mayuscula, minuscula, numeros, simbolos);
}
