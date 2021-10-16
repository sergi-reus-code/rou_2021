let spy_pool = [];
let slave_pool = [];
let combi_pool = [[0,0,5000000],
                  [0,5000000,10000000],
                  [0,10000000,15000000],
                  [0,15000000,20000000],
                  [0,20000000,25000000],
                  [0,25000000,30000000],
                  [0,30000000,35000000],
                  [0,35000000,40000000],
                  [0,40000000,45000000],
                  [0,45000000,50000000],
                  [0,50000000,55000000],
                  [0,55000000,60000000],
                  [0,60000000,65000000],
                  [0,65000000,70000000],

                
                
                ];


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
  console.log(`Spy conected with socket.id : ${socket} `);
  
}


function quitar_slave_spy(socket) {
  
  for( var i = 0; i < slave_pool.length; i++){ 
    
    if ( slave_pool[i][0] = socket) { 

        slave_pool.splice(i, 1); 
        console.log(`Slave desconectado de pool con socket.id : ${socket} || Total slaves connected: ${slave_pool.length+1}`);

    }

  }

  for( var i = 0; i < spy_pool.length; i++){ 
    
    if ( spy_pool[i][0] = socket) { 

        spy_pool.splice(i, 1); 
        console.log(`Spy desconectado de pool con socket.id : ${socket}`);

    }

  }



  
}

exports.quitar_slave_spy = quitar_slave_spy,
exports.spy_pool = spy_pool,
exports.slave_pool = slave_pool,
exports.añadir_slave = añadir_slave,
exports.añadir_spy = añadir_spy