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