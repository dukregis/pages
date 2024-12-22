document.querySelectorAll('.lite-video').forEach((video) => {
    video.addEventListener('click', () => {
        // Obtener la URL del video
        const videoUrl = video.getAttribute('data-video-url');

        // Crear un iframe para mostrar el video
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.allow = "autoplay";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";

        // Cambiar la clase para ocultar la imagen y mostrar el iframe
        video.classList.add('active');
        video.appendChild(iframe);
        
    });
});
