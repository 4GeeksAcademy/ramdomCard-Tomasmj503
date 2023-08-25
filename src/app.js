/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // -----Crear una carta aleatoria------
  // crear los elementos en el html
  // conectar los elementos con el JS
  // generar pintas aleatorias
  // generar numeros y letras aleatorias

  let pintas = ["\u2663", "\u2665", "\u2666", "\u2660"];
  // creo pintas aleatorias con el array de los simbolos
  let pintasAleatorias = pintas[Math.floor(Math.random() * pintas.length)];
  // creo una variable para almacenar el color de la pinta que se genera de manera aleatoria
  // llamo la funcion obtenercolorpintas y paso como parametro la variable pintasAleatorias
  // que almacena los simbolos de forma aleatoria
  let colorDeLaPinta = ObtenerColorPintas(pintasAleatorias);
  // llevo las pintas aleatorias al html con el id Pintas
  document.getElementById("pintas").textContent = pintasAleatorias;
  // llevo al html un valor aleatorio  red o black de las pintasAleatorias que tiene la funcionObtenerColorPinta
  document.getElementById("pintas").style.color = colorDeLaPinta;

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  // genero los numeros y letras aleatorias de A hasta K
  let numerosAleatorios = numbers[Math.floor(Math.random() * numbers.length)];
  // al Id carta llevo los numeros aleatorios al html
  document.getElementById("carta").textContent = numerosAleatorios;
  // vuelvo el color del numero igual que el de la pinta pasando la variable coloDeLaPinta que
  // tiene almacenado la funcion obtenerColor y el parametro de pintasAleatorias
  document.getElementById("carta").style.color = numberPintaSameColor(
    colorDeLaPinta
  );
  // traido la variable pintas aleatorias que tiene almaceado los simbolos de manera ramdom
  // conecto con el id pintas2 para que se muestre en el html
  document.getElementById("pintas2").textContent = pintasAleatorias;

  document.getElementById("pintas2").style.color = colorDeLaPinta;
};

// funcion para obtner el color de las pintas, hago un array con los colores y hago que sea aleatorio
function ObtenerColorPintas(pintas) {
  let colors = ["red", "black"];
  let colorAleatorio = colors[Math.floor(Math.random() * colors.length)];
  return colorAleatorio;
}
// funcion para que el numero sea igual al del simbolo
function numberPintaSameColor(pinta) {
  if (pinta === "black") return "black";
  else return "red";
}
