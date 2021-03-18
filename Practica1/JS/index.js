let paragraph = document.getElementById("mainParagraph");
let btnNumeric = document.getElementById("numeric");
let btnText = document.getElementById("text");
let btnBool = document.getElementById("bool");

btnNumeric.addEventListener("click", WriteNumericValue);
btnText.addEventListener("click", WriteTextValue);
btnBool.addEventListener("click", writeBoolValue);



function WriteNumericValue(){
    let numericValue = 2+2;
    paragraph.textContent = numericValue;
}

function WriteTextValue(){
    let textValue = "Arturo Esqueda";
    paragraph.textContent = textValue;
}

function writeBoolValue(){
    let boolValue = true;
    prograph.textContent = boolValue;
    
}