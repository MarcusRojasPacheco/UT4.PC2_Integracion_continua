# ¿Es un lenguaje de programación más seguro que el resto?

# Lenguajes de programación.

Existen muchos lenguajes de programación distintos, pero los más destacables de estos años han sido C, JavaScript Python, Ruby, PHP y C++.

Estos lenguajes de programación se utilizan para realizar tanto el “frontend” como el “backend” de una página web, por lo que las vulnerabilidades existentes dependiendo del lenguaje se enfocarán tanto en la parte del cliente, como por parte del servidor y sistema operativo, es importante aclarar esto ya que pueden existir más o menos vulnerabilidades para cada lenguaje, pero el impacto que puede tener será distinto en cada caso.

# ¿Cuál tiene más vulnerabilidades?

Tras repasar los datos proporcionados de [mend.io](https://www.mend.io/resources/blog/is-one-programming-language-more-secure/) podemos ver que los 3 principales lenguajes con más vulnerabilidades son:

![/img/1](https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua/blob/72d6cdf8adbfa68178c5299cfe1e97b906b0b3b6/assets/doc/img/1.jpg)

C - Es un lenguaje de programación orientado a objetos, es estructurado pero no por bloques, aparte no es rígido para la comprobación de los tipos de datos, permitiendo conversión entre distintos tipos de datos.

PHP - Es un lenguaje de programación multipropósito que permite desarrollar aplicaciones del lado del servidor, garantizando comunicación entre el servidor y la página web.

JavaScript - Es un lenguaje de programación orientado a objetos, como es interpretado no necesita compilarse, ya que los navegadores web ejecutan el código realizando las acciones indicadas.

Tras un breve resumen de cada tipo de lenguaje, podemos observar como las vulnerabilidades más utilizadas van desde aplicaciones utilizadas por parte del cliente, como por parte del servidor e incluso para desarrollo de sistemas operativos, pero la que más existen son de C, la que se utiliza especialmente para desarrollar sistemas operativos, esto es importante saberlo, ya que la seguridad que debería aplicarse a los programas creados en este lenguaje de programación debería ser mayor en este caso, ya que es donde mayor cantidad de vulnerabilidades existen.

# Vulnerabilidades a lo largo del tiempo

Las vulnerabilidades que se recaban van enfocadas dependiendo de la época, ya que se descubren nuevos tipos de ataques dependiendo de los intereses de los ciberatacantes y expertos en ciberseguridad, ya que al implementarse nuevas medidas de seguridad y tecnologías, el objetivo para los ataques van modificandose.

![/img/2](https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua/blob/72d6cdf8adbfa68178c5299cfe1e97b906b0b3b6/assets/doc/img/2.jpg)

Podemos observar como en estos últimos años, el lenguaje de programación donde se han sacado más cantidad de vulnerabilidades es PHP, esto es debido a que PHP lo utilizan muchas páginas web por defecto para la creación de contenido como por ejemplo WordPress, aparte de que actúa tanto desde la página web, como también por el servidor, así que si un atacante es capaz de encontrar vulnerabilidades en PHP, es capaz de acceder remotamente vulnerando la página web para que el sistema operativo ejecute los comandos externos que se lancen, pudiendo dar acceso tanto a la modificación del “frontend” como acceso al “backend” de las aplicaciones.

# Vulnerabilidades de código abierto

Es cierto que si observamos a lo largo del tiempo como en la siguiente gráfica, han disminuido los ataques que se pueden realizar a los lenguajes de programación, para existen dos casos en los que no se aplica esta norma y estos son JavaScript y PHP

![/img/3](https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua/blob/72d6cdf8adbfa68178c5299cfe1e97b906b0b3b6/assets/doc/img/3.jpg)

La disminución de las vulnerabilidades es debido seguramente a programas que automatizan la corrección del código antes de publicarse el programa, pero también se puede observar como no pasa lo mismo con JavaScript y PHP, esto seguramente sea debido al aumento de la tecnología a disposición de personas sin conocimientos amplios de estos lenguajes debido a programas que automatizan la utilización de estos lenguajes en sus proyectos, aparte, desde el punto de vista de un atacante, estos son mejores objetivos ya que pueden atacar tanto a los clientes, como a la base de datos de los servidores, obteniendo la información personal de los usuario que puede ser vendida posteriormente.

# CWE más comunes por lenguaje de programación

En la página web de Mitre podemos observar los CWE más utilizados de los últimos años como se observa en la siguiente imagen.

![/img/4](https://github.com/MarcusRojasPacheco/UT4.PC2_Integracion_continua/blob/72d6cdf8adbfa68178c5299cfe1e97b906b0b3b6/assets/doc/img/4.png)

Entre todos estos, los que más se han utilizado en lenguajes de programación en 2022 fueron:

[CWE-787](https://cwe.mitre.org/data/definitions/787.html): Esta vulnerabilidad provoca la corrupción de datos, un bloqueo o ejecución de código, pudiendo modificar un índice o realizar una redirección de los punteros a una ubicación distinta dentro de la memoria, permitiendo la operación de escritura y ejecución del comando.

CWE-79: Esta vulnerabilidad es aprovechada cuando no se validan los datos que envía el usuario antes de que se devuelva la respuesta por parte de la página web, pudiendo crear scripts que se quedan almacenados en el servidor, ejecutándose estos cuando accede a la web, afectando a los usuarios que accedan.

[CWE-20](https://cwe.mitre.org/data/definitions/20.html): Esta vulnerabilidad es aprovechada cuando no se validan los datos que envía el usuario antes de que se devuelva la respuesta por parte de la página web.

# Conclusión

Tras analizar y ver todos los datos, podemos afirmar que no existe un lenguaje de programación más seguro que el resto, ya que se descubren nuevas vulnerabilidades constantemente y van variando a lo largo del tiempo, por lo que es imprescindible conocer las distintas tencologías y la cantidad de vulnerabilidades que estas tienen, para adaptar el lenguaje de programación que