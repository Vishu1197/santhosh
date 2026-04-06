const text = "Santhosh Viren Vijayan";
let index = 0;

function typeEffect() {
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();
