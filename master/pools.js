let spy_pool = [];
let slave_pool = [];
let combi_pool = [[0,40000000,45000000],[0,5000000,10000000],[0,10000000,15000000]];


function get_combi_limits(){

  for( var i = 0; i < combi_pool.length; i++){ 
    
    if ( combi_pool[i][0] == 0) { 
        combi_pool[i][0] = 1
        return [combi_pool[i][1],combi_pool[i][2]];
    }

  }



}












function añadir_slave(socket){

 

  var limits = get_combi_limits();

  console.log(limits);

  slave_pool.push([socket,limits[0],limits[1]]);

  console.log(`Slave conecting with socket.id : ${socket} || Total Pool-Slaves: ${slave_pool.length}`);
  
  console.log(`Combi inf = : ${limits[0]} || Combi sup = : ${limits[1]}  ||  Total Combis ${limits[2]}`);

  return limits;

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

  console.log(`Slave desconectado de pool con socket.id : ${socket} || Total slaves connected: ${slave_pool.length+1}`);

}

exports.quitar_slave = quitar_slave,
exports.spy_pool = spy_pool,
exports.slave_pool = slave_pool,
exports.añadir_slave = añadir_slave,
exports.añadir_spy = añadir_spy