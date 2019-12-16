var Contacto = /** @class */ (function () {
    function Contacto(nombre, organizacion, movil, campos) {
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.movil = movil;
        this.campos = campos;
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
    Object.defineProperty(Contacto.prototype, "getcampos", {
        get: function () {
            return this.campos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "setcampos", {
        set: function (value) {
            this.campos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Contacto;
}());
var listaContactos = new Array();
var listaCampos = new Array();
var contadorCampos = 0;
var nombreCampo;
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
        llenarCbOrgs();
    }
    var cajaAñadir = document.getElementById("formAñadir");
    if (cajaAñadir.style.display == "block") {
        cajaAñadir.style.display = "none";
    }
}
function llenarCbOrgs() {
    var cbOrgs = document.getElementById("orgs");
    for (var x = 0; x < listaContactos.length; x++) {
        var opcion = document.createElement("option");
        opcion.value = listaContactos[x].getOrganizacion;
        opcion.text = listaContactos[x].getOrganizacion;
        cbOrgs.appendChild(opcion);
    }
}
function añadirCampo() {
    nombreCampo = prompt("Introduce el nombre del campo que quieres añadir");
    var cajaAñadir = document.getElementById("campos");
    var nuevoCampo = document.createElement("p");
    var nuevoCampoText = document.createTextNode(nombreCampo + ": ");
    nuevoCampo.appendChild(nuevoCampoText);
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", contadorCampos.toString());
    nuevoCampo.appendChild(input);
    cajaAñadir.appendChild(nuevoCampo);
    cogerValorCampo();
}
function cogerValorCampo() {
    if (contadorCampos != 0) {
        var id = contadorCampos - 1;
        var cajaCampo = document.getElementById(id.toString());
        var campo = cajaCampo.value;
        listaCampos[nombreCampo] = campo;
    }
}
function añadirContacto() {
    var id = contadorCampos - 1;
    var cajaNombre = document.getElementById("nombre");
    var nombre = cajaNombre.value;
    var cajaOrg = document.getElementById("org");
    var org = cajaOrg.value;
    var cajaMovil = document.getElementById("movil");
    var movil = cajaMovil.value;
    var comprobacion = comprobarDatos(nombre, org, movil);
    cogerValorCampo();
    if (comprobacion) {
        var contacto = new Contacto(nombre, org, movil, listaCampos);
        listaContactos.push(contacto);
        alert("Contacto añadido");
    }
    else
        alert("Los datos introducidos estan mal");
}
function buscarContacto() {
    var cajaNombre = document.getElementById("busNombre");
    var nombre = cajaNombre.value;
    var cajaOrgs = document.getElementById("orgs");
    var org = cajaOrgs.value;
    for (var x = 0; x < listaContactos.length; x++) {
        if (nombre == listaContactos[x].getNombre || org == listaContactos[x].getOrganizacion) {
            alert("Nombre: " + listaContactos[x].getNombre + "\n" +
                "Organizacion: " + listaContactos[x].getOrganizacion + "\n" +
                "Movil: " + listaContactos[x].getMovil + "\n");
        }
    }
}
function comprobarDatos(nombre, org, movil) {
    var comprobacion = false;
    var textRegExp = new RegExp("^[A-Z][a-z]+$");
    if (textRegExp.test(nombre)) {
        comprobacion = true;
    }
    else {
        alert("El nombre no esta bien escrito (la primera entrada tiene que estar en mayusculas");
        return false;
    }
    if (textRegExp.test(org)) {
        comprobacion = true;
    }
    else {
        alert("La organizacion no esta bien escrita (la primera letra tiene que estar en mayusculas");
        return false;
    }
    var numberRegExp = new RegExp("^6[0-9]{8}");
    if (numberRegExp.test(movil)) {
        comprobacion = true;
    }
    else {
        alert("El movil no esta bien escrito");
        return false;
    }
    return comprobacion;
}
