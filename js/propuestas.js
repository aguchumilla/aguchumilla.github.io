(function(){
    const titlepropuestas = [...document.querySelectorAll('.propuestas_title')];
    
    titlepropuestas.forEach(propuesta =>{
        propuesta.addEventListener('click', ()=>{
            let height = 0;
            let answer = propuesta.nextElementSibling;
            let addPadding = propuesta.parentElement.parentElement;

            addPadding.classList.toggle('propuestas_padding--add');
            propuesta.children[0].classList.toggle('propuestas_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    })

})();