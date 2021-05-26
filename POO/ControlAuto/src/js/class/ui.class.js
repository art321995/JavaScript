
const auto = new  Auto();

function move(event){
    if(event.keyCode == "39"){
        auto.moveRight();    
    }else if(event.keyCode == "37"){
        auto.moveLeft();
    }else if(event.keyCode == "38"){
        auto.moveUp();
    }else if(event.keyCode == "40"){
        auto.moveDown();
    }
}
document.onkeyup = move;
