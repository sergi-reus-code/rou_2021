const prompt = require('prompt-sync')({sigint: true});

const {randomInt} = require ("./utils/spy_utils");

const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");

var combi_totales = 0;

var last_bet = 0;
var current_bet = 0;
var rep =0;
var reparray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var spins = 0;




function main_loop(){
  
    /**
     *  Automatic Input
     */
    var spin = randomInt(0,36);

    /**
     *  Manual Input
     */
    //var spin = prompt('Introduce Spin: ');

    /**
     *  Programa
     */

    spin = Number(spin);

    combi_totales++;




    update_combi_pool([combi_totales, spin]);

    let apuesta = get_best_bet();

    current_bet = Number(get_chk(apuesta)); 

    //console.log(current_bet);


    if ((current_bet == last_bet) ) {
            //console.log("rep");
            rep = rep + 1;
            last_bet = Number(current_bet);
            reparray[rep] = reparray[rep] + 1


    } else {
        //console.log("norep");
        last_bet = Number(current_bet);
        rep = 0;
    }
        
    console.log(combi_totales + " - " + reparray.toString());

    /*
    if (apuesta != false ) {

    let bet_si_no = prompt('Quieres apostar: Introduce . + Intro ---->  ');
        console.log(bet_si_no);
        return;
    }


*/



}
  

setInterval(main_loop, 50);