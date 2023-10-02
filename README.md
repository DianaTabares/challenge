# challenge
Tu misión consiste en desarrollar una aplicación para crear encuestas interactivas
similares a Google Forms.
A continuación, se detallan los requisitos clave del desafío:
Objetivo del Desafío: 
-Crear una aplicación utilizando la tecnología de tu
preferencia (ya sea en el ámbito frontend o backend) que pueda leer un archivo
JSON proporcionado y generar interfaces de encuestas únicas para cada ítem en
el archivo. 
Asegúrate de que el diseño y la estética de la aplicación sean distintos
a los de Google Forms.
**Estás autorizado a utilizar librerías según consideres necesario para lograrlo.
Requisitos del Proyecto:
● Desarrollar una aplicación que lea el archivo JSON proporcionado y muestre
interfaces de encuestas personalizadas.
● Implementar enviar las respuestas de las encuestas a una base de datos de
tu elección. Asegúrate de que esta base de datos sea de tu propiedad y no
compartas el acceso a la misma.
● Diseñar una ruta adicional en la aplicación para mostrar las respuestas
almacenadas en la base de datos. Al presionar el botón "Enviar/Send" en el
formulario de encuesta, deberá aparecer un mensaje y proporcionar acceso
a una nueva ruta/vista con las respuestas. Además, el usuario podrá
actualizar su respuesta.
Puntos Importantes:
● Enviar el link del repositorio/deploy por el mail.
● Si tienes alguna pregunta o duda relacionada con el desafío, comunícate a
través del correo electrónico o slack indicado.
● El deploy de la aplicación puede realizarse en cualquier plataforma (por
ejemplo, Vercel, GitHub Pages, etc.), y no se requerirá acceso a tu base de
datos. Cualquier consideración o suposición clave debe estar documentada
en el archivo README.
● El challenge se podrá realizar con cualquier tecnología.
● Tienes 48 hs para realizar el challenge aunque si no llegases en ese tiempo
puedes entregarlo igual para avanzar a la siguiente etapa que es la
entrevista.
Instrucciones Finales: Una vez hayas completado el desafío, comparte tu
solución en GitHub y asegúrate de incluir un README detallado que explique la
tecnología que elegiste, cómo configurar y ejecutar la aplicación, y cualquier
información adicional relevante.
Este desafío es tu oportunidad para demostrar tu creatividad, habilidades de
desarrollo y capacidad para cumplir con los requisitos establecidos.
¡Esperamos ver tu propuesta en acción y compartir tus logros a través del
formulario de envío correspondiente!
Extra: No te limites únicamente a lo solicitado en este documento. Si encuentras
oportunidades de mejora y/o quieres añadir funcionalidades extra serán más que
bienvenidas.
—------------------------------------------------------------------------------------------
--------
JSON
{
"items": [
{
"type": "text",
"label": "Nombre completo",
"name": "full_name",
"required": true
},
{
"type": "tel",
"label": "Número de teléfono",
"name": "phone_number",
"required": true
},
{
"type": "date",
"label": "Fecha de inicio",
"name": "start_date",
"required": false
},
{
"type": "select",
"label": "¿Cuál es tu idioma preferido?",
"name": "preferred_language",
"options": [
{
"label": "Inglés",
"value": "english"
},
{
"label": "Español",
"value": "spanish"
},
{
"label": "Francés",
"value": "french"
},
{
"label": "Alemán",
"value": "german"
}
],
"required": true
},
{
"type": "radio",
"label": "¿Cómo nos encontraste?",
"name": "how_found",
"options": [
{
"label": "Amigos",
"value": "friends"
},
{
"label": "Búsqueda en línea",
"value": "online_search"
},
{
"label": "Publicidad",
"value": "advertisement"
}
],
"required": true
},
{
"type": "checkbox",
"label": "¿Desea recibir nuestro boletín informativo?",
"name": "newsletter_subscription",
"required": false
},
{
"type": "submit",
"label": "Enviar"
}
]
}
