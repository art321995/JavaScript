const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarSuma);

function evaluarSuma(){
    let suma = "";
    let a = 1;
    let b = 2;
    let result = "";

    while(b <= 1800){
        result = `${b}`;

        suma = `${suma}  ${b} <br>`;

        if(a % 2 == 0){
            b = b + 2; 
        }else{
            b = b +3
        }
        a = a + 1;
    }
    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `La suma total es: ${suma}`;
}