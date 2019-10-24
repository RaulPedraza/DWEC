let sueldo = parseInt(prompt ("Introduce tu sueldo"))
if (sueldo < 500 || sueldo < 500){
    sumar (sueldo, )
}else
    alert ("Tu sueldo seguira siendo el mismo")

function sumar(sueldo, ) {
    let nuevoSueldo
    let antigüedad = parseInt(prompt ("Introduce tu antigüedad en la empresa"))
    if (sueldo < 500 && antigüedad >= 10){
        nuevoSueldo = sueldo + (sueldo * 0.2)
    }else
        nuevoSueldo = sueldo + (sueldo * 0.1)
    alert ("Tu nuevo sueldo sera de " + nuevoSueldo + " €")
}