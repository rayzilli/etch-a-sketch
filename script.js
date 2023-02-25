// create 16 x 16  grid of divs

const container = document.getElementById("container");


for (let i =0; i < 16 * 16; i++){
const newDiv = document.createElement("div");
newDiv.className = "row";
container.appendChild(newDiv);
}

const overSquare = document.querySelectorAll(".row");
for (let i =0; i < overSquare.length; i++){
overSquare[i].addEventListener("mouseover", e =>{
  overSquare[i].style.backgroundColor ="purple";
})
}

const slider = document.getElementById("range");
slider.addEventListener("change", (e) =>{
    console.log(slider.value);
    document.getElementById("amount").innerHTML = slider.value;
})


