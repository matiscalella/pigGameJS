/*
Reglas del juego:

- Se juega por turnos, 2 jugadores.
- En cada turno, el jugador hace girar el dado tantas veces como quiera. Cada resultado del dado se agrega a su puntaje ROUND.
- PERO, si el jugador tira un 1 todo su puntaje ROUND se pierde y es el turno del proximo jugador.
- El jugador puede elegir la opcion 'Hold', que significa que su puntaje ROUND se suma al puntaje GLOBAL. En ese caso, sera el turno del proximo jugador.
- El primer jugador en alcanzar los 100 puntos GLOBAL gana el juego.

*/

var scores, roundScore, activePlayer, gamePlaying;

// Inicializo los valores de las variables llamando a la funcion init
init();

// Selecciono el boton que hace girar el dado para que al clickear ejecute una funcion ANONIMA (sin nombre)
document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        // 1. Generar un numero al azar (creo el dado del juego)
        var dice = Math.floor(Math.random() * 6) + 1; // genero un valor aleatorio entre 1 y 6
        
        // 2. Mostrar la imagen del dado en funcion del numero obtenido
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; // modifico el atributo SRC para que elija la imagen correspondiente
        
        // 3. Actualizar el score del ROUND solo (IF) si el numero es != 1
        if (dice !== 1) { // agregar el score
            roundScore += dice; // roundScore suma el valor del dado a su total
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Llamo a la funcion para cambiar de jugador
            nextPlayer();
        }
    }    
});


// Boton de HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1. Agregar el score "Current" al score Global
        scores[activePlayer] += roundScore // Sumo el valor actual del puntaje al array que contiene el puntaje GLOBAL 
        // 2. Actualizar UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // 3. Revisar si el jugador ganó el juego
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!'; // 1. anuncio el ganador
            document.querySelector('.dice').style.display = 'none'; // 2. escondo la imagen del dado
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // 3. agrego la clase winner
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // 4. quito la clase active
            gamePlaying = false;
        } else {
            // 4. Turno del jugador siguiente
            nextPlayer();
        }  
    }  
});

// Boton de NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

// Funcion de Inicializacion
function init() {
    scores = [0, 0]; // el primer valor corresponde al puntaje del primer jugador y el segundo, al segundo jugador.
    roundScore = 0;
    activePlayer = 0; // 0 es el primer jugador, 1 es el segundo jugador
    gamePlaying = true;

    // Selecciono la imagen del dado para que no se vea al comenzar el juego
    document.querySelector('.dice').style.display = 'none'; 

    // Configuro todos los puntajes a 0 para el inicio del juego
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Configuro los nombres de ambos jugadores
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Quito las clases winner y active
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active'); // Quito la clase al jugador 1 y abajo la vuelvo a agregar para evitar que se duplique
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); // agrego la clase active solamente al 1er jugador
};


// Funcion para cambiar de jugador
function nextPlayer() {
    // Si el jugador activo es 0, entonces cambiarlo a 1, sino cambiarlo a 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
    // el puntaje del turno se resetea a 0
    roundScore = 0; 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // elimino la clase ACTIVE del jugador que está en turno y se la asigno al otro jugador mediante TOGGLE
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    // esconder la imagen del dado cuando el jugador saca 1
    document.querySelector('.dice').style.display = 'none';
}




/* CODIGO IRRELEVANTE - ANOTACIONES

Cambio el contenido del elemento HTML que suma puntos en funcion del jugador que esté activo
//document.querySelector('#current-' + activePlayer).textContent = dice;

Otra forma de hacer lo mismo sería a través del método .innerHTML como se muestra abajo

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

Otra forma de seleccionar un elemento
// Guardo el valor del texto en una variable que puedo utilizar luego

let x = document.querySelector('#score-' + activePlayer).textContent; 
console.log(x);

// elimino la clase ACTIVE del jugador que está en turno y se la asigno al otro jugador mediante TOGGLE
        document.querySelector('.player-0-panel').classList.remove('active'); //quitar clase
        document.querySelector('.player-1-panel').classList.add('active'); // agregar clase

*/





