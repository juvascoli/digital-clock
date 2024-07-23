const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const reloj = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

   

    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = sec;


})