function handleItemClick(element) {
    // Obtenemos el índice del elemento clicado
    const index = Array.from(element.parentElement.children).indexOf(element);
    const { width, height, left, right } = element.getBoundingClientRect();

    // Calculamos el desplazamiento en píxeles basado en el índice
    const displacement = index * (width + 10); // 500 es el ancho del elemento, 10 es el espacio entre elementos

    // Actualizamos el estilo de la animación de desplazamiento
    const slidingBackground = document.querySelector('.sliding-background');
    slidingBackground.style.transform = `translateX(${displacement}px)`;

    // Eliminamos la clase 'active' de todos los elementos
    document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('active');
    });

    // Agregamos la clase 'active' solo al elemento clicado
    // element.classList.add('active');
}