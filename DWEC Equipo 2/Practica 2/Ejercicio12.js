var fechahoy=new Date()
var navidades=new Date(fechahoy.getFullYear(),11,25)
calculardiferencia(fechahoy,navidades)

function calculardiferencia(fechahoy,navidades){
    var difmeses=navidades.getMonth()-fechahoy.getMonth()
    var difdias=navidades.getDay()-fechahoy.getDay()
}

alert("faltan "+difmeses+" meses y "+difdias+" dias para navidades")