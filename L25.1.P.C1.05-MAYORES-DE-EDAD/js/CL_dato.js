export default class CL_dato {
    constructor() {
        this.cntPersonas = 0;
        this.cntPersonasMayEdad = 0;
    }

    procesarPersonas(persona) {
        this.cntPersonas++;
        if (persona.edad >= 18) {
            this.cntPersonasMayEdad++;
        }
    }

    porcPersonasMayEdad() {
        return this.cntPersonasMayEdad / this.cntPersonas * 100;
    }
}