// origen de los datos
const origen = "http://127.0.0.1:5000/api-proyecto/sucursales"

//evento a escuchar
window.addEventListener('DOMContentLoaded', evento =>{
    cargarDatos(origen);
    evento.preventDefault();
});
//carga de los datos
async function cargarDatos(url){
    let datos = await fetch(url)
                        .then(respuesta => respuesta.json())
                        .then(datos => datos);
    let apartado = document.querySelector('#seccion');
    
    for (d of datos){
        let articulo = document.createElement('article')
        articulo.classList.add('sucursal');
        let nombreSucursal = document.createElement('h3');
        nombreSucursal.innerHTML = `${d.nombre}`;
        let direccionSucursal = document.createElement('p');
        direccionSucursal.innerHTML = `${d.direccion}`;
        let horarioSucursal = document.createElement('p');
        horarioSucursal.innerHTML = `${d.horario}`;
        
        articulo.appendChild(nombreSucursal);
        articulo.appendChild(direccionSucursal);
        articulo.appendChild(horarioSucursal);
        apartado.appendChild(articulo);
    }
    
}