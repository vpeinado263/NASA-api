
/*Evento 'DOOMContentLoaded asegura que que el codigo se ejecute despues de que el DOM este completamente cargado*/

document.addEventListener('DOMContentLoaded', function() {

    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    function fetchApod() {
        /*Realiza una solicitud HTTP a la url proporcionada utilizando fetch*/
        fetch(url)

        /*Devuelve una propmesa, este then maneja la respuesta de la solicitud y la convierte en formato JSON*/
        .then(response => response.json())

        /*Resivo los datos y los proceso para actualizar el DOM*/
        .then(data => {

            const { title, date, explanation, media_type, url, hdurl } = data; //Destructuracion para trabajar con los objetos que recivo

                // Asignar los datos al DOM
                document.getElementById('title').innerText = title;
                document.getElementById('date').innerText = date;
                document.getElementById('explanation').innerText = explanation;

                
                // Verifico el tipo de media que recivo (imagen o video)
                if (media_type === "image") {

                    // Si es una imagen, mostramos la imagen y ocultamos el video
                    const image = document.getElementById('apod-image');
                    image.src = url;
                    image.alt = title;

                    image.style.display = 'block'; // Mostrar imagen

                    document.getElementById('apod-video').style.display = 'none'; // Ocultar video

                } else if (media_type === "video") {
                    // Si es un video, mostramos el video y ocultamos la imagen
                    const video = document.getElementById('apod-video');
                    video.src = url;
                    video.style.display = 'block'; // Mostrar video
                    document.getElementById('apod-image').style.display = 'none'; // Ocultar imagen
                }
                
                // Asignar la URL de alta definición si existe
                const hdLink = document.getElementById('hdurl');
                hdLink.href = hdurl;
                hdLink.style.display = hdurl ? 'block' : 'none'; // Mostrar enlace solo si existe una URL en HD

                // Si es una imagen, manejamos posibles errores al cargarla
                const imageUrl = url || 'https://api.nasa.gov/assets/img/general/apod.jpg';
                const imgElement = document.getElementById('apod-image');
                imgElement.src = imageUrl;

                // Si la imagen no se puede cargar, usa una imagen de respaldo
                imgElement.onerror = () => {
                    imgElement.src = 'https://api.nasa.gov/assets/img/general/apod.jpg';
                };
            })

            document.getElementById('loadDataButton').addEventListener('click', function() {
                fetchApod();
            })

            .catch(error => console.error('Error:', error)); // Manejar errores en la solicitud
    }

    fetchApod(); // Llamada para obtener los datos del APOD
});
