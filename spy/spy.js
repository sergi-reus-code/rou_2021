var robot = require("robotjs");
//const tesseract = require("node-tesseract-ocr");
const { getwindow, sleep, tomafoto , tomafoto2} = require ("./utils/spy_utils");

const { createWorker } = require('tesseract.js');

const prompt = require('prompt-sync')({sigint: true});



/**
 * Inicio Programa
 */
//Poner ventana delante
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
getwindow('Casino en vivo - Mozilla Firefox').getBounds();
getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
 
//Hacer foto ultimo numero















/**
 * Main loop
 */


  

  




/*
async function detectar() {

  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });
  const { data: { text } } = await worker.recognize('./last.png');
  data_to_return = text;
  console.log(text);
  await worker.terminate();

  //return data_to_return;

}


*/






  function main_loop(){
  
    /*var color = robot.getPixelColor(533, 359); 
  
    if (color == "060606" || color == "070707" || color == "660000" || color == "650000" || color == "007328" || color == "479045") {
      //sleep(1000)
      //tomafoto2(507,300,50,50);
      //sleep(5000)
      //detectar();
  
    }*/





    var mouse = robot.getMousePos();
    var color = robot.getPixelColor(mouse.x, mouse.y);
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );
    //tomafoto();
  

    var spin = prompt('Introduce Spin: ');

    robot.moveMouse(390,546);
    sleep(1000)
    robot.mouseClick();
    sleep(1000)
    robot.moveMouse(505,683);
    sleep(1000)
    robot.mouseClick();




  }
  

  setInterval(main_loop, 1000);