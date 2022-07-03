//Declaracion de funcion
function saludar (firtsName){
    if(typeof firtsName != string){
        alert("Ingresa un nombre valido")
    }
    else{
        alert (`Hola ${firtsName}!`)
    }   
}
const firtsName = prompt("Cual es tu nombre?")
saludar(firtsName)
