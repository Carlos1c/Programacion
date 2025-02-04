/* Conociendo la edad de varias personas, indicar la edad promedio.
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18 */

import CL_edad from "./CL_edad.js";
import CL_persona from "./CL_persona.js";

let edad1 = new CL_edad(15);
let edad2 = new CL_edad(14);
let edad3 = new CL_edad(19);
let edad4 = new CL_edad(20);
let edad5 = new CL_edad(16);
let edad6 = new CL_edad(18);
let persona = new CL_persona();

persona.procesarPersonas(edad1);
persona.procesarPersonas(edad2);
persona.procesarPersonas(edad3);
persona.procesarPersonas(edad4);
persona.procesarPersonas(edad5);
persona.procesarPersonas(edad6);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>La edad promedio es ${persona.edadPromedio()}
`