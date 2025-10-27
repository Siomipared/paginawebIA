// Usamos el selector '.paper-btn' ya que son los botones estilizados
const buttons = document.querySelectorAll('.paper-btn'); 
const sections = document.querySelectorAll('.content-section');

/**
 * Función para inicializar y mostrar la sección de 'inicio'.
 * También se puede llamar al hacer clic en un botón.
 * @param {string} targetId - El ID de la sección a mostrar.
 */
function showSection(targetId) {
    // Oculta todas las secciones
    sections.forEach(sec => sec.style.display = 'none');
    
    // Muestra solo la sección objetivo
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// 1. Mostrar solo la sección 'inicio' al cargar la página
// Usamos el evento DOMContentLoaded para asegurar que todos los elementos existen.
document.addEventListener('DOMContentLoaded', () => {
    showSection('inicio');
});


// 2. Manejar el clic de los botones
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        showSection(targetId);
        
        // Opcional: Desplazarse suavemente a la parte superior del contenido
        document.querySelector('.main-content').scrollTop = 0;
    });
});