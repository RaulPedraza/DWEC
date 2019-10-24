let x = 2

function añadir(){

    let nombre = document.createTextNode("Nombre" + x +": " )
    x++
    let parrafo = document.createElement("p")
    let textBox = document.createElement("input")
    textBox.setAttribute("type", "text")
    let formulario = document.getElementById("formulario")


    parrafo.appendChild(nombre)
    parrafo.appendChild(textBox)
    formulario.appendChild(parrafo)

}

function añadirInicio(){
    let nombre = document.createTextNode("Nombre" + x +": " )
    x++
    let parrafo = document.createElement("p")
    let textBox = document.createElement("input")
    textBox.setAttribute("type", "text")
    let formulario = document.getElementById("formulario")
    let primerP = formulario.firstChild

    parrafo.appendChild(nombre)
    parrafo.appendChild(textBox)
    formulario.insertBefore(parrafo, primerP)
}

function añadirPos(){
    let formulario = document.getElementById("formulario")
    let parrafos = formulario.childNodes
    let posicion = document.getElementById("posicionA").value

    let nombre = document.createTextNode("Nombre" + x +": " )
    x++
    let parrafo = document.createElement("p")
    let textBox = document.createElement("input")
    textBox.setAttribute("type", "text")

    parrafo.appendChild(nombre)
    parrafo.appendChild(textBox)
    formulario.insertBefore(parrafo, parrafos[posicion - 1])
}

function borrar(){
    let formulario = document.getElementById("formulario")

    formulario.removeChild(formulario.lastChild)
}

function borrarInicio(){
    let formulario = document.getElementById("formulario")

    formulario.removeChild(formulario.firstChild)
}

function borrarPos(){
    let formulario = document.getElementById("formulario")
    let parrafos = formulario.childNodes
    let posicion = document.getElementById("posicionB").value

    formulario.removeChild(parrafos[posicion])
}

