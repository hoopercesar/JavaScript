// Función para unir dos Sets 

function union(a, b) {
    let unionSet = new Set(a);
    for (x of b) {
        unionSet.add(x);
    } 
    return unionSet;
}

/* Salida: entrega el conjunto union entre los conjuntos A y B

const A = new Set(['hola', 'pera', 'colegio'])
const B = new Set(['cocodrilo', 'aji', 'melon', 'pera', 'hola'])

unidos = union(A, B)

document.getElementById("demo").innerHTML = unidos.size */