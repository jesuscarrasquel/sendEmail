const mostrarPreguntas1 = () => {
    document.getElementById("oculto-1").style.display = 'block';
    document.getElementById("oculto-2").style.display = 'block';
    document.getElementById("oculto-3").style.display = 'none';

}

const ocultarPreguntas = () => {
    // document.getElementById("oculto-1").style.display = 'none';
    document.getElementById("oculto-1").style.display = 'block';
    document.getElementById("oculto-2").style.display = 'none';
    document.getElementById("oculto-3").style.display = 'none';

}

const mostrarPreguntas2 = () => {
    document.getElementById("oculto-1").style.display = 'block';
    document.getElementById("oculto-2").style.display = 'block';
    document.getElementById("oculto-3").style.display = 'block';
}

const mostrarPreguntas4 = () => {
    document.getElementById("oculto-1").style.display = 'block';
    document.getElementById("oculto-2").style.display = 'none';
    document.getElementById("oculto-3").style.display = 'block';
}

const mostrarDatos = () => {
    document.getElementById("contenedor-datos").style.display = 'block';

}

const mostrarZip = () => {
    document.getElementById("zip-code").style.display = 'block';
    document.getElementById("optional").style.display = 'block';

}

const quitarZip = () => {
    document.getElementById("zip-code").style.display = 'none';
    document.getElementById("optional").style.display = 'none';

}

const mostrarStates = () => {
    document.getElementById("zip-code").style.display = 'none';
    document.getElementById("optional").style.display = 'none';
    document.getElementById("oculto-3").style.display = 'block';

}




