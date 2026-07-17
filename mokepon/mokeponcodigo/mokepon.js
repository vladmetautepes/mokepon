function seleccionarMascotaJugador(){
    const inputMascota = document.querySelector(`input[name="mascotas"]:checked`)

    if (inputMascota){
        const labelMascota = document.querySelector(`label[for="${inputMascota.id}"]`)

        alert("seleccionaste " + labelMascota.textContent + "...!")

    } else {
        alert("¡SELECCIONATE PERDER!")

    }
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
}
window.addEventListener("load" , iniciarJuego)
