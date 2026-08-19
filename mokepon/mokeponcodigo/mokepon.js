let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

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
}8

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
    ataqueEnemigo = aleatorio(1,3)

    if (ataqueEnemigo == 1){
        ataqueEnemigo = "FUEGO 🔥"
   } 
   else if (ataqueEnemigo == 2) {
        ataqueEnemigo = "AGUA 💧"
   }
   else {
        ataqueEnemigo = "TIERRA 🌱"
   }

   combate()
}

function combate() {
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    let spanVidasJugador = document.getElementById("vidas-jugador")

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")

    } else if(ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO 🔥"
}

function ataqueAgua(){
    ataqueJugador = "AGUA 💧"
}

function ataqueTierra(){
    ataqueJugador = "TIERRA 🌱"
}


function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultado

    sectionMensajes.appendChild(parrafo);
}

window.addEventListener("load" , iniciarJuego)

