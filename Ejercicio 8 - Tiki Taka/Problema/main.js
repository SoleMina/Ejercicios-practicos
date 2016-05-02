function tikitaka(){
    var x=parseInt(prompt("Ingresa el número de ventas realizada:"));
    var a=0;
    var b=0;
    var c=0;
    var ventaTotal=0;

    for(var i=1;i<=x;i++) {

        venta=parseInt(prompt("Ingresa la venta número "+i+" en soles :"));

        ventaTotal=ventaTotal+venta;

        if(venta>1000)
            a++;
        else if(venta>500 && venta<=1000)
            b++;
        else if(venta<=500)
            c++;
    }
    console.log("El monto total vendido fue s/. " +ventaTotal+ "\n"+"Las ventas mayores a s/1000 fueron :"+a+"\n"+"Las ventas mayores a s/500 y menores a s/1000 fueron :"+b+"\n"+"Las ventas menores a s/500 fueron :"+c+"\n");
}

tikitaka();