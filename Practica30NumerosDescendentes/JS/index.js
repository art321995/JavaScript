const btnCalcularMayor = document.getElementById("btnCalcular");

btnCalcularMayor.addEventListener("click",calcularMayor);

function calcularMayor(){

    let NumeroA = Number (document.getElementById("numeroA").value);
    let NumeroB = Number (document.getElementById("numeroB").value);
    let NumeroC = Number (document.getElementById("numeroC").value);
    let resultado = "";

    if(NumeroA > NumeroB && NumeroA > NumeroC && NumeroB > NumeroC){
           resultado = `Numeros Descendentes ${NumeroA} ${NumeroB} ${NumeroC}`;
    }else if(NumeroB > NumeroA && NumeroB > NumeroC && NumeroA > NumeroC){
        resultado = `Numeros Descendentes ${NumeroB} ${NumeroA} ${NumeroC}`;
    }else if(NumeroC > NumeroA && NumeroC > NumeroB && NumeroB > NumeroA){
        resultado = `Numeros Descendentes ${NumeroC} ${NumeroB} ${NumeroA}`;
    } else{
        resultado = `Numeros Descendentes ${NumeroC} ${NumeroA} ${NumeroB}`;
    }

   

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;
}