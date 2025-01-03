let gridCoulours = [];
let arcRotation = [];

let rows;
let cols;
let spacing = 24;

let size = [];

const COLOURS = ["#2768B790", "#8A64D690", "#9AD66490", "#D6649190"];
const ANGLES = [45, 90, 135, 90, 45, 135, 15];
const CELLSIZE = 80;

let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;

//////////////////
//setup function//
//////////////////
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    rows = height / spacing;
    cols = width / spacing;

    for (let i = 0; i < cols; i++) {
        size[i] = [];
        for (let j = 0; j < rows; j++) {
            // size[i][j] = (spacing-2)*((i+1)/cols);
            size[i][j] = (spacing) * ((j + 1) / rows);
            // size[i][j] = (spacing-2)*((rows-j)/rows);
        }
    }

    //random colours and angles from arrays
    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {
            gridCoulours.push(random(COLOURS));
            arcRotation.push(random(ANGLES));
        }
    }
}

/////////////////
//draw function//
/////////////////
function draw() {
    background(0);
    noStroke();

    //////////////////////
    //BG circle gradient//
    //////////////////////
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke();
            fill(j / rows * 255);
            ellipse(spacing / 2 + i * spacing, spacing / 2 + j * spacing, size[i][j], size[i][j]);
        }
    }


    ////////////////////////
    /////ROTATING CIRCLES///
    ////////////////////////

    //colour index value
    let colourIndex = 0;
    let angleIndex = 0;

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {

            if (mouseX >= x && mouseX <= x + CELLSIZE && mouseY >= y && mouseY <= y + CELLSIZE) {
                fill(gridCoulours[colourIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE, 0, 360);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, 0, 360);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, 0, 360);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, 0, 360);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, 0, 360);
            } else {
                fill(gridCoulours[colourIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE, angle + arcRotation[angleIndex], angle - arcRotation[angleIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, angle1 + arcRotation[angleIndex], angle1 - arcRotation[angleIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, angle2 + arcRotation[angleIndex], angle2 - arcRotation[angleIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, angle3 + arcRotation[angleIndex], angle3 - arcRotation[angleIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, angle4 + arcRotation[angleIndex], angle4 - arcRotation[angleIndex]);
                colourIndex++;
                angleIndex++;
            }
        }
    }

    angle++;
    angle1++;
    angle2++;
    angle3++;
    angle4++;

}
