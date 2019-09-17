let array1 = [1, 2, 3, 4, 5]
let array2 = new Array (5)
for (let i = 0; i < array2.length; i++){
    array2[i] = parseInt(prompt ("Introduce un numero"))
}

//Parte 1
let mensaje= ""
for (let x = 0; x < array1.length; x++){
    mensaje = mensaje + array1[x] + " "
}
alert ("Estos son los valores del primer array:\n" + mensaje)

//Parte 2
let valor = prompt ("Introduce un valor para buscar en el segundo array")
let encontrado = true
for (let y = 0; y < array2.length; y++){
    if (valor == array2[y]){
        let mensaje = "El numero " + valor + " coincide con el de la posición " + (y + 1)
        alert (mensaje)
    }else
        encontrado = false
}
if (encontrado == false)
    alert ("El valor que has introducido no coincide con ninguno de los del segundo array")

//Parte 3
let string = ""
for (let z = 0; z < array1.length; z++){
    string = string  + array1[z].toString() + " "
}
alert ("Los valores del primer array son:\n" + string)