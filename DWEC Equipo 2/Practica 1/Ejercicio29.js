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

//Parte 4
array2.splice(4,1)
array2.splice(2,1)
array2.splice(0,1)

let mensaje2= ""
for (let x = 0; x < array2.length; x++){
    mensaje2 = mensaje2 + array2[x] + " "
}
alert ("Estos son los valores del primer array:\n" + mensaje2)

//Parte 5
var array3=array1.concat(array2)
alert(array3.toString())

//Parte 6
/*for(var y=0;y<array3.length;y++){
    if(array3[y]/array3[y]||array3[y)
        primo=array3[y]
    var mensaje3= ""
    mensaje3 = mensaje3 + primo + " "
}
alert (mensaje3)*/

//Parte 7
array3[0] = array3[0]+2
array3[1] = array3[1]+2
array3[2] = array3[2]+2
array3[3] = array3[3]+2
array3[4] = array3[4]+2
array3[5] = array3[5]+2
array3[6] = array3[6]+2

alert(array3.toString())

//Parte 8
var array4 = new Array()
for (let i = 0; i < array2.length; i++){
    if (array2[i] > 10){
        array4 = array2[i]
    }
}
alert (array4.toString())

//Parte 9
for (let x = 5; x < array3.length; x++){
    array3[x] = array3[x] * 2
}
alert (array3.toString())

//Parte 10
array1.push(13)
array1.unshift(31)
alert(array1.toString())

//Parte 11a
/*array2.forEach(seis)


function seis(x, y){
    array2[y] = 6
}
alert (array2.toString())
*/
//Parte 11b
array2.forEach((dato, posicion)=>{

    array2[posicion] = 6;

})

alert (array2.toString())

//Parte 12
array1.sort()
alert(array1.toString())

/*Parte 13
let array76 = new Array()
let msj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let array76 = msj.split(" ");*/