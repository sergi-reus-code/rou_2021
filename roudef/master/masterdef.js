var express = require("express");
const combi_master = require ("./master_utils/combi_master");






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

socket.on("from_spy_to_master_spin", (msg) => { 
    
    var bet = main_loop(msg);

  });
  

socket.on("disconnect", () => {

  console.log("adeu..... " + socket.id);

});




});



function main_loop(spin){
  
   data =JSON.parse(JSON.stringify(spin));
   console.log(data);
  //1ro poner spins dentro de un archivo

}




