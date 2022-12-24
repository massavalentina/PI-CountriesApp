Enunciado
La idea general es crear una aplicación en la cual se pueda ver información de distintos paises utilizando la api externa restcountries y a partir de ella poder, entre otras cosas:

Buscar paises
Filtrarlos / Ordenarlos
Crear actividades turísticas
IMPORTANTE: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

Únicos Endpoints/Flags que pueden utilizar
GET https://restcountries.com/v3/all
GET https://restcountries.com/v3/name/{name}
GET https://restcountries.com/v3/alpha/{code}
Requerimientos mínimos
A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

IMPORTANTE: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

Tecnologías necesarias
[ ] React
[ ] Redux
[ ] Express
[ ] Sequelize - Postgres
Frontend
Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

Pagina inicial: deben armar una landing page con

[ ] Alguna imagen de fondo representativa al proyecto
[ ] Botón para ingresar al home (Ruta principal)
Ruta principal: debe contener

[ ] Input de búsqueda para encontrar países por nombre
[ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
Imagen de la bandera
Nombre
Continente
[ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
[ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.
Ruta de detalle de país: debe contener

[ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
[ ] Código de país de 3 letras (id)
[ ] Capital
[ ] Subregión
[ ] Área (Mostrarla en km2 o millones de km2)
[ ] Población
[ ] Actividades turísticas con toda su información asociada
Ruta de creación de actividad turística: debe contener

[ ] Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Dificultad
Duración
Temporada
[ ] Posibilidad de seleccionar/agregar varios países en simultáneo
[ ] Botón/Opción para crear una nueva actividad turística
Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la actividad no pueda contener símbolos, que la duración no pueda exceder determinado valor, etc.

Base de datos
El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

[X] País con las siguientes propiedades:
ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población
[X] Actividad Turística con las siguientes propiedades:
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera)
La relación entre ambas entidades debe ser de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países. Por ejemplo una actividad podría ser "Ski" que podría ocurrir en Argentina y también en Estados Unidos, pero a su vez Argentina podría también incluir "Rafting".

Backend
Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

IMPORTANTE: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

[ ] GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
Obtener un listado de los paises.
[ ] GET /countries/{idPais}:
Obtener el detalle de un país en particular
Debe traer solo los datos pedidos en la ruta de detalle de país
Incluir los datos de las actividades turísticas correspondientes
[ ] GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado
[ ] POST /activities:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos, relacionada con los países correspondientes
Testing
[ ] Al menos tener un componente del frontend con sus tests respectivos
[ ] Al menos tener una ruta del backend con sus tests respectivos
[ ] Al menos tener un modelo de la base de datos con sus tests respectivos