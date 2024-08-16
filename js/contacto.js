(function () {
    const enviarButton = document.querySelector('.contacto_boton');
    const nom = document.querySelector("[name=nombre]").value;
    const eml = document.querySelector("[name=email]").value;
    const com = document.querySelector("[name=comentario]").value;
    let acept = document.querySelector('.consulta_aceptada');
    let rejeated = document.querySelector('.consulta_rechazada');

    enviarButton.addEventListener('click', ()=>{
        if(nom.length === 0 || eml.length === 0 || com.length === 0){
            rejeated.style.opacity = 1;
            acept.style.opacity = 0;
        } else {
            rejeated.style.opacity = 0;
            acept.style.opacity = 1; 
        }
        
    });

})();