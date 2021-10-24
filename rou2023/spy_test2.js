const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 

const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const {randomInt } = require('./utils/spy_utils');

var combi_totales = 0;
let last_apuesta = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
let current_apuesta = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
let rep=0;



function test_loop(){

       
    if (fs.existsSync(`c:\\combi\\1año.txt`)) { fs.unlink(`c:\\combi\\1año.txt`, function (err) { if (err) throw err; }); } 

    for (let index = 0; index < 5000; index++) {

        var spin = randomInt(0,36);
        spin = Number(spin);
        combi_totales++;
        
        
        if(combi_totales>1){
            last_apuesta = [...current_apuesta];
            }
        
        update_combi_pool([combi_totales, spin]);

        current_apuesta = get_best_bet();



        let current_chk = Number(get_chk(current_apuesta));


        if(current_apuesta[39] == 18){

            let data = (`Tirada nº: ${combi_totales} -> Spin: ${current_apuesta[40]} -> Combinación resultante: ${current_apuesta.toString()}  ${current_chk} `+ "\r");
        
                //fs.appendFileSync(`c:\\combi\\1año.txt`,data)
                
                if(Number(last_apuesta[spin]) === 0){
                    rep = 0;
                }else{
                    rep = rep+1;
                }
console.log(data);

                if (rep>6){return;} 

            

       }
  
    }
     
}






test_loop();


   
    


