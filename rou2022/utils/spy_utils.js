var robot = require("robotjs");
const { windowManager } = require ("node-window-manager");

windowManager.requestAccessibility(); 

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

function getwindow(title) {

    let windows = windowManager.getWindows();
  
    for (let index = 0; index < windows.length; index++) {
      
      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
  
        //console.log(windows[index].getTitle().toLowerCase());
        //console.log(windows[index]);
  
        return windows[index];
      }
    
    }
  
    return null;
    
}



  





 
  exports.sleep = sleep
  exports.randomInt = randomInt
  exports.getwindow = getwindow

