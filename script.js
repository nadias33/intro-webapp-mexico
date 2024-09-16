// Obtener referencias a los elementos del DOM
const greenInput = document.getElementById('green');
const whiteInput = document.getElementById('white');
const redInput = document.getElementById('red');

const greenSection = document.getElementById('greenSection');
const whiteSection = document.getElementById('whiteSection');
const redSection = document.getElementById('redSection');

const hexGreen = document.getElementById('hexGreen');
const hexWhite = document.getElementById('hexWhite');
const hexRed = document.getElementById('hexRed');

// Función para convertir valores RGB a código hexadecimal
function rgbToHex(value) {
    let hex = parseInt(value).toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
}

// Función para actualizar el color de cada sección de la bandera
function updateFlag() {
    const g = parseInt(greenInput.value);
    const w = parseInt(whiteInput.value);
    const r = parseInt(redInput.value);

    // Actualizar colores de cada sección de la bandera
    greenSection.style.backgroundColor = `rgb(0, ${g}, 0)`;
    whiteSection.style.backgroundColor = `rgb(${w}, ${w}, ${w})`;
    redSection.style.backgroundColor = `rgb(${r}, 0, 0)`;

    // Actualizar códigos hexadecimales en pantalla
    hexGreen.textContent = `#00${rgbToHex(g)}00`;
    hexWhite.textContent = `#${rgbToHex(w)}${rgbToHex(w)}${rgbToHex(w)}`;
    hexRed.textContent = `#${rgbToHex(r)}0000`;
}

// Añadir eventos a los controles de rango
greenInput.addEventListener('input', updateFlag);
whiteInput.addEventListener('input', updateFlag);
redInput.addEventListener('input', updateFlag);
