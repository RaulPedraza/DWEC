var colores=["azul","rojo","amarillo","verde","morado","azul","marron","negro","blanco"]
​
var numeros=["1","2","3","4","5","6","7"]
​
var posicion=parseInt(prompt("Introduce la posicion que quieres buscar"))
​
alert(colores[posicion])
​
alert("El array de colores tiene "+ colores.length)
​
alert("¿Es un array? "+Array.isArray(colores))
​
alert(colores.toString())
alert(colores.join("  "))
​
alert(colores.pop()+" es el numero color de la lista "+colores.shift()+" es el primero")
​
var colordesp=prompt("introduce el color que quieres añadir al final del array")
var colorant=prompt("introduce el color que quieres añadir al inicio del array")
colores.push(colordesp)
colores.unshift(colorant)
​
var pos=prompt("Introduce la posicion que quieres eliminar")
colores.splice(0,pos)
​
colores.concat(numeros)
alert("El array completo es: " + colores.toString())
​
var numero=prompt("Introduce el numero del que quieres saber la posicion")
alert("La primera posicion de "+numero+" es: "  +numeros.indexOf(numero))
alert("La ultima posicion de "+numero+" es: "  +numeros.lastindexOf(numero))
​
alert("el array de los numeros al reves es: "+numeros.reverse().toString())
alert("el array de los numeros ordenado es: "+numeros.sort().toString())
