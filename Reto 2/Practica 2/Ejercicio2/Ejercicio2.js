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
        console.log(genero)
        opcion = document.createElement("option")
        opcionText = document.createTextNode(genero)

        opcion.appendChild(opcionText)
        cbGeneros.appendChild(opcion)
    }
}

function nuevoAutor(){
    cajaAutor = document.getElementById("autor")

    parrafoDni = document.createElement("p")
    parrafoDniText = document.createTextNode("DNI")
    inputDni = document.createElement("input")
    inputDni.setAttribute("type","text")
    inputDni.setAttribute("name","dni")

    parrafoDni.appendChild(parrafoDniText)
    parrafoDni.appendChild(inputDni)

    parrafoNombre = document.createElement("p")
    parrafoNombeText = document.createTextNode("NOMBRE Y APELLIDOS")
    inputNombre = document.createElement("input")
    inputNombre.setAttribute("type","text")
    inputNombre.setAttribute("name","nombreApellidos")

    parrafoNombre.appendChild(parrafoNombeText)
    parrafoNombre.appendChild(inputNombre)

    cajaAutor.appendChild(parrafoDni)
    cajaAutor.appendChild(parrafoNombre)
}