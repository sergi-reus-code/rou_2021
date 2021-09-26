const { windowManager } = require ("node-window-manager");
var robot = require("robotjs");
const tesseract = require("node-tesseract-ocr");

windowManager.requestAccessibility();   //for mac






function getwindow(title) {

  let windows = windowManager.getWindows();

  //console.log(windows);


  for (let index = 0; index < windows.length; index++) {
    
   
    

    if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){

      console.log(windows[index].getTitle().toLowerCase());
      console.log(windows[index]);

      return windows[index];
    }





    
  }

  return null;
  
}


function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}







getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1000, height: 670 });
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
/*
sleep(1000);
robot.moveMouse(1378, 781);
sleep(500);
robot.mouseClick("left");


sleep(1000);
robot.moveMouse(36, 98);
robot.mouseClick("left");

sleep(1000);
robot.moveMouse(160, 411);
sleep(500);
robot.mouseClick("left");


sleep(1000);
robot.moveMouse(347, 149);
sleep(500);
robot.mouseClick("left");

sleep(1000);
robot.moveMouse(69, 249);
sleep(500);
robot.mouseClick("left");

sleep(2000);
robot.moveMouse(541, 113);
sleep(500);
robot.mouseClick("left");

sleep(4000);
robot.moveMouse(1127, 396);
sleep(500);
robot.mouseClick("left");


sleep(4000);
robot.moveMouse(1461, 613);
sleep(500);
robot.mouseClick("left");






*/







console.log(getwindow('Casino en vivo - Mozilla Firefox').getBounds().height);

sleep(2000);
robot.moveMouse(777, 455);

//var img = robot.screen.capture(743, 436, 70, 63);



while (1){

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(mouse.x, mouse.y) );
//console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(777, 455) );
sleep(500);

var img = robot.screen.capture(777, 455, 2, 2);

console.log(img.width)

//Get pixel color at 50, 50.
//var hex = img.colorAt(1, 1);
//console.log(hex);










}
