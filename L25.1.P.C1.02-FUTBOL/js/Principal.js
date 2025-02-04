/* Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es
perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1 */

import CL_equipo from "./CL_equipo.js";
import CL_juego from "./CL_juego.js";

let juegos1 = new CL_juego(1);
let juegos2 = new CL_juego(1);
let juegos3 = new CL_juego(0);
let juegos4 = new CL_juego(1);
let juegos5 = new CL_juego(0);
let juegos6 = new CL_juego(1);
let equipo = new CL_equipo();

equipo.procesarPartido(juegos1);
equipo.procesarPartido(juegos2);
equipo.procesarPartido(juegos3);
equipo.procesarPartido(juegos4);
equipo.procesarPartido(juegos5);
equipo.procesarPartido(juegos6);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Ganaste el ${equipo.resultadoFinal().toFixed(2)}% de los juegos
`