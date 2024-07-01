document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('modificar');
    boton.addEventListener('click', evento => {
        desestablecerPerfil();
        evento.preventDefault();
    });
    
    
});
async function desestablecerPerfil(){
    let entradas = document.querySelectorAll('.texto>input');
    
    for (let i = 0;i < entradas.length;i++){
        entradas[i].removeAttribute("disabled");
    }

}