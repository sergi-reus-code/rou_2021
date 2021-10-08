var express = require("express");
//const { Socket } = require("socket.io");
//const { Socket } = require("socket.io");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const {getConfig} = require('./array_slaves');

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


/**
 * EXPRESS
 */

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Hola Mundo1111!');
});

app.listen(3000, function() {
  console.log('Express, escuchando el puerto http://localhost:3000');
});

server.listen(8080, function () {
  console.log("Websockets corriendo en http://localhost:8080");
});








// event fired every time a new client connects:
io.on("connection", (socket) => {

  console.info(`Client connected [id=${socket.id}]`);

  //1ra conexion.... devolver parametros
  socket.emit('slave_config',"asdasdfasd");

  

  

   

 socket.on("spy_spin", (msg) => { 
    console.log(Number(msg)); 
    
    //socket.emit('slave_spin',`resultado del ${ msg }`);

    socket.emit('slave_spin',"sdfasdfsdfasdfasd");

  });



socket.on("disconnect", () => {
  console.info(`Client gone [id=${socket.id}]`);
});




});


/*
// event fired every time a new client connects:
server.on("connection", (socket) => {
  console.info(`Client connected [id=${socket.id}]`);
  // initialize this client's sequence number
  socket.on("spy-first",(msg)=>{
      console.log(msg)
  })
  socket.on("number",(number)=>{
      console.log(number)
      var a= Number(number)

      socket.emit("sum",isNaN(a)?"Please Enter Valid Number":a*a)
  })
  

  // when socket disconnects, remove it from the list:
  socket.on("disconnect", () => {
      console.info(`Client gone [id=${socket.id}]`);
  });
});
*/