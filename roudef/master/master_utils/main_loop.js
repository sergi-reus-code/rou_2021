const combi_master = require ("./combi_master");
const money_master = require ("./money_master");

bet_id=0;

var text_dump_JSON = `{`+      
                     `"bet_id":0,`+
                     `"bet_array":"",`+
                     `"money_bet_rep":"",`+   
                     `"money_bet_type":"",`+      
                     `"money_bet_quantity":0`+   
                     `}`;



function get_bet_current_array(current_array) {
  
  var bet_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  bet_array[0] = current_array[0];
  bet_array[1] = current_array[1];
  bet_array[2] = current_array[2];
  bet_array[3] = current_array[3];
  bet_array[4] = current_array[4];
  bet_array[5] = current_array[5];
  bet_array[6] = current_array[6];
  bet_array[7] = current_array[7];
  bet_array[8] = current_array[8];
  bet_array[9] = current_array[9];
  bet_array[10] = current_array[10];
  bet_array[11] = current_array[11];
  bet_array[12] = current_array[12];
  bet_array[13] = current_array[13];
  bet_array[14] = current_array[14];
  bet_array[15] = current_array[15];
  bet_array[16] = current_array[16];
  bet_array[17] = current_array[17];
  bet_array[18] = current_array[18];
  bet_array[19] = current_array[19];
  bet_array[20] = current_array[20];
  bet_array[21] = current_array[21];
  bet_array[22] = current_array[22];
  bet_array[23] = current_array[23];
  bet_array[24] = current_array[24];
  bet_array[25] = current_array[25];
  bet_array[26] = current_array[26];
  bet_array[27] = current_array[27];
  bet_array[28] = current_array[28];
  bet_array[29] = current_array[29];
  bet_array[30] = current_array[30];
  bet_array[31] = current_array[31];
  bet_array[32] = current_array[32];
  bet_array[33] = current_array[33];
  bet_array[34] = current_array[34];
  bet_array[35] = current_array[35];
  bet_array[36] = current_array[36];


  return bet_array
}



function main_loop(spin){

    //Actualizar combi
    data = JSON.parse(JSON.stringify(spin));

    combi_master.update_combi_pool([data.spin_id, data.spin]);
    let current_array = combi_master.get_best_combi();
    var current_chk = combi_master.get_chk(current_array) 

    var bet = money_master.check_for_bet(data.spin_id, data.spin,current_array,current_chk)

    return bet;



    //money_master.update_money([data.spin_id, data.spin]);
    

    //var bet = JSON.parse(text_dump_JSON);



    //todo esto dentro de moneymaster
/*


1

    */
}



exports.main_loop = main_loop 