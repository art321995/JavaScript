const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarImpuesto);

function evaluarImpuesto(){

    let numautos = prompt("Ingrese con cuantos autos cuenta");
    let impuesto = "";
    let precio = "";
    let total = "";
    let clave ="";
    let clave1 = "";
    let clave2 = "";
    let clave3 = "";
    


    for(let i = 1; i <= numautos; i++){
        precio =  Number (prompt( `Ingrese el $precio$ del auto ${i}:`));
        clave = prompt(`Ingrese la calve del auto ${i}: `);
        if(clave == 1){
            impuesto = precio * .10;
            clave1 = Number( clave1 + impuesto);
        }else if(clave == 2){
            impuesto = precio * .07;
            clave2 = Number(clave2 + impuesto);
        }else if(clave == 3){
            impuesto = precio *.05;
            clave3 = Number(clave3 + impuesto);
        }else {
            impuesto = alert("Solo puedes ingresar numeros del 1 al 3");
            return;
        }
        total = total + impuesto;

        let resulContainer = document.getElementById("resultContainer");
        resulContainer.innerHTML+=(`El auto numero ${i} paga de impuestos $${impuesto.toFixed(2)}<br>`)

       
    }

    let resulContainer1 = document.getElementById("resultContainer1");
    resulContainer1.innerHTML=(`El total a pagar de impuesto de la categoria 1 es: $${clave1}<br>
                               El total a pagar de impuesto de la categoria 2 es: $${clave2}<br>
                               El total a pagar de impuesto de la categoria 3 es: $${clave3}<br>
                               El total a pagar de impuestos por todos los vehiculos es: $${total} `)
    
}