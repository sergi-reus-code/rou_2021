//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080', {reconnect: true});

var prompt = require('prompt-sync')({sigint: true});
const readline = require('readline')



// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});
socket.emit('CH01', 'me', 'test msg');


socket.emit('from_spy_to_master_spin', 25);



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



function testm_loop(){

    var value = 0;
    var spin = prompt('enter spin: ', value);

    console.log(spin);
    socket.emit('from_spy_to_master_spin', spin);

}
















if (process.argv[2] == "testm") {
    
    console.log("Iniciando en modo.... TEST MANUAL (Entrada de datos manual)");
    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
    
    setInterval(() => {
        r1.question('Enter A number : ', (num) => {
            
            socket.emit('from_spy_to_master_spin',num);})
        
    }, 1000);
    


} else if (process.argv[2] == "testa"){
    
    console.log("Iniciando en modo.... TEST AUTOMATICO (Entrada de datos automatica desde WEB)");
    //setInterval(test_loop, 5);

} else {

    console.log("Iniciando en modo.... MODO NORMAL (Todo automatico)");
    //setInterval(main_loop, 1000);
}
  

