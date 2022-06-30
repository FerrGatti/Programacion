<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>

<?php
 //Cada archivo php se abre y se cierra con la etiqueta '<?php?'>, para poder comentar este codigo se utilizan // en el cual solo se comenta en una linea
 /* Para poder comentar en mas de una linea, debemos utilizar la etiqueta /**'/ para que de esta manera
 nuestro comentario pueda seguir aunque salteemos lineas y solo finalizara cuando cerremos dicha etiqueta */
/* Cada sentencia de nuestro codigo debemos finalizarla con punto y coma <<;>> y cada bloque queda delimitado con llaves <<{}>> como sucede por ej con CSS
Variables: contamos con int, float, string, null.
Para saber de que tipo es nuestra variable, tenemos la funcion 'settype()' */
$n= 6;
$m = "6";   
echo $n==$m;
$m = 9;
echo $n == $m;
$r = ($n > $m);
echo ($r);
?>
</html>