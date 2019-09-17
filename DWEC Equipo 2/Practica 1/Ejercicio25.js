var colores=["azul","rojo","amarillo","verde","morado","azul","marron","negro","blanco"]

var numeros=["1","2","3","4","5","6","7"]

var posicion=parseInt(prompt("Introduce la posicion que quieres buscar"))

alert(colores[posicion])

alert("El array de colores tiene "+ colores.length)

alert("¿Es un array? "+Array.isArray(colores))

alert(colores.toString())
alert(colores.join("  "))

alert(colores.pop()+" es el ultimo color de la lista "+colores.shift()+" es el primero")

var colordesp=prompt("introduce el color que quieres añadir al final del array")
var colorant=prompt("introduce el color que quieres añadir al inicio del array")
colores.push(colordesp)
colores.unshift(colorant)

alert(colores.toString())

var pos=prompt("Introduce la posicion que quieres eliminar")
colores.splice(pos,0)

alert(colores.toString())

colores.concat(numeros)
alert("El array completo es: " + colores.toString())

var numero=prompt("Introduce el numero del que quieres saber la posicion")
alert(numeros[numero].toString())
alert("La primera posicion de numeros es:"  +numeros.indexOf())
alert("La ultima posicion de numeros es:"  +numeros.lastIndexOf())

alert("el array de los numeros al reves es: "+numeros.reverse().toString())
alert("el array de los numeros ordenado es: "+numeros.sort().toString())