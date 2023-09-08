var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var laguraShrek = 100;
var alturaShrek = 100;

var shrekx = 10;
var shreky = 10;

var fundocanvas = "pantano.jpg";
var shrek = "shrek.png";

function desenhar() {
    fundoTag = new Image();
    fundoTag.onload = uploadfundo;
    fundoTag.src = fundocanvas;

    shrekTag = new Image();
    shrekTag.onload = uploadShrek;
    shrekTag.src = shrek;
}

function uploadfundo() {
    ctx.drawImage(fundoTag, 0, 0, canvas.width, canvas.height);
}


function uploadShrek() {
    ctx.drawImage(shrekTag, shrekx, shreky, laguraShrek, alturaShrek);
}

window.addEventListener("keydown", mover)

function mover(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
    }
    if (keyPressed == "38") {
        up();
    }
    if (keyPressed == "39") {
        right();
    }
    if (keyPressed == "40") {
        down();
    }
}

function up() {
    if (shreky > 0) {
        shreky = shreky - 10;
        uploadfundo();
        uploadShrek();

    }
}
function down() {
    if (shreky < 600) {
        shreky = shreky + 10;
        uploadfundo();
        uploadShrek();
    }
}
function left() {
    if (shrekx > 0) {
        shrekx = shrekx - 10;
        uploadfundo();
        uploadShrek();
    }
}
function right() {
    if (shrekx < 700) {
        shrekx = shrekx + 10;
        uploadfundo();
        uploadShrek();

    }
}