var {sleep, randomInt, } = require('./utils/spy_utils.js');
const io = require("socket.io-client"),
ioClient = io.connect("http://192.168.18.3:8080" , {forceNew: true , query : "spy" }); 

/**
 * 
 * Sistema prompt
 * 
 */

 ioClient.on("from_master_to_spy_bet",(msg)=>{

  console.log("apuesta" + msg);


 })




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




/**
 * 
 * SISTEMA ALEATORIO
 *  |
 */



/*



 //const ioClient = io("http://localhost:8080", {  reconnectionDelayMax: 10000,  auth: {    token: "123"  },  query: {    "my-key": "my-value"  }});




 ioClient.on("from_master_to_spy_bet",(msg)=>{

  console.log("apuesta" + msg);

  
})
*/




/*
function intervalFunc(){


  var data = randomInt(0,36);
 
  console.log(data);

  ioClient.emit("from_spy_to_master_spin", data);

  
}


  setInterval(intervalFunc, 50);

*/