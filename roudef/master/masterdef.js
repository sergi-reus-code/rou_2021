var express = require("express");
const combi_master = require ("./master_utils/combi_master");
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
    
    var object_to_return = main_loop(msg);

    io.emit('from_master_to_spy_bet', object_to_return);

});
  

socket.on("disconnect", () => {

  console.log("adeu..... " + socket.id);

});




});



function main_loop(spin){
  






  
  data =JSON.parse(JSON.stringify(spin));
  
  combi_master.update_combi_pool([data.spin_id, data.spin]);

  let current_apuesta = combi_master.get_best_bet();
  
  let current_chk = Number(combi_master.get_chk(current_apuesta));

 
  if (current_apuesta[38]>17 ){  //>29
    
    var date = current_apuesta + " - " + current_chk +"\r";
    
    console.log(date);
    
    fs.appendFileSync('c:\\combi\\ttt_18.txt',date); 

}

return "hola"


}




