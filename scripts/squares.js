let counter = 0;

while (counter < 256){
    let div = document.createElement("div");
    document.querySelector(".squareContainer").appendChild(div).setAttribute("class","square");
    ++counter;
}

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", changeColor);
}

function changeColor(e){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.toElement.style.backgroundColor = `#${randomColor}`; // e = event. "e.toElement" = event --> element triggered.

}