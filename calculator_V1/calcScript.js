let var1 = '';
let suma; 
let resta; 
let times;
let frac;

var numeros = document.querySelectorAll('.numero');
var simbolos = document.querySelectorAll('.simbolo');
var resultado = document.querySelector('.resultado');

// Números
numeros.forEach(numero => {
    numero.addEventListener('click', guardaDatos);
})

// Símbolos
simbolos.forEach(simbolo => {
    simbolo.addEventListener('click', guardaDatos);
})

// Resultado
resultado.addEventListener('click', darResultado);

// Esta función guarda en string números y símbolos clickeados.
// Se crea la función Borrar 
function guardaDatos(ev) {
    if (ev.target.innerHTML == 'Borrar') {
        var1 = '';
        document.getElementById('demo').innerHTML = var1;
    } else {
        var1 += ev.target.innerHTML;
        document.getElementById('demo').innerHTML = var1;
    }
    
    suma = var1.indexOf('+');
    resta = var1.indexOf('-');
    times = var1.indexOf('*');
    frac = var1.indexOf('/');

    if (suma !== -1) {
        resultado = parseInt(var1.slice(0,suma)) + parseInt(var1.slice(suma+1, var1.length+1));
    } else if (resta !== -1){
        resultado = parseInt(var1.slice(0,resta)) - parseInt(var1.slice(resta+1, var1.length+1));
    } else if (times !== -1) {
        resultado = parseInt(var1.slice(0,times))*parseInt(var1.slice(times+1, var1.length+1));
    } else if (frac !== -1) {
        resultado = parseInt(var1.slice(0,frac))/parseInt(var1.slice(frac+1, var1.length+1));
    }
    
}

// Función para entregar el resultado
function darResultado() {
    document.getElementById('demo').innerHTML = resultado;
}

