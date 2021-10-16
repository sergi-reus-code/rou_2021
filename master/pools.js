let spy_pool = [];
let slave_pool = [];



function añadir_slave(socket){

  console.log(`Slave conectando con socket.id : ${socket} || Total slaves connected: ${slave_pool.length+1}`);
  slave_pool.push([socket,0,0]);
  
  
}


function añadir_spy(socket){

  spy_pool.push(socket);
    
}

function quitar_slave(socket) {
  
  for( var i = 0; i < slave_pool.length; i++){ 
    
    if ( slave_pool[i][0] = socket) { 

        slave_pool.splice(i, 1); 
    }

  }

  console.log(slave_pool.length);

}

exports.quitar_slave = quitar_slave,
exports.spy_pool = spy_pool,
exports.slave_pool = slave_pool,
exports.añadir_slave = añadir_slave,
exports.añadir_spy = añadir_spy