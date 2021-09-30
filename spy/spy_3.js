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
console.log('syncReturn', syncReturn)







}

// result after 2 seconds
// { one: `foo-value`, two: `bar-value` }

// Do the rest of your stuff with `syncReturn` value