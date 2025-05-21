// Archivo: efectos.js
// Este archivo contiene los efectos para la presentación de XML

/**
 * Efecto de animación para el título
 * Hace que el título se deslice desde arriba con un efecto de rebote
 */
document.addEventListener('DOMContentLoaded', function() {
    const titleHeader = document.getElementById('titleHeader');
    
    // Efecto inicial: el título empieza fuera de la pantalla
    titleHeader.style.transform = 'translateY(-100%)';
    
    // Después de un breve retraso, anima el título hacia abajo
    setTimeout(function() {
        titleHeader.style.transition = 'transform 0.8s ease-out';
        titleHeader.style.transform = 'translateY(0)';
        
        // Añade un efecto de rebote suave
        setTimeout(function() {
            titleHeader.style.transform = 'translateY(-10px)';
            
            setTimeout(function() {
                titleHeader.style.transform = 'translateY(0)';
            }, 200);
        }, 800);
    }, 300);
});

/**
 * Puedes añadir más funciones y efectos aquí
 * Por ejemplo, podrías añadir efectos para otros elementos de la página
 */

// Función para destacar las secciones al hacer scroll
function iniciarEfectosScroll() {
    const secciones = document.querySelectorAll('.info-box, .example-box');
    
    const opciones = {
        root: null,
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                entrada.target.style.transform = 'translateY(0)';
                entrada.target.style.opacity = '1';
            }
        });
    }, opciones);
    
    // Aplicar estilo inicial y observar cada sección
    secciones.forEach(seccion => {
        seccion.style.transform = 'translateY(20px)';
        seccion.style.opacity = '0';
        observador.observe(seccion);
    });
}

// Iniciar efectos de scroll después de cargar el DOM
document.addEventListener('DOMContentLoaded', iniciarEfectosScroll);