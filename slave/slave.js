const io = require("socket.io-client");

const {crear_array, check_array} = require('./utils/utils');



function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}



var socket = io.connect("http://localhost:8080", { forceNew: true });  



socket.on("connect", () => {

  console.log(socket.id);

});





socket.on('slave_config', (msg) => {

  console.log(msg);

});



socket.on('slave_spin', (msg) => {

  console.log(msg);

});




/*






socket.on("spin", function (data) {     

    

  console.log(data);
  sleep(2000);
  socket.emit('message', "fgsdfgsdfg");





});

*/


//2.0 inicializar array con config desde master

//3.0 aceptar i procesar peticiones 