function sumarVistas() {
    var checka = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < checka.length; i++) {
        const unCheck = checka[i];
        if (unCheck.checked){
            var vistas = document.getElementsByClassName("damianV")
            var cantidadTemporadas = document.getElementsByClassName("damianT")
            var vistasValor = vistas[i].innerHTML
            var temporadasValor = cantidadTemporadas[i].innerHTML
            if (vistasValor < temporadasValor) {
                vistasValor = parseInt(vistasValor) + parseInt(1)
                vistas[i].innerHTML = vistasValor
            }
        }

    }
}

function restarVistas() {
    var checka = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < checka.length; i++) {
        const unCheck = checka[i];
        if (unCheck.checked){
            var vistas = document.getElementsByClassName("damianV")
            var cantidadTemporadas = document.getElementsByClassName("damianT")
            var vistasValor = vistas[i].innerHTML
            var temporadasValor = cantidadTemporadas[i].innerHTML
            if (vistasValor > 0) {
                vistasValor = parseInt(vistasValor) - parseInt(1)
                vistas[i].innerHTML = vistasValor
            }
        }

    }
}

function buscarSerie() {
    var buscarPalabra = document.getElementById("palabra").innerHTML;

}


