let spy_pool = [];
let slave_pool = [];
let combi_pool = [];


function añadir_slave(socket){

  slave_pool.shift()
  slave_pool.push(socket, 0,0);
  console.log(slave_pool);
 

}


function añadir_spy(socket){

spy_pool.shift();
  spy_pool.push(socket, 0,0);
  console.log(spy_pool);
  
}


  exports.spy_pool = spy_pool,
  
  exports.slave_pool = slave_pool,
  
  exports.combi_pool = combi_pool,

  exports.añadir_slave = añadir_slave,

  exports.añadir_spy = añadir_spy