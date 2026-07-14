const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milissegundos = document.getElementById('milissegundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let ms = dateToday.getMilliseconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;
    if(ms < 10) ms = '0' + ms;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milissegundos.textContent = ms;
})

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const calendario = setInterval(function time(){
    let dateToday = new Date();
    let day = dateToday.getDate();
    let m = dateToday.getMonth() + 1;
    let y = dateToday.getFullYear();

    dia.textContent = day;
    mes.textContent = m;
    ano.textContent = y;
})