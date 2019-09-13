let DNI = prompt ("Introduce tu DNI sin letra")
let letra = prompt ("Introduce la letra de tu DNI")
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q","V", "H", "L", "C", "K", "E"]
if (DNI > 0 && DNI < 99999999)
{
    let resto = DNI % 23
    if (letras[resto] == letra)
    {
        alert ("La letra de tu DNI que has introducido coincide con la que he calculado ")
    }else
        alert ("La letra de tu DNI que has introducido no coincide con la que he calculado")

}else
    alert ("El número que has introducido no es valido")
