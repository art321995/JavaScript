const btnCalcularDescuento = document.getElementById("btnCalcular");

btnCalcularDescuento.addEventListener("click", calcularDescuento);

function calcularDescuento(){

    let Total = Number (document.getElementById("total").value);
    let resultado = "";
    let Descuento = 0;

    if (Total >= 3600){
        Descuento = Total * 0.84;
        resultado = `El total de su compra es de: $${Descuento} ya que cuenta con un 16% de Descuento`;
    }else{
        Descuento = Total * 0.93;
        resultado = `El total de su compra es de: $${Descuento} ya que cuenta con un 7% de Descuento`;
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-success">${resultado}<div>`;

}