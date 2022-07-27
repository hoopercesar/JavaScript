// Función que intersecta dos conjuntos sets

function interseccion(a, b) {
    let interSet = new Set();
    for (x of b) {
        if (a.has(x)) {
            interSet.add(x);
        }
    } 
    return interSet;
}


/* Salida: el conjunto formado por la intersección 
de los conjuntos A y B

const A = new Set(['hola', 'pera', 'colegio'])
const B = new Set(['cocodrilo', 'aji', 'melon', 'pera', 'hola'])

intersectados = interseccion(A, B)

document.getElementById("demo").innerHTML = intersectados.size; */
