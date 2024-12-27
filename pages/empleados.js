function empleados() {
    let rutaServicio = "http://localhost/servicioisil/empleados.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            llenarCuadricula(data)
        })
    
    const llenarCuadricula = (data) => {
        let contenidoCuadricula = ""
        data.map(item => {
            let card = "<div class='col'>"
            card += "<div class='card'>"
            card += "<img src='http://localhost/servicioisil/empleados/" + item.foto +"' class='card-img-top' alt='...'>"
            card += "<div class='card-body'>"
            card += "<h5 class='card-title'>" + item.nombres + " " + item.apellidos +"</h5>"
            card += "<p class='card-text'>" + item.cargo + "</p>"
            card += "</div></div></div>"
            contenidoCuadricula += card
        })
        document.getElementById("grid-card-empleados").innerHTML = contenidoCuadricula
    }
}
empleados()