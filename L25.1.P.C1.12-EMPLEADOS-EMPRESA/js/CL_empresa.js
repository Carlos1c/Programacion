export default class CL_empresa {
    constructor() {
        this.cntHombre = 0;
        this.cntEmpleado = 0;
        this.cntMujeres = 0;
    }

    procesarEmpleados(empleado) {
        this.cntEmpleado++;
        if (empleado.sexo == "M") {
            this.cntHombre++;
        }
        if (empleado.sexo == "F") {
            this.cntMujeres++;
        }
    }

    totalHombres() {
        return this.cntHombre;
    }

    porcentajeMujeres() {
        return this.cntMujeres / this.cntEmpleado * 100;
    }
}