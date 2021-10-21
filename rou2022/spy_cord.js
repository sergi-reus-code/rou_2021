var robot = require("robotjs");
const { windowManager } = require ("node-window-manager");


/*
function getwindow(title) {

  let windows = windowManager.getWindows();

  for (let index = 0; index < windows.length; index++) {
    var data = JSON.stringify(windows[index].path);
    //fs.appendFileSync('c:\\combi\\ww.txt',data);

    if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){

      //console.log(windows[index].getTitle().toLowerCase());
      //console.log(windows[index]);

     return windows[index];
    }
  
  }

  return null;
  
}*/


//getwindow('ruleta en vivo y casino live! ✅ 888 casino - mozilla firefox').bringToTop();
//getwindow('ruleta en vivo y casino live! ✅ 888 casino').bringToTop();
//getwindow('live quantum roulette').bringToTop();
//live quantum roulette
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
//getwindow('Casino en vivo - Mozilla Firefox').getBounds();
//getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
 

function main_loop(){
  
  var mouse = robot.getMousePos();
  var color = robot.getPixelColor(mouse.x, mouse.y);
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );

}
 

setInterval(main_loop, 500);