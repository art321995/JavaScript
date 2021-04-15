const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",calcularEstatura);

function calcularEstatura(){

let Acumuladorestatura = 0;
let Contadorestatura = 0;

let continuar = true;

while(continuar==true){

    let Estatura = prompt(`Ingrese en centimetros la estatura de la persona  ${Contadorestatura}`);

    if (Estatura==null){
        continuar = false;
    }else{
        Acumuladorestatura = Acumuladorestatura + Number (Estatura);

        Contadorestatura++;
    }
}

let promedioest = Acumuladorestatura / Contadorestatura;

const resultContainer = document.getElementById("resultContainer");

resultContainer.innerHTML="La estatura promedio de las personas es: "+promedioest+" cm";
}