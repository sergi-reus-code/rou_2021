var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const utils_image = require ("./spy_utils/spy_utils_image");
const { createWorker } = require('tesseract.js');
var fs = require('fs'); 
const utils = require('./spy_utils/spy_utils');
var Jimp = require('jimp');


ioClient.on('connect', () => {
  console.log('Connected!');
});

ioClient.on("disconnect", (socket) => {
  console.log('DisssssConnected!' + socket.id);
});

ioClient.on('from_master_to_spy_stop', (msg) => {
  
  process.exit();

});


async function detectar(milis) {

  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({tessedit_char_whitelist: '0123456789' });
  const { data: { text } } = await worker.recognize('./last.png');
  





  await worker.terminate();
  
  var texto = 0;
  var color=0;

  if (text == 1) {
    console.log("eeeeerrrrr" + text);
 
        // open a file called "lenna.png"
        await Jimp.read('./last.png')
        .then(image => {
          color = image.getPixelColor(1, 1);
          console.log(color);
        })
        .catch(err => {
          // Handle an exception.
        });
 }

 if (color==4294967295) {
    texto = 11;
 }


  
  console.log("eooo" + texto);
  await worker.terminate();

  console.log("despues-> " + texto);


  send_spin_to_master(Number(texto))

  fs.renameSync('./last.png', `./tiradas/${Number(milis)}_${Number(texto)}.png`);

  

}






function send_spin_to_master(spin) {
  
  var msg_out = utils.format_spin(spin);

  ioClient.emit('from_spy_to_master_spin',msg_out);

  print_console(msg_out);

}


function print_console(msg_out){


  console.log("sending ->   " + JSON.stringify(msg_out));

}

function main_loop(){
  
//Detectamos el color cuando No Win y cuando Win
//VERY IMPORTANT!!!! MEDIDAS INIT({ x: -0, y: -0, width: 900, height: 630 })

//100%  
var colorNW = robot.getPixelColor(700, 430);  //Abajo derecha
var colorW = robot.getPixelColor(650, 350);   //Arriba izquierda

  //NEGRO = 000000
  //ROJO = ff0000
  //VERDE = 00a031
  
  if (colorNW == "000000" || colorNW == "ff0000" || colorNW == "00a031" ) { 
    //sleep(250)
    //150%
    //utils_image.tomafoto(978,583,70,60);
    //100%
    utils_image.tomafoto(650,388,45,38);
    utils_image.sleep(3000)
    detectar(Date.now());
  }
  
  if (colorW == "000000" || colorW == "ff0000" || colorW == "00a031") {
    //sleep(250)
    //150%
    //utils_image.tomafoto(978,526,70,60);
    //100%
    utils_image.tomafoto(650,349,45,38);
    utils_image.sleep(3000)
    detectar(Date.now());
  }




}



setInterval(main_loop, 500);