const nomes = ["laura", "iris", "luiz"];
nomes[3] = "joao";
delete nomes[3];

// pop() y shift remueven el ultimo y el primer valor de un arreglo
// ambos guardan el valor eliminado en una variable
const final = nomes.pop();
const inicial = nomes.shift();

nomes.push("joana"); // agrega ultima posición
nomes.unshift("carlos"); // agrega en posición 0
nomes.unshift("petro");
const novo = nomes.slice(0, -2);
console.log(nomes, novo);

const frase = "anatema va a ser una hermosa desafortunada";
const arreglo = frase.split(" "); // separa por espacio
console.log(arreglo);
console.log(nomes.join(" "));
