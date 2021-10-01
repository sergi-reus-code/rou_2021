const prompt = require('prompt-sync')({sigint: true});
const forceSync = require('sync-rpc')
const syncFunction = forceSync(require.resolve('./async'))

// inside your thing that needs to be sync (for whatever reason)
const paramOne = 'foo'
const paramTwo = 'bar'

console.log('start')











while(1){

  let spin = prompt('Spin: ');
  spin = Number(spin);
  const syncReturn = syncFunction(spin, paramTwo)
  
  //retorno de la funcion asincrona sincronizada
  
  console.log('syncReturn', syncReturn)








}

