const btnCalcularViaje = document.getElementById("btnCalcular");

btnCalcularViaje.addEventListener("click",calcularViaje);

function calcularViaje(){

    let tipoautobus = document.getElementById("sltTipoAutobus").value;
    let personas = Number (document.getElementById("personas").value);
    let resultado = "";
    let total = 0;

    if(personas <20 ){
        alert(`Es necesario que sean mas de 20 personas`);
        return;
    }

    if(tipoautobus=="AutobusA"){
           total  = personas * 1.5;
           resultado = `El costo por persona es de : $1.5 Y el total es: $${total}`;
    }else if(tipoautobus=="AutobusB"){
        total  = personas * 2;
           resultado = `El costo por persona es de : $2 Y el total es: $${total}`;
    }else if(tipoautobus=="AutobusC"){
        total  = personas * 2.5;
           resultado = `El costo por persona es de : $2.5 Y el total es: $${total}`;
    } else{
        total  = personas * 3;
           resultado = `El costo por persona es de : $2.5 Y el total es: $${total}`;
    }

   

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}