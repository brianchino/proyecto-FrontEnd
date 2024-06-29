const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', evento => {
    validarCamposObligatorios();
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
        mensaje.innerHTML = "registrado con exito";
    }
    if(!datosValidos){
         mensaje.innerHTML = msjError;
    }
}