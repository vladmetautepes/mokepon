 function aleatorio(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado ="Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 📰"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "MAL"
    }
    return resultado
}

function combate(jugadaJugador , jugadaPC) {
    let partida = 0
    if (jugadaJugador == jugadaPC){
        partida = "EMPATE"
    } else if (((jugadaJugador - jugadaPC) == 1) || ((jugadaJugador - pc) == -2)) {
        partida = "GANASTE"
        triunfos = triunfos + 1
    } else {
        partida = "PERDISTE"
        derrotas = derrotas + 1
    }  
    return partida
}

let jugador = 0
let pc = 0
let triunfos = 0
let derrotas = 0
            
while (triunfos < 3 && derrotas < 3) {
    pc = aleatorio(1 , 3)
    jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera")

    // alert("Tú - pc eligen" + eleccion)

    alert("Tú eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
  
    //COMBATE

    alert(combate(jugador , pc))

}
alert("Ganaste : " + triunfos + " veces. Perdiste : " + derrotas + " veces.")