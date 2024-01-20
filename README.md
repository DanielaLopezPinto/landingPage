
# CSS

Explicacion de los elementos de CSS

\\\\**Width**\\\\ - Ancho
\\\\**Height**\\\\ - Alto



\\\\**Border**\\\\

Es una propiedad que se utiliza para establecer el estilo, ancho y color del borde de una elemento.  

    border: [border-width] [border-style] [border-color];

border-width: Especifica el ancho del borde. Puede establecerse utilizando valores como thin (fino), medium (medio), thick (grueso), o usando unidades específicas como píxeles (px), ems (em) o porcentajes (%).

    border-width: thin;    /* Thin border */
    border-width: medium;  /* Medium-sized border */
    border-width: thick;   /* Thick border */

border-style: Especifica el estilo del borde. Valores comunes incluyen solid (sólido), dotted (punteado), dashed (segmentado), double (doble), etc.


border-color: Especifica el color del borde. Puede establecerse utilizando nombres de colores, códigos hexadecimales, valores RGB, etc.




\\\\**Padding**\\\\

Se refiere al espacio entre el contenido de un elemnto y su borde 

Se puede aplicar a los cuatro lados de un elemento (arriba, derecha, abajo, izquierda) o individualmente.

    padding-top / arriba
    padding-right / derecha 
    padding-bottom / abajo
    padding-lef / izquierda

Puedes espicificar diferentes valores por cada lado para crear un paddinga simetrico si es necesario




\\\\**Margin**\\\\

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




\\\\**Font-family**\\\\

Es un propiedad usada para esícificar la letra del texto dentro de un elemento

Hay diferentes tipos de fuentes predeterminadas y podemos agregar mas.




\\\\**Box-sizing**\\\\

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




\\\\**Overflow**\\\\

Se utiliza para controlar lo que sucede cuando el contenido desborda los limites del elemnto que lo contiene. 

La propiedad overflow puede tomar los siguientes valores:

1. visible (por defecto): Este valor permite que el contenido sobresalga del contenedor sin recorte y se representará fuera del contenedor. Este es el comportamiento predeterminado.

    ejemplo {
        overflow: visible;
    }


2. hidden: Este valor oculta cualquier contenido que sobresalga del contenedor. El desbordamiento se recorta y el usuario no verá el contenido que excede los límites del contenedor.

    ejemplo {
        overflow: hidden;
    }

3. scroll: Este valor agrega una barra de desplazamiento al contenedor, permitiendo al usuario desplazarse y ver el contenido oculto.

    ejemplo {
        overflow: scroll;
    }

4. auto: Este valor agrega automáticamente una barra de desplazamiento al contenedor solo si el contenido se desborda. Si no hay desbordamiento, no se muestra ninguna barra de desplazamiento.

    ejemplo {
        overflow: auto;
    }



\\\\**Background**\\\\

Es una propiedad abreviada que se utiliza para establecer varias propiedades relacionadas con el fondo de un elemento. Permite definir el color de fondo, la imagen de fondo, la repetición de la imagen, la posición, la fijación y otros aspectos del fondo de un elemento.

La sintaxis básica de la propiedad background es la siguiente:

    ejemplo {
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



\\\\**Display**\\\\

se utiliza para especificar el tipo de caja de un elemento y cómo se debe mostrar en el diseño de la página. La propiedad display tiene varios valores que afectan la forma en que el elemento se renderiza en la página.

Algunos de los valores más comunes de la propiedad display son:

1. **block**: El elemento se muestra como un bloque, ocupando toda la anchura disponible y comenzando en una nueva línea. Los elementos de bloque suelen respetar tanto el ancho como el alto que se les asigna.

    ejemplo {
        display: block;
    }

2. inline: El elemento se muestra en línea, ocupando solo el ancho necesario y no comenzando en una nueva línea. Los elementos en línea no respetan el ancho y alto asignados y fluyen con el contenido en línea.

    ejemplo {
        display: inline;
    }

3. inline-block: Combina las características de los elementos en línea y de bloque. Se muestra en línea, pero permite establecer ancho, alto, márgenes y relleno.

    ejemplo {
        display: inline-block;
    }

4. none: Hace que el elemento sea invisible y no ocupa espacio en el diseño de la página. Es como si el elemento no estuviera presente en el documento.

    ejemplo {
        display: none;
    }


hay otros valores como **flex**, **grid**, y **table** que permiten diseños más complejos y específicos. La elección del valor de display depende de cómo deseas que el elemento se comporte en relación con otros elementos en el diseño de tu página web.

flex: Introduce un modelo de diseño flexible (flexbox) que facilita la creación de diseños en una sola dimensión, ya sea en fila o columna. Permite a los elementos hijos crecer y encogerse para llenar el espacio disponible de manera más eficiente.

    selector {
        display: flex;
    }

grid: Introduce un modelo de diseño en dos dimensiones (grid) que facilita la creación de estructuras de filas y columnas. Permite un control más preciso sobre el diseño de la página.

    selector {
        display: grid;
    }

table, table-row, table-cell: Estos valores se utilizan para crear layouts que imitan la estructura de una tabla en HTML. Aunque no se recomienda para la maquetación principal de la página, puede ser útil en ciertos casos.

    selector {
        display: table;
    }




\\\\**Justify-content**\\\\

Controla la alineacion de los elemntos a los largo del eje principal del contenedor.

1. flex-start: Los elementos se alinean al principio del contenedor.

    .contenedor-flex {
        display: flex;
        justify-content: flex-start;
    }

2. flex-end: Los elementos se alinean al final del contenedor.

    .contenedor-flex {
        display: flex;
        justify-content: flex-end;
    }

3. center: Los elementos se alinean en el centro del contenedor.

    .contenedor-flex {
        display: flex;
        justify-content: center;
    }

4. space-between: Distribuye equitativamente los elementos a lo largo del eje principal, con espacio entre ellos.

    .contenedor-flex {
        display: flex;
        justify-content: space-between;
    }

5. space-around: Distribuye equitativamente los elementos a lo largo del eje principal, con espacio alrededor de ellos.

    .contenedor-flex {
        display: flex;
        justify-content: space-around;
    }

6. space-evenly: Distribuye equitativamente los elementos a lo largo del eje principal, con espacio igual alrededor de ellos.

    .contenedor-flex {
        display: flex;
        justify-content: space-evenly;
    }



\\\\**Align-items**\\\\

Se utilizaen contextos de contenedfores flexibles (display:flex;) para alinear los elementos a lo largo del eje transversal.

1. **flez-start**: Los elementos  se alinean al principio  del contenedor a lo largo del eje trasversal.

    .contenedor-flex {
        display: flex;
        align-items: flex-start;
    }

2. **flex-end**: Los elementos se alinean al final del contenedor a lo largo del eje trnaversal.    

    .contenedor-flex {
        display: flex;
        align-items: flex-end;
    }

3. **center**:Los elementos se alinean en el centro del contenedor a los largo del eje tranversal.

    .contenedor-flex {
        display: flex;
        align-items: center;
    }

4. **baseline**: Los elementos se alinean en la línea de base del contenido.

    .contenedor-flex {
        display: flex;
        align-items: baseline;
    }

5. **stretch**: Los elementos se estiran para llenar el contenedor a lo largo del eje transversal.

    .contenedor-flex {
        display: flex;
        align-items: stretch;
    }


Te permite definir cómo se alinean en relación con el contenedor.


\\\\**Filter**\\\\

Se utiliza para aplicar efectos de filtro a un elemento, como cambiar el contraste, la saturación, el brillo, aplicar desenfoque y otros efectos visuales. Puedes utilizar esta propiedad para ajustar la apariencia visual de elementos en tu página web.

Algunos valores comunes de la propiedad filter incluyen:

1. **blur()**: Aplica un desenfoque al elemento. El valor representa la cantidad de desenfoque a aplicar.

.elemento {
  filter: blur(5px);
}

2. **brightness()**: Ajusta el brillo del elemento. Un valor de 1 significa ningún cambio.

.elemento {
  filter: brightness(150%);
}

3. contrast(): Ajusta el contraste del elemento.

.elemento {
  filter: contrast(200%);
}

4. **grayscale()**: Convierte el elemento a una escala de grises. Un valor de 1 significa ningún cambio.

.elemento {
  filter: grayscale(50%);
}

5. **hue-rotate()**: Rota los colores del elemento.

.elemento {
  filter: hue-rotate(90deg);
}

6. **invert()**: Invierte los colores del elemento.

.elemento {
  filter: invert(75%);
}

7. **saturate()**: Ajusta la saturación del elemento.

.elemento {
  filter: saturate(200%);
}

8. **sepia()**: Aplica un tono sepia al elemento.

.elemento {
  filter: sepia(70%);
}


Puedes combinar múltiples filtros separándolos con espacios, por ejemplo:

.elemento {
  filter: grayscale(50%) contrast(150%);
}




\\\\**Text-decoration**\\\\

Se utiliza para establecer o eliminar decoraciones en el texto, como subrayado, tachado, línea sobre el texto y línea a través del texto.

Aquí están algunos valores comunes de la propiedad text-decoration:

1. none: Elimina todas las decoraciones de texto.

    .elemento {
        text-decoration: none;
    }

2. underline: Aplica un subrayado al texto.

    .elemento {
        text-decoration: underline;
    }

3. overline: Aplica una línea sobre el texto.

    .elemento {
        text-decoration: overline;
    }

4. line-through: Aplica una línea a través del texto, como si estuviera tachado.


    .elemento {
        text-decoration: line-through;
    }

5. underline overline: Combina subrayado y línea sobre el texto.

    .elemento {
        text-decoration: underline overline;
    }


Puedes aplicar text-decoration a varios elementos de texto, como enlaces (<a>), párrafos (<p>), encabezados (<h1>, <h2>, etc.), o cualquier otro elemento de texto.

Además, es común utilizar text-decoration junto con la pseudo-clase :hover para aplicar estilos específicos cuando el usuario pasa el ratón sobre un elemento. Por ejemplo:

    a:hover {
        text-decoration: underline;
    }




\\\\**Cursor**\\\\








