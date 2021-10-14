const readline = require('readline')
const
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8080");


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
