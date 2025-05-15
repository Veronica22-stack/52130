# README
En este README se podrá observar: INSTALACIÓN, INSTRUCCIONES DE USO, Y ACLARACIONES

# INSTALACIÓN
Clonar este repositorio: git clone https://github.com/Veronica22-stack/52130.git

# INSTRUCCIONES DE USO
1.	Clonar el repositorio: se puede hacer desde el siguiente link: git clone https://github.com/Veronica22-stack/52130.git .
2.	Cambiar el directorio raíz con el comando: cd ssl-antlr-seguncaso
3.	Abrir VS Code y ejecutar en la ventana de comandos abierta: code . 
4.	Aquí ya se podrá ver el proyecto en la parte izquierda de VS Code: 
 [![IMAGEN1.png](https://i.postimg.cc/QNc2zdLN/IMAGEN1.png)](https://postimg.cc/bdNVD8N4)
5.	Al seleccionar: seguncaso.g4 , se abrirá la gramática asignada.
6.	Se puede observar que también hay un archivo de texto llamado input, donde se encuentra una ejemplo para poder probar la gramática y realizar el árbol correspondiente.
7.	Este archivo se puede colocar el ejemplo:
segun "Taylor" hacer{
	caso "A": imprimir("1989");
	caso "B": imprimir("TTDP");
	caso "C": salir;
}finsegun
8.	Luego se edita el archivo seguncaso.g4 (no olvidar hacer ctrl+S para guardar los cambios) , y hace click en el botón de plugin de ANTLR(ubicada en la parte lateral izquierda).
 [![IMAGEN2.png](https://i.postimg.cc/MKxCJJx7/IMAGEN2.png)](https://postimg.cc/HjZZbKrn)
9.	Luego se presiona F5 para poder construir el árbol de sintaxis. F5 ejecuta y depura el proyecto a partir de la especificación en launch.JSON
 [![IMAGEN3.png](https://i.postimg.cc/133b4084/IMAGEN3.png)](https://postimg.cc/2Vg0KZFf)
En este caso lo coloqué en horizontal debido a su tamaño
10.	Este mismo procedimiento se puede aplicar a toda cadena válida que se ingrese en el archivo intput.txt.

# ACLARACIONES
-La palabra  segun no lleva tilde intencionalmente, a pesar de que según las reglas del español debería escribirse “según”. Esto es por compatibilidad léxica con el analizador, ya que los lenguajes de programación suelen evitar caracteres especiales (como tildes o acentos) en palabras clave para evitar errores de codificación, y facilitar el análisis léxico. De igual modo, las cadenas con tildes no son aceptadas por este analizador porque el conjunto de caracteres definido en la gramática no incluye letras acentuadas (á, é, í, ó, ú) por simplicidad y para evitar conflictos de codificación en diferentes entornos.

-Todas las palabras del lenguaje (segun, hacer, caso, defecto, salir, imprimir, etc.) deben escribirse en minúscula, tal como están definidas en la gramática. El uso de mayúsculas puede provocar errores de análisis.

-Las cadenas deben estar entre comillas dobles (") y solo pueden contener letras no acentuadas, números y símbolos permitidos (., ,, !, ?, : y ;). Caracteres como tildes, la letra ñ, o comillas simples (') no están permitidos por el analizador.
