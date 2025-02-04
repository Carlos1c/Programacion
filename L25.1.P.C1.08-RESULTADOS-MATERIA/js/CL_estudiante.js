export default class CL_estudiante {
    constructor(cedula, nota) {
        this.cedula = cedula;
        this.nota = nota;
    }

    set sedula(sedula) {
        this._sedula = +sedula;
    }
    get sedula() {
        return this._sedula;
    }

    set nota(nota) {
        this._nota = +nota;
    }
    get nota() {
        return this._nota;
    }
}