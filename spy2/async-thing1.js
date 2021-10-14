// async-thing.js file
function asyncFunction() {
    return (paramOne, paramTwo) => {
      // Your async code here












      return delay(2000).then(() => {
        return {
          one: `${paramOne}-value`,
          two: `${paramTwo}-value`,
        }
      })
    }
  }
  

  // Simulate a async promise delay
  function delay(t, v) {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(null, v), t)
    })
  }
  
  module.exports = asyncFunction


