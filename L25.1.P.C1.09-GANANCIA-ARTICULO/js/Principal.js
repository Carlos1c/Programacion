/* Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) */

import CL_articulo from "./CL_articulo.js";
import CL_tienda from "./CL_tienda.js";

let articulo1 = new CL_articulo(888, 10, 15);
let articulo2 = new CL_articulo(777, 20, 25);
let articulo3 = new CL_articulo(999, 15, 25);
let articulo4 = new CL_articulo(666, 25, 35);
let articulo5 = new CL_articulo(111, 50, 70);
let articulo6 = new CL_articulo(333, 40, 50);
let articulo7 = new CL_articulo(444, 80, 100);
let articulo8 = new CL_articulo(222, 5, 10);
let tienda = new CL_tienda();

tienda.procesarArticulos(articulo1);
tienda.procesarArticulos(articulo2);
tienda.procesarArticulos(articulo3);
tienda.procesarArticulos(articulo4);
tienda.procesarArticulos(articulo5);
tienda.procesarArticulos(articulo6);
tienda.procesarArticulos(articulo7);
tienda.procesarArticulos(articulo8);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Ganancia Total: ${tienda.gananciaTotal()}$
<br>Código del artículo con mayor precio de venta: ${tienda.codigoArticuloMayor()}
`