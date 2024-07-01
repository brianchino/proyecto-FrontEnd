const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', evento => {
    validarCamposObligatorios()
    evento.preventDefault();
})

function validarCamposObligatorios(){
    // let nombre = document.querySelector("#nombre").value;
    // let apellido = document.querySelector("#apellido").value;
    // let dni = document.querySelector("#dni").value;
    let clave = document.querySelector("#clave").value;
    let clave2 = document.querySelector("#clave2").value;
    //console.log(nombre);
    //console.log(apellido);
    //console.log(dni);
    //console.log(clave);
    //console.log(clave2);
    //let soloPalabras = /^[a-zA-Z\s]+$/

    let datosValidos = true; // bandera
    let msjError =  "Datos invalidos: ";

    // if(dni == "" || !Number.isInteger(Number(dni)) || dni.length != 8){
    //     datosValidos = false;
    //     msjError += "dni, ";
    // }
    // if (nombre == "" || !soloPalabras.test(nombre)){
    //     datosValidos = false;
    //     msjError += "nombre, ";
    // }
    // if (apellido == "" || !soloPalabras.test(apellido)){
    //     datosValidos = false;
    //     msjError += "apellido, ";
    // }
    if(clave2 == "" || clave =="" || clave != clave2){
        datosValidos = false;
        msjError += "claves diferentes";
    }

    let mensaje = document.querySelector("#rtaForm");
     
    if(datosValidos){
        //transoformar en objeto
        let entradas = document.querySelectorAll('.texto>input');
        let datos = {}
        datos[entradas[0].getAttribute('id')] = entradas[0].value;
        
        datos[entradas[1].getAttribute('id')] = entradas[1].value;
        
        enviarDatos("http://127.0.0.1:5000/api-proyecto/cuenta",datos);
        mensaje.innerHTML = "registrado con exito";
        
    }
    else{
         mensaje.innerHTML = msjError;
         
    }
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
    console.log(resultado)              
}

