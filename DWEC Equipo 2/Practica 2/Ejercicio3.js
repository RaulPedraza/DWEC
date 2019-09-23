let frase
do {
    frase = prompt("Introduzca una frase").toString()
} while (frase.length < 5);
alert(frase.length)
let num1
let num2 = frase.length
if (frase.length%2 == 0) {
    num1 = frase.length/2
}else{
    num1 = (frase.length/2) + 0.5
}
let particion1 = frase.slice(0,num1)
let particion2 = frase.slice(num1,num2)
alert(particion1+"|"+particion2)