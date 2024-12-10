const COLOURS = ["#2768B790", "#8A64D690", "#9AD66490", "#D6649190"];
const SOLIDCOLOURS = ["#EEE64B", "#4DEF7F", "#AB4DEF", "#EFAD4D", "#BFD641"]

function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    background(255, 10);
    noStroke();

    /////////////
    //IDEA 1/////
    /////////////
    /*
    //First layer
    const CELLSIZE = 100;
    for (let y = 100; y < height; y += CELLSIZE) {
        for (let x = 100; x < width; x += CELLSIZE) {
            fill(random(SOLIDCOLOURS));
            circle(x, y, CELLSIZE); // x + random(-10, 10), y + random(-10, 10), CELLSIZE
            x += CELLSIZE;
        }
        y += CELLSIZE;
    }

    //Second layer
    for (let y = 100; y < height; y += CELLSIZE) {
        for (let x = 140; x < width; x += CELLSIZE) {
            fill(random(COLOURS));
            circle(x, y, CELLSIZE); // x + random(-10, 10), y + random(-10, 10), CELLSIZE
            x += CELLSIZE;
        }
        y += CELLSIZE;
    } */

    /////////////
    //IDEA 2/////
    /////////////
    const CELLSIZE = 80;
}