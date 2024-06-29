const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', evento => {
    validarCamposObligatorios();
    evento.preventDefault();
})
/*
function validarCamposObligatorios(){
    let nombreUsuario = document.querySelector("#nombreUsuario").value;
    let clave = document.querySelector('#clave').value;
    
    let soloPalabras = /^[a-zA-Z\s]+$/

    let datosValidos = true; // bandera
    let msjError =  "Datos invalidos: ";

    if (nombreUsuario == "" || !soloPalabras.test(nombreUsuario)){
        datosValidos = false;
        msjError += "nombre de usuario,";
    }
    if (clave == ""){
        datosValidos = false;
        msjError += "calve, ";
    }

    let mensaje = document.querySelector("#rtaForm");
     
    if(datosValidos){
        mensaje.innerHTML = "";
    }
    if(!datosValidos){
         mensaje.innerHTML = msjError;
    }
}*/