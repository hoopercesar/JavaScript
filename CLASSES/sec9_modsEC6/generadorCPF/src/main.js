import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

(function () {
  // se instancía la clase GeraCPF. Pero es una clase simplemente
  // ella por sí misma no crea el cpf.
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");

  // ahora se crea el cpf con el al aplicar la función geraCPF
  cpfGerado.innerHTML = gera.geraNovoCPF();
})();
