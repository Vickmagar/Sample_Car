// Función para fijar el footer en la parte inferior de la ventana del navegador
function fixFooter() {
    const footer = document.querySelector('.footer');
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.right = '1440';
    footer.style.zIndex = '1000';
    footer.style.maxWidth = '395px';
    
    
  }
  
  // Asegurándose de que la función se ejecute cuando el contenido de la página se haya cargado
  document.addEventListener('DOMContentLoaded', () => {
    fixFooter();
  });