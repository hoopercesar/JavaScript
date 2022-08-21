const n10 = document.querySelector('.n10');
let dragged;
subtotal = 0;



// Proceso dragado
n10.addEventListener('dragstart', (ev) => {
    dragged = ev.target;
    //let plata = precios[dragged.textContent];
})

n10.addEventListener('drag', (ev) => {
    console.log('está dragando');
})

n10.addEventListener('dragend', (ev) => {
    console.log('el dragado finalizó');
})

///////////////////////////
// Proceso drop

const can = document.querySelector('.canasto');

can.addEventListener('dragenter', (ev) => {
    console.log('entrando a área dropping');
})

can.addEventListener('dragover', (ev) => {
    subtotal = precios[dragged.textContent];
    console.log('subtotal: ' + subtotal);
})

can.addEventListener('dragleave', (ev) => {
    console.log('objeto sale del área dropping ' + dragged.textContent);
})

can.addEventListener('drop', (ev) => {
    //ev.target.innerHtml = precios[dragged.textContent];       
    console.log('MARACO');
})