export default class CL_tienda {
    constructor() {
        this.acCosto = 0;
        this.acPrecio = 0
        this.codigoArticulo = 0;
        this.mayorVenta = 0;
    }

    procesarArticulos(articulo) {
        this.acCosto += articulo.costo;
        this.acPrecio += articulo.precio;
        if (articulo.precio > this.mayorVenta) {
            this.mayorVenta = articulo.precio;
            this.codigoArticulo = articulo.codigo;
        }
    }

    gananciaTotal() {
        return this.acPrecio - this.acCosto;
    }

    codigoArticuloMayor() {
        return this.codigoArticulo;
    }
}