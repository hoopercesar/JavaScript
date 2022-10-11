// hablamos de string e índices

const palabra = "esta es una palabra";

// formas de contatenar textos
// todos estos resultados aparecerán en la terminal
console.log(palabra.concat(" dentro de un texto 1"));
console.log(palabra, " dentro de un texto 2");
console.log(`${palabra} dentro de un texto 3`); // ojo con las comillas de este ejemplo

// para encontrar la posición de un caracter en un string
console.log(palabra.indexOf("a")); // busca la primera posición de 'a'

// busca la última posición donde aparece el caracter deseado
// dentro de los primero 10 caracteres del string
console.log(palabra.lastIndexOf("a", 10));

// expresiones regulares
console.log(palabra.match(/[sapo]/g), "dentro de un texto 4");
console.log(palabra.replace("una", "otra"));
console.log(palabra.length);
console.log(palabra.split(" ").length);
