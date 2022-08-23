let dragged;
const works = document.querySelectorAll('.work');
const dropzones = document.querySelectorAll('.dropzone');


works.forEach(work => {
    work.addEventListener('dragstart', (ev) => {
        dragged = ev.target.cloneNode(true);
        //dragged = ev.target;
        dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
        //ev.classList.add('is-dragging')
        //console.log('inicio');        
    })

    work.addEventListener('drag', () =>{
        //console.log('arrastrando');
    })

    work.addEventListener('dragend', () =>{
        console.log('finalizado');
        dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
        //this.classList.remove('is-dragging')
    })
})




dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', () => {
        console.log('entrando en dropzone');
    })

    dropzone.addEventListener('dragover', (ev) => {
        ev.target.appendChild(dragged);        
    })

    dropzone.addEventListener('dragleave', () => {
        console.log('salió de dropzone');
    })

    dropzone.addEventListener('drop', () => {
        console.log('Si leo ésto no entiendo nada');
    })
})