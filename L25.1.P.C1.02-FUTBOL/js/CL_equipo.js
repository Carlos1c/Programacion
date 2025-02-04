export default class CL_equipo {
    constructor() {
        this.cntPartido = 0;
        this.partidoGanado = 0;
    }

    procesarPartido(partido) {
        this.cntPartido++;
        if (partido.resultado == 1) {
            this.partidoGanado++;
        }
    }

    resultadoFinal() {
        return this.partidoGanado / this.cntPartido * 100;
    }
}