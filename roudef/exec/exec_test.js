var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
//var robot = require("robotjs");
const { getwindow, sleep} = require ("./exec_utils/exec_utils");
const readline = require('readline')

const coord = require('./exec_utils/coord_pokerstars_100')
const { windowManager } = require ("node-window-manager");

const path = require('path');

var bet = {}


console.log("dffgfd");


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
  




  


