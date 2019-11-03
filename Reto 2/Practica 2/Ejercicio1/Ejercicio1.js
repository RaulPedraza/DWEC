class Contacto {
    constructor (nombre,org,movil,campos){
        this.nombre = nombre;
        this.org = org;
        this.movil = movil;
        this.campos = campos;    }
}

let contactos = [new Contacto("Raul","ThunderCodee", 650606662),
    new Contacto("Artiz", "ThunderCode", 650606663),
    new Contacto("Sergio","RajeCorp",650606664)];

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
}

function añadirCampo(){
    let nuevoCampo = prompt("Que campo quieres introducir")
    let formulario = document.getElementById("añadir")
    let nodosForm = formulario.childNodes
    let ultimaPos = nodosForm.length

    let parrafo = document.createElement("p")
    parrafo.setAttribute("class","newCampo")
    let parrafoText = document.createTextNode(nuevoCampo + ": ")
    parrafo.appendChild(parrafoText)

    let input = document.createElement("input")
    input.setAttribute("type","text")
    parrafo.appendChild(input)

    formulario.insertBefore(parrafo,nodosForm[ultimaPos - 1])
}

function verBuscar(){
    let cajaBuscar = document.getElementById("formBuscar")
    if (cajaBuscar.style.display=="none"){
        cajaBuscar.style.display="block"
    }
}

function añadirContacto() {
    let nombre = document.getElementById("nombre").value;
    let movil = document.getElementById("movil").value;
    let org = document.getElementById("org").value;
    let newCampo = document.getElementsByClassName("newCampo").value;

    if (validarDatos(nombre,org,movil)) {
        let contacto = new Contacto(nombre,org,movil,newCampo);
        contactos.push(contacto);

        alert("Contacto añadido");
        console.log(contactos);

        localStorage.setItem("contactos",contactos);
        console.log(localStorage.getItem("contactos"));
    }
}

function validarDatos(nombre,org,movil) {
    return true
}

function llebarCb() {
    let orgs = document.getElementById("orgs");

    contactos.sort();

    for (let x = 0; x < contactos.length; x++) {
        let opcion = document.createElement("option");
        opcion.value = contactos[x].org;
        opcion.text = contactos[x].org;
        orgs.appendChild(opcion);
    }
}

function buscarContacto() {
    let busNombre = document.getElementById("busNombre").value;

    let busOrgs = document.getElementById("orgs");
    let opcion = busOrgs.options[busOrgs.selectedIndex];

    for (let x = 0; x < contactos.length; x++) {
        if (busNombre == contactos[x].nombre || opcion.value == contactos[x].org) {
            alert("Nombre: " + contactos[x].nombre +"\n"+
                "Organizacion: " + contactos[x].org +"\n" +
                "Movil: " + contactos[x].movil +"\n");
        }
    }
}