const boxes = document.querySelectorAll('.box');
const frase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

boxes.forEach(box => {
    box.addEventListener('mouseover', adicionaBorde);  
    box.addEventListener('mouseout', removeBorde)  
})

function adicionaBorde(obj) {
    obj.target.classList.add('highlight');
} 

function removeBorde(ev) {
    ev.target.classList.remove('highlight');
}
