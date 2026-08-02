let ataqueJugador
let ataqueEnemigo = aleatorio(1 , 3)

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)

    const botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click" , function() {
        ataqueFuego();
        ataqueAleatorio();
    });
    const botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click" ,  function() {
        ataqueAgua();
        ataqueAleatorio();
    });
    const botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click" , function() {
        ataqueTierra();
        ataqueAleatorio();
    });
}

function seleccionarMascotaJugador() {
    const inputMascota = document.querySelector(`input[name="mascotas"]:checked`)

    if (inputMascota){
        const labelMascota = document.querySelector(`label[for="${inputMascota.id}"]`)
        let mascotaNombre = document.getElementById("mascota-jugador")

        mascotaNombre.innerHTML = labelMascota.textContent

    } else {
        alert("¡SELECCIONATE PERDER!")

    }
    seleccionarMascotaEnemigo()
}

function aleatorio(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1 , 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaEnemigo == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaEnemigo == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaEnemigo == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaEnemigo == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
        
}

function ataqueAleatorio(){

    if (ataqueEnemigo == 1){
        ataqueEnemigo = "Fuego"
   } else if (ataqueEnemigo == 2) {
        ataqueEnemigo = "Agua"
   } else {
        ataqueEnemigo = "Tierra"
   }
   alert(ataqueEnemigo)
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    alert(ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    alert(ataqueJugador)
}

function ataquePc(){
    if(ataqueEnemigo == 1)
        ataqueEnemigo = "Fuego"
    else if(ataqueEnemigo == 2)
        ataqueEnemigo = "Agua"
    else {
        ataqueEnemigo = "Tierra"
    }
}

window.addEventListener("load" , iniciarJuego)

