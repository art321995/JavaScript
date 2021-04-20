const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarPrimo);

function evaluarPrimo(){
    let num = prompt('Ingrese el numero a evaluar');
    let numbers = [];
    
    for(let i = 2; i < num; i++){ 
        for(let j = 2; j<=i; j++){
            if(i === j){
                numbers.push(i); 
            }
            if(i % j == 0){ 
                break;
            } 
        }
    } 

    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span> Los numeros primos menos a ${num} son los siguientes: ${numbers} <\span>`;
    console.log(numbers); 
}
    
 
