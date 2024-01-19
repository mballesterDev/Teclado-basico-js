const botones = document.querySelectorAll('.btn');
const pantalla = document.querySelector('#pantalla');
const mayus = document.querySelector('#mayus');

botones.forEach(boton => {
  boton.addEventListener('click', function() {
    if (boton.id === 'borrar') {
      pantalla.textContent = pantalla.textContent.slice(0, -1);
      return;
    }

    if (boton.id === 'espacio') {
      pantalla.textContent += ' ';
      return;
    }

    if (pantalla.textContent === 'Usa las teclas para escribir!') {
      pantalla.textContent = boton.textContent;
    } else {
      pantalla.textContent += boton.textContent;
    }
  });
});

mayus.addEventListener('click', function() {
  mayus.classList.toggle('active');



  //FORMA 1 DE PONER MAYUSCULAS
  if (mayus.classList.contains('active')) {
    mayus.style.backgroundColor = 'lightblue';
    botones.forEach(boton => {
      boton.textContent = boton.textContent.toUpperCase();
    });
  } else {
    mayus.style.backgroundColor = 'white';
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
















































