

// Recargar pagina
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

