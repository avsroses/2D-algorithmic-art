let isPressing = false;
let gridCoulours = [];
const COLOURS = ["#2768B790", "#8A64D690", "#9AD66490", "#D6649190"];
const CELLSIZE = 80;

let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;

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
    noStroke();

    //colour index value
    let colourIndex = 0;

    for (let y = 0; y < height; y += CELLSIZE) {
        for (let x = 0; x < width; x += CELLSIZE) {

            if(isPressing && mouseX >= x && mouseX <= x + cellSize && mouseY >= y && mouseY <= y + cellSize){
                fill(0)
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE, 0, 270);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, 0, 90);            
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, 0, 145);  
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, 0, 45);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, 0, 90);
            } else {
                fill(gridCoulours[colourIndex]);
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE, CELLSIZE,  angle + 45, angle - 45);        
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 1.3, CELLSIZE / 1.3, angle1 + 90, angle1 - 90);                
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 2, CELLSIZE / 2, angle2 + 135, angle2 - 135);     
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 3, CELLSIZE / 3, angle3 + 90, angle3 - 90);   
                arc(x + CELLSIZE / 2, y + CELLSIZE / 2, CELLSIZE / 4, CELLSIZE / 4, angle4 + 135, angle4 - 135);
                colourIndex++;
            }
        }
    } 

    angle++;
    angle1++;
    angle2++;
    angle3++;
    angle4++;

}

function mousePressed(){
    isPressing = true;
}
function mouseReleased(){
    isPressing = false;
}