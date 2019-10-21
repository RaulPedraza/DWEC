let numero = prompt ("Introduce un número entero para calcular su factorial")
let contador = parseInt(numero)
let factorial = 0
while (contador != 0){
    factorial = factorial + parseInt(numero) * contador
    contador --
}
alert ("El factorial de " + numero + " es " + factorial)