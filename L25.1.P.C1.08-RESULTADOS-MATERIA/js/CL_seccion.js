export default class CL_seccion {
    constructor() {
        this.cntAprobado = 0;
        this.cntReprobado = 0;
        this.acNota = 0;
        this.cntCedula = 0;
    }

    procesarEstudiasntes(estudiante) {
        this.acNota += estudiante.nota;
        this.cntCedula++;
        if (estudiante.nota >= 48) {
            this.cntAprobado++;
        }
        if (estudiante.nota < 48) {
            this.cntReprobado++;
        }
    }

    promNota() {
        return this.acNota / this.cntCedula;
    }
}