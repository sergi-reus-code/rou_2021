
const {Server} = require("socket.io"),
server = new Server(8080);


// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    socket.on("connection",(msg)=>{
        console.log(msg)
    })
    socket.on("number",(number)=>{
        console.log(number)
        var a= Number(number)
        socket.emit("sum",isNaN(a)?"Please Enter Valid Number":a*a)
        socket.emit("pepe", "papapaap");
    })
    

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
});

