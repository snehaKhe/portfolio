let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function redButton() {
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function yellowButton() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function greenButton() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473";
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#199473";
}