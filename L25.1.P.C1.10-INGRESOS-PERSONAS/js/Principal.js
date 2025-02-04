/* Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75) */

import CL_informacion from "./CL_informacion.js";
import CL_persona from "./CL_persona.js";

let persona1 = new CL_persona("Mary", 150);
let persona2 = new CL_persona("José", 135);
let persona3 = new CL_persona("Carlos", 160);
let persona4 = new CL_persona("Pedro", 75);
let informacion = new CL_informacion();

informacion.procesarPersonas(persona1);
informacion.procesarPersonas(persona2);
informacion.procesarPersonas(persona3);
informacion.procesarPersonas(persona4);

alert(`Monto del ingreso menor: ${informacion.montoMenor()}$
Ingreso promedio: ${informacion.montoPromedio()}$`);