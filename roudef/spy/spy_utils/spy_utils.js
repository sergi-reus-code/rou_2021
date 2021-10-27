var spin_num = 0;





/*
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
 
*/

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

  function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
function format_spin(spin){

  var yourdate =  new Date().toISOString().slice(0, 10);
  spin_num++;

  var f = new Date();
 




  var text_dump_JSON = `{`+
                      `"session_id":1, `+
                      `"session_date":"${f.getDate() + "-"+ f.getMonth()+ "-" +f.getFullYear()}",`+
                      `"session_room":"888-Casiopea",`+
                      `"spin_id":${spin_num},`+
                      `"spin_time":${Date.now()},`+
                      `"spin":${Number(spin)}`+
                      `}`

    //console.log(JSON.parse(text_dump_JSON));

    return JSON.parse(text_dump_JSON);
}






 exports.format_spin = format_spin,
  exports.sleep = sleep,
  exports.randomInt = randomInt
 