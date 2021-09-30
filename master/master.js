var express = require("express");
const { Socket } = require("socket.io");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const array_slaves = require('./array_slaves');



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









//endpoint donde se conecta slave
io.on("connection", function (socket) {
  
  
// spy //
 socket.on('spy_first_connection', function (msg) { 

    socket.emit('spy_first_connection',"asdasdfasd");
    console.log('message: ' + msg);  


  });

socket.on('spy_spin', function (msg) { 
    console.log(Number(msg));  
  });






// slave //  
socket.on('first_connection_slave', function (msg) { 
    console.log(`slave: ${msg} on-line -> sending conf ` + msg);  


    var mensage_first_config = [1,1,1];




    socket.emit("message", mensage_first_config);


});

socket.on('message', function (msg) { 
    console.log('messageeeee: ' + msg);  
});
  

//socket.emit("messages", messages);


});




