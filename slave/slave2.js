
const express = require('express');
const app = express();

const SocketIO = require("socket.io");





// Creamos el servidor express

app.set('port', 3001); //para definir variables o lo que sea

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});




const io = SocketIO(server);


io.on('connection', () => {
    console.log("new conection on server", so);

});

