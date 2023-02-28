// create grid
const slider = document.getElementById("range");
document.getElementById("amount").innerHTML = slider.value;

const clear = document.getElementById("reset");
clear.addEventListener("click", () => createBoard(slider.value, myColor.value))


const myColor = document.getElementById("myColor");
myColor.addEventListener("input", () => reDraw(myColor.value));

slider.addEventListener("input", (e) =>{
    document.getElementById("amount").innerHTML = slider.value;
    createBoard(slider.value, myColor.value);
})



function createBoard(amount, color){
    const container = document.getElementById("container");
    container.innerHTML ="";
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
    const squareAmount = amount;
    for (let i =0; i < amount * amount; i++){
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    container.appendChild(newDiv);
    reDraw(color);
    };
    
    }


function reDraw(newColor){
const overSquare = document.querySelectorAll(".square");
for (let i =0; i < overSquare.length; i++){
overSquare[i].addEventListener("mouseover", e =>{
  overSquare[i].style.backgroundColor = newColor;
})
}
}



createBoard(slider.value, myColor.value);










