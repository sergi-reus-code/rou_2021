const { windowManager } = require ("node-window-manager");
var robot = require("robotjs");
const tesseract = require("node-tesseract-ocr");

var Jimp = require('jimp');


const io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8080", { forceNew: true });



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


//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
//getwindow('Casino en vivo - Mozilla Firefox').getBounds();
//getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1000, height: 670 });
//getwindow('Casino en vivo - Mozilla Firefox').bringToTop();

/*
ioClient.on("spy_or_slave",(p)=>{
  ioClient.emit("spy_slave", "slave");
})
*/










function captureImage({ x, y, w, h }) {
  const pic = robot.screen.capture(x, y, w, h)
  const width = pic.byteWidth / pic.bytesPerPixel // pic.width is sometimes wrong!
  const height = pic.height
  const image = new Jimp(width, height)
  let red, green, blue
  pic.image.forEach((byte, i) => {
    switch (i % 4) {
      case 0: return blue = byte
      case 1: return green = byte
      case 2: return red = byte
      case 3: 
        image.bitmap.data[i - 3] = red
        image.bitmap.data[i - 2] = green
        image.bitmap.data[i - 1] = blue
        image.bitmap.data[i] = 255
    }
  })
  //return image.write('capture.png')
  image.write('capture.png')
}

function tomafoto(){
  const x = 0;
  const y = 0;
  const w = 300;
  const h = 300;
  captureImage({ x, y, w, h })//.write('capture.png')
  
}



//robot.moveMouse(518, 317);

/*
while (1){
   
  //var mouse = robot.getMousePos();
  //console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(mouse.x, mouse.y) );
  //console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + robot.getPixelColor(2015, 503) );
  //sleep(5);
  var color = robot.getPixelColor(518, 317); 
  
  if (color == "060606" || color == "070707" || color == "660000" || color == "650000" ) {
    

    tomafoto();
   
  }
}


*/


ioClient.on("from_master_to_spy_bet",(msg)=>{

  console.log("apuesta" + msg);

  //ioClient.emit("spy_slave", "slave");
})




ioClient.emit("spy_or_slave","spy");































/**
 * 
 * Sistema prompt
 * 
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Crack roulette 2021:> '
});

rl.prompt();

rl.on('line', (line) => {
  
  var spin = Number(line.trim());
  
  switch (spin) {


    case 99 : 

      rl.close();

      break;



    default:
    
      if(spin<0 || spin>36) {
        
        console.log(`${spin} -> Ha de estar entre 0 y 36`);

      } else {
        ioClient.emit("from_spy_to_master_spin", line.trim());
        break;
      }


  }
  

}).on('close', () => {
  console.log('Adeu!');
  process.exit(0);
});







