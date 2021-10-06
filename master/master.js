var express = require("express");
const { Socket } = require("socket.io");
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

app.post('/', function(req, res) {
  console.log(req.body.spin);  
  res.send('Hola Mundo!');
});

app.get('/', function(req, res) {
  res.send('Hola Mundo1111!');
});

app.listen(3000, function() {
  console.log('Express, escuchando el puerto http://localhost:3000');
});

server.listen(8080, function () {
  console.log("Websockets corriendo en http://localhost:8080");
});





io.on(())


// event fired every time a new client connects:
io.on("connection", (socket) => {

  console.info(`Client connected [id=${socket.id}]`);
  
  
// spy //
 socket.on('spy_config', (msg) => { 

    socket.emit('spy_config',"asdasdfasd");
    console.log('message: ' + msg);  


  });

 socket.on('spy_spin', (msg) => { 
    console.log(Number(msg)); 
    
    socket.emit('spy_spin',`resultado del ${ msg }`);


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