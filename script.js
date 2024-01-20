const botones = document.querySelectorAll('.btn');
const pantalla = document.querySelector('#pantalla');
const mayus = document.querySelector('#mayus');

const uno = document.querySelector('.uno')
const dos = document.querySelector('.dos')
const tres = document.querySelector('.tres')
const cuatro = document.querySelector('.cuatro')
const cinco = document.querySelector('.cinco')
const seis = document.querySelector('.seis')
const siete = document.querySelector('.siete')
const ocho = document.querySelector('.ocho')
const nueve = document.querySelector('.nueve')
const diez = document.querySelector('.diez')
const once = document.querySelector('.once')


botones.forEach(boton => {
  boton.addEventListener('click', function() {
    if (boton.id === 'borrar') {
      pantalla.textContent = pantalla.textContent.slice(0, -1); //si el id es boraar el contenido será un slice -1 es decir de la posición 0 a la última posición-1
      return;
    }

    if (boton.id === 'espacio') { //si el id del btn es espacio se agergará un espacio
      pantalla.textContent += ' ';
      return;
    }

    if (pantalla.textContent === 'Usa las teclas para escribir!') { //1 si el contenido de la pnatalla es ese el contenido será = al contenido del botón, 
      pantalla.textContent = boton.textContent;
    } else {
      pantalla.textContent += boton.textContent;                    //si es diferente ya se van concatenando
    }
  });
});

mayus.addEventListener('click', function() {
  mayus.classList.toggle('active'); // turnamos la clase active(que la creamos aqui mismo no hace falta definirla en el css) al adrle click se activará y se desactivará



  //FORMA 1 DE PONER MAYUSCULAS
  if (mayus.classList.contains('active')) { // si la contiene(si está activa)
   //cambiar fondo
    mayus.style.backgroundColor = 'lightblue'; // cambiaremos el color del fondo del btn(para que el usuario vea que está activada)
    
    //cambiar valores
    uno.textContent ='!'; //cabiamos estos valores para simular que es un tecaldo real
    dos.textContent ='"';
    tres.textContent ='·';
    cuatro.textContent ='$';
    cinco.textContent ='%';
    seis.textContent ='&';
    siete.textContent ='/';
    ocho.textContent ='(';
    nueve.textContent =')';
    diez.textContent ='=';
    once.textContent ='?';
    
    //cambair a mayus
    botones.forEach(boton => {
      boton.textContent = boton.textContent.toUpperCase(); //for each para aplicarlo en cada valor
    });
  } else {
    mayus.style.backgroundColor = 'white';

    uno.textContent ='1';
    dos.textContent ='2';
    tres.textContent ='3';
    cuatro.textContent ='4';
    cinco.textContent ='5';
    seis.textContent ='6';
    siete.textContent ='7';
    ocho.textContent ='8';
    nueve.textContent ='9';
    diez.textContent ='10';
    once.textContent ='11';
    
    botones.forEach(boton => {
      boton.textContent = boton.textContent.toLowerCase();
    });
  }
});

  //Forma 2
/*
mayus.addEventListener('click', function() {
  mayus.classList.toggle('fondo');
  botones.forEach(boton => {
    boton.textContent = mayus.classList.contains('fondo') ? boton.textContent.toUpperCase() : boton.textContent.toLowerCase();
  });
}); */
















































