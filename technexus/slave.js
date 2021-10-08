const io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8080");




ioClient.emit("connection", "pepep");

ioClient.on("pepe",(p)=>{
    console.log("ddf")
})


ioClient.on("sum",(p)=>{
    console.log(p)
})







