// script.js

/**
 * Redirige al usuario a la página indicada.
 * @param {string} pagina - Nombre del archivo HTML al que se desea ir.
 */
function irAPagina(pagina) {
    window.location.href = pagina;
  }
  
  // Efecto visual para los botones al hacer clic
  document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.paper-btn');
    
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        boton.classList.add('activo');
        setTimeout(() => boton.classList.remove('activo'), 300);
      });
    });
  });
  