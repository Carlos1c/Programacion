/* En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional
que deberá pagar en la próxima quincena.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150 */

import CL_empresa from "./CL_empresa.js";
import CL_personal from "./CL_personal.js";

let personal1 = new CL_personal("Juan", "obrero", 100);
let personal2 = new CL_personal("Ana", "obrero", 120);
let personal3 = new CL_personal("Lin", "administrativo", 200);
let personal4 = new CL_personal("Mary", "obrero", 50);
let personal5 = new CL_personal("Carlos", "administrativo", 150);
let empresa = new CL_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>${personal1.nombre} tiene un aumento de $${personal1.aumento()}
<br>${personal2.nombre} tiene un aumento de $${personal2.aumento()}
<br>${personal3.nombre} tiene un aumento de $${personal3.aumento()}
<br>${personal4.nombre} tiene un aumento de $${personal4.aumento()}
<br>${personal5.nombre} tiene un aumento de $${personal5.aumento()}
<br><br>El total de monto adicional que debe pagar la empresa es de $${empresa.aumentoTotal()}
`