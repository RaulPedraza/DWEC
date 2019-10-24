function comprobar() {
    let nombre = document.getElementById("name").value
    let apellidos = document.getElementById("apellidos").value
    let email = document.getElementById("email").value
    let poblacion = document.getElementById("poblacion").value
    let provincia = document.getElementById("provincia").value

    let expregNomPobPro = new RegExp ("^[A-Z][a-z]+$")
    let expregApellidos = new RegExp ("^([A-Z][a-z]+[\s]*)+$")
    let expregEmail = new RegExp ("[a-zA-Z0-9]+@[a-z]+\.[a-z]{1,3}$")

    /*if (expregNomPobPro.test(nombre)){
        alert ("El nombre esta bien")
    }else
        alert ("El nombre esta mal")

    if (expregNomPobPro.test(poblacion)){^
        alert ("La poblacion esta bien")
    }else
        alert ("La poblacion esta mal")

    if (expregNomPobPro.test(provincia)){
        alert ("La provincia esta bien")
    }else
        alert ("La provincia esta mal")*/

    if (expregApellidos.test(apellidos)){
        alert ("Los apellidos estan bien")
    }else
        alert ("Los apellidos estan mal")

    /*if (expregEmail.test(email)){
        alert ("El email esta bien")
    }else
        alert ("El email esta mal")*/

}