const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarCollatz);

function evaluarCollatz(){
    let numero = Number (prompt("Ingrese el numero: "));
    let valor = numero;
    let valor2 = "";

    while(valor > 1){

        if(valor % 2 == 0){
            valor = valor / 2;
        }else {
            valor = (valor * 3) + 1;
        }
        valor2 = valor2 + " " + valor;
    }

    

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span> El numero ${numero} Tiene conjetura Collatz consecutivamente: ${valor2} <\span>`;
}