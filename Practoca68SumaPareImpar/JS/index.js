const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarSuma);

function evaluarSuma(){

    let sumimpar = "";
    let sumPar = "";

    for(let i=200;i<=400;i++){
        if(i % 2 == 0){
            i++;
            sumPar = Number (sumPar + i);
        }else if(i % 2 == 1){
            i++;
            sumimpar = Number (sumimpar + i);
        }

    }

    let resulContainer = document.getElementById("resultContainer");
    resulContainer.innerHTML = `La suma de los numeros pares es igual a: ${sumPar}`;

    let resulContainer1 = document.getElementById("resultContainer1");
    resulContainer1.innerHTML = `La suma de los numeros impares es igual a: ${sumimpar}`;
}
