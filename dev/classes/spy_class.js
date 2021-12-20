var robot = require("robotjs");
var Jimp = require('jimp');
const { createWorker } = require('tesseract.js');


module.exports = class Spy {
  
  //Constructor
  constructor() {
    this.spin = NaN
    setInterval(this.main_loop, 500);
    this.cordx = 0;
    this.cordy = 0;
    this.cordxx = 0;
    this.cordyy = 0;
    this.photoTaked = false;


  }

  
  get get_spin(){
    return this.spin;
  }




  main_loop(){

    var colorNW = robot.getPixelColor(667, 396);  //Abajo derecha
    var colorW = robot.getPixelColor(623, 320);   //Arriba izquierda
   
  
    //NEGRO = 000000 , ROJO = ff0000 , VERDE = 00a031
    
    if (colorNW == "000000" || colorNW == "ff0000" || colorNW == "00a031" ) { 
      this.cordx = 625; 
      this.cordy = 355; 
      this.cordxx = 45;
      this.cordyy = 38;


      tomafoto(this.cordx,this.cordy,this.cordxx,this.cordyy);
      this.photoTaked = true;
      sleep(5000)
      const tt = detectar();
      tt
      .then(result => {console.log("spin :" + result);})
      .catch(error=> {console.log(error);})

    }
    
    if (colorW == "000000" || colorW == "ff0000" || colorW == "00a031" ) {
      this.cordx = 625; 
      this.cordy = 320; 
      this.cordxx = 45;
      this.cordyy = 38;

      tomafoto(this.cordx,this.cordy,this.cordxx,this.cordyy);
      sleep(5000)
      const tt = detectar();
      tt
      .then(result => {console.log("spin :" + result);})
      .catch(error=> {console.log(error);})


    }  



    
    
  
  }







  
  
  

  
















}


function tomafoto(x1,y1,w1,h1) {
     
  const x = x1;
  const y = y1;
  const w = w1;
  const h = h1;
  captureImage({ x, y, w, h }).write('last.png')
  
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


function sleep(ms){
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


async function detectar() {

  
  
  const worker = createWorker({
   // langPath: path.join(__dirname,  'lang-data'),
   // logger: m => console.log(m),

  });
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });


try {
const { data: { text } } = await worker.recognize('./last.png');

var texto = Number(text)
} catch (error) {
console.log("2 " + error);
}


try {
  await worker.terminate();
} catch (error) {
  console.log("3 " + error);
}


  
  





  if (texto == 1) {
      
    var color = 0;
    
    await Jimp.read('./last.png')
      .then(image => {
        color = image.getPixelColor(1, 1);
        console.log(color);
      })
      .catch(err => {
          // Handle an exception.
      });

      if (color==4294967295) {
          texto = 11;
      }
  }

  
  //console.log("spin : " + texto );
  
  return texto;

}



