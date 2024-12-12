let gridCoulours = [];
const COLOURS = ["#2768B790", "#8A64D690", "#9AD66490", "#D6649190"];
let angle = 0;
const CELLSIZE = 80;

function setup() {
    createCanvas(800, 800);
    //noLoop();
    angleMode(DEGREES);

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            gridCoulours.push(random(COLOURS))
        }
    }
}

function draw() {
    background(255);

    //colour index value
    let colourIndex = 0;

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            fill(gridCoulours[colourIndex]);
            arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE,  angle + 45, angle - 45);
            // fill(gridCoulours[colourIndex + 1]);
            // arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, angle + 90, angle - 90);
            // fill(gridCoulours[colourIndex]);
            // arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, angle + 45, angle - 45);
            // fill(gridCoulours[colourIndex + 2]);
            // arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, angle + 90, angle - 90);
            // fill(gridCoulours[colourIndex + 3]);
            // arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, angle + 135, angle - 135);
            //angle ++;
            colourIndex++;
        }
    } 
    angle ++;

}