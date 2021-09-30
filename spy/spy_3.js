const axios = require("axios");
const prompt = require('prompt-sync')({sigint: true});



const url = "http://localhost:3000/";



const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};






async function ask() {
  
    let spin = prompt('Spin: ');
    spin = Number(spin);
    
    //socket.emit('spy_spin', `Spy: Spy funcionando  ${spin}  `); 
      
      
      if (spin<36) {
        getData(url);
        ask();
      } else {
        console.log('Your favorite TV Shows:');
      }
  };
  
  
  ask();



