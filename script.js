const redbutton = document.querySelector('#quarter-circle-1');
const greenbutton = document.querySelector('#quarter-circle-2');
const yellowbutton = document.querySelector('#quarter-circle-3');
const bluebutton = document.querySelector('#quarter-circle-4');
const iniciarboton = document.querySelector('button');

const redsound = new Audio('redsound.wav');
const greensound = new Audio('greensound.wav');
const yellowsound = new Audio('yellowsound.wav');
const bluesound = new Audio('bluesound.wav');

function activatebutton(sound, button, color1, color2, time) {
    sound.play()
    button.style.backgroundColor = color1
    setTimeout(() => {
        button.style.backgroundColor = color2;
    }, time);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const redactivated = [redsound, redbutton, 'red', 'rgb(201,27,28)', '100'];
const greenactivated = [greensound, greenbutton, 'green', 'rgb(1,156,78)', '100']
const blueactivated = [bluesound, bluebutton, 'rgb(0, 162, 255)', 'rgb(0,119,188)', '100']
const yellowactivated = [yellowsound, yellowbutton, 'rgb(255, 217, 0)', 'rgb(218,189,25)', '100']

let presentacion = [redactivated, greenactivated, blueactivated, yellowactivated, blueactivated];
let botones = [redactivated, greenactivated, blueactivated, yellowactivated]
let juego = []
let comenzar = false;

let contador = 0
iniciarboton.addEventListener('click', () => {
    for (let n of presentacion) {
        console.log(n)
        contador += 200;
        setTimeout(() => {
            activatebutton(n[0], n[1], n[2], n[3], n[4]);
        }, parseInt(contador));
    } contador = 0; comenzar = true;

    while (comenzar) {
        juego.push(botones[getRandomInt(4)]);

        setTimeout(() => {
            console.log('XD')
            for (let i of juego) {
                contador += 200;
                setTimeout(() => {
                    activatebutton(i[0], i[1], i[2], i[3], i[4]);
                }, parseInt(contador))
            }; contador = 0;
        }, '1000');

        if (juego.length > 5) {
            juego.length = 0;
            comenzar = false;
        }
    }
});






redbutton.addEventListener('click', () => {
    activatebutton(redsound, redbutton, 'red', 'rgb(201,27,28)', '100');
});

greenbutton.addEventListener('click', () => {
    activatebutton(greensound, greenbutton, 'green', 'rgb(1,156,78)', '100');
});

bluebutton.addEventListener('click', () => {
    activatebutton(bluesound, bluebutton, 'rgb(0, 162, 255)', 'rgb(0,119,188)', '100');
});

yellowbutton.addEventListener('click', () => {
    activatebutton(yellowsound, yellowbutton, 'rgb(255, 217, 0)', 'rgb(218,189,25)', '100');
});


