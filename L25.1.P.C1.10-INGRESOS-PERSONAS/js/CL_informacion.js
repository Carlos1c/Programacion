export default class CL_informacion {
    constructor() {
        this.menorIngreso = Infinity;
        this.acIngreso = 0;
        this.cntPersonas = 0;
    }

    procesarPersonas(persona) {
        this.acIngreso += persona.ingreso;
        this.cntPersonas++;
        if (persona.ingreso < this.menorIngreso) {
            this.menorIngreso = persona.ingreso;
        }
    }

    montoMenor() {
        return this.menorIngreso;
    }

    montoPromedio() {
        return this.acIngreso / this.cntPersonas;
    }
}