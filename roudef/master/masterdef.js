var express = require("express");

const master_utils = require ("./master_utils/master_utils");

var fs = require('fs'); 


if (fs.existsSync('c:\\combi\\ttt.txt')) { fs.unlink('c:\\combi\\ttt.txt', function (err) { if (err) throw err; }); }



var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);


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


    socket.on("from_spy_to_master_spin", (msg) => { 
    
    var object_to_return = master_utils.main_loop(msg);

    io.emit('from_master_to_spy_bet', object_to_return);






  });
  

socket.on("disconnect", () => {

  console.log("adeu..... " + socket.id);

});




});







