const GRID = 20;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);
    // Calculate number of rows and columns
    let cols = width / GRID;
    let rows = height / GRID;
    
    // Loop through X & Y positions
    for ( var x = 1; x < cols; x++ ) {
      for ( var y = 1; y < rows; y++ ) {
        
        // Set fill colour based on X + Y position
        let r = 255;
        let g = map( x, 0, width / GRID, 0, 255 );
        let b = map( y, 0, height / GRID, 0, 255 );
        fill( r, g, b );
        
        // Calculate ellipse location
        var ellipse_x = x * GRID;
        var ellipse_y = y * GRID;
        
        // Calculate distance from ellipse location to mouse location
        var mouseDistance = dist( ellipse_x, ellipse_y, mouseX, mouseY );
  
        // Scale mouse distance
        var radius = mouseDistance * 0.35;
        
        // Draw ellipse
        rect(ellipse_x, ellipse_y, radius, radius );
      } 
    }
}
