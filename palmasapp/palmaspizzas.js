




document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#enviar").addEventListener("click", e => {e.preventDefault();





      // TOTAL
      
      const total = document.querySelector("#total").value;
      
      
      // DATOS
      const nombre = document.querySelector("#nombre").value;
      const telefono = document.querySelector("#telefono").value;
      const formadepago = document.querySelector("#formadepago").value;
      const direccion = document.querySelector("#direccion").value;
      const concuantocancela = document.querySelector("#concuantocancela").value;
        
      // FORMATO
      const pizzauno = document.querySelector("#pizzaunoX").value;
      const pizzados = document.querySelector("#pizzadosX").value;
      
      // PIZZAS
      
      const armatupizzauno = document.querySelector("#ingredientsX1").value;
      const armatupizzados = document.querySelector("#ingredientsX2").value;
      
      const chillianinput = document.querySelector("#chillian-input").value;
      const pollobbqinput = document.querySelector("#pollobbq-input").value;
      const italianainput = document.querySelector("#italiana-input").value;
      const cheeseburgerinput = document.querySelector("#cheeseburger-input").value;
      const hawaianainput = document.querySelector("#hawaiana-input").value;
      const superbeefinput = document.querySelector("#superbeef-input").value;
      const lucopizzainput = document.querySelector("#lucopizza-input").value;
      const napolitanainput = document.querySelector("#napolitana-input").value;
      const superpepperoniinput = document.querySelector("#superpepperoni-input").value;
      const vegetarianainput = document.querySelector("#vegetariana-input").value;
      
      
      
      // CANTIDAD
      
      const cantidadchillianfamiliar = document.querySelector("#cantidad-pizza-chillian-familiar").value;
      const cantidadpollobbqfamiliar = document.querySelector("#cantidad-pizza-pollobbq-familiar").value;
      const cantidaditalianafamiliar = document.querySelector("#cantidad-pizza-italiana-familiar").value;
      const cantidadcheeseburgerfamiliar = document.querySelector("#cantidad-pizza-cheeseburger-familiar").value;
      const cantidadhawaianafamiliar = document.querySelector("#cantidad-pizza-hawaiana-familiar").value;
      const cantidadsuperbeeffamiliar = document.querySelector("#cantidad-pizza-superbeef-familiar").value;
      const cantidadlucopizzafamiliar = document.querySelector("#cantidad-pizza-lucopizza-familiar").value;
      const cantidadnapolitanafamiliar = document.querySelector("#cantidad-pizza-napolitana-familiar").value;
      const cantidadsuperpepperonifamiliar = document.querySelector("#cantidad-pizza-superpepperoni-familiar").value;
      const cantidadvegetarianafamiliar = document.querySelector("#cantidad-pizza-vegetariana-familiar").value;
      

      const cantidadchillianmediana = document.querySelector("#cantidad-pizza-chillian-mediana").value;
      const cantidadpollobbqmediana = document.querySelector("#cantidad-pizza-pollobbq-mediana").value;
      const cantidaditalianamediana = document.querySelector("#cantidad-pizza-italiana-mediana").value;
      const cantidadcheeseburgermediana = document.querySelector("#cantidad-pizza-cheeseburger-mediana").value;
      const cantidadhawaianamediana = document.querySelector("#cantidad-pizza-hawaiana-mediana").value;
      const cantidadsuperbeefmediana = document.querySelector("#cantidad-pizza-superbeef-mediana").value;
      const cantidadlucopizzamediana = document.querySelector("#cantidad-pizza-lucopizza-mediana").value;
      const cantidadnapolitanamediana = document.querySelector("#cantidad-pizza-napolitana-mediana").value;
      const cantidadsuperpepperonimediana = document.querySelector("#cantidad-pizza-superpepperoni-mediana").value;
      const cantidadvegetarianamediana = document.querySelector("#cantidad-pizza-vegetariana-mediana").value;
      
      
      // TAMAÑO FAMILIAR
      const chillianfamiliar = document.querySelector("#chilliantamañofamiliar").value;
      const pollobbqfamiliar = document.querySelector("#pollobbqtamañofamiliar").value;
      const italianafamiliar = document.querySelector("#italianatamañofamiliar").value;
      const cheeseburgerfamiliar = document.querySelector("#cheeseburgertamañofamiliar").value;
      const hawaianafamiliar = document.querySelector("#hawaianatamañofamiliar").value;
      const superbeeffamiliar = document.querySelector("#superbeeftamañofamiliar").value;
      const lucopizzafamiliar = document.querySelector("#lucopizzatamañofamiliar").value;
      const napolitanafamiliar = document.querySelector("#napolitanatamañofamiliar").value;
      const superpepperonifamiliar = document.querySelector("#superpepperonitamañofamiliar").value;
      const vegetarianafamiliar = document.querySelector("#vegetarianatamañofamiliar").value;
      
      // TAMAÑO MEDIANA
      const chillianmediana = document.querySelector("#chilliantamañomediana").value;
      const pollobbqmediana = document.querySelector("#pollobbqtamañomediana").value;
      const italianamediana = document.querySelector("#italianatamañomediana").value;
      const cheeseburgermediana = document.querySelector("#cheeseburgertamañomediana").value;
      const hawaianamediana = document.querySelector("#hawaianatamañomediana").value;
      const superbeefmediana = document.querySelector("#superbeeftamañomediana").value;
      const lucopizzamediana= document.querySelector("#lucopizzatamañomediana").value;
      const napolitanamediana = document.querySelector("#napolitanatamañomediana").value;
      const superpepperonimediana = document.querySelector("#superpepperonitamañomediana").value;
      const vegetarianamediana = document.querySelector("#vegetarianatamañomediana").value;
      
      
      const resp = document.querySelector("#respuesta");
        
      const pagare = document.querySelector("#pagare").value;
        
        
      resp.classList.remove("fail");
      resp.classList.remove("send");
      
      const url = `https://api.whatsapp.com/send?phone=56952323555&text=
        *🍕=Palmas Pizza=🍕*%0A
        👤${nombre} %0A%0A
        ☎️${telefono}%0A%0A
        *Forma de Pago:*%0A
        ${formadepago}%0A%0A
      ${pagare}${concuantocancela}%0A
      *Dirección*:+%0A
      ${direccion}%0A%0A
        ---------------%0A
        🛎️== *PEDIDO* == 🛎️%0A
_ ${cantidadchillianmediana}${cantidadchillianfamiliar}${chillianinput}${chillianfamiliar}${chillianmediana}
${cantidadpollobbqmediana}${cantidadpollobbqfamiliar}${pollobbqinput}${pollobbqfamiliar}${pollobbqmediana}
${cantidaditalianamediana}${cantidaditalianafamiliar}${italianainput}${italianafamiliar}${italianamediana}
${cantidadcheeseburgermediana}${cantidadcheeseburgerfamiliar}${cheeseburgerinput}${cheeseburgerfamiliar}${cheeseburgermediana}
${cantidadhawaianamediana}${cantidadhawaianafamiliar}${hawaianainput}${hawaianafamiliar}${hawaianamediana}
${cantidadsuperbeefmediana}${cantidadsuperbeeffamiliar}${superbeefinput}${superbeeffamiliar}${superbeefmediana}
${cantidadlucopizzamediana}${cantidadlucopizzafamiliar}${lucopizzainput}${lucopizzafamiliar}${lucopizzamediana}
${cantidadnapolitanamediana}${cantidadnapolitanafamiliar}${napolitanainput}${napolitanafamiliar}${napolitanamediana}
${cantidadsuperpepperonimediana}${cantidadsuperpepperonifamiliar}${superpepperoniinput}${superpepperonifamiliar}${superpepperonimediana}
${cantidadvegetarianamediana}${cantidadvegetarianafamiliar}${vegetarianainput}${vegetarianafamiliar}${vegetarianamediana}%0A
${pizzauno}${armatupizzauno}${armatupizzados}${pizzados} _%0A
        🛎️==FIN==🛎️%0A
        💴 *SubTotal:* _$${total}_ *(Sin Delivery)*%0A%0A
        *ENVÍA ESTE MENSAJE ➡️➡️*`
      
      
      window.open(url);
      });
      
      
});


function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("direccion", direccion);
}

// Recuperar los datos al cargar la página
window.onload = function () {
    const nombreGuardado = localStorage.getItem("nombre") || "";
    const telefonoGuardado = localStorage.getItem("telefono") || "";
    const direccionGuardada = localStorage.getItem("direccion") || "";

    document.getElementById("nombre").value = nombreGuardado;
    document.getElementById("telefono").value = telefonoGuardado;
    document.getElementById("direccion").value = direccionGuardada;
};



function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => toggleModal(button.getAttribute('data-open')));
});

document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => toggleModal(button.getAttribute('data-close')));
});


function verpedido() {
  const modal = document.getElementById('pedido');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}


// ARMA TU PIZZA COMANDS

function armatupizza() {

  document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = false;

}

function armatupizzaZ(){
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = false;
}

function borrararmatupizza() {
  document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = true;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;

}

function agregararmatupizza() {
  document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = true;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;

  document.getElementById("cantidad-pizza-armatupizza").value++
  document.getElementById("armatupizza").hidden = false;

 
}
function borrararmatupizza() {
  document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = true;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;

}

function armatupizza() {
  document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = false;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;

}

function armatupizzafamiliar() {
document.getElementById("armatupizza-button-tamaño-familiar").style.background = '#ff5500';
document.getElementById("armatupizza-button-tamaño-familiar").style.color = '#fff';
document.getElementById("armatupizza-button-tamaño-mediana").style.background = '#fff';
document.getElementById("armatupizza-button-tamaño-mediana").style.color = '#ff5500';
document.getElementById("siguiente-1").hidden = false;
document.getElementById("38-cm-armatupizza").hidden = false;
document.getElementById("32-cm-armatupizza").hidden = true;
}
function armatupizzamediana() {
  document.getElementById("armatupizza-button-tamaño-familiar").style.background = '#fff';
  document.getElementById("armatupizza-button-tamaño-familiar").style.color = '#ff5500';
  document.getElementById("armatupizza-button-tamaño-mediana").style.background = '#ff5500';
  document.getElementById("armatupizza-button-tamaño-mediana").style.color = '#fff';
  document.getElementById("siguiente-1").hidden = false;
  document.getElementById("38-cm-armatupizza").hidden = true;
  document.getElementById("32-cm-armatupizza").hidden = false;
}


function borrararmatupizzamediana() {
  document.getElementById("ventana-pizza-armatupizzafamiliar-mediana").hidden = true;
}

function seleccionarsalsa(){
document.getElementById("ventana-salsa").style.display = 'block';
document.getElementById("ventana-pizza-armatupizzafamiliar").hidden = true;
document.getElementById("pizzaunoX").value = '*Arma tu Pizza*%0AIngredientes: %0A';
}

function armatupizzasalsabbq(){
  document.getElementById("armatupizza-button-salsapizza").style.background = '#fff';
  document.getElementById("armatupizza-button-salsapizza").style.color = '#ff5500';
  document.getElementById("armatupizza-button-salsabbq").style.background = '#ff5500';
  document.getElementById("armatupizza-button-salsabbq").style.color = '#fff';
  document.getElementById("siguiente-2").hidden = false;
  document.getElementById("salsa").value = 'Salsa BBQ:%0A';
}

function armatupizzasalsapizza(){
  document.getElementById("armatupizza-button-salsabbq").style.background = '#fff';
  document.getElementById("armatupizza-button-salsabbq").style.color = '#ff5500';
  document.getElementById("armatupizza-button-salsapizza").style.background = '#ff5500';
  document.getElementById("armatupizza-button-salsapizza").style.color = '#fff';
  document.getElementById("siguiente-2").hidden = false;
  document.getElementById("salsa").value = 'Salsa Pizza:%0A';
}


function seleccionaring(){
  document.getElementById("ventana-ing-armatupizza").style.display = 'block';
  document.getElementById("ventana-salsa").style.display = 'none';
}

function salchicha1(){
  document.getElementById("salchicha1").style.display = 'none';
  document.getElementById("salchicha2").style.display = 'block';
  sumaring();
}

function salchicha2(){
  document.getElementById("salchicha1").style.display = 'block';
  document.getElementById("salchicha2").style.display = 'none';
    restaring();
}

function tocino1(){
  document.getElementById("tocino1").style.display = 'none';
  document.getElementById("tocino2").style.display = 'block';
  sumaring();
}

function tocino2(){
  document.getElementById("tocino1").style.display = 'block';
  document.getElementById("tocino2").style.display = 'none';
    restaring();
}


function salame1(){
  document.getElementById("salame1").style.display = 'none';
  document.getElementById("salame2").style.display = 'block';
  sumaring();
}

function salame2(){
  document.getElementById("salame1").style.display = 'block';
  document.getElementById("salame2").style.display = 'none';
  restaring();
}


function pollo1(){
  document.getElementById("pollo1").style.display = 'none';
  document.getElementById("pollo2").style.display = 'block';
  sumaring();
}

function pollo2(){
  document.getElementById("pollo1").style.display = 'block';
  document.getElementById("pollo2").style.display = 'none';
  restaring();
}


function pepperoni1(){
  document.getElementById("pepperoni1").style.display = 'none';
  document.getElementById("pepperoni2").style.display = 'block';
  sumaring();
}

function pepperoni2(){
  document.getElementById("pepperoni1").style.display = 'block';
  document.getElementById("pepperoni2").style.display = 'none';
  restaring();
}


function churrasco1(){
  document.getElementById("churrasco1").style.display = 'none';
  document.getElementById("churrasco2").style.display = 'block';
  sumaring();
}

function churrasco2(){
  document.getElementById("churrasco1").style.display = 'block';
  document.getElementById("churrasco2").style.display = 'none';
  restaring();
}


function aceitunas1(){
  document.getElementById("aceitunas1").style.display = 'none';
  document.getElementById("aceitunas2").style.display = 'block';
  sumaring();
}

function aceitunas2(){
  document.getElementById("aceitunas1").style.display = 'block';
  document.getElementById("aceitunas2").style.display = 'none';
  restaring();
}

function choclo1(){
  document.getElementById("choclo1").style.display = 'none';
  document.getElementById("choclo2").style.display = 'block';
  sumaring();
}

function choclo2(){
  document.getElementById("choclo1").style.display = 'block';
  document.getElementById("choclo2").style.display = 'none';
  restaring();
}

function pimenton1(){
  document.getElementById("pimenton1").style.display = 'none';
  document.getElementById("pimenton2").style.display = 'block';
  sumaring();
}

function pimenton2(){
  document.getElementById("pimenton1").style.display = 'block';
  document.getElementById("pimenton2").style.display = 'none';
  restaring();
}

function piña1(){
  document.getElementById("piña1").style.display = 'none';
  document.getElementById("piña2").style.display = 'block';
  sumaring();
}

function piña2(){
  document.getElementById("piña1").style.display = 'block';
  document.getElementById("piña2").style.display = 'none';
  restaring();
}


function cebolla1(){
  document.getElementById("cebolla1").style.display = 'none';
  document.getElementById("cebolla2").style.display = 'block';
  sumaring();
}

function cebolla2(){
  document.getElementById("cebolla1").style.display = 'block';
  document.getElementById("cebolla2").style.display = 'none';
  restaring();
}



function tomate1(){
  document.getElementById("tomate1").style.display = 'none';
  document.getElementById("tomate2").style.display = 'block';
  sumaring();
}

function tomate2(){
  document.getElementById("tomate1").style.display = 'block';
  document.getElementById("tomate2").style.display = 'none';
  restaring();
}

function jamon1(){
  document.getElementById("jamon1").style.display = 'none';
  document.getElementById("jamon2").style.display = 'block';
  sumaring();
}

function jamon2(){
  document.getElementById("jamon1").style.display = 'block';
  document.getElementById("jamon2").style.display = 'none';
  restaring();
}

function champiñones1(){
  document.getElementById("champiñones1").style.display = 'none';
  document.getElementById("champiñones2").style.display = 'block';
  sumaring();
}

function champiñones2(){
  document.getElementById("champiñones1").style.display = 'block';
  document.getElementById("champiñones2").style.display = 'none';
  restaring();
}

function coste1000(){
  const coste1000elements = document.querySelectorAll('.coste1000class');
  coste1000elements.forEach(coste1000E => {
    coste1000E.style.display = 'block';
    var salchicha1 = document.getElementById('salchicha1');
    var churrasco1 = document.getElementById('churrasco1');
    var pepperoni1 = document.getElementById('pepperoni1');
    var jamon1 = document.getElementById('jamon1');
    var salame1 = document.getElementById('salame1');
    var pollo1 = document.getElementById('pollo1');
    var tocino1 = document.getElementById('tocino1');
    salchicha1.addEventListener('click', agregadoIng);
    churrasco1.addEventListener('click', agregadoIng);
    pepperoni1.addEventListener('click', agregadoIng);
    jamon1.addEventListener('click', agregadoIng);
    salame1.addEventListener('click', agregadoIng);
    pollo1.addEventListener('click', agregadoIng);
    tocino1.addEventListener('click', agregadoIng);
    


    var salchicha2 = document.getElementById('salchicha2');
  var churrasco2 = document.getElementById('churrasco2');
  var pepperoni2 = document.getElementById('pepperoni2');
  var jamon2 = document.getElementById('jamon2');
  var salame2 = document.getElementById('salame2');
  var pollo2 = document.getElementById('pollo2');
  var tocino2 = document.getElementById('tocino2');
  salchicha2.addEventListener('click', offagregadoIng);
  churrasco2.addEventListener('click', offagregadoIng);
  pepperoni2.addEventListener('click', offagregadoIng);
  jamon2.addEventListener('click', offagregadoIng);
  salame2.addEventListener('click', offagregadoIng);
  pollo2.addEventListener('click', offagregadoIng);
  tocino2.addEventListener('click', offagregadoIng);
  });








var pimenton1 = document.getElementById('pimenton1');
var champiñones1 = document.getElementById('champiñones1');
var cebolla1 = document.getElementById('cebolla1');
var aceitunas1 = document.getElementById('aceitunas1');
var tomate1 = document.getElementById('tomate1');
var piña1 = document.getElementById('piña1');
var choclo1 = document.getElementById('choclo1');
pimenton1.addEventListener('click', agregadoIng);
champiñones1.addEventListener('click', agregadoIng);
cebolla1.addEventListener('click', agregadoIng);
aceitunas1.addEventListener('click', agregadoIng);
tomate1.addEventListener('click', agregadoIng);
piña1.addEventListener('click', agregadoIng);
choclo1.addEventListener('click', agregadoIng);



var pimenton2 = document.getElementById('pimenton2');
var champiñones2 = document.getElementById('champiñones2');
var cebolla2 = document.getElementById('cebolla2');
var aceitunas2 = document.getElementById('aceitunas2');
var tomate2 = document.getElementById('tomate2');
var piña2 = document.getElementById('piña2');
var choclo2 = document.getElementById('choclo2');
pimenton2.addEventListener('click', offagregadoIng);
champiñones2.addEventListener('click', offagregadoIng);
cebolla2.addEventListener('click', offagregadoIng);
aceitunas2.addEventListener('click', offagregadoIng);
tomate2.addEventListener('click', offagregadoIng);
piña2.addEventListener('click', offagregadoIng);
choclo2.addEventListener('click', offagregadoIng);
}

function offagregadoIng() {
  var total = document.getElementById("total");
  total.value = parseInt(total.value) - 1000;
}

function agregadoIng() {
  var totalArmatupizza = document.getElementById("total");
  var valortotalarmatupizza = parseInt(totalArmatupizza.value);
  totalArmatupizza.value = valortotalarmatupizza + 1000;
  
}

function offagregadoIngX() {
  var total = document.getElementById("total");
  total.value = parseInt(total.value) - 1000;
}

function agregadoIngX() {
  var totalArmatuspizzas = document.getElementById("total");
  var valortotalarmatuspizzas = parseInt(totalArmatuspizzas.value);
  totalArmatuspizzas.value = valortotalarmatuspizzas + 1000;
  
}


function costo1000() {
  const cantidadInput = document.getElementById('cantidading');
  const cantidad = parseInt(cantidadInput.value);

  if (cantidad === 2) {
    const spans = document.querySelectorAll('.ing-span-name');
    spans.forEach(span => {
      span.style.display = 'block';
    });

    const coste1000elements = document.querySelectorAll('.coste1000class');
    coste1000elements.forEach(coste1000E => {
      coste1000E.style.display = 'none';
    });
  }
}


function restaring(){
  document.getElementById('cantidading').value--
  costo1000();

}

function sumaring() {
  const cantidadInput = document.getElementById('cantidading');
  cantidadInput.value++;
  const cantidad = parseInt(cantidadInput.value);

  if (cantidad === 3) {
    const spans = document.querySelectorAll('.ing-span-name');
    spans.forEach(span => {
      span.style.display = 'block';
    });

    coste1000();


   costo1000();
  }
  
}

function agregaralpedido1() {

  document.getElementById("ventana-ing-armatupizza").style.display = 'none';
  document.getElementById("armarsegundapizza").hidden = false;
  document.getElementById("armarsegundapizzamediana").hidden = false;
  document.getElementById("armarprimerapizzafamiliar").hidden = true;
  document.getElementById("armarprimerapizzamediana").hidden = true;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;
  document.getElementById("ventana-pizza-armatupizza-agregada").style.display = 'block';
  agregar.play();


}


function agregar7000() {
  const totalElement = document.getElementById("total");
  const totalValue = parseFloat(totalElement.value); // Convierte el valor a número
  totalElement.value = totalValue + 7000 ; // Suma 7000 al valor actual
  
}

function armatupizzaG(){
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = false;
}



// ARMA TUS PIZZAS COMANDS


function Z(){
  document.getElementById("2-medianas").hidden = false;
  document.getElementById("ventana-pizza-armatupizzamediana").hidden = true;
seleccionarsalsa1();
document.getElementById("pizzadosX").value = '*Pizza 2*%0AIngredientes: %0A';
const totalInput = document.getElementById("total");
if (totalInput) {
    const valorActual = parseFloat(totalInput.value);
    const nuevoValor = valorActual + 6000;
    totalInput.value = nuevoValor;

}
}


function agregaralpedido3(){
  document.getElementById("ventana-ing-armatuspizzas").style.display = 'none';
  document.getElementById("ventana-salsa1").style.display = 'none';
  document.getElementById("armarsegundapizza").hidden = true;
  document.getElementById("armarsegundapizzamediana").hidden = true;
  document.getElementById("ventana-pizza-armatuspizzas-agregada").style.display = 'block';
agregar.play(); 
}

function armatuspizzas() {
  document.getElementById("ventana-pizza-armatuspizzas").hidden = false;
  document.getElementById("pizzadosX").value = '*Pizza 2*%0AIngredientes: %0A';

}


function borrararmatuspizzas() {
  document.getElementById("ventana-pizza-armatuspizzas").hidden = true;

}

function agregararmatuspizzas() {
  document.getElementById("ventana-pizza-armatuspizzas").hidden = true;

 
}
function borrararmatuspizzasmediana() {
  document.getElementById("ventana-pizza-armatuspizzas-mediana").hidden = true;
}



function agregararmatuspizzasmediana() {
  document.getElementById("ventana-pizza-armatuspizzas-mediana").hidden = true;
  document.getElementById("cantidad-pizza-armatuspizzas-mediana").value++
  document.getElementById("ventana-pizza-armatuspizzas-mediana-agregada").hidden = false;

 
}
function borrararmatuspizzasmediana() {
  document.getElementById("ventana-pizza-armatuspizzas-mediana").hidden = true;
}

function seleccionarsalsa1(){
  document.getElementById("ventana-salsa1").style.display = 'block';
  document.getElementById("ventana-pizza-armatuspizzas").hidden = true;
  
}


  function armatuspizzassalsabbq(){
    document.getElementById("armatuspizzas-button-salsapizza").style.background = '#fff';
    document.getElementById("armatuspizzas-button-salsapizza").style.color = '#ff5500';
    document.getElementById("armatuspizzas-button-salsabbq").style.background = '#ff5500';
    document.getElementById("armatuspizzas-button-salsabbq").style.color = '#fff';
    document.getElementById("siguiente-6").style.display = 'block';
    document.getElementById("salsa1").value = 'Salsa BBQ';
  }
  
  function armatuspizzassalsapizza(){
    document.getElementById("armatuspizzas-button-salsabbq").style.background = '#fff';
    document.getElementById("armatuspizzas-button-salsabbq").style.color = '#ff5500';
    document.getElementById("armatuspizzas-button-salsapizza").style.background = '#ff5500';
    document.getElementById("armatuspizzas-button-salsapizza").style.color = '#fff';
    document.getElementById("siguiente-6").style.display = 'block';
    document.getElementById("salsa1").value = 'Salsa Pizza';
  }


  function seleccionaring1(){
    document.getElementById("ventana-ing-armatuspizzas").style.display = 'block';
    document.getElementById("ventana-salsa").style.display = 'none';
  }

  
function salchicha3(){
  document.getElementById("salchicha3").style.display = 'none';
  document.getElementById("salchicha5").style.display = 'block';
  sumaring1();
}

function salchicha5(){
  document.getElementById("salchicha3").style.display = 'block';
  document.getElementById("salchicha5").style.display = 'none';
    restaring1();
}

function tocino3(){
  document.getElementById("tocino3").style.display = 'none';
  document.getElementById("tocino5").style.display = 'block';
  sumaring1();
}

function tocino5(){
  document.getElementById("tocino3").style.display = 'block';
  document.getElementById("tocino5").style.display = 'none';
    restaring1();
}


function salame3(){
  document.getElementById("salame3").style.display = 'none';
  document.getElementById("salame5").style.display = 'block';
  sumaring1();
}

function salame5(){
  document.getElementById("salame3").style.display = 'block';
  document.getElementById("salame5").style.display = 'none';
  restaring1();
}


function pollo3(){
  document.getElementById("pollo3").style.display = 'none';
  document.getElementById("pollo5").style.display = 'block';
  sumaring1();
}

function pollo5(){
  document.getElementById("pollo3").style.display = 'block';
  document.getElementById("pollo5").style.display = 'none';
  restaring1();
}


function pepperoni3(){
  document.getElementById("pepperoni3").style.display = 'none';
  document.getElementById("pepperoni5").style.display = 'block';
  sumaring1();
}

function pepperoni5(){
  document.getElementById("pepperoni3").style.display = 'block';
  document.getElementById("pepperoni5").style.display = 'none';
  restaring1();
}


function churrasco3(){
  document.getElementById("churrasco3").style.display = 'none';
  document.getElementById("churrasco5").style.display = 'block';
  sumaring1();
}

function churrasco5(){
  document.getElementById("churrasco3").style.display = 'block';
  document.getElementById("churrasco5").style.display = 'none';
  restaring1();
}


function aceitunas3(){
  document.getElementById("aceitunas3").style.display = 'none';
  document.getElementById("aceitunas5").style.display = 'block';
  sumaring1();
}

function aceitunas5(){
  document.getElementById("aceitunas3").style.display = 'block';
  document.getElementById("aceitunas5").style.display = 'none';
  restaring1();
}

function choclo3(){
  document.getElementById("choclo3").style.display = 'none';
  document.getElementById("choclo5").style.display = 'block';
  sumaring1();
}

function choclo5(){
  document.getElementById("choclo3").style.display = 'block';
  document.getElementById("choclo5").style.display = 'none';
  restaring1();
}

function pimenton3(){
  document.getElementById("pimenton3").style.display = 'none';
  document.getElementById("pimenton5").style.display = 'block';
  sumaring1();
}

function pimenton5(){
  document.getElementById("pimenton3").style.display = 'block';
  document.getElementById("pimenton5").style.display = 'none';
  restaring1();
}

function piña3(){
  document.getElementById("piña3").style.display = 'none';
  document.getElementById("piña5").style.display = 'block';
  sumaring1();
}

function piña5(){
  document.getElementById("piña3").style.display = 'block';
  document.getElementById("piña5").style.display = 'none';
  restaring1();
}


function cebolla3(){
  document.getElementById("cebolla3").style.display = 'none';
  document.getElementById("cebolla5").style.display = 'block';
  sumaring1();
}

function cebolla5(){
  document.getElementById("cebolla3").style.display = 'block';
  document.getElementById("cebolla5").style.display = 'none';
  restaring1();
}



function tomate3(){
  document.getElementById("tomate3").style.display = 'none';
  document.getElementById("tomate5").style.display = 'block';
  sumaring1();
}

function tomate5(){
  document.getElementById("tomate3").style.display = 'block';
  document.getElementById("tomate5").style.display = 'none';
  restaring1();
}

function jamon3(){
  document.getElementById("jamon3").style.display = 'none';
  document.getElementById("jamon5").style.display = 'block';
  sumaring1();
}

function jamon5(){
  document.getElementById("jamon3").style.display = 'block';
  document.getElementById("jamon5").style.display = 'none';
  restaring1();
}

function champiñones3(){
  document.getElementById("champiñones3").style.display = 'none';
  document.getElementById("champiñones5").style.display = 'block';
  sumaring1();
}

function champiñones5(){
  document.getElementById("champiñones3").style.display = 'block';
  document.getElementById("champiñones5").style.display = 'none';
  restaring1();
}


function restaring1(){
  document.getElementById('cantidading1').value--
  costo10001();

}

function sumaring1() {
  const cantidadInputZ = document.getElementById('cantidading1');
  cantidadInputZ.value++;
  const cantidadZ = parseInt(cantidadInputZ.value);

  if (cantidadZ === 3) {
    const spansx = document.querySelectorAll('.ing-span-name-1');
    spansx.forEach(spanx => {
      spanx.style.display = 'block';
    });

    coste10001();
   costo10001();
  }
  
}




function coste10001(){
  const coste1000elements = document.querySelectorAll('.coste10001class-1');
  coste1000elements.forEach(coste1000E => {
    coste1000E.style.display = 'block';
    var salchicha3 = document.getElementById('salchicha3');
    var churrasco3 = document.getElementById('churrasco3');
    var pepperoni3 = document.getElementById('pepperoni3');
    var jamon3 = document.getElementById('jamon3');
    var salame3 = document.getElementById('salame3');
    var pollo3 = document.getElementById('pollo3');
    var tocino3 = document.getElementById('tocino3');
    salchicha3.addEventListener('click', agregadoIng);
    churrasco3.addEventListener('click', agregadoIng);
    pepperoni3.addEventListener('click', agregadoIng);
    jamon3.addEventListener('click', agregadoIng);
    salame3.addEventListener('click', agregadoIng);
    pollo3.addEventListener('click', agregadoIng);
    tocino3.addEventListener('click', agregadoIng);
    


    var salchicha5 = document.getElementById('salchicha5');
  var churrasco5 = document.getElementById('churrasco5');
  var pepperoni5 = document.getElementById('pepperoni5');
  var jamon5 = document.getElementById('jamon5');
  var salame5 = document.getElementById('salame5');
  var pollo5 = document.getElementById('pollo5');
  var tocino5 = document.getElementById('tocino5');
  salchicha5.addEventListener('click', offagregadoIng);
  churrasco5.addEventListener('click', offagregadoIng);
  pepperoni5.addEventListener('click', offagregadoIng);
  jamon5.addEventListener('click', offagregadoIng);
  salame5.addEventListener('click', offagregadoIng);
  pollo5.addEventListener('click', offagregadoIng);
  tocino5.addEventListener('click', offagregadoIng);
  });








var pimenton3 = document.getElementById('pimenton3');
var champiñones3 = document.getElementById('champiñones3');
var cebolla3 = document.getElementById('cebolla3');
var aceitunas3 = document.getElementById('aceitunas3');
var tomate3 = document.getElementById('tomate3');
var piña3 = document.getElementById('piña3');
var choclo3 = document.getElementById('choclo3');
pimenton3.addEventListener('click', agregadoIng);
champiñones3.addEventListener('click', agregadoIng);
cebolla3.addEventListener('click', agregadoIng);
aceitunas3.addEventListener('click', agregadoIng);
tomate3.addEventListener('click', agregadoIng);
piña3.addEventListener('click', agregadoIng);
choclo3.addEventListener('click', agregadoIng);



var pimenton5 = document.getElementById('pimenton5');
var champiñones5 = document.getElementById('champiñones5');
var cebolla5 = document.getElementById('cebolla5');
var aceitunas5 = document.getElementById('aceitunas5');
var tomate5 = document.getElementById('tomate5');
var piña5 = document.getElementById('piña5');
var choclo5 = document.getElementById('choclo5');
pimenton5.addEventListener('click', offagregadoIng);
champiñones5.addEventListener('click', offagregadoIng);
cebolla5.addEventListener('click', offagregadoIng);
aceitunas5.addEventListener('click', offagregadoIng);
tomate5.addEventListener('click', offagregadoIng);
piña5.addEventListener('click', offagregadoIng);
choclo5.addEventListener('click', offagregadoIng);

  }


function costo10001() {
  const cantidadZInput = document.getElementById('cantidading1');
  const cantidadZ = parseInt(cantidadZInput.value);

  if (cantidadZ === 2) {
    const spansZ = document.querySelectorAll('.ing-span-name-1');
    spansZ.forEach(spanZ => {
      spanZ.style.display = 'block';
    });

    const coste1000elementsZ = document.querySelectorAll('.coste1000class-1');
    coste1000elementsZ.forEach(coste1000Z => {
      coste1000Z.style.display = 'none';
    });
  }
}


let ingredientsX = [];

function addIngredientX(ingrediente) {
  ingredientsX.push(ingrediente);
  document.getElementById('ingredientsX').value = ingredientsX.join('%0A');
  document.getElementById('ingredientsX2').value = ingredientsX.join(', ');
}

function removeIngredientX(ingrediente) {
  const index = ingredientsX.indexOf(ingrediente);
  if (index > -1) {
    ingredientsX.splice(index, 1);
  }
  document.getElementById('ingredientsX').value = ingredientsX.join('%0A');
  document.getElementById('ingredientsX2').value = ingredientsX.join(', ');
}

let ingredients = [];

function addIngredient(ingredient) {
  ingredients.push(ingredient);
  document.getElementById('ingredients').value = ingredients.join('%0A');
  document.getElementById('ingredientsX1').value = ingredients.join(', ');
}

function removeIngredient(ingredient) {
  const index = ingredients.indexOf(ingredient);
  if (index > -1) {
    ingredients.splice(index, 1);
  }
  document.getElementById('ingredients').value = ingredients.join('%0A');
  document.getElementById('ingredientsX1').value = ingredients.join(', ');
}



// CHILLIAN COMANDS

function chillianfamiliar() {
  document.getElementById("ventana-pizza-chillian-familiar").style.display = 'block';

}
function borrarchillianfamiliar() {
  document.getElementById("ventana-pizza-chillian-familiar").style.display = 'none';
  document.getElementById("chillian-input").value = '';
  document.getElementById("cantidad-pizza-chillian-familiar").value = '';
  document.getElementById("chilliantamañofamiliar").value = '';
}

function agregarchillianfamiliar() {
  document.getElementById("ventana-pizza-chillian-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-chillian-familiar").value++
  document.getElementById("ventana-pizza-chillian-familiar-agregada").style.display = 'block';
  document.getElementById("chillian-input").value = ' Chillian';
  document.getElementById("chilliantamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarchillianmediana() {
  document.getElementById("ventana-pizza-chillian-mediana").style.display = 'none';
  document.getElementById("chillian-input").value = '';
  document.getElementById("cantidad-pizza-chillian-mediana").value = '';
  document.getElementById("chilliantamañomediana").value = '';
}

function chillianmediana() {
  document.getElementById("ventana-pizza-chillian-mediana").style.display = 'block';
  document.getElementById("chillian-input").value = ' Chillian';
}

function agregarchillianmediana() {
  document.getElementById("ventana-pizza-chillian-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-chillian-mediana").value++
  document.getElementById("ventana-pizza-chillian-mediana-agregada").style.display = 'block';
  document.getElementById("chilliantamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarchillianmediana() {
  document.getElementById("ventana-pizza-chillian-mediana").style.display = 'none';
}



// POLLO BBQ COMANDS

function pollobbqfamiliar() {
  document.getElementById("ventana-pizza-pollobbq-familiar").style.display = 'block';

}
function borrarpollobbqfamiliar() {
  document.getElementById("ventana-pizza-pollobbq-familiar").style.display = 'none';
  document.getElementById("pollobbq-input").value = '';
  document.getElementById("cantidad-pizza-pollobbq-familiar").value = '';
  document.getElementById("pollobbqtamañofamiliar").value = '';
}

function agregarpollobbqfamiliar() {
  document.getElementById("ventana-pizza-pollobbq-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-pollobbq-familiar").value++
  document.getElementById("ventana-pizza-pollobbq-familiar-agregada").style.display = 'block';
  document.getElementById("pollobbq-input").value = ' Pollo BBQ';
  document.getElementById("pollobbqtamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarpollobbqmediana() {
  document.getElementById("ventana-pizza-pollobbq-mediana").style.display = 'none';
  document.getElementById("pollobbq-input").value = '';
  document.getElementById("cantidad-pizza-pollobbq-mediana").value = '';
  document.getElementById("pollobbqtamañomediana").value = '';
}

function pollobbqmediana() {
  document.getElementById("ventana-pizza-pollobbq-mediana").style.display = 'block';
  document.getElementById("pollobbq-input").value = ' Pollo BBQ';
}

function agregarpollobbqmediana() {
  document.getElementById("ventana-pizza-pollobbq-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-pollobbq-mediana").value++
  document.getElementById("ventana-pizza-pollobbq-mediana-agregada").style.display = 'block';
  document.getElementById("pollobbqtamañomediana").value = ' Mediana%0A';
  sumarmediana();


 
}
function borrarpollobbqmediana() {
  document.getElementById("ventana-pizza-pollobbq-mediana").style.display = 'none';
}




// ITALIANA COMANDS
function italianafamiliar() {
  document.getElementById("ventana-pizza-italiana-familiar").style.display = 'block';

}
function borraritalianafamiliar() {
  document.getElementById("ventana-pizza-italiana-familiar").style.display = 'none';
  document.getElementById("italiana-input").value = '';
  document.getElementById("cantidad-pizza-italiana-familiar").value = '';
  document.getElementById("italianatamañofamiliar").value = '';
}

function agregaritalianafamiliar() {
  document.getElementById("ventana-pizza-italiana-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-italiana-familiar").value++
  document.getElementById("ventana-pizza-italiana-familiar-agregada").style.display = 'block';
  document.getElementById("italiana-input").value = ' Italiana';
  document.getElementById("italianatamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borraritalianamediana() {
  document.getElementById("ventana-pizza-italiana-mediana").style.display = 'none';
  document.getElementById("italiana-input").value = '';
  document.getElementById("cantidad-pizza-italiana-mediana").value = '';
  document.getElementById("italianatamañomediana").value = '';
}

function italianamediana() {
  document.getElementById("ventana-pizza-italiana-mediana").style.display = 'block';
  document.getElementById("italiana-input").value = ' Italiana';
}

function agregaritalianamediana() {
  document.getElementById("ventana-pizza-italiana-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-italiana-mediana").value++
  document.getElementById("ventana-pizza-italiana-mediana-agregada").style.display = 'block';
  document.getElementById("italianatamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borraritalianamediana() {
  document.getElementById("ventana-pizza-italiana-mediana").style.display = 'none';
}








// CHEESEBURGER COMANDS
function cheeseburgerfamiliar() {
  document.getElementById("ventana-pizza-cheeseburger-familiar").style.display = 'block';

}
function borrarcheeseburgerfamiliar() {
  document.getElementById("ventana-pizza-cheeseburger-familiar").style.display = 'none';
  document.getElementById("cheeseburger-input").value = '';
  document.getElementById("cantidad-pizza-cheeseburger-familiar").value = '';
  document.getElementById("cheeseburgertamañofamiliar").value = '';
}

function agregarcheeseburgerfamiliar() {
  document.getElementById("ventana-pizza-cheeseburger-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-cheeseburger-familiar").value++
  document.getElementById("ventana-pizza-cheeseburger-familiar-agregada").style.display = 'block';
  document.getElementById("cheeseburger-input").value = ' Cheeseburger';
  document.getElementById("cheeseburgertamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarcheeseburgermediana() {
  document.getElementById("ventana-pizza-cheeseburger-mediana").style.display = 'none';
  document.getElementById("cheeseburger-input").value = '';
  document.getElementById("cantidad-pizza-cheeseburger-mediana").value = '';
  document.getElementById("cheeseburgertamañomediana").value = '';
}

function cheeseburgermediana() {
  document.getElementById("ventana-pizza-cheeseburger-mediana").style.display = 'block';
  document.getElementById("cheeseburger-input").value = ' Cheeseburger';
}

function agregarcheeseburgermediana() {
  document.getElementById("ventana-pizza-cheeseburger-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-cheeseburger-mediana").value++
  document.getElementById("ventana-pizza-cheeseburger-mediana-agregada").style.display = 'block';
  document.getElementById("cheeseburgertamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarcheeseburgermediana() {
  document.getElementById("ventana-pizza-cheeseburger-mediana").style.display = 'none';
}




// HAWAIANA COMANDS
function hawaianafamiliar() {
  document.getElementById("ventana-pizza-hawaiana-familiar").style.display = 'block';

}
function borrarhawaianafamiliar() {
  document.getElementById("ventana-pizza-hawaiana-familiar").style.display = 'none';
  document.getElementById("hawaiana-input").value = '';
  document.getElementById("cantidad-pizza-hawaiana-familiar").value = '';
  document.getElementById("hawaianatamañofamiliar").value = '';
}

function agregarhawaianafamiliar() {
  document.getElementById("ventana-pizza-hawaiana-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-hawaiana-familiar").value++
  document.getElementById("ventana-pizza-hawaiana-familiar-agregada").style.display = 'block';
  document.getElementById("hawaiana-input").value = ' Hawaiana';
  document.getElementById("hawaianatamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarhawaianamediana() {
  document.getElementById("ventana-pizza-hawaiana-mediana").style.display = 'none';
  document.getElementById("hawaiana-input").value = '';
  document.getElementById("cantidad-pizza-hawaiana-mediana").value = '';
  document.getElementById("hawaianatamañomediana").value = '';
}

function hawaianamediana() {
  document.getElementById("ventana-pizza-hawaiana-mediana").style.display = 'block';
  document.getElementById("hawaiana-input").value = ' Hawaiana';
}

function agregarhawaianamediana() {
  document.getElementById("ventana-pizza-hawaiana-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-hawaiana-mediana").value++
  document.getElementById("ventana-pizza-hawaiana-mediana-agregada").style.display = 'block';
  document.getElementById("hawaianatamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarhawaianamediana() {
  document.getElementById("ventana-pizza-hawaiana-mediana").style.display = 'none';
}



// SUPER BEEF COMANDS
function superbeeffamiliar() {
  document.getElementById("ventana-pizza-superbeef-familiar").style.display = 'block';

}
function borrarsuperbeeffamiliar() {
  document.getElementById("ventana-pizza-superbeef-familiar").style.display = 'none';
  document.getElementById("superbeef-input").value = '';
  document.getElementById("cantidad-pizza-superbeef-familiar").value = '';
  document.getElementById("superbeeftamañofamiliar").value = '';
}

function agregarsuperbeeffamiliar() {
  document.getElementById("ventana-pizza-superbeef-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-superbeef-familiar").value++
  document.getElementById("ventana-pizza-superbeef-familiar-agregada").style.display = 'block';
  document.getElementById("superbeef-input").value = ' Super Beef';
  document.getElementById("superbeeftamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarsuperbeefmediana() {
  document.getElementById("ventana-pizza-superbeef-mediana").style.display = 'none';
  document.getElementById("superbeef-input").value = '';
  document.getElementById("cantidad-pizza-superbeef-mediana").value = '';
  document.getElementById("superbeeftamañomediana").value = '';
}

function superbeefmediana() {
  document.getElementById("ventana-pizza-superbeef-mediana").style.display = 'block';
  document.getElementById("superbeef-input").value = ' Super Beef';
}

function agregarsuperbeefmediana() {
  document.getElementById("ventana-pizza-superbeef-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-superbeef-mediana").value++
  document.getElementById("ventana-pizza-superbeef-mediana-agregada").style.display = 'block';
  document.getElementById("superbeeftamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarsuperbeefmediana() {
  document.getElementById("ventana-pizza-superbeef-mediana").style.display = 'none';
}


// LUCO PIZZA COMANDS
function lucopizzafamiliar() {
  document.getElementById("ventana-pizza-lucopizza-familiar").style.display = 'block';

}
function borrarlucopizzafamiliar() {
  document.getElementById("ventana-pizza-lucopizza-familiar").style.display = 'none';
  document.getElementById("lucopizza-input").value = '';
  document.getElementById("cantidad-pizza-lucopizza-familiar").value = '';
  document.getElementById("lucopizzatamañofamiliar").value = '';
}

function agregarlucopizzafamiliar() {
  document.getElementById("ventana-pizza-lucopizza-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-lucopizza-familiar").value++
  document.getElementById("ventana-pizza-lucopizza-familiar-agregada").style.display = 'block';
  document.getElementById("lucopizza-input").value = ' Luco Pizza';
  document.getElementById("lucopizzatamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarlucopizzamediana() {
  document.getElementById("ventana-pizza-lucopizza-mediana").style.display = 'none';
  document.getElementById("lucopizza-input").value = '';
  document.getElementById("cantidad-pizza-lucopizza-mediana").value = '';
  document.getElementById("lucopizzatamañomediana").value = '';
}

function lucopizzamediana() {
  document.getElementById("ventana-pizza-lucopizza-mediana").style.display = 'block';
  document.getElementById("lucopizza-input").value = ' Luco Pizza';
}

function agregarlucopizzamediana() {
  document.getElementById("ventana-pizza-lucopizza-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-lucopizza-mediana").value++
  document.getElementById("ventana-pizza-lucopizza-mediana-agregada").style.display = 'block';
  document.getElementById("lucopizzatamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarlucopizzamediana() {
  document.getElementById("ventana-pizza-lucopizza-mediana").style.display = 'none';
}


// NAPOLITANA COMANDS
function napolitanafamiliar() {
  document.getElementById("ventana-pizza-napolitana-familiar").style.display = 'block';

}
function borrarnapolitanafamiliar() {
  document.getElementById("ventana-pizza-napolitana-familiar").style.display = 'none';
  document.getElementById("napolitana-input").value = '';
  document.getElementById("cantidad-pizza-napolitana-familiar").value = '';
  document.getElementById("napolitanatamañofamiliar").value = '';
}

function agregarnapolitanafamiliar() {
  document.getElementById("ventana-pizza-napolitana-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-napolitana-familiar").value++
  document.getElementById("ventana-pizza-napolitana-familiar-agregada").style.display = 'block';
  document.getElementById("napolitana-input").value = ' Napolitana';
  document.getElementById("napolitanatamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarnapolitanamediana() {
  document.getElementById("ventana-pizza-napolitana-mediana").style.display = 'none';
  document.getElementById("napolitana-input").value = '';
  document.getElementById("cantidad-pizza-napolitana-mediana").value = '';
  document.getElementById("napolitanatamañomediana").value = '';
}

function napolitanamediana() {
  document.getElementById("ventana-pizza-napolitana-mediana").style.display = 'block';
  document.getElementById("napolitana-input").value = ' Napolitana';
}

function agregarnapolitanamediana() {
  document.getElementById("ventana-pizza-napolitana-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-napolitana-mediana").value++
  document.getElementById("ventana-pizza-napolitana-mediana-agregada").style.display = 'block';
  document.getElementById("napolitanatamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarnapolitanamediana() {
  document.getElementById("ventana-pizza-napolitana-mediana").style.display = 'none';
}





// SUPER PEPPERONI COMANDS
function superpepperonifamiliar() {
  document.getElementById("ventana-pizza-superpepperoni-familiar").style.display = 'block';

}
function borrarsuperpepperonifamiliar() {
  document.getElementById("ventana-pizza-superpepperoni-familiar").style.display = 'none';
  document.getElementById("superpepperoni-input").value = '';
  document.getElementById("cantidad-pizza-superpepperoni-familiar").value = '';
  document.getElementById("superpepperonintamañofamiliar").value = '';
}

function agregarsuperpepperonifamiliar() {
  document.getElementById("ventana-pizza-superpepperoni-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-superpepperoni-familiar").value++
  document.getElementById("ventana-pizza-superpepperoni-familiar-agregada").style.display = 'block';
  document.getElementById("superpepperoni-input").value = ' Super Pepperoni';
  document.getElementById("superpepperonitamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarsuperpepperonimediana() {
  document.getElementById("ventana-pizza-superpepperoni-mediana").style.display = 'none';
  document.getElementById("superpepperoni-input").value = '';
  document.getElementById("cantidad-pizza-superpepperoni-mediana").value = '';
  document.getElementById("superpepperonitamañomediana").value = '';
}

function superpepperonimediana() {
  document.getElementById("ventana-pizza-superpepperoni-mediana").style.display = 'block';
  document.getElementById("superpepperoni-input").value = ' Super Pepperoni';
}

function agregarsuperpepperonimediana() {
  document.getElementById("ventana-pizza-superpepperoni-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-superpepperoni-mediana").value++
  document.getElementById("ventana-pizza-superpepperoni-mediana-agregada").style.display = 'block';
  document.getElementById("superpepperonitamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}



// VEGETARIANA COMANDS
function vegetarianafamiliar() {
  document.getElementById("ventana-pizza-vegetariana-familiar").style.display = 'block';

}
function borrarvegetarianafamiliar() {
  document.getElementById("ventana-pizza-vegetariana-familiar").style.display = 'none';
  document.getElementById("vegetariana-input").value = '';
  document.getElementById("cantidad-pizza-vegetariana-familiar").value = '';
  document.getElementById("vegetarianatamañofamiliar").value = '';
}

function agregarvegetarianafamiliar() {
  document.getElementById("ventana-pizza-vegetariana-familiar").style.display = 'none';
  document.getElementById("cantidad-pizza-vegetariana-familiar").value++
  document.getElementById("ventana-pizza-vegetariana-familiar-agregada").style.display = 'block';
  document.getElementById("vegetariana-input").value = ' Vegetariana';
  document.getElementById("vegetarianatamañofamiliar").value = ' Familiar%0A';
  sumarfamiliar();

 
}
function borrarvegetarianamediana() {
  document.getElementById("ventana-pizza-vegetariana-mediana").style.display = 'none';
  document.getElementById("vegetariana-input").value = '';
  document.getElementById("cantidad-pizza-vegetariana-mediana").value = '';
  document.getElementById("vegetarianatamañomediana").value = '';
}

function vegetarianamediana() {
  document.getElementById("ventana-pizza-vegetariana-mediana").style.display = 'block';
  document.getElementById("vegetariana-input").value = ' Vegetariana';
}

function agregarvegetarianamediana() {
  document.getElementById("ventana-pizza-vegetariana-mediana").style.display = 'none';
  document.getElementById("cantidad-pizza-vegetariana-mediana").value++
  document.getElementById("ventana-pizza-vegetariana-mediana-agregada").style.display = 'block';
  document.getElementById("vegetarianatamañomediana").value = ' Mediana%0A';
  sumarmediana();

 
}
function borrarvegetarianamediana() {
  document.getElementById("ventana-pizza-vegetariana-mediana").style.display = 'none';
}


function sumarfamiliar(){
  agregar.play();
  var total = document.getElementById("total");
  const valorActual = parseFloat(total.value);
  
  if (!isNaN(valorActual)) {
      if (valorActual >= 4) {
          total.value = (valorActual + 7000).toString();
          alert("Promoción aplicada: 2 Pizzas x 18990 ✅");
      } else {
          total.value = (valorActual + 11990).toString();
      }
  }
  
}

function cerrartarjeta(){
  document.getElementById("pedido").style.display = 'none';
}

function continuarbutton(){
  document.getElementById("pedido").style.display = 'none';
  document.getElementById("ver-pedido").style.display = 'none';
    document.getElementById("formulario").style.display = 'block';
      // Obtén los valores numéricos de los campos de entrada
  var valorTotal = parseFloat(document.getElementById("total").value) || 0;
  var valorTotalArmaTuPizza = parseFloat(document.getElementById("totalarmatupizza").value) || 0;
  var valorTotalArmaTusPizzas = parseFloat(document.getElementById("totalarmatuspizzas").value) || 0;

  const suma = valorTotal + valorTotalArmaTuPizza + valorTotalArmaTusPizzas;

  // Asigna la suma al campo de entrada con la ID "total"
  document.getElementById("total").value = suma;

  // No olvides retornar algo relevante si es necesario para tu flujo de trabajo.
  return suma;
}

function sumarmediana(){
  agregar.play();
  var total = document.getElementById("total");
  const valorActual = parseFloat(total.value);
  
  if (!isNaN(valorActual)) {
      if (valorActual >= 4) {
          total.value = (valorActual + 6000).toString();
          alert("Promoción aplicada: 2 Pizzas x 18990 ✅");
      } else {
          total.value = (valorActual + 9990).toString();
      }
  }
  
  
}

let agregar = new Audio('/Sounds/agregar.mp3')


function APIZZAM(){
  var total = document.getElementById("total");
  total.value = parseInt(total.value) + 9990;
  const totalElement = document.getElementById("total");
if (totalElement) {
    const valorActual = parseFloat(totalElement.value);
    if (!isNaN(valorActual)) {
        if (valorActual === 17980) {
          document.getElementById("total").value = '14990';
          alert("Promocion Aplicada: 2 Pizzas x  14990 ✅");
        }
        
}
}
  
}


function efectivobutton(){
  document.getElementById("efectivobutton").style.background = '#ff5500';
  document.getElementById("efectivobutton").style.color = '#fff';
  document.getElementById("transferenciabutton").style.background = '#fff';
  document.getElementById("transferenciabutton").style.color = '#ff5500';
  document.getElementById("formadepago").value = 'Efectivo';
  document.getElementById("efectivowindow").style.display = 'block';
  document.getElementById("pagare").value = '*Pagaré con $*';
}

function transferenciabutton(){
  document.getElementById("transferenciabutton").style.background = '#ff5500';
  document.getElementById("transferenciabutton").style.color = '#fff';
  document.getElementById("efectivobutton").style.background = '#fff';
  document.getElementById("efectivobutton").style.color = '#ff5500';
  document.getElementById("formadepago").value = 'Transferencia';
  document.getElementById("pagare").value = '';
}


function APIZZAF(){

  var total = document.getElementById("total");
  total.value = parseInt(total.value) + 11990;
  const totalElement = document.getElementById("total");
if (totalElement) {
    const valorActual = parseFloat(totalElement.value);
    if (!isNaN(valorActual)) {
        if (valorActual === 23980) {
          document.getElementById("total").value = '18990';
          alert("Promocion Aplicada: 2 Pizzas x  18990 ✅");
        }
        
}
}
}


function APIZZAFX() {
  document.getElementById("2-familiares").hidden = false;
  const totalInput = document.getElementById("total");
  if (totalInput) {
      const valorActual = parseFloat(totalInput.value);
      const nuevoValor = valorActual + 7000;
      totalInput.value = nuevoValor;

}
}




