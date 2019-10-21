alert ("Vamos a jugar a un juego, yo voy a generar un numero aletorio entre 1 y 100 y tu tendras que adivinarlo")
numAleatorio = numRandom ()
let acierto = false

while (acierto == false) {
    let numero = prompt("Introduce un numero")
    if (numero == numAleatorio) {
        alert("Enhorabuena, has acertado el numero")
        acierto = true
    } else if (numero < numAleatorio) {
        alert("El numero que buscas es mas grande")
    } else
        alert("El numero que buscas es mas pequeño")
}


function numRandom() {
    let numero = Math.round(Math.random() * (101 - 1) + 1)
    alert (numero)
    return numero
}

