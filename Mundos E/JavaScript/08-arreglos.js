console.log('08- ARRAYS');
//Los arreglos/arrays se comportan de manera similiar a las listas de phyton.

const persona = ['Fernando', 26, 'Argentino']

//cada elemento dentro de la variable ocupa una posicion comenzando desde el 0, que en este caso seria Fernando.

//Para acceder a estos valores de manera individual lo hacemos de la siguiente manera:

persona[0]
persona[1]
persona[2]

//Para saber la longitud de nuestro array, o sea, la cantidad de elementos que contiene, utilizamos el length

persona.length

//tenemos el metodo PUSH que nos sirve para agregar elementos al final de nuestro array

persona.push("Newell's")

//POP nos sirve para elimiar un elemento que se encuentre al final de nuestro array y devolvernos este valor

persona.pop()

//UNSHIFT suma un elemento al comienzo de nuestro arreglo

persona.unshift("Lepra")

//SHIT elimina un elemento del comienzo de nuestro array y devueve su valor.

persona.shift()

//Podemos recorrer nuestros arrays mediante el bucle if.

for (let i = 0; i<persona.length; i++) {
    console.log(persona[i])
}