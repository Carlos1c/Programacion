export default class CL_tienda {
    constructor() {
        this.ventaMay100 = 0;
        this.ventaMen100 = 0;
        this.acVenta = 0;
    }

    procesarVendedor(vendedor) {
        this.acVenta += vendedor.monto;
        if (vendedor.monto >= 100) {
            this.ventaMay100++;
        }
        if (vendedor.monto < 100) {
            this.ventaMen100++;
        }
    }

    mayor100() {
        return this.ventaMay100;
    }

    menor100() {
        return this.ventaMen100;
    }

    montoTotal() {
        return this.acVenta;
    }
}