const { spy_pool , client_pool, combi_pool} = require('./pools');



const
    {Server} = require("socket.io"),
    server = new Server(8080);


// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    socket.on("spy-first",(msg)=>{
        console.log(msg)
    })
    socket.on("number",(number)=>{
        console.log(number)
        var a= Number(number)

        socket.emit("sum",isNaN(a)?"Please Enter Valid Number":a*a)
    })
    

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
});

