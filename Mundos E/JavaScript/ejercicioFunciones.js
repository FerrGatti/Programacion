//Crear una funcion llamada filterProducts que reciba por parametro un arreglo de objeto y una propiedad, y devuelva un arreglo con los valores de esa propiedad.


//Paso 1: creo un objeto con dos arrays vacios
const products = {
    producto : [],
    valor : []
}

//Paso 2: creo una funcion que me permita agregar elementos a los arrays vacios
function addProduct(producto, valor){
    producto = products.producto.push(producto)
    valor = products.valor.push(valor)
}

//Paso 3: una vez tengan elementos, creo una funcion la cual, dependiendo de que array nombre, me devuelva los elementos dentro del mismo. Si nombro cualquier otra cosa que no sea valor o producto la funcion me devolvera los elementos de ambos.

function filterProducts(producs, valor){
    producs = producs
if (valor == "valor"){
        console.log(products.valor)
    }
else if(valor == "producto"){
        console.log(products.producto)
    }
else{
    console.log(products.producto, products.valor)
}
}
console.log(products.producto);


//Ejecuto las funciones.

addProduct("Stacker doble", 1100)
addProduct("Stacker triple", 1300)
addProduct("Stacker cuadruple", 1500)
filterProducts(products, "producto")
filterProducts(products, "valor")
filterProducts(products, ".")

//Ejercicio correctamente resuelto
const arrayProducts = [
    {name : "coca cola", price : 400, hayStock: true},
    {name: "galletitas", price : 500, hayStock: true},
    {name: "caramelo", price : 300, hayStock: false},
    {name : "agua", price: 350, hayStock: false},
]
function filterProducts2(array, property){
    const result = []

    for (let i = 0; i < array.length; i++){
        result.push(array[i][property]);
    }
    return result
}

// function filterProducts2Map
