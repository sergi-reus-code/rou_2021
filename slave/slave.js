const io = require("socket.io-client");

const {crear_array, check_array} = require('./utils/utils');



function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}




array_preparado = false;


while (!array_preparado){


  sleep(2000);
  array_preparado = check_array();

  
}

/*


var socket = io.connect("http://localhost:8080", { forceNew: true });  
//socket.emit('config_slave');
*/
/*
socket.on("config_slave", function (data) {     

  
  var ee = processTxt();
  
  console.log(data , combi_array.length);
  
  //socket.emit('message', "fgsdfgsdfg");







});

*/
/*






socket.on("spin", function (data) {     

    

  console.log(data);
  sleep(2000);
  socket.emit('message', "fgsdfgsdfg");





});

*/


//2.0 inicializar array con config desde master
//3.0 aceptar i procesar peticiones 










