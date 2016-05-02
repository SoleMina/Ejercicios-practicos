//Escribe aquí tú código
function promedioEstatura() {
 var suma = 0;
 var i =0;

 cantidadPersonas = Number(prompt("¿Cuántas personas son?"));
 while (i < cantidadPersonas) {
 	i++;
 	estatura = Number(prompt("¿Cuál es su estatura?"));
 	suma+=estatura;
 }
promedioEstatura = suma/cantidadPersonas;
alert("promedio de estatura :" +promedioEstatura);
}
promedioEstatura();