// --- 1. EFECTO DE PARALAJE PARA EL FONDO DE ESTRELLAS ---
document.addEventListener('mousemove', function(e) {
    const starfield = document.getElementById('starfield');
    
    // Posición del mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Factor de movimiento (ajusta para más o menos intensidad)
    const sensitivity = 40; 
    
    const moveX = (mouseX / window.innerWidth - 0.5) * sensitivity;
    const moveY = (mouseY / window.innerHeight - 0.5) * sensitivity;

    // Aplicamos el movimiento al fondo usando transform para mejor rendimiento (60fps)
    starfield.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// --- 2. DESPLAZAMIENTO SUAVE PERSONALIZADO ---
// Aunque CSS ya lo hace, esto asegura que funcione en todos los navegadores
document.getElementById('btn-view-work').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop - 50, // Pequeño margen superior
        behavior: 'smooth'
    });
});

// --- 3. ANIMACIONES DE ENTRADA (ScrollReveal) ---
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true
});

sr.reveal('.project-anim', { interval: 200 });
sr.reveal('.service-card', { interval: 150 });
sr.reveal('.section-header', {});
sr.reveal('.experience-card', { origin: 'right', delay: 300 });