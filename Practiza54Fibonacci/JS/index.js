const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarFibonacci);

function evaluarFibonacci(){
    let numero = Number (prompt("Ingrese el numero: "));
	let fibonacci = [0,1];

	for(i=2; i <= numero; i++){
		fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
		
	}
    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span> La serie Fibonacci del Numero ${numero} es: ${fibonacci} <\span>`;
}