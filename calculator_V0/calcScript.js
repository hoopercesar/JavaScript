let var1;
let var2;
let operation;

var numeros = document.querySelectorAll('.numero');
var simbolos =  document.querySelectorAll('.simbolo');

// lectura de números
numeros.forEach(numero => {
    numero.addEventListener('click', mostrarNumero);
})

function mostrarNumero(ev) {
    document.getElementById('demo').innerHTML = ev.target.innerHTML;
}

// lectura de simbolos
simbolos.forEach(simbolo => {
    simbolo.addEventListener('click', leeSimbolo);
})

function leeSimbolo(ev) {
    document.getElementById('demo').innerHTML = ev.target.innerHTML;

}




