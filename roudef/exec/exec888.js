var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");
const readline = require('readline')
const coord = require('./exec_utils/coord_pokerstars_100')
const { windowManager } = require ("node-window-manager");
const open = require('open');



async function open888(params) {
  await open('https://www.888casino.es/', {app: {name: 'firefox'}});
}



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






  


/**
* Previous work
*/

try {

  getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
  getwindow('Casino en vivo - Mozilla Firefox').getBounds();
  //getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 1024, height: 760 });
  getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 682, height: 506 });
  getwindow('Casino en vivo - Mozilla Firefox').bringToTop();

} catch (err) {

  console.log("No esta abierta la ventana");

}

open888();

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main_loop(){
  
  var mouse = robot.getMousePos();
  var color = robot.getPixelColor(mouse.x, mouse.y);
 // var color = robot.getPixelColor(738, 492);
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y + " color :" + color );
/*
  r1.question('Apostar : ', (YN) => {

    if (YN=="") {
      console.log(YN + "apuesto");
      
    }
    
    })
*/
}



setInterval(main_loop, 1000);
