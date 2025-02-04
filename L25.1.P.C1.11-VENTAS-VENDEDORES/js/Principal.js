/* Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75) */

import CL_tienda from "./CL_tienda.js";
import CL_vendedor from "./CL_vendedor.js";

let vendedor1 = new CL_vendedor("Mary", 150);
let vendedor2 = new CL_vendedor("José", 135);
let vendedor3 = new CL_vendedor("Carlos", 160);
let vendedor4 = new CL_vendedor("Pedro", 75);
let tienda = new CL_tienda();

tienda.procesarVendedor(vendedor1);
tienda.procesarVendedor(vendedor2);
tienda.procesarVendedor(vendedor3);
tienda.procesarVendedor(vendedor4);

alert(`Cantidad de ventas que fueron por 100$ o menos: ${tienda.menor100()}
Cantidad de ventas mayores a 100$: ${tienda.mayor100()}
Monto total de las ventas: ${tienda.montoTotal()}$`)