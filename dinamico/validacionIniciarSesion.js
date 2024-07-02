
const formulario = document.querySelector('#formulario');



formulario.addEventListener('submit', evento => {
    validarCampos();
    evento.preventDefault();
})

function validarCampos(){
    // let nombreUsuario = document.querySelector("#nombreUsuario").value;
    // let clave = document.querySelector('#clave').value;
    
    // let soloPalabras = /^[a-zA-Z\s]+$/

    // let datosValidos = true; // bandera
    // let msjError =  "Datos invalidos: ";

    // if (nombreUsuario == "" || !soloPalabras.test(nombreUsuario)){
    //     datosValidos = false;
    //     msjError += "nombre de usuario,";
    // }
    // if (clave == ""){
    //     datosValidos = false;
    //     msjError += "calve, ";
    // }

    // let mensaje = document.querySelector("#rtaForm");
     
    // if(datosValidos){
    //     mensaje.innerHTML = "";
    // }
    // if(!datosValidos){
    //      mensaje.innerHTML = msjError;
    // }
    let entradas = document.querySelectorAll('.mail , .clave');
        
        let datos = {}
        datos[entradas[0].getAttribute('id')] = entradas[0].value;
        
        datos[entradas[1].getAttribute('id')] = entradas[1].value;
        
        enviarDatos("http://127.0.0.1:5000/api-proyecto/ingreso",datos);
}
async function enviarDatos(destino,datos){
    let envio = {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }
    let resultado = await fetch(destino, envio)
                        .then(respuesta => respuesta.json())
                        .then(resultado => resultado)
                        .catch(error => console.warn(error.status));
    if (resultado.status == 200) {
        window.location.href = './perfil.html'
        sessionStorage.setItem('mailDeSesion',datos['mail']);
    } else {
        alert('Revisá los datos ingresados');
    }         
}

