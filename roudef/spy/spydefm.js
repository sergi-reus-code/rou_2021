var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});

const readline = require('readline')
const utils = require('./spy_utils/spy_utils');






// Add a connect listener
ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('DisssssConnected!' + socket.id);
});



//ioClient.emit('CH01', 'me', 'test msg');

ioClient.on('from_master_to_spy_bet', (msg) => {


   // console.log("receiving -> " + JSON.stringify(JSON.parse(msg)));
   // console.log("");
   // console.log("");

});

ioClient.on('from_master_to_spy_stop', (msg) => {


    process.exit();
 
 });




const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   

console.log("Iniciando en modo.... TEST MANUAL (Entrada de datos manual)");
    

    
    setInterval(() => {
        r1.question('Enter A number : ', (num) => {


            if(num<37){

            var msg_out = utils.format_spin(num);

            ioClient.emit('from_spy_to_master_spin',msg_out);
    
            console.log("sending ->   " + JSON.stringify(msg_out));
            } else {
                console.log("MAL!!!!!!");
            }
            
            })
        
    }, 2000);
    
