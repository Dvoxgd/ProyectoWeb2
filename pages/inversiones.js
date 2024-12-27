function inversiones() {
    let rutaServicio = "http://localhost/servicioisil/empresasenvios.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            llenarTabla(data)
        })

    const llenarTabla = (data) => {
        //console.log(data)
        let contenidoTabla = ""
        data.map(item => {//item representa a cada fila
            //console.log(item.nombre)
            let fila = "<tr>"
            fila += "<td>" + item.idempresaenvio + "</td>"
            fila += "<td>" + item.nombre + "</td>"
            fila += "<td>" + item.telefono + "</td>"
            fila += "<td>" + item.latitud + "</td>"
            fila += "<td>" + item.longitud + "</td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        }
        )
        document.getElementById("tbody-empresaenvios").innerHTML = contenidoTabla
    }
}
inversiones()



/*********************/
/*
function pintar(){

}

const pintar = () => {

}
*/