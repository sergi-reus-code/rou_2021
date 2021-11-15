var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");
const readline = require('readline')
const coord = require('./exec_utils/coord_pokerstars')
const { windowManager } = require ("node-window-manager");



// Add a connect listener
ioClient.on('connect', () => {
  console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
  console.log('DisssssConnected!' + socket.id);
});



//ioClient.emit('CH01', 'me', 'test msg');

ioClient.on('from_master_to_exec_bet', (msg) => {

  bet = JSON.parse(msg);
  if (bet.bet_id!=0) {
    
    console.log("receiving -> " + JSON.stringify(JSON.parse(msg)));
    console.log(bet.bet_id);
    console.log("");
    const windoww = windowManager.getActiveWindow();
    windoww.bringToTop();
   













  







  }
});

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function main_loop(){
  
  //var mouse = robot.getMousePos();
  //var color = robot.getPixelColor(mouse.x, mouse.y);
  //console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );


  r1.question('Apostar : ', (YN) => {

    if (YN=="") {
      console.log(YN + "apuesto");
    }
    
    })






}
  


/**
* Previous work
*/

try {

  getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
  getwindow('Casino en vivo - Mozilla Firefox').getBounds();
  getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
  getwindow('Casino en vivo - Mozilla Firefox').bringToTop();

} catch (err) {

  console.log("No esta abierta la ventana");

}






/**
* Main loop
*/
  




setInterval(main_loop, 1000);
/*
setInterval(() => {

}, 1000);
*/