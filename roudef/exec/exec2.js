var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");
const readline = require('readline')

const coord = require('./exec_utils/coord_pokerstars_100')
const { windowManager } = require ("node-window-manager");

var bet = {}


ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('DisssssConnected!' + socket.id);
});

ioClient.on('from_master_to_exec_bet', (msg) => {

    bet = JSON.parse(msg);
    console.log("receiving -> " + JSON.stringify(bet));

});

ioClient.on('from_master_to_exec_stop', (msg) => {

    process.exit();
 
});


try {

    getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
    getwindow('Casino en vivo - Mozilla Firefox').getBounds();
    getwindow('Casino en vivo - Mozilla Firefox').setBounds({ x: 0, y: 0, width: 682, height: 506 });
    getwindow('Casino en vivo - Mozilla Firefox').bringToTop();
  
} catch (err) {
  
    console.log("No esta abierta la ventana");
  
}


const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});
     
  
setInterval(() => {
    r1.question('Apostar : ', (YN) => {


        if (YN=="") {

            console.log("DO THE BET");
            coord.dobet(bet);


            
        }

          
    })
      
}, 2000);
  




  


