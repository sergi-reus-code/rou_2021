var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep, tomafoto} = require ("./spy_utils/spy_utils_image");
const { createWorker } = require('tesseract.js');



async function detectar() {

  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });
  const { data: { text } } = await worker.recognize('./last.png');
  console.log("spin nº: " + Number(text));
  await worker.terminate();
  

}









function main_loop(){
  
  var color = robot.getPixelColor(533, 359); 
  
  if (color == "060606" || color == "070707" || color == "660000" || color == "650000" || color == "007328" || color == "408544"|| color == "048835") {
    sleep(1000)
    tomafoto(507,300,50,40);
    sleep(2000)
    detectar();
    
  }

  var mouse = robot.getMousePos();
  var color = robot.getPixelColor(mouse.x, mouse.y);
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );

}
  


/**
* Previous work
*/
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();






/**
* Main loop
*/
  
setInterval(main_loop, 1000);