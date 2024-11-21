const url = "https://6733d78da042ab85d1182803.mockapi.io/tpiLab3/ventas";


async function listar(id) {
    let cadUrl;
    if(isNaN(id))
      cadUrl= url;
    else 
      cadUrl = url + "/" + id;  
    return await fetch(cadUrl)
        .then(respuesta => respuesta.json());
}

async function crear(idUsuario, emailUsuario, idProducto, nombreProducto, cantidad, fecha, despachado, talle) {

    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario, 
            emailUsuario: emailUsuario, 
            idProducto: idProducto, 
            nombreProducto: nombreProducto, 
            cantidad: cantidad, 
            fecha: fecha, 
            despachado: despachado,
            talle: talle
        })
    })
}

async function editar(id,  despachado) {

    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            despachado: despachado
        })
    })
}

async function listarVentasDespachadas(despachadas) {
    const newUrl= new URL(url);
    newUrl.searchParams.append('despachado', despachadas);
    return await fetch(newUrl)
        .then(respuesta => respuesta.json());
 
}

async function borrar(id){
  
    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
            method: 'DELETE'
       })
}


export const ventasServices = {
    listar,
    crear,
    editar,
    borrar,
    listarVentasDespachadas
}