const prompt = require('prompt-sync')({sigint: true});

const {randomInt} = require ("./utils/spy_utils");
const {update_combi_pool, get_best_bet, get_chk} = require ("./utils/combi_master");

var combi_totales = 0;
var last_apuesta = [];


var last_bet = 0;
var current_bet = 0;
var rep =0;
var reparray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var spins = 0;

if (process.argv[1] == "888") {

    const coordinates = require('./coord_888');

} else {

    const coordinates = require('./coord_pokerstars');

}





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

    // Check if win para poner por pantalla i money management las apuestas van solas.....
    if ("last_apuesta is ok") {
            "you win"
    }



    //pasar combi_totales a utils

    update_combi_pool([combi_totales, spin]);

    
    let current_apuesta = get_best_bet();

    // poner por pantalla

    console.log(current_apuesta + " - " + Number(get_chk(current_apuesta)));

/*

    if (curreapuesta != false ) {

    let bet_si_no = prompt('Quieres apostar: Introduce . + Intro ---->  ');
        console.log(bet_si_no);
        return;
    }
*/
}
  

setInterval(main_loop, 500);