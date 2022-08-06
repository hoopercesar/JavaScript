/** help */
function log(message) {
    console.log('> ' + message);
}

/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** the drag process*/
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    //log('CARD: Start Drag');
    this.classList.add('is-dragging');

}

function drag() {
    //log('CARD: Dragging');

}

function dragend() {
    //log('CARD: End Drag');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');

}

/** the place where to drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

function dragenter() {
    //log('DROPZONE: Enter in zone');

}

function dragover() {
    //log('DROPZONE: Over the zone')
    this.classList.add('over');

    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged)

}

function dragleave() {
    //log('DROPZONE: Leaving the zone')
    this.classList.remove('over');

}

function drop() {
    //log('DROPZONE: Dropping the zone')
    this.classList.remove('over');

}



