export default class CL_juego {
    constructor(resultado) {
        this.resultado = resultado;
    }

    set resultado(resultado) {
        this._resultado = +resultado;
    }
    get resultado() {
        return this._resultado;
    }
}