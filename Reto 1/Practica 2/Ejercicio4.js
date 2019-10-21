let cadena  = prompt ("Introduce un mensaje")
let cadena2 = cadena.replace(/\s/g, '')
cadena2 = cadena2.toLowerCase()
cadenaPalindroma (cadena2)

function cadenaPalindroma(cadena) {
    let numCaracteres = parseInt(cadena.length / 2)
    let mensaje1 = ""
    let mensaje2 = ""
    for (let x = 0; x < numCaracteres; x++) {
        mensaje1 = mensaje1 + cadena.charAt(x)
    }
    for (let i = cadena.length; i >= numCaracteres; i--) {
        mensaje2 = mensaje2 + cadena.charAt(i)
    }
    if (mensaje1 == mensaje2){
        alert ("El mensaje que has introducido es un palindromo")
    }else
        alert ("El mensaje que has introducido no es un palindromo")
}