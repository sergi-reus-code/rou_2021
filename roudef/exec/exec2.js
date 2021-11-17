var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");
const readline = require('readline')

const coord = require('./exec_utils/coord_pokerstars_100')
const { windowManager } = require ("node-window-manager");

const path = require('path');

var bet = {}


ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('DisssssConnected!' + socket.id);
});

ioClient.on('from_master_to_exec_bet', (msg) => {

    bet = JSON.parse(msg);
    if(bet.bet_id!=0){
    console.log("receiving -> " + JSON.stringify(bet));
    }
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
  
    console.log("No esta abierta la ventana de la ruleta");
    process.exit()
  
}




try {
    const string = path.join('C:','Users', 'Sergi_Desktop','Desktop' ,'spydefm-win.exe');
    console.log(string);
    getwindow(string).bringToTop();
    getwindow(string).getBounds();
    getwindow(string).setBounds({ x: 0, y: 500, width: 682, height: 440 });
    getwindow(string).bringToTop();


  
} catch (err) {
  
    console.log("No esta abierta la ventana del spy");
    process.exit()
  
}

try {
    const string = path.join('C:','Users', 'Sergi_Desktop','Desktop' ,'masterdef-win.exe');
    console.log(string);
    getwindow(string).bringToTop();
    getwindow(string).getBounds();
    getwindow(string).setBounds({ x: 674, y: 718, width: 1038, height: 220 });
    getwindow(string).bringToTop();


  
} catch (err) {
  
    console.log("No esta abierta la ventana del master");
    process.exit()
  
}


try {

    getwindow('exec2.js - 5_rou_2021 - Visual Studio Code').bringToTop();
    getwindow('exec2.js - 5_rou_2021 - Visual Studio Code').getBounds();
    getwindow('exec2.js - 5_rou_2021 - Visual Studio Code').setBounds({ x: 677, y: 0, width: 1029, height: 719 });
    getwindow('exec2.js - 5_rou_2021 - Visual Studio Code').bringToTop();
     
} catch (err) {
  
    console.log("No esta abierta la ventana de visual studio");
    
  
}


const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});
     
  
setInterval(() => {
    r1.question('Apostar : ', (YN) => {


        if (YN=="") {

            coord.dobet(bet);
           
        }

          
    })
      
}, 2000);
  




  


