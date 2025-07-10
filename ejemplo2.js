// Funciones con parámetros

function saludar(nombre) {
    return "Hola, "+nombre+"!";
}

const presentar = function (nombre, edad) {
    return "Me llamo "+nombre+" y tengo "+edad+" años.";
}

const calcular = (num1, num2, num3) => {
    return "Soy el numero "+num1+", despues el numero "+num2+" y por ultimo el numero "+num3;
}

const comer = (comida) => "Hay de comer: "+comida;

//Condiciones
function sino(numero) {
    if (numero > 5) {
        console.log("Hola");
    } else {
        console.log("Adios.");
    }
}

const bucle = function (num) {
    for (i=0; i<num; i++) {
        console.log(i)
    }
}

//console.log(saludar("Pedro"))
//console.log(presentar("David", 20))
//console.log(calcular(4, 2, 1))
var resultado = comer("cachopo")
//console.log(resultado)
//sino(10);
bucle(9)