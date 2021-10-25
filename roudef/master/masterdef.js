var express = require("express");

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);


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

    console.log("connected "  + socket.id);

  /*  
  data = JSON.stringify(socket.handshake.query)

  
  if(data.includes("spy")){
    añadir_spy(socket.id);
  } else 
  if (data.includes("slave")){
    var limits = añadir_slave(socket.id);
    io.to(socket.id).emit('from_master_to_slave_config', limits );
  }

*/


socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
  });

socket.on("from_slave_to_master_config_done", (msg) => { 
    
    console.log(msg); 
    //io.to(slave_pool[0]).emit('from_master_to_slave_spin', Number(msg) );
   
});
  


socket.on("from_spy_to_master_spin", (msg) => { 
    console.log("wfrwgfsw" + msg);
    main_loop(msg);
});
  

socket.on("from_slave_to_master_bet", (msg) => { 
    

    
});


socket.on("disconnect", () => {

console.log("adeu..... " + socket.id);


});




});



function main_loop(spin){
  
    
   
    console.log("sin" + spin);



}




