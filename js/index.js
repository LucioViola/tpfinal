$( document ).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });


    edad=parseInt(prompt("Introduce tu edad"));
    if (edad <18){
        alert('No tiene permiso para oeprar en este sitio');
        window.close();
    } else { 
        alert('Bienvenido a nuestra Tienda Online');
    };
   
});