// This function is called once at the beginning to set up the canvas and initialize variables.
function setup(){
    // Create a 1000x1000 canvas for drawing
    createCanvas(1000,1000);

    // Set the color mode to HSB with a range of 360 for hue, 150 for saturation, and 100 for brightness, and alpha (opacity) of 1
    colorMode(HSB,360,150,100,1);

    // Create a slider for adjusting the saturation of the strokes with an initial value of 50 and a range of 100 to 255
    slider = createSlider(100, 255, 50);

    // Create a slider for adjusting the number of lines drawn with an initial value of 5 and a range of 6 to 32
    slider2 = createSlider(6, 32, 5);
}

// This function is called repeatedly to draw the canvas
function draw() {
    // Move the origin (0,0) to the center of the canvas
    translate(width / 2, height / 2);

    // Get the value of the saturation slider
    let sat = slider.value();

    // Get the value of the angle slider
    angle = slider2.value();

    // Loop through the specified number of angles
    for (let i = 0; i < angle; i++) {
      // Rotate the canvas by the specified angle
      rotate(angle);

      // Set the stroke weight to 15 and the stroke color to a shade of the current mouse X position with the specified saturation and opacity
      strokeWeight(15);
      stroke(mouseX, sat, sat, 0.5);

      // Draw a line from the current mouse position to the previous mouse position (pmouseX and pmouseY)
      line(mouseX, mouseY, pmouseX, pmouseY);

      // Push the current drawing state onto the stack, scale the canvas vertically by -1, draw a line, and then pop the state off the stack to restore it
      push();
      scale(1, -1);
      line(mouseX, mouseY, pmouseX, pmouseY);
      pop();
    }
}
