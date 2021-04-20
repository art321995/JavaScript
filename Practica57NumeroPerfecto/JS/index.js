const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarPerfecto);

function evaluarPerfecto(){
   
    let num = prompt('Ingrese el numero a evaluar');

  for (let i = 2; 1 <= 500000; i++)
  b = 0;
        for(var j = 1; j <= Math.floor(i/2); j++){
            if( parseInt(i) % parseInt(j) == 0){
                b = b + parseInt(j);
            }
        }
        if(b == i){
            num = "El numero es perfecto";
        }else{
            num = "El numero no es perfecto"
        }

        let resulContainer = document.getElementById("resultContainer");

        resulContainer.innerHTML = num;
}