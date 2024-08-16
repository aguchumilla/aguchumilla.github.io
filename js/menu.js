(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');
    const body = document.querySelector('body');

    // Función para abrir o cerrar el menú y activar/desactivar el scroll
    function toggleMenu(action) {
        if (action === 'open') {
            menu.classList.add('nav_link--show');
            body.classList.add('no-scroll');
        } else {
            menu.classList.remove('nav_link--show');
            body.classList.remove('no-scroll');
        }
    }

    openButton.addEventListener('click', () => {
        toggleMenu('open');
    });

    closeMenu.addEventListener('click', () => {
        toggleMenu('close');
    });

    // Detectar clic fuera del menú
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !openButton.contains(event.target)) {
            toggleMenu('close');
        }
    });

    // Detectar clic en íconos dentro del menú
    menu.querySelectorAll('a, .nav_icon').forEach(icon => {
        icon.addEventListener('click', () => {
            toggleMenu('close');
        });
    });

})();