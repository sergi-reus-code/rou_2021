

//const { windowManager } = require ("node-window-manager");
var robot = require("robotjs");
//const tesseract = require("node-tesseract-ocr");

//windowManager.requestAccessibility();   //for mac




const { Socket } = require("socket.io");
const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });


//socket.emit('first_connection', "soy spy");










/*

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

*/



function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}







//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
//getwindow('Casino en vivo - Mozilla Firefox').getBounds();
//getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1000, height: 670 });
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
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







//console.log(getwindow('Casino en vivo - Mozilla Firefox').getBounds().height);

//sleep(2000);
//robot.moveMouse(777, 455);

//var img = robot.screen.capture(743, 436, 70, 63);

/*











}

*/




var readlineSync = require('readline-sync'),
  modo = ['Modo Test Archivo', 'Modo Test Rnd', 'Modo Test Manual', 'Modo Normal Manual', 'Modo Normal Automatico (Default)'],
  index = readlineSync.keyInSelect(modo, 'Que modo deseas utilizar?');
  
  switch (index) {
    case 0:
        console.log("Modo 1 -> Modo Test desde archivo \'tiradas.txt\'");  
         
        test_archivo(socket);
        break;
      
    case 1:
      console.log("Modo 2 -> Modo Test automatico con random number");
      test_random(socket);  
        break;
  
    case 2:
      console.log("Modo 3 -> Modo Test con entrada de numeros manual");  
      test_manual(socket);  
      break;
  
    case 3:
      console.log("Modo 4 -> Modo Normal manual con entrada de numeros desde consola");  
      normal_manual();
      break;
      
    case 4:
      console.log("Modo 5 -> Modo Normal automatico (Default)");  
      normal_automatico(socket);
      break; 

    default:
      break;
  }









function test_archivo(socket1) {

   socket1.emit('spy_first_connection', "Spy: Spy funcionando en modo test desde archivo \'tiradas.txt\'"); 


   socket1.on('spy_first_connection', function (msg) { 
    console.log('message: ' + msg);  
  });


}

function test_random(socket1) {

  socket1.emit('spy_first_connection', "Spy: Spy funcionando en modo test automatico random"); 

}

function test_manual(socket1) {

  

  socket1.emit('spy_first_connection', "Spy: Spy funcionando en modo test manual");
  


  spin = readlineSync.question('Spin ? ');
  socket1.emit('spy_spin', spin);
  socket1.emit('spy_spin', spin+1);
  socket1.emit('spy_spin', spin+2);
  socket1.emit('spy_spin', spin+3);
  socket1.emit('spy_spin', spin+4);

    
    

  }




function normal_manual(socket1) {

  socket1.emit('spy_first_connection', "Spy: Spy funcionando en modo test manual"); 

}

function normal_automatico(socket1) {

  socket1.emit('spy_first_connection', "Spy: Spy funcionando en modo test manual"); 

}












  while (1){

    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(mouse.x, mouse.y) );
    //console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(2015, 503) );
    sleep(5);
    
    //var img = robot.screen.capture(777, 455, 2, 2);
    
    //console.log(img.width)
    
    //Get pixel color at 50, 50.
    //var hex = img.colorAt(1, 1);
    //console.log(hex);
  }