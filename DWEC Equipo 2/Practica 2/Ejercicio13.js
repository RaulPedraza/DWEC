//Validar DNI:

dni = prompt("Introduzca su dni")

var numero
var letra
var letras
var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

if(expresion_regular_dni.test(dni) == true){
    numero = dni.substr(0,dni.length-1);
    letra = dni.substr(dni.length-1,1);
    numero = numero % 23;
    letras='TRWAGMYFPDXBNJZSQVHLCKET';
    letras=letras.substring(numero,numero+1);
    if (letra!=letra.toUpperCase()) {
        alert('Dni erroneo, la letra del NIF no se corresponde');
    }else{
        alert('Dni correcto');
    }
}else{
    alert('Dni erroneo, formato no válido');
}

//Validar nombre

var nombre = prompt("introduzca su nombre")

var expresion_regular_nombre = /^[a-zA-Z]{2,}$/

if (expresion_regular_nombre.test(nombre)==true) {
    alert("El nombre es correcto")
}else{
    alert("El nombre es incorrecto")
}

//validar url

var url = prompt("Introduzca una URL")

var expresion_regular_url = /^[w-wW-W]{1,3}$/

if (expresion_regular_url.test(url) == true) {

}