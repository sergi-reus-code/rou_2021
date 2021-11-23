var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});
<<<<<<< HEAD
var prompt = require('prompt-sync')();
=======
>>>>>>> adb45ca602c01d4dd8c685d6ce29f9388225347e

const utils = require('./spy_utils/spy_utils');


// Add a connect listener
ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('Desconectado desde master!!!!!!!  ->  ' + socket.id);
});



//ioClient.emit('CH01', 'me', 'test msg');


ioClient.on('from_master_to_spy_stop', (msg) => {


    process.exit();
 
 });




function loop() {
    

    var num = prompt('Spin? ');
    
    if(num<37){

        var msg_out = utils.format_spin(num);

        ioClient.emit('from_spy_to_master_spin',msg_out);

        console.log("sending ->   " + JSON.stringify(msg_out));
    
    } else {
            
        console.log("MAL!!!!!!");
        
    }

    var sf = prompt('SF? ');


}


setInterval(() => {loop()},500)