//client.js
var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});

//var prompt = require('prompt-sync')({sigint: true});
const readline = require('readline')
const fs = require('fs');
const utils = require('./spy_utils/spy_utils');
const { SocketAddress } = require('net');





// Add a connect listener
ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('DisssssConnected!' + socket.id);
});



ioClient.emit('CH01', 'me', 'test msg');

ioClient.on('from_master_to_spy_bet', (msg) => {
    console.log(msg);
});




/*

ioClient.on("connect", () => {  
    console.log(socket.id); 

});
ioClient.on("disconnect", () => {  
    console.log(socket.id); 
});

ioClient.on("seq-num", (msg) => console.info(msg));
*/
/*
socket.on("disconnect", (reason) => {  
    if (reason === "io server disconnect") {    
        // the disconnection was initiated by the server, you need to reconnect manually    
        socket.connect();  
    }  // else the socket will automatically try to reconnect
});
*/



















if (process.argv[2] == "testm") {
    
    console.log("Iniciando en modo.... TEST MANUAL (Entrada de datos manual)");
    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
    
    setInterval(() => {
        r1.question('Enter A number : ', (num) => {
            
            ioClient.emit('from_spy_to_master_spin',num);})
        
    }, 1000);
    


} else if (process.argv[2] == "testaf"){
    
    console.log("Iniciando en modo.... TEST AUTOMATICO (Entrada de datos automatica desde WEB)");
    
    const readInterface = readline.createInterface({
        input: fs.createReadStream('/path/to/file'),
        output: process.stdout,
        console: false
    });
       
    
  
    setInterval(() => {

        readInterface.on('line', function(line) {
            console.log(line);
            ioClient.emit('from_spy_to_master_spin',line)
        });
        
    }, 1000);


} else if (process.argv[2] == "testar"){
    
    console.log("Iniciando en modo.... TEST AUTOMATICO (Entrada de datos automatica RANDOM)");
  
  
  
    setInterval(() => {

        var spin = utils.randomInt(0,36);

        var msg = utils.format_spin(spin);

        ioClient.emit('from_spy_to_master_spin',msg);
        
    }, 1000);


} else {

    console.log("Iniciando en modo.... MODO NORMAL (Todo automatico)");
    //setInterval(main_loop, 1000);
}
  

