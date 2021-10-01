const { Socket } = require("socket.io");
const io = require("socket.io-client");

var socket = io.connect("http://localhost:8080", { forceNew: true });




function asyncFunction() {
    return (paramOne, paramTwo) => {
      // Your async code here


      socket.emit('spy_spin', paramOne); 
      
      socket.on('spy_spin', function (msg) { 
        console.log("dftgdfghdfh" + msg); 
        
        
      });



      return delay(1).then(() => {
        //return {
        //  one: `${paramOne}-value`,
        //  two: `${paramTwo}-value`,
        //}
        return (`Resultado de busqueda en arrays : ${paramOne}` );



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