const DEFAULTSIZE = 16;

let mousedown = false;

loadGrid(DEFAULTSIZE);



function loadGrid(size) {

    for (let i = 0; i < DEFAULTSIZE * DEFAULTSIZE; i++) {
        $("#container").append("<div class='grid' onmouseover = changeColor()></div>");
    };
    
    $(".grid").width(300/DEFAULTSIZE);
    $(".grid").height(300/DEFAULTSIZE);
}

function isPressed(val) {
    mousedown = val;
}

function changeColor() {
    if(mousedown)
        $(".grid").css("background-color","black");
}










