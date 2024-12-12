const COLOURS = ["#2768B790", "#8A64D690", "#9AD66490", "#D6649190"];
const SOLIDCOLOURS = ["#E08E7D", "#1F25A6", "#86B5C8", "#C01111", "#541778", "#C0BFBF"]
const IDEA2COLOURS = ["#FF0000", "#FFFF00", "#FFFFF0", "#00008B", "#FFFFF0", "#000000"];

const ROTATIONS = [1, 2, 3, 4];

let angle = 0;
const CELLSIZE = 80;

function setup() {
    createCanvas(800, 800);
    noLoop();
    angleMode(DEGREES);
}

function draw() {
    background(225);

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            fill(255)
            rect(x, y, CELLSIZE, CELLSIZE);
        }
    }

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            angle = 90 * (random(ROTATIONS));
            rotate(angle);
            arc(x, y, CELLSIZE*2, CELLSIZE*2, 0, 90);
        }
    }



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
    /*
    const CELLSIZE = 80;
    const ARCVALUES = [TAU * 0.25, TAU * 0.5, TAU * 0.75, TAU, PI + QUARTER_PI];
    const ARCVALUES2 = [TAU * 0.75, TAU];
    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            //let axis = createVector(x + CELLSIZE / 2, y + CELLSIZE / 2, 0);
            //rotate(QUARTER_PI, axis);
            fill(random(COLOURS));
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES2));
            fill(random(COLOURS));
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, 0, random(ARCVALUES));
            fill(random(COLOURS));
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, 0, random(ARCVALUES));
            fill(random(COLOURS));
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, 0, random(ARCVALUES));
            fill(random(COLOURS));
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, 0, random(ARCVALUES));
        }
    } */
}