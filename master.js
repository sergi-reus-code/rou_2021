var express = require('express');
var app = express();

app.use(express.json());

app.post('/', function(req, res) {
  console.log(req.body.spin);  
  res.send('Hola Mundo!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});


//iniciamos objetos



const database = require('./db_manager/db_manager');
const db_manager = new database('Jim', 37, 'jim@example.com');




async function iniciar_database(){

  var resultado = 0;

  await console.log(db_manager.iniciar_database());
}






iniciar_database();

console.log(db_manager.getUserStats());



