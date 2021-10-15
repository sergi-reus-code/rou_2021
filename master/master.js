var express = require("express");

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const {spy_pool, slave_pool, combi_pool, añadir_slave, añadir_spy} = require('./pools');

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





const cookie = require("cookie");


// event fired every time a new client connects:
io.on("connection", (socket) => {

  data = JSON.stringify(socket.handshake.query)

  
  if(data.includes("spy")){

    console.info(`Spy connected with socket.id [id=${socket.id}]`);
    spy_pool.shift();
    añadir_spy(socket.id);
  
  } else if (data.includes("slave")){
    console.info(`Slave connected with socket.id [id=${socket.id}]`);
    slave_pool.shift();
    añadir_slave(socket.id);

  }




 socket.on("from_spy_to_master_spin", (msg) => { 
    console.log("spin recibido de spy : " + Number(msg)); 
    
    console.log(slave_pool[0]);

    io.to(slave_pool[0]).emit('from_master_to_slave_spin', Number(msg) );
    
  });
  

  socket.on("from_slave_to_master_bet", (msg) => { 
    console.log(msg); 
    
    io.to(spy_pool[0]).emit('from_master_to_spy_bet', msg );
    
  });

  






socket.on("disconnect", () => {
  console.info(`Client gone [id=${socket.id}]`);

});




});

