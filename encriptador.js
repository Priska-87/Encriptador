// Objetivo: Encriptar y Codificar

// Crear función

// Conectar Función a su respectivo botón html

// Capturar el texto escrito en el campo de input o textarea del html

// Desarrollar la lógica de la encriptación

//Mostrar en la pantalla el resultado de texto encriptado

//Extra: Botón reiniciar

document.getElementById("encriptar__boton").addEventListener("click", encriptar_texto);
document.getElementById("desencriptar__boton").addEventListener("click", desencriptar_texto);
document.getElementById("copiar").addEventListener("click", copiar_al_portapapeles);
document.getElementById("reiniciar").addEventListener("click", reiniciar_pagina);

function validarTexto(texto) {
    // Expresión regular para verificar que solo contiene letras minúsculas y espacios
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptar_texto() {
    const inputText = document.getElementById("input-text").value;
    
    if (!validarTexto(inputText)) {
        alert("El texto debe contener solo letras minúsculas y no debe tener acentos ni caracteres especiales.");
        return;
    }
    
    const encriptador = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarSalida(encriptador);
}

function desencriptar_texto() {
    const inputText = document.getElementById("input-text").value;
    
    if (!validarTexto(inputText)) {
        alert("El texto debe contener solo letras minúsculas y no debe tener acentos ni caracteres especiales.");
        return;
    }

    const desencriptador = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarSalida(desencriptador);
}

function mostrarSalida(text) {
    document.querySelector(".caja__texto__cifrado").style.display = "none";
    document.getElementById("contenedor__texto__de__salida").style.display = "block";
    document.getElementById("texto__de__salida").innerText = text;
}

function copiar_al_portapapeles() {
    const text = document.getElementById("texto__de__salida").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar texto: ", err);
    });
}

function reiniciar_pagina() {
    document.getElementById("input-text").value = "";
    document.getElementById("texto__de__salida").innerText = "";
    document.querySelector(".caja__texto__cifrado").style.display = "block";
    document.getElementById("contenedor__texto__de__salida").style.display = "none";
}

