// Crear un array con nombres de peliculas
//A este array agregarle una nueva pelicula al final
//Consologgear la cantidad de elementos que contiene este array
//Mediante un for loop, logear en consola de la siguiente manera '(nombre de pelicula) se encuentra en el puesto n1 de mis peliculas favoritas'

const movies = ['Harry Potter', 'Animales Fantasticos', 'Batman']

console.log(movies)

movies.push('Scarface')

console.log(movies);

console.log(movies.length)

for (let i = 0; i < movies.length; i++){
// console.log(movies[i], "esta en el puesto ", (i+1), " de mis peliculas favoritas")

console.log(`${movies[i]} se encuentra en el puesto ${(i+1)} de mis peliculas favoritas.`) 

//para hacerlo de manera mas sencilla y estetica utilizamos comillas francesas en lugar de las comillas dobles o simples(se encuentra al lado de shift) y para llamar a una variable utilizamos ${}

}