//Escribe aquí tú código
var x = parseInt(prompt("Ingrese la cantidad de números"));
var menores = 0;
var mayores = 0;

i = 1;

while ( i <= x) {
	var num = parseInt(prompt("Ingrese el número " +i));
	if (num <= 0) {
        menores+=1;
	}else if (num > 0) {
		mayores+=1;
	}
	i++;
}
alert("Menores o iguales a cero: "+menores+"\nmayores: "+ mayores);