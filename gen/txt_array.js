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
    let v11 = linia.substr(10, 1);
    let v12 = linia.substr(11, 1);
    let v13 = linia.substr(12, 1);
    let v14 = linia.substr(13, 1);
    let v15 = linia.substr(14, 1);
    let v16 = linia.substr(15, 1);
    let v17 = linia.substr(16, 1);
    let v18 = linia.substr(17, 1);
    let v19 = linia.substr(18, 1);
    let v20 = linia.substr(19, 1);
    let v21 = linia.substr(20, 1);
    let v22 = linia.substr(21, 1);
    let v23 = linia.substr(22, 1);
    let v24 = linia.substr(23, 1);
    let v25 = linia.substr(24, 1);
    let v26 = linia.substr(25, 1);
    let v27 = linia.substr(26, 1);
    let v28 = linia.substr(27, 1);
    let v29 = linia.substr(28, 1);
    let v30 = linia.substr(29, 1);
    let v31 = linia.substr(30, 1);
    let v32 = linia.substr(31, 1);
    let v33 = linia.substr(32, 1);
    let v34 = linia.substr(33, 1);
    let v35 = linia.substr(34, 1);
    let v36 = linia.substr(35, 1);
    
    combi_array.push([
        parseInt(v1),
        parseInt(v2),
        parseInt(v3),
        parseInt(v4),
        parseInt(v5),
        parseInt(v6),
        parseInt(v7),
        parseInt(v8),
        parseInt(v9),
        parseInt(v10),
        parseInt(v11),
        parseInt(v12),
        parseInt(v13),
        parseInt(v14),
        parseInt(v15),
        parseInt(v16),
        parseInt(v17),
        parseInt(v18),
        parseInt(v19),
        parseInt(v20),
        parseInt(v21),
        parseInt(v22),
        parseInt(v23),
        parseInt(v24),
        parseInt(v25),
        parseInt(v26),
        parseInt(v27),
        parseInt(v28),
        parseInt(v29),
        parseInt(v30),
        parseInt(v31),
        parseInt(v32),
        parseInt(v33),
        parseInt(v34),
        parseInt(v35),
        parseInt(v36),
        0,0,0]);

}



let combi_array = [];


console.log("Inicio programa test de combinaciones....");

timestamp = Date.now();


readInterface.on('line', function(line) {
    //console.log(line);
    llenar_array(line.toString());
});

console.log(combi_array.length);

timestamp2 = Date.now();

console.log(" ha tardado : " , (timestamp2 - timestamp)/1000 , "segundos");

