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
                      `"session_id":1, `+
                      `"session_date":"${f.getDate() + "-"+ f.getMonth()+ "-" +f.getFullYear()}",`+
                      `"session_room":"888-Casiopea",`+
                      `"spin_id":${spin_num},`+
                      `"spin_time":${Date.now()},`+
                      `"spin":${Number(spin)},`+
                      `"bet_id":"",`+
                      `"bet_array":"",`+
                      `"bet_rep":"",`+
                      `"bet_chk":"",`+
                      `"bet_result":"",`+
                      `"bet_bet_type":"",`+
                      `"bet_bet_quantity":""}`

  return JSON.parse(text_dump_JSON);
}




exports.format_spin = format_spin,
exports.sleep = sleep,
exports.randomInt = randomInt
 