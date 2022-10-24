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
}

// este evento crea la tarea al presionar el botón
btnTarefa.addEventListener("click", function (ev) {
  if (!inputTarefa.value) return alert("Ingrese tarea");
  criaTarefa(inputTarefa.value);
  limpaInput();
});
