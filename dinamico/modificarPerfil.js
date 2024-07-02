
    const boton_modificar = document.getElementById('modificar');
    boton_modificar.addEventListener('click', evento => {
        desestablecerPerfil_modificarPerfil();
        evento.preventDefault();
    });

    const boton_enviar_modificado = document.getElementById('enviar_modificado');
    boton_enviar_modificado.addEventListener('click', evento => {
        if(validarCamposObligatorios_modificarPerfil()){
            validarCampos_modificarPerfil();
        }
        evento.preventDefault();
    });
    

async function desestablecerPerfil_modificarPerfil(){
    let entradas = document.querySelectorAll('.texto>input');
    
    for (let i = 0;i < entradas.length;i++){
        entradas[i].removeAttribute("disabled");
    }

}

    
    
    

async function enviarDatos_modificarPerfil(destino,datos){
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
    console.log(resultado)    
}
async function validarCampos_modificarPerfil(){
    let entradas = document.querySelectorAll('.texto>input');
    let datos = {}

    datos[entradas[0].getAttribute('id')] = entradas[0].value; 
    datos[entradas[1].getAttribute('id')] = entradas[1].value;
    datos[entradas[2].getAttribute('id')] = entradas[2].value;
    datos[entradas[3].getAttribute('id')] = entradas[3].value;
    datos['mail'] = sessionStorage.getItem('mailDeSesion')
    enviarDatos_modificarPerfil("http://127.0.0.1:5000/api-proyecto/modificar-perfil",datos);
    establecerPerfil_modificarPerfil(entradas);
}
async function establecerPerfil_modificarPerfil(entradas){
    let boton_borrar = document.querySelector('#borrar');
    let boton_modificar = document.querySelector('#modificar');
    let boton_enviar_modificado = document.querySelector('#enviar_modificado');
    let boton_enviar = document.querySelector('#enviar')
    boton_borrar.removeAttribute('hidden');
    boton_modificar.removeAttribute('hidden');
    boton_enviar_modificado.removeAttribute('hidden');
    boton_enviar.setAttribute('hidden','true')
    for (let i = 0;i < entradas.length;i++){
        entradas[i].setAttribute('disabled','true');
    }
}
async function validarCamposObligatorios_modificarPerfil(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let dni = document.querySelector("#dni").value;

   let soloPalabras = /^[a-zA-Z\s]+$/

   let datosValidos = true; // bandera
   let msjError =  "Datos invalidos: ";

   if(dni == "" || !Number.isInteger(Number(dni)) || dni.length != 8){
       datosValidos = false;
       msjError += "dni, ";
   }
   if (nombre == "" || !soloPalabras.test(nombre)){
       datosValidos = false;
       msjError += "nombre, ";
   }
   if (apellido == "" || !soloPalabras.test(apellido)){
       datosValidos = false;
       msjError += "apellido, ";
   }
   respuesta = document.querySelector('#rtaForm');
   if(datosValidos){
       respuesta.innerHTML = "datos validos";
   }
   else{
       respuesta.innerHTML = msjError
   }
   return datosValidos
}
