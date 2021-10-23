const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 

const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const {randomInt } = require('./utils/spy_utils');

var combi_totales = 0;
let last_apuesta = [];



function test_loop(){

    

   


        
   if (fs.existsSync(`c:\\combi\\1año.txt`)) { fs.unlink(`c:\\combi\\1año.txt`, function (err) { if (err) throw err; }); } 


   for (let index = 0; index < 700000; index++) {

        
        
    


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
        
        fs.appendFileSync(`c:\\combi\\1año.txt`,data)
        }

    }
  
        //console.log(combi_totales + " - " + rep_array.toString());
     
    }

}




test_loop();


   
    


