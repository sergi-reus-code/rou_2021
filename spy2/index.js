const forceSync = require('sync-rpc')
const syncFunction1 = forceSync(require.resolve('./async-thing1'))
const syncFunction2 = forceSync(require.resolve('./async-thing1'))
const syncFunction3 = forceSync(require.resolve('./async-thing1'))
const syncFunction4 = forceSync(require.resolve('./async-thing1'))



// inside your thing that needs to be sync (for whatever reason)
const paramOne = 'foo'
const paramTwo = 'bar'

console.log('start')

while(1){


const syncReturn1 = syncFunction1(paramOne, paramTwo)
console.log('syncReturn', syncReturn1)

const syncReturn2 = syncFunction2(paramOne, paramTwo)
console.log('syncReturn', syncReturn2)

const syncReturn3 = syncFunction3(paramOne, paramTwo)
console.log('syncReturn', syncReturn3)

const syncReturn4 = syncFunction4(paramOne, paramTwo)
console.log('syncReturn', syncReturn4)

// result after 2 seconds
// { one: `foo-value`, two: `bar-value` }

// Do the rest of your stuff with `syncReturn` value

}