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
            if (vistasValor < parseInt(temporadasValor)) {
                vistasValor = parseInt(vistasValor) + 1
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
                vistasValor = parseInt(vistasValor) - 1
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

function validarIngresos(unaSerie,cantidad) {
    if (unaSerie == "" || cantidad == "") {
        return true
    }
}

function guardarSerie(){
    let tabla = document.getElementById('idTabla').insertRow(-1)
    let nombreSerie = document.getElementById("unNombre").value
    let cantidadTemporadas = document.getElementById("cantidadTemporadas").value
    console.log(nombreSerie)
    console.log(cantidadTemporadas)
    if(validarIngresos(nombreSerie,cantidadTemporadas)) {
        alert("Complete todos los campos para poder editar por favor")
    } else {
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
    
        col2.classList.add("nombreDeSerie");
        col3.classList.add("temporada");
        col4.classList.add("vistas");
        col5.classList.add("porcentaje");
    }
}

function editarSerie() {
    let vectorCheck = document.querySelectorAll('input[type=checkbox]')
    for (let i = 0; i < vectorCheck.length; i++) {
        if (vectorCheck[i].checked) {
            let nombreEditado = document.getElementById('serieEditar').value
            let temporadaEditada = document.getElementById('temporadasEditar').value
            let vistasEditada = document.getElementById('vistasEditar').value
            let nombreDeSeries = document.getElementsByClassName('nombreDeSerie')
            let temporadaDeSeries = document.getElementsByClassName('temporada')
            let vistasDeSeries = document.getElementsByClassName('vistas')
            if (nombreEditado != "") {
                nombreDeSeries[i].innerHTML = nombreEditado
            }
            if (validarIngresos(temporadaEditada,vistasEditada)){
                alert("Ingrese las temporadas de la serie y las vistas para poder editar por favor")
            } else {
                if (parseInt(temporadaEditada) >= parseInt(vistasEditada)){
                    temporadaDeSeries[i].innerHTML = parseInt(temporadaEditada)
                    vistasDeSeries[i].innerHTML = parseInt(vistasEditada)
                    actualizarPorcentaje()
                } else {
                    alert("La cantidad de temporadas vistas debe ser menor o igual a la cantidad que tiene la serie")
                }
            }
        }
    } 
}

function validador(evento){
    var numero = (evento.which) ? evento.which : evento.keyCode;
    resultado = 0
    if(numero>=48 && numero<=57) {
      resultado = true;
    } else
    {
        alert("Debe ingresar un numero entero");
        resultado = false;
    }
    return resultado
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


