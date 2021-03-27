let nombreSecreto1 = "terminator";
let nombreSecreto2 = "bart";
let nombreSecreto3 = "fiona";
let nombreHacker = "elliot";

let vidas = 3000;

let contCansancio = 100;


window.onload = function () {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarVidasEnPantalla();
};


function iniciarSesion() {
 
   nombreIngresado =  prompt("Ingrese su nombre (puede usar bart, fiona, terminator o su propio nombre)");

  alert("Bienvenido/a "+nombreIngresado+" el objetivo del juego es descubrir cómo matar a Puchhy!");

  if(nombreIngresado!=nombreSecreto1&&nombreIngresado!=nombreSecreto2&&nombreIngresado!=nombreSecreto3&&nombreIngresado!=nombreHacker){

    actualizarFotoUserEnPantalla("anonimo");/*Cambiar mañana por un generico*/ 

  }else{  

    actualizarFotoUserEnPantalla(nombreIngresado);

    if(nombreIngresado==nombreHacker){

    document.getElementById("matar").style.display = "block";

           }
  
    }

      setTimeout(quitarVida,10000);

      actualizarVidasEnPantalla();

      if(contCansancio<=5&& contCansancio>0){

        envejecerlo();

      }else if(contCansancio<-20){

        matar();

      }

  }


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreIngresado;
}

function actualizarVidasEnPantalla() {
  document.getElementById("cant-vidas").innerHTML = "Energía: " + vidas;
}

function actualizarTamagochiEnPantalla() {
  document.getElementById("tamagochi").setAttribute("src", "img/Puchhy1.gif");
}

var termi = document.getElementById("terminator");

function actualizarFotoUserEnPantalla(foto) {
 termi.setAttribute("src", "img/"+foto+".jpg");
}

/***************************Funciones a completar***********/ 

var puchhy5 = document.getElementById("tamagochi");

function jugar(){

  vivir();

  contCansancio = contCansancio-10;

  vidas = vidas-3;

  actualizarVidasEnPantalla();

puchhy5.setAttribute("src", "img/Puchhy5.gif");

document.getElementById("tama-estado").innerHTML = "Puchhy Jugando Cansancio: "+contCansancio;

setTimeout(despertar,7000);

}

var puchhy8 = document.getElementById("tamagochi");


function alimentar(){

  puchhy8.setAttribute("src", "img/Puchhy8.gif");

  vivir();

  contCansancio++;

  vidas = vidas+5;

  actualizarVidasEnPantalla();

  document.getElementById("tama-estado").innerHTML = "Puchhy Comiendo Cansancio: "+contCansancio;

  setTimeout(despertar,7000);

}

var puchhy9 = document.getElementById("tamagochi");


function dormir(){

  puchhy9.setAttribute("src", "img/Puchhy9.gif");

  vivir();

  contCansancio = contCansancio +10;

  vidas = vidas +2;

  actualizarVidasEnPantalla();

  document.getElementById("tama-estado").innerHTML = "Puchhy Durmiendo Cansancio: "+contCansancio;

  setTimeout(despertar,7000);
}

var puchhy1 = document.getElementById("tamagochi");


function despertar(){

  puchhy1.setAttribute("src", "img/Puchhy1.gif");

  document.getElementById("tama-estado").innerHTML = "Puchhy Despierto Cansancio: "+contCansancio;

  vivir();

  contCansancio = contCansancio - 10;

  actualizarVidasEnPantalla();

}

var puchhy10 = document.getElementById("tamagochi");


function curar(){

  puchhy10.setAttribute("src", "img/Puchhy9.gif");

  vivir();

  contCansancio = contCansancio+20;

  vidas++;

  actualizarVidasEnPantalla();

  document.getElementById("tama-estado").innerHTML = "Puchhy Curandose Cansancio: "+contCansancio;

}

var puchhy11 = document.getElementById("tamagochi");

function matar(){

  vidas = 0;

  actualizarVidasEnPantalla();

  puchhy10.setAttribute("src", "img/Puchhy7.gif");

  document.getElementById("tama-estado").innerHTML = "Puchhy Murió";

 alert("Puchhy murió!!! Lo mataste!!!");
}

function quitarVida(){

vidas--;

}

var puchhy12 = document.getElementById("tamagochi");

function envejecerlo(){

  puchhy10.setAttribute("src", "img/Puchhy6.gif");

  document.getElementById("tama-estado").innerHTML = "Puchhy está viejito Cansancio: "+contCansancio;

  vidas = 15;

  actualizarVidasEnPantalla();

}

function vivir(){

  setTimeout(quitarVida,10000);

  actualizarVidasEnPantalla();

  if(contCansancio<=3){

    envejecerlo();

  }else if(contCansancio<=0){

    matar();

  }

}