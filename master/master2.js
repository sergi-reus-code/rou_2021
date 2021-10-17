var express = require("express");
const { isUndefined } = require("util");

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const {spy_pool,  añadir_spy, quitar_slave_spy, update_combi_pool, degollar_combi_pool} = require('./pools2');
const {check_bet} = require('./money2');

var bet_ongoing = false;
var bet = [];

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
  if(data.includes("spy")){añadir_spy(socket.id);} 


  socket.on("from_spy_to_master_spin", (msg) => { 
    
    update_combi_pool(msg);

  });

  socket.on("disconnect", () => {

    quitar_slave_spy(socket.id);

  });

});



