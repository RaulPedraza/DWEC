let cadena  = prompt ("Introduce un mensaje")
dividirCadena (cadena)

function dividirCadena(cadena) {
    let numCaracteres = parseInt(cadena.length / 2)
    let mensaje1 = ""
    let mensaje2 = ""
    for (let x = 0; x <  numCaracteres; x++){
        mensaje1 = mensaje1 + cadena.charAt(x)
    }
    for (let i = numCaracteres; i < cadena.length; i++){
        mensaje2 = mensaje2 + cadena.charAt(i)
    }
    alert (mensaje1)
    alert (mensaje2)
}