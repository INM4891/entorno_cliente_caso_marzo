
var arrNumeros = [1, 2, 3, 4]; //Creamos una variable que contiene un array con los números 1,2,3,4
var contador = 1; //Creamos una variable que usaremos como contador

//Utilizamos la función Sort y Math para desordenar el array y obtener una secuencia aleatoria cada vez
arrNumeros = arrNumeros.sort(function() { return Math.random() - 0.5 }); 

//Utilizamos el método getElementByID para acceder a los elemntos del DOM y asignar los valores del array 
document.getElementById("numUno").innerHTML = arrNumeros[0]; 
document.getElementById("numTres").innerHTML = arrNumeros[2];
document.getElementById("numCuatro").innerHTML = arrNumeros[3];

//Creamos las variables que recogeran los valores
const elementoUno = document.getElementById("numUno");
const elementoDos = document.getElementById("numDos");
const elementoTres = document.getElementById("numTres");
const elementoCuatro = document.getElementById("numCuatro");

//Añadimos los listeners a los eventos de click mediante el método addEventListener
elementoUno.addEventListener("click", () => {

    pulsaCaja(elementoUno);
});

elementoDos.addEventListener("click", () => {

    pulsaCaja(elementoDos);
})

elementoTres.addEventListener("click", () => {

    pulsaCaja(elementoTres);
})

elementoCuatro.addEventListener("click", () => {

    pulsaCaja(elementoCuatro);
})

// Desarrollamos las funciones que nos van a permitir comparar que el número pulsado por el usuario es el correcto
function comprobarNum(value) { 

    const evaluarContador = value == contador; //Guardamos si el valor pasado coincide con el contador true/false

    if (evaluarContador) contador++; //Si es true aumentamos contador

    return evaluarContador; //Devolvemos true o false
}

function pulsaCaja(elemento) { //Comparamos si el valor es correcto o no, y mediante la estrustura condicional IF, resolvemos la salida

    const evaluarContador = comprobarNum(elemento.innerHTML);

    if (!evaluarContador) {
        alert("Error! Inténtalo de nuevo!");
        window.location.reload(); //Recargamos y reiniciamos la secuencia
        return;
    }

    if (contador > arrNumeros.length) { //Cuando nuestro contador sea mayor que la longitud del array finalizamos el juego
        alert("Correcto! Enhorabuena!");
        window.location.reload();//Recargamos y reiniciamos la secuencia
        return;
    }
}