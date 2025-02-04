export default class CL_vendedor {
    constructor(nombre, monto) {
        this.nombre = nombre;
        this.monto = monto;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    set monto(monto) {
        this._monto = +monto;
    }
    get monto() {
        return this._monto;
    }
}