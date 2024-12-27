document.getElementById("menu-item-home").addEventListener("click", () => {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script = document.createElement("script")
            script.src = "pages/home.js"
            document.getElementById("main-content").appendChild(script)
        })
})

document.getElementById("menu-item-home").click()

document.getElementById("menu-item-inversiones").addEventListener("click", () => {
    fetch("pages/inversiones.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script = document.createElement("script")
            script.src = "pages/inversiones.js"
            document.getElementById("main-content").appendChild(script)
        })
})

document.getElementById("menu-item-proveedores").addEventListener("click", () => {
    fetch("pages/proveedores.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
        })
})

document.getElementById("menu-item-empleados").addEventListener("click", () => {
    fetch("pages/empleados.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script = document.createElement("script")
            script.src = "pages/empleados.js"
            document.getElementById("main-content").appendChild(script)
        })
})

document.getElementById("menu-item-tienda").addEventListener("click", () => {
    fetch("pages/tienda.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script = document.createElement("script")
            script.src = "pages/tienda.js"
            document.getElementById("main-content").appendChild(script)
        })

})
document.getElementById("menu-item-directores").addEventListener("click", () => {
    fetch("pages/directores.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script = document.createElement("script")
            script.src = "pages/directores.js"
            document.getElementById("main-content").appendChild(script)
        })

})
