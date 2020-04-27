let counter = 0;
let size = 256;//16x16
let changedGrid = 0;
let randomColorChoosed = false;

document.querySelector("#clearGrid").addEventListener("click", clearGrid);
document.querySelector("#randomColor").addEventListener("click", userWantsRandom);
document.querySelector("#blackColor").addEventListener("click", userWantsBlack);
document.querySelector("#changeGrid").addEventListener("click", changeGrid);

function changeGrid(){//first removes all squares generated and then create new ones with the user input.
    const actualSquares = document.querySelectorAll(".square");
    if(actualSquares){
        for (let i = 0; i < actualSquares.length; i++) {
        actualSquares[i].remove();
        }
    }
    
    size = prompt("Insert the number of files AND rows you want");
    ++changedGrid;
    counter = 0;
    while(counter < size*size){
        let div = document.createElement("div");
        document.querySelector(".squareContainer").style.gridTemplateRows = `repeat(${size}, auto)`;
        document.querySelector(".squareContainer").style.gridTemplateColumns = `repeat(${size}, auto)`;    
        document.querySelector(".squareContainer").appendChild(div).setAttribute("class","square");
        ++counter;
    }
    addListenerToSquares();
}

function userWantsRandom(){
    randomColorChoosed = true;
    return randomColorChoosed;
}

function userWantsBlack(){
    randomColorChoosed = false;
}

function hoverColor(e){
    if (randomColorChoosed){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.toElement.style.backgroundColor = `#${randomColor}`; // e = event. "e.toElement" = event --> element triggered.
    }else{
        e.toElement.style.backgroundColor = "black";
    }   
}
function addListenerToSquares(){
    const squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("mouseover", hoverColor);
            console.log(1);
        }
}

function clearGrid(){
    const coloredSquares = document.querySelectorAll(".square");
    for (let i = 0; i < coloredSquares.length; i++) {
        coloredSquares[i].style.backgroundColor = "white";
    }
}

if(changedGrid == 0){//size hasn't been changed by the user
    
    while (counter < size){
        let div = document.createElement("div");
        document.querySelector(".squareContainer").appendChild(div).setAttribute("class","square");
        ++counter;
    }
    addListenerToSquares();
}