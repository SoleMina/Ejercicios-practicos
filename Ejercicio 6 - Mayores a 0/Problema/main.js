//Escribe aquí tú código

var x = parseInt(prompt("Ingrese la cantidad de números"));
var menoresCero = 0;
var mayoresCero = 0;
o	
i = 1;

while ( i <= x) {
	var num = parseInt(prompt("Ingrese el número " +i));
	if (num <= 0) {
        menoresCero+=1;
	}else if (num >= 0) {
		mayoresCero+=1;
	}
	i++;
}
alert("Menores o iguales a cero: "+menoresCero+"\nmayores o iguales a cero: "+ mayoresCero);

