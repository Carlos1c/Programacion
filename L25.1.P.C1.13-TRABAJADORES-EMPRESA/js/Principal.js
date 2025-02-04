/* Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 10$.
y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada.
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10) */

import CL_empresa from "./CL_empresa.js";
import CL_trabajador from "./CL_trabajador.js";

let trabajador1 = new CL_trabajador("Mary", 30, 10);
let trabajador2 = new CL_trabajador("José", 35, 5);
let trabajador3 = new CL_trabajador("Carlos", 35, 0);
let trabajador4 = new CL_trabajador("Pedro", 25, 10);
let empresa = new CL_empresa();

empresa.procesarTrabajadores(trabajador1);
empresa.procesarTrabajadores(trabajador2);
empresa.procesarTrabajadores(trabajador3);
empresa.procesarTrabajadores(trabajador4);

alert(`El trabajador ${trabajador1.nombre} tiene un salario de: ${trabajador1.tiempoTotal()}$
El trabajador ${trabajador2.nombre} tiene un salario de: ${trabajador2.tiempoTotal()}$
El trabajador ${trabajador3.nombre} tiene un salario de: ${trabajador3.tiempoTotal()}$
El trabajador ${trabajador4.nombre} tiene un salario de: ${trabajador4.tiempoTotal()}$

Monto total de nómina pagada: ${empresa.nominaTotal()}$`)