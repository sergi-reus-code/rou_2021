var {create_array, check_array, update_array} = require('./slave_utils.js');






create_array();






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




