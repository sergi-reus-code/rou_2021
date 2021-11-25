var io = require('socket.io-client');
var ioClient = io.connect('http://localhost:8080', {reconnect: true});

const utils = require('./spy_utils/spy_utils');






// Add a connect listener
ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket) => {
    console.log('DisssssConnected!' + socket.id);
});






ioClient.on('from_master_to_spy_stop', (msg) => {


    process.exit();
 
 });



  
    setInterval(() => {

        var spin = utils.randomInt(0,36);

        var msg_out = utils.format_spin(spin);

        ioClient.emit('from_spy_to_master_spin',msg_out);

        console.log("sending ->   " + JSON.stringify(msg_out));
        
    }, 25);



  


