function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}





exports.randomInt = randomInt

/*




var robot = require("robotjs");
var Jimp = require('jimp');

const { windowManager } = require ("node-window-manager");


windowManager.requestAccessibility(); 

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }


  

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
    return image
  }
  
  function tomafoto(){
    const x = 0;
    const y = 0;
    const w = 300;
    const h = 300;
    captureImage({ x, y, w, h }).write('capture.png')
    
  }

  function tomafoto2(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage({ x, y, w, h }).write('last.png')
    
  }




 
  exports.sleep = sleep,
  
  exports.getwindow = getwindow,
  exports.tomafoto = tomafoto,
  exports.captureImage = captureImage,
  exports.tomafoto2 = tomafoto2
*/