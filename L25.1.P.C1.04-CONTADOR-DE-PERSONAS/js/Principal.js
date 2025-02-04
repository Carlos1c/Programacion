/* Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo */

import CL_persona from "./CL_persona.js";
import CL_dato from "./CL_dato.js";

let persona1 = new CL_persona("Luisa", "F");
let persona2 = new CL_persona("Ana", "F");
let persona3 = new CL_persona("José", "M");
let persona4 = new CL_persona("Carmen", "F");
let persona5 = new CL_persona("Rosa", "F");
let persona6 = new CL_persona("José", "M");
let persona7 = new CL_persona("Maria", "F");
let persona8 = new CL_persona("Luz", "F");
let persona9 = new CL_persona("Rafael", "M");
let persona10 = new CL_persona("Liz", "F");
let persona11 = new CL_persona("Marcos", "M");
let persona12 = new CL_persona("Leo", "M");
let dato = new CL_dato();

dato.procesarPersonas(persona1);
dato.procesarPersonas(persona2);
dato.procesarPersonas(persona3);
dato.procesarPersonas(persona4);
dato.procesarPersonas(persona5);
dato.procesarPersonas(persona6);
dato.procesarPersonas(persona7);
dato.procesarPersonas(persona8);
dato.procesarPersonas(persona9);
dato.procesarPersonas(persona10);
dato.procesarPersonas(persona11);
dato.procesarPersonas(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Cantidad de personas: ${dato.cntPersonas}
<br>Cantidad de hombres: ${dato.totalHombres()}
<br>Cantidad de mujeres: ${dato.totalMujeres()}
`