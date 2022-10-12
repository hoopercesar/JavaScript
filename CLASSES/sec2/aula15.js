let number = window.prompt("Ingrese un número");

document.body.innerHTML += `raiz ${Math.sqrt(number)}` + "<br />";
document.body.innerHTML += `al cubo ${number ** 3}` + "<br />";
document.body.innerHTML += `es entero?: ${Number.isInteger(number)}` + "<br />";
//document.body.innerHTML += `con dos decimales ${number.toFixed(3)}` + "<br />";
