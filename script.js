// create grid
const slider = document.getElementById("range");
createBoard(slider.value);

slider.addEventListener("input", (e) =>{
    console.log(slider.value);
    document.getElementById("amount").innerHTML = slider.value;
    createBoard(slider.value);
})

function createBoard(amount){
    const container = document.getElementById("container");
    container.innerHTML ="";
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
    const squareAmount = amount;
    for (let i =0; i < amount * amount; i++){
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    container.appendChild(newDiv);
    reDraw();
    };
    
    }

function reDraw(){
const overSquare = document.querySelectorAll(".square");
for (let i =0; i < overSquare.length; i++){
overSquare[i].addEventListener("mouseover", e =>{
  overSquare[i].style.backgroundColor ="purple";
})
}
}











