var robot = require("robotjs");

 

function main_loop(){
  
  var mouse = robot.getMousePos();
  var color = robot.getPixelColor(mouse.x, mouse.y);
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );

}
 

setInterval(main_loop, 500);