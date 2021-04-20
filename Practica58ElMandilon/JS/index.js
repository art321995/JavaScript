const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click",evaluarVenta);

function evaluarVenta(){
    
    let cantSucursal = parseInt(prompt("Ingrese la cantidad de Sucursales con las que cuenta:"))
    let totalTienda = 0;
    let totalSucursal = 0;
    let totalEmpresa = 0;
   
    

    for (let i = 1; i <= cantSucursal; i++) {
        let cantidadTiendas = parseInt(prompt("Ingrese la cantidad de tiendas con las que cuenta la sucursal: " + i))
        totalSucursal = 0;
        for (let j = 1; j <= cantidadTiendas; j++) {
            let cantidadEmpleados = parseInt(prompt("Ingresa la cantidad de empleados de la tienda: " + j + " de la sucursal: " + i))
            totalTienda = 0;
            for (let k = 1; k <= cantidadEmpleados; k++) {
                let ventaEmpleado = parseInt(prompt("Ingresa la venta $$ del empleado: " + k + " de la tienda " + j + " de la sucursal " + i));

                let resulContainer = document.getElementById("resultContainer");
                resulContainer.innerHTML= (`Sucursal: ${i} <br>Tienda: ${j} <br>Empleado: ${k} <br>Venta: $${ventaEmpleado}.00 <br>`);
                totalTienda += ventaEmpleado;
            }
            let resulContainer1 = document.getElementById("resultContainer1");
            resulContainer1.innerHTML=(`Sucursal: ${i}  <br>Tienda: ${j}  <br>Venta:   $${totalTienda}.00 <br>`)
            totalSucursal += totalTienda;
        }
        let resulContainer2 = document.getElementById("resultContainer2");

        resulContainer2.innerHTML=(`Sucursal: ${i} <br>Venta: $${totalSucursal}.00 <br>`)
        totalEmpresa += totalSucursal;
    }
    let resulContainer3 = document.getElementById("resultContainer3");
    resulContainer3.innerHTML=(`Venta Total: $${totalEmpresa}.00`)

}
