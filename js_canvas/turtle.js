// =====================================================================================
var canvas = document.getElementById('canvas');

var turtle = { x: 0, y: 0, angleInRadians: 0, penDown: false, penColor: "#000000", lineWidth: 2};

var color = {black : "#ffffff", red : "#ff0000", green : "#00ff00", blue : "#0000ff", yellow : "#ffff00",  fuchsia : "#ff00ff",  aqua : "#00ffff"}

if (canvas && canvas.getContext)  {     // does the browser support 'canvas'?
  	turtle.ct = canvas.getContext("2d");   // get drawing context
} else {
    alert('You need a browser which supports the HTML5 canvas!');
}

// =====================================================================================
turtle.logPenStatus = function() {
    console.log('x=' + this.x + "; y=" + this.y + '; angle = ' + this.angle + '; penDown = ' + this.penDown);
}

turtle.forward = function(length) {
  // console.log('forward(' + length + ')');
  // this.logPenStatus();
   var x0 = this.x,
   y0 = this.y;
   this.x += length * Math.sin(this.angleInRadians);
   this.y += length * Math.cos(this.angleInRadians);
    if (this.ct) {
    if (this.penDown) {
      //this.logPenStatus();
    this.ct.beginPath();
    this.ct.lineWidth   = this.lineWidth;
    this.ct.strokeStyle = this.penColor;
    this.ct.moveTo(x0, y0);
    this.ct.lineTo(this.x, this.y);
    this.ct.stroke();
    }
  }
   else
    this.ct.moveTo(this.x, this.y);
   return this;
  }

 turtle.backward = function(length) {
        this.forward(-length);
        return this;
 }

 turtle.left = function(angleInDegrees) {
        // console.log('left(' + angleInDegrees + ')');
        // A complete circle, 360º, is equivalent to 2π radians
        // angleInDegrees is an angle measure in degrees
	this.angleInRadians += angleInDegrees * Math.PI / 180.0;
	return this;
  }

 turtle.right = function(angleInDegrees) {
        this.left(-angleInDegrees);
        return this;
    }


 turtle.angle = function() {
     // the turtle status is hold in this.angleInRadians;
     // degrees are often more convenient for the display
     return this.angleInRadians * 180.0 / Math.PI;
 }

// =====================================================================================
// Some example definitions
// =====================================================================================

turtle.drawArrow = function() {
      turtle.forward(50);
      turtle.left(150);
      turtle.forward(7);
      turtle.backward(7);
      turtle.right(150);
      turtle.right(150);
      turtle.forward(7);
      turtle.backward(7);
      turtle.left(150);
  }

turtle.hexagon = function(length) {
    for (i=1; i <= 6; i++) {
      turtle.forward(length);
      turtle.left(60);
    }
  }

 turtle.drawStar = function() {
    for (i=0; i < 18; i++) {
      turtle.left(100);
      turtle.forward(60);
    }
  }

turtle.square = function(length) {
    for (i=1; i <= 4; i++) {
      turtle.forward(length);
      turtle.left(90);

    }
  }

turtle.figure3 = function(count, angle) {
    var i;
    for (i=1; i <= count; i++) {
       console.log(i);
       turtle.drawArrow();
       turtle.left(angle);
    }
  }


turtle.figure4 = function(count, angle, fn) {
    var i;
    for (i=1; i <= count; i++) {
       console.log(i);
       fn();
       turtle.left(angle);
    }
 }


// =====================================================================================
// Using the example definitions
// =====================================================================================
/*
turtle.x = 100;
turtle.y = 10;
turtle.penDown = true;
turtle.drawArrow();
turtle.penColor = color.red;
turtle.hexagon(50);
turtle.penDown = false;


turtle.left(60);
turtle.forward(50);
turtle.right(60);
turtle.penDown = true;

turtle.penColor = color.yellow;
turtle.drawStar();
turtle.x = 60;
turtle.y = 60;
turtle.lineWidth = 6;
turtle.penColor = color.green;
turtle.square(50);

turtle.x = 50;
turtle.y = 50;
turtle.lineWidth = 1;
turtle.penColor = color.blue;
turtle.figure3(6,60);

turtle.x = 70;
turtle.y = 40;
turtle.penColor = color.fuchsia;
turtle.lineWidth = 2;
turtle.figure4(8,45, turtle.drawArrow);
*/
