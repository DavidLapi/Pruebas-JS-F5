//Funciones sin parámetros

function sumar() {
    console.log(9 + 14);
}

const resta =  function() {
    var miResta = 20 - 9;
    return console.log(miResta);
}

const multiplicar = () => {
    var miMultiplicar = 4 * 5;
    return miMultiplicar;
}

const dividir = () => 10 / 3;

//Con condiciones
function sino() {
    if (2 > 5) {
        console.log("Hola");
    } else {
        console.log("Adios.");
    }
}

const bucle = function () {
    for (i=0; i<=10; i++) {
        console.log(i)
    }
}

//sumar()
//resta()
//console.log(multiplicar())
//console.log(dividir())
//sino()
bucle()

