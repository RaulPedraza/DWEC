alert ("Te voy a pedir que introduzcas números hasta que tu quieras y cuando termines te pondre la suma de todos los valores")
let continuar = 0
let suma = 0
let mensajeSuma = ""
do{
    let numero = parseInt(prompt ("Introduce un numero"))
    suma = suma + numero
    mensajeSuma = mensajeSuma + numero
    continuar = confirm ("¿Quieres continuar introduciendo numeros?")
    if (continuar == 1){
        mensajeSuma = mensajeSuma + " + "
    }
}while (continuar == 1)

alert (mensajeSuma + " = " + suma)