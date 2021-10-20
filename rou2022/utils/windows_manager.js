var robot = require("robotjs");
const { windowManager } = require ("node-window-manager");
const { sleep } = require("./spy_utils");

windowManager.requestAccessibility(); 

 

function getwindow(title) {

    let windows = windowManager.getWindows();
  
    for (let index = 0; index < windows.length; index++) {
      
      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
  
        //console.log(windows[index].getTitle().toLowerCase());
        //console.log(windows[index]);
  
        return windows[index];
      }
    
    }
  
    return null;
    
}


function apostar_numero(numero){

  sleep(1000);
  console.log(numero);

getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();  

var mouse = robot.getMousePos();
var color = robot.getPixelColor(mouse.x, mouse.y);
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );



robot.moveMouse(390,546);
sleep(1000)
robot.mouseClick();
sleep(1000)
robot.moveMouse(505,683);
sleep(1000)
robot.mouseClick();





}

 
exports.apostar_numero = apostar_numero,
exports.getwindow = getwindow

