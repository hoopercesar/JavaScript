const frutas = ["pera", "uva", "melon"];

// itera sobre el índice
for (let fruta in frutas) {
  console.log(fruta); //0 1 2
}

// itera sobre los elementos
for (let fruta of frutas) {
  console.log(fruta); //pera uva melon
}

const persona = {
  nome: "cesar",
  edad: 30,
  ciudad: "RJ",
};

for (let chave in persona) {
  console.log(chave, persona[chave]);
}
