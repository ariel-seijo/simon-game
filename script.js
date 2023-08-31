const redbutton = document.querySelector('#quarter-circle-1');
const greenbutton = document.querySelector('#quarter-circle-2');
const yellowbutton = document.querySelector('#quarter-circle-3');
const bluebutton = document.querySelector('#quarter-circle-4');

const redsound = new Audio('./sounds/boton1.mp3');
const greensound = new Audio('/sounds/boton4.mp3');
const yellowsound = new Audio('/sounds/boton3.mp3');
const bluesound = new Audio('./sounds/boton2.mp3');

redbutton.addEventListener('click', ()=> {
    redsound.play()
});

greenbutton.addEventListener('click', ()=> {
    greensound.play()
});

bluebutton.addEventListener('click', ()=> {
    bluesound.play()
});

yellowbutton.addEventListener('click', ()=> {
    yellowsound.play()
});

