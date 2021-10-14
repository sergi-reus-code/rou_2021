const readline = require('readline');
const { task1 , task2, task3} = require('./client_utils');

const io = require("socket.io-client");


task1(1000);



task2(1000);

//const ioClient = io.connect("http://localhost:8080");

task3(011);

/*

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   

setInterval(() => {
    r1.question('Enter A number : ', (num) => {
        
        ioClient.emit("number",num);})
    
}, 1000);

ioClient.on("sum",(p)=>{
    console.log(p)
})


*/