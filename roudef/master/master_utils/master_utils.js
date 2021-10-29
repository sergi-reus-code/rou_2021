const combi_master = require ("./combi_master");

bet_id=0


/**
 * 
 * @param {*} spin 
 * @returns 
 */

function main_loop(spin){

    

    console.log(spin);

    //HAY APUESTA
    if (spin.bet_id !="") {
        

    
    
    
    
    
    //NO HAY APUESTA
    }else{

        data =JSON.parse(JSON.stringify(spin));
    
        combi_master.update_combi_pool([data.spin_id, data.spin]);
  
        let current_apuesta = combi_master.get_best_bet();
    
        let current_chk = Number(combi_master.get_chk(current_apuesta));
  
   
        if (current_apuesta[38]>17 ){  //>29
      
           
            bet_id++;
            spin.bet_id=bet_id;
            spin.bet_array = current_apuesta;
            spin.bet_rep
            spin.bet_chk=current_chk;
            
            
            var date = current_apuesta + " - " + current_chk +"\r";
            console.log(date);
      
            // poner datos en objeto
  
  }



    }



    /*

    data =JSON.parse(JSON.stringify(spin));
    
    combi_master.update_combi_pool([data.spin_id, data.spin]);
  
    let current_apuesta = combi_master.get_best_bet();
    
    let current_chk = Number(combi_master.get_chk(current_apuesta));
  
   
    if (current_apuesta[38]>17 ){  //>29
      
      var date = current_apuesta + " - " + current_chk +"\r";
      
      console.log(date);
      
      fs.appendFileSync('c:\\combi\\ttt_18.txt',date); 
  
  }
  */
  return spin
  
  
  }



  exports.main_loop = main_loop 