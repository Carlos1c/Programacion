/* Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’) */

import CL_empleado from "./CL_empleado.js";
import CL_empresa from "./CL_empresa.js";

let empleado1 = new CL_empleado("Mary", "F");
let empleado2 = new CL_empleado("José", "M");
let empleado3 = new CL_empleado("Carlos", "M");
let empleado4 = new CL_empleado("Pedro", "M");
let empresa = new CL_empresa();

empresa.procesarEmpleados(empleado1);
empresa.procesarEmpleados(empleado2);
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);

alert(`Cantidad de hombres que trabajan en la empresa: ${empresa.totalHombres()}
Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajeMujeres()}%`)