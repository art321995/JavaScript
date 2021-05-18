const drawProyectil = document.getElementById("drawProyectil");

drawProyectil.addEventListener("click", dibujarSpan);


function dibujarSpan(){
        const proyectil = new Proyectil(50, 50);
        proyectil.almacenarRecorrido();
        let posicionesX = proyectil.posicionesLeft;
        console.log("🚀 ~ file: ui.class.js ~ line 9 ~ UI ~ dibujarSpan ~ posicionesX", posicionesX)
        let posicionesY = proyectil.posicionesBottom;
        console.log("🚀 ~ file: ui.class.js ~ line 11 ~ UI ~ dibujarSpan ~ posicionesY", posicionesY)
        
        for(let i=0; i<posicionesY.length; i++){

            const span = document.createElement("span");
            span.style.left = `${posicionesX[i]}%`;
            span.style.bottom = `${posicionesY[i]}%`;

            document.getElementById("contenedor").appendChild(span);
        }
}