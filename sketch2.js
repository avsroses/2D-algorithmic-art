function setup() {
    createCanvas(800, 800);
    noLoop();
    
}

function draw() {
    background(220);
    
    const CELLSIZE = 100;
    for(let y = 0; y < height; y += CELLSIZE) {
      for(let x = 0; x < width; x += CELLSIZE) {
        fill(random(255));
        let x = width/2; 
        let y = height/2;
        circle(x, y, CELLSIZE);
      }
    }
}