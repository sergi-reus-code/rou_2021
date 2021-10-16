var {sleep, combi_array, create_array, check_array, update_array} = require('./utils/slave_utils.js');


  



const start = process.memoryUsage().heapUsed;








    timestamp = Date.now();



    //10.000.000 -> 1032.7 MB -> 14 seg
    //20.000.000 -> 2042.1 MB -> 24 seg
    //30.000.000

    create_array(0,10000000); 
    
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






