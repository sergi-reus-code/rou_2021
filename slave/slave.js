var {combi_array, create_array, check_array, update_array} = require('./utils/slave_utils.js');



console.log("Inicio programa test de combinaciones....!!");

timestamp = Date.now();


create_array(0,5000000); //Hacemos cinco millones de combinaciones para provar


console.log(combi_array.length);

timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");


















/*



const io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8080", { forceNew: false });


ioClient.on("spy_or_slave",(p)=>{
    ioClient.emit("spy_slave", "slave");
})



ioClient.on("from_master_to_slave_spin",(spin)=>{
    
    
    //actualizar base de datos
    var bet = update_array(spin);


    ioClient.emit("from_slave_to_master_bet",bet);


})



*/
