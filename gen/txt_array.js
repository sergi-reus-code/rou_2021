var fs = require('fs');
const readline = require('readline');
const readInterface = readline.createInterface({
    input: fs.createReadStream('43375670.txt'),
    //output: process.stdout,
    console: false
});



function llenar_array(linia) {
    
    let v1 = linia.substr(0, 1);
    let v2 = linia.substr(1, 1);
    let v3 = linia.substr(2, 1);
    let v4 = linia.substr(3, 1);
    let v5 = linia.substr(4, 1);
    let v6 = linia.substr(5, 1);
    let v7 = linia.substr(6, 1);
    let v8 = linia.substr(7, 1);
    let v9 = linia.substr(8, 1);
    let v10 = linia.substr(9, 1);
    
    combi_array.push([parseInt(v1),parseInt(v2),parseInt(v3),parseInt(v4),parseInt(v5),parseInt(v6),parseInt(v7),parseInt(v8),parseInt(v9),0,0,0]);

}



let combi_array = [];


console.log("Inicio programa test de combinaciones....");

timestamp = Date.now();


readInterface.on('line', function(line) {
    llenar_array(line.toString());
});

console.log(combi_array.length);

timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");

