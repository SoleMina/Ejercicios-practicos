//Escribe aquí tú código
horas = parseInt(prompt("Ingrese la cantidad de horas trabajados al día"));
días = parseInt(prompt("Ingrese la cantidas de días laborales a la semana"));
pago = parseInt(prompt("Ingrese el pago por hora"));
total = horas*días;
sueldo = total*pago;
alert("El sueldo a la semana es :" +sueldo);