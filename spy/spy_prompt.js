var {sleep, randomInt, } = require('./utils/spy_utils.js');
const io = require("socket.io-client"),
ioClient = io.connect("http://192.168.18.3:8080" , {forceNew: true , query : "spy" }); 

var spins_desde_inicio = 0;




 ioClient.on("from_master_to_spy_bet",(msg)=>{

    data = msg;
  
    

    console.log(data.toString());

    
 })









function intervalFunc(){

  var data = [spins_desde_inicio,randomInt(0,36)];

  spins_desde_inicio++;
 
  //console.log(data);

  ioClient.emit("from_spy_to_master_spin", data);



}

setInterval(intervalFunc, 500);

