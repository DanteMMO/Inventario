import { Producto } from "./Producto.js";
import { Inventario } from "./Inventario.js";

const inventario = new Inventario();
const div = document.getElementById("detalles");

function mostrar(mensaje) {
    div.innerHTML = div.innerHTML + mensaje + "<br>";
}

// ── AÑADIR AL FINAL ──
const botonAnadir = document.getElementById("anadirProd");
botonAnadir.addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("txtCode").value);
    let nombre = document.getElementById("txtNom").value;
    let cantidad = parseInt(document.getElementById("txtCan").value);
    let costo = parseFloat(document.getElementById("txtCost").value);

    let producto = new Producto(codigo, nombre, cantidad, costo);
    inventario.agregar(producto);
    mostrar("Producto agregado al final: " + producto.info());
});

// ── AÑADIR AL INICIO ──
const botonAnadirInicio = document.getElementById("anadirInicio");
botonAnadirInicio.addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("txtCode").value);
    let nombre = document.getElementById("txtNom").value;
    let cantidad = parseInt(document.getElementById("txtCan").value);
    let costo = parseFloat(document.getElementById("txtCost").value);

    let producto = new Producto(codigo, nombre, cantidad, costo);
    inventario.agregarInicio(producto);
    mostrar("Producto agregado al inicio: " + producto.info());
});

// ── INSERTAR EN POSICIÓN ──
const botonInsertar = document.getElementById("insertarProd");
botonInsertar.addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("txtCode").value);
    let nombre = document.getElementById("txtNom").value;
    let cantidad = parseInt(document.getElementById("txtCan").value);
    let costo = parseFloat(document.getElementById("txtCost").value);
    let posicion = parseInt(document.getElementById("txtPos").value);

    let producto = new Producto(codigo, nombre, cantidad, costo);
    inventario.insertar(producto, posicion);
    mostrar("Producto insertado en posición " + posicion + ": " + producto.info());
});

// ── BUSCAR ──
const botonBuscar = document.getElementById("buscarProd");
botonBuscar.addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("txtBuscar").value);
    let res = inventario.buscar(codigo);
    if (res === null) {
        mostrar("No existe el producto con código " + codigo);
    } else {
        mostrar("Encontrado: " + res.info());
    }
});

// ── ELIMINAR ──
const botonEliminar = document.getElementById("eliminarProd");
botonEliminar.addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("txtBuscar").value);
    let res = inventario.eliminar(codigo);
    if (res === null) {
        mostrar("No se pudo eliminar. No existe el código " + codigo);
    } else {
        mostrar("Producto con código " + codigo + " eliminado.");
    }
});

// ── EXTRAER PRIMERO ──
const botonExtraer = document.getElementById("extraerPrimero");
botonExtraer.addEventListener("click", () => {
    let res = inventario.extraerPrimero();
    if (res === null) {
        mostrar("El inventario está vacío.");
    } else {
        mostrar("Se extrajo el primero: " + res.info());
    }
});

// ── LISTAR ──
const botonListar = document.getElementById("listarProd");
botonListar.addEventListener("click", () => {
    mostrar("--- LISTADO ---");
    mostrar(inventario.listar());
    mostrar("--- FIN DEL LISTADO ---");
});

// ── LISTAR INVERSO ──
const botonListarInverso = document.getElementById("listarInverso");
botonListarInverso.addEventListener("click", () => {
    mostrar("--- LISTADO INVERSO ---");
    mostrar(inventario.listarInverso());
    mostrar("--- FIN DEL LISTADO ---");
});

// ── LIMPIAR ──
const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", () => {
    div.innerHTML = "";
});