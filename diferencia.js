// Función que entrega la diferencia entre dos conjuntos. Resta la intersección

function resta(a, b) {
    let restaSet = a;
    for (x of b) {
        if (a.has(x)) {
            restaSet.delete(x);
        }
    } 
    return restaSet;
}


/* salida: al conjunto A se le restan los elementos que tenga en común
con el conjunto B. Si no tienen elementos en común, el resultado es A.

const A = new Set(['hola', 'pera', 'colegio'])
const B = new Set(['cocodrilo', 'aji', 'melon', 'pera', 'hola'])

diferencia = resta(A, B)

document.getElementById("demo").innerHTML = diferencia.size;
*/