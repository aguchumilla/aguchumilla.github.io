(function () {
    const enviarButton = document.querySelector('.contacto_boton');
    let acept = document.querySelector('.consulta_aceptada');
    let rejeated = document.querySelector('.consulta_rechazada');
    // const form = document.querySelector('.contacto_form');

    enviarButton.addEventListener('click', (event) => {
        // Prevenir que el formulario se envíe y la página se recargue
        event.preventDefault();

        // Obtener los valores actuales de los inputs
        const nom = document.querySelector("[name=nombre]").value;
        const eml = document.querySelector("[name=email]").value;
        const com = document.querySelector("[name=comentario]").value;

        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (nom.length === 0 || eml.length === 0 || com.length === 0 || !emailRegex.test(eml)) {
            rejeated.style.opacity = 1;
            acept.style.opacity = 0;
        } else {
            rejeated.style.opacity = 0;
            acept.style.opacity = 1;
            // form.submit();
        }
    });

})();