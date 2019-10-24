window.onload = function () {

    let pagina = document.getElementById("parrafos");

    //Ejercicio 1.1
    let enlaces = document.getElementsByTagName("a")
    alert (enlaces.length)

    //Ejercicio 1.2
    let penultimo = enlaces[enlaces.length-2]
    alert (penultimo.href)

    //Ejercicio 1.3
    let contador = 0
    for (let x = 0; x < enlaces.length; x++){
        if (enlaces.href = "http://prueba"){
            contador ++
        }
    }
    alert ("Hay " + contador + " enlaces a http://prueba")

    //Ejercicio 1.4
    let parrafos = document.getElementsByTagName("p")
    alert (parrafos[2].getElementsByTagName("a").length)
}