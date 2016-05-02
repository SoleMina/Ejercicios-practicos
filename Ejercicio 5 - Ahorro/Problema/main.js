//Escribe aquí tú código
var año=0;
function ahorro(){

    for(var x=1; x<13;x++){
    cantidad=Number(prompt('Ingresa deposito del mes '+x+':'));
    año=año+cantidad;
    console.log('Mes'+x+' lleva ahorrado:'+año);
}
}ahorro();
console.log('El ahorro del año es:'+año);
