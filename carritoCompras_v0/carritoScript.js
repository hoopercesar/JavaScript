
const productos1 = document.querySelectorAll('.prod1');
const canasto =  document.querySelector('.canasto');

productos1.forEach(prod => {
    prod.addEventListener('mouseover', iluminate);
    prod.addEventListener('mouseout', apagar);
    
    prod.addEventListener('dragstart', dragStart);
    prod.addEventListener('drag', drag);
    prod.addEventListener('dragend', dragEnd);
});

function iluminate(ev) {
    ev.target.classList.add('iluminacion');
}

function apagar(ev) {
    ev.target.classList.remove('iluminacion');
}

// Proceso dragStart
function dragStart(ev) {
    ev.target.classList.add('fondo');
    ev.target.classList.add('is-dragging')
}

// Proceso drag
function drag(ev) {
    ev.target.classList.add('borde');
}

// proceso dragEnd
function dragEnd(ev) {
    ev.target.classList.remove('borde');
    ev.target.classList.remove('fondo');
}

// DROP process
canasto.addEventListener('dragenter', dragenter);
canasto.addEventListener('dragover', dragover);
canasto.addEventListener('dragleave', dragleave);
canasto.addEventListener('drop', drop)

function dragenter(ev) {
    ev.target.classList.add('borde');
}

// Cuando el objeto dragado está sobre el drop target
function dragover(ev) {
    ev.target.classList.add('fondo');
}

// Cuando el objeto dragado abandona el área del drop target
function dragleave(ev) {
    ev.target.classList.remove('fondo');
    ev.target.classList.remove('borde');
}

function drop(ev) {
    const objetoDragado = document.querySelector('.is-dragging');
    ev.appendChild(objetoDragado);
    objetoDragado.classList.remove('.is-dragging');
}



