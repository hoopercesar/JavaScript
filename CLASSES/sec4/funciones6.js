// Escopo Lexico

const nome = "pedro";

function falaNome() {
  // const nome = "juan";
  console.log(nome);
}
// falaNome();

// const nome = "juan"; error porque la variable
// nome se define después de la función

function usaFalaNome() {
  const nome = "juan";
  falaNome();
}
usaFalaNome();
