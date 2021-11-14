var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep, tomafoto, tomafoto_prev} = require ("./spy_utils/spy_utils_image");
const { createWorker } = require('tesseract.js');



async function detectarprev() {

  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });



  for (let index = 0; index < 80; index++) {
    const { data: { text } } = await worker.recognize(`./${index}.png`);
    console.log("spin nº: " + Number(text));
    
  }


  await worker.terminate();
  

}









function main_loop(){
  
  var color = robot.getPixelColor(533, 359); 
  
  if (color == "060606" || color == "070707" || color == "660000" || color == "650000" || color == "007328" || color == "479045") {
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
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
//getwindow('Casino en vivo - Mozilla Firefox').getBounds();
//getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();

robot.moveMouse(29, 293);

//tomafoto_prev(83,156,226,181);

detectarprev();



/**
* Main loop
*/
  
//setInterval(main_loop, 1000);