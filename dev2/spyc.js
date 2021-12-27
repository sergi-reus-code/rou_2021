const fs = require('fs')
const utils = require('./utils')

spin_num = 0;
rep = 0;



/**
 * Inicio programa
 */


// Parametros simulación
var bet1 = [24,0.2,2.4,-4.8]
var bet2 = [32,2,3.2,-68.8]
var bet3 = [32,20,11.2,-708.8]
var bet0 = []

var iiterRep=[24,32,32,32]
var inn = 0

var iterRep = iiterRep[inn]
var iterRepMax = 89000
const file = "sim.txt"

var iterWin = [12,28,5.6,45.6]

var benef = 0
var array = []
var repes = [0,0,0,0]


if (fs.existsSync(file)) { fs.unlink(file, function (err) { if (err) throw err; }); }


function restart(){

  bet0=[] 
  inn = 0
  iterRep = iiterRep[inn]
  utils.reset_array30();

}




setInterval(() => {

        spin_num++
        
        var spin = utils.randomInt(0,36);

        if (bet0.length>2) {
          
            console.log("hay apuesta " + array);
            //fs.appendFileSync(file,array + "\n");
        
            if (array.includes(spin)) {
              //win

              benef = benef + iterWin[inn]  
              repes[inn] = repes[inn] + 1

              if (inn > 1 ) { 
                
                benef = benef - 344
                restart()
              
              
              }
              
              var text = spin_num + " -> WINS -> " + inn + " - " + repes + " - " + benef;
              
              console.log(text);
              //if (benef > 23 ) { //process.exit() }
              //fs.appendFileSync(file,text + "\n");
              
              
              
              //process.exit()
                /*
              bet0=[] 
              inn = 0
              iterRep = iiterRep[inn]
              utils.reset_array30();
*/
                restart()
              
              
            }else {
               inn++
               bet0 = []
               iterRep = iiterRep[inn]


            }

        
        
        
          } else {

            //console.log("no hay apuesta");

        }



        array = utils.push_array30(spin,iterRep)

        var txt1 = `${spin_num} ; ${spin} ; ${array.toString()} ; ${array.length} ; ${utils.calc_chk(array)}`
        var chk = `${utils.calc_chk(array)}`
        
        if (array.length==iterRep){
          
          bet0 = array;
                    
                
       } 
      
       

}, 5);
