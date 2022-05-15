

//Funciones de requerimiento 1

function sumarVistas() {
    let vectorCheck = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < vectorCheck.length; i++) {
        const unCheck = vectorCheck[i];
        if (unCheck.checked){
            let vistas = document.getElementsByClassName("vistas")
            let cantidadTemporadas = document.getElementsByClassName("temporada")
            let vistasValor = vistas[i].innerHTML
            let temporadasValor = cantidadTemporadas[i].innerHTML
            if (vistasValor < temporadasValor) {
                vistasValor = parseInt(vistasValor) + parseInt(1)
                vistas[i].innerHTML = vistasValor
                actualizarPorcentaje()
            }
        }

    }
}

function restarVistas() {
    let vectorCheck = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < vectorCheck.length; i++) {
        const unCheck = vectorCheck[i];
        if (unCheck.checked){
            let vistas = document.getElementsByClassName("vistas")
            let cantidadTemporadas = document.getElementsByClassName("temporada")
            let vistasValor = vistas[i].innerHTML
            let temporadasValor = cantidadTemporadas[i].innerHTML
            if (vistasValor > 0) {
                vistasValor = parseInt(vistasValor) - parseInt(1)
                vistas[i].innerHTML = vistasValor
                actualizarPorcentaje()
            }
        }
    }
}


/*function buscarPalabra() {
    const unaPalabra = document.getElementById("palabra").value;
    console.log(unaPalabra)
    const unaTabla = document.querySelectorAll('tr');
    console.log(unaTabla)
    for (let i = 0; i < unaTabla.length; i++) {
        const unaFila = unaTabla[i];
        console.log(unaFila)
        const elementos = document.querySelectorAll('td');
        for (let j = 0; j < elementos.length; j++) {
            const element = elementos[j];
            console.log(element.innerHTML)
            if (unaPalabra == element.innerHTML) {
                console.log("Hay una coincidencia")
                element.style.color = "red";
            }
            else {
                console.log("No se ha encontrado una serie")
                element.style.color = "white";
            }
        }
    }
}
*/

function buscarPalabra() {
    const unaPalabra = document.getElementById("palabra").value;
    console.log(unaPalabra)
    const unaTabla = document.querySelectorAll('tr');
    console.log(unaTabla)
    const tds = document.querySelectorAll('td');
    for (let j = 0; j < tds.length; j++) {
        const unTd = tds[j];
        console.log(unTd.innerHTML)
        if (unaPalabra.toLowerCase() == unTd.innerHTML.toLowerCase()) {
            console.log("Hay una coincidencia")
            unTd.style.color = "red";
            unTd.style.backgroundColor = "white";
        }
        else {
            console.log("No se ha encontrado una serie")
            unTd.style.color = "white";
            unTd.style.backgroundColor = "#1B2631";
        }
    }
    
}

// Funciones de requerimiento 2

function guardarSerie(){
    const unaTabla = document.querySelectorAll('tr')
    const unNombre = document.getElementById("unNombre").value
    const numeroTemporadas = document.getElementById('cantidadTemporadas').value
    unaTabla.insertRow = '<td></td><td>'+unNombre+'</td><td>'+numeroTemporadas+'</td><td>'+"0"+'</td><td>'+"0%"+'</td>'
  }


// Funciones de requerimiento 3

function actualizarPorcentaje() {
    const temporadas = document.getElementsByClassName('temporada');
    const tVistas = document.getElementsByClassName('vistas');
    const porcentaje = document.getElementsByClassName('porcentaje');
    var calculo = 0
    for (let i = 0; i < temporadas.length; i++) {
        const element = temporadas[i].innerHTML;
        calculo = (tVistas[i].innerHTML/element) * 100;
        console.log(calculo + "%")
        porcentaje[i].innerHTML = Math.trunc(calculo) + "%"
    }   
}

actualizarPorcentaje();


