class Proyectil {
    
    velocidadInicial = 0;
    angulo = 0;

    posicionesBottom = [];
    posicionesLeft = [];

    constructor(velocidadInicialPm,anguloPm){
        this.velocidadInicial = velocidadInicialPm ;
        this.angulo = anguloPm;

        console.log( `
        Velocidad --> ${this.velocidadInicial}
        Angulo --> ${this.angulo}`);
    }

    calcularDistanciX(t){
        let distaciaX = this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180)) * t;
        return distaciaX;
    }
    calcularDistanciY(t){
        let distaciaY = this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));
        distaciaY = distaciaY * t -0.5 * 9.8 * Math.pow(t, 2);
        return distaciaY;
    }

    almacenarRecorrido(){

        let tiempo = 0;
        while(true){
            tiempo += 0.01;
            let left = this.calcularDistanciX(tiempo);
            let bottom =  this.calcularDistanciY(tiempo);
            if(left < 0 || bottom < 0 || left >= 100 || bottom >= 100){
                break;
            }
            this.posicionesLeft.push(left);
            this.posicionesBottom.push(bottom);
        }
    }
}

let proyectil1 = new Proyectil(45,45);

proyectil1.almacenarRecorrido();
let posicionesX = proyectil1.posicionesLeft;
console.log("🚀 ~ file: proyectil.class.js ~ line 48 ~ posicionesX", posicionesX)
let posicionesY = proyectil1.posicionesBottom;
console.log("🚀 ~ file: proyectil.class.js ~ line 50 ~ posicionesY", posicionesY)

console.log(`distanciaX --> ${proyectil1.calcularDistanciX(3)}`);
console.log(`distanciaY --> ${proyectil1.calcularDistanciY(5)}`);