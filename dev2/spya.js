
function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

spin_num = 0;

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


combi_array = []


function push_array(spin){

    

console.log(spin);


}













setInterval(() => {
        var spin = randomInt(0,36);
        var msg_out = format_spin(spin);
        console.log("sending ->   " + JSON.stringify(msg_out));
        push_array(msg_out.spin)

        


}, 1000);



  


