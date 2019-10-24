let numero
numero = parseInt(prompt ("Introduce un número entre 0 y 15"))
if(numero >= 0 && numero < 16)
{
  alert (numero.toString(16))
}else
  alert ("El número que has introducido no está entre los valores especificados")

