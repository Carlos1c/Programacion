export default class CL_persona {
    constructor() {
        this.cntPersonas = 0;
        this.acEdad = 0;
    }

    procesarPersonas(personas) {
        this.cntPersonas++;
        this.acEdad += personas.edad;
    }

    edadPromedio() {
        return this.acEdad / this.cntPersonas;
    }
}