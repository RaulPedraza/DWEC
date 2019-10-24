let contador = 0
let suma = 0
alert ("Te voy a pedir que introduzcas 5 números para que los sume")
do{
    let numero = prompt ()
    suma = suma + parseInt(numero)
    contador ++
}while(contador < 5)
alert ("La suma de los 5 valores que me has introducido es de " + suma)