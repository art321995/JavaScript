class Foco {

    Estado;

    constructor(){
        this.Estado = false;
    }

   encender(){
       this.Estado = true;
       return "./../img/on.png";
   }

   apagar(){
       this.Estado = false;
       return "./../img/off.png";   
   }
}