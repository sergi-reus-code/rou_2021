const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 



const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const { sleep, randomInt } = require('./utils/spy_utils');

var combi_totales = 0;
let last_apuesta = [];



function test_loop(){

    
<<<<<<< HEAD
   for (let session = 0; session < 20; session++) {
=======
    for (let session = 0; session < 30; session++) {
        
>>>>>>> 20f8137aa60611fabdcb616bfc920c73f4e0c6c2
        
   if (fs.existsSync(`c:\\combi\\${session}.txt`)) { fs.unlink(`c:\\combi\\${session}.txt`, function (err) { if (err) throw err; }); } 

<<<<<<< HEAD
   for (let index = 0; index < 200; index++) {
=======
   for (let index = 0; index < 1000; index++) {
>>>>>>> 20f8137aa60611fabdcb616bfc920c73f4e0c6c2
        
        
    


    var spin = randomInt(0,36);
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];



    let current_chk = Number(get_chk(current_apuesta));

    //let data = (current_apuesta + " - " + current_chk+"\r");
    let data = (combi_totales + " , " + current_apuesta[39] + " , " + current_chk+"\r");
    //console.log(current_apuesta + " - " + current_chk);

    //fs.appendFileSync(`c:\\combi\\${session}.txt`,data); 

    if(current_apuesta[38] > 18){
       
<<<<<<< HEAD
        if(current_apuesta[38]>30){
        //data = "+ de 30"
        fs.appendFileSync(`c:\\combi\\${session}.txt`,data)
        }
        //console.log(Number(current_chk));
        //console.log(Number(last_chk));
        
        /*
        
        if(current_chk == last_chk){
            rep++
            if(rep>9){
                rep_array[rep] = rep_array[rep] + 1;
                console.log(combi_totales + " - " + rep_array.toString());
                process.exit()}
=======
>>>>>>> 20f8137aa60611fabdcb616bfc920c73f4e0c6c2

        fs.appendFileSync(`c:\\combi\\${session}.txt`,data);

       

    }
  
        //console.log(combi_totales + " - " + rep_array.toString());
     
    }

}

}


test_loop();


   
    


