function seleccionarMascotaJugador(){

    if(document.getElementById("hipodoge").checked == true){
        alert("!Tu mascota es: Hipodoge...!")
    } 
    else if(document.getElementById("capipepo").checked == true){
        alert("!Tu mascota es: Capipepo...!")
    }
    else if(document.getElementById("ratigueya").checked == true){
        alert("!Tu mascota es: Ratigueya...!")
    } 
    else if(document.getElementById("langostelvis").checked == true){
        alert("!Tu mascota es: Langostelvis...!")
    } 
    else if(document.getElementById("tucapalma").checked == true){
        alert("!Tu mascota es: Tucapalma...!")
    } 
    else if(document.getElementById("pydos").checked == true){
        alert("!Tu mascota es: Pydos...!")
    } else {
        alert("Selecciona una mascota")
    }

}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
}
window.addEventListener("load" , iniciarJuego)