var robot = require("robotjs");
var Jimp = require('jimp');

const { windowManager } = require ("node-window-manager");


windowManager.requestAccessibility(); 




var prev_coord = [
  [1,1,17,18],[23,1,17,18],[46,1,17,18],[69,1,17,18],[92,1,17,18],[115,1,17,18],[138,1,17,18],[160,1,17,18],[183,1,17,18],[206,1,17,18],
  [1,24,17,18],[23,24,17,18],[46,24,17,18],[69,24,17,18],[92,24,17,18],[115,24,17,18],[138,24,17,18],[160,24,17,18],[183,24,17,18],[206,24,17,18],
  [1,47,17,18],[23,47,17,18],[46,47,17,18],[69,47,17,18],[92,47,17,18],[115,47,17,18],[138,47,17,18],[160,47,17,18],[183,47,17,18],[206,47,17,18],
  [1,70,17,18],[23,70,17,18],[46,70,17,18],[69,70,17,18],[92,70,17,18],[115,70,17,18],[138,70,17,18],[160,70,17,18],[183,70,17,18],[206,70,17,18],
  [1,92,17,18],[23,92,17,18],[46,92,17,18],[69,92,17,18],[92,92,17,18],[115,92,17,18],[138,92,17,18],[160,92,17,18],[183,92,17,18],[206,92,17,18],
  [1,115,17,18],[23,115,17,18],[46,115,17,18],[69,115,17,18],[92,115,17,18],[115,115,17,18],[138,115,17,18],[160,115,17,18],[183,115,17,18],[206,115,17,18],
  [1,138,17,18],[23,138,17,18],[46,138,17,18],[69,138,17,18],[92,138,17,18],[115,138,17,18],[138,138,17,18],[160,138,17,18],[183,138,17,18],[206,138,17,18],
  [1,161,17,18],[23,161,17,18],[46,161,17,18],[69,161,17,18],[92,161,17,18],[115,161,17,18],[138,161,17,18],[160,161,17,18],[183,161,17,18],[206,161,17,18]]


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

  function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

  function getwindow(title) {

    let windows = windowManager.getWindows();
  
    for (let index = 0; index < windows.length; index++) {
      
      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
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

    image.greyscale();                // remove colour from the image
    image.invert(); 

    return image
  }
  


  function captureImage_prev({ x, y, w, h }) {
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

    //image.greyscale();                // remove colour from the image
    //image.invert(); 


for (let index = 0; index < prev_coord.length; index++) {
  const element = prev_coord[index];
  console.log(element);
  image.crop( element[0], element[1], element[2], element[3] ); 
  image.write(`${index}.png`)        // crop to the given region




}








    return image
  }







  function tomafoto(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage({ x, y, w, h }).write('last.png')
    
  }

  function tomafoto_prev(x1,y1,w1,h1){
    const x = x1;
    const y = y1;
    const w = w1;
    const h = h1;
    captureImage_prev({ x, y, w, h }).write('prev.png')







    
  }


 
  exports.sleep = sleep,
  exports.randomInt = randomInt,
  exports.getwindow = getwindow,
  exports.tomafoto = tomafoto,
  exports.tomafoto_prev = tomafoto_prev,

  exports.captureImage = captureImage

