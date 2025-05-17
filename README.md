# CONSTRUCCIÓN DE UN ANALIZADOR CON ANTLR4 Y JAVASCRIPT
Verónica Silva

📌 Legajo: 52130

📚 Tema: 39568_5

En este README se podrá observar: ACLARACIONES, INSTALACIÓN, ARCHIVOS DEL PROYECTO E INSTRUCCIONES DE USO

# ACLARACIONES

-En Visual Studio Code, se debe abrir la carpeta antlr-seguncaso-project, NO la carpeta 52130, ni 52130-main, ya que sino se generan errores al ejecutar index.js y interp.js, debido al directorio del achivo input.txt. Ver en detalle en Instrucciones de uso.

-La palabra  segun no lleva tilde intencionalmente, a pesar de que según las reglas del español debería escribirse “según”. Esto es por compatibilidad léxica con el analizador, ya que los lenguajes de programación suelen evitar caracteres especiales (como tildes o acentos) en palabras clave para evitar errores de codificación, y facilitar el análisis léxico. De igual modo, las cadenas con tildes no son aceptadas por este analizador porque el conjunto de caracteres definido en la gramática no incluye letras acentuadas (á, é, í, ó, ú) por simplicidad y para evitar conflictos de codificación en diferentes entornos.

-El interpretador se encuentra en un archivo distinto, ya que si estaba dentro del mismo archivo en donde se ejecutan los demas ejercicios, saltaba error

# DESCRIPCIÓN DEL PROYECTO
Este proyecto es un analizador léxico y sintáctico desarrollado en ANTLR4 y Node.js
Podrá observarse que el sistema:

	-Genera un análisis léxico y sintáctico.

	-Genera una tabla de lexemas y tokens.

	-Construye un árbol de derivación(perteneciente al análisis sintáctico).
 
 	-traduce el código fuente, al lenguaje JavaScript; y lo ejecuta como lo haría un intérprete básico.

os tres primeros items se encuentran dentro de un mismo archivo llamado index.js

En un archivo distinto, llamado interp.js se encuentra:

-Intérprete: traduce el código fuente, al lenguaje JavaScript; y lo ejecuta como lo haría un intérprete básico.


# INSTALACIÓN
Hay dos opciones de instralación:

1- Descargando el archivo ZIP. Desde este repositorio, ir el botón verde que dice 'Code', y luego a 'Download ZIP'.
Una vez ddescargado, se extraen los ficheros y ya se puede utilizar el analizador.

2- Clonar este repositorio: git clone https://github.com/Veronica22-stack/52130.git

Es importante ya tener tener instalado:
-Node.js (v16 o superior)
-Java (JDK)
-ANTLR 4 (versión 4.13 o superior)

# Archivos del proyecto
-seguncaso.g4: contiene la gramática ANTLR en español utilizada por el lexer y parser.

-input.txt: se encuentra con el contenido del archivo input_correcto_1. En este archivo(input.txt) se deberán pegar los contenidos de los archivos: input_correcto_1, input_correcto_2, input_incorrecto_1, input_incorrecto_2; para poder ejecutar el analizador.

-index.js: Realiza:

	- Análisis léxico
 
	- Análisis sintáctico
 
	- Generación de tabla de tokens
 
	- Generación de árbol de análisis sintáctico. 
 
 -interp.js: Ejecuta la traducción del código fuente al lenguaje JavaScript y lo interpreta.
 
# INSTRUCCIONES DE USO

1-Descargar como ZIP.

2-Extraer los ficheros.

3-Es importante que en Visual Studio Code, se abra la carpeta antlr-seguncaso-project, NO la carpeta 52130, ni 52130-main, ya puede generar errores al ejecutarse, debido al directorio del achivo input.txt. Ver orden de imagenes:
[![image.png](https://i.postimg.cc/j5VqCwgr/image.png)](https://postimg.cc/Ny4vzMvN)
[![image.png](https://i.postimg.cc/x8tbK1H1/image.png)](https://postimg.cc/8ff5GDt2)
[![image.png](https://i.postimg.cc/rpNydY58/image.png)](https://postimg.cc/v1DwkhPj)

Luego en Visual Studio Code se verá: 
[![image.png](https://i.postimg.cc/hvMwhJ44/image.png)](https://postimg.cc/y3gnb8S2)
 
4- EL archivo input.txt se encuentra con el contenido del archivo input_correcto_1. Es importante aclarar que si se desea cambiar su contenido se debe luego hacer click en ctrl+s; porque si no, se hace la ejecución con el contenido original, y no sobre el elegido.

5-Al seleccionar: seguncaso.g4 , se abrirá la gramática asignada.
Desde este archivo y en base al ejemplo colocado en el input se podrá observar el árbol de derivación. Para esto es necesario:
	
 	-Presiona F5 para generar y visualizar el árbol de derivación (requiere tener el plugin ANTLR instalado).
 [![IMAGEN3.png](https://i.postimg.cc/133b4084/IMAGEN3.png)](https://postimg.cc/2Vg0KZFf)
 
6-Ejecutar el analizador sintáctico y árbol:
	
 	-se abre el archivo index.js
 	
  	-Se abre la terminal (ctrl+ñ)
  	
   	-Se ejecuta el  comando: node index.js (no olvidad hacer click en enter): Esto realiza el análisis léxico y sintáctico, muestra la tabla de tokens y genera el árbol de análisis sintáctico.
   
[![image.png](https://i.postimg.cc/rwGWv7jT/image.png)](https://postimg.cc/DSZ8GjRp)
[![image.png](https://i.postimg.cc/ZKCKvqqn/image.png)](https://postimg.cc/7frypw0r)
[![image.png](https://i.postimg.cc/G3ZhYCTj/image.png)](https://postimg.cc/nMGJbNks)
 
7-Ejecutar el intérprete: se ejecutará completo con los inputs correctos, en  el caso de los incorrectos, quedará en blanco la traducción.
	
 	-Se abre el achivo interp.js
 	
  	-Se abre la terminal (ctrl+ñ)
  	
   	-Se ejecuta el  comando: node interp.js (no olvidad hacer click en enter): Esto traduce el código fuente al lenguaje JavaScript y lo ejecuta como si fuera un intérprete real.

[![image.png](https://i.postimg.cc/BZxmq7Mh/image.png)](https://postimg.cc/23SQGGpv)
[![image.png](https://i.postimg.cc/FK2npDyw/image.png)](https://postimg.cc/mcyw236S)

Recuerde, que este procedimiento lo puede hacer con cualquiera de los archivos de texto que contienen distintos inputs. SIEMPRE que copie y pegue alguno de ellos en el archivo input.txt debe actualizarlo con ctrl+s para que ejecuten correctamente.

