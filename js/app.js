document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    function fetchApod() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Asignar los datos al DOM
                document.getElementById('title').innerText = data.title;
                document.getElementById('date').innerText = data.date;
                document.getElementById('explanation').innerText = data.explanation;
                
                // Verificar el tipo de media (imagen o video)
                if (data.media_type === "image") {
                    // Si es una imagen, mostramos la imagen y ocultamos el video
                    const image = document.getElementById('apod-image');
                    image.src = data.url;
                    image.alt = data.title;
                    image.style.display = 'block'; // Mostrar imagen
                    document.getElementById('apod-video').style.display = 'none'; // Ocultar video
                } else if (data.media_type === "video") {
                    // Si es un video, mostramos el video y ocultamos la imagen
                    const video = document.getElementById('apod-video');
                    video.src = data.url;
                    video.style.display = 'block'; // Mostrar video
                    document.getElementById('apod-image').style.display = 'none'; // Ocultar imagen
                }
                
                // Asignar la URL de alta definición si existe
                const hdLink = document.getElementById('hdurl');
                hdLink.href = data.hdurl;
                hdLink.style.display = data.hdurl ? 'block' : 'none'; // Mostrar enlace solo si existe una URL en HD

                // Si es una imagen, manejamos posibles errores al cargarla
                const imageUrl = data.url || 'https://api.nasa.gov/assets/img/general/apod.jpg';
                const imgElement = document.getElementById('apod-image');
                imgElement.src = imageUrl;

                // Si la imagen no se puede cargar, usa una imagen de respaldo
                imgElement.onerror = () => {
                    imgElement.src = 'https://api.nasa.gov/assets/img/general/apod.jpg';
                };
            })
            .catch(error => console.error('Error:', error)); // Manejar errores en la solicitud
    }

    fetchApod(); // Llamada para obtener los datos del APOD
});
