const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 

const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const {randomInt } = require('./utils/spy_utils');

var combi_totales = 0;

const io = require("socket.io-client"),
ioClient = io.connect("http://192.168.18.3:8080", { forceNew: true, query : "slave" });

/*
ioClient.on("from_master_to_slave_spin",(spin)=>{
    
    console.log(`Spin : ${spin}`);

    timestamp = Date.now();
        
    var bet = check_array(spin);
    
    timestamp2 = Date.now();
    
    console.log(" ha tardado en recorrer: " , (timestamp2 - timestamp)/1000 , "segundos");

    ioClient.emit("from_slave_to_master_bet",bet);

})
*/
















function test_loop(){

    

   for (let session = 0; session < 22; session++) {


     
   for (let index = 0; index < 200; index++) {

    var spin = randomInt(0,36);
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];



    let current_chk = Number(get_chk(current_apuesta));
    let data = (combi_totales + " , " + current_apuesta[39] + " , " + current_chk+"\r");

    if(current_apuesta[38] > 18){
       

        if(current_apuesta[38]>30){
        
       
        }
 
       

    }
  
        
     
    }

}

}


test_loop();


   
    


