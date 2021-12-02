var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const utils_image = require ("./spy_utils/spy_utils_image");
const { createWorker } = require('tesseract.js');
var fs = require('fs'); 
const utils = require('./spy_utils/spy_utils');
var Jimp = require('jimp');
var prompt = require('prompt-sync')();
const path = require('path');
var autman = true; 


ioClient.on('connect', () => {
  console.log('Connected!');
});

ioClient.on("disconnect", (socket) => {
  console.log('DisssssConnected!' + socket.id);
});

ioClient.on('from_master_to_spy_exit', (msg) => {
  
  console.log(msg);
  robot.moveMouse(1039,224); 
  sleep(100)
  robot.mouseClick(); 
  process.exit();

});


async function detectar() {

  
  try {
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
  } catch (error) {
    console.log("1 " + error);
  }

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

  send_spin_to_master(Number(texto))
  
  //fs.renameSync('./last.png', `./tiradas/${Number(milis)}_${Number(texto)}.png`);

}






function send_spin_to_master(spin) {
  
  var msg_out = utils.format_spin(spin);

  ioClient.emit('from_spy_to_master_spin',msg_out);

  console.log(JSON.stringify(msg_out));

}


function main_loop(){


  
  
  var colorNW = robot.getPixelColor(667, 396);  //Abajo derecha
  var colorW = robot.getPixelColor(623, 320);   //Arriba izquierda
  

  //NEGRO = 000000 , ROJO = ff0000 , VERDE = 00a031
  
  if (colorNW == "000000" || colorNW == "ff0000" || colorNW == "00a031" ) { 

    utils_image.tomafoto(625,355,45,38);
    utils_image.sleep(4000)
    detectar();
    

  }
  
  if (colorW == "000000" || colorW == "ff0000" || colorW == "00a031" ) {

    utils_image.tomafoto(625,320,45,38);
    utils_image.sleep(4000)
    detectar();
    

  }
  }



setInterval(main_loop, 500);










