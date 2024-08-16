(function() {
    const buttonScroll = document.querySelector('.boton_subir');
    const aboutSection = document.querySelector('.about');

    document.addEventListener('scroll', function() {
        let aboutSectionTop = aboutSection.getBoundingClientRect().top + 300;
        let windowHeight = window.innerHeight;

        if (aboutSectionTop <= windowHeight) {
            buttonScroll.classList.add('boton_subir--show');
        } else {
            buttonScroll.classList.remove('boton_subir--show');
        }
    });
})();