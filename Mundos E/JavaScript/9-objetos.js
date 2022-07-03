//Para crear objetos utilizamos llaves {} a diferencia de un array, separando cada elemento del objeto por comas.
//En los valores de los objetos podemos utilizar arrays. Estos se comportan de la misma manera como si estuviesen por su cuenta, es decir, puedo agregarle valores mediante el push, quitarle mediante el pop o llamar a cada valor por su posicion(lenguajes[0] devolveria 'JavaScript')
var persona = {
    name : 'Fernando',
    age : 26,
    sabeProgramar : true,
    lenguajes : ['JavaScript', 'HTML', 'CSS', 'Python', 'PHP']
}
console.log(persona);

//Para ver los elementos de los objetos tenemos dos metodos.
//DOT NOTATION
persona.name //devuelve 'Fernando'
persona.age //devuelve 26

//BRACKET NOTATION
persona["name"] //devuelve 'Fernando'
persona["age"] //devuelve 26

//Para agregar elementos al objeto, llamamos al mismo seguido de un punto, el nombre del nuevo elemento y luego de un = colocamos su valor
persona.nacionalidad = 'Argentino'
persona['genero'] = 'Hombre'

console.log(persona);

for(let i = 0; i < persona.lenguajes.length; i++){
    console.log(persona.lenguajes[i]);
}