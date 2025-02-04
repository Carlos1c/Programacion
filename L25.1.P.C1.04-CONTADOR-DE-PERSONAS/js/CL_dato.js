export default class CL_dato {
    constructor() {
        this.cntPersonas = 0;
        this.cntHombres = 0;
        this.cntMujeres = 0;
    }

    procesarPersonas(persona) {
        this.cntPersonas++;
        if (persona.sexo == "M") {
            this.cntHombres++;
        }
        if (persona.sexo == "F") { 
            this.cntMujeres++;
        }
    }

    totalHombres() {
        return this.cntHombres;
    }

    totalMujeres() {
        return this.cntMujeres;
    }
}