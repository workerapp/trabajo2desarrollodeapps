
function checkPalindrome() {
    var inputString = document.getElementById('inputString').value.toLowerCase();
    var reversedString = inputString.split('').reverse().join('');

    if (inputString === reversedString) {
        document.getElementById('result').innerText = '¡Es un palíndromo!';
    } else {
        document.getElementById('result').innerText = 'No es un palíndromo';
    }
}


function compararNumeros() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    // Comparar los números
    if (num1 > num2) {
        document.getElementById('resultado').innerText = 'El número ' + num1 + ' es mayor.';
    } else if (num2 > num1) {
        document.getElementById('resultado').innerText = 'El número ' + num2 + ' es mayor.';
    } else {
        document.getElementById('resultado').innerText = 'Ambos números son iguales.';
    }
}

function organizarVocales() {
    var inputFrase = document.getElementById('inputFrase').value.toLowerCase();
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    var resultado = {};

    // Inicializar el objeto resultado con las vocales como claves
    for (var i = 0; i < vocales.length; i++) {
        resultado[vocales[i]] = 0;
    }

    // Contar la cantidad de cada vocal en la frase
    for (var j = 0; j < inputFrase.length; j++) {
        var letra = inputFrase[j];
        if (vocales.includes(letra)) {
            resultado[letra]++;
        }
    }

    // Mostrar el resultado organizado
    var output = '<h2>Vocales Organizadas:</h2>';
    for (var k = 0; k < vocales.length; k++) {
        output += '<p>' + vocales[k] + ': ' + resultado[vocales[k]] + '</p>';
    }

    document.getElementById('resultado').innerHTML = output;
}

document.addEventListener("DOMContentLoaded", function () {
    obtenerURL();
});

function obtenerURL() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var url = JSON.parse(xhr.responseText);
            mostrarURL(url);
        }
    };
    xhr.open('GET', 'url.php', true);
    xhr.send();
}

function mostrarURL(url) {
    var urlDisplay = document.getElementById('urlDisplay');
    urlDisplay.innerText = 'URL de la página: ' + url;
}

document.addEventListener("DOMContentLoaded", function () {
    obtenerURL();
});

function obtenerURL() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var url = JSON.parse(xhr.responseText);
            mostrarURL(url);
        }
    };
    xhr.open('GET', 'url.php', true);
    xhr.send();
}

function mostrarURL(url) {
    var urlDisplay = document.getElementById('urlDisplay');
    urlDisplay.innerText = 'URL de la página: ' + url;
}

function mostrarContenidos() {
    var url = document.getElementById('inputURL').value;
    
    if (url.trim() === '') {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var contenidos = xhr.responseText;
                mostrarContenidosEnPagina(contenidos);
            } else {
                alert('Error al cargar la URL. Asegúrate de que la URL sea válida.');
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function mostrarContenidosEnPagina(contenidos) {
    var contenidosDiv = document.getElementById('contenidos');
    contenidosDiv.innerHTML = '<h2>Contenidos:</h2>' + contenidos;
}

document.addEventListener("DOMContentLoaded", function () {
    obtenerURL();
});

function obtenerURL() {
    var xhr = new XMLHttpRequest();
    mostrarEstado('No iniciada');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var url = JSON.parse(xhr.responseText);
                mostrarURL(url);
                mostrarEstado('Completada');
            } else {
                alert('Error al cargar la URL. Asegúrate de que la URL sea válida.');
                mostrarEstado('Error');
            }
        } else {
            mostrarEstado('Cargando...');
        }
    };

    xhr.open('GET', 'url.php', true);
    xhr.send();
}

function mostrarURL(url) {
    var urlDisplay = document.getElementById('urlDisplay');
    urlDisplay.innerText = 'URL de la página: ' + url;
}

function mostrarContenidos() {
    var url = document.getElementById('inputURL').value;
    
    if (url.trim() === '') {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    var xhr = new XMLHttpRequest();
    mostrarEstado('No iniciada');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var contenidos = xhr.responseText;
                mostrarContenidosEnPagina(contenidos);
                mostrarEstado('Completada');
            } else {
                alert('Error al cargar la URL. Asegúrate de que la URL sea válida.');
                mostrarEstado('Error');
            }
        } else {
            mostrarEstado('Cargando...');
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function mostrarContenidosEnPagina(contenidos) {
    var contenidosDiv = document.getElementById('contenidos');
    contenidosDiv.innerHTML = '<h2>Contenidos:</h2>' + contenidos;
}

function realizarPeticion() {
    var url = document.getElementById('inputURL').value;

    if (url.trim() === '') {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    var xhr = new XMLHttpRequest();
    mostrarEstado('No iniciada');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var respuesta = xhr.responseText;
                mostrarRespuesta(respuesta);
                mostrarEstado('Completada');
            } else {
                alert('Error al cargar la URL. Asegúrate de que la URL sea válida.');
                mostrarEstado('Error');
            }
        } else {
            mostrarEstado('Cargando...');
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function mostrarRespuesta(respuesta) {
    var respuestaDiv = document.getElementById('respuesta');
    respuestaDiv.innerHTML = '<h2>Respuesta:</h2>' + respuesta;
}

function mostrarEstado(estado) {
    var estadosDiv = document.getElementById('estados');
    estadosDiv.innerText = 'Estado de la petición: ' + estado;
}

function obtenerCabeceras() {
    var url = document.getElementById('inputURL').value;

    if (url.trim() === '') {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var cabeceras = obtenerCabecerasHTTP(xhr);
                mostrarCabeceras(cabeceras);
            } else {
                alert('Error al cargar la URL. Asegúrate de que la URL sea válida.');
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function obtenerCabecerasHTTP(xhr) {
    var cabeceras = xhr.getAllResponseHeaders();
    var arrayCabeceras = cabeceras.split('\n');
    var objetoCabeceras = {};

    for (var i = 0; i < arrayCabeceras.length; i++) {
        var linea = arrayCabeceras[i];
        var indiceSeparador = linea.indexOf(':');
        if (indiceSeparador > 0) {
            var nombreCabecera = linea.substring(0, indiceSeparador).trim();
            var valorCabecera = linea.substring(indiceSeparador + 1).trim();
            objetoCabeceras[nombreCabecera] = valorCabecera;
        }
    }

    return objetoCabeceras;
}

function mostrarCabeceras(cabeceras) {
    var cabecerasDiv = document.getElementById('cabeceras');
    cabecerasDiv.innerHTML = '<h2>Cabeceras HTTP de la Respuesta:</h2>';
    
    for (var nombre in cabeceras) {
        var valor = cabeceras[nombre];
        cabecerasDiv.innerHTML += `<strong>${nombre}:</strong> ${valor}<br>`;
    }
}

function obtenerCodigoEstado() {
    var url = document.getElementById('inputURL').value;

    if (url.trim() === '') {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            mostrarCodigoEstado(xhr);
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function mostrarCodigoEstado(xhr) {
    var codigoEstadoDiv = document.getElementById('codigoEstado');
    codigoEstadoDiv.innerHTML = '<h2>Código de Estado de la Respuesta:</h2>';
    codigoEstadoDiv.innerHTML += `<strong>Código:</strong> ${xhr.status} - ${xhr.statusText}<br>`;
}




