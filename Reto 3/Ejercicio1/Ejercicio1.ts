class Contacto {
    private nombre: string
    private organizacion: string
    private movil: string
    private campos: string[]


    constructor(nombre: string, organizacion: string, movil: string, campos: string[]) {
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.movil = movil;
        this.campos = campos;
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

    get getcampos(): string[] {
        return this.campos;
    }

    set setcampos(value: string[]) {
        this.campos = value;
    }
}

let listaContactos: Contacto[] = new Array()
let listaCampos: string[] = new Array()
let contadorCampos: number = 0
let nombreCampo: string

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
        llenarCbOrgs()
    }

    let cajaAñadir = document.getElementById("formAñadir")
    if (cajaAñadir.style.display=="block"){
        cajaAñadir.style.display="none"
    }
}

function llenarCbOrgs(){
    let cbOrgs = document.getElementById("orgs");

    for (let x = 0; x < listaContactos.length; x++) {
        let opcion = document.createElement("option");
        opcion.value = listaContactos[x].getOrganizacion;
        opcion.text = listaContactos[x].getOrganizacion;
        cbOrgs.appendChild(opcion);
    }
}

function añadirCampo(){
    nombreCampo = prompt("Introduce el nombre del campo que quieres añadir")
    let cajaAñadir  = document.getElementById("campos")
    let nuevoCampo = document.createElement("p")
    let nuevoCampoText = document.createTextNode(nombreCampo + ": ")
    nuevoCampo.appendChild(nuevoCampoText)
    let input = document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("id",contadorCampos.toString())
    nuevoCampo.appendChild(input)
    cajaAñadir.appendChild(nuevoCampo)

    cogerValorCampo()
}

function cogerValorCampo(){
    if (contadorCampos != 0){
        let id: number = contadorCampos - 1
        let cajaCampo =<HTMLInputElement> document.getElementById(id.toString())
        let campo: string = cajaCampo.value
        listaCampos[nombreCampo] = campo
    }
}

function añadirContacto(){
    let id: number = contadorCampos - 1
    let cajaNombre =<HTMLInputElement> document.getElementById("nombre")
    let nombre: string = cajaNombre.value
    let cajaOrg =<HTMLInputElement> document.getElementById("org")
    let org: string = cajaOrg.value
    let cajaMovil =<HTMLInputElement> document.getElementById("movil")
    let movil: string = cajaMovil.value

    let comprobacion: boolean = comprobarDatos(nombre,org,movil)
    cogerValorCampo()

    if(comprobacion){
        let contacto: Contacto = new Contacto(nombre,org,movil,listaCampos)
        listaContactos.push(contacto)
        alert("Contacto añadido")
    }else
        alert("Los datos introducidos estan mal")

}

function buscarContacto(){
    let cajaNombre =<HTMLInputElement> document.getElementById("busNombre")
    let nombre: string = cajaNombre.value

    let cajaOrgs =<HTMLInputElement> document.getElementById("orgs")
    let org: string = cajaOrgs.value

    for (let x = 0; x < listaContactos.length; x++) {
        if (nombre == listaContactos[x].getNombre || org == listaContactos[x].getOrganizacion) {
            alert("Nombre: " + listaContactos[x].getNombre +"\n"+
                "Organizacion: " + listaContactos[x].getOrganizacion +"\n" +
                "Movil: " + listaContactos[x].getMovil +"\n");
        }
    }
}

function comprobarDatos(nombre: string ,org: string, movil: string){
    let comprobacion: boolean = false

    let textRegExp = new RegExp("^[A-Z][a-z]+$")
    if (textRegExp.test(nombre)){
        comprobacion = true
    }else{
        alert ("El nombre no esta bien escrito (la primera entrada tiene que estar en mayusculas)")
        return false
    }

    if (textRegExp.test(org)){
        comprobacion = true
    }else{
        alert ("La organizacion no esta bien escrita (la primera letra tiene que estar en mayusculas)")
        return false
    }

    let numberRegExp = new RegExp("^6[0-9]{8}")
    if (numberRegExp.test(movil)){
        comprobacion = true
    }else{
        alert ("El movil no esta bien escrito")
        return false
    }

    return comprobacion
}
