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








// event fired every time a new client connects:
io.on("connection", (socket) => {

  console.info(`Client connected [id=${socket.id}]`);

   
  socket.on("spy_or_slave", (msg) => { 
    
    switch (msg) {
      case "slave":
        añadir_slave(socket.id);
        break;         


        case "spy":
          añadir_spy(socket.id);
          break;
    
      default:
        break;
    }
    



    
  });





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
  //solo borrar el que se va


  //spy_pool.shift();
  slave_pool.shift();
});




});

