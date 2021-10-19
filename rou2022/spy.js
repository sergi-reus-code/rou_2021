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

if (process.argv[2] == "888") {
    console.log("888");
    const coordinates = require('./utils/coord_888');

} else {
    console.log("Pokerstars");
    const coordinates = require('./utils/coord_pokerstars');
}






function test_loop(){

    if (fs.existsSync('c:\\combi\\test.txt')) { fs.unlink('c:\\combi\\test.txt', function (err) { if (err) throw err; }); } 

   for (let index = 0; index < 10000; index++) {
        
        
    


    var spin = randomInt(0,36);
    spin = Number(spin);
    combi_totales++;
    
    update_combi_pool([combi_totales, spin]);

    let last_chk = Number(get_chk(last_apuesta));

    let current_apuesta = get_best_bet();
    last_apuesta = [...current_apuesta];



    let current_chk = Number(get_chk(current_apuesta));

    let data = (current_apuesta + " - " + current_chk+"\r");
    //console.log(current_apuesta + " - " + current_chk);

    fs.appendFileSync('c:\\combi\\test.txt',data); 

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
  
