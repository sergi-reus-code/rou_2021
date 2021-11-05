
const money_master = require ("./money_master");


var empty_bet = `{`+
                `"bet_id":${0},`+
                `"bet_date":0,`+
                `"bet_time":0,`+
                `"bet_spin":0,`+
                `"bet_array":[0,0,0,0],`+
                `"bet_chk":0,`+
                `"bet_rep":0,`+
                `"bet_type":0,`+
                `"bet_quantity":0`+
                `}`;


var last_bet = {};
var hay_last_bet = false;







function main_loop(spin_id, spin, bet_combi,chk){

  console.log(bet_combi.toString() + " - " + chk + " - " + hay_last_bet);



  if (hay_last_bet) {


      
  }







  if (bet_combi[38]>29){  //>29
      
      //var bet = fill_bet;

      var bet = empty_bet;

      //clean_empty_bet();

      //store_last_bet(bet);

      hay_last_bet = true;

      console.log(JSON.stringify(JSON.parse(bet)));

      return bet;
  
  } else {

      var bet = empty_bet;

      hay_last_bet = false;
      
      return bet;

  }




}



exports.main_loop = main_loop 