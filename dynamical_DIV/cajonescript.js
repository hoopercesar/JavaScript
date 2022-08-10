const nombre = 'CONGRATULATIONS';
let lista = nombre.split("");
const cajon1 = document.querySelector(".cajon1");
let randomized = shuffle(lista);

console.log(randomized);

for (i of randomized) {
    console.log(i);
    const cajon = document.createElement("div");
    cajon.classList.add("cajon2");
    cajon1.appendChild(cajon);
    cajon.textContent = i;
}

function shuffle(points) {
    let long = points.length;
    for (let i = long -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points[i]
        points[i] = points[j]
        points[j] = k
    }
    return points

}


