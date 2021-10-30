var spin_num = 0;



function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function format_spin(spin){

  spin_num++;

  var f = new Date();

  var text_dump_JSON = `{`+
                      
                      // SPIN secction
                      
                      `"spin_id":${spin_num},`+
                      `"spin_date":"${f.getDate() + "-"+ f.getMonth()+ "-" +f.getFullYear()}",`+
                      `"spin_time":${Date.now()},`+
                      `"spin":${Number(spin)}`+
                      
                      // BET secction
                      
                      //`"bet_id":"",`+
                      //`"bet_array":"",`+
                      
                      // MONEY secction
                      
                      //`"money_bet_rep":"",`+   //(first,second)
                      //`"money_bet_type":"",`+      //(nothing, simple,x2)
                      //`"money_bet_quantity":""`+   //$$$$ on a single number


                    `}`;

  return JSON.parse(text_dump_JSON);

}




exports.format_spin = format_spin,
exports.sleep = sleep,
exports.randomInt = randomInt
 