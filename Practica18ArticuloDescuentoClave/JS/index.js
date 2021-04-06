const btnCaulcularPrecio = document.getElementById("btnCalcular");

btnCaulcularPrecio.addEventListener("click",calcularPrecio);

function calcularPrecio(){
    const costoPrecio = Number  (document.getElementById("claveArticulo").value);
    const NombreArt = document.getElementById("nomArticulo").value;
    const ClaveArt =  Number (document.getElementById("claveArticulo").value);
    const PrecioArt = Number (document.getElementById("precioArticulo").value);
    let Descuento = 0;
    if (costoPrecio == 01){
        Descuento = PrecioArt * 0.9;

    } else{
        Descuento = PrecioArt * 0.8;
    }
    const alertResult = document.getElementById("alertResult");

    alertResult.innerText = "El articulo es: " + NombreArt + " Con clave " + ClaveArt +" Precio Original $" + PrecioArt +  " Y el Precio con Descueto es $" + Descuento;
}