
function setup() {
    createCanvas(800, 800);
    //noLoop();
}

function draw() {
    background(255);
    // let angle = frameCount * 0.01;
    // rotate(angle);
    // let axis = createVector(1, 1, 0);
    // rotate(QUARTER_PI, axis);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
    fill(0);
    rotate(QUARTER_PI);
    arc(100, 100, 80, 80, 0, PI + HALF_PI);
}