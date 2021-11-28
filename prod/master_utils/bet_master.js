const marti_master = require ("./marti_master");
var beep = require('beepbeep')

var fs = require('fs'); 
var rep=0
repe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
last1_chk=0;
last2_chk=0;
last3_chk=0;

var empty_bet = `{`+
                `"bet_id":0,`+
                `"bet_date":"0",`+
                `"bet_time":0,`+
                `"bet_array":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],`+
                `"bet_quantity":0`+
                `}`;

  var b_id = 0;


function update_marti(bet,spin) {
       
      marti_master.update_marti(bet,spin);

}
              

function fill_bet(current_array) {
 
    var bet_temp = JSON.parse(empty_bet);

    var f = new Date();

    b_id++;
    bet_temp.bet_id = Number(b_id);
    bet_temp.bet_date = f.getDate() + "-"+ f.getMonth()+ "-" +f.getFullYear()
    bet_temp.bet_time = Date.now();
    bet_temp.bet_array = current_array;
    bet_temp.bet_quantity = marti_master.get_marti();

    var bet_to_send = JSON.stringify(bet_temp)

    return bet_to_send;

}


function main_loop(prev_chk, current_chk, current_array){

  

  if (current_array[39]==18){  //>29

    beep(10, 200)

    if(prev_chk != current_chk){

        return fill_bet(current_array);            

    } else {

        return empty_bet

    }

  }

  return empty_bet

}







exports.main_loop = main_loop,
exports.update_marti = update_marti