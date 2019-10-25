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