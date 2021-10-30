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
                      `"spin_id":${spin_num},`+
                      `"spin_date":"${f.getDate() + "-"+ f.getMonth()+ "-" +f.getFullYear()}",`+
                      `"spin_time":${Date.now()},`+
                      `"spin":${Number(spin)}`+
                      `}`;

  return JSON.parse(text_dump_JSON);

}




exports.format_spin = format_spin,
exports.sleep = sleep,
exports.randomInt = randomInt