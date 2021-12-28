combi_array30 = []


function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function push_array30(spin,rep){

    if (!combi_array30.includes(spin))  {
  
      if (combi_array30.length==Number(rep)) {
        combi_array30.pop();
      }
  
      combi_array30.unshift(spin)
  
    } else {
  
      var pos = combi_array30.indexOf(spin);  
      //quitar el numero i poner al principio
      //console.log(spin + " -> " + pos);
      combi_array30.splice(pos,1);
      combi_array30.unshift(spin)
  
    }

    return combi_array30
  
}

function calc_chk(ca){

  var resultado =0;

  ca.forEach(valor => {
      resultado = resultado + valor
  });

/*
    var chk = ca[0]+ca[1]+ca[2]+ca[3]+ca[4]+ca[5]+ca[6]+ca[7]+ca[8]+ca[9]+ca[10]+
    ca[11]+ca[12]+ca[13]+ca[14]+ca[15]+ca[16]+ca[17]+ca[18]+ca[19]+ca[20]+
    ca[21]+ca[22]+ca[23]+ca[24]+ca[25]+ca[26]+ca[27]+ca[28]+ca[29]
    */
    return resultado

}


function reset_array30(){

    combi_array30 = []
   
}

exports.randomInt = randomInt,
exports.push_array30 = push_array30,
exports.calc_chk = calc_chk,
exports.reset_array30 = reset_array30
