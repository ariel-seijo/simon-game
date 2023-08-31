const redbutton = document.querySelector('#quarter-circle-1');
const greenbutton = document.querySelector('#quarter-circle-2');
const yellowbutton = document.querySelector('#quarter-circle-3');
const bluebutton = document.querySelector('#quarter-circle-4');
const comenzar = document.querySelector('button');

var permiso = false;

comenzar.addEventListener('click', ()=>{
    permiso = true;
    if (permiso) {
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
        
    }
})

const redsound = new Audio('boton1.mp3');
const greensound = new Audio('boton4.mp3');
const yellowsound = new Audio('boton3.mp3');
const bluesound = new Audio('boton2.mp3');

let a = 'xd';

