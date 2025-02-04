export default class CL_articulo {
    constructor(precio) {
        this.precio = precio;
    }

    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
}