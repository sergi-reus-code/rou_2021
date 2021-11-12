//var martingala = [0.2,0.4,1,2,5,10,25,50,150,300]; //NORMAL
var martingala = [0.2,0.5,1.5,3.25,6.75,14,30,65,140,300]; //NORMAL
//var wins = [3.6 , 3.6 , 7.2 , 7.2 , 25.2 , 25.2 , 115.2 , 115.2 , 1015.2 , 1015.2]
var wins = [3.6 , 5.4 , 14.4 , 18.9 , 23.4 , 32.4 , 68.4 , 158.4 , 338.4 , 698.4]

var marti_iter = 0;
var looses = 0;
var win = 0;
var total_win = 0;

const fs = require('fs');

function update_marti(bet,spin) {

    var data = JSON.parse(bet);
    //console.log(data);
    if (data.bet_id==0){
        //No hay bet
        //console.log("No hay bet");
        return
    } else {
        //Hay bet
        if (data.bet_array[spin]==1){    //win

            win = Number(wins[marti_iter]);
            total_win = Number(total_win + win);


            marti_iter = 0;
            looses = 0;


            var txt2 = JSON.stringify(data);
            console.log(txt2);
            //fs.appendFileSync("results.txt",txt2+"\r");
            
            var txt = `I win with spin -> ${spin}    -> bet_win : ${win}€    -> total_win : ${total_win}€`+"\r"
            //fs.appendFileSync("results.txt",txt+"\r");
            win = 0;
 
            console.log();
            console.log(txt);
            console.log();

            


            return
        } else {
            marti_iter++;
            looses++;
            var txt2 = JSON.stringify(data);
            console.log(txt2);
            //fs.appendFileSync("results.txt",txt2+"\r");

            //console.log("loose");
            return
        }
    }
    //console.log(spin);
}


function get_marti() {
    
    return Number(martingala[marti_iter]);

}


function get_looses() {
    
    return looses;

}

function set_looses_to_cero() {
    looses = 0;
}



exports.get_marti = get_marti,
exports.get_looses= get_looses,
exports.set_looses_to_cero= set_looses_to_cero,
exports.update_marti = update_marti


















