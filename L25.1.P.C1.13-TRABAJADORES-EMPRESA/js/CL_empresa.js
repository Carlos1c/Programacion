export default class CL_empresa {
    constructor() {
        this.acMonto = 0;
    }

    procesarTrabajadores(trabajador) {
        this.acMonto += trabajador.tiempoTotal();
    }

    nominaTotal() {
        return this.acMonto;
    }
}