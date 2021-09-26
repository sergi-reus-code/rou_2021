var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);




app.use(express.json());

app.post('/', function(req, res) {
  console.log(req.body.spin);  
  res.send('Hola Mundo!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

server.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});



var messages = [
  {
    author: "Carlos",
    text: "Hola! que tal?",
  },
  {
    author: "Pepe",
    text: "Muy bien! y tu??",
  },
  {
    author: "Paco",
    text: "Genial!",
  },
];

io.on("connection", function (socket) {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);
});

io.on("message", function (socket) {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);
});






//iniciamos objetos



//const database = require('./db_manager/db_manager');
//const db_manager = new database('Jim', 37, 'jim@example.com');



/*
async function iniciar_database(){

  var resultado = 0;

  await console.log(db_manager.iniciar_database());
}



*/


//iniciar_database();

//console.log(db_manager.getUserStats());

/*

const socket = io("https://example.com"); // the main namespaceconst productSocket = io("https://example.com/product", { forceNew: true }); // the "product" namespaceconst orderSocket = io("https://example.com/order", { forceNew: true }); // the "order" namespace

*/