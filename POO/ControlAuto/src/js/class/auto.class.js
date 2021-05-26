class Auto{

    

    distanciaX = 0;
    distanciaY = 0;


    auto= document.getElementById("imgAuto");

    moveRight(){
        this.distanciaX = this.distanciaX + 2;
        if(this.distanciaX > 90){
            this.distanciaX = this.distanciaX - 2;
        }
        auto.style.left = this.distanciaX + "%";
    }
    moveLeft(){
        this.distanciaX = this.distanciaX - 2;
        if(this.distanciaX < 0){
            this.distanciaX = this.distanciaX + 2;
        }
        auto.style.left = this.distanciaX + "%";
    }
    moveUp(){
        this.distanciaY = this.distanciaY + 2;
        if(this.distanciaY > 0){
            this.distanciaY = this.distanciaY - 2;
        }
        auto.style.top = (-this.distanciaY) + "%";
    }
    moveDown(){
        this.distanciaY = this.distanciaY - 2;
        if(this.distanciaY < -80){
            this.distanciaY = this.distanciaY + 2;
        }
        auto.style.top = (-this.distanciaY) + "%";
    }
}