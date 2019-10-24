let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"]
let numeroMes = prompt ("Introduce un numero del 1 al 12")
let mes = meses[numeroMes - 1]
if (mes == "Febrero"){
    alert ("El numero " + numeroMes + " corresponde al mes " + mes + " que tiene 28 dias")
}else{
    if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre"
        || mes == "Diciembre")
    {
        alert ("El numero " + numeroMes + " corresponde al mes " + mes + " que tiene 31 dias")
    }else
        alert ("El numero " + numeroMes + " corresponde al mes " + mes + " que tiene 30 dias")
}


