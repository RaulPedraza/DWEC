class Libro {
    constructor(titulo, isbn, genero, numEjemplares, disponible, fechaDisponible){
        this.titulo = titulo
        this.isbn = isbn
        this.genero = genero
        this.numEjemplares = numEjemplares
        this.disponible = disponible
        this.fechaDisponible = fechaDisponible
    }
}

class Autor{
    constructor(dni, nombreApellidos){
        this.dni = dni
        this.nombreApellidos = nombreApellidos
    }
}

let listaGeneros = ["Elige un género","Nuevo género","Terror","Aventuras","Ciencia Ficción","Fantasía","Novela Negra","Misterio","Policíaca"]

function llenarCbGeneros(){
    let cbGeneros = document.getElementById("generos")

    for (let x = 0; x < listaGeneros.length; x++){
        genero = listaGeneros[x]
        opcion = document.createElement("option")
        opcionText = document.createTextNode(genero)

        opcion.appendChild(opcionText)
        cbGeneros.appendChild(opcion)
    }
}

function nuevoAutor(){
    let cajaAutor = document.getElementById("autor")

    let parrafoDni = document.createElement("p")
    let parrafoDniText = document.createTextNode("DNI: ")
    let inputDni = document.createElement("input")
    inputDni.setAttribute("type","text")
    inputDni.setAttribute("name","dni")
    inputDni.setAttribute("class","dni")

    parrafoDni.appendChild(parrafoDniText)
    parrafoDni.appendChild(inputDni)

    let parrafoNombre = document.createElement("p")
    let parrafoNombeText = document.createTextNode("NOMBRE Y APELLIDOS: ")
    let inputNombre = document.createElement("input")
    inputNombre.setAttribute("type","text")
    inputNombre.setAttribute("name","nombreApellidos")
    inputNombre.setAttribute("class", "nombreApellidos")

    parrafoNombre.appendChild(parrafoNombeText)
    parrafoNombre.appendChild(inputNombre)

    cajaAutor.appendChild(parrafoDni)
    cajaAutor.appendChild(parrafoNombre)
}

function cajaFecha(disponible){
    let cajaFecha = document.getElementById("fechaDisponible")

    if (disponible == true){
        cajaFecha.removeAttribute("disabled")
    }else
        if (!cajaFecha.hasAttribute("disabled")){
            cajaFecha.setAttribute("disabled","")
        }
}

function añadirLibro(){
    let titulo = document.getElementById("titulo").value
    let isbn = document.getElementById("isbn").value
    let genero = document.getElementById("generos").value

    let numEjemplares = document.getElementById("numEjemplares").value
    let fechaDisponible = document.getElementById("fechaDisponible").value
    console.log(fechaDisponible)

    respuestaValidaciones = validarDatos(isbn,fechaDisponible)

}


function validarDatos(isbn,fecha){
    let respuestaISBN = validarISBN(isbn)
    alert (respuestaISBN)
    /*let respuestaFecha = validarFecha(fecha)*/
}

function validarISBN(isbn){
    isbnRegExp = new RegExp("^(978 | 979)\-[0-9]{1,5}\-[0-9]{1,7}\-[0-9]{1,6}\-[0-9]$")

    if (isbnRegExp.test(isbn)){
        return true
    }else
        return false
}

function validarFecha(fecha){
    if (fecha != ""){
        let fechaRegExp = new RegExp ("^([0-2][0-9] | 3[0-1])\/(0[1-9] | 1[0-2])\/[0-9]{4}$")
        if (fechaRegExp.test(fecha)){
            let hoy = new Date()
            hoy.setHours(0,0,0,0)
            if (hoy <= fecha) {
                return true
            }else
                return false
        }
    }else
        return ""
}