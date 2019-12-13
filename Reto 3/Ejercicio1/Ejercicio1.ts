class Contacto {
    private nombre: string
    private organizacion: string
    private movil: string

    constructor(nombre: string, organizacion: string, movil: string) {
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.movil = movil;
    }

    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(value: string) {
        this.nombre = value;
    }

    get getOrganizacion(): string {
        return this.organizacion;
    }

    set setOrganizacion(value: string) {
        this.organizacion = value;
    }

    get getMovil(): string {
        return this.movil;
    }

    set setMovil(value: string) {
        this.movil = value;
    }
}

let listaContactos: Contacto[]
let listaCampos: string[]
let contadorCampos: number = 0

function ocultar(){
    let cajaAñadir = document.getElementById("formAñadir")
    cajaAñadir.style.display="none"
    let cajaBuscar = document.getElementById("formBuscar")
    cajaBuscar.style.display="none"
}

function verAñadir(){
    let cajaAñadir = document.getElementById("formAñadir")
    if (cajaAñadir.style.display=="none"){
        cajaAñadir.style.display="block"
    }

    let cajaBuscar = document.getElementById("formBuscar")
    if (cajaBuscar.style.display=="block"){
        cajaBuscar.style.display="none"
    }
}

function verBuscar(){
    let cajaBuscar = document.getElementById("formBuscar")
    if (cajaBuscar.style.display=="none"){
        cajaBuscar.style.display="block"
    }

    let cajaAñadir = document.getElementById("formAñadir")
    if (cajaAñadir.style.display=="block"){
        cajaAñadir.style.display="none"
    }
}

function añadirCampo(){
    let cajaAñadir = document.getElementById("formAñadir")
    let nuevoCampo = document.createElement("p")
    let nuevoCampoText = document.createTextNode("")
    let input = document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("id",contadorCampos)
}

function añadirContacto(){
    let nombre = document.getElementById("nombre").nodeValue
    let org = document.getElementById("org").nodeValue
    let movil = document.getElementById("movil").nodeValue

    let contacto = new Contacto(nombre,org,movil)
    listaContactos.push(contacto)
}