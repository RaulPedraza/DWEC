var cadena = prompt("Introduce una palabra o frase");
var aCont= 0; 
var eCont= 0;
var iCont= 0;
var oCont= 0;
var uCont= 0;
​
for (var x=0;x<cadena.length;x++) {
switch(cadena.charAt(x)) {
​
    case "a":
    aCont++;
    break;
​
    case "e":
    eCont++;
    break;
​
    case "i":
    iCont++;
    break;
​
    case "o":
    oCont++;
    break;
​
    case "u":
    uCont++;
    break;
}
}
alert("A: "+aCont+" E: "+eCont+" I: "+iCont+" O: "+oCont+" U: "+
uCont);