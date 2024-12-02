# NASA APOD Viewer

Este proyecto muestra la imagen astronómica del día proporcionada por la NASA utilizando su API APOD. La aplicación está desarrollada en HTML, CSS y JavaScript puro (Vanilla JS), y permite visualizar la imagen con una breve descripción y, si está disponible, un enlace a la imagen en alta definición.

## Desafíos y Soluciones

### 1. Consumir una API de manera asíncrona
**Desafío**: Hacer una solicitud a la API APOD de la NASA para obtener los datos del día y mostrarlos en la interfaz de usuario.  
**Solución**: Usé `fetch` para realizar la solicitud y manejar los datos recibidos en formato JSON. Además, implementé `async` y `await` para simplificar el manejo de promesas.

### 2. Mostrar diferentes tipos de contenido (imagen o video)
**Desafío**: La API puede devolver una imagen o un video, y es necesario mostrar el tipo correcto de media y ocultar el otro.  
**Solución**: Verifiqué el campo `media_type` en la respuesta de la API. Si el valor es `"image"`, muestro la imagen y oculto el video; si es `"video"`, muestro el video y oculto la imagen. Esto se logró aplicando `display: none` al elemento no deseado.

### 3. Manejo de errores al cargar la imagen
**Desafío**: A veces, la imagen de la API puede estar ausente o no cargar correctamente.  
**Solución**: Implementé un control de errores en el elemento de imagen (`imgElement.onerror`), para que, si la imagen no carga, se muestre una imagen de respaldo.

### 4. Enlace a la imagen en alta definición
**Desafío**: Mostrar el enlace de alta definición solo cuando está disponible en la respuesta de la API.  
**Solución**: Verifiqué la existencia de `hdurl` en la respuesta. Si está presente, muestro el enlace y, si no, lo oculto mediante `display: none`.

## Estructura de Archivos

- `index.html`: Contiene la estructura HTML principal.
- `styles/styles.css`: Define el diseño y los estilos de la página.
- `js/app.js`: Contiene la lógica de JavaScript para consumir la API y mostrar los datos.

Puedes ver el proyecto en vivo aquí: [NASA APOD Viewer](https://nasa-api-wheat.vercel.app/)

