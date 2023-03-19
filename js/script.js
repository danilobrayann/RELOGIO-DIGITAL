const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');

const relogio = setInterval (function time(){
    let DateToday = new Date ();
    let h = DateToday.getHours();
    let m = DateToday.getMinutes();
    let s = DateToday.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;



})