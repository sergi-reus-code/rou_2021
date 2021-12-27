const fs = require('fs')

const utils = require('./utils')

spin_num = 0;
rep = 0;



/**
 * Inicio programa
 */


// Parametros simulación
var iterRep = 38
var iterRepMax = 89000
const file = "38sim.txt"
var spins = []
var iterWin = [1.7,3.2,6,11]
var iterLoose = [-1.9,-7.6,-22.8,-60.8]
var benef = 0




if (fs.existsSync(file)) { fs.unlink(file, function (err) { if (err) throw err; }); }

setInterval(() => {


        var spin = utils.randomInt(0,36);

        spin_num++

        var array = utils.push_array30(spin,iterRep)

        var txt1 = `${spin_num} ; ${spin} ; ${array.toString()} ; ${array.length} ; ${utils.calc_chk(array)}`
        var chk = `${utils.calc_chk(array)}`
        
        if (array.length==iterRep){
          spins[rep]=chk
          
          rep++ 
          fs.appendFileSync(file,chk + "\n");
          console.log(txt1);
          if (rep>4) {
            console.log(spins.toString());
            fs.appendFileSync(file,"\n");
            rep = 0;
            utils.reset_array30()

            if (spin_num > iterRepMax) {

              process.exit()
              
            }
            
          }
        
      
       } 
      
       

}, 5);

