//Para abrir y cerrar el menú

function accion(){
    let ancla = document.getElementsByClassName('nav_ul');
    for(let i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('ocultar');
    }}

function acciones(){
    let enlace = document.getElementsByClassName('nav_ul');
    for(let i = 0; i < enlace.length; i++){
        enlace[i].classList.toggle('ocultar');
    }}

    
//Validación del formulario

let form = document.querySelector('#form');
form.addEventListener('submit', btnSubmit);

    async function btnSubmit(e){
        e.preventDefault()
        let form = new FormData(this);
        let response = await fetch(this.action , {
            method: this.method,
            body: form,
            headers: {
                'Accept':'application/json'
            }
        })

        let nombre = document.getElementById('nameCliente').value;
        let apellido = document.getElementById('lastName').value;
        let email = document.getElementById('emailCliente').value;
        let pais = document.getElementById('pais').value;
        let textConsulta = document.getElementById('txt-area').value;
        let elementoActivo = document.querySelector('input[name="motivo"]:checked');

        if (nombre.length == 0 || nombre.length === ''){
            alert("Debe ingresar su nombre");
            return;
        }

        if (apellido.length == 0 || nombre.length === ''){
            alert("Debe ingresar su apellido");
            return;
        }

        if (email.length == 0 || nombre.length === ''){
            alert("Debe ingresar su email");
            return;
        }


        if (pais.length == 0 || nombre.length === ''){
            alert("Debe ingresar su país");
            return;
        }
          
        if(elementoActivo) {
        } else {
            alert('Debe seleccionar un motivo');
        }

        if (textConsulta.length == 0 || nombre.length === ''){
            alert("Debe ingresar su consulta o sugerencia");
            return;
        }
   
        if (response.ok){
            this.reset();
            alert('Gracias contactarnos, pronto tendrás una respuesta');
            
    } 
};



// Selección de los mapas

let card3 = document.getElementById("card-3");
let card2 = document.getElementById("card-2");
let card1 = document.getElementById("card-1");
let mapa1 = document.getElementById("mapa_1");
let mapa2 = document.getElementById("mapa_2");
let mapa3 = document.getElementById("mapa_3");

card1.addEventListener("click", primerMapa);
card2.addEventListener("click", segundoMapa);
card3.addEventListener("click", tercerMapa);

function tercerMapa(){
    mapa3.style.display = "flex";
    mapa1.style.display = "none";
    mapa2.style.display = "none";
}

function primerMapa(){
    mapa1.style.display = "flex";
    mapa3.style.display = "none";
    mapa2.style.display = "none";
}

function segundoMapa(){
    mapa2.style.display = "flex";
    mapa3.style.display = "none";
    mapa1.style.display = "none";
}





