function directores() {
    const leerServicio=()=>{
        let rutaServicio = "http://localhost/servicioisil/directores.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                llenarTabla(data)
            })
    }

    const llenarTabla = (data) => {
        //console.log(data)
        let contenidoTabla = ""
        data.map(item => {//item representa a cada fila
            //console.log(item.nombre)
            let fila = "<tr>"
            fila += "<td>" + item.iddirector + "</td>"
            fila += "<td>" + item.nombres + "</td>"
            fila += "<td>" + item.peliculas + "</td>"
            fila += "<td><i class='bi bi-pencil icono-editar' title='Editar' data-bs-toggle='modal' data-bs-target='#updateModal'></i></td>"
            fila += "<td><i class='bi bi-x-lg icono-eliminar' title='Eliminar'></i></td>"
            fila += "<td></td>"
            fila += "<td></td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        }
        )
        document.getElementById("tbody-directores").innerHTML = contenidoTabla
        let iconosEditar=document.querySelectorAll(".icono-carrito")
        iconosEditar.forEach((iEditar, index)=>{
            iEditar.addEventListener("click",()=>llenarCajasUpdate(index, 1))
        })
    }
    const insertDirector=()=>{
        let nombres= txtDirectorNombres.value
        let peliculas=txtDirectorPeliculas.value
        let formData=new FormData()
        formData.append("nombres",nombres)
        formData.append("peliculas",peliculas)

        let rutaServicio = "http://localhost/servicioisil/directoresinsert.php"
        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("Se ha agregado un nuevo director con codigo: "+data)
                document.querySelector("#insertmodal .btn-close").click()
                leerServicio()
            })
        
    }
    leerServicio()
    document.getElementById("formInsert").addEventListener("submit", ()=>insertDirector())
}
directores()