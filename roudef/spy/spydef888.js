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
    
  console.log("spin nº: " + Number(text) + " - " + Number(milis));

  fs.renameSync('last.png', `./tiradas/${Number(milis)}_${Number(text)}.png`);

  send_spin_to_master(Number(text))

  await worker.terminate();
}






function send_spin_to_master(spin) {
  


var msg_out = utils.format_spin(spin);

ioClient.emit('from_spy_to_master_spin',msg_out);

console.log("sending ->   " + JSON.stringify(msg_out));

}










function main_loop(){
  
  var color = robot.getPixelColor(934, 1297); 
  var color2 = robot.getPixelColor(934, 1297); 
  
  if (color == "000000" || color == "ff0000") {
    //sleep(250)
    tomafoto(940,1297,70,60);
    sleep(3000)
    detectar(Date.now());
  }
  
  if (color == "000000" || color == "ff0000") {
    //sleep(250)
    tomafoto(940,1297,70,60);
    sleep(3000)
    detectar(Date.now());
  }




}


setInterval(main_loop, 500);