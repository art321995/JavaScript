//Entradas-> Son los datos que necesitamos me otorgue el usuario
//Proceso->Son las acciones que se le van a realizar a las entradas
//Salidas-> Son el resultado obtenido por los procesos realizados

//Entradas
let btnsumar = document.getElementById("btnSuma");//Obtenemos un elemento por medio del ID y lo almacenamos en una variable
let btnrestar = document.getElementById("btnResta");
let btnmultiplicar = document.getElementById("btnMulti");
let btndividir = document.getElementById("btnDividir");

btnsumar.addEventListener('click', sumarDosNumero);
btnrestar.addEventListener('click', restarDosNumero);
btnmultiplicar.addEventListener('click', multiplicarDosNumero);
btndividir.addEventListener('click', dividirDosNumero);


function sumarDosNumero() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);// Convierte en un valor numerico el elemento que obtenemos por medio de la propiedad value que por defecto es un string

    console.log(numero1);
    console.log(numero2);

    let resultado = numero1 + numero2;

    let containerResultado = document.getElementById('containerResponse');

    containerResultado.innerText = resultado;
}

function restarDosNumero() {
    let numero11= Number(document.getElementById("numero11").value);
    let numero22 = Number(document.getElementById("numero22").value);
    console.log(numero11);
    console.log(numero22);

    let resultado1 = numero11 - numero22;

    let containerResultado = document.getElementById('containerResponse1');

    containerResultado.innerText = resultado1;
}

function multiplicarDosNumero() {
    let numero13 = Number(document.getElementById("numero13").value);
    let numero23 = Number(document.getElementById("numero23").value);// Convierte en un valor numerico el elemento que obtenemos por medio de la propiedad value que por defecto es un string

    console.log(numero13);
    console.log(numero23);

    let resultado2 = numero13 * numero23;

    let containerResultado = document.getElementById('containerResponse2');

    containerResultado.innerText = resultado2;
}

function dividirDosNumero() {
    let numero14 = Number(document.getElementById("numero14").value);
    let numero24 = Number(document.getElementById("numero24").value);// Convierte en un valor numerico el elemento que obtenemos por medio de la propiedad value que por defecto es un string

    console.log(numero14);
    console.log(numero24);

    let resultado3 = numero14 / numero24;

    let containerResultado = document.getElementById('containerResponse3');

    containerResultado.innerText = resultado3;
}


