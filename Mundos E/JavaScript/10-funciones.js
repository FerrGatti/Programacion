//Declaracion de funcion
function saludar (firtsName){
    if(typeof firtsName != "string"){
        alert("Ingresa un nombre valido")
    }
    else{
        alert (`Hola ${firtsName}!`)
    }   
}
//Cuando declaramos una funcion, lo que colocamos luego del nombre de la funcion, en este caso "nombre", es un argumento y no una variable.
//Esto refiere a que, cuando llamemos a la funcion, en el lugar del argumento va el valor para que esta funcione. Ej: saludar(valor para el argumento)
const firtsName = prompt("Cual es tu nombre?")
saludar(firtsName)

//Tambien podemos definir funciones mediante una variable, a diferencia del metodo anterior, aca solo podemos utilizar la funcion luego de crearla, en el caso anterior, si la funcion esta llamada antes de ser creada el codigo funcionara igualmente.

const despedir = function(firtsName){
    alert(`Chau ${firtsName}`) 
}
despedir(firtsName)

//Return
//El return lo que logra es devolvernos un valor que propongamos. Dentro de una funcion, lo que venga despues de un return no se va a ejecutar.

function add(number1, number2){
    console.log("Esto va a consologearse");
    return number1+number2
    console.log("Esto no se va a consologear porque estar despues del return");
}
Numero9 = add(5,4)

//Arrow function
let duplicate = (number)=>{
    return number *2
}

let duplicateSinReturn = number => number *2
//Hace lo mismo que el arrow anterior
//Solo puedo no utilizar un return si el cuerpo de la funcion tiene una sola linea
//Solo puedo NO utilizar parentesis si la funcion tiene solo un argumento.