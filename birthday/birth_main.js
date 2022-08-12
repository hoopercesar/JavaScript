var hoy = new Date()
var x = document.getElementById("resultado")
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function captura2() {
         

    var nacimiento = document.getElementById("nacimiento").value;
    var born_day = new Date(nacimiento)
    const time = Math.abs(hoy - born_day);
    const days = Math.floor(time/(1000*3600*24));

    x.textContent = 'Faltan ' + days + ' dias para tu aniversario';  

    return days
}
/*
//const colores = ['red', 'orange', 'rgb(209, 121, 99)', 'rgb(226, 240, 206)', 'rgb(2, 80, 22)']  
for (color of colores) {
    x.style.backgroundColor = color;
    await wait(1000);
}
*/