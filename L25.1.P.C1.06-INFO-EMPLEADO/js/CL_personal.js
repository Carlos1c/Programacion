export default class CL_personal {
    constructor(nombre, puesto, ganancia) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.ganancia = ganancia;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    set puesto(puesto) {
        this._puesto = puesto;
    }
    get puesto() {
        return this._puesto;
    }

    set ganacia(ganancia) {
        this._ganancia = +ganancia;
    }
    get ganacia() {
        return this._ganancia;
    }
}