const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });



/*

var messages = [
    {
      author: "Carlossssssss",
      text: "Hola! que talssssssss?",
    },
    {
      author: "Pepesssssss",
      text: "Muy bien! y tusssssssss??",
    },
    {
      author: "Pacosssssssss",
      text: "Genialssssssss!",
    },
  ];


*/


socket.on("messages", function (data) {
    console.log(data);
    
    
  });



//  socket.emit("message", messages);
  




/*


const express = require('express');
const app = express();

const SocketIO = require("socket.io");



// Creamos el servidor express

app.set('port', 3000); //para definir variables o lo que sea

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});




const io = SocketIO(server);


io.on('connection', () => {
    console.log("new conection on server", so);

});

*/