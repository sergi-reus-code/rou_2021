let combi_pool = [];

function update_combi_pool(data){

  let dump = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];

  var dump2 = dump;
     
  combi_pool.push(dump2);

  for (let index = 0; index < combi_pool.length; index++) {
    
    combi_pool[index][data[1]]=0;
    combi_pool[index][37] = data[0];
    combi_pool[index][38] = combi_pool[index][38] + 1;
    combi_pool[index][39] = combi_pool[index][1]+    //combi_pool[index][0]+   NO SUMO EL 0 
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
    
   

  while(combi_pool[0][39] == 17){
    //degollo
    combi_pool.shift();
  }

  //console.log(combi_pool[0].toString());

}




function check_apuesta(bet) {
   
    
    //console.log(bet.toString());
  
  
  }
  
function get_best_bet() {
  
      if (combi_pool[0][39]<18){

        return ""; 

      }else {

      return combi_pool[0];
  
      }

}
  
function get_chk(bet) {
  
  var res = 0;
  res = (bet[0]*0)+(bet[1]*1)+(bet[2]*2)+(bet[3]*3)+(bet[4]*4)+(bet[5]*5)+(bet[6]*6)+(bet[7]*7)+(bet[8]*8)+(bet[9]*9)
       +(bet[10]*10)+(bet[11]*11)+(bet[12]*12)+(bet[13]*13)+(bet[14]*14)+(bet[15]*15)+(bet[16]*16)+(bet[17]*17)+(bet[18]*18)+(bet[19]*19)+
       +(bet[20]*10)+(bet[21]*21)+(bet[22]*22)+(bet[23]*23)+(bet[24]*24)+(bet[25]*25)+(bet[26]*26)+(bet[27]*27)+(bet[28]*28)+(bet[29]*29)+
       +(bet[30]*30)+(bet[31]*31)+(bet[32]*32)+(bet[33]*33)+(bet[34]*34)+(bet[35]*35)+(bet[36]*36);
  return res

}







exports.update_combi_pool = update_combi_pool
exports.check_apuesta = check_apuesta,
exports.get_best_bet = get_best_bet,
exports.get_chk = get_chk
