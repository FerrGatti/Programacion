//El forEach ejecuta una funcion pasandole por argumento cada elemento del array.
console.log('11-For Each');

const numbers = [3,4,5,6]

numbers.forEach(
    function(number){
        console.log(number*2)
    }
)

//El forEach no devuelve nada, y tampoco modifica el array original, solo ejecuta la funcion

//MAP

const numbersDouble = numbers.map(
    function(number){
        return number*2
    }
)

//La funcion MAP lo que hace es ejecutar la funcion solicitada y a estos nuevos elementos guardarlos en un nuevo arreglo. No modifica el arreglo original.

//FILTER
evenNumber = numbers.filter(
    function(number){
        return number %  2 === 0
    }
)
oddNumer = numbers.filter(
    function(number){
        return number %2
    }
)
const multiplosDeTres = numbers.filter(
    function(number){
        return !(number%3)
    }
)

//REDUCE
