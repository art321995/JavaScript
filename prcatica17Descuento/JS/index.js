const btnCaulcularCompre = document.getElementById("btnCalcular");

btnCaulcularCompre.addEventListener("click",calcularDescuento);

function calcularDescuento(){
    const costoCompra = Number  (document.getElementById("totalCompra").value);
    let Descuento = 0;
    if (costoCompra > 1000){
        Descuento = costoCompra *0.8;

    } else{
        Descuento = costoCompra;
    }
    const alertResult = document.getElementById("alertResult");

    alertResult.innerText = "El total de la compra es: $" + Descuento;
}