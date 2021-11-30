var martingala = [0.1,0.2,0.4,0.8,1.6,3.2]; //Martingala pura y dura
var wins = [1.8,1.8,1.8,1.8,1.8,1.8]; //Martingala pura y dura

var repe = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var marti_iter = 0;
var looses = 0;
var win = 0;
var total_win = 0;



function update_marti(bet,spin) {

    var data = JSON.parse(bet);
    
    if (data.bet_id==0){
        
        //No hay bet
        return
    
    } else {
    
        //Hay bet
        if (data.bet_array[spin]==1){    //win

            win = Number(wins[marti_iter]);
            total_win = Number(total_win + win);
            repe[marti_iter]++;

           if (Number.isNaN(win)){
               //Me salgo de martingala ARRUINADO!!!!!
                process.exit()
            }
            
            var txt2 = JSON.stringify(data);
            console.log(txt2);
        
            var txt = `I win with spin -> ${spin}    -> bet_win : ${win}€    -> total_win : ${total_win}€`+"\r"
            
            //EJECUTAR CERRAR TODAS LAS VENTANAS
            
            
            
            
            //process.exit()
            
            win = 0;
            marti_iter = 0;
            looses = 0;

            return

        } else {

            marti_iter++;
            looses++;
            
            var txt2 = JSON.stringify(data);
            console.log(txt2);

            return
        }
    }
    
}


function get_marti() {
    
    return Number(martingala[marti_iter]);

}

exports.get_marti = get_marti,
exports.update_marti = update_marti


















