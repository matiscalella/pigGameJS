/*
Reglas del juego:

- Se juega por turnos, 2 jugadores.
- En cada turno, el jugador hace girar el dado tantas veces como quiera. Cada resultado del dado se agrega a su puntaje ROUND.
- PERO, si el jugador tira un 1 todo su puntaje ROUND se pierde y es el turno del proximo jugador.
- El jugador puede elegir la opcion 'Hold', que significa que su puntaje ROUND se suma al puntaje GLOBAL. En ese caso, sera el turno del proximo jugador.
- El primer jugador en alcanzar los 100 puntos GLOBAL gana el juego.

*/

var scores, roundScore, activePlayer;

scores = [0, 0]; // el primer valor corresponde al puntaje del primer jugador y el segundo, al segundo jugador.
roundScore = 0;
activePlayer = 0; // 0 es el primer jugador, 1 es el segundo jugador

// Selecciono la imagen del dado para que no se vea al comenzar el juego
document.querySelector('.dice').style.display = 'none'; 

// Configuro todos los puntajes a 0 para el inicio del juego
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Selecciono el boton que hace girar el dado para que al clickear ejecute una funcion ANONIMA (sin nombre)
document.querySelector('.btn-roll').addEventListener('click', function() {
    
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
        
        // Si el jugador activo es 0, entonces cambiarlo a 1, sino cambiarlo a 0
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        // el puntaje se resetea a 0
        roundScore = 0; 
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // elimino la clase ACTIVE del jugador que está en turno y se la asigno al otro jugador mediante TOGGLE
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // esconder la imagen del dado cuando el jugador saca 1
        document.querySelector('.dice').style.display = 'none';
    }
    
});
















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





