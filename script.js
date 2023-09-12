const redbutton = document.querySelector('#quarter-circle-1');
const greenbutton = document.querySelector('#quarter-circle-2');
const yellowbutton = document.querySelector('#quarter-circle-3');
const bluebutton = document.querySelector('#quarter-circle-4');
const iniciarboton = document.querySelector('button');
const puntaje = document.querySelector('p');
const mensaje = document.querySelector('h1');
const textorecord = document.querySelector('#record');

const redsound = new Audio('redsound.wav');
const greensound = new Audio('greensound.wav');
const yellowsound = new Audio('yellowsound.wav');
const bluesound = new Audio('bluesound.wav');
const losesound = new Audio('lose.wav');

let patronMaquina = [];
let patronJugador = [];
let rondas = -1;
let record = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

iniciarboton.addEventListener('click', ()=> {
    reiniciar();
    ronda();
});

quitarPermisoInput();

function reiniciar() {
    rondas = -1;
    patronMaquina = [];
    patronJugador = [];
}

function obtenerBotonAleatorio() {
    const $botones = document.querySelectorAll('.quarter-circle');
    const indice = Math.floor(Math.random() * $botones.length);
    return $botones[indice];
}

function ronda() {
    mensaje.textContent = 'Turno de la máquina'
    iniciarboton.disabled = true;
    rondas += 1;
    if (rondas > record) {
        record = rondas;
    }
    puntaje.textContent = rondas.toString();
    quitarPermisoInput();

    const $nuevoBotton = obtenerBotonAleatorio();
    patronMaquina.push($nuevoBotton);

    const RETRASO_TURNO_JUGADOR = ((patronMaquina.length + 1) * 500);

    patronMaquina.forEach(function($boton, index) {
        const RETRASO_MS = (index + 1) * 500;
        setTimeout(function() {
            encenderBoton($boton);
        }, RETRASO_MS);
    })

    setTimeout(function() {
        mensaje.textContent = 'Tu turno';
        darPermisoInput(); 
    }, RETRASO_TURNO_JUGADOR);

    patronJugador = [];
}

function turnoMaquina(){
    patronMaquina.forEach(($boton) => encenderBoton($boton));
}

function darPermisoInput(){
    document.querySelectorAll('.quarter-circle').forEach(function($boton) {
        $boton.onclick = inputDelUsuario;
    })
}

function quitarPermisoInput(){
    document.querySelectorAll('.quarter-circle').forEach(function($boton) {
        $boton.onclick = function(){
        };
    })
}

function inputDelUsuario(e){
    const $boton = e.target;
    encenderBoton($boton);
    patronJugador.push($boton);

    const $botonMaquina = patronMaquina[patronJugador.length - 1];
    if ($boton.id !== $botonMaquina.id) {
        perder();
        return;
    }

    if (patronJugador.length === patronMaquina.length) {
        quitarPermisoInput();
        setTimeout(() => {
            ronda()
        }, 500);
    }
}

function encenderBoton($boton) {
    $boton.style.opacity = 1;
    switch ($boton.id) {
        case 'quarter-circle-1':
            redsound.play();
            break;
        case 'quarter-circle-2':
            greensound.play();
            break;
        case 'quarter-circle-3':
            yellowsound.play();
            break;
        case 'quarter-circle-4':
            bluesound.play();
            break;
    }
    setTimeout(()=> {
        $boton.style.opacity = 0.6;
    }, 200);
}

function perder() {
    quitarPermisoInput();
    setTimeout(() => {
        mensaje.textContent = '¡Oh no! Perdiste :('
        textorecord.textContent = `Tu récord es: ${record}`;
        losesound.play();    
    }, 500);
    setTimeout(() => {
        iniciarboton.textContent = 'REINICIAR';
        iniciarboton.disabled = false;
    }, 1000);
}