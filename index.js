function accion(){
    console.log('Esta fucionando mi botón');
    var ancla = document.getElementsByClassName('nav_ul');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('ocultar');
    }}

function acciones(){
    console.log('Esta fucionando mi botón');
    var enlace = document.getElementsByClassName('nav_ul');
    for(var i = 0; i < enlace.length; i++){
        enlace[i].classList.toggle('ocultar');
    }}