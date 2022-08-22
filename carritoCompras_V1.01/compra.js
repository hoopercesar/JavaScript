// las variables para dragar (prods) ya fueron definidas en el script carritoScript.js
// tampoco es necesario redefinir el objeto precios aquí, que ya fue definido previamente.
let dragged;
let prds;
let subtotal = 0;

prods.forEach(prod => {
    prod.addEventListener('dragstart', (ev) => {
        dragged = ev.target;
    })

    prod.addEventListener('drag', (ev) => {
        console.log('está dragando');
    })

    prod.addEventListener('dragend', (ev) => {
        console.log('el dragado finalizó');
    })
})

///////////////////////////
// Proceso drop: se desea trasladar el precio al carrito, no el producto.
// 

let can = document.querySelector('.canasto');
const n10 = document.querySelector('.n10');

can.addEventListener('dragenter', (ev) => {
    console.log('entrando a área dropping');
})

can.addEventListener('dragover', (ev) => {
    //subtotal = dragged.textContent;
    
    /*
    subtotal.push(parseFloat(dragged.slice(2, dragged.length+1)));
    n10.textContent = subtotal;
    console.log(subtotal);*/
    ev.target.appendChild(dragged);

})

can.addEventListener('dragleave', (ev) => {
    console.log('salio de drop area');
})

can.addEventListener('drop', (ev) => {
    //ev.target.innerHtml = precios[dragged.textContent];       
    console.log('MARACO');
})

//let canst = document.querySelector('.canasto');

if (can.childElementCount !== 0) {
    prds = can.querySelectorAll('.prod');
    prds.forEach(p => {
        let sbt = precios[p.textContent];
        console.log(p.textContent);
        subtotal += parseFloat(sbt.slice(2, sbt.length+1));
        //console.log(subtotal);
    })    
}


