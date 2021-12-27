const fs = require('fs')
const utils = require('./utils')

/**
 * Variables programa
 */

 const file = "sim.txt"




/**
 * Variables simulación
 */


var spin_num = 0;   //Nº total de spins
var bet = []        //Array con la combinación para apostar





var rep = 0;

var martingala=[19,19,19,32]


var indiceMartingala = 0
var repeticionesTramoMartingala = martingala[indiceMartingala]

var martingalaWin = [6.8,6,6.1,8.9]
var beneficioTotal = 0



var repeticionesTramoMartingalaMax = 89000




var array = []
var repes = [0,0,0,0]




/**
 * Funciones auxiliares
 */

 function restart(){

  bet=[] 
  indiceMartingala = 0
  repeticionesTramoMartingala = martingala[indiceMartingala]
  //beneficioTotal = 0;
  utils.reset_array30();

}





/**
 * Inicio programa
 */

// Borramos archivo txt
if (fs.existsSync(file)) { fs.unlink(file, function (err) { if (err) throw err; }); }







setInterval(() => {

  spin_num++
        
  var spin = utils.randomInt(0,36);

  if (bet.length>2) {
          
    console.log("hay apuesta " + array);
    //fs.appendFileSync(file,array + "\n");
     
    if (array.includes(spin)) {
      //win
      beneficioTotal = beneficioTotal + martingalaWin[indiceMartingala]

      console.log(`WIN ---> ${martingalaWin[indiceMartingala]}  TOTAL ->  ${beneficioTotal}` );

      restart()
              
    }else {
      console.log("LOOSE");
      indiceMartingala++
      bet = []
      repeticionesTramoMartingala = martingala[indiceMartingala]
    }
       
  } else {
    //console.log("no hay apuesta");

  }

  array = utils.push_array30(spin,repeticionesTramoMartingala)
  var txt1 = `${spin_num} ; ${spin} ; ${array.toString()} ; ${array.length} ; ${utils.calc_chk(array)}`
  var chk = `${utils.calc_chk(array)}`

  //console.log(txt1);
        
  if (array.length==repeticionesTramoMartingala){
          
    bet = array;
                    
  } 
     

}, 5);
