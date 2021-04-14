const btnCalcularEnvio = document.getElementById("btnCalcular");

btnCalcularEnvio.addEventListener("click",calcularEnvio);

function calcularEnvio(){

    let Gramos = Number(document.getElementById("gramos").value);
    let Zona =  document.getElementById("sltTipoZona").value;
    let Envio = "";
    let resultado = "";

    if(Gramos>5000){
        alert(`El limite de gramos son 5000`);
        return;
    }

    if(Zona == "Zona1"){
        Envio = Gramos * 11;
        resultado = "El costo del envio del paquete es: $"+Envio+".00";
    }else if (Zona == "Zona2"){
        Envio = Gramos * 10;
        resultado = "El costo del envio del paquete es: $"+Envio+".00";
    }else if (Zona == "Zona3"){
        Envio = Gramos * 12;
        resultado = "El costo del envio del paquete es: $"+Envio+".00";
    }else if (Zona == "Zona4"){
        Envio = Gramos * 24;
        resultado = "El costo del envio del paquete es: $"+Envio+".00";
    }else{
        Envio = Gramos * 27;
        resultado = "El costo del envio del paquete es: $"+Envio+".00";
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}