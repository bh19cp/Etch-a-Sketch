const DEFAULTSIZE = 60;

let mousedown = false;
let isErasing = false;

document.addEventListener("mousedown", () => mousedown = true);
document.addEventListener("mouseup", () => mousedown = false);

loadGrid(DEFAULTSIZE);

function loadGrid(size) {

    for (let i = 0; i < DEFAULTSIZE * DEFAULTSIZE; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        div.setAttribute("onmouseover", "changeColor(this)");
        div.setAttribute("style",  `width: ${300/size}px ; height: ${300/size}px` );
        document.getElementById("container").appendChild(div);
    };
}

function changeColor(square) {
    console.log(`color changed :  ${mousedown} on ${square}`);
    if(mousedown)
        square.style.backgroundColor = "black";
}










