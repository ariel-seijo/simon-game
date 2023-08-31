/*
const redbutton = document.querySelector('#quarter-circle-1');
const greenbutton = document.querySelector('#quarter-circle-2');
const yellowbutton = document.querySelector('#quarter-circle-3');
const bluebutton = document.querySelector('#quarter-circle-4');
*/

const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2')
const boton3 = document.querySelector('#boton3')
const boton4 = document.querySelector('#boton4')

const redsound = new Audio();
const greensound = new Audio();
const yellowsound = new Audio();
const bluesound = new Audio();

redsound.src='./sounds/boton1.mp3';
bluesound.src='./sounds/boton2.mp3';
yellowsound.src='/sounds/boton4.mp3';
greensound.src='/sounds/boton3.mp3';

boton1.addEventListener('click', ()=> {
    redsound.play()
});

boton2.addEventListener('click', ()=> {
    bluesound.play()
});

boton3.addEventListener('click', ()=> {
    yellowsound.play()
});

boton4.addEventListener('click', ()=> {
    greensound.play()
});

/* redbutton.addEventListener('click', ()=> {
    redbutton.style.backgroundColor = 'rgb(170, 0, 0)'
    redsound.play()
    setTimeout(()=> {
        redbutton.style.backgroundColor = 'red'
    }, 100);
});

greenbutton.addEventListener('click', ()=> {
    greenbutton.style.backgroundColor = 'rgb(0, 65, 0)'
    greensound.play()
    setTimeout(()=> {
        greenbutton.style.backgroundColor = 'green'
    }, 100);
});

bluebutton.addEventListener('click', ()=> {
    bluebutton.style.backgroundColor = 'rgb(1, 56, 75)'
    bluesound.play()
    setTimeout(()=> {
        bluebutton.style.backgroundColor = 'rgb(3, 183, 243)'
    }, 100);
});

yellowbutton.addEventListener('click', ()=> {
    yellowbutton.style.backgroundColor = 'rgb(119, 119, 2)'
    yellowsound.play()
    setTimeout(()=> {
        yellowbutton.style.backgroundColor = 'yellow'
    }, 100);
}); */

