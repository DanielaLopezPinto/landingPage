
# CSS

Explicacion de los elementos de CSS

**Width*** - Ancho
**Height** - Alto


**Border**

Es una propiedad que se utiliza para establecer el estilo, ancho y color del borde de una elemento.  

    border: [border-width] [border-style] [border-color];

border-width: Especifica el ancho del borde. Puede establecerse utilizando valores como thin (fino), medium (medio), thick (grueso), o usando unidades específicas como píxeles (px), ems (em) o porcentajes (%).

    border-width: thin;    /* Thin border */
    border-width: medium;  /* Medium-sized border */
    border-width: thick;   /* Thick border */

border-style: Especifica el estilo del borde. Valores comunes incluyen solid (sólido), dotted (punteado), dashed (segmentado), double (doble), etc.


border-color: Especifica el color del borde. Puede establecerse utilizando nombres de colores, códigos hexadecimales, valores RGB, etc.



**Padding**

Se refiere al espacio entre el contenido de un elemnto y su borde 

Se puede aplicar a los cuatro lados de un elemento (arriba, derecha, abajo, izquierda) o individualmente.

    padding-top / arriba
    padding-right / derecha 
    padding-bottom / abajo
    padding-lef / izquierda
Puedes espicificar diferentes valores por cada lado para crear un paddinga simetrico si es necesario



**Margin**

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



**Font-family**

Es un propiedad usada para esícificar la letra del texto dentro de un elemento

Hay diferentes tipos de fuentes predeterminadas y podemos agregar mas.



**Box-sizing**

Es una propiedad de css que determina como se calcula el tamaño de un elemento, especialmente  co los que respecta a las propiedades de ancho (width) y alto (height).

Permite controlar si el ancho y alto especificados incluyen o no el relleno (padding) y el borde (border) del elemento.

Hay dos valores posibles para la propiedad box-sizing:

1. **Content-Box** (Valor por defecto):

Es el valor predeterminado, donde los valores de ancho y alto que estableces para un elemento se aplican solo al área de contenido del elemento. El relleno y el borde se suman al ancho y alto especificados.

    .ejemplo {
        box-sizing: content-box;
        width: 200px;
        padding: 20px;
        border: 2px solid #000;
    }

2. **Border-Box:**

Con box-sizing:border-box; los valores de ancho y alto especificados incluyen tanto el área de contenido como el relleno y el borde del elemento. Esto significa que el tamaño total del elemento es lo que has establecido explícitamente como ancho y alto.

    .ejemplo {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 2px solid #000; // 2px infdica el grosor de la linea
    }



**Overflow**

Se utiliza para controlar lo que sucede cuando el contenido desborda los limites del elemnto que lo contiene. 

La propiedad overflow puede tomar los siguientes valores:

1. visible (por defecto): Este valor permite que el contenido sobresalga del contenedor sin recorte y se representará fuera del contenedor. Este es el comportamiento predeterminado.

    selector {
    overflow: visible;
    }


2. hidden: Este valor oculta cualquier contenido que sobresalga del contenedor. El desbordamiento se recorta y el usuario no verá el contenido que excede los límites del contenedor.

    selector {
    overflow: hidden;
    }

3. scroll: Este valor agrega una barra de desplazamiento al contenedor, permitiendo al usuario desplazarse y ver el contenido oculto.

    selector {
    overflow: scroll;
    }

4. auto: Este valor agrega automáticamente una barra de desplazamiento al contenedor solo si el contenido se desborda. Si no hay desbordamiento, no se muestra ninguna barra de desplazamiento.

    selector {
    overflow: auto;
    }



**Background**

Es una propiedad abreviada que se utiliza para establecer varias propiedades relacionadas con el fondo de un elemento. Permite definir el color de fondo, la imagen de fondo, la repetición de la imagen, la posición, la fijación y otros aspectos del fondo de un elemento.

La sintaxis básica de la propiedad background es la siguiente:

    selector {
        background: (background-color) (background-image) (background-repeat) (background-attachment) (background-position);
    }


A continuación, se describen las propiedades que se pueden incluir en background:

1. background-color: Establece el color de fondo del elemento.

    **background-color: #FF0000; / Ejemplo de color rojo**

2. background-image: Especifica la imagen de fondo del elemento.

    **background-image: url('imagen-de-fondo.jpg'); / Ejemplo de imagen de fondo**

3. background-repeat: Define cómo se repite la imagen de fondo. Puede tener valores como **repeat**, **no-repeat**, **repeat-x** y **repeat-y**.

    **background-repeat: repeat-x; / Repetir solo horizontalmente**

4. background-attachment: Determina si la imagen de fondo está fija o se desplaza con el contenido. Puede ser **scroll** o **fixed**.

    **background-attachment: fixed; / Fijar la imagen de fondo**

5. background-position: Establece la posición inicial de la imagen de fondo. Puede utilizar valores como **top**, **bottom**, **left**, **right**, o coordenadas específicas.

    **background-position: center center; / Centrar la imagen de fondo**

















