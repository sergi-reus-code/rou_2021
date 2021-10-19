const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 



const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const { sleep, randomInt } = require('./utils/spy_utils');

var combi_totales = 0;
let last_apuesta = [];
let rep = 0;
let rep_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]





function test_loop(){

    
    for (let session = 0; session < 1; session++) {
        
        
    


   if (fs.existsSync(`c:\\combi\\${session}.txt`)) { fs.unlink(`c:\\combi\\${session}.txt`, function (err) { if (err) throw err; }); } 

   for (let index = 0; index < 200000; index++) {
        
        
    


    var spin = randomInt(0,36);
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];



    let current_chk = Number(get_chk(current_apuesta));

    //let data = (current_apuesta + " - " + current_chk+"\r");
    let data = (current_chk+"\r");
    //console.log(current_apuesta + " - " + current_chk);

    fs.appendFileSync(`c:\\combi\\${session}.txt`,data); 

    if(current_apuesta[39]==18){
       
        //if(current_apuesta[38]>30){
        //data = "+ de 30"
        //fs.appendFileSync('c:\\combi\\test.txt',data)
        //}
        //console.log(Number(current_chk));
        //console.log(Number(last_chk));
        
        /*
        
        if(current_chk == last_chk){
            rep++
            if(rep>9){
                rep_array[rep] = rep_array[rep] + 1;
                console.log(combi_totales + " - " + rep_array.toString());
                process.exit()}

        }else {

            rep_array[rep] = rep_array[rep] + 1;
            rep = 0;

        }*/
    }
  
        //console.log(combi_totales + " - " + rep_array.toString());
     
    }

}

}


test_loop();


   
    


