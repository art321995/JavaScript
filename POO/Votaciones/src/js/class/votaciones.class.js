class Votaciones{

    Afavor = 0;
    Encontra = 0;
    Abstencion = 0;

    increaseVote(getButton){
        switch(getButton){
            case "btnFavor":
            this.Afavor++;
            break;
            case "btnEncontra":
                this.Encontra++;
                break;
            case "btnAbstencion":
                this.Abstencion++;
                break;
        }
    }
}