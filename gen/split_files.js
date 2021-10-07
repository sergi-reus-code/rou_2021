var fs = require('fs');
var fs2 = require('fs'); 

const readline = require('readline');










async function processLineByLine() {
    
    //*********ARCHIVO TO SPLIT***************/

    const file = '47000000'; 
    const tamaño = 45375676;

    //****************************************/
    
    const volume = 0;
    const file_to_split = file + '.txt';
    const file_splited = file + volume + '.txt'
    const fileStream = fs.createReadStream(file_to_split);
    var contador = 0;

    //LINIAS TO SPLIT
    
    if (fs2.existsSync(file_splited)) { fs.unlink(file_splited, function (err) { if (err) throw err; }); }






    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    


    console.log("Inicio programa test de combinaciones....");

    timestamp = Date.now();





    
    for await (const line of rl) {
      
        contador++;
      
        fs2.appendFileSync(file_splited,line)
      
        // Each line in input.txt will be successively available here as `line`.

        

      //console.log(`Line from file: ${line}`);
      //llenar_array(line.toString());
    
    
    
    
    }


    timestamp2 = Date.now();

    console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");
    

  }
  


processLineByLine();




















