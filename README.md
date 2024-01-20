
# CSS

Explicacion de los elementos de CSS

*Width* - Ancho
*Height* - Alto-

***Border***

***Padding***

Se refiere al espacio entre el contenido de un elemnto y si borde 

Se puede aplicar a los cuatro lados de un elemento (arriba, derecha, abajo, izquierda) o individualmente.

    padding-top / arriba
    padding-right / derecha 
    padding-bottom / abajo
    padding-lef / izquierda
Puedes espicificar diferentes valores por cada lado para crear un paddinga simetrico si es necesario


***Margin***

Se refiere al espacio fuera del borde de un elemento. Se utilizan para controlar el espaciado entre el borde del elemnto y los elementos del HTML

    margin-top / arriba
    margin-right / derecha 
    margin-bottom / abajo
    margin-left / izquieda

Ejemplo:
    .elemento1 {
    margin-right: 10px; / Margen a la derecha del Elemento 1 
    }

    .elemento2 {
    margin-left: 10px; / Margen a la izquierda del Elemento 2 
    }
Esto crea un espacio de 10 píxeles entre los elementos 1 y 2. En este caso, se están utilizando los márgenes para controlar la separación entre elementos adyacentes en la página.


***Font-family***

Es un propiedad usada para esícificar la letra del texto dentro de un elemento

Hay diferentes tipos de fuentes predeterminadas y podemos agregar mas.


***Box-sizing***

Es una propiedad de css que determina como se calcula el tamaño de un elemento, especialmente  co los que respecta a las propiedades de ancho (width) y alto (height).

Permite controlar si el ancho y alto especificados incluyen o no el relleno (padding) y el borde (border) del elemento.

Hay dos valores posibles para la propiedad box-sizing:

1. Content-Box (Valor por defecto):

Es el valor predeterminado, donde los valores de ancho y alto que estableces para un elemento se aplican solo al área de contenido del elemento. El relleno y el borde se suman al ancho y alto especificados.