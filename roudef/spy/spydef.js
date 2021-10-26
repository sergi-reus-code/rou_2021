//client.js
var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});

//var prompt = require('prompt-sync')({sigint: true});
const readline = require('readline')

















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
    


} else if (process.argv[2] == "testa"){
    
    console.log("Iniciando en modo.... TEST AUTOMATICO (Entrada de datos automatica desde WEB)");
    //setInterval(test_loop, 5);

} else {

    console.log("Iniciando en modo.... MODO NORMAL (Todo automatico)");
    //setInterval(main_loop, 1000);
}
  

