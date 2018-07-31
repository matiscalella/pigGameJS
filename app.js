/*
Reglas del juego:

- Se juega por turnos, 2 jugadores.
- En cada turno, el jugador hace girar el dado tantas veces como quiera. Cada resultado del dado se agrega a su puntaje ROUND.
- PERO, si el jugador tira un 1 todo su puntaje ROUND se pierde y es el turno del proximo jugador.
- El jugador puede elegir la opcion 'Hold', que significa que su puntaje ROUND se suma al puntaje GLOBAL. En ese caso, sera el turno del proximo jugador.
- El primer jugador en alcanzar los 100 puntos GLOBAL gana el juego.

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0]; // el primer valor corresponde al puntaje del primer jugador y el segundo, al segundo jugador.
roundScore = 0;
activePlayer = 0; // 0 es el primer jugador, 1 es el segundo jugador

// Creo el dado del juego
dice = Math.floor(Math.random() * 6) + 1; // genero un valor aleatorio entre 1 y 6 para el dado

// Cambio el contenido del elemento HTML que suma puntos en funcion del jugador que esté activo
document.querySelector('#current-' + activePlayer).textContent = dice;

/*

Otra forma de hacer lo mismo sería a través del método .innerHTML como se muestra abajo

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

Otra forma de seleccionar un elemento
// Guardo el valor del texto en una variable que puedo utilizar luego

let x = document.querySelector('#score-' + activePlayer).textContent; 
console.log(x);

*/


// Selecciono la imagen del dado para que no se vea al comenzar el juego
document.querySelector('.dice').style.display = 'none'; 