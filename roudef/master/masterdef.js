
const combi_master = require ("./master_utils/combi_master");
const bet_master = require ("./master_utils/bet_master");
var bet = `{`+
                `"bet_id":0,`+
                `"bet_date":"0",`+
                `"bet_time":0,`+
                `"bet_array":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],`+
                `"bet_quantity":0`+
                `}`;

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


console.clear();

console.log("Wellcome to masterdef.....");

io.on("connection", (socket) => {

    console.log("connected "  + socket.id);

    
    
    
    
    socket.on("from_spy_to_master_spin", (msg_in) => { 
    
        data = JSON.parse(JSON.stringify(msg_in));

        var prev_chk = combi_master.get_chk(combi_master.get_best_combi());

        bet_master.update_marti(bet, data.spin);

        combi_master.update_combi_pool([data.spin_id, data.spin]);

        let current_array = combi_master.get_best_combi();
        var current_chk = combi_master.get_chk(current_array);

        var txt = current_array[37] + "," + current_array[38] + "," + current_array[39] + "," +current_array[40] + "," + current_chk 
        console.log(txt);
        //bet = bet_master.main_loop(prev_chk,current_chk,current_array);
        bet = bet_master.main_loop2(prev_chk,current_chk,current_array);

        io.emit('from_master_to_exec_bet', bet);

    });
  

    socket.on("disconnect", () => {

      console.log("adeu..... " + socket.id);

    });

});







