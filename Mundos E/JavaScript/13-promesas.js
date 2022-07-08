// El fetch lo que hace es hacer una peticion a la api que nosotros le pidamos, como en este caso la url que tiene entre parentesis

fetch('https://jsonplaceholder.typicode.com/todos/1') //luego tenemos el then, que justamente lo que refiere es a despues. Una vez hecha nuestra peticion, el then nos devuelve un resultado y a este lo consologueamos. Lo que necesitamos de esos datos es el .json
.then(
    function(result){
        console.log(result)
        return result.json()
    }
).then( //Una vez obtenidos los primeros datos del then, retornamos el json, luego creamos otro then y consologueamos nuevamente el resultado para obtener en este caso lo que buscabamos. Los then pueden ser varios hasta lograr obtener el resultado esperado.
    function(result){
        console.log(result)
    }
).catch( //Al final, siempre creamos un catch el cual captara cualquier error que tengamos durante nuestro fetch y lo va a consologuear. ESTE SIEMPRE SE EJECUTA AL FINAL Y NO ANTES.
    function(error){
        console.log(error)
    }
)

//ASYNC AWAIT
//Esta es una manera un poco mas corta que utilizando un fetch.
const fetchUser = async function(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json =  await response.json()
        console.log(json)
    }catch(error){
        console.log(error)
    }
}


//Ejercicio utilizando API de StarWars
//Utilizando la API de StarWars https://swapi.dev/api/people/ crea la funcion getCharacter que reciba un ID y este devuelva el nombre de los personajes.
//Utilizarlo con la funcion then y luego con un async await.

function getCharacter(id){
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(
        function(result){
            console.log(result)
            return result.json()
        }
    ).then(
        function(json){
            console.log(`El nombre del personaje seleccionado es ${json.name}`)
        }
        ).catch(error)
            console.log(error)
        }

//ASYNC AWAIT

async function getCharacterAsync(id){
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const json = await response.json()

    const responsePlanet = await fetch(json.homeworld)
    const jsonPlanet = await responsePlanet.json()

    console.log(`El personaje seleccionado es ${json.name} y nacio en el planeta ${jsonPlanet.name}`)
}
    // fetch("https://swap/i.dev/api/planets/1/")