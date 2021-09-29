const { Socket } = require("socket.io");
const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });

var num_slave = 1;

socket.emit('first_connection_slave', `Slave: Soy slave  ${num_slave} `);

/*
socket.on("messages", function (data) {
    console.log(data);
});


*/

//socket.emit('message', "fgsdfgsdfg");

