var robot = require("robotjs");
const combi_master = require ("./master_utils/combi_master");
const bet_master = require ("./master_utils/bet_master");
var bet = `{"bet_id":0,"bet_date":"0","bet_time":0,"bet_array":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"bet_quantity":0}`;
    
var express = require("express");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server, {  pingTimeout: 100000, reconnect: true});

const fs = require('fs');

var file = `./tiradas/${Date.now()}`

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


console.clear();

console.log("Wellcome to masterdef.....");

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}



io.on("connection", (socket) => {

    console.log("connected "  + socket.id);

    
    
    
    
    socket.on("from_spy_to_master_spin", (msg_in) => { 

        
        data = JSON.parse(JSON.stringify(msg_in));

        var prev_chk = combi_master.get_chk(combi_master.get_best_combi());

        var exit = bet_master.update_marti(bet, data.spin);

        if (exit == "exit"){

          //close spydef
          //io.emit('from_master_to_spy_exit', "exit");
         // io.emit('from_master_to_exec_exit', "exit");
          //sleep (3000)
          //close exec & firefox
          
          robot.moveMouse(1270,19); 
          sleep(100)
          robot.mouseClick(); 
          
          robot.moveMouse(1899,12); 
          sleep(100)
          robot.mouseClick(); 
          
          robot.moveMouse(1889,713); 
          sleep(100)
          robot.mouseClick(); 



          
          //close masterdef
          process.exit();


        }

        combi_master.update_combi_pool([data.spin_id, data.spin]);

        let current_array = combi_master.get_best_combi();
        var current_chk = combi_master.get_chk(current_array);

        var txt = current_array[37] + "," + current_array[38] + "," + current_array[39] + "," +current_array[40] + "," + current_chk 
        console.log(txt);
        bet = bet_master.main_loop(prev_chk,current_chk,current_array);
        
        io.emit('from_master_to_exec_bet', bet);

        
        
      
        

    });



    socket.on("from_exec_to_master_ack", (msg_in) => { 
    
      console.log("exec" + msg_in);

  });


  

    socket.on("disconnect", (reason) => {

      console.log("adeu..... " + socket.id + " - " + reason);

    });

});







