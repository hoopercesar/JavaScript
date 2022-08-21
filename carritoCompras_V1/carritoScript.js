/* Script para producir efectos de iluminación y mostrar precios
de los productos mientras el mouse está sobre el producto.
*/

// Lista de precios
let precios = {'prod1': 'R$25.00', 'prod2': 'R$43.49', 'prod3': 'R$67.19', 
                'prod4': 'R$99.99', 'prod5': 'R$29.99',
                'prod11': 'R$87.25', 'prod12': 'R$9.99', 
                'prod13': 'R$77.99', 'prod14': 'R$12.99', 
                'prod15': 'R$1.99', 'n10': 'R$777'
            };

let texto;
const prods = document.querySelectorAll('.prod');


prods.forEach(prod => {
    prod.addEventListener('mouseover', muestraPrecio);
    prod.addEventListener('mouseout', retirarEfectos);
});

function muestraPrecio(ev) {
    texto = ev.target.textContent;
    ev.target.innerHTML = precios[texto];
    ev.target.style.backgroundColor = '#ddb23d';
    
}

function retirarEfectos(ev) {
    ev.target.innerHTML = texto;
    ev.target.style.backgroundColor = '';
    
}


