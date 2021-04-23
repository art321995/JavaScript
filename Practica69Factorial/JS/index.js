const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarFactorial);

function evaluarFactorial(){

    let num = Number (prompt(`Ingrese un numero: `))
    let total = 1;

    for (i=1; i<=num; i++) {
		total = total * i; 
	}
    let resulContainer = document.getElementById("resultContainer");
    resulContainer.innerHTML = `El factorial del numero ${num} es igual a: ${total}`;
}