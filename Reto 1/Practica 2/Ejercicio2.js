let cadena = prompt("Introduce un mensaje")
let cadena2 = cadena.replace(/\s/g, '')
mirarCadena (cadena2)

function mirarCadena(cadena){
    let minus = 0
    let mayus = 0
    for (let x = 0; x < cadena.length; x++) {
        if (cadena.charAt(x) == cadena.charAt(x).toUpperCase()) {
            mayus++
        } else
            minus++
    }
    if (minus == 0 && mayus != 0){
        alert ("El mensaje que has introducido estaba todo en mayusculas")
    }else{
        if (minus != 0 && mayus == 0){
            alert ("El mensaje que has introducido estaba todo en minusculas")
        }else
            alert ("El mensaje que has introducido tenia mayusculas y minusculas")
    }
}
