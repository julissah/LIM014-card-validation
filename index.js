import validator from './validator.js';
// creamos una variable para almacenar el id del boton con el metodo getElementById
window.addEventListener("load", cargaPagina);
const btnHome = document.getElementById('btnHome');

// Usamos el metodo addEventListener para darle funcionalidad al boton, donde pondremos 2 parametros
// El 1er parámetro es un string (evento) al seleccionar :click
// El 2do parámetro es la función

function cargaPagina() {
    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click',buy);
    
}

btnHome.addEventListener('click',home);

function buy() {
    let numberCard = document.getElementById('numberCard').value;
    let isValid = validator.isValid(numberCard);
    let maskify = validator.maskify(numberCard);
    let modal = document.getElementById("myModal");
    let modal1 = document.getElementById("myModal1");
    // let span = document.getElementsByClassName("close")[0];

    if (numberCard){
        
        if(isValid == true){
            
            let inputNombre = document.getElementById("numberCard");
            inputNombre.value = maskify;
            document.getElementById('bEnviar').classList.add('hide');
            document.getElementById('bInicio').classList.remove('hide');
            modal.style.display = "block";

            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
        }
        else{
            modal1.style.display = "block";
            window.onclick = function(event) {
                if (event.target == modal1) {
                  modal1.style.display = "none";
                }
              }
        }
    }
    else{
        alert('Ingrese el número de tarjeta');
    }
}

function home(){

    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
    document.getElementById('bEnviar').classList.remove('hide');
    document.getElementById('bInicio').classList.add('hide');
}

// span.onclick = function() {
//     modal.style.display = "none";
//   }


