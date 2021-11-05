const combi_master = require ("./master_utils/combi_master");
const main_loop = require ("./master_utils/main_loop");

var express = require("express");
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




io.on("connection", (socket) => {

    console.log("connected "  + socket.id);


    socket.on("from_spy_to_master_spin", (msg_in) => { 
    
        data = JSON.parse(JSON.stringify(msg_in));

        combi_master.update_combi_pool([data.spin_id, data.spin]);
        let current_array = combi_master.get_best_combi();
        var current_chk = combi_master.get_chk(current_array) 
        var bet = main_loop.main_loop(data.spin_id, data.spin,current_array,current_chk)
    
        io.emit('from_master_to_spy_bet', bet);

    });
  

    socket.on("disconnect", () => {

      console.log("adeu..... " + socket.id);

    });

});







