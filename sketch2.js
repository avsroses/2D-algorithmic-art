const COLOURS = ["#FF0000", "#FFFF00", "#FFFFF0", "#00008B", "#FFFFF0", "#000000"];

function setup() {
    createCanvas(780, 600);
    noLoop();
}

function draw() {
    background(255);
    noStroke();

    const CELLSIZE = 100;
    for(let y = 10; y < height; y += CELLSIZE) {
      for(let x = 10; x < width; x += CELLSIZE) {
        fill(random(255));
        rect(x, y, CELLSIZE);
        x += CELLSIZE;
      }
      y += CELLSIZE;
    }

    for(let y = 10; y < height; y += CELLSIZE) {
        for(let x = 50; x < width; x += CELLSIZE) {
          fill(random(255));
          rect(x, y, CELLSIZE);
          x += CELLSIZE;
        }
        y += CELLSIZE;
      }
}