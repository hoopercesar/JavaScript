const secondHand = document.querySelector('.second_hand');
const minsHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
const texto = document.querySelector('.texto');


function setDate() {

    const now = new Date();

    const dia = now.getDate();
    const mes = now.getMonth();
    const ano = now.getFullYear();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    
    segundo.textContent = seconds;
    hora.textContent = hour;
    minuto.textContent = mins;
    texto.textContent = 'Fecha: ' + dia + '/' + (mes+1) + '/' + ano; 



    console.log(secondHand);
}

setInterval(setDate, 1000);

setDate();