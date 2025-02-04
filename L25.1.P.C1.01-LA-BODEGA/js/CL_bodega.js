export default class CL_bodega {
    constructor() {
        this.acPrecio = 0;
    }

    procesarProducto(producto) {
        this.acPrecio += producto.precio;
    }

    ganacia() {
        return this.acPrecio * 0.5;
    }
}