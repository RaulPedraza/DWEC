var Contacto = /** @class */ (function () {
    function Contacto(nombre, organizacion, movil) {
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.movil = movil;
    }
    Object.defineProperty(Contacto.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "setNombre", {
        set: function (value) {
            this.nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "getOrganizacion", {
        get: function () {
            return this.organizacion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "setOrganizacion", {
        set: function (value) {
            this.organizacion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "getMovil", {
        get: function () {
            return this.movil;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "setMovil", {
        set: function (value) {
            this.movil = value;
        },
        enumerable: true,
        configurable: true
    });
    return Contacto;
}());
var listaContactos;
function ocultar() {
    var cajaAñadir = document.getElementById("formAñadir");
    cajaAñadir.style.display = "none";
    var cajaBuscar = document.getElementById("formBuscar");
    cajaBuscar.style.display = "none";
}
function verAñadir() {
    var cajaAñadir = document.getElementById("formAñadir");
    if (cajaAñadir.style.display == "none") {
        cajaAñadir.style.display = "block";
    }
    var cajaBuscar = document.getElementById("formBuscar");
    if (cajaBuscar.style.display == "block") {
        cajaBuscar.style.display = "none";
    }
}
function verBuscar() {
    var cajaBuscar = document.getElementById("formBuscar");
    if (cajaBuscar.style.display == "none") {
        cajaBuscar.style.display = "block";
    }
    var cajaAñadir = document.getElementById("formAñadir");
    if (cajaAñadir.style.display == "block") {
        cajaAñadir.style.display = "none";
    }
}
function añadirContacto() {
    var nombre = document.getElementById("nombre").nodeValue;
    var org = document.getElementById("org").nodeValue;
    var movil = document.getElementById("movil").nodeValue;
    var contacto = new Contacto(nombre, org, movil);
    listaContactos.push(contacto);
}
