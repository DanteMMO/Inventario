export class Inventario {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    agregarInicio(producto) {
        let n = this.productos.length;
        for (let i = n; i > 0; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[0] = producto;
    }

    buscar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                return this.productos[i];
            }
        }
        return null;
    }

    eliminar(codigo) {
        let posicion = -1;
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                posicion = i;
            }
        }
        if (posicion === -1) {
            return null;
        }
        for (let i = posicion; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return true;
    }

    insertar(producto, posicion) {
        let n = this.productos.length;
        for (let i = n; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
    }

    listar() {
        let texto = "";
        for (let i = 0; i < this.productos.length; i++) {
            texto = texto + this.productos[i].infoHtml();
        }
        return texto;
    }

    listarInverso() {
        let texto = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            texto = texto + this.productos[i].infoHtml();
        }
        return texto;
    }

    extraerPrimero() {
        if (this.productos.length === 0) {
            return null;
        }
        let primero = this.productos[0];
        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return primero;
    }
}