//var robot = require("robotjs");
//const combi_master = require ("./master_utils/combi_master");
//const bet_master = require ("./master_utils/bet_master");
//var bet = `{"bet_id":0,"bet_date":"0","bet_time":0,"bet_array":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"bet_quantity":0}`;


const Init = require('./classes/init_class');
const Spy = require('./classes/spy_class');
const Master = require('./classes/master_class');
const Exec = require('./classes/exec_class');
const Log = require('./classes/log_class');
const Gui = require('./classes/gui_class');


/**
* Inicio programa index.js
*/

console.clear();

console.log("Wellcome to Roulette Crack 2022..... ");

const init = new Init();
const spy = new Spy();
const master = new Master();
const exec = new Exec();
const log = new Log();
const gui = new Gui();


/**
 * Abrir firefox / ponerlo en posicion / iniciar ruleta hasta dejar como deseamos
 */

console.log("1_ Iniciando firefox y abriendo Casino 888");
//init.open_browser();




function main_loop() {
    
  var spyspin = spy.get_spin;


  console.log(spyspin);


}



//setInterval(main_loop,1000);



        
        
      
        

   






  











