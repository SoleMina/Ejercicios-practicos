//Escribe aquí tú código

function pago(){

	var pMensual=10,
	Total=0;

	for(i=1;i<=20;i++){
		alert("El mes "+i+" pagó "+pMensual+"\n");
		Total+=pMensual;
		pMensual=pMensual*2;
	}
	alert("Después de 20 meses en total habrá pagado s/."+Total);
}
pago();