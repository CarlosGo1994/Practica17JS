'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt('¿De que numero quieres la tabla?', 1));

document.write("<h1> La tabla del "+ numero +"</h1>");
for(var i=1;i<=10;i++){   
    document.write(numero + " x " +i+" = "+(i*numero) + "</br>");
}

//Todas las tablas de multiplicar
for(numero=1;numero<=15;numero++){
    document.write("<h1> La tabla del "+ numero +"</h1>");
    for(var i=1;i<=10;i++){   
    document.write(numero + " x " +i+" = "+(i*numero) + "</br>");
}
}

