var nums = new Array ()
var num
var respuesta = true

for (var i = 0; respuesta == true; i++) {
    num = parseInt(prompt("Introduce un numero"));
    nums.push(num);

    respuesta = confirm("Quieres introducir mas numeros?");
}

alert(nums);
compararNumeros(nums);

function compararNumeros(nums) {
    var max
    var min

    max = Math.max.apply(null, nums)
    min = Math.min.apply(null, nums)

    alert("El numero mayor es: " + max + "\n" +"y el menor " + min)
}