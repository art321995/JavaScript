const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarNumero);

function evaluarNumero(){
    let numero = 0;
    let continuar = true;
    let numeromayor500 = 0;
    let numeromenor500 = 0;
    let numeromayor1000 = 0;
    let venta1 = "";
    let venta2 = "";
    let venta3 = "";
    let Acumuladortotal = "";


    while(continuar == true){
        numero = prompt('Ingrese el monto de la venta: $$$');
        if(isNaN(numero)==true){
            alert("Es neceasario que ingrese solo numeros");
            return;
        }else if (numero==null){
            continuar = false;
        }else{numero = Number(numero);
            if(numero >= 1000){
                numeromayor1000++;
                venta1 = Number (venta1 + numero);
            }else if(numero >= 500 && numero < 1000){
                numeromayor500++;
                venta2 = Number (venta2 + numero);
            }else {
                numeromenor500++;
                venta3 =Number (venta3 + numero);
            }
        }
        Acumuladortotal =  venta1 + venta2 + venta3;
    }

    let numeromenor1000 = numeromayor500 + numeromenor500;

    
   
    let resulContainer = document.getElementById("resultContainer");

    resulContainer.innerHTML = `<span>
    Ingreso ${numeromayor1000} ventas mayores o iguales a  $1000 
    <br> Ingreso ${numeromenor1000} ventas menores a $1000
    <br> Ingreso ${numeromayor500} ventas mayores o iguales a  $500 
    <br> Ingreso ${numeromenor500} ventas menores a $500
    <br> El total de la venta son: $${Acumuladortotal}
    <\span>`
}