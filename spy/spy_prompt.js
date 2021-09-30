const prompt = require('prompt-sync')({sigint: true});

 
const { Socket } = require("socket.io");
const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });



//socket.emit('spy_first_connection', "Spy: Spy funcionando en modo test manual"); 





/*

while(1){

// Get user input
let spin = prompt('Spin: ');

  // Convert the string input to a number
spin = Number(spin);
  
socket.emit('spy_spin', `Spy: Spy funcionando  ${spin}  `); 






}*/


async function pp(spin) {
  await socket.emit('spy_spin', `Spy: Spy funcionando  ${spin}  `); 
}







async function ask() {
  
  let spin = prompt('Spin: ');
  spin = Number(spin);
  
  //socket.emit('spy_spin', `Spy: Spy funcionando  ${spin}  `); 
  await pp(spin);  
    
    if (spin<36) {
      ask();
    } else {
      console.log('Your favorite TV Shows:');
    }
};


ask();