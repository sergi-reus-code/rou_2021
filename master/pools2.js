let spy_pool = [];
let combi_pool = [];
var v19 = 0;


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

  console.log(combi_pool[0].toString());

}



function añadir_spy(socket){

  spy_pool.push(socket);
  console.log(`Spy conected with socket.id : ${socket} `);
  
}


function quitar_slave_spy(socket) {
  
  



        spy_pool.splice(i, 1); 
  

  }



  


exports.añadir_spy = añadir_spy,
exports.quitar_slave_spy = quitar_slave_spy,
exports.spy_pool = spy_pool,
exports.update_combi_pool = update_combi_pool

