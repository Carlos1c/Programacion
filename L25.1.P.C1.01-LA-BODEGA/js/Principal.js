/* En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
Ej. Costos varios artículos: 10, 20, 14, 6 y 4 */

import CL_bodega from "./CL_bodega.js";
import CL_articulo from "./CL_articulo.js";

let producto1 = new CL_articulo(10);
let producto2 = new CL_articulo(20);
let producto3 = new CL_articulo(14);
let producto4 = new CL_articulo(6);
let producto5 = new CL_articulo(4);
let bodega = new CL_bodega();

bodega.procesarProducto(producto1);
bodega.procesarProducto(producto2);
bodega.procesarProducto(producto3);
bodega.procesarProducto(producto4);
bodega.procesarProducto(producto5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>La ganancia será de Bs.${bodega.ganacia()}
`