export default class CL_trabajador {
    constructor(nombre, horaRegular, horaExtra) {
        this.nombre = nombre;
        this.horaRegular = horaRegular;
        this.horaExtra = horaExtra;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    set horaRegular(horaRegular) {
        this._horaRegular = +horaRegular;
    }
    get horaRegular() {
        return this._horaRegular;
    }

    set horaExtra(horaExtra) {
        this._horaExtra = +horaExtra;
    }
    get horaExtra() {
        return this._horaExtra;
    }

    tiempoRegular() {
        return this.horaRegular * 10;
    }

    tiempoExtra() {
        return this.horaExtra * 25;
    }

    tiempoTotal() {
        return this.tiempoRegular() + this.tiempoExtra();
    }
}