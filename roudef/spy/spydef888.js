var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep, tomafoto, tomafoto_prev} = require ("./spy_utils/spy_utils_image");
const { createWorker } = require('tesseract.js');
var fs = require('fs'); 
const utils = require('./spy_utils/spy_utils');


// Add a connect listener
ioClient.on('connect', () => {
  console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
  console.log('DisssssConnected!' + socket.id);
});



//ioClient.emit('CH01', 'me', 'test msg');


ioClient.on('from_master_to_spy_stop', (msg) => {


process.exit();

});

























async function detectar(milis) {

  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });
  const { data: { text } } = await worker.recognize('./last.png');
    
  //console.log("spin nº: " + Number(text) + " - " + Number(milis));

  fs.renameSync('last.png', `./tiradas/${Number(milis)}_${Number(text)}.png`);

  send_spin_to_master(Number(text))

  await worker.terminate();
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

  var colorNW = robot.getPixelColor(1045, 640);  
  var colorW = robot.getPixelColor(978, 526); 
  
  //NEGRO = 000000
  //ROJO = ff0000
  //VERDE = ff0000
  
  if (colorNW == "000000" || colorNW == "ff0000" || colorNW == "00a030" ) { 
    //sleep(250)
    tomafoto(978,583,70,60);
    sleep(3000)
    detectar(Date.now());
  }
  
  if (colorW == "000000" || colorW == "ff0000" || colorW == "00a030") {
    //sleep(250)
    tomafoto(978,526,70,60);
    sleep(3000)
    detectar(Date.now());
  }




}


setInterval(main_loop, 500);