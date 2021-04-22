const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarMayor);

function evaluarMayor(){

    let num = 0;
    let nummayor = 0;
    let suma = "";
    let total = "";
    let continuar = true;

    while(continuar == true){
         num = prompt('Ingrese un numero: ');
        if(isNaN(num)==true){
            alert("Es neceasario que ingrese solo numeros");
        }else if (num==null){
            continuar = false;
        }else{num = Number(num);
            if(num > 0){
            nummayor++;
            suma = Number(suma + num);
        }
        total = suma / nummayor;  
    }
         
}

let resulContainer = document.getElementById("resultContainer");
resulContainer.innerHTML = `Los numeros mayores a cero son: ${nummayor}<br>
La suma de los numeros positivos es = ${suma}<br>
El Promedio de los numeros es =  ${total}`;

}
