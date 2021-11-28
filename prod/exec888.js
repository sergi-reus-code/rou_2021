var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");

const coord = require('./exec_utils/coord_888_100')

var spins_no_bet = 0;



// Add a connect listener
ioClient.on('connect', () => {
  console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
  console.log('DisssssConnected!' + socket.id);
});

//ioClient.emit('from_exec_to_master_ack', 'ACK');

ioClient.on('from_master_to_exec_bet', (msg) => {

  ioClient.emit('from_exec_to_master_ack', "ACK");
  
  bet = JSON.parse(msg);
  if (bet.bet_id!=0) {
    
    console.log("receiving -> " + JSON.stringify(JSON.parse(msg)));
    console.log("");
    coord.dobet(bet);

  } else {
    spins_no_bet++
    console.log("Spins sin bet -> " + spins_no_bet);

    if (spins_no_bet>15) {
      spins_no_bet = 0;      
      coord.do_timer_bet(bet);
    }


  }

});






  