let sueldos = new Array ()
let suma = 0
for (let i = 0; i <= 4; i++){
    sueldos[i] = prompt ("Introduce el sueldo del trabajador")
}
for (let x = 0; x < sueldos.length; x++){
    suma = suma + parseFloat(sueldos[x])
}
alert ("El total de gastos en sueldos es de " + suma)