const COLOURS = [];

function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    background(255);
    noStroke();

    const CELLSIZE = 100;
    for (let y = 50; y < height; y += CELLSIZE) {
        for (let x = 100; x < width; x += CELLSIZE) {
            fill(238, 230, 75);
            circle(x, y, CELLSIZE);
            x += CELLSIZE;
        }
        y += CELLSIZE;
    }

    for (let y = 50; y < height; y += CELLSIZE) {
        for (let x = 140; x < width; x += CELLSIZE) {
            fill(39, 87, 183, 120);
            circle(x, y, CELLSIZE);
            x += CELLSIZE;
        }
        y += CELLSIZE;
    }
}