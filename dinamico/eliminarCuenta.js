document.addEventListener('DOMContentLoaded', function() {
    const boton_eliminar_cuenta = document.getElementById('borrar');
    boton_eliminar_cuenta.addEventListener('click', evento => {
        solicitar_eliminacion();
        
        evento.preventDefault();
    });
    
    
});
async function solicitar_eliminacion(){



    let envio = {
        method: "DELETE",
        body: JSON.stringify({
        mail: sessionStorage.getItem('mailDeSesion')
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }
        let resultado = await fetch('http://127.0.0.1:5000/api-proyecto/eliminar-cuenta', envio)
        .then(respuesta => respuesta.json())
        .then(resultado => resultado)
        .catch(error => console.warn(error.status));
        console.log(resultado) 
}

document.addEventListener('DOMContentLoaded', function() {
    const boton_cerrar_sesion = document.querySelector('.cerrarSesion');
    boton_cerrar_sesion.addEventListener('click', evento => {
        sessionStorage.setItem('mailDeSesion','')
        
        //evento.preventDefault();
    });
    
    
});