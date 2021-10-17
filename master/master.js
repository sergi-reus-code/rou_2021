var express = require("express");

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const {spy_pool, slave_pool, añadir_slave, añadir_spy, quitar_slave_spy} = require('./pools');

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

var best_rep = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var best_norep = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var best_salto = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


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

  data = JSON.stringify(socket.handshake.query)

  
  if(data.includes("spy")){
    añadir_spy(socket.id);
  } else 
  if (data.includes("slave")){
    var limits = añadir_slave(socket.id);
    io.to(socket.id).emit('from_master_to_slave_config', limits );
  }


  socket.on("from_slave_to_master_config_done", (msg) => { 
    
    console.log(msg); 
    //io.to(slave_pool[0]).emit('from_master_to_slave_spin', Number(msg) );
   
  });
  


 socket.on("from_spy_to_master_spin", (msg) => { 
    
    //console.log("spin recibido de spy : " + Number(msg)); 
    
    io.to(slave_pool[0]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[1]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[2]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[3]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[4]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[5]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[6]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[7]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[8]).emit('from_master_to_slave_spin', Number(msg) );
    io.to(slave_pool[9]).emit('from_master_to_slave_spin', Number(msg) );

  





    /*
    for (let index = 0; index < slave_pool.length; index++) {
      
      
    

    io.to(slave_pool[index]).emit('from_master_to_slave_spin', Number(msg) );
 
  }*/

  });
  

  socket.on("from_slave_to_master_bet", (msg) => { 
    
    var date = JSON.stringify(msg)
    
    var date2 = JSON.parse(date)

    //console.log(date2);


    var rep = Number(date2.rep); 
    var norep = Number(date2.no_rep);
    var salto = Number(date2.salto);

    if(isNaN(rep) ) {rep=0;}
    if(isNaN(norep)  ) {norep=0;}
    if(isNaN(salto) ) {salto=0;}

    best_rep[rep] = best_rep[rep] + 1;
    best_norep[norep] = best_norep[norep] + 1;
    best_salto[salto] = best_salto[salto] + 1;

    


    //io.to(spy_pool[0]).emit('from_master_to_spy_bet', date2 );
    
  });








socket.on("disconnect", () => {

  quitar_slave_spy(socket.id);

  console.log("rep: " + best_rep.toString() + " norep: " + best_norep.toString() + " salto: " + best_salto.toString());

});




});

