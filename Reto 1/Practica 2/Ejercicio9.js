let numeros = new Array()
let continuar = 0
let mensajeNegativo = ""
let mensajePositivo = ""
do{
    numeros.push(parseInt(prompt ("Introduce un numero")))
    continuar = confirm ("¿Quieres introducir otro número?")
}while (continuar == 1)

alert(numeros.length)
for (let x = 0; x < numeros.length; x++){
    if (numeros[x] < 0){
        mensajeNegativo == mensajeNegativo + numeros[x]
    }else
        mensajePositivo = mensajePositivo + numeros[x]
}

alert ("Estos son los números pares que has introducido \n" + mensajeNegativo)
alert ("Estos son los números inpares que has introducido \n" + mensajePositivo)

