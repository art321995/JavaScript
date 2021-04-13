const btnValidarDia = document.getElementById("btnCalcular");

btnValidarDia.addEventListener("click",validarDia);

function validarDia(){

    let numero = Number(document.getElementById("num").value);
    let dia = "";
    let resultado = "";
    
    if(numero==0 || numero>7){
        alert(`Es necesario ingresar un numero del 1 al 7`);
        return;
    }

    if(numero==1){
        dia = "Lunes"
    }else if(numero==2){
        dia = "Martes"
    }
    else if(numero==3){
        dia = "Miercoles"
    }else if(numero==4){
        dia = "Jueves"
    }else if(numero==5){
        dia = "Viernes"
    }else if(numero==6){
        dia = "Sabado"
    }else if(numero==7){
        dia = "Domingo"
    }

    resultado = `El numero ${numero} corresponde al dia ${dia}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}