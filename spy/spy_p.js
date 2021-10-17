const prompt = require('prompt-sync')({sigint: true});
var estats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]



function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}





function main_loop(){
  
    /**
     *  Automatic Input
     */
    var spin = randomInt(0,36);

    /**
     *  Manual Input
     */
    //var spin = prompt('Introduce Spin: ');

    /**
     *  Programa
     */


    spin = Number(spin);
    estats[spin] = estats[spin] + 1;
    
    
    
    
    console.log(estats.toString() + " - " + spin);
    
    //let bet = prompt('Quieres apostar: Introduce . + Intro ---->  ');
    //console.log(bet);
}
  

setInterval(main_loop, 1);