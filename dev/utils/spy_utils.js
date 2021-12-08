var spin_num = 0;

function format_spin(spin){

  if (spin_num==0 || spin_num==1|| spin_num==2) {
    spin = 0;
  }


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




exports.format_spin = format_spin