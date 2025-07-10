// Funciones predefinidas
/* JavaScript incluye una serie de funciones ya definidas que pueden ser usadas 
con cualquier variable, valor directo u objeto. Gracias a estas funciones
podemos realizar una conversión exxplícita de tipos de datos*/

/* Funcion isNaN --> Comprueba si un valor no es un número, por lo que devolverá 
 un booleano negativo (false) en caso de ser un número y un booleano positivo
 (true) en cualquier otro caso. */

var num = "cachopo";
//console.log("\nFunción isNaN: "+isNaN(num)+"\n")

/* Funcion isFinite --> Comprueba si un valor es un número finito. Si el valor
 equivale a undefined, NaN, Infinity o -Infinity se devolverá false y en el 
 resto de los casos se devolverá true. */

var numFinite = undefined;
//console.log("Función isFinite: "+isFinite(numFinite)+"\n");

/* Funcion parseInt --> Permite intentar transformar cualquier valor en un número
 entero (int). */

var numParseI = "1.45";
//console.log("Función parseInt: "+parseInt(numParseI)+"\n");

/* Función parseFloat --> Permite convertir cualquier valor, interpretado como cadena,
 en un número real siguiendo las mismas reglas que parseInt. */

var numParseF = "3.12";
//console.log("Función parseFloat: "+parseFloat(numParseF)+"\n");

/* Funcion eval --> Interpreta una cadena y la ejecuta como si se tratase de una porción
 de código de JavaScript, devolviendo el resultado de dicha ejecución.*/

var numEval = "var hola";
console.log("Función eval: "+eval(numEval));
