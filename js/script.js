//Declaramos Variables 
var menu_lateral = document.getElementById("kmmenu_lateral");
var boton_abrir = document.getElementById("kmbtn_abrir");
var body = document.getElementById("body");

//Declaramos la funcion
function abrir_cerrar_menu(){
    body.classList.toggle("body_move");
    menu_lateral.classList.toggle("kmmenu__lateral_move");
}
//Llamamos el evento
document.getElementById("kmbtn_abrir").addEventListener("click", abrir_cerrar_menu);

//Utilizando el prompt

const botonCons = document.getElementById("kmboton");
botonCons.addEventListener("click",IngresarNombre);

const h1 = document.getElementById("kmh1");

//Funcion ingresar nombre de usuario
function IngresarNombre(){
    const nombre = prompt("Ingresa cualquier nombre de Usuario");
    agregarNombre(nombre);
}

//Funcion agregar nombre
function agregarNombre(nombre){
    kmh1.textContent = ("Bienvenido a Emula.me, " + nombre+".");
}

//Utilizando filtrado por categoria

function mostrarElementosPorCategoria(categoria){
    var elementos = document.querySelectorAll(".kmrom");

    elementos.forEach(function(kmrom){
        if(categoria === "todos" || kmrom.classList.contains(categoria)){
            kmrom.style.display = "block";
        } else {
            kmrom.style.display = "none";
        }
    });
}

document.getElementById("kmbtn-GBA").addEventListener("click",function(){
    mostrarElementosPorCategoria("GBA");
});

document.getElementById("kmbtn-GBC").addEventListener("click",function(){
    mostrarElementosPorCategoria("GBC");
});

document.getElementById("kmbtn-GB").addEventListener("click",function(){
    mostrarElementosPorCategoria("GB");
});

document.getElementById("kmbtn-todos").addEventListener("click",function(){
    mostrarElementosPorCategoria("todos");
});

mostrarElementosPorCategoria("todos");


// Evita que al darle en los enlaces regrese a la pagina principal de la pagina
// Boton GBA
document.getElementById("kmbtn-GBA").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarElementosPorCategoria("GBA");
});

//Boton GBC
document.getElementById("kmbtn-GBC").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarElementosPorCategoria("GBC");
});

//Boton GB
document.getElementById("kmbtn-GB").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarElementosPorCategoria("GB");
});

//Boton todos
document.getElementById("kmbtn-todos").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarElementosPorCategoria("todos");
});

// Ordenar por orden alfabetico
var container = document.querySelector(".kmromcontainer");

  //Lista de todos los juegos
  var juegos = Array.from(container.querySelectorAll(".kmrom"));

  // Ordena los juegos alfabéticamente
  juegos.sort(function (a, b) {
    var nombreA = a.querySelector("a").textContent.trim().toLowerCase();
    var nombreB = b.querySelector("a").textContent.trim().toLowerCase();
    return nombreA.localeCompare(nombreB);
  });

  // Vuelve a agregar los juegos al contenedor en el nuevo orden
  juegos.forEach(function (juego) {
    container.appendChild(juego);
  });

  
//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        menu_lateral.classList.remove("kmmenu__lateral_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        menu_lateral.classList.add("kmmenu__lateral_move");
    }

});