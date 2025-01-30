const start = document.querySelector(".start"); 
const stop = document.querySelector(".stop");
const co = document.querySelector(".code");


let colorid = "";

let pressed = false; 


start.onclick = () => {
    if(pressed==false)
    {
        colorid = setInterval(chooseColor, 1000);
        pressed=true; 
    }
}

function chooseColor() {
    let color = "#";
    let back = "#";
    const hex = "0123456789ABCDEF";
    for(let i=0; i<6; i++)
    {
        color = color + hex[Math.floor(Math.random()*16)];
        back = back + hex[16-Math.floor(Math.random() * 16)]; 
    }
    document.body.style.background = color; 
    co.innerText = "Hex Code: "+ color; 
    co.style.color = color; 
    co.style.background = back; 
}

stop.onclick = () => {
    clearInterval(colorid);
    pressed = false;
}

