//Estos se utilizan bastante en backend cuando buscamos diferentes respuestas dependiendo de lo que haya ingresado el usuario, por ej.

//operador OR
//Evalua de izquierda a derecha, convirtiendo los valores a booleano.
//Si el resultado es true, se detiene y retorna el valor original de este operando.
//Si todos los operadores son evaluados y son false retornara el valor original del ultimo operando.

//basicamente lo que hace es ver si el primer valor es correcto o el segundo, o el tercero, etc. (operando1 or operando2 or operando3...)

const value1 = 31
const value2 = 25
const value3 = 10 

const result = value2 < value3 || value2 < value1 || value3 > value1
//En este caso es true, ya que de las 3 comparaciones al menos 1 es verdadera
console.log('Operadores logicos OR:',result);

//Operador AND
//A diferencia del anterior, para que este operador sea true, todos los valores agregados deben serlo, y en el anterior con que uno contenga un valor true ya bastaba.

const result2 = 3 > 2 && 2 == 2 && 4 < 3
//En este caso es falso, ya que deben ser las 3 comparaciones verdaderas y una de ellas no lo es.
console.log('Operadores logicos AND:', result2);

