function añadir(){
    let nuevo = document.createTextNode("Hola")
    let lista = document.createElement("ol")
    lista.appendChild(nuevo)
    document.body.appendChild(lista)
}