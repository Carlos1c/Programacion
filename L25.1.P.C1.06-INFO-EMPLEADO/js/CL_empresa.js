export default class CL_empresa {
    constructor() {
        this.acObrero = 0;
        this.acAdministrativo = 0;
    }

    procesarPersonal(personal) {
        if (personal.puesto == "obrero") {
            this.acObrero += personal.ganancia;
        }
        if (personal.puesto == "administrativo") {
            this.acAdministrativo += personal.ganancia;
        }
    }

    prom3Obrero() {
        return this.acObrero / 3;
    }

    prom2Administrativo() {
        return this.acAdministrativo / 2;
    }
}