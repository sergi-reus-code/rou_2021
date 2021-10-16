var {sleep, combi_array, create_array, check_array, update_array} = require('./utils/slave_utils.js');


const io = require("socket.io-client"),
ioClient = io.connect("http://192.168.18.3:8080", { forceNew: true, query : "slave" });


ioClient.on("from_master_to_slave_config",(config)=>{

    var lim_inf = Number(config[0]);
    var lim_sup = Number(config[1]);

    console.log(`Config recived : Lim Inf = ${lim_inf} || Lim Inf = ${lim_sup}`);

    timestamp = Date.now();

    create_array(lim_inf,lim_sup); //Hacemos cinco millones de combinaciones para provar
    //create_array(0,10); //Hacemos cinco millones de combinaciones para provar

    //console.log(combi_array.length);

    timestamp2 = Date.now();

    console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");

    ioClient.emit("from_slave_to_master_config_done",`Combinaciones creadas ${combi_array.length} - ${combi_array[0]}`);

})


ioClient.on("from_master_to_slave_spin",(spin)=>{
    
    console.log(`Spin : ${spin}`);

    timestamp = Date.now();
        
    var bet = check_array(spin);
    
    timestamp2 = Date.now();
    
    console.log(" ha tardado en recorrer: " , (timestamp2 - timestamp)/1000 , "segundos");

    ioClient.emit("from_slave_to_master_bet",bet);


})




