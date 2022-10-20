//Para abrir y cerrar el menú

localStorage.setItem("monedero", 0);
localStorage.setItem("cantLibro1", 0);
localStorage.setItem("cantLibro2", 0);
localStorage.setItem("cantLibro3", 0);
localStorage.setItem("cantLibro4", 0);
localStorage.setItem("cantLibro5", 0);
localStorage.setItem("cantLibro6", 0);
localStorage.setItem("cantLibro7", 0);
localStorage.setItem("cantLibro8", 0);
localStorage.setItem("cantLibro9", 0);
localStorage.setItem("cantLibro10", 0);
localStorage.setItem("cantLibro11", 0);
localStorage.setItem("cantLibro12", 0);
localStorage.setItem("cantLibro13", 0);
localStorage.setItem("cantLibro14", 0);
localStorage.setItem("cantLibro15", 0);
localStorage.setItem("cantLibro16", 0);
localStorage.setItem("cantLibro17", 0);
localStorage.setItem("cantLibro18", 0);

function accion() {
  let prueba = document.getElementsByClassName("btn-menu");
  for (let i = 0; i < prueba.length; i++) {
    prueba[i].classList.toggle("ocultar");
  }
  let ancla = document.getElementsByClassName("nav_ul");
  for (let i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("ocultar");
  }
}

function acciones() {
  let enlace = document.getElementsByClassName("nav_ul");
  for (let i = 0; i < enlace.length; i++) {
    enlace[i].classList.toggle("ocultar");
  }
  let prueba = document.getElementsByClassName("btn-menu");
  for (let i = 0; i < prueba.length; i++) {
    prueba[i].classList.toggle("ocultar");
  }
}

//Validación del formulario

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    return true;
  } else {
    return false;
  }
}

let form = document.querySelector("#form");
form.addEventListener("submit", btnSubmit);

async function btnSubmit(e) {
  e.preventDefault();
  let form = new FormData(this);
  let response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  let nombre = document.getElementById("nameCliente").value;
  let apellido = document.getElementById("lastName").value;
  let email = document.getElementById("emailCliente").value;
  let pais = document.getElementById("pais").value;
  let textConsulta = document.getElementById("txt-area").value;
  let elementoActivo = document.querySelector('input[name="motivo"]:checked');

  if (nombre.length == 0 || nombre.length === "") {
    Toastify({
      text: "Debe ingresar su nombre",
      duration: 3000,
      destination: "index.html",
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #E9EBEE, #4267B3)",
      },
    }).showToast();
    return;
  } else {
    if (apellido.length == 0 || nombre.length === "") {
      Toastify({
        text: "Debe ingresar su apellido",
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #E9EBEE, #4267B3)",
        },
      }).showToast();
      return;
    } else {
      if (email.length == 0 || email.length === "") {
        Toastify({
          text: "Debe ingresar su email",
          duration: 3000,
          destination: "index.html",
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #E9EBEE, #4267B3)",
          },
        }).showToast();
        return;
      } else {
        if (pais.length == 0 || nombre.length === "") {
          Toastify({
            text: "Debe ingresar su pais",
            duration: 3000,
            destination: "index.html",
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #E9EBEE, #4267B3)",
            },
          }).showToast();
          return;
        } else {
          if (textConsulta.length == 0 || nombre.length === "") {
            Toastify({
              text: "Debe ingresar su sugerencia",
              duration: 3000,
              destination: "index.html",
              newWindow: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(to right, #E9EBEE, #4267B3)",
              },
            }).showToast();
            return;
          } else {
            if (elementoActivo) {
                if (response.ok) {
                    this.reset();
                    Toastify({
                      text: "Gracias contactarnos, pronto tendrás una respuesta",
                      duration: 3000,
                      destination: "index.html",
                      newWindow: true,
                      gravity: "top",
                      position: "right",
                      stopOnFocus: true,
                      style: {
                        background: "linear-gradient(to right, #E9EBEE, #4267B3)",
                      },
                    }).showToast();
                }
            } else {
              Toastify({
                text: "Seleccione su motivo por favor",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #E9EBEE, #4267B3)",
                },
              }).showToast();
            }
          }
        }
      }
    }
  }
}


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

function tercerMapa() {
  mapa3.style.display = "flex";
  mapa1.style.display = "none";
  mapa2.style.display = "none";
}

function primerMapa() {
  mapa1.style.display = "flex";
  mapa3.style.display = "none";
  mapa2.style.display = "none";
}

function segundoMapa() {
  mapa2.style.display = "flex";
  mapa3.style.display = "none";
  mapa1.style.display = "none";
}

//Seleccionar una card

function verInfoCard() {
  document.getElementById("libros").style.display = "flex";
  document.getElementById("libro1").style.display = "flex";
  document.getElementById("libro2").style.display = "none";
  document.getElementById("libro3").style.display = "none";
  document.getElementById("triangulo1").style.display = "flex";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
}

function verInfoCard2() {
  document.getElementById("libros").style.display = "flex";
  document.getElementById("libro1").style.display = "none";
  document.getElementById("libro2").style.display = "flex";
  document.getElementById("libro3").style.display = "none";
  document.getElementById("triangulo2").style.display = "flex";
  document.getElementById("triangulo1").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
}

function verInfoCard3() {
  document.getElementById("libros").style.display = "flex";
  document.getElementById("libro1").style.display = "none";
  document.getElementById("libro2").style.display = "none";
  document.getElementById("libro3").style.display = "flex";
  document.getElementById("triangulo3").style.display = "flex";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo1").style.display = "none";
}

function verInfoCard4() {
  document.getElementById("libros2").style.display = "flex";
  document.getElementById("libro4").style.display = "flex";
  document.getElementById("libro5").style.display = "none";
  document.getElementById("libro6").style.display = "none";
  document.getElementById("triangulo4").style.display = "flex";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo6").style.display = "none";
}

function verInfoCard5() {
  document.getElementById("libros2").style.display = "flex";
  document.getElementById("libro4").style.display = "none";
  document.getElementById("libro5").style.display = "flex";
  document.getElementById("libro6").style.display = "none";
  document.getElementById("triangulo5").style.display = "flex";
  document.getElementById("triangulo6").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
}

function verInfoCard6() {
  document.getElementById("libros2").style.display = "flex";
  document.getElementById("libro4").style.display = "none";
  document.getElementById("libro5").style.display = "none";
  document.getElementById("libro6").style.display = "flex";
  document.getElementById("triangulo6").style.display = "flex";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
}

function verInfoCard7() {
  document.getElementById("libros3").style.display = "flex";
  document.getElementById("libro7").style.display = "flex";
  document.getElementById("libro8").style.display = "none";
  document.getElementById("libro9").style.display = "none";
  document.getElementById("triangulo7").style.display = "flex";
  document.getElementById("triangulo8").style.display = "none";
  document.getElementById("triangulo9").style.display = "none";
}

function verInfoCard8() {
  document.getElementById("libros3").style.display = "flex";
  document.getElementById("libro7").style.display = "none";
  document.getElementById("libro8").style.display = "flex";
  document.getElementById("libro9").style.display = "none";
  document.getElementById("triangulo8").style.display = "flex";
  document.getElementById("triangulo7").style.display = "none";
  document.getElementById("triangulo9").style.display = "none";
}

function verInfoCard9() {
  document.getElementById("libros3").style.display = "flex";
  document.getElementById("libro7").style.display = "none";
  document.getElementById("libro8").style.display = "none";
  document.getElementById("libro9").style.display = "flex";
  document.getElementById("triangulo9").style.display = "flex";
  document.getElementById("triangulo8").style.display = "none";
  document.getElementById("triangulo7").style.display = "none";
}

function verInfoCard10() {
  document.getElementById("libros4").style.display = "flex";
  document.getElementById("libro10").style.display = "flex";
  document.getElementById("libro11").style.display = "none";
  document.getElementById("libro12").style.display = "none";
  document.getElementById("triangulo10").style.display = "flex";
  document.getElementById("triangulo11").style.display = "none";
  document.getElementById("triangulo12").style.display = "none";
}

function verInfoCard11() {
  document.getElementById("libros4").style.display = "flex";
  document.getElementById("libro10").style.display = "none";
  document.getElementById("libro11").style.display = "flex";
  document.getElementById("libro12").style.display = "none";
  document.getElementById("triangulo11").style.display = "flex";
  document.getElementById("triangulo10").style.display = "none";
  document.getElementById("triangulo12").style.display = "none";
}

function verInfoCard12() {
  document.getElementById("libros4").style.display = "flex";
  document.getElementById("libro10").style.display = "none";
  document.getElementById("libro11").style.display = "none";
  document.getElementById("libro12").style.display = "flex";
  document.getElementById("triangulo12").style.display = "flex";
  document.getElementById("triangulo11").style.display = "none";
  document.getElementById("triangulo10").style.display = "none";
}

function verInfoCard13() {
  document.getElementById("libros5").style.display = "flex";
  document.getElementById("libro13").style.display = "flex";
  document.getElementById("libro14").style.display = "none";
  document.getElementById("libro15").style.display = "none";
  document.getElementById("triangulo13").style.display = "flex";
  document.getElementById("triangulo14").style.display = "none";
  document.getElementById("triangulo15").style.display = "none";
}

function verInfoCard14() {
  document.getElementById("libros5").style.display = "flex";
  document.getElementById("libro13").style.display = "none";
  document.getElementById("libro14").style.display = "flex";
  document.getElementById("libro15").style.display = "none";
  document.getElementById("triangulo14").style.display = "flex";
  document.getElementById("triangulo13").style.display = "none";
  document.getElementById("triangulo15").style.display = "none";
}

function verInfoCard15() {
  document.getElementById("libros5").style.display = "flex";
  document.getElementById("libro13").style.display = "none";
  document.getElementById("libro14").style.display = "none";
  document.getElementById("libro15").style.display = "flex";
  document.getElementById("triangulo15").style.display = "flex";
  document.getElementById("triangulo13").style.display = "none";
  document.getElementById("triangulo14").style.display = "none";
}

function verInfoCard16() {
  document.getElementById("libros6").style.display = "flex";
  document.getElementById("libro16").style.display = "flex";
  document.getElementById("libro17").style.display = "none";
  document.getElementById("libro18").style.display = "none";
  document.getElementById("triangulo16").style.display = "flex";
  document.getElementById("triangulo17").style.display = "none";
  document.getElementById("triangulo18").style.display = "none";
}

function verInfoCard17() {
  document.getElementById("libros6").style.display = "flex";
  document.getElementById("libro16").style.display = "none";
  document.getElementById("libro17").style.display = "flex";
  document.getElementById("libro18").style.display = "none";
  document.getElementById("triangulo17").style.display = "flex";
  document.getElementById("triangulo16").style.display = "none";
  document.getElementById("triangulo18").style.display = "none";
}

function verInfoCard18() {
  document.getElementById("libros6").style.display = "flex";
  document.getElementById("libro16").style.display = "none";
  document.getElementById("libro17").style.display = "none";
  document.getElementById("libro18").style.display = "flex";
  document.getElementById("triangulo18").style.display = "flex";
  document.getElementById("triangulo16").style.display = "none";
  document.getElementById("triangulo17").style.display = "none";
}

function cerrar() {
  document.getElementById("libros").style.display = "none";
  document.getElementById("triangulo1").style.display = "none";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
  document.getElementById("libros2").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo6").style.display = "none";
  document.getElementById("libros3").style.display = "none";
  document.getElementById("triangulo7").style.display = "none";
  document.getElementById("triangulo8").style.display = "none";
  document.getElementById("triangulo9").style.display = "none";
  document.getElementById("libros4").style.display = "none";
  document.getElementById("triangulo10").style.display = "none";
  document.getElementById("triangulo11").style.display = "none";
  document.getElementById("triangulo12").style.display = "none";
  document.getElementById("libros5").style.display = "none";
  document.getElementById("triangulo13").style.display = "none";
  document.getElementById("triangulo14").style.display = "none";
  document.getElementById("triangulo15").style.display = "none";
  document.getElementById("libros6").style.display = "none";
  document.getElementById("triangulo16").style.display = "none";
  document.getElementById("triangulo17").style.display = "none";
  document.getElementById("triangulo18").style.display = "none";
}

function compraLibro() {
  Toastify({
    text: "Has comprado este libro!",
    duration: 3000,
    destination: "https://facebook.com",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function suma_libro(num, id) {
  let suma = parseInt(num);
  let nombreId = "cantLibro" + id;
  let nuevaCant = document.getElementById(nombreId);
  nuevaCant.innerText = parseInt(nuevaCant.innerText) + 1;
  localStorage.setItem(nombreId, localStorage.getItem(nombreId) + 1);
  localStorage.setItem(
    "monedero",
    parseInt(parseInt(localStorage.getItem("monedero")) + suma)
  );
  Toastify({
    text: "Producto agregado al carrito!",
    duration: 3000,
    gravity: "up",
    position: "right",
  }).showToast();
}

function quita_libro(num, id) {
  let resta = parseInt(num);
  let nombreId = "cantLibro" + id;
  let nuevaCant = document.getElementById(nombreId);
  if (0 == parseInt(nuevaCant.innerText))
    Toastify({
      text: "No puedes hacer eso, agrega productos primero",
      duration: 3000,
      gravity: "up",
      position: "right",
    }).showToast();
  else {
    nuevaCant.innerText = parseInt(nuevaCant.innerText) - 1;
    localStorage.setItem(nombreId, localStorage.getItem(nombreId) - 1);
    localStorage.setItem(
      "monedero",
      parseInt(parseInt(localStorage.getItem("monedero")) - resta)
    );
    Toastify({
      text: "Producto removido con exito",
      duration: 3000,
      gravity: "up",
      position: "right",
    }).showToast();
  }
}
