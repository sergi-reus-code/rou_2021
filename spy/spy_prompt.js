var {sleep, randomInt, } = require('./utils/spy_utils.js');
const io = require("socket.io-client"),
ioClient = io.connect("http://192.168.18.3:8080" , {forceNew: true , query : "spy" }); 

var spins_desde_inicio = 0;


/**
 * 
 * Sistema prompt
 * 
 */





 ioClient.on("from_master_to_spy_bet",(msg)=>{

  data = msg;
  
  console.log(data);

 })


/*

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Crack roulette 2021:> '
});

rl.prompt();

rl.on('line', (line) => {
  
  var spin = Number(line.trim());
  
  switch (spin) {
    case 99 : 
      rl.close();
      break;
    default:
      if(spin<0 || spin>36) {
        console.log(`${spin} -> Ha de estar entre 0 y 36`);
      } else {
        ioClient.emit("from_spy_to_master_spin", line.trim());
        break;
      }
  }
  

}).on('close', () => {
  console.log('Adeu!');
  process.exit(0);
});

*/


/**
 * 
 * SISTEMA ALEATORIO
 *  |
 */





function intervalFunc(){


  var data = [spins_desde_inicio,randomInt(0,36)];

  spins_desde_inicio++;
 
  console.log(data);



  ioClient.emit("from_spy_to_master_spin", data);

  //if (spins_desde_inicio > 150) {process.exit()}


}


  setInterval(intervalFunc, 1000);
