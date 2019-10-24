let nombre
let apellido1
let apellido2
nombre = prompt ("Introduce tu nombre")
apellido1 = prompt ("Introduce tu primer apellido")
apellido2 = prompt ("Introduce tu segundo apellido")
alert (nombre + " " + apellido1 + " " + apellido2)
let respuesta
respuesta = confirm ("Quieres acabar la ejecucion")
if(respuesta)
{
  alert ("La ejecucion ha termidado")
}else 
  alert ("La ejecucion sigue en marcha")
