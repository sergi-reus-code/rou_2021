var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");

const coord = require('./exec_utils/coord_888_150')





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
    console.log("");
    coord.dobet(bet);

  } else {console.log("No Hay Bet");}






});






  