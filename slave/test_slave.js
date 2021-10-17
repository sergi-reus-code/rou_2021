var {sleep, combi_array, create_array, check_array, update_array} = require('./utils/slave_utils.js');


  



const start = process.memoryUsage().heapUsed;








    timestamp = Date.now();



    //10.000.000 -> 1032.7 MB -> 14 seg
    //20.000.000 -> 2042.1 MB -> 24 seg
    //30.000.000 -> 2780.7 MB -> 34 seg
    //40.000.000 -> 3749.8 MB -> 70 seg

    create_array(30000000,78000000); 
    
    const used = (process.memoryUsage().heapUsed - start) / 1024 / 1024;
    console.log(`${Math.round(used * 100) / 100} MB`);
    //console.log(combi_array.length);

    timestamp2 = Date.now();

    console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");

console.log(combi_array.length);



    
    console.log(`Spin : 0`);

    timestamp = Date.now();
        
    //var bet = check_array(25);
    
    timestamp2 = Date.now();
    
    console.log(" ha tardado en recorrer: " , (timestamp2 - timestamp)/1000 , "segundos");





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
