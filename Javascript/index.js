// JavaScript para el funcionamiento del carrusel
const carrusel = document.getElementById('testimoniosCarrusel');
const testimonios = document.querySelectorAll('#testimoniosCarrusel > div');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarrusel() {
    const offset = -currentIndex * 100; // Ajusta la posición basado en el índice actual
    carrusel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonios.length - 1;
    updateCarrusel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonios.length - 1) ? currentIndex + 1 : 0;
    updateCarrusel();
});

// JavaScript para el funcionamiento del menú desplegable móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    // Alternar la visibilidad del menú
    mobileMenu.classList.toggle('hidden');
});        

function mostrarDetalle(opcion) {
    // Aplicar animación fade-out a las opciones principales
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.classList.add('fade-out');

    // Después de la animación (500ms), ocultar las opciones y mostrar el detalle
    setTimeout(() => {
        optionsContainer.classList.add('hidden');
        optionsContainer.classList.remove('fade-out'); // Eliminar fade-out para que no interfiera en la próxima visualización
        const detalle = document.getElementById('detalle-' + opcion);
        detalle.classList.remove('hidden');
        detalle.classList.add('fade-in');
    }, 500); // Duración de la animación
}

function volver() {
    // Obtener el detalle actual visible
    const detalles = document.querySelectorAll('.fade-in');
    detalles.forEach(detalle => {
        detalle.classList.add('fade-out');
        detalle.classList.remove('fade-in');
    });

    // Esperar 500ms para cambiar el estado de visibilidad
    setTimeout(() => {
        detalles.forEach(detalle => {
            detalle.classList.add('hidden');
            detalle.classList.remove('fade-out'); // Eliminar fade-out para evitar problemas
        });
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.classList.remove('hidden');
        optionsContainer.classList.add('fade-in');
    }, 500); // Duración de la animación
}