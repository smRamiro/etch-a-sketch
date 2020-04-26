let counter = 0;

while (counter < 256){
    let div = document.createElement("div");
    document.querySelector(".squareContainer").appendChild(div).setAttribute("class","square");
    ++counter;
}