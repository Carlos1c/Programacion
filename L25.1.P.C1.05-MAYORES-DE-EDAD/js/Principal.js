/* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16) */

import CL_dato from "./CL_dato.js";
import CL_persona from "./CL_persona.js";

let persona1 = new CL_persona("Luis", 15);
let persona2 = new CL_persona("Ana", 19);
let persona3 = new CL_persona("José", 21);
let persona4 = new CL_persona("Carmen", 17);
let persona5 = new CL_persona("Rosa", 18);
let persona6 = new CL_persona("José", 22);
let persona7 = new CL_persona("María", 17);
let persona8 = new CL_persona("Luz", 19);
let persona9 = new CL_persona("Rafael", 23);
let persona10 = new CL_persona("Liz", 15);
let persona11 = new CL_persona("Marcos", 20);
let persona12 = new CL_persona("Leo", 16);
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
<br>Cantidad de personas mayor de edad: ${dato.cntPersonasMayEdad}
<br>Porcentaje de personas mayor de edad: ${dato.porcPersonasMayEdad().toFixed(2)}%
`