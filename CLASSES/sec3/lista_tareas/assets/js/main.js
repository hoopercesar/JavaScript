const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  return document.createElement("li");
}

function criaTarefa(argInput) {
  const li = criaLi();
  li.innerHTML = argInput;
  tarefas.appendChild(li);
}

btnTarefa.addEventListener("click", function (ev) {
  if (!inputTarefa.value) return alert("Ingrese tarea");
  criaTarefa(inputTarefa.value);
});
