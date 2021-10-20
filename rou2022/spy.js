const prompt = require('prompt-sync')({sigint: true});
var fs = require('fs'); 



const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");
const gui = require ("./utils/gui");
const wm = require ("./utils/windows_manager");
const { sleep, randomInt } = require('./utils/spy_utils');

var combi_totales = 0;
let last_apuesta = [];
let rep = 0;
let rep_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

if (process.argv[2] == "888") {
    console.log("888");
    const coordinates = require('./utils/coord_888');

} else {
    console.log("Pokerstars");
    const coordinates = require('./utils/coord_pokerstars');
}






function test_loop(){


<<<<<<< HEAD
    


   if (fs.existsSync('c:\\combi\\test.txt')) { fs.unlink('c:\\combi\\test.txt', function (err) { if (err) throw err; }); } 

=======
>>>>>>> 41a13fb826b4a1c345f574970618869695815c3f
   for (let index = 0; index < 200; index++) {
        
        
    


    var spin = randomInt(0,36);
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];



    let current_chk = Number(get_chk(current_apuesta));

   
    //console.log(current_apuesta + " - " + current_chk);


     
        let data = (current_apuesta + "," + current_chk+"\r");
        fs.appendFileSync('c:\\combi\\test.txt',data); 






    /*  
    if(current_apuesta[39]==18){
        //console.log("pepe");
        if (current_apuesta[38] == 18)  { rep_array[0]++;}
        if (current_apuesta[38] == 19)  { rep_array[1]++;}
        if (current_apuesta[38] == 20)  { rep_array[2]++;}
        if (current_apuesta[38] == 21)  { rep_array[3]++;}
        if (current_apuesta[38] == 22)  { rep_array[4]++;}
        if (current_apuesta[38] == 23)  { rep_array[5]++;}
        if (current_apuesta[38] == 24)  { rep_array[6]++;}
        if (current_apuesta[38] == 25)  { rep_array[7]++;}
        if (current_apuesta[38] == 26)  { rep_array[8]++;}
        if (current_apuesta[38] == 27)  { rep_array[9]++;}
        if (current_apuesta[38] == 28)  { rep_array[10]++;}
        if (current_apuesta[38] == 29)  { rep_array[11]++;}
        if (current_apuesta[38] == 30)  { rep_array[12]++;}
        if (current_apuesta[38] == 31)  { rep_array[13]++;}
        if (current_apuesta[38] == 32)  { rep_array[14]++;}
        if (current_apuesta[38] == 33)  { rep_array[15]++;}
        if (current_apuesta[38] == 34)  { rep_array[16]++;}
        if (current_apuesta[38] == 35)  { rep_array[17]++;}
        if (current_apuesta[38] == 36)  { rep_array[18]++;}
        if (current_apuesta[38] == 37)  { rep_array[19]++;}
        if (current_apuesta[38] == 38)  { rep_array[20]++;}
        if (current_apuesta[38] == 39)  { rep_array[21]++;}
        if (current_apuesta[38] == 40)  { rep_array[22]++;}
        if (current_apuesta[38] == 41)  { rep_array[23]++;}
        if (current_apuesta[38] == 42)  { rep_array[24]++;}
        if (current_apuesta[38] == 43)  { rep_array[25]++;}
        if (current_apuesta[38] == 44)  { rep_array[26]++;}
        if (current_apuesta[38] == 45)  { rep_array[27]++;}
        if (current_apuesta[38] == 46)  { rep_array[28]++;}
        if (current_apuesta[38] == 47)  { rep_array[29]++;}
        if (current_apuesta[38] == 48)  { rep_array[30]++;}
        if (current_apuesta[38] == 49)  { rep_array[31]++;}
        if (current_apuesta[38] == 50)  { rep_array[32]++;}
    }     

    */


    }
    //console.log(rep_array);
}







   
    


function main_loop(){
  
    
    gui.renderGUI(last_apuesta);

    var spin = prompt('Introduce Spin: ');
    
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];

    if(current_apuesta[39]==18){

        gui.renderBOTTOM(current_apuesta);


    let pp = prompt('Quieres apostar: Introduce . + Intro ---->  ');

    if (pp === "."){
        
        console.log("apuesto");    
        
                    
            wm.apostar_numero(current_apuesta);
            
        

    }

    




    console.log(current_apuesta + " - " + Number(get_chk(current_apuesta)));

    }
  /*  
    if(current_apuesta[39]==18){

        chk = get_chk(current_apuesta);
        console.log(chk + " - " + last_chk);
        
        
        
        
        
        if (chk === last_chk) {
           // console.log(rep);
            if (rep===10){break;}
            rep++;
            last_chk = chk;
        } else {
            
            last_chk = chk;
            combi_rep[rep] = combi_rep[rep] + 1;
            rep=0;
        }
    }*/



}
    


if (process.argv[3] == "test") {
    console.log("Iniciando en modo.... test");
    sleep(1000);
    test_loop();
    //setInterval(test_loop, 5);

} else {
    console.log("Iniciando en modo.... Normal");
    sleep(1000);
    setInterval(main_loop, 1000);
}
  
