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

    set ganancia(ganancia) {
        this._ganancia = +ganancia;
    }
    get ganancia() {
        return this._ganancia;
    }

    aumento() {
        if (this.puesto == "obrero") {
            return this.ganancia * 0.2;
        }
        if (this.puesto == "administrativo") {
            return this.ganancia * 0.1;
        }
    }
}