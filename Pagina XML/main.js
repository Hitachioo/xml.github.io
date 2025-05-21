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