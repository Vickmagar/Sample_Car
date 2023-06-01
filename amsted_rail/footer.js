// Esperar a que la página haya cargado
window.addEventListener('load', function() {
    // Añadir un listener para cuando se cambie el tamaño de la ventana
    window.addEventListener('resize', function() {
      // Forzar una actualización de la posición del footer
      updateFooterPosition();
    });
  
    function updateFooterPosition() {
      // Obtener la altura del footer y de la ventana
      const footerHeight = document.querySelector('footer').offsetHeight;
      const windowHeight = window.innerHeight;
  
      // Si el contenido de la página es más corto que la ventana, 
      // mover el footer hasta el final de la ventana
      if (document.body.offsetHeight + footerHeight < windowHeight) {
        document.querySelector('footer').style.marginTop = (windowHeight - footerHeight - document.body.offsetHeight) + 'px';
      } else {
        // En caso contrario, dejar que el footer siga al final del contenido
        document.querySelector('footer').style.marginTop = 'auto';
      }
    }
  
    // Llamar a la función para que el footer se posicione correctamente al cargar la página
    updateFooterPosition();
  
    // Añadir media queries para ocultar elementos en dispositivos móviles
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    mediaQuery.addListener(hideMobileElements);
    hideMobileElements(mediaQuery);
  
    function hideMobileElements(mediaQuery) {
      if (mediaQuery.matches) {
        // Ocultar elementos en dispositivos móviles
        document.querySelector('nav').style.display = 'none';
        document.querySelector('#mobile-nav-toggle').style.display = 'block';
      } else {
        // Mostrar elementos en dispositivos de escritorio
        document.querySelector('nav').style.display = 'block';
        document.querySelector('#mobile-nav-toggle').style.display = 'none';
      }
    }
  });
  