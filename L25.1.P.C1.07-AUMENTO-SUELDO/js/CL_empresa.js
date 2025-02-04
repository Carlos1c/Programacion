export default class CL_empresa {
    constructor() {
        this.acAumento = 0;
    }

    procesarPersonal(personal) {
        this.acAumento += personal.aumento();
    }

    aumentoTotal() {
        return this.acAumento;
    }
}