let cont = 0
for (let año = 2030; año <= 2050; año++){

    var año2 = new Date(año, 0, 1);
    if ( año2.getDay() === 0 ){
        alert("El uno de enero de " + año + " es domingo");
        cont++
    }
}
alert("En total hay " + cont + " 1 de enero que sean domingos desde 2030 hasta 2050")