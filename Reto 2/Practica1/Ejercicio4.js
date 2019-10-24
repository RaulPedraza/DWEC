function cargarArbol(){
    let nodo = document.getElementsByTagName("html")
    let nodosHijos = nodo.childNodes

    nodosHijos.forEach(function(nodo){
        let nombreNodo = document.createElement(nodo.nodeName)
        let parrafo = document.createElement("p")

        parrafo.appendChild(nombreNodo)
        document.body.appendChild(parrafo)

        if(nodo.hasChildNodes()){
            let nodos = nodo.childNodes
            nodos.forEach(function (nodo2){
                let nombreNodo2 = document.createElement(nodo2.nodeName)
                let parrafo2 = document.createElement("p")

                parrafo2.appendChild(nombreNodo2)
                document.body.appendChild(parrafo2)
            })
        }

    })
}