const { Socket } = require("socket.io");
const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }




















  

//1.0 darse de alta en master (no hace falta)
socket.emit('first_connection_slave', "wake on lan");





socket.on("message", function (data) {     

    

    console.log(data);
    sleep(2000);
    socket.emit('message', "fgsdfgsdfg");





});

socket.on("spin", function (data) {     

    

  console.log(data);
  sleep(2000);
  socket.emit('message', "fgsdfgsdfg");





});




//2.0 inicializar array con config desde master
//3.0 aceptar i procesar peticiones 










