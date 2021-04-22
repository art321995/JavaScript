const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarTabla);

function evaluarTabla(){

    let num = Number (prompt("Ingrese un numero del 1 al 10"));
    let tabla = ""; 

    for(i=1;1<=10;i++){
    if(num > 0 && num <= 10){
        tabla = num * i;
    }else{
    tabla = alert("Solo puedes ingresar numeros del 1 al 10 ");
    return;}
    }
    let resulContainer = document.getElementById("resultContainer");
    resulContainer.innerHTML=(`${num} X ${i} = ${tabla}`);
}