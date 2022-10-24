const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// esta función crea el elemento de la lista li
function criaLi() {
  return document.createElement("li");
}

// este evento crea la tarea al presionar Enter
inputTarefa.addEventListener("keypress", function (ev) {
  if (ev.keyCode === 13) {
    if (!inputTarefa.value) return alert("Ingrese tarea");
    criaTarefa(inputTarefa.value);
    limpaInput();
  }
});

// esta función crea el botón eliminar tarea
function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar"); // asigna clase apagar
  li.appendChild(botaoApagar);
}

// esta función limpia el input
function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

// esta es la función que coloca la tarea en la lista li
function criaTarefa(argInput) {
  const li = criaLi();
  li.innerHTML = argInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

// este evento crea la tarea al presionar el botón
btnTarefa.addEventListener("click", function (ev) {
  if (!inputTarefa.value) return alert("Ingrese tarea");
  criaTarefa(inputTarefa.value);
  limpaInput();
});

// el evento para oir el botón apagar
// elem.parentElement entrega el tag padre y con remove() se elimina el tag
// que contiene la tarea en cuestión.
document.addEventListener("click", function (ev) {
  const elem = ev.target;
  if (elem.classList.contains("apagar")) {
    elem.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = document.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    // eliminamos el texto apagar de cada tarefa
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    //trim() remueve el espacio en el texto de cada tarefa
    listaDeTarefas.push(tarefaTexto);
  }

  // covertir listaDeTarefas en un string
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  // guardar el string listaDeTarefas en un localstorage
  localStorage.setItem("tarefas", tarefasJSON);
  // console.log(tarefasJSON);
}

// carga las tarefas guardadas y las coloca en el DOM
function adicionaTarefasSalvas() {
  // carga las tarefas guardadas
  const tarefas = localStorage.getItem("tarefas");
  // convierte string tarefas en array
  const listaDeTarefas = JSON.parse(tarefas);
  // colocamos tarefas guardadas en el DOM
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
