const nome = window.prompt("Nombre completo");

// responder
document.body.innerHTML += `Mi nombre es ${nome}` + "<br />";
document.body.innerHTML += `Mi nombre tiene ${nome.length} letras` + "<br />";
document.body.innerHTML +=
  `la segunda letra de mi nombre es ${nome[1]}` + "<br />";
document.body.innerHTML +=
  `la última letra de mi nombre es ${nome[nome.length - 3]}` + "<br />";
document.body.innerHTML += `${nome.toUpperCase()}` + "<br />";
document.body.innerHTML +=
  `mi nombre tiene ${nome.split(" ").length} palabras` + "<br />";
