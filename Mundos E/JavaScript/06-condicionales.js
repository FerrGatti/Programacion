const nota = prompt('Introduce tu nota final del examen:')

if (nota < 5) {
    alert('Examen reprobado.')
}
else if (nota >= 5 && nota <7) {
    alert('Aprobaste el examen!.')
}
else
    alert('Promocionaste el examen, felicitaciones!.')

//La estructura para el condicional if es la siguiente. 
//Primero debemos colocar la primer condicion, si esta es TRUE nuestro codigo ejecutara la accion puesta en el if e ignorara el resto.
//Si esta condicion es FALSE, pasara al else if. Si esta es TRUE ejecutara la accion e ignorara el resto.
//En caso de que ninguna de las anteriores sea TRUE se ejecutara la accion que pongamos en el ELSE.