
pool_slaves = [];

pool_spy = []




const getConfig = () => {
    
  
    for (let i = 0; i < array_slaves.length; i++) {
        if (array_slaves[i][1] ==0 ) {
            array_slaves[i][1] = 1;
            return array_slaves[i];
        }
        
    }
};


exports.pool_slaves = pool_slaves;  
exports.pool_spy = pool_spy;
exports.getConfig = getConfig;
  



