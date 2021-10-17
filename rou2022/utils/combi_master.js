let combi_pool = [];

function update_combi_pool(data){

  let dump = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];

  var dump2 = dump;
     
  combi_pool.push(dump2);

  for (let index = 0; index < combi_pool.length; index++) {
    combi_pool[index][data[1]]=0;
    combi_pool[index][37] = data[0];
    combi_pool[index][38] = combi_pool[index][38] + 1;
    combi_pool[index][39] = combi_pool[index][0]+ 
                            combi_pool[index][1]+ 
                            combi_pool[index][2]+ 
                            combi_pool[index][3]+ 
                            combi_pool[index][4]+ 
                            combi_pool[index][5]+ 
                            combi_pool[index][6]+
                            combi_pool[index][7]+
                            combi_pool[index][8]+
                            combi_pool[index][9]+
                            combi_pool[index][10]+
                            combi_pool[index][11]+
                            combi_pool[index][12]+
                            combi_pool[index][13]+
                            combi_pool[index][14]+
                            combi_pool[index][15]+
                            combi_pool[index][16]+
                            combi_pool[index][17]+
                            combi_pool[index][18]+
                            combi_pool[index][19]+
                            combi_pool[index][20]+
                            combi_pool[index][21]+
                            combi_pool[index][22]+
                            combi_pool[index][23]+
                            combi_pool[index][24]+
                            combi_pool[index][25]+
                            combi_pool[index][26]+
                            combi_pool[index][27]+
                            combi_pool[index][28]+
                            combi_pool[index][29]+
                            combi_pool[index][30]+
                            combi_pool[index][31]+
                            combi_pool[index][32]+
                            combi_pool[index][33]+
                            combi_pool[index][34]+
                            combi_pool[index][35]+
                            combi_pool[index][36];
                            combi_pool[index][40] = data[1];

}
    
   

  while(combi_pool[0][39] == 18){
    //degollo
    combi_pool.shift();

  }

  //console.log(combi_pool[0].toString());

}





  
function get_best_bet() {
  
    if(combi_pool[0][39] == 19){    
  
        return combi_pool[0];
    }
    else {

        return false;

    }

}
  

function get_chk(data) {
  
  var chk = 0 

  if (data[0]==1){chk = chk + 1} 
  if (data[1]==1){chk = chk + 2} 
  if (data[2]==1){chk = chk + 3} 
  if (data[3]==1){chk = chk + 4} 
  if (data[4]==1){chk = chk + 5} 
  if (data[5]==1){chk = chk + 6} 
  if (data[6]==1){chk = chk + 7} 
  if (data[7]==1){chk = chk + 8} 
  if (data[8]==1){chk = chk + 9} 
  if (data[9]==1){chk = chk + 10} 
  if (data[10]==1){chk = chk + 11} 
  if (data[11]==1){chk = chk + 12} 
  if (data[12]==1){chk = chk + 13} 
  if (data[13]==1){chk = chk + 14} 
  if (data[14]==1){chk = chk + 15} 
  if (data[15]==1){chk = chk + 16} 
  if (data[16]==1){chk = chk + 17} 
  if (data[17]==1){chk = chk + 18} 
  if (data[18]==1){chk = chk + 19} 
  if (data[19]==1){chk = chk + 20} 
  if (data[20]==1){chk = chk + 21} 
  if (data[21]==1){chk = chk + 22} 
  if (data[22]==1){chk = chk + 23} 
  if (data[23]==1){chk = chk + 24} 
  if (data[24]==1){chk = chk + 25} 
  if (data[25]==1){chk = chk + 26} 
  if (data[26]==1){chk = chk + 27} 
  if (data[27]==1){chk = chk + 28} 
  if (data[28]==1){chk = chk + 29} 
  if (data[29]==1){chk = chk + 30} 
  if (data[30]==1){chk = chk + 31} 
  if (data[31]==1){chk = chk + 32} 
  if (data[32]==1){chk = chk + 33} 
  if (data[33]==1){chk = chk + 34} 
  if (data[34]==1){chk = chk + 35} 
  if (data[35]==1){chk = chk + 36} 
  if (data[36]==1){chk = chk + 37} 

  //console.log(chk);

return chk

}







function hacer_apuesta(){

    

}

exports.update_combi_pool = update_combi_pool
exports.get_best_bet = get_best_bet,
exports.hacer_apuesta = hacer_apuesta,
exports.get_chk = get_chk