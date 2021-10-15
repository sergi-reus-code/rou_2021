var {combi_array, create_array, check_array, update_array} = require('./utils/slave_utils.js');



console.log("Inicio programa test de combinaciones....!!");

timestamp = Date.now();


create_array(0,5000000); //Hacemos cinco millones de combinaciones para provar


console.log(combi_array.length);

timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");










const io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8080", { forceNew: true });


ioClient.on("config_slave",(msg)=>{

    //ioClient.emit("spy_slave", "slave");
})



ioClient.on("from_master_to_slave_spin",(spin)=>{
    

    console.log("test de velocidad....!!");

    timestamp = Date.now();
        
    var bet = check_array(spin);
    
    
    
    timestamp2 = Date.now();
    
    console.log(" ha tardado en recorrer: " , (timestamp2 - timestamp)/1000 , "segundos");

    ioClient.emit("from_slave_to_master_bet",bet);


})


ioClient.emit("spy_or_slave","slave");

