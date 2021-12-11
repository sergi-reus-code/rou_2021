var robot = require("robotjs");
var Jimp = require('jimp');

const { windowManager } = require ("node-window-manager");

windowManager.requestAccessibility(); 


function getwindow(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      console.log(windows[index].getTitle().toLowerCase());
      console.log(index);

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        console.log(index);
        return windows[27];
      }
    
    }
  
    return null;
    
}


function getwindow_888(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("888")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
}

function getwindow_PS(title) {

  let windows = windowManager.getWindows();

  for (let index = 0; index < windows.length; index++) {

    const finestra = windows[index].getTitle().toLowerCase().toString();

    if(finestra.includes("pokerstars")){

      console.log(windows[index].getTitle().toLowerCase());
      console.log(index);
      return windows[index];
    }

    if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
      
      return windows[index];
    }
  
  }

  return null;
  
}







function getwindow_spy(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("spy")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
}


function getwindow_masterdef(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("masterdef")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
}


function getwindow_exec(title) {

    let windows = windowManager.getWindows();

    for (let index = 0; index < windows.length; index++) {

      const finestra = windows[index].getTitle().toLowerCase().toString();

      if(finestra.includes("exec")){

        console.log(windows[index].getTitle().toLowerCase());
        console.log(index);
        return windows[index];
      }

      if(windows[index].getTitle().toLowerCase() == title.toLowerCase()){
        
        return windows[index];
      }
    
    }
  
    return null;
    
}


















 

exports.getwindow = getwindow,
exports.getwindow_888 = getwindow_888,
exports.getwindow_PS = getwindow_PS,
exports.getwindow_spy = getwindow_spy,
exports.getwindow_masterdef = getwindow_masterdef,
exports.getwindow_exec = getwindow_exec


