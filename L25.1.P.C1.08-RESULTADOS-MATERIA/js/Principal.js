/* Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos) */

import CL_estudiante from "./CL_estudiante.js";
import CL_seccion from "./CL_seccion.js";

let estudiante1 = new CL_estudiante(888, 60);
let estudiante2 = new CL_estudiante(777, 50);
let estudiante3 = new CL_estudiante(999, 40);
let estudiante4 = new CL_estudiante(333, 80);
let estudiante5 = new CL_estudiante(111, 30);
let estudiante6 = new CL_estudiante(666, 90);
let estudiante7 = new CL_estudiante(444, 48);
let estudiante8 = new CL_estudiante(222, 60);
let seccion = new CL_seccion();

seccion.procesarEstudiasntes(estudiante1);
seccion.procesarEstudiasntes(estudiante2);
seccion.procesarEstudiasntes(estudiante3);
seccion.procesarEstudiasntes(estudiante4);
seccion.procesarEstudiasntes(estudiante5);
seccion.procesarEstudiasntes(estudiante6);
seccion.procesarEstudiasntes(estudiante7);
seccion.procesarEstudiasntes(estudiante8);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Cantidad de aprobados: ${seccion.cntAprobado}
<br>Cantidad de reprobados: ${seccion.cntReprobado}
<br>Nota promedio de la sección: ${seccion.promNota().toFixed(2)}
`