// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES:
let nombres = []; // Almacenamos los nombres

// FUNCIONES: 

function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value; 
    nombreIngresado = nombreIngresado.charAt(0).toUpperCase() + nombreIngresado.slice(1); // slice toma desde el indice en 1 en adelante, ya que debemos concatenar
    if(nombreIngresado.trim() != "" && !nombres.includes(nombreIngresado)){ // .trim() elimina los espacios en blanco al principio y al final de una cadena de texto
        nombres.push(nombreIngresado);
        console.log(nombres);

        // Mostrar nombres debajo de el input:
        mostrarEnPagina(nombreIngresado); // con el metodo # 1
        //mostrarListaPagina(nombreIngresado) // con el metodo # 2
        
    }else if(nombres.includes(nombreIngresado)){
        alertify.alert(`Opps!!`, `El nombre "${nombreIngresado}" ya está en tu lista. ¡Recuerda no repetirlo!`);
    }else if (nombreIngresado.trim() == ""){
        // alert("Debes ingresar un nombre valido y que no hayas ingresado");
        alertify.alert("Opps!!", "¡No puedes dejar este campo en blanco!");
    }
    // Limpiar el apartado de ingreso de datos:
    limpiarInput();
}
// PRIMER METODO PARA MOSTRAR EN PANTALLA: 
function mostrarEnPagina(nombre){
    let textoLista = document.getElementById("listaAmigos"); 
    let nuevoElemento = document.createElement("li"); 
    let simbolo = document.createTextNode("🔶 "); //🔶▪️🔸
    nuevoElemento.appendChild(simbolo);
    nuevoElemento.appendChild(document.createTextNode(nombre)); 
    textoLista.appendChild(nuevoElemento); 
}

// SEGUNDO METODO PARA MOSTRAR EN PANTALLA: 
/*
function mostrarListaPagina(){
    let textoLista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    for(let i = 0; i < nombres.length; i++){
        nuevoElemento.textContent = nombres[i];
        textoLista.appendChild(nuevoElemento)
    }
}
*/

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    if(nombres.length > 0){
        // Indice Aleatorio
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        
        // Mostrar Ganador:
        let textoGanador = document.querySelector(".section-title"); 
        textoGanador.innerHTML = `TU AMIGO SECRETO ES: ${(nombres[indiceAleatorio]).toUpperCase()}`
        
        // Llamar la Función de Celebración 
        celebrarGanador();   
    }else{
        // alert("Debes ingresar nombres a la lista antes de realizar el sorteo");
        alertify.alert("Opps!!", "Debes ingresar nombres a la lista antes de realizar el sorteo");
    }
}

// CELEBRACIÓN confetti


function celebrarGanador() {
    confetti({
        spread: 360,
        ticks: 100, /* Duración */
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 400,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "https://particles.js.org/images/fruits/apple.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/avocado.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/banana.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/berries.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/cherry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/grapes.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/lemon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/orange.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/peach.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pear.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/pepper.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/plum.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/star.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/strawberry.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon.png",
              width: 32,
              height: 32,
            },
            {
              src: "https://particles.js.org/images/fruits/watermelon_slice.png",
              width: 32,
              height: 32,
            },
          ],
        },
      });
}
