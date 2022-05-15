

//Funciones de requerimiento 1

function sumarVistas() {
    let vectorCheck = document.querySelectorAll('input[type=checkbox]')
    console.log("El tamaño es: "+vectorCheck.length)
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
            if (vistasValor > 0) {
                vistasValor = parseInt(vistasValor) - parseInt(1)
                vistas[i].innerHTML = vistasValor
                actualizarPorcentaje()
            }
        }
    }
}

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
    let tabla = document.getElementById('idTabla').insertRow(-1)
    let nombreSerie = document.getElementById("unNombre").value
    let cantidadTemporadas = document.getElementById("cantidadTemporadas").value
    console.log(nombreSerie.value)
    console.log(cantidadTemporadas.value)
    let col1 = tabla.insertCell(0)
    let col2 = tabla.insertCell(1)
    let col3 = tabla.insertCell(2)
    let col4 = tabla.insertCell(3)
    let col5 = tabla.insertCell(4)

    col1.innerHTML = '<input type="checkbox" name="tilde" value="selecciona" >';
    col2.innerHTML = nombreSerie;
    col3.innerHTML = cantidadTemporadas
    col4.innerHTML = 0; 
    col5.innerHTML = 0 +"%";

    col3.classList.add("temporada");
    col4.classList.add("vistas");
    col5.classList.add("porcentaje");
}

// Funciones de requerimiento 3

function actualizarPorcentaje() {
    const temporadas = document.getElementsByClassName('temporada');
    const tVistas = document.getElementsByClassName('vistas');
    const porcentaje = document.getElementsByClassName('porcentaje');
    for (let i = 0; i < temporadas.length; i++) {
        const element = temporadas[i].innerHTML;
        calculo = (tVistas[i].innerHTML/element) * 100;
        console.log(calculo + "%")
        porcentaje[i].innerHTML = Math.trunc(calculo) + "%"
    }   
}

actualizarPorcentaje();


