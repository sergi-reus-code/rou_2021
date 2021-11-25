var io = require('socket.io-client');
//var ioClient = io.connect('http://localhost:8080', {reconnect: true});

ioClient = io.connect('http://localhost:8080' ,{
  //transports: ['websocket'],
  secure: true,
  'force new connection' : false,
  'reconnect' : true,
});



var prompt = require('prompt-sync')();

const utils = require('./spy_utils/spy_utils');


// Add a connect listener
ioClient.on('connect', () => {
    console.log('Connected!');
});


ioClient.on("disconnect", (socket, reason) => {
    console.log('Desconectado desde master!!!!!!!  ->  ' + socket.id  + " - " + reason);
});



//ioClient.emit('CH01', 'me', 'test msg');


ioClient.on('from_master_to_spy_stop', (msg) => {


    process.exit();
 
 });




function loop() {
    
  /*
  if(ioClient.connected ==false) {
console.log("toy desconectao");

    ioClient= io.connect('http://localhost:8080', {reconnect: true});

  }

*/

    var num = prompt('Spin? ');
    
    if(num<37){

        var msg_out = utils.format_spin(num);

        ioClient.emit('from_spy_to_master_spin',msg_out);

        console.log("sending ->   " + JSON.stringify(msg_out));
    
    } else {
            
        console.log("MAL!!!!!!");
        
    }

    
}


setInterval(() => {loop()},1000)



/*

function submitclick()
{
  var text="hello";
  if(socket.connected ==false) {
    socket= io.connect({'forceNew': true});
    socket.on('connect', function() {
      console.log('Connected!');
    });
  }
}

*/