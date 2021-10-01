var fs = require('fs');
const readline = require('readline');

/*

const readInterface = readline.createInterface({
    input: fs.createReadStream('2e36_4_14.txt'),
    //output: process.stdout,
    console: false
});

*/

let combi_array = [];

function llenar_array(linia) {

    //console.log(linia);
    
    let v1 = parseInt(linia.substr(0, 1));
    let v2 = parseInt(linia.substr(1, 1));
    let v3 = parseInt(linia.substr(2, 1));
    let v4 = parseInt(linia.substr(3, 1));
    let v5 = parseInt(linia.substr(4, 1));
    let v6 = parseInt(linia.substr(5, 1));
    let v7 = parseInt(linia.substr(6, 1));
    let v8 = parseInt(linia.substr(7, 1));
    let v9 = parseInt(linia.substr(8, 1));
    let v10 = parseInt(linia.substr(9, 1));
    let v11 = parseInt(linia.substr(10, 1));
    let v12 = parseInt(linia.substr(11, 1));
    let v13 = parseInt(linia.substr(12, 1));
    let v14 = parseInt(linia.substr(13, 1));
    let v15 = parseInt(linia.substr(14, 1));
    let v16 = parseInt(linia.substr(15, 1));
    let v17 = parseInt(linia.substr(16, 1));
    let v18 = parseInt(linia.substr(17, 1));
    let v19 = parseInt(linia.substr(18, 1));
    let v20 = parseInt(linia.substr(19, 1));
    let v21 = parseInt(linia.substr(20, 1));
    let v22 = parseInt(linia.substr(21, 1));
    let v23 = parseInt(linia.substr(22, 1));
    let v24 = parseInt(linia.substr(23, 1));
    let v25 = parseInt(linia.substr(24, 1));
    let v26 = parseInt(linia.substr(25, 1));
    let v27 = parseInt(linia.substr(26, 1));
    let v28 = parseInt(linia.substr(27, 1));
    let v29 = parseInt(linia.substr(28, 1));
    let v30 = parseInt(linia.substr(29, 1));
    let v31 = parseInt(linia.substr(30, 1));
    let v32 = parseInt(linia.substr(31, 1));
    let v33 = parseInt(linia.substr(32, 1));
    let v34 = parseInt(linia.substr(33, 1));
    let v35 = parseInt(linia.substr(34, 1));
    let v36 = parseInt(linia.substr(35, 1));
    
    


    combi_array.push([v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v2,v13,v14,v15,v16,v17,v18,v19,v20,v21,v22,v23,v24,v25,v26,v27,v28,v29,v30,v31,v32,v33,v34,v35,v36,0,0,0]);
    
}


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }
  





console.log("Inicio programa test de combinaciones....");

timestamp = Date.now();

/*

readInterface.on('line', function(line) {
    
    llenar_array(line.toString());
    //console.log(combi_array.length);
 
});
*/



function update_array(spin){


    let i = 0;




return combi_array[i];

}















async function processLineByLine() {
    const fileStream = fs.createReadStream('2e36_4_14.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.



      //console.log(`Line from file: ${line}`);
      llenar_array(line.toString());
    
    
    
    
    }



    console.log(combi_array.length);

    timestamp2 = Date.now();

    console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");


    let spin =36;

    const bet = update_array(spin);

    console.log(bet);





  }
  
  processLineByLine();




















