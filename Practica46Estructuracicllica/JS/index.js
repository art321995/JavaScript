const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarNumero);

function evaluarNumero(){
    let continuar = true;
    let numeromayor = 0;
    let numeromenor = 0;

    while(continuar == true){
        let numero = prompt('Ingrese el numero a evaluar');
        if(isNaN(numero)==true){
            alert("Es neceasario que ingrese solo numeros");

        }else if (numero==null){
            continuar = false;
        }else{numero = Number(numero);
            if(numero >= 500){
                numeromayor++;
            }else{
                numeromenor++;
            }
        }
    }

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span>Ingreso ${numeromayor} numeros mayores a 500 <br> Ingreso ${numeromenor} numeros menores a 500<\span>`
}